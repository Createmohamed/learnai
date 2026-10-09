"use client";

import { useState } from "react";
import { SectionLabel } from "./SectionLabel";

const faqs = [
  {
    question: "How do I get the product after purchase?",
    answer:
      "The moment payment clears through Gumroad, you'll receive an email with a download link and see it on the confirmation screen. You get instant access to all files and can keep them forever.",
  },
  {
    question: "Is this a one-time payment?",
    answer:
      "Yes. One payment, lifetime access. No subscription, no recurring fees, no upsell maze. You own the files outright.",
  },
  {
    question: "What format are the files in?",
    answer:
      "Tier 1 includes the book in digital format plus templates and extras. Tier 2 adds PDF and HTML versions of the book, plus prompts and sales resources. All files are delivered digitally — nothing is shipped.",
  },
  {
    question: "Do I need any prior experience?",
    answer:
      "No. The system is built for beginners and for freelancers who've been struggling to get consistent clients. It starts from the fundamentals and builds stage by stage. If you have a service to sell, you can start here.",
  },
  {
    question: "How soon can I expect results?",
    answer:
      "That depends on how consistently you work the system. Some people start conversations in their first week. For most, building a reliable pipeline takes consistent effort over several weeks. The implementation flow in the product walks you through week by week.",
  },
  {
    question: "Which tier should I choose?",
    answer:
      "If you want just the core framework and are comfortable building your own execution tools, Tier 1 at $27 is the right starting point. If you want the complete package — multiple book formats, prompts, and sales resources to execute immediately — Tier 2 at $47 is the recommended and more complete option.",
  },
  {
    question: "What if it's not for me?",
    answer:
      "Read through the contents and the who-this-is-for section above. The product is described clearly so you know exactly what you're getting. If you're the right person and you work the system, it delivers value. If you're unsure, start with Tier 1.",
  },
  {
    question: "Can I use this for any freelance niche?",
    answer:
      "Yes. The six-stage mechanism is universal for service-based freelancers. What changes between niches is the specific message and positioning — not how the pipeline works. The frameworks are adaptable to designers, developers, writers, marketers, AI freelancers, editors, and more.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-cream-50 py-section overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center">
          <div className="reveal">
            <SectionLabel>Questions</SectionLabel>
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 font-serif text-h2 font-semibold text-ink-900 text-balance">
            Before you buy.
          </h2>
        </div>

        <div className="mt-14 divide-y divide-burgundy-900/10 border-y border-burgundy-900/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="reveal">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-6 flex items-center justify-between gap-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-ink-900 group-hover:text-burgundy-500 transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-burgundy-500 border-burgundy-500 text-cream-50 rotate-45"
                        : "border-burgundy-900/20 text-burgundy-500 group-hover:border-burgundy-500"
                    }`}
                  >
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>
                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                  <div>
                    <p className="pb-6 text-ink-900/65 leading-relaxed -mt-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
