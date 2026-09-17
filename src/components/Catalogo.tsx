import { motion } from "motion/react"
import type { ComponentType, SVGProps } from "react"
import { LinkButton } from "./ui/Button"
import { Notebook, Pen, Sparkle, Envelope, WashiRoll, Ribbon } from "./doodles/Doodles"
import { whatsappLink } from "@/lib/constants"

interface Product {
  name: string
  category: string
  description: string
  price: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  tint: string
  rotate: number
}

const PRODUCTS: Product[] = [
  {
    name: "Planner Nome Próprio",
    category: "Personalizado",
    description: "Capa dura, gravação do seu nome à mão e escolha de pauta: linhas, pontilhado ou lisa.",
    price: "R$ 149",
    icon: Notebook,
    tint: "bg-ember",
    rotate: -2,
  },
  {
    name: 'Papel de Carta "Quintal"',
    category: "Edição limitada",
    description: "10 folhas e 10 envelopes ilustrados por uma parceira local. Assinatura no verso da última folha.",
    price: "R$ 39",
    icon: Envelope,
    tint: "bg-lilac",
    rotate: 2,
  },
  {
    name: "Caderno Pontilhado Rabisco",
    category: "Journaling",
    description: "160 páginas em papel 90g que aguenta caneta nanquim sem borrar do outro lado.",
    price: "R$ 62",
    icon: Pen,
    tint: "bg-mint",
    rotate: -1.5,
  },
  {
    name: "Estojo Fineliner 6 Cores",
    category: "Materiais",
    description: "Ponta 0.4, tinta pigmentada — a mesma que usamos nas oficinas de sábado.",
    price: "R$ 54",
    icon: Sparkle,
    tint: "bg-sunbeam",
    rotate: 2.5,
  },
  {
    name: "Kit Washi Tapes Bairro",
    category: "Decoração",
    description: "6 rolos com estampas desenhadas pelos mesmos ilustradores do papel de carta.",
    price: "R$ 34",
    icon: WashiRoll,
    tint: "bg-powder",
    rotate: -2,
  },
  {
    name: "Kit Scrapbook Iniciante",
    category: "Oficina",
    description: "Tudo o que você precisa pra sua primeira oficina de sábado, já embalado pra levar.",
    price: "R$ 79",
    icon: Ribbon,
    tint: "bg-magenta",
    rotate: 1.5,
  },
]

export function Catalogo() {
  return (
    <section id="catalogo" className="px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2 className="font-display text-heading sm:text-heading-lg">
            O que sai daqui do balcão
          </h2>
          <p className="mt-4 text-body text-ink/80">
            Uma seleção do que fica na loja física, na Baeta Neves. Encomenda
            personalizada e retirada combinada pelo WhatsApp, sem loja online cheia
            de variações que confundem.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 24, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: product.rotate }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ rotate: 0, y: -4 }}
              className="flex flex-col overflow-hidden rounded-card border-2 border-ink bg-snow"
            >
              <div className={`flex h-40 items-center justify-center ${product.tint}`}>
                <product.icon className="h-16 w-16 text-ink" aria-hidden="true" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="w-fit rounded-[47px] border-2 border-ink px-3 py-1 text-caption font-semibold uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="font-display text-[20px] leading-[1.15]">{product.name}</h3>
                <p className="text-[15px] leading-[1.5] text-ink/75">{product.description}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                  <span className="font-display text-[20px]">{product.price}</span>
                  <LinkButton
                    href={whatsappLink(`Oi! Quero encomendar: ${product.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    tone="white"
                    size="sm"
                  >
                    Encomendar
                  </LinkButton>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
