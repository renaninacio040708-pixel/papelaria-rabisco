import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const pill = cva(
  "inline-flex items-center justify-center gap-2 rounded-[47px] border-2 border-ink font-sans font-semibold text-[15px] transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-45 disabled:hover:translate-y-0",
  {
    variants: {
      tone: {
        white: "bg-snow text-ink",
        peach: "bg-peach text-ink",
        ember: "bg-ember text-ink",
        sunbeam: "bg-sunbeam text-ink",
        mint: "bg-mint text-ink",
        lilac: "bg-lilac text-ink",
        ink: "bg-ink text-peach",
      },
      size: {
        md: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: { tone: "white", size: "md" },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pill> {
  children: ReactNode
}

export function Button({ className, tone, size, children, ...props }: ButtonProps) {
  return (
    <button className={cn(pill({ tone, size }), className)} {...props}>
      {children}
    </button>
  )
}

interface LinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof pill> {
  children: ReactNode
}

export function LinkButton({ className, tone, size, children, ...props }: LinkButtonProps) {
  return (
    <a className={cn(pill({ tone, size }), className)} {...props}>
      {children}
    </a>
  )
}
