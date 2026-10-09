"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { LiveSalesBanner } from "./LiveSalesBanner";
import { PurchaseButton } from "./PurchaseButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <LiveSalesBanner />

      <header
        className={`w-full transition-all duration-500 ${
          scrolled
            ? "bg-cream-50/95 backdrop-blur-xl border-b border-burgundy-900/5 py-2"
            : "bg-transparent py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-20 h-20 rounded-xl bg-transparent flex items-center justify-center transition-transform duration-300 group-hover:scale-105 overflow-hidden">
              <BrandLogo className="w-28 h-28 max-w-none block object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-serif text-lg font-semibold tracking-tight ${scrolled ? "text-ink-900" : "text-cream-50"}`}>
                LearnAI
              </span>
              <span className={`text-[10px] uppercase tracking-[0.18em] font-medium ${scrolled ? "text-burgundy-500" : "text-gold-200"}`}>
                Client System
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#mechanism"
              className={`text-sm transition-colors ${scrolled ? "text-ink-900/70 hover:text-burgundy-500" : "text-cream-100/80 hover:text-gold-200"}`}
            >
              The System
            </a>
            <a
              href="#inside"
              className={`text-sm transition-colors ${scrolled ? "text-ink-900/70 hover:text-burgundy-500" : "text-cream-100/80 hover:text-gold-200"}`}
            >
              What&apos;s Inside
            </a>
            <a
              href="#pricing"
              className={`text-sm transition-colors ${scrolled ? "text-ink-900/70 hover:text-burgundy-500" : "text-cream-100/80 hover:text-gold-200"}`}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className={`text-sm transition-colors ${scrolled ? "text-ink-900/70 hover:text-burgundy-500" : "text-cream-100/80 hover:text-gold-200"}`}
            >
              FAQ
            </a>
          </nav>

          <PurchaseButton tier="tier2" variant="primary" size="sm">
            Get the System
          </PurchaseButton>
        </div>
      </header>
    </div>
  );
}
