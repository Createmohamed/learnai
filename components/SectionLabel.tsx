interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionLabel({
  children,
  className = "",
  dark = false,
}: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] ${
        dark ? "text-gold-200" : "text-burgundy-500"
      } ${className}`}
    >
      <span
        className={`h-px w-8 ${dark ? "bg-gold-300/60" : "bg-burgundy-500/50"}`}
      />
      {children}
    </div>
  );
}
