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
    <span className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoMark.url}
        alt="Selo Visual Odonto Integra Clínica"
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        className="shrink-0 object-contain"
        style={{ width: size, height: size }}
      />
      {showWordmark && (
        <span className="leading-tight">
          <span className="block font-display text-base tracking-tight">Visual Odonto</span>
          <span className={`eyebrow block ${subtitleClassName}`}>Integra Clínica</span>
        </span>
      )}
    </span>
  );
}
