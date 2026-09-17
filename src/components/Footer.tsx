import { Pen } from "./doodles/Doodles"
import { BUSINESS } from "@/lib/constants"

const NAV_LINKS = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#oficinas", label: "Oficinas" },
  { href: "#historias", label: "Histórias" },
  { href: "#faq", label: "Dúvidas" },
]

const LOJA_LINKS = [
  { href: "#contato", label: "Fale conosco" },
  { href: "#loja", label: "Como chegar" },
]

export function Footer() {
  return (
    <footer className="px-5 pb-10 pt-6 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 border-t-2 border-ink pt-10 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-3">
          <span className="flex w-fit items-center gap-2 rounded-[47px] border-2 border-ink bg-ink px-4 py-2 text-peach">
            <Pen className="h-4 w-4 -rotate-12" aria-hidden="true" />
            <span className="font-display text-[15px]">Rabisco</span>
          </span>
          <p className="max-w-xs text-[14px] text-ink/70">
            Papelaria criativa e personalizada, feita à mão na Baeta Neves, São
            Bernardo do Campo.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <div className="flex flex-col gap-2">
            <p className="text-caption font-semibold uppercase tracking-wide text-ink/70">Navegar</p>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-[15px] hover:underline">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-caption font-semibold uppercase tracking-wide text-ink/70">Loja</p>
            {LOJA_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-[15px] hover:underline">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-caption font-semibold uppercase tracking-wide text-ink/70">Contato</p>
            <a href={`mailto:${BUSINESS.email}`} className="text-[15px] hover:underline">
              {BUSINESS.email}
            </a>
            <span className="text-[15px]">{BUSINESS.phoneDisplay}</span>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-[13px] text-ink/70">
        © {new Date().getFullYear()} Papelaria Rabisco. Feito com carinho pro bairro.
      </p>
    </footer>
  )
}
