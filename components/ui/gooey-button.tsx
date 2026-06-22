"use client"

import * as React from "react"
import { type Variants, motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

type GooeyButtonProps = React.ComponentProps<typeof motion.button> & {
  /** Icon rendered inside the circular node on the left. */
  icon?: React.ReactNode
  /** Visual scale. `sm` suits secondary actions like a back button. */
  size?: "sm" | "default"
}

const SIZES = {
  sm: { btn: "h-8 min-w-[5rem]", text: "text-sm", icon: "[&_svg]:size-4", node: 32, neck: 22, blur: 1.8 },
  default: { btn: "h-10 min-w-[7rem]", text: "text-xl", icon: "[&_svg]:size-5", node: 40, neck: 28, blur: 2.2 },
} as const

/**
 * Neon "node + pill" button.
 *
 * A circular icon node is joined to a label pill by a liquid metaball neck.
 * The merge is produced by an SVG goo filter: feGaussianBlur fuses the
 * overlapping shapes, then feColorMatrix thresholds the alpha back to a crisp
 * edge — so the internal blur is invisible, only the pinched silhouette shows.
 * An outer green layer and an inset background layer run through the same
 * filter, leaving a neon outline that follows the merged shape.
 *
 * Motion: at rest only the label pill shows. On hover the node + neck spring
 * out from the left and the pill slides over to make room. All three layers
 * (outer goo, inner goo, content) share the same flex structure, so they stay
 * pixel-aligned through the whole transition. Animation drives transform/width
 * with a lightly-bouncy spring; respects prefers-reduced-motion.
 */
function GooeyButton({
  className,
  icon,
  children,
  size = "default",
  ...props
}: GooeyButtonProps) {
  const filterId = React.useId()
  const reduce = useReducedMotion()
  const sz = SIZES[size]

  // emil-style: snappy spring, small bounce, short. opacity is a quick tween.
  const spring = reduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 520, damping: 30, mass: 0.7 }

  // node grows from 0 → 40 (collapsed at rest = clean pill only)
  const nodeV: Variants = {
    rest: { width: 0, marginRight: 0, scale: 0.4, opacity: 0 },
    hover: { width: sz.node, marginRight: -11, scale: 1, opacity: 1 },
  }
  // neck bridge — pinches node + pill into one blob via negative margins
  const neckV: Variants = {
    rest: { width: 0, marginLeft: 0, marginRight: 0, opacity: 0 },
    hover: { width: sz.neck, marginLeft: -11, marginRight: -11, opacity: 1 },
  }
  // icon glyph: extra pop + slide so it reads as "coming out of" the pill
  const glyphV: Variants = {
    rest: { x: -10, scale: 0.5, opacity: 0 },
    hover: { x: 0, scale: 1, opacity: 1 },
  }

  // one flex row of solid fills, reused per layer. `fill` + `inset` style each goo pass.
  const Layer = ({
    fill,
    inset,
    style,
  }: {
    fill: string
    inset?: boolean
    style?: React.CSSProperties
  }) => (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center",
        inset && "p-[3px]"
      )}
      style={style}
    >
      <motion.span
        variants={nodeV}
        transition={spring}
        className={cn("h-full shrink-0 origin-left rounded-full", fill)}
      />
      <motion.span
        variants={neckV}
        transition={spring}
        className={cn("h-[76%] shrink-0", fill)}
      />
      <span className={cn("h-full flex-1 rounded-full", fill)} />
    </span>
  )

  return (
    <motion.button
      data-slot="gooey-button"
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      className={cn(
        "group relative inline-flex cursor-pointer items-center bg-transparent outline-none transition-[filter] duration-150 hover:brightness-125 focus-visible:brightness-125 active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
        sz.btn,
        className
      )}
      {...props}
    >
      <svg aria-hidden="true" className="absolute size-0">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation={sz.blur} result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
            />
          </filter>
        </defs>
      </svg>

      {/* neon outline: outer green goo + inset background goo, both filtered together */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-current"
        style={{ filter: `url(#${filterId})` }}
      >
        <Layer fill="bg-current" />
        <Layer fill="bg-background" inset />
      </span>

      {/* content — same flex skeleton so it tracks the goo exactly */}
      <span className="pointer-events-none relative flex h-full w-full items-center">
        <motion.span
          variants={nodeV}
          transition={spring}
          className={cn(
            "flex h-full shrink-0 items-center justify-center overflow-hidden",
            sz.icon
          )}
        >
          <motion.span variants={glyphV} transition={spring} className="flex">
            {icon}
          </motion.span>
        </motion.span>
        <motion.span variants={neckV} transition={spring} className="shrink-0" />
        <span
          className={cn(
            "flex-1 px-3 text-center font-semibold tracking-wide whitespace-nowrap text-shadow-xs uppercase",
            sz.text
          )}
        >
          {children as React.ReactNode}
        </span>
      </span>
    </motion.button>
  )
}

export { GooeyButton }
