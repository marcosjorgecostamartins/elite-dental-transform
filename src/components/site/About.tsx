import doctor from "@/assets/dr-sinval-silva.png.asset.json";
import luciana from "@/assets/dra-luciana-dantas.jpg.asset.json";
import inAction from "@/assets/02_sobre_clinica.jpg.asset.json";
import { CtaButton, Reveal, SectionLabel } from "./primitives";

const credentials = [
  "Especialista em Implantodontia e Prótese Dentária",
  "Planejamento digital e cirurgia guiada 3D",
  "Mais de quatro décadas de casos acompanhados",
  "Atendimento conduzido pessoalmente, sem terceirização",
];

const team = [
  {
    name: "Dr. Sinval Silva",
    src: doctor.url,
    alt: "Dr. Sinval Silva, responsável clínico da Visual Odonto Integra Clínica",
    position: "object-[38%_center]",
  },
  {
    name: "Dra. Luciana Dantas",
    src: luciana.url,
    alt: "Dra. Luciana Dantas, sócia-fundadora da Visual Odonto Integra Clínica",
    position: "object-center",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.12}>
                <figure className="m-0">
                  <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_50px_90px_-60px_color-mix(in_oklab,var(--ink)_60%,transparent)]">
                    <img
                      src={member.src}
                      alt={member.alt}
                      className={`aspect-4/5 w-full object-cover ${member.position}`}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-4 text-center text-sm font-semibold text-ink md:text-base">
                    {member.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24} className="mt-6 hidden justify-center md:flex">
            <div className="w-40 overflow-hidden rounded-2xl border-4 border-background shadow-xl">
              <img
                src={inAction.url}
                alt="Atendimento clínico na Visual Odonto Integra Clínica"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <SectionLabel>Autoridade</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] text-ink text-balance-tight">
              Tradição que virou tecnologia.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              A Visual Odonto Integra Clínica nasceu do compromisso do Dr. Sinval Silva e da Dra.
              Luciana Dantas com uma odontologia séria, precisa e humana. Depois de mais de quatro
              décadas de estrada, unimos experiência clínica a equipamentos de última geração para
              entregar o que a maioria promete e poucos cumprem: segurança, previsibilidade e um
              resultado que parece natural.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {credentials.map((c) => (
                <li
                  key={c}
                  className="group flex items-start gap-3 rounded-2xl border border-border bg-card px-4 py-4 text-sm text-ink transition-all duration-400 hover:-translate-y-1 hover:border-mint/60"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/20 text-[10px] font-bold text-ink transition-transform duration-400 group-hover:scale-110">
                    ✓
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <blockquote className="mt-10 border-l-2 border-gold pl-6 font-display text-xl leading-snug text-ink md:text-2xl">
              “Nosso trabalho não termina quando o procedimento acaba. Ele termina quando você volta a
              sorrir sem pensar duas vezes.”
            </blockquote>
            <div className="mt-8">
              <CtaButton variant="ink">Agende sua avaliação</CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
