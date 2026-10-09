"use client";

import { useEffect, useState } from "react";

type SalesResponse = {
  enabled: boolean;
  lastSaleAt?: string | null;
};

function formatRelativeTime(timestamp: string, now: number) {
  const elapsedSeconds = Math.round((Date.parse(timestamp) - now) / 1000);
  const units: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
  ];

  const formatter = new Intl.RelativeTimeFormat(undefined, {
    numeric: "auto",
  });
  for (const [unit, seconds] of units) {
    if (Math.abs(elapsedSeconds) >= seconds) {
      return formatter.format(Math.round(elapsedSeconds / seconds), unit);
    }
  }

  return "just now";
}

export function LiveSalesBanner() {
  const [lastSaleAt, setLastSaleAt] = useState<string | null>(null);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    let mounted = true;

    const refreshSales = async () => {
      try {
        const response = await fetch("/api/gumroad-sales");
        if (!response.ok) {
          throw new Error(`Sales feed returned ${response.status}`);
        }

        const data = (await response.json()) as SalesResponse;
        if (mounted && data.enabled) {
          setLastSaleAt(data.lastSaleAt ?? null);
          setNow(Date.now());
        }
      } catch (error) {
        console.error("Unable to refresh verified Gumroad sales", error);
      }
    };

    void refreshSales();
    const intervalId = window.setInterval(() => {
      void refreshSales();
    }, 60_000);

    return () => {
      mounted = false;
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-x-2 bg-burgundy-950 px-4 py-2 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-cream-100/85 sm:text-xs sm:tracking-[0.18em]"
      aria-live="polite"
    >
      {lastSaleAt ? (
        <>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Latest verified purchase {formatRelativeTime(lastSaleAt, now)}
        </>
      ) : (
        <>
          Instant digital delivery
          <span className="text-gold-300" aria-hidden="true">
            ·
          </span>
          One-time payment
        </>
      )}
      <a
        href="#pricing"
        className="inline-flex items-center gap-1 font-semibold text-gold-200 transition-colors hover:text-cream-50"
      >
        View plans <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
