import { SectionLabel } from "./SectionLabel";

const bookChapters = [
  "The Pipeline Mindset",
  "Finding Your Prospect Pool",
  "Outreach That Gets Replies",
  "The Qualification Framework",
  "Running the Sales Conversation",
  "Pricing & Proposals",
  "Onboarding & Delivery",
  "Retention & Expansion",
];

const templateItems = [
  { name: "Outreach templates", count: "12+" },
  { name: "Follow-up sequences", count: "5" },
  { name: "Proposal template", count: "1" },
  { name: "Onboarding checklist", count: "1" },
  { name: "Project brief", count: "1" },
];

const promptItems = [
  "Ideal client profile generator",
  "Outreach message writer",
  "Follow-up sequence builder",
  "Discovery call prep",
  "Objection handler",
  "Pricing strategist",
];

const salesItems = [
  "Discovery call script",
  "Price conversation guide",
  "Objection handling sheet",
  "Scope-creep boundary script",
  "Referral request templates",
];

export function WhatsInside() {
  return (
    <section
      id="inside"
      className="relative bg-burgundy-900 text-cream-50 py-section overflow-hidden grain"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-burgundy-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold-300/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal">
            <SectionLabel dark>What&apos;s Inside</SectionLabel>
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 font-serif text-h2 font-semibold text-cream-50 text-balance">
            Everything you need to build
            <br />
            a working client pipeline.
          </h2>
        </div>

        {/* Book Preview - Asymmetric layout */}
        <div className="mt-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 reveal">
            {/* Book mockup */}
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div
                className="aspect-[3/4] rounded-xl shadow-premium p-8 flex flex-col justify-between relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(145deg, #8B2D3C 0%, #4A151E 70%, #2D0B11 100%)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-md bg-gold-300/15 border border-gold-300/25 flex items-center justify-center">
                    <span className="font-serif text-gold-200 text-base font-semibold">
                      L
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-200/60">
                    The Book
                  </span>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold-200/60 mb-3">
                    LearnAI
                  </div>
                  <h3 className="font-serif text-cream-50 text-3xl font-semibold leading-[1.1]">
                    Freelancer
                    <br />
                    Client
                    <br />
                    <span className="text-gold-200 italic">System</span>
                  </h3>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase tracking-widest text-gold-200/50">
                      Chapters
                    </div>
                    <div className="font-serif text-xl text-cream-50">08</div>
                  </div>
                  <div className="w-16 h-px bg-gold-300/30" />
                </div>

                {/* Spine */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-2 rounded-l-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,0.35) 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* Shadow */}
              <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/40 blur-2xl rounded-full -z-10" />
            </div>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-2">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold-200/80 font-semibold mb-4">
              The Book · Core Framework
            </div>
            <h3 className="font-serif text-3xl font-semibold text-cream-50 mb-8">
              Eight chapters. One complete system.
            </h3>

            <div className="grid sm:grid-cols-2 gap-px bg-cream-100/10 rounded-xl overflow-hidden hairline-dark">
              {bookChapters.map((chapter, index) => (
                <div
                  key={index}
                  className="bg-burgundy-900 p-5 flex items-center gap-4 hover:bg-burgundy-800/60 transition-colors"
                >
                  <span className="font-serif text-gold-200/80 text-sm w-8 flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-cream-100/90 text-sm">{chapter}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-cream-100/55 text-sm">
              Available in PDF and HTML formats in Tier 2.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 h-px bg-gradient-to-r from-transparent via-cream-100/15 to-transparent" />

        {/* Templates, Prompts, Sales Resources - 3 column showcase */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Templates */}
          <div className="reveal bg-burgundy-800/40 backdrop-blur-sm rounded-2xl p-8 hairline-dark card-hover">
            <div className="w-12 h-12 rounded-xl bg-cream-50/10 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-gold-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold-200/70 font-semibold mb-2">
              Templates
            </div>
            <h3 className="font-serif text-2xl font-semibold text-cream-50 mb-6">
              Ready-to-use files
            </h3>
            <ul className="space-y-3">
              {templateItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-cream-100/80">{item.name}</span>
                  <span className="text-gold-200/80 font-mono text-xs">
                    {item.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prompts */}
          <div className="reveal reveal-delay-1 bg-burgundy-800/40 backdrop-blur-sm rounded-2xl p-8 hairline-dark card-hover lg:translate-y-4">
            <div className="w-12 h-12 rounded-xl bg-cream-50/10 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-gold-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold-300/15 border border-gold-300/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-300 animate-shimmer" />
              <span className="text-[9px] uppercase tracking-[0.18em] text-gold-200 font-semibold">
                Tier 2 Only
              </span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-cream-50 mb-6">
              Client Acquisition Prompts
            </h3>
            <ul className="space-y-3">
              {promptItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-cream-100/80"
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
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sales Resources */}
          <div className="reveal reveal-delay-2 bg-burgundy-800/40 backdrop-blur-sm rounded-2xl p-8 hairline-dark card-hover">
            <div className="w-12 h-12 rounded-xl bg-cream-50/10 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-gold-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold-300/15 border border-gold-300/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-300 animate-shimmer" />
              <span className="text-[9px] uppercase tracking-[0.18em] text-gold-200 font-semibold">
                Tier 2 Only
              </span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-cream-50 mb-6">
              Sales Resources
            </h3>
            <ul className="space-y-3">
              {salesItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-cream-100/80"
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
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
