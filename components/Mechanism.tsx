import { SectionLabel } from "./SectionLabel";

const steps = [
  {
    key: "FIND",
    title: "Find Prospects",
    description:
      "Identify exactly where your ideal clients live online and how to surface them consistently. No more guessing who to reach.",
    detail: "Where they are · Who to target · How to filter",
  },
  {
    key: "APPROACH",
    title: "Start Conversations",
    description:
      "Open dialogue that gets replies. Specific message frameworks, subject lines, and angles that feel human, not salesy.",
    detail: "First message · Follow-ups · Tone & structure",
  },
  {
    key: "QUALIFY",
    title: "Qualify Opportunities",
    description:
      "Separate real buyers from tire-kickers. A clear framework to assess fit, budget, urgency, and decision authority early.",
    detail: "Fit check · Budget signals · Decision process",
  },
  {
    key: "CLOSE",
    title: "Close Projects",
    description:
      "Run the sales conversation, present proposals, handle price questions, and turn interest into signed agreements.",
    detail: "Discovery · Pricing · Proposals · Objections",
  },
  {
    key: "DELIVER",
    title: "Deliver & Impress",
    description:
      "Onboard smoothly, set expectations, and deliver work that turns clients into references and repeat business.",
    detail: "Onboarding · Communication · Handover",
  },
  {
    key: "RETAIN",
    title: "Retain & Expand",
    description:
      "Turn one project into ongoing work, referrals, and a pipeline that compounds instead of resetting every month.",
    detail: "Retainers · Referrals · Expansion revenue",
  },
];

export function Mechanism() {
  return (
    <section
      id="mechanism"
      className="relative bg-cream-100 py-section overflow-hidden"
    >
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #3A0F17 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal">
            <SectionLabel>The Mechanism</SectionLabel>
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 font-serif text-h2 font-semibold text-ink-900 text-balance">
            Six stages. One system.
            <br />
            A pipeline that compounds.
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-ink-900/65 text-lg leading-relaxed">
            Every stage connects to the next. When one part improves, the whole
            system gets better. This is how you stop restarting every month.
          </p>
        </div>

        {/* Timeline flow */}
        <div className="mt-20 relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-burgundy-500/30 to-transparent" />

          <div className="grid lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.key}
                className={`reveal reveal-delay-${Math.min(index + 1, 5)} relative`}
              >
                {/* Stage node */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-burgundy-500 text-cream-50 flex items-center justify-center font-serif text-sm font-semibold shadow-premium relative z-10">
                      {index + 1}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-burgundy-500/30 blur-lg scale-150" />
                  </div>

                  <div className="lg:mt-6 flex-1">
                    <div className="text-[10px] font-bold tracking-[0.2em] text-burgundy-500 uppercase mb-1.5">
                      {step.key}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-ink-900 leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-900/65 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-burgundy-900/10 text-[11px] uppercase tracking-wider text-ink-900/45 font-medium">
                      {step.detail}
                    </div>
                  </div>
                </div>

                {/* Arrow between items - desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 -right-2 z-20 text-burgundy-500/40">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="reveal mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-burgundy-500 to-burgundy-700 text-cream-50 text-center shadow-premium relative overflow-hidden">
          <div className="absolute inset-0 radial-glow opacity-50" />
          <div className="relative">
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-balance leading-tight">
              Work the system once, and it works for you{" "}
              <span className="italic text-gold-200">every month after.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
