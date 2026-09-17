import type { SVGProps } from "react"

type DoodleProps = SVGProps<SVGSVGElement>

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

export function Pen(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M46 8 58 20 24 54l-16 4 4-16Z" />
      <path d="M39 15 51 27" />
      <path d="M8 58l4-4" />
    </svg>
  )
}

export function Star(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M32 6 39 26 60 27 43 40 49 60 32 48 15 60 21 40 4 27 25 26Z" />
    </svg>
  )
}

export function Heart(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M32 56C10 42 4 30 4 20c0-9 7-14 14-14 7 0 11 5 14 9 3-4 7-9 14-9 7 0 14 5 14 14 0 10-6 22-28 36Z" />
    </svg>
  )
}

export function Scissors(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <circle cx="14" cy="14" r="7" />
      <circle cx="14" cy="50" r="7" />
      <path d="M20 19 56 55M20 45 56 9" />
    </svg>
  )
}

export function Paperclip(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M44 12 20 36a10 10 0 0 0 14 14l22-22a16 16 0 0 0-22-22L10 30a22 22 0 0 0 31 31" />
    </svg>
  )
}

export function WashiRoll(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <ellipse cx="32" cy="20" rx="24" ry="10" />
      <path d="M8 20v20c0 5.5 10.7 10 24 10s24-4.5 24-10V20" />
      <ellipse cx="32" cy="20" rx="9" ry="4" />
    </svg>
  )
}

export function Notebook(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <rect x="12" y="6" width="42" height="52" rx="4" />
      <path d="M4 12h6M4 22h6M4 32h6M4 42h6M4 52h6" />
      <path d="M22 20h24M22 30h24M22 40h16" />
    </svg>
  )
}

export function Envelope(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <rect x="6" y="14" width="52" height="38" rx="3" />
      <path d="M6 16 32 38 58 16" />
    </svg>
  )
}

export function Ribbon(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M32 30c-6-10-18-14-24-8-5 5 1 15 24 8Z" />
      <path d="M32 30c6-10 18-14 24-8 5 5-1 15-24 8Z" />
      <circle cx="32" cy="30" r="5" />
      <path d="M28 34 20 58M36 34 44 58" />
    </svg>
  )
}

export function Sparkle(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M32 6c1 12 6 17 18 18-12 1-17 6-18 18-1-12-6-17-18-18 12-1 17-6 18-18Z" />
    </svg>
  )
}

export function Cloud(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M18 44a12 12 0 0 1-1-24 14 14 0 0 1 27-5 11 11 0 0 1 12 11 10 10 0 0 1-2 18Z" />
    </svg>
  )
}

export function Ampulheta(props: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" {...base} {...props}>
      <path d="M14 8h36M14 56h36M16 8c0 16 12 18 16 24-4 6-16 8-16 24M48 8c0 16-12 18-16 24 4 6 16 8 16 24" />
    </svg>
  )
}
