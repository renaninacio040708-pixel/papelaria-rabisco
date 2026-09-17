import { motion } from "motion/react"
import { FloatingDoodle } from "./doodles/FloatingDoodle"
import { Pen, Sparkle, Ribbon, Envelope } from "./doodles/Doodles"

export function Diferenciais() {
  return (
    <section className="flex flex-col gap-6 px-5 py-10 sm:px-8 lg:gap-8 lg:py-14">
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[47px] bg-ember px-6 py-10 sm:px-12 sm:py-14 lg:px-16"
      >
        <FloatingDoodle icon={Pen} className="right-[8%] top-[10%]" size={56} rotate={-16} color="var(--color-ink)" drift={false} />
        <FloatingDoodle icon={Sparkle} className="right-[22%] bottom-[14%]" size={32} rotate={0} color="var(--color-ink)" drift={false} />
        <div className="relative max-w-xl rotate-1">
          <h3 className="font-display text-heading-sm sm:text-subheading">
            O planner chega com o seu nome gravado — não com uma etiqueta colada.
          </h3>
          <p className="mt-4 text-body text-ink/85">
            Você escolhe a cor da capa, a pauta (linhas, pontilhado ou lisa) e o mês
            de início. A gravação é feita aqui mesmo, à mão, no balcão da loja —
            geralmente fica pronta em três dias úteis. Nada de arquivo mandado pra
            gráfica e devolvido igual ao de todo mundo.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 1 }}
        whileInView={{ opacity: 1, y: 0, rotate: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative ml-auto overflow-hidden rounded-[47px] bg-lilac px-6 py-10 sm:px-12 sm:py-14 sm:max-w-2xl lg:px-16"
      >
        <FloatingDoodle icon={Envelope} className="left-[6%] top-[12%]" size={54} rotate={10} color="var(--color-ink)" drift={false} />
        <FloatingDoodle icon={Ribbon} className="left-[20%] bottom-[10%]" size={36} rotate={-8} color="var(--color-ink)" drift={false} />
        <div className="relative ml-auto max-w-xl -rotate-1 text-left sm:pl-12">
          <h3 className="font-display text-heading-sm sm:text-subheading">
            Papel de carta ilustrado por quem desenha aqui perto.
          </h3>
          <p className="mt-4 text-body text-ink/85">
            As estampas de papel de carta e envelopes nascem de uma parceria com
            ilustradores do bairro — cada coleção sai limitada e leva a assinatura
            de quem desenhou, impressa no verso da última folha. Quando a coleção
            esgota, não volta a ser feita igual.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
