import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CtaButton, Reveal, SectionLabel, WHATSAPP } from "./primitives";

const faq = [
  {
    q: "Como posso agendar uma avaliação?",
    a: "Pelo WhatsApp (27) 99239-0143 ou pelo formulário desta página. Você recebe o retorno com os horários disponíveis e escolhe o que couber melhor na sua rotina.",
  },
  {
    q: "Quanto tempo leva um tratamento de implante dentário?",
    a: "Depende do caso. Em situações favoráveis, o implante é instalado em uma única sessão cirúrgica, com a prótese definitiva entre 3 e 6 meses. Você recebe o cronograma completo já na avaliação, antes de decidir qualquer coisa.",
  },
  {
    q: "As lentes de contato dental são duradouras?",
    a: "Sim. Com porcelana de qualidade, cimentação correta e manutenção periódica, é natural que durem mais de dez anos. O que define a durabilidade é a técnica de instalação e o acompanhamento — os dois ficam com a gente.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Dinheiro, PIX, cartão de débito e crédito com parcelamento. O plano de pagamento é montado junto com o plano de tratamento, sem surpresa no meio do caminho.",
  },
  {
    q: "A clínica aceita planos odontológicos?",
    a: "Trabalhamos com atendimento particular e avaliamos reembolso conforme o seu convênio. Na avaliação orientamos exatamente quais documentos solicitar ao seu plano.",
  },
  {
    q: "Os tratamentos estéticos são dolorosos?",
    a: "Não. Usamos anestesia adequada a cada procedimento e protocolos de conforto durante e depois do atendimento. A maioria dos pacientes volta às atividades no mesmo dia.",
  },
  {
    q: "Onde fica a clínica?",
    a: "No Centro da Praia Shopping — Av. Nossa Sra. da Penha, 570, Conj. 301/302, Praia do Canto, Vitória (ES). Estacionamento no local e acesso fácil de qualquer ponto da Grande Vitória.",
  },
  {
    q: "Vocês oferecem garantia nos tratamentos?",
    a: "Sim. Implantes e próteses têm garantia formalizada, condicionada às consultas de manutenção. Você sai daqui sabendo exatamente o que está coberto e por quanto tempo.",
  },
];

const services = [
  "Implantes dentários",
  "Lentes de contato dental",
  "Facetas em porcelana",
  "Harmonização orofacial",
  "Clareamento dental",
  "Reabilitação oral completa",
  "Ainda não sei — quero orientação",
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionLabel>Dúvidas frequentes</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08] text-ink text-balance-tight">
            Antes de decidir, é justo que você saiba de tudo.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Respostas diretas sobre prazo, dor, valores e garantia. Se a sua pergunta não estiver aqui,
            é só chamar no WhatsApp.
          </p>
          <div className="mt-8">
            <CtaButton variant="ink">Tirar minha dúvida</CtaButton>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="divide-y divide-border border-y border-border">
            {faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={`font-display text-lg transition-colors ${isOpen ? "text-ink" : "text-ink/70"}`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isOpen ? "rotate-45 border-mint bg-mint text-ink" : "border-border text-ink/60"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", telefone: "", servico: services[0]! });

  const message = `Olá! Meu nome é ${form.nome || "—"}. Telefone: ${form.telefone || "—"}. Tenho interesse em: ${form.servico}.`;

  return (
    <section id="contato" className="relative overflow-hidden surface-dark py-24 md:py-32">
      <div className="grid-tech pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionLabel>Próximo passo</SectionLabel>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.03] text-ivory text-balance-tight">
            Seu próximo sorriso começa com uma <span className="shine-text">conversa</span>.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/70">
            Marque sua avaliação e descubra, sem compromisso, qual caminho faz sentido para o seu caso.
          </p>
          <div className="mt-9">
            <CtaButton>Quero agendar minha avaliação</CtaButton>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="glass-card rounded-[2rem] p-7 md:p-9"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              window.open(`${WHATSAPP.split("?")[0]}?text=${encodeURIComponent(message)}`, "_blank");
            }}
          >
            <p className="font-display text-xl text-ivory">Prefere não usar o WhatsApp agora?</p>
            <p className="mt-2 text-sm text-ivory/60">
              Deixe seus dados: a recepção retorna com horários disponíveis.
            </p>

            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="eyebrow text-ivory/60">Nome</span>
                <input
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-ivory/20 bg-ink/40 px-4 py-3 text-ivory outline-none transition-colors placeholder:text-ivory/30 focus:border-mint"
                  placeholder="Como podemos te chamar?"
                />
              </label>
              <label className="block">
                <span className="eyebrow text-ivory/60">Telefone</span>
                <input
                  required
                  type="tel"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-ivory/20 bg-ink/40 px-4 py-3 text-ivory outline-none transition-colors placeholder:text-ivory/30 focus:border-mint"
                  placeholder="(27) 90000-0000"
                />
              </label>
              <label className="block">
                <span className="eyebrow text-ivory/60">Serviço de interesse</span>
                <select
                  value={form.servico}
                  onChange={(e) => setForm({ ...form, servico: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-ivory/20 bg-ink/40 px-4 py-3 text-ivory outline-none transition-colors focus:border-mint"
                >
                  {services.map((s) => (
                    <option key={s} value={s} className="text-ink">
                      {s}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-mint px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-400 hover:mint-glow"
            >
              Enviar e falar com a recepção
            </button>
            {sent && (
              <p className="mt-4 text-center text-sm text-mint" role="status">
                Pronto — abrimos o WhatsApp com seus dados preenchidos.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
