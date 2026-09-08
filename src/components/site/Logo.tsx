import logoMark from "@/assets/logo-vo.png.asset.json";

export function Logo({
  className = "",
  size = 48,
  showWordmark = true,
  showSubtitle = true,
  showMark = true,
  subtitleClassName = "text-gold/85",
}: {
  className?: string;
  size?: number;
  showWordmark?: boolean;
  showSubtitle?: boolean;
  showMark?: boolean;
  subtitleClassName?: string;
}) {
  return (
    <span className={`flex items-center gap-4 ${className}`}>
      {showMark && (
      <span
        className="relative inline-flex shrink-0 items-center justify-center rounded-full ring-2 ring-gold/75"
        style={{
          width: size,
          height: size,
          background:
            "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--gold) 45%, transparent), transparent 74%)",
          boxShadow:
            "0 10px 44px -8px color-mix(in oklab, var(--gold) 95%, transparent), 0 0 0 2px color-mix(in oklab, var(--gold) 42%, transparent)",
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
          <span className="block font-display text-2xl font-bold tracking-tight md:text-3xl">
            Visual Odonto
          </span>
          {showSubtitle && (
            <span className={`eyebrow block ${subtitleClassName}`}>Integra Clínica</span>
          )}
        </span>
      )}

    </span>
  );
}
