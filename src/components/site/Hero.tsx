import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroVideo from "@/assets/hero-video-1.mp4.asset.json";
import heroPoster from "@/assets/01_hero_dentista.jpg.asset.json";
import { Counter, CtaButton, MAPS, WordsUp } from "./primitives";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} id="top" className="relative isolate min-h-svh overflow-hidden surface-dark">
      <motion.div style={{ y: videoY }} className="absolute inset-0 -z-10 h-[118%]">
        <video
          className="h-full w-full object-cover opacity-45 contrast-[0.95] saturate-[0.85]"
          src={heroVideo.url}
          poster={heroPoster.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-ink/55" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink/95 via-ink/70 to-ink/25" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-linear-to-t from-ink/95 to-transparent" />
      <div className="grid-tech absolute inset-0 -z-10 opacity-10" />


      <motion.div
        style={{ y: contentY }}
        className="mx-auto flex min-h-svh max-w-7xl flex-col justify-end gap-10 px-5 pb-16 pt-36 md:px-10 md:pb-24"
      >
        <div className="max-w-4xl">
          <motion.a
            href={MAPS}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="glass-card eyebrow inline-flex items-center gap-2 rounded-full px-4 py-2 text-ivory/85 transition-colors hover:text-mint"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
            Praia do Canto, Vitória — ES
          </motion.a>

          <h1
            className="mt-8 font-display text-[clamp(3.2rem,8.2vw,7rem)] font-bold leading-[0.92] tracking-[-0.035em] text-ivory"
            style={{
              textShadow:
                "0 2px 12px color-mix(in oklab, var(--ink) 95%, transparent), 0 12px 60px color-mix(in oklab, var(--ink) 90%, transparent)",
            }}
          >
            <WordsUp text="Seu sorriso merece" />
            <span
              className="relative block text-gold"
              style={{
                textShadow:
                  "0 2px 12px color-mix(in oklab, var(--ink) 92%, transparent), 0 0 60px color-mix(in oklab, var(--gold) 55%, transparent)",
              }}
            >
              <WordsUp text="45 anos de experiência" />
              <span
                aria-hidden="true"
                className="mt-3 block h-[4px] w-36 rounded-full bg-linear-to-r from-mint via-gold to-transparent md:w-56"
              />
            </span>
            <span className="mt-2 block">
              <WordsUp text="trabalhando por ele." />
            </span>
          </h1>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-ivory/90"
            style={{ textShadow: "0 2px 18px color-mix(in oklab, var(--ink) 80%, transparent)" }}
          >
            Implantes dentários e estética do sorriso com tecnologia 3D, precisão cirúrgica e o cuidado
            de quem trata cada paciente como único.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <CtaButton>Agende sua avaliação</CtaButton>
            <CtaButton href="#clinica" variant="outline" className="text-ivory">
              Conheça a clínica
            </CtaButton>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ivory/10 bg-ivory/5 backdrop-blur-md md:grid-cols-4"
        >
          {[
            { n: 45, s: "+", l: "anos de história clínica" },
            { n: 12, s: "mil+", l: "sorrisos acompanhados" },
            { n: 3, s: "D", l: "planejamento digital de implantes" },
            { n: 100, s: "%", l: "procedimentos feitos na própria clínica" },
          ].map((stat) => (
            <div key={stat.l} className="bg-ink/75 px-6 py-7">
              <dt className="font-display text-4xl text-mint">
                <Counter to={stat.n} suffix={stat.s} />
              </dt>
              <dd className="mt-2 text-sm leading-snug text-ivory/80">{stat.l}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
