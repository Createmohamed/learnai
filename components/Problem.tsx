import { SectionLabel } from "./SectionLabel";

const problems = [
  {
    quote: "I don't know where to find clients.",
    detail:
      "You know you're good at what you do. But the pipeline is empty. You're posting, you're hoping, and you're waiting for someone to notice.",
  },
  {
    quote: "I don't know what to say.",
    detail:
      "Every outreach message feels like a guess. You rewrite it ten times, send it, and never hear back. The silence is expensive.",
  },
  {
    quote: "People don't reply.",
    detail:
      "You send twenty messages. You get one response. The math doesn't work, and you start questioning whether your work is even worth it.",
  },
  {
    quote: "I get leads but can't close them.",
    detail:
      "Conversations start. Interest is there. Then the call ends, the proposal goes out, and the trail goes cold. You can't figure out why.",
  },
  {
    quote: "My client flow is inconsistent.",
    detail:
      "Feast or famine. One month you're overbooked, the next you're scrambling. The uncertainty makes it impossible to plan, price, or grow.",
  },
];

export function Problem() {
  return (
    <section className="relative bg-ink-900 text-cream-50 py-section overflow-hidden grain">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-burgundy-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal">
            <SectionLabel dark>The Root Issue</SectionLabel>
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 font-serif text-display-sm font-semibold text-cream-50 text-balance">
            Your skill isn&apos;t the problem.
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-cream-100/60 text-lg leading-relaxed max-w-2xl mx-auto">
            The problem is that you don&apos;t have a <em className="text-gold-200 not-italic font-medium">system</em> for client acquisition. You&apos;re
            relying on hope, luck, and occasional bursts of effort. That&apos;s not a
            business. That&apos;s a gamble.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-100/10 rounded-2xl overflow-hidden hairline-dark">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${Math.min(index + 1, 5)} bg-ink-900 p-8 sm:p-10 hover:bg-ink-800 transition-colors duration-500 group`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-burgundy-500/20 border border-burgundy-500/30 flex items-center justify-center text-burgundy-300 font-serif text-sm font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-cream-50 leading-snug">
                    &quot;{problem.quote}&quot;
                  </h3>
                  <p className="mt-4 text-cream-100/55 text-sm leading-relaxed">
                    {problem.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 text-center">
          <p className="font-serif text-2xl sm:text-3xl text-cream-50/90 italic">
            None of these are talent problems.
            <br />
            <span className="text-gold-200 not-italic font-semibold">
              They&apos;re process problems.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
