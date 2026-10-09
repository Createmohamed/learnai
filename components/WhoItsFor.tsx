import { SectionLabel } from "./SectionLabel";

const forWho = [
  "Beginner freelancers ready to land their first clients",
  "Freelancers struggling with inconsistent client flow",
  "AI freelancers and service providers",
  "Web designers, developers, and creators",
  "Copywriters, marketers, and video editors",
  "Anyone tired of hoping clients will find them",
];

const notForWho = [
  "People looking for 'get rich quick' shortcuts",
  "Those who won't put in the outreach work",
  "Anyone expecting results without consistent effort",
  "People who refuse to test, iterate, and improve",
];

export function WhoItsFor() {
  return (
    <section className="relative bg-cream-50 py-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal">
            <SectionLabel>Who This Is For</SectionLabel>
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 font-serif text-h2 font-semibold text-ink-900 text-balance">
            Is this system right for you?
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* For */}
          <div className="reveal relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-cream-100 to-cream-50 hairline">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-burgundy-500 text-cream-50 flex items-center justify-center shadow-premium">
                <svg
                  className="w-6 h-6"
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
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-burgundy-500 font-semibold">
                  This is for you if
                </div>
                <h3 className="font-serif text-2xl font-semibold text-ink-900 mt-1">
                  You&apos;re ready to build.
                </h3>
              </div>
            </div>

            <ul className="space-y-4">
              {forWho.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-burgundy-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-burgundy-500"
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
                  </div>
                  <span className="text-ink-900/80 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for */}
          <div className="reveal reveal-delay-1 relative p-8 sm:p-10 rounded-2xl bg-ink-900 text-cream-50 overflow-hidden grain">
            <div className="absolute inset-0 radial-glow opacity-30" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-cream-50/10 border border-cream-50/15 text-cream-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-gold-200/80 font-semibold">
                    This is not for you if
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-cream-50 mt-1">
                    You want shortcuts.
                  </h3>
                </div>
              </div>

              <ul className="space-y-4">
                {notForWho.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-cream-50/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-cream-100/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <span className="text-cream-100/75 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
