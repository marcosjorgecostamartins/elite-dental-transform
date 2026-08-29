import { motion } from "motion/react";
import { useState } from "react";
import { CtaButton, Reveal, SectionLabel } from "./primitives";

const items = [
  {
    stars: 5,
    quote:
      "Fiz implantes dentários e o resultado ficou perfeito. Equipe super atenciosa e profissional.",
    name: "Maria Silva",
    tag: "Implantes dentários",
  },
  {
    stars: 5,
    quote:
      "Fiz lentes de contato dental e meu sorriso ficou incrível. Atendimento de primeira qualidade.",
    name: "João Santos",
    tag: "Lentes de contato dental",
  },
  {
    stars: 5,
    quote:
      "Fiz harmonização orofacial e o resultado superou minhas expectativas. Clínica moderna e limpa.",
    name: "Ana Paula Costa",
    tag: "Harmonização orofacial",
  },
  {
    stars: 4,
    quote: "Todo o processo do implante foi tranquilo. Resultado perfeito e natural.",
    name: "Carlos Eduardo",
    tag: "Reabilitação com implante",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} de 5 estrelas`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < count ? "fill-gold" : "fill-ivory/20"}`}
          initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z" />
        </motion.svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="depoimentos" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionLabel>Prova real</SectionLabel>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,3rem)] text-ivory">
              Quem já passou por aqui, conta.
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActive((a) => (a - 1 + items.length) % items.length)}
                aria-label="Depoimento anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-mint hover:text-mint"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setActive((a) => (a + 1) % items.length)}
                aria-label="Próximo depoimento"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-mint hover:text-mint"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${active * 100}%` }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {items.map((item) => (
              <figure key={item.name} className="w-full shrink-0 px-1">
                <div className="glass-card rounded-[2rem] p-8 md:p-14">
                  <Stars count={item.stars} />
                  <blockquote className="mt-7 font-display text-[clamp(1.35rem,2.6vw,2.2rem)] leading-snug text-ivory">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint/20 font-display text-mint">
                      {item.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ivory">{item.name}</span>
                      <span className="eyebrow block text-ivory/50">{item.tag}</span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="flex gap-2">
            {items.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver depoimento de ${item.name}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === active ? "w-10 bg-mint" : "w-4 bg-ivory/25"
                }`}
              />
            ))}
          </div>
          <CtaButton>Agende sua avaliação</CtaButton>
        </div>
      </div>
    </section>
  );
}
