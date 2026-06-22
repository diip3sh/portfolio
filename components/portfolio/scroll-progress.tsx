"use client"

import { type RefObject } from "react"

import { ScrollProgress as MotionScrollProgress } from "@/components/motion-primitives/scroll-progress"
import { cn } from "@/lib/utils"

type ScrollProgressProps = {
  containerRef: RefObject<HTMLElement | null>
  className?: string
}

export const ScrollProgress = ({
  containerRef,
  className = "",
}: ScrollProgressProps) => {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none relative h-[3px] w-full", className)}
    >
      <div className="absolute top-0 left-0 h-[3px] w-full bg-dark-gray dark:bg-[#111111]" />
      <MotionScrollProgress
        className="absolute top-0 left-0 h-[3px] bg-[linear-gradient(to_right,rgba(0,0,0,0),#111111_75%,#111111_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0),#ffffff_75%,#ffffff_100%)]"
        containerRef={containerRef}
        springOptions={{
          stiffness: 280,
          damping: 18,
          mass: 0.3,
        }}
      />
    </div>
  )
}
