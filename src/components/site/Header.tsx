import { useEffect, useState } from "react";
import { CtaButton } from "./primitives";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Clínica", href: "#clinica" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-ivory/10 bg-ink/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 md:px-10">
        <a href="#top" className="text-ivory" aria-label="Visual Odonto — página inicial">
          <Logo size={42} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-ivory/75 transition-colors hover:text-ivory"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-mint transition-all duration-400 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CtaButton className="hidden sm:inline-flex">Agende agora</CtaButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Abrir menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-ivory/20 lg:hidden"
          >
            <span
              className={`h-px w-5 bg-ivory transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-ivory transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-ivory/10 bg-ink/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Navegação móvel">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-ivory/5 py-3 font-display text-lg text-ivory/85"
            >
              {l.label}
            </a>
          ))}
          <CtaButton className="mt-4 justify-center">Agende sua avaliação</CtaButton>
        </nav>
      </div>
    </header>
  );
}
