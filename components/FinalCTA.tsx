import { PurchaseButton } from "./PurchaseButton";
import { SectionLabel } from "./SectionLabel";

export function FinalCTA() {
  return (
    <section className="relative bg-ink-900 text-cream-50 py-section overflow-hidden grain">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-burgundy-500/20 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-300/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div className="reveal">
          <SectionLabel dark>Final Decision</SectionLabel>
        </div>

        <h2 className="reveal reveal-delay-1 mt-6 font-serif text-display-sm font-semibold text-cream-50 text-balance leading-[1.05]">
          Your skill isn&apos;t the problem.
          <br />
          <span className="text-gold-200 italic">The system is.</span>
        </h2>

        <p className="reveal reveal-delay-2 mt-8 text-lg text-cream-100/65 max-w-2xl mx-auto leading-relaxed">
          You can keep waiting for clients to find you, or you can build a
          pipeline that works every month. The Freelancer Client System gives
          you the framework and the tools to start this week.
        </p>

        <div className="reveal reveal-delay-3 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <PurchaseButton tier="tier2" variant="dark" size="lg">
            Get the Complete System — $47
          </PurchaseButton>
          <PurchaseButton
            tier="tier1"
            variant="ghost"
            size="lg"
            className="!bg-transparent !text-cream-50 border border-cream-100/25 hover:!text-gold-200 hover:border-gold-200/60"
          >
            Start with Tier 1 — $27
          </PurchaseButton>
        </div>

        <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-cream-100/75">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gold-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Secure Gumroad checkout
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gold-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Instant digital delivery
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gold-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            One payment · Lifetime access
          </div>
        </div>
      </div>
    </section>
  );
}
