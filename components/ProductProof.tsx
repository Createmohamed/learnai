import { SectionLabel } from "./SectionLabel";

const deliverables = [
  {
    category: "The Book",
    items: [
      { label: "Chapters", value: "08" },
      { label: "Stages", value: "06" },
      { label: "Frameworks", value: "Complete" },
    ],
  },
  {
    category: "Templates",
    items: [
      { label: "Outreach", value: "12+" },
      { label: "Follow-ups", value: "05" },
      { label: "Proposals", value: "01" },
    ],
  },
  {
    category: "Prompts (Tier 2)",
    items: [
      { label: "Ideal client", value: "01" },
      { label: "Message writer", value: "01" },
      { label: "Objections", value: "01" },
    ],
  },
  {
    category: "Sales Resources (Tier 2)",
    items: [
      { label: "Call script", value: "01" },
      { label: "Pricing guide", value: "01" },
      { label: "Referrals", value: "01" },
    ],
  },
];

export function ProductProof() {
  return (
    <section className="relative bg-cream-100 py-section overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #3A0F17 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal">
            <SectionLabel>Product Proof</SectionLabel>
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 font-serif text-h2 font-semibold text-ink-900 text-balance">
            What you actually receive.
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-ink-900/65 text-lg leading-relaxed">
            No invented testimonials. No fake customer counts. Just the actual
            structure and contents of the system you&apos;re buying.
          </p>
        </div>

        {/* Deliverables grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((group, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${Math.min(index + 1, 4)} p-6 rounded-2xl bg-cream-50 hairline card-hover`}
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-burgundy-500 font-semibold mb-4">
                {group.category}
              </div>
              <div className="space-y-4">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-baseline justify-between pb-3 border-b border-burgundy-900/5 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-ink-900/65">
                      {item.label}
                    </span>
                    <span className="font-serif text-xl font-semibold text-ink-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* System architecture note - placeholder for testimonials */}
        <div className="reveal mt-12 p-8 sm:p-10 rounded-2xl bg-cream-50 hairline text-center">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ink-900/40 font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ink-900/20" />
            Testimonial Architecture Ready
          </div>
          <p className="font-serif text-xl sm:text-2xl text-ink-900/80 italic max-w-2xl mx-auto leading-relaxed">
            &quot;Real customer results and stories will appear here as they come
            in. Until then, the system speaks for itself through its structure
            and contents.&quot;
          </p>
          <p className="mt-4 text-sm text-ink-900/50">
            Component designed to accept real testimonials when available.
          </p>
        </div>
      </div>
    </section>
  );
}
