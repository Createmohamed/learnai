"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Mechanism } from "@/components/Mechanism";
import { ProductIntro } from "@/components/ProductIntro";
import { WhatsInside } from "@/components/WhatsInside";
import { Pricing } from "@/components/Pricing";
import { ImplementationFlow } from "@/components/ImplementationFlow";
import { WhoItsFor } from "@/components/WhoItsFor";
import { ObjectionHandling } from "@/components/ObjectionHandling";
import { ProductProof } from "@/components/ProductProof";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function Home() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-cream-50 mobile-cta-padding">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Mechanism />
        <ProductIntro />
        <WhatsInside />
        <Pricing />
        <ImplementationFlow />
        <WhoItsFor />
        <ObjectionHandling />
        <ProductProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
