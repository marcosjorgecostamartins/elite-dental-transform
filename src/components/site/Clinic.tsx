import { motion } from "motion/react";
import { useState } from "react";
import reception from "@/assets/08_clinica_recepcao.jpg.asset.json";
import waiting from "@/assets/09_clinica_sala_1.jpg.asset.json";
import identity from "@/assets/10_clinica_sala_2.jpg.asset.json";
import care from "@/assets/11_clinica_atendimento.jpg.asset.json";
import { MAPS, Reveal, SectionLabel } from "./primitives";

const gallery = [
  { src: reception.url, label: "Recepção", desc: "Ambiente acolhedor e profissional" },
  { src: waiting.url, label: "Sala de espera", desc: "Conforto desde o primeiro minuto" },
  { src: identity.url, label: "Nossa identidade", desc: "A marca que assina cada tratamento" },
  { src: care.url, label: "Atendimento personalizado", desc: "Com o Dr. Sinval Silva" },
];

const perks = [
  { t: "Pontualidade", d: "Respeitamos seu tempo e compromisso." },
  { t: "Segurança", d: "Equipamentos esterilizados e biossegurança rigorosa." },
  { t: "Localização", d: "Fácil acesso, no coração da Praia do Canto." },
];

export function Clinic() {
  const [active, setActive] = useState(0);
  const current = gallery[active]!;

  return (
    <section id="clinica" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionLabel>Nossa clínica</SectionLabel>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.08] text-ink text-balance-tight">
            Um ambiente feito para você se sentir seguro — e bem.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-ink">
              <div className="relative aspect-16/10">
                {gallery.map((g, i) => (
                  <motion.img
                    key={g.src}
                    src={g.src}
                    alt={`${g.label} — ${g.desc}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={false}
                    animate={
                      i === active
                        ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, scale: 1 }
                        : { clipPath: "inset(0% 0% 100% 0%)", opacity: 0.4, scale: 1.06 }
                    }
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                  />
                ))}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink/85 to-transparent" />
                <div className="absolute bottom-5 left-6">
                  <p className="font-display text-2xl text-ivory">{current.label}</p>
                  <p className="text-sm text-ivory/70">{current.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-px bg-border">
                {gallery.map((g, i) => (
                  <button
                    key={g.label}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Ver ${g.label}`}
                    aria-pressed={i === active}
                    className={`relative aspect-16/10 overflow-hidden transition-opacity duration-500 ${
                      i === active ? "opacity-100" : "opacity-55 hover:opacity-90"
                    }`}
                  >
                    <img src={g.src} alt="" className="h-full w-full object-cover" loading="lazy" />
                    {i === active && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-mint" />}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.08}>
              <div className="rounded-[2rem] border border-border bg-card p-7">
                <h3 className="eyebrow text-ink/50">Endereço</h3>
                <p className="mt-4 font-display text-xl leading-snug text-ink">
                  Centro da Praia Shopping
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Av. Nossa Sra. da Penha, 570 — Conj. 301/302
                  <br />
                  Praia do Canto, Vitória — ES, 29055-131
                </p>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-mint decoration-2 underline-offset-4"
                >
                  Abrir no Maps →
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <ul className="grid gap-3">
                {perks.map((p) => (
                  <li
                    key={p.t}
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-400 hover:-translate-y-1 hover:border-mint/60"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-mint transition-transform duration-400 group-hover:scale-150" />
                    <span>
                      <span className="block font-display text-lg text-ink">{p.t}</span>
                      <span className="text-sm text-muted-foreground">{p.d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 overflow-hidden rounded-[2rem] border border-border">
            <iframe
              title="Mapa da Visual Odonto Integra Clínica — Centro da Praia Shopping, Praia do Canto, Vitória"
              src="https://www.google.com/maps?q=Av.%20Nossa%20Sra.%20da%20Penha%2C%20570%2C%20Praia%20do%20Canto%2C%20Vit%C3%B3ria%20-%20ES%2C%2029055-131&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0 md:h-96"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
