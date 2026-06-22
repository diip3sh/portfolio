import { SeparatorDot } from "@/components/portfolio/separator-dot"
import type { Stat } from "@/constants/types"

export const StatRow = ({ value, label }: Stat) => {
  return (
    <span className="inline-flex flex-wrap items-center gap-x-framer-3 gap-y-framer-1">
      <span className="type-body-small font-mono tabular-nums">{value}</span>
      <SeparatorDot />
      <span className="type-label text-muted-foreground">{label}</span>
    </span>
  )
}
