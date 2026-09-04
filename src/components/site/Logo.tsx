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
    <span className={`flex items-center gap-4 ${className}`}>
      <span
        className="relative inline-flex shrink-0 items-center justify-center rounded-full ring-2 ring-gold/60"
        style={{
          width: size,
          height: size,
          background:
            "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--gold) 32%, transparent), transparent 72%)",
          boxShadow:
            "0 8px 34px -8px color-mix(in oklab, var(--gold) 80%, transparent), 0 0 0 1px color-mix(in oklab, var(--gold) 30%, transparent)",
        }}
      >
        <img
          src={logoMark.url}
          alt="Selo Visual Odonto Integra Clínica"
          width={size}
          height={size}
          decoding="async"
          className="h-full w-full object-contain drop-shadow-[0_2px_6px_color-mix(in_oklab,var(--ink)_55%,transparent)]"
        />
      </span>
      {showWordmark && (
        <span className="leading-tight">
          <span className="block font-display text-xl font-semibold tracking-tight md:text-2xl">
            Visual Odonto
          </span>
          <span className={`eyebrow block ${subtitleClassName}`}>Integra Clínica</span>
        </span>
      )}

    </span>
  );
}
