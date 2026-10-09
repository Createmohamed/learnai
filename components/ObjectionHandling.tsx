import { SectionLabel } from "./SectionLabel";

const objections = [
  {
    objection: "I've bought things like this before and they didn't work.",
    answer:
      "Most products give you theory or a single tactic. This gives you a complete six-stage system plus the execution tools. If you work the sequence — Find, Approach, Qualify, Close, Deliver, Retain — you're building a pipeline, not testing a trick. The system compounds; tactics don't.",
  },
  {
    objection: "I'm not good at sales or outreach.",
    answer:
      "That's exactly why the templates and prompts exist. You don't need to be a natural salesperson. You need clear frameworks, proven messages, and a process to follow. The system is designed to make a beginner look competent from day one.",
  },
  {
    objection: "I don't have time to implement this.",
    answer:
      "The implementation flow is structured around focused work over four weeks. Even 5-7 hours a week produces a working pipeline. The alternative — continuing to rely on luck and referrals — costs you more time in the long run through inconsistent income and downtime between projects.",
  },
  {
    objection: "My niche is different. Will this work for me?",
    answer:
      "The system is built on universal client-acquisition principles that apply to any service-based freelance business. The specifics of your niche change what you say, not how the pipeline works. The framework is adaptable; the mechanism stays the same.",
  },
  {
    objection: "$47 is a lot right now.",
    answer:
      "One closed client pays for this system many times over. Tier 1 at $27 is available if you want to start with just the foundation. But consider: what's another month of inconsistent client flow costing you in stress, lost income, and stalled progress?",
  },
];

export function ObjectionHandling() {
  return (
    <section className="relative bg-wine-800 text-cream-50 py-section overflow-hidden grain">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-burgundy-500/15 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal">
            <SectionLabel dark>Honest Answers</SectionLabel>
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 font-serif text-h2 font-semibold text-cream-50 text-balance">
            Before you decide.
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-cream-100/60 text-lg leading-relaxed">
            The concerns people usually have. Addressed directly.
          </p>
        </div>

        <div className="mt-16 space-y-px bg-cream-100/10 rounded-2xl overflow-hidden hairline-dark">
          {objections.map((item, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${Math.min(index + 1, 5)} bg-wine-800 p-6 sm:p-8 hover:bg-wine-700/60 transition-colors duration-300`}
            >
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-300/15 border border-gold-300/25 flex items-center justify-center mt-0.5">
                  <span className="font-serif text-gold-200 text-sm font-semibold">
                    Q
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-cream-50 leading-snug">
                    {item.objection}
                  </h3>
                  <p className="mt-4 text-cream-100/65 leading-relaxed text-sm sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
