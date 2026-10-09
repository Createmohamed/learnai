import { SectionLabel } from "./SectionLabel";

export function ProductIntro() {
  return (
    <section className="relative bg-cream-50 py-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left - Large statement */}
          <div className="lg:col-span-5">
            <div className="reveal">
              <SectionLabel>Product Introduction</SectionLabel>
            </div>
            <h2 className="reveal reveal-delay-1 mt-6 font-serif text-display-sm font-semibold text-ink-900 text-balance leading-[1.05]">
              This isn&apos;t just
              <br />
              a{" "}
              <span className="relative inline-block">
                <span className="text-burgundy-500 italic">book.</span>
                <svg
                  className="absolute -bottom-3 left-0 w-full text-gold-300/60"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 3 100 3 198 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* Right - Explanation */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              <p className="reveal reveal-delay-2 text-xl text-ink-900/75 leading-relaxed">
                It&apos;s a <strong className="text-ink-900 font-semibold">complete operating system</strong> for
                freelance client acquisition. The book teaches you the thinking.
                The templates, prompts, and resources give you the tools to
                execute today.
              </p>

              <div className="reveal reveal-delay-3 grid sm:grid-cols-2 gap-5">
                <div className="p-6 rounded-xl bg-cream-100 border border-burgundy-900/5 card-hover">
                  <div className="w-10 h-10 rounded-lg bg-burgundy-500/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-burgundy-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink-900 mb-2">
                    The Framework
                  </h3>
                  <p className="text-sm text-ink-900/65 leading-relaxed">
                    Understand the six-stage pipeline, why each stage matters,
                    and how they connect into something repeatable.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-cream-100 border border-burgundy-900/5 card-hover">
                  <div className="w-10 h-10 rounded-lg bg-burgundy-500/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-burgundy-500"
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
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink-900 mb-2">
                    The Tools
                  </h3>
                  <p className="text-sm text-ink-900/65 leading-relaxed">
                    Ready-to-use templates, copy-paste prompts, and sales
                    resources you can drop into your workflow this week.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-cream-100 border border-burgundy-900/5 card-hover">
                  <div className="w-10 h-10 rounded-lg bg-burgundy-500/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-burgundy-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink-900 mb-2">
                    The Implementation
                  </h3>
                  <p className="text-sm text-ink-900/65 leading-relaxed">
                    A clear sequence for putting it all together, so you don&apos;t
                    just read — you actually build your pipeline.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-cream-100 border border-burgundy-900/5 card-hover">
                  <div className="w-10 h-10 rounded-lg bg-burgundy-500/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-burgundy-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink-900 mb-2">
                    The Compound Effect
                  </h3>
                  <p className="text-sm text-ink-900/65 leading-relaxed">
                    Each cycle improves the next. Your pipeline gets stronger
                    the longer you work the system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
