# LearnAI — Freelancer Client System

A premium, conversion-focused digital product website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Design

- **Theme**: Deep burgundy editorial aesthetic with warm cream, muted gold, and dark wine accents
- **Typography**: Playfair Display (serif) for headlines, Inter (sans) for body
- **Sections**: Hero → Problem → Mechanism → Product Intro → What's Inside → Pricing → Implementation Flow → Who It's For → Objection Handling → Product Proof → FAQ → Final CTA → Footer

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel deployment
- Gumroad checkout

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_GUMROAD_TIER1_URL=your-gumroad-tier1-url
NEXT_PUBLIC_GUMROAD_TIER2_URL=your-gumroad-tier2-url
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run lint
npm run build
npm run start
```

**Deploy to Vercel**: Connect the repository and add the environment variables above.

## Project Structure

```
learnai/
├── app/
│   ├── globals.css       # Tailwind + custom styles + animations
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page assembly
├── components/
│   ├── Navbar.tsx            # Sticky navigation
│   ├── Hero.tsx              # Hero with product visual
│   ├── Problem.tsx           # Problem section
│   ├── Mechanism.tsx         # 6-stage pipeline
│   ├── ProductIntro.tsx      # "Not just a book"
│   ├── WhatsInside.tsx       # Book + resources showcase
│   ├── Pricing.tsx           # Tier 1 / Tier 2 + comparison
│   ├── ImplementationFlow.tsx # 4-week timeline
│   ├── WhoItsFor.tsx         # For / Not for
│   ├── ObjectionHandling.tsx # Common concerns
│   ├── ProductProof.tsx      # Deliverables structure
│   ├── FAQ.tsx               # Accordion FAQ
│   ├── FinalCTA.tsx          # Closing CTA
│   ├── Footer.tsx
│   ├── PurchaseButton.tsx    # Reusable Gumroad button
│   ├── SectionLabel.tsx      # Section eyebrow label
│   └── StickyMobileCTA.tsx   # Mobile bottom CTA
├── lib/
│   ├── gumroad.ts            # Gumroad URL env vars
│   └── useScrollReveal.ts    # Scroll reveal hook
├── tailwind.config.ts        # Burgundy theme tokens
└── tsconfig.json
```

## Key Features

- **Scroll reveal animations** — subtle fade-up on section elements
- **Mobile-optimized** — 375px layout, thumb-friendly buttons, sticky bottom CTA
- **Tier 2 visual dominance** — recommended tier is larger, colored, and highlighted
- **No fake scarcity** — honest pricing, no crossed-out prices or countdowns
- **Product proof instead of testimonials** — shows actual deliverable structure
- **Reusable purchase buttons** — reads from `NEXT_PUBLIC_GUMROAD_*` env vars
- **Premium micro-interactions** — button hover lift, card float, accordion transitions
# learnai
