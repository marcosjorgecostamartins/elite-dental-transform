import { motion } from "motion/react";
import procedure from "@/assets/02_sobre_clinica.jpg.asset.json";
import care from "@/assets/11_clinica_atendimento.jpg.asset.json";
import identity from "@/assets/10_clinica_sala_2.jpg.asset.json";
import facetas from "@/assets/facetas-porcelana.jpeg.asset.json";
import { CtaButton, Reveal, SectionLabel } from "./primitives";
import { Tilt } from "./extras";

const quickList = [
  { t: "Implantes Dentários de Alta Precisão com Tecnologia 3D", d: "M4 20h16M7 16V9m10 7V9M6 9h12l-2-4H8L6 9Z" },
  { t: "Lentes de Contato Dental e Facetas em Porcelana", d: "M4 12c4-6 12-6 16 0-4 6-12 6-16 0Z" },
  { t: "Harmonização Orofacial e Estética do Sorriso", d: "M12 3v18M4 8c4 3 12 3 16 0M4 16c4-3 12-3 16 0" },
  { t: "Clareamento Dental Profissional e Restaurações Estéticas", d: "M12 4v3m0 10v3M4 12h3m10 0h3M6.5 6.5l2 2m7 7 2 2m0-11-2 2m-7 7-2 2" },
  { t: "Próteses Dentárias Personalizadas", d: "M5 8c0-2 3-3 7-3s7 1 7 3c0 5-2 11-4 11s-2-4-3-4-1 4-3 4-4-6-4-11Z" },
  { t: "Reabilitação Oral Completa", d: "M3 12h4l2 5 3-10 2.5 8L18 9h3" },
];

type Card = { title: string; text: string; img: string | null; alt?: string };

const cards: Card[] = [
  {
    title: "Implantes Dentários",
    text: "Restauração completa com implantes de titânio de alta qualidade e planejamento 3D milimétrico, do diagnóstico à cirurgia.",
    img: procedure.url,
    alt: "Procedimento de implante dentário sendo realizado na clínica",
  },
  {
    title: "Lentes de Contato Dental",
    text: "Lâminas ultrafinas de porcelana que transformam o sorriso sem desgastar o dente, com resultado natural e duradouro.",
    img: null,
  },
  {
    title: "Facetas em Porcelana",
    text: "Correção de cor, formato e alinhamento com facetas personalizadas, feitas sob medida para o seu rosto.",
    img: facetas.url,
    alt: "Resultado de facetas em porcelana com sorriso natural e alinhado",
  },
  {
    title: "Harmonização Orofacial",
    text: "Toxina botulínica e preenchimento aplicados com técnica e critério, para um resultado que ninguém percebe que foi “feito”.",
    img: care.url,
    alt: "Atendimento personalizado com o Dr. Sinval Silva",
  },
  {
    title: "Clareamento e Restaurações Estéticas",
    text: "Dentes visivelmente mais claros e uniformes, com protocolo seguro e acompanhado do início ao fim.",
    img: null,
  },
  {
    title: "Reabilitação Oral Completa",
    text: "Para casos mais complexos, um plano de tratamento único que devolve função e estética ao mesmo tempo.",
    img: null,
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionLabel>O que fazemos</SectionLabel>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.08] text-ink text-balance-tight">
            Tratamentos pensados para durar — e para parecer que sempre foram assim.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-x-10 gap-y-2 md:grid-cols-2">
          {quickList.map((item, i) => (
            <li key={item.t}>
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-5 border-b border-border py-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-mint transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                    <motion.path
                      d={item.d}
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.07 }}
                    />
                  </svg>
                </span>
                <span className="text-base font-medium text-ink">{item.t}</span>
              </motion.div>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <Tilt className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow duration-500 hover:shadow-[0_40px_80px_-50px_color-mix(in_oklab,var(--ink)_65%,transparent)]">
                  {card.img ? (
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={card.img}
                        alt={card.alt ?? card.title}
                        className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-ink/70 to-transparent" />
                    </div>
                  ) : (
                    <div className="grid-tech relative h-44 overflow-hidden surface-dark">
                      <span className="absolute bottom-4 left-5 font-display text-6xl text-ivory/15">
                        0{i + 1}
                      </span>
                      <span className="absolute right-5 top-5 h-16 w-16 rounded-full border border-mint/40 transition-transform duration-700 group-hover:scale-125" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl text-ink">{card.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink/60 transition-colors group-hover:text-ink">
                      Saber mais
                      <span className="h-px w-6 bg-mint transition-all duration-500 group-hover:w-10" />
                    </span>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <CtaButton variant="ink">Agende sua avaliação</CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
