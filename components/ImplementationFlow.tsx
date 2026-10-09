import { SectionLabel } from "./SectionLabel";

const flowSteps = [
  {
    week: "Week 1",
    title: "Map & Setup",
    description:
      "Define your ideal client, map your channels, and set up your tracking system. Know exactly who you're going after and where.",
  },
  {
    week: "Week 2",
    title: "Build Your Outreach",
    description:
      "Assemble your first messages and sequences using the templates and prompts. Get comfortable with the tone and structure.",
  },
  {
    week: "Week 3",
    title: "Start Conversations",
    description:
      "Send your first batch, track replies, and begin qualifying. The system is now running and producing real interactions.",
  },
  {
    week: "Week 4+",
    title: "Close & Compound",
    description:
      "Run discovery calls, send proposals, close work. Each cycle improves your pipeline and your confidence.",
  },
];

export function ImplementationFlow() {
  return (
    <section className="relative bg-cream-100 py-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal">
            <SectionLabel>Implementation</SectionLabel>
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 font-serif text-h2 font-semibold text-ink-900 text-balance">
            How to put it into practice.
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-ink-900/65 text-lg leading-relaxed">
            A clear sequence so you don&apos;t just consume — you actually build.
            Work through it once and you&apos;ll have a live pipeline.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-20 relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-burgundy-500/40 via-burgundy-500/30 to-transparent sm:-translate-x-px" />

          <div className="space-y-12 sm:space-y-16">
            {flowSteps.map((step, index) => (
              <div
                key={index}
                className={`reveal reveal-delay-${Math.min(index + 1, 4)} relative sm:grid sm:grid-cols-2 sm:gap-12 items-center ${
                  index % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cream-100 border-2 border-burgundy-500 flex items-center justify-center z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-burgundy-500" />
                </div>

                {/* Content */}
                <div
                  className={`pl-16 sm:pl-0 ${
                    index % 2 === 0 ? "sm:pr-16 sm:text-right" : "sm:pl-16"
                  }`}
                >
                  <div className="inline-block text-[11px] uppercase tracking-[0.22em] text-burgundy-500 font-semibold mb-2">
                    {step.week}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-ink-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-ink-900/65 leading-relaxed max-w-md sm:max-w-none">
                    {step.description}
                  </p>
                </div>

                {/* Empty side for alternating layout */}
                <div className="hidden sm:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
