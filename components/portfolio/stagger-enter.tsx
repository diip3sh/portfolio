import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type StaggerProps = {
  children: ReactNode
  className?: string
}

export const StaggerEnter = ({ children, className }: StaggerProps) => {
  return <div className={className}>{children}</div>
}

// Runs from CSS so the page paints before hydration. A JS entrance would ship
// the prerendered HTML at opacity 0 until every client chunk has loaded.
export const StaggerItem = ({ children, className }: StaggerProps) => {
  return <div className={cn("stagger-item", className)}>{children}</div>
}
