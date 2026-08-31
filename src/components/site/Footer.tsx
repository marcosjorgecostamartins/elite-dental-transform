import { Logo } from "./Logo";
import { MAPS } from "./primitives";

export function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-ink pb-10 pt-16 text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-mint/40 font-display text-lg text-mint">
              VO
            </span>
            <span>
              <span className="block font-display text-lg">Visual Odonto</span>
              <span className="eyebrow block text-mint/80">Integra Clínica</span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
            Especializada em implantes dentários e estética do sorriso. Transformando vidas através de
            sorrisos perfeitos.
          </p>
        </div>

        <div>
          <h2 className="eyebrow text-ivory/45">Contato</h2>
          <ul className="mt-4 space-y-2 text-sm text-ivory/75">
            <li>
              <a href="tel:+5527993098190" className="transition-colors hover:text-mint">
                (27) 99309-8190
              </a>
            </li>
            <li>
              <a href="mailto:contato@visualodonto.com.br" className="transition-colors hover:text-mint">
                contato@visualodonto.com.br
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/visualodonto"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-mint"
              >
                @visualodonto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-ivory/45">Localização</h2>
          <address className="mt-4 text-sm not-italic leading-relaxed text-ivory/75">
            Centro da Praia Shopping
            <br />
            Av. Nossa Sra. da Penha, 570 — Conj. 301/302
            <br />
            Praia do Canto, Vitória — ES, 29055-131
          </address>
          <a
            href={MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-mint"
          >
            Abrir no Maps →
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-2 border-t border-ivory/10 px-5 pt-6 text-xs text-ivory/45 md:flex-row md:items-center md:justify-between md:px-10">
        <p>© 2024 Visual Odonto Integra Clínica. Todos os direitos reservados.</p>
        <p>Praia do Canto · Vitória — ES</p>
      </div>
    </footer>
  );
}
