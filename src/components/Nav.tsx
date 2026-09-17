import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Pen } from "./doodles/Doodles"

const LINKS = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#oficinas", label: "Oficinas" },
  { href: "#historias", label: "Histórias" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50 px-5 pt-5 sm:px-8 sm:pt-8">
      <div className="flex max-w-fit flex-wrap items-center gap-2.5">
        <a
          href="#topo"
          className="flex items-center gap-2 rounded-[47px] border-2 border-ink bg-ink px-4 py-2.5 text-peach"
        >
          <Pen className="h-5 w-5 -rotate-12" aria-hidden="true" />
          <span className="font-display text-[17px] leading-none">Rabisco</span>
        </a>

        <nav className="hidden items-center gap-2.5 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-[47px] border-2 border-ink bg-snow px-5 py-2.5 font-sans text-[15px] font-medium text-ink transition-colors hover:bg-sunbeam"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menu"
          className="flex items-center gap-2 rounded-[47px] border-2 border-ink bg-snow px-4 py-2.5 font-sans text-[15px] font-medium text-ink lg:hidden"
        >
          <span className="relative flex h-3.5 w-4 flex-col justify-between">
            <motion.span
              className="h-[2px] w-full bg-ink"
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            />
            <motion.span className="h-[2px] w-full bg-ink" animate={open ? { opacity: 0 } : { opacity: 1 }} />
            <motion.span
              className="h-[2px] w-full bg-ink"
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            />
          </span>
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-2.5 flex flex-col gap-2.5 overflow-hidden lg:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[47px] border-2 border-ink bg-snow px-5 py-3 text-center font-sans text-[15px] font-medium text-ink"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
