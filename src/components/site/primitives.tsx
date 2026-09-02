import { motion, useInView, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const WHATSAPP =
  "https://wa.me/5527992390143?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Visual%20Odonto.";
export const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Centro+da+Praia+Shopping+Av.+Nossa+Sra.+da+Penha+570+Praia+do+Canto+Vit%C3%B3ria+ES";

/** Scroll-triggered reveal with subtle blur + lift. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Headline that assembles word by word. */
export function WordsUp({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}
          {"\u00A0"}
        </motion.span>
      ))}
    </span>
  );

}

/** Counts up once visible. */
export function Counter({
  to,
  suffix = "",
  duration = 1600,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/** Thin scroll progress bar. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-mint"
    />
  );
}

/** Parallax wrapper for media. */
export function Parallax({
  children,
  amount = 60,
  className,
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/** Primary call-to-action. */
export function CtaButton({
  children,
  variant = "mint",
  className = "",
  href = WHATSAPP,
}: {
  children: ReactNode;
  variant?: "mint" | "outline" | "ink";
  className?: string;
  href?: string;
}) {
  const styles: Record<string, string> = {
    mint: "bg-mint text-ink hover:mint-glow",
    outline: "border border-current text-current hover:bg-mint hover:text-ink hover:border-mint",
    ink: "bg-ink text-ivory hover:bg-ink-soft",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-500 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="relative z-10 inline-block transition-transform duration-500 group-hover:translate-x-1"
      >
        →
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
    </a>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2 text-mint">
      <span className="h-1.5 w-1.5 rounded-full bg-mint" />
      {children}
    </span>
  );
}
