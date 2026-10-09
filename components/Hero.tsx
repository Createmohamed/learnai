import { PurchaseButton } from "./PurchaseButton";
import { SectionLabel } from "./SectionLabel";

function ProductVisual() {
  return (
    <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
      {/* Ambient glow */}
      <div className="absolute inset-0 radial-glow blur-3xl scale-110" />

      {/* Main book - center */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] aspect-[3/4] rounded-xl shadow-premium animate-float z-30"
        style={{
          background:
            "linear-gradient(145deg, #5C1C27 0%, #3A0F17 50%, #1F070C 100%)",
        }}
      >
        <div className="absolute inset-0 rounded-xl p-6 flex flex-col justify-between overflow-hidden">
          {/* Decorative top band */}
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-md bg-gold-300/20 border border-gold-300/30 flex items-center justify-center">
              <span className="font-serif text-gold-200 text-sm font-semibold">
                L
              </span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-gold-200/70">
              System
            </div>
          </div>

          {/* Title */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold-200/60 mb-2">
              LearnAI
            </div>
            <h3 className="font-serif text-cream-50 text-xl sm:text-2xl font-semibold leading-tight">
              Freelancer
              <br />
              Client
              <br />
              <span className="text-gold-200 italic">System</span>
            </h3>
          </div>

          {/* Bottom */}
          <div className="flex items-end justify-between">
            <div className="w-12 h-px bg-gold-300/40" />
            <div className="text-[9px] text-gold-200/50 uppercase tracking-widest">
              Complete Edition
            </div>
          </div>
        </div>

        {/* Book spine effect */}
        <div
          className="absolute left-0 top-0 bottom-0 w-2 rounded-l-xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Templates card - top left */}
      <div
        className="absolute left-[4%] top-[10%] w-[34%] rounded-lg shadow-card card-hover animate-float-slow z-20"
        style={{
          background:
            "linear-gradient(145deg, #F5E8E8 0%, #E8C8C8 100%)",
          animationDelay: "1s",
        }}
      >
        <div className="p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded bg-burgundy-500/10 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-burgundy-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <span className="text-[10px] font-semibold text-burgundy-700 uppercase tracking-wider">
              Templates
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="h-1 bg-burgundy-500/20 rounded-full w-full" />
            <div className="h-1 bg-burgundy-500/15 rounded-full w-4/5" />
            <div className="h-1 bg-burgundy-500/15 rounded-full w-3/5" />
          </div>
        </div>
      </div>

      {/* Prompts card - right */}
      <div
        className="absolute right-[2%] top-[22%] w-[30%] rounded-lg shadow-card card-hover animate-float z-20"
        style={{
          background: "linear-gradient(145deg, #8B2D3C 0%, #5C1C27 100%)",
          animationDelay: "2s",
        }}
      >
        <div className="p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded bg-cream-50/10 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-gold-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <span className="text-[10px] font-semibold text-gold-200 uppercase tracking-wider">
              Prompts
            </span>
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-cream-50/20 rounded-full w-full" />
            <div className="h-1 bg-cream-50/15 rounded-full w-3/4" />
          </div>
        </div>
      </div>

      {/* Sales resources - bottom left */}
      <div
        className="absolute left-[8%] bottom-[14%] w-[32%] rounded-lg shadow-card card-hover animate-float z-20"
        style={{
          background: "linear-gradient(145deg, #4A151E 0%, #2D0B11 100%)",
          animationDelay: "0.5s",
        }}
      >
        <div className="p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded bg-gold-300/20 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-gold-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <span className="text-[10px] font-semibold text-gold-200 uppercase tracking-wider">
              Sales
            </span>
          </div>
          <div className="flex items-end gap-1 h-6">
            <div className="flex-1 bg-gold-300/30 rounded-sm h-1/3" />
            <div className="flex-1 bg-gold-300/40 rounded-sm h-2/3" />
            <div className="flex-1 bg-gold-300/50 rounded-sm h-full" />
            <div className="flex-1 bg-gold-300/35 rounded-sm h-1/2" />
          </div>
        </div>
      </div>

      {/* README card - bottom right */}
      <div
        className="absolute right-[6%] bottom-[8%] w-[28%] rounded-lg shadow-card card-hover animate-float-slow z-20 border border-cream-100/20"
        style={{
          background: "rgba(14, 6, 8, 0.85)",
          backdropFilter: "blur(10px)",
          animationDelay: "1.5s",
        }}
      >
        <div className="p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-burgundy-400 animate-shimmer" />
            <span className="text-[9px] font-mono text-cream-100/70">
              README.md
            </span>
          </div>
          <div className="space-y-1 font-mono text-[8px] text-cream-100/40">
            <div># System Guide</div>
            <div>## Getting Started</div>
            <div>## Implementation</div>
          </div>
        </div>
      </div>

      {/* Decorative ring */}
      <div className="absolute inset-8 rounded-full border border-gold-300/10 z-0" />
      <div className="absolute inset-16 rounded-full border border-burgundy-500/10 z-0" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen pt-36 pb-20 overflow-hidden grain bg-gradient-to-b from-burgundy-950 via-burgundy-900 to-burgundy-950">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-burgundy-500/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-300/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div className="relative z-10">
            <div className="reveal">
              <SectionLabel dark>LearnAI · Digital System</SectionLabel>
            </div>

            <h1 className="reveal reveal-delay-1 mt-6 font-serif text-display font-semibold text-cream-50 text-balance leading-[1.02]">
              Stop waiting
              <br />
              for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-gold-200 italic">
                  clients.
                </span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-gold-300/25 -z-0 rounded-sm" />
              </span>
              <br />
              Build a system
              <br />
              that gets them.
            </h1>

            <p className="reveal reveal-delay-2 mt-8 text-lg text-cream-100/75 max-w-xl leading-relaxed">
              A practical system for freelancers to find prospects, start
              conversations, qualify opportunities, close projects, and build a
              repeatable client pipeline. No fluff. Just a process that works.
            </p>

            <div className="reveal reveal-delay-3 mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <PurchaseButton tier="tier2" variant="primary" size="lg">
                Get the Complete System — $47
              </PurchaseButton>
              <a
                href="#inside"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-cream-100/85 hover:text-gold-200 transition-colors duration-300 group"
              >
                See What&apos;s Inside
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>

            <div className="reveal reveal-delay-4 mt-10 flex items-center gap-6 text-xs text-cream-100/65">
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

          {/* Right - Product Visual */}
          <div className="reveal reveal-delay-2 relative">
            <ProductVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
