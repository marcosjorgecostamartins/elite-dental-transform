import logoMark from "@/assets/logo-vo.png.asset.json";

export function Logo({
  className = "",
  size = 48,
  showWordmark = true,
  subtitleClassName = "text-gold/85",
}: {
  className?: string;
  size?: number;
  showWordmark?: boolean;
  subtitleClassName?: string;
}) {
  return (
    <span className={`flex items-center gap-3.5 ${className}`}>
      <span
        className="relative inline-flex shrink-0 items-center justify-center rounded-full ring-1 ring-gold/40"
        style={{
          width: size,
          height: size,
          background:
            "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%)",
          boxShadow: "0 6px 24px -10px color-mix(in oklab, var(--gold) 65%, transparent)",
        }}
      >
        <img
          src={logoMark.url}
          alt="Selo Visual Odonto Integra Clínica"
          width={size}
          height={size}
          decoding="async"
          className="h-full w-full object-contain"
        />
      </span>
      {showWordmark && (
        <span className="leading-tight">
          <span className="block font-display text-lg tracking-tight md:text-xl">Visual Odonto</span>
          <span className={`eyebrow block ${subtitleClassName}`}>Integra Clínica</span>
        </span>
      )}
    </span>
  );
}
