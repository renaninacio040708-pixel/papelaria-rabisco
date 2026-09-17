import type { ComponentType, SVGProps } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface FloatingDoodleProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  className?: string
  size?: number
  rotate?: number
  color?: string
  drift?: boolean
  delay?: number
}

export function FloatingDoodle({
  icon: Icon,
  className,
  size = 48,
  rotate = 0,
  color = "var(--color-ink)",
  drift = true,
  delay = 0,
}: FloatingDoodleProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn("pointer-events-none absolute hidden select-none lg:block", className)}
      style={{ color, width: size, height: size, rotate }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        animate={drift ? { y: [0, -10, 0], rotate: [rotate, rotate + 6, rotate] } : undefined}
        transition={drift ? { duration: 6, repeat: Infinity, ease: "easeInOut", delay } : undefined}
      >
        <Icon width={size} height={size} />
      </motion.div>
    </motion.div>
  )
}
