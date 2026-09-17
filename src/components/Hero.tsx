import { motion } from "motion/react"
import { LinkButton } from "./ui/Button"
import { FloatingDoodle } from "./doodles/FloatingDoodle"
import { Star, WashiRoll, Scissors, Pen, Paperclip, Heart, Sparkle } from "./doodles/Doodles"
import { whatsappLink } from "@/lib/constants"

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden px-5 pb-24 pt-16 sm:px-8 sm:pt-20 lg:pb-32 lg:pt-24">
      <FloatingDoodle icon={Star} className="left-[6%] top-[8%]" size={44} rotate={-12} color="var(--color-ember)" delay={0.1} />
      <FloatingDoodle icon={WashiRoll} className="right-[10%] top-[4%]" size={72} rotate={10} color="var(--color-magenta)" delay={0.25} />
      <FloatingDoodle icon={Scissors} className="left-[3%] top-[48%]" size={52} rotate={18} color="var(--color-ink)" delay={0.4} />
      <FloatingDoodle icon={Pen} className="right-[4%] top-[42%]" size={60} rotate={-20} color="var(--color-cobalt)" delay={0.15} />
      <FloatingDoodle icon={Paperclip} className="left-[12%] bottom-[6%]" size={48} rotate={-8} color="var(--color-lime)" delay={0.3} />
      <FloatingDoodle icon={Heart} className="right-[14%] bottom-[10%]" size={40} rotate={14} color="var(--color-lilac)" delay={0.5} />
      <FloatingDoodle icon={Sparkle} className="left-[45%] top-[2%]" size={30} rotate={0} color="var(--color-sunbeam)" delay={0.2} />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display text-[52px] leading-[1.05] sm:text-[76px] lg:text-display"
        >
          Seu nome
          <br />
          na capa.
          <br />
          Seu jeito
          <br />
          no papel.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl text-left text-body text-ink/80 sm:text-center"
        >
          Planner com o seu nome gravado na capa, papel de carta ilustrado por quem
          desenha aqui do bairro e uma mesa de canto reservada todo sábado pra quem
          gosta de rabiscar até a loja fechar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <LinkButton href="#catalogo" tone="white" size="lg">
            Ver o catálogo
          </LinkButton>
          <LinkButton
            href={whatsappLink("Oi! Quero saber mais sobre os planners personalizados da Rabisco.")}
            target="_blank"
            rel="noreferrer"
            tone="sunbeam"
            size="lg"
          >
            Encomendar um planner
          </LinkButton>
        </motion.div>
      </div>
    </section>
  )
}
