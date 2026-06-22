import type { Stat } from "@/constants/types"

export const homeAbout = {
  heading: "Between design and code",
  body: "I design and build interfaces that feel clear, polished, and production-ready — from dashboard flows and landing pages to interactive components, visual systems, and motion details.",
} as const

export const homeStats: Stat[] = [
  { value: "3+", label: "Years experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "3", label: "Disciplines" },
  { value: "100%", label: "Design-led code" },
]
