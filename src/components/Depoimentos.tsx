import { motion } from "motion/react"
import { Heart, Star, Sparkle } from "./doodles/Doodles"

const DEPOIMENTOS = [
  {
    quote:
      "Pedi o planner com o nome da minha mãe pro aniversário de 60 anos dela. Ela usa até pra fazer lista de mercado — disse que agora sente que o caderno é mesmo dela.",
    name: "Fernanda Aoki",
    context: "encomendou um Planner Nome Próprio",
    tint: "bg-mint",
    icon: Heart,
    rotate: -1.5,
  },
  {
    quote:
      "Fui pra oficina de sábado achando que ia ficar de fora por não saber recortar direito. Saí com um álbum de viagem inteiro e voltei nas duas semanas seguintes.",
    name: "Diego Salustiano",
    context: "aluno fixo da oficina de sábado",
    tint: "bg-sunbeam",
    icon: Star,
    rotate: 1.5,
  },
  {
    quote:
      "Comprei o papel de carta assinado pela Bruna pra escrever pra minha avó, que mora em Recife. Ela guardou o envelope antes de guardar a carta.",
    name: "Larissa Prado",
    context: "cliente da coleção Quintal",
    tint: "bg-lilac",
    icon: Sparkle,
    rotate: -1,
  },
]

export function Depoimentos() {
  return (
    <section id="historias" className="px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-lg font-display text-heading sm:text-heading-lg">
          Quem escreveu, guardou.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {DEPOIMENTOS.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 24, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
              whileHover={{ rotate: 0, y: -4 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-5 rounded-card border-2 border-ink bg-snow p-7"
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink ${item.tint}`}>
                <item.icon className="h-6 w-6 text-ink" aria-hidden="true" />
              </span>
              <blockquote className="text-[15px] leading-[1.6] text-ink/85">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-2">
                <p className="font-display text-[16px]">{item.name}</p>
                <p className="text-caption text-ink/70">{item.context}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
