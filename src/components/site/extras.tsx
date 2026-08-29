import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { WHATSAPP } from "./primitives";

/** 3D tilt card that follows the pointer. */
export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el || e.pointerType !== "mouse") return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry.set(px * 12);
        rx.set(-py * 12);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Subtle glow cursor, desktop pointer devices only. */
export function GlowCursor() {
  const x = useSpring(useMotionValue(-100), { stiffness: 500, damping: 40, mass: 0.25 });
  const y = useSpring(useMotionValue(-100), { stiffness: 500, damping: 40, mass: 0.25 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setActive(Boolean(el?.closest("a, button, [data-cursor-grow]")));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden md:block"
    >
      <motion.span
        animate={{ scale: active ? 2.6 : 1, opacity: active ? 0.55 : 0.85 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="block h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint shadow-[0_0_24px_6px_color-mix(in_oklab,var(--mint)_60%,transparent)]"
      />
    </motion.div>
  );
}

/** Persistent WhatsApp action. */
export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a clínica no WhatsApp"
      className="pulse-ring group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-mint text-ink shadow-[0_16px_40px_-12px_color-mix(in_oklab,var(--mint)_70%,transparent)] transition-transform duration-300 hover:scale-110 md:bottom-8 md:right-8"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.2 4.74 1.2 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.03.24-3.48-.72-2.96-1.17-4.83-4.24-4.98-4.44-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36s.39.01.56.01c.18 0 .42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.51-.1.19-.34.5-.5.67-.15.17-.31.3-.14.6.17.29.75 1.28 1.62 2.06 1.11 1.01 2.05 1.33 2.34 1.48.29.15.46.12.63-.07.17-.2.72-.86.91-1.15.19-.29.39-.24.65-.15.27.1 1.68.79 1.97.94.29.14.48.22.55.34.07.12.07.7-.17 1.38Z" />
      </svg>
    </a>
  );
}
