import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-burgundy-900 to-burgundy-950 text-cream-100/75">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8 sm:pt-20">
        <div className="grid gap-12 border-b border-cream-100/15 pb-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">
          <div>
            <a
              href="#"
              aria-label="LearnAI home"
              className="inline-flex items-center gap-3 rounded-lg"
            >
              <BrandLogo className="h-14 w-14 object-contain" />
              <span className="flex flex-col">
                <span className="font-serif text-2xl font-semibold leading-tight text-cream-50">
                  LearnAI
                </span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-200">
                  Freelancer Client System
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-cream-100/70">
              A practical client-acquisition system to help freelancers build a
              more consistent pipeline.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#mechanism" className="transition-colors hover:text-cream-50">
                  The system
                </a>
              </li>
              <li>
                <a href="#inside" className="transition-colors hover:text-cream-50">
                  What&apos;s inside
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-cream-50">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-cream-50">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">
              Your purchase
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-cream-100/75">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
                Secure checkout via Gumroad
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
                Instant digital delivery
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
                One-time payment
              </li>
            </ul>
            <a
              href="#pricing"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-200/40 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:border-gold-200 hover:bg-cream-50/10"
            >
              View pricing
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-cream-100/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} LearnAI. All rights reserved.</p>
          <p>Built for freelancers ready to grow with a system.</p>
        </div>
      </div>
    </footer>
  );
}
