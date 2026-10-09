"use client";

import { useEffect, useState } from "react";
import { PurchaseButton } from "./PurchaseButton";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-cream-50/95 backdrop-blur-xl border-t border-burgundy-900/10 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <div className="text-[11px] uppercase tracking-wider text-burgundy-500 font-semibold">
              The Complete System
            </div>
            <div className="font-serif text-lg font-semibold text-ink-900 leading-tight">
              $47 · One payment
            </div>
          </div>
          <PurchaseButton tier="tier2" variant="primary" size="md" className="flex-1">
            Get Now
          </PurchaseButton>
        </div>
      </div>
    </div>
  );
}
