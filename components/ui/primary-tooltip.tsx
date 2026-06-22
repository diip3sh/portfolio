"use client"

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "motion/react"
import { useId, useState, type AriaAttributes, type ReactNode } from "react"

import { cn } from "@/lib/utils"

type TooltipTriggerProps = AriaAttributes & {
  className: string
}

type PrimaryTooltipProps = {
  children: (props: TooltipTriggerProps) => ReactNode
  content: ReactNode
  id?: string
  className?: string
}

const enterTransition: Transition = {
  duration: 0.15,
  delay: 0.08,
  ease: "easeOut",
}

const exitTransition: Transition = {
  duration: 0.05,
  ease: "easeOut",
}

export const PrimaryTooltip = ({
  children,
  content,
  id,
  className,
}: PrimaryTooltipProps) => {
  const generatedId = useId()
  const tooltipId = id ?? generatedId
  const prefersReducedMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const isOpen = isHovered || isFocused

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)
  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {children({
        "aria-describedby": isOpen ? tooltipId : undefined,
        className: "outline-none",
      })}

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.span
            id={tooltipId}
            role="tooltip"
            initial={{
              opacity: 0,
              scale: prefersReducedMotion ? 1 : 0.98,
            }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: prefersReducedMotion ? 1 : 0.98,
              transition: exitTransition,
            }}
            transition={prefersReducedMotion ? exitTransition : enterTransition}
            className={cn(
              "pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-50 origin-bottom -translate-x-1/2 rounded-md bg-foreground px-3 py-1.5 text-xs leading-none font-medium whitespace-nowrap text-background shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.05),0_4px_42px_rgba(0,0,0,0.06)]",
              className
            )}
          >
            {content}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </span>
  )
}
