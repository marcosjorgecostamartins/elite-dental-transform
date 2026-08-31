import logoMark from "@/assets/logo-vo.png";

export function Logo({
  className = "",
  size = 44,
  subtitleClassName = "text-gold/85",
}: {
  className?: string;
  size?: number;
  subtitleClassName?: string;
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoMark}
        alt="Monograma Visual Odonto Integra Clínica"
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        className="shrink-0 object-contain"
        style={{ width: size, height: size }}
      />
      <span className="leading-tight">
        <span className="block font-display text-base tracking-tight">Visual Odonto</span>
        <span className={`eyebrow block ${subtitleClassName}`}>Integra Clínica</span>
      </span>
    </span>
  );
}
