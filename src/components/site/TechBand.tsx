import { motion } from "motion/react";
import clinicVideo from "@/assets/hero-video-2.mp4.asset.json";
import poster from "@/assets/09_clinica_sala_1.jpg.asset.json";
import { CtaButton, Reveal, SectionLabel } from "./primitives";

const words = [
  "Cirurgia guiada 3D",
  "Biossegurança rigorosa",
  "Ambiente climatizado",
  "Planejamento digital",
  "Escaneamento intraoral",
  "Acompanhamento pós-tratamento",
];

export function TechBand() {
  return (
    <section className="relative overflow-hidden surface-dark py-24 md:py-32">
      <div className="grid-tech pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Reveal>
            <SectionLabel>Tecnologia</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] text-ivory text-balance-tight">
              Tecnologia e conforto para o seu <span className="shine-text">sorriso perfeito</span>.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/70">
              Equipamentos modernos, ambiente climatizado e protocolos rígidos de biossegurança — porque
              conforto e segurança não deveriam ser diferenciais, deveriam ser padrão.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-9">
              <CtaButton>Agende sua avaliação</CtaButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[2rem] border border-ivory/15">
            <video
              className="aspect-video w-full object-cover"
              src={clinicVideo.url}
              poster={poster.url}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              aria-label="Vídeo mostrando o ambiente e o atendimento da clínica"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-mint/20" />
            <span className="eyebrow absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1.5 text-mint backdrop-blur">
              Bastidores da clínica
            </span>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-20 flex overflow-hidden border-y border-ivory/10 py-5">
        <div className="marquee-track flex w-max shrink-0 items-center gap-10 pr-10">
          {[...words, ...words].map((w, i) => (
            <span key={`${w}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
              <motion.span className="font-display text-xl text-ivory/60">{w}</motion.span>
              <span className="h-1.5 w-1.5 rounded-full bg-mint/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
