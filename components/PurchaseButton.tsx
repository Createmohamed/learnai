"use client";

import { gumroadUrls } from "@/lib/gumroad";

type Tier = "tier1" | "tier2";

interface PurchaseButtonProps {
  tier: Tier;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function PurchaseButton({
  tier,
  children,
  variant = "primary",
  className = "",
  size = "md",
}: PurchaseButtonProps) {
  const url = tier === "tier1" ? gumroadUrls.tier1 : gumroadUrls.tier2;

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-[15px]",
    lg: "px-9 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-burgundy-500 text-cream-50 btn-primary shadow-premium hover:bg-burgundy-600",
    secondary:
      "bg-transparent text-burgundy-500 border border-burgundy-500/30 hover:bg-burgundy-500/5 transition-all duration-300",
    ghost:
      "bg-transparent text-ink-900 hover:text-burgundy-500 transition-colors duration-300",
    dark: "bg-cream-50 text-burgundy-700 btn-primary hover:bg-cream-100",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-semibold tracking-wide rounded-full transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
      <svg
        className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  );
}
