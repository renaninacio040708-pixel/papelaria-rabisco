import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const PERGUNTAS = [
  {
    q: "Quanto tempo leva pra gravar o nome no planner?",
    a: "Normalmente três dias úteis, porque a gravação é feita à mão, uma de cada vez. Em novembro e dezembro o prazo sobe pra cinco dias — vale encomendar com antecedência se for presente de fim de ano.",
  },
  {
    q: "Vocês entregam ou é só retirada na loja?",
    a: "As duas coisas. Quem é do bairro costuma retirar na Baeta Neves; pra outras regiões de São Bernardo combinamos entrega por motoboy no mesmo dia da retirada. É só combinar pelo WhatsApp na hora da encomenda.",
  },
  {
    q: "Preciso me inscrever pra oficina de sábado ou é só aparecer?",
    a: "Precisa avisar antes — as turmas têm no máximo 8 pessoas pra caber todo mundo na mesa do fundo. Manda mensagem no WhatsApp até sexta-feira e garantimos o lugar.",
  },
  {
    q: "Sou ilustrador(a) e queria propor uma coleção de papel de carta. Como funciona?",
    a: "Manda um portfólio ou perfil com seus desenhos pelo formulário de contato ali embaixo, marcando a opção 'quero ser parceiro ilustrador'. A gente responde pessoalmente — geralmente entre uma e duas semanas.",
  },
  {
    q: "Dá pra personalizar outros produtos além do planner?",
    a: "Dá sim: cadernos pontilhados e estojos aceitam gravação de nome ou iniciais. Papel de carta e adesivos são de coleção fechada, então esses não personalizamos.",
  },
  {
    q: "E se eu errar a grafia do nome na hora de pedir?",
    a: "Confirmamos a grafia por escrito antes de gravar — mandamos uma foto de como vai ficar pelo WhatsApp pra você aprovar. Depois que a peça é gravada não tem como desfazer, por isso essa confirmação é sempre feita antes.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-heading sm:text-heading-lg">
          Perguntas antes de encomendar
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          {PERGUNTAS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="overflow-hidden rounded-card border-2 border-ink bg-snow">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-[17px] leading-[1.25] sm:text-[19px]">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-ink text-[20px] leading-none"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[15px] leading-[1.6] text-ink/80">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
