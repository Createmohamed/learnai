import { NextResponse } from "next/server";
import { unstable_cache } from "next/cache";

export const dynamic = "force-dynamic";

type GumroadSale = {
  sale_timestamp?: unknown;
  created_at?: unknown;
  refunded?: unknown;
  is_test?: unknown;
};

type ProductSalesResult =
  | { ok: true; sales: GumroadSale[] }
  | { ok: false; response: NextResponse };

function isGumroadSale(sale: unknown): sale is GumroadSale {
  return typeof sale === "object" && sale !== null && !Array.isArray(sale);
}

function isGumroadSalesPayload(
  data: unknown,
): data is { success: true; sales: unknown[] } {
  return (
    typeof data === "object" &&
    data !== null &&
    "success" in data &&
    "sales" in data &&
    data.success === true &&
    Array.isArray(data.sales)
  );
}

function failureResponse() {
  return NextResponse.json(
    { error: "Sales data is temporarily unavailable." },
    { status: 502 },
  );
}

async function getProductSales(
  productId: string,
  accessToken: string,
): Promise<ProductSalesResult> {
  const fetchSales = unstable_cache(
    async () => {
      let response: Response;
      try {
        const salesUrl = new URL("https://api.gumroad.com/v2/sales");
        salesUrl.searchParams.set("access_token", accessToken);
        salesUrl.searchParams.set("product_id", productId);
        response = await fetch(salesUrl, {
          method: "GET",
          cache: "no-store",
        });
      } catch {
        console.error("Gumroad sales API request failed");
        throw new Error("Gumroad sales API request failed");
      }

      if (!response.ok) {
        console.error("Gumroad sales API returned", response.status);
        throw new Error("Gumroad sales API returned an error");
      }

      let data: unknown;
      try {
        data = await response.json();
      } catch {
        console.error("Gumroad sales API returned invalid JSON");
        throw new Error("Gumroad sales API returned invalid JSON");
      }

      if (!isGumroadSalesPayload(data)) {
        console.error("Gumroad sales API returned an invalid response");
        throw new Error("Gumroad sales API returned an invalid response");
      }

      return data.sales.filter(isGumroadSale);
    },
    ["gumroad-sales-v1", productId],
    { revalidate: 60 },
  );

  try {
    return { ok: true, sales: await fetchSales() };
  } catch {
    return { ok: false, response: failureResponse() };
  }
}

export async function GET() {
  const accessToken = process.env.GUMROAD_ACCESS_TOKEN;
  const productIds = (process.env.GUMROAD_PRODUCT_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  if (!accessToken || productIds.length === 0) {
    return NextResponse.json({ enabled: false });
  }

  const results = await Promise.all(
    productIds.map((productId) => getProductSales(productId, accessToken)),
  );

  const failure = results.find((result) => !result.ok);
  if (failure && !failure.ok) {
    return failure.response;
  }

  const sales = results.flatMap((result) =>
    result.ok ? result.sales : [],
  );
  const latestSaleAt = sales
    .filter((sale) => sale.refunded !== true && sale.is_test !== true)
    .map((sale) => sale.sale_timestamp ?? sale.created_at)
    .filter((timestamp): timestamp is string => typeof timestamp === "string")
    .filter((timestamp) => Number.isFinite(Date.parse(timestamp)))
    .sort(
      (left, right) => Date.parse(right) - Date.parse(left),
    )[0];

  return NextResponse.json(
    {
      enabled: true,
      lastSaleAt: latestSaleAt ?? null,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    },
  );
}
