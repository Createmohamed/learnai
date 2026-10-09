import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearnAI — Freelancer Client System",
  description:
    "Stop waiting for clients. Build a system that gets you clients. A practical client-acquisition system for freelancers.",
  keywords: [
    "freelance clients",
    "client acquisition",
    "freelance system",
    "how to get clients",
    "freelance business",
    "AI freelancer",
    "web design clients",
    "developer clients",
  ],
  openGraph: {
    title: "LearnAI — Freelancer Client System",
    description:
      "Stop waiting for clients. Build a system that gets you clients.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LearnAI — Freelancer Client System",
    description:
      "Stop waiting for clients. Build a system that gets you clients.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream-50 text-ink-900 antialiased">{children}</body>
    </html>
  );
}
