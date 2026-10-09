import { PurchaseButton } from "./PurchaseButton";
import { SectionLabel } from "./SectionLabel";

const tier1Features = [
  "Freelancer Client System Book",
  "Extras",
  "README.md",
  "Templates",
];

const tier2AdditionalFeatures = [
  "Everything in Tier 1",
  "Book — PDF format",
  "Book — HTML format",
  "Client Acquisition Prompts",
  "Sales Resources",
];

const comparisonRows = [
  { feature: "Core System Book", tier1: true, tier2: true },
  { feature: "Templates", tier1: true, tier2: true },
  { feature: "README.md & Extras", tier1: true, tier2: true },
  { feature: "PDF Book format", tier1: false, tier2: true },
  { feature: "HTML Book format", tier1: false, tier2: true },
  { feature: "Client Acquisition Prompts", tier1: false, tier2: true },
  { feature: "Sales Resources", tier1: false, tier2: true },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-cream-50 py-section overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-burgundy-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal">
            <SectionLabel>The Offer</SectionLabel>
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 font-serif text-h2 font-semibold text-ink-900 text-balance">
            Choose your level.
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-ink-900/65 text-lg leading-relaxed">
            Start with the foundation, or get the complete system with
            everything you need to execute immediately.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto items-stretch">
          {/* Tier 1 */}
          <div className="reveal lg:col-span-2 relative bg-cream-50 rounded-2xl p-8 sm:p-10 hairline flex flex-col">
            <div className="text-[11px] uppercase tracking-[0.22em] text-burgundy-500/80 font-semibold mb-3">
              Tier 01
            </div>
            <h3 className="font-serif text-2xl font-semibold text-ink-900">
              The Foundation
            </h3>
            <p className="mt-3 text-sm text-ink-900/60 leading-relaxed">
              The core system and essential templates. Start here if you want
              the framework and prefer to build your own execution tools.
            </p>

            <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <s className="font-serif text-4xl font-medium leading-none text-ink-900/45 decoration-burgundy-500/75 decoration-2">
                $97
              </s>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl font-semibold text-ink-900">
                  $27
                </span>
                <span className="text-ink-900/50 text-sm">one-time</span>
              </div>
            </div>

            <ul className="mt-8 space-y-3.5 flex-1">
              {tier1Features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-4 h-4 text-burgundy-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-ink-900/80">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-burgundy-900/10">
              <PurchaseButton
                tier="tier1"
                variant="secondary"
                size="lg"
                className="w-full"
              >
                Get Tier 1
              </PurchaseButton>
            </div>
          </div>

          {/* Tier 2 - Recommended */}
          <div className="reveal reveal-delay-1 lg:col-span-3 relative bg-gradient-to-br from-burgundy-500 via-burgundy-600 to-burgundy-800 rounded-2xl p-8 sm:p-10 text-cream-50 shadow-premium flex flex-col overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-300/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 radial-glow opacity-40" />

            {/* Recommended badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-gold-300 text-burgundy-900 text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-bl-xl">
                Recommended
              </div>
            </div>

            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold-200/90 font-semibold mb-3">
                Tier 02
              </div>
              <h3 className="font-serif text-3xl font-semibold text-cream-50">
                The Complete System
              </h3>
              <p className="mt-3 text-sm text-cream-100/75 leading-relaxed max-w-md">
                Everything. The full framework in multiple formats plus the
                prompts and sales resources to execute immediately. This is the
                complete option.
              </p>

              <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <s className="font-serif text-4xl font-medium leading-none text-cream-50/55 decoration-gold-200/80 decoration-2">
                  $197
                </s>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-6xl font-semibold text-cream-50">
                    $47
                  </span>
                  <span className="text-cream-100/60 text-sm">one-time</span>
                </div>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
                {tier2AdditionalFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-gold-200 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-cream-100/90">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Value statement */}
              <div className="mt-8 p-5 rounded-xl bg-cream-50/10 backdrop-blur-sm border border-cream-50/10">
                <p className="text-sm text-cream-100/85 leading-relaxed">
                  <span className="font-semibold text-gold-200">
                    The complete option.
                  </span>{" "}
                  You get the thinking, the formats, and the execution tools —
                  so you can go from reading to closing in the same week.
                </p>
              </div>

              <div className="mt-8">
                <PurchaseButton
                  tier="tier2"
                  variant="dark"
                  size="lg"
                  className="w-full"
                >
                  Get the Complete System
                </PurchaseButton>
                <p className="mt-3 text-center text-xs text-cream-100/55">
                  Secure checkout · Instant delivery · One payment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="reveal mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl font-semibold text-ink-900">
              Side-by-side
            </h3>
          </div>

          <div className="rounded-2xl overflow-hidden hairline">
            {/* Header */}
            <div className="grid grid-cols-3 bg-cream-100 text-sm font-semibold">
              <div className="p-5 text-ink-900/70">Feature</div>
              <div className="p-5 text-center text-burgundy-700">
                Foundation
                <div className="text-xs font-normal text-ink-900/50 mt-0.5">
                  $27
                </div>
              </div>
              <div className="p-5 text-center bg-burgundy-500 text-cream-50 rounded-tl-xl">
                Complete
                <div className="text-xs font-normal text-cream-100/70 mt-0.5">
                  $47 · Recommended
                </div>
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 text-sm ${
                  index % 2 === 0 ? "bg-cream-50" : "bg-cream-100/50"
                }`}
              >
                <div className="p-4 sm:p-5 text-ink-900/80 border-t border-burgundy-900/5">
                  {row.feature}
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-center border-t border-burgundy-900/5">
                  {row.tier1 ? (
                    <svg
                      className="w-5 h-5 text-burgundy-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span className="text-ink-900/25">—</span>
                  )}
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-center border-t border-burgundy-900/5 bg-burgundy-500/[0.03]">
                  {row.tier2 ? (
                    <svg
                      className="w-5 h-5 text-burgundy-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span className="text-ink-900/25">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
