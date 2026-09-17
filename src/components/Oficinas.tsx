import { motion } from "motion/react"
import { LinkButton } from "./ui/Button"
import { FloatingDoodle } from "./doodles/FloatingDoodle"
import { Scissors, Star, Cloud } from "./doodles/Doodles"
import { whatsappLink } from "@/lib/constants"

export function Oficinas() {
  return (
    <section id="oficinas" className="relative overflow-hidden bg-powder px-5 py-16 sm:px-8 lg:py-20">
      <FloatingDoodle icon={Cloud} className="left-[4%] top-[8%]" size={64} rotate={0} color="var(--color-ink)" />
      <FloatingDoodle icon={Star} className="right-[6%] top-[14%]" size={36} rotate={12} color="var(--color-sunbeam)" />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h2 className="font-display text-heading sm:text-heading-lg">
            Todo sábado, a mesa do fundo vira ateliê.
          </h2>
          <p className="mt-5 max-w-lg text-body text-ink/85">
            Das 14h às 16h a gente afasta as prateleiras, estende o oleado e abre o
            armário de recortes, carimbos e washi tapes. Cabem 8 pessoas por turma —
            leve fotos reveladas, bilhetes de viagem ou aquele bilhete que não coube
            em lugar nenhum. O resto (papel, cola, tesoura boa) já fica por conta da
            loja.
          </p>
          <p className="mt-4 max-w-lg text-body text-ink/85">
            De vez em quando quem puxa a oficina é um dos ilustradores que assina
            nosso papel de carta — quando isso acontece, avisamos no grupo do
            WhatsApp com uma semana de antecedência.
          </p>
          <div className="mt-8">
            <LinkButton
              href={whatsappLink("Oi! Quero garantir uma vaga na oficina de scrapbook de sábado.")}
              target="_blank"
              rel="noreferrer"
              tone="white"
              size="lg"
            >
              Garantir vaga no sábado
            </LinkButton>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: -4, y: 20 }}
          whileInView={{ opacity: 1, rotate: -3, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-sm rounded-card border-2 border-ink bg-snow p-8"
        >
          <FloatingDoodle icon={Scissors} className="right-[8%] top-[6%]" size={40} rotate={20} color="var(--color-ink)" drift={false} />
          <p className="font-display text-caption uppercase tracking-[0.14em] text-ink/70">Ficha da oficina</p>
          <p className="mt-3 font-display text-heading-sm">Scrapbook de sábado</p>
          <ul className="mt-6 flex flex-col gap-3 text-[15px] text-ink/80">
            <li className="flex justify-between border-b border-dashed border-ink/30 pb-3">
              <span>Quando</span>
              <span className="font-semibold">Sábados, 14h às 16h</span>
            </li>
            <li className="flex justify-between border-b border-dashed border-ink/30 pb-3">
              <span>Onde</span>
              <span className="font-semibold">Mesa do fundo, na loja</span>
            </li>
            <li className="flex justify-between border-b border-dashed border-ink/30 pb-3">
              <span>Turma</span>
              <span className="font-semibold">Até 8 pessoas</span>
            </li>
            <li className="flex justify-between">
              <span>Material</span>
              <span className="font-semibold">Incluso</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
