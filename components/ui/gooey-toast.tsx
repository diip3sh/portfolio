"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type GooeyToastProps = {
  /** Icon rendered inside the circular node on the left. */
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
}

/**
 * Neon "node + pill" toast — same metaball language as GooeyButton.
 *
 * feGaussianBlur fuses the overlapping circle + bridge + pill, then
 * feColorMatrix thresholds the alpha back to a crisp edge, producing the
 * pinched liquid neck. An outer green layer and an inset background layer run
 * through the same filter, leaving a neon outline that traces the merged shape.
 */
function GooeyToast({ icon, children, className }: GooeyToastProps) {
  const filterId = React.useId()

  const shapes = (
    <>
      <span className="absolute top-0 left-0 size-10 rounded-full border border-emerald-100 bg-emerald-700" />
      <span className="absolute top-1/2 left-8 h-6 w-9 -translate-y-1/2 border border-emerald-100 bg-emerald-700" />
      <span className="absolute inset-y-0 right-0 left-9 rounded-full border border-emerald-100 bg-emerald-700" />
    </>
  )

  return (
    <div
      className={cn(
        "relative inline-flex h-10 min-w-[8rem] items-center text-white",
        className
      )}
    >
      <svg aria-hidden="true" className="absolute size-0">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
            />
          </filter>
        </defs>
      </svg>

      {/* filled metaball blob */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ filter: `url(#${filterId})` }}
      >
        {shapes}
      </span>

      {/* content */}
      <span className="relative flex size-10 items-center justify-center [&_svg]:size-5">
        {icon}
      </span>
      <span className="relative flex-1 px-4 text-center text-base font-semibold tracking-tight whitespace-nowrap">
        {children}
      </span>
    </div>
  )
}

export { GooeyToast }
