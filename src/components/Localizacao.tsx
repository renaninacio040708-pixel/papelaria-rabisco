import { motion } from "motion/react"
import { BUSINESS } from "@/lib/constants"

export function Localizacao() {
  return (
    <section id="loja" className="px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <h2 className="font-display text-heading sm:text-heading-lg">
            Passa lá na loja
          </h2>
          <p className="mt-5 text-body text-ink/85">{BUSINESS.address}</p>

          <ul className="mt-6 flex flex-col gap-2 text-[15px]">
            {BUSINESS.hours.map((h) => (
              <li key={h.label} className="flex justify-between gap-6 border-b border-dashed border-ink/25 py-2">
                <span className="text-ink/70">{h.label}</span>
                <span className="font-semibold">{h.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-card border-2 border-ink"
        >
          <iframe
            title="Mapa até a Papelaria Rabisco"
            src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsQuery)}&output=embed`}
            width="100%"
            height="360"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
