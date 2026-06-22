"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion, type Transition } from "motion/react"
import { cn } from "@/lib/utils"

export interface MenuBarItem {
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode
  label: string
  iconClassName?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
}

interface MenuBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MenuBarItem[]
}

type TooltipPlacement = {
  top: number
  left: number
  side: "top" | "bottom"
}

// Emil-style: quick, no-bounce spring so the tooltip feels instant but soft.
const tooltipSpring = {
  type: "spring",
  stiffness: 550,
  damping: 32,
  mass: 0.7,
} satisfies Transition

const TOOLTIP_GAP_PX = 8
const VIEWPORT_PADDING_PX = 8

const handleItemClick = (
  event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  onClick?: () => void
) => {
  onClick?.()

  if (event.detail === 0) {
    return
  }

  event.currentTarget.blur()
}

const getTooltipPlacement = (
  itemRect: DOMRect,
  tooltipRect: DOMRect
): TooltipPlacement => {
  const centeredLeft =
    itemRect.left + itemRect.width / 2 - tooltipRect.width / 2
  const clampedLeft = Math.max(
    VIEWPORT_PADDING_PX,
    Math.min(
      centeredLeft,
      window.innerWidth - tooltipRect.width - VIEWPORT_PADDING_PX
    )
  )

  const topAbove = itemRect.top - tooltipRect.height - TOOLTIP_GAP_PX
  if (topAbove >= VIEWPORT_PADDING_PX) {
    return { top: topAbove, left: clampedLeft, side: "top" }
  }

  return {
    top: itemRect.bottom + TOOLTIP_GAP_PX,
    left: clampedLeft,
    side: "bottom",
  }
}

export function ToolsMenu({ items, className, ...props }: MenuBarProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const [isMounted, setIsMounted] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)
  const tooltipRef = React.useRef<HTMLDivElement>(null)
  const [tooltipPlacement, setTooltipPlacement] =
    React.useState<TooltipPlacement>({
      top: 0,
      left: 0,
      side: "top",
    })
  const [isTooltipPositioned, setIsTooltipPositioned] = React.useState(false)

  const updateTooltipPlacement = React.useCallback(() => {
    if (activeIndex === null || !menuRef.current || !tooltipRef.current) {
      return
    }

    const menuItem = menuRef.current.children[activeIndex] as HTMLElement | undefined
    if (!menuItem) {
      return
    }

    setTooltipPlacement(
      getTooltipPlacement(
        menuItem.getBoundingClientRect(),
        tooltipRef.current.getBoundingClientRect()
      )
    )
  }, [activeIndex])

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  React.useLayoutEffect(() => {
    if (activeIndex === null) {
      setIsTooltipPositioned(false)
      return
    }

    updateTooltipPlacement()
    setIsTooltipPositioned(true)
  }, [activeIndex, items, updateTooltipPlacement])

  React.useEffect(() => {
    if (activeIndex === null) {
      return
    }

    const handleReposition = () => {
      updateTooltipPlacement()
    }

    window.addEventListener("resize", handleReposition)
    window.addEventListener("scroll", handleReposition, true)

    return () => {
      window.removeEventListener("resize", handleReposition)
      window.removeEventListener("scroll", handleReposition, true)
    }
  }, [activeIndex, updateTooltipPlacement])

  const tooltip = isMounted ? (
    <AnimatePresence>
      {activeIndex !== null ? (
        <motion.div
          key={items[activeIndex].label}
          ref={tooltipRef}
          id={`tools-menu-tooltip-${activeIndex}`}
          role="tooltip"
          initial={{
            opacity: 0,
            scale: 0.94,
            y: tooltipPlacement.side === "top" ? 4 : -4,
          }}
          animate={{
            opacity: isTooltipPositioned ? 1 : 0,
            scale: isTooltipPositioned ? 1 : 0.94,
            y: isTooltipPositioned ? 0 : tooltipPlacement.side === "top" ? 4 : -4,
          }}
          exit={{
            opacity: 0,
            scale: 0.94,
            y: tooltipPlacement.side === "top" ? 4 : -4,
          }}
          transition={tooltipSpring}
          className={cn(
            "pointer-events-none fixed z-[9999] inline-flex h-7 items-center justify-center overflow-hidden rounded-lg px-3",
            "bg-background/95 backdrop-blur",
            "border border-border/50",
            "shadow-[0_0_0_1px_rgba(0,0,0,0.08)]",
            "dark:border-border/50 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
          )}
          style={{
            top: tooltipPlacement.top,
            left: tooltipPlacement.left,
            // Scale grows from the edge nearest the trigger.
            transformOrigin:
              tooltipPlacement.side === "top" ? "bottom center" : "top center",
          }}
        >
          <p className="text-xs font-medium leading-tight whitespace-nowrap">
            {items[activeIndex].label}
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  ) : null

  return (
    <div className={cn("relative", className)} {...props}>
      {tooltip ? createPortal(tooltip, document.body) : null}

      <div
        ref={menuRef}
        className="z-10 inline-flex items-center justify-center gap-framer-4 overflow-visible"
      >
        {items.map((item, index) => {
          const itemClassName =
            "size-7 rounded-full flex justify-center items-center hover:bg-muted/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

          const itemContent = (
            <>
              <div
                className={cn(
                  "flex items-center justify-center overflow-visible",
                  item.iconClassName ?? "size-4"
                )}
              >
                <item.icon className="size-full cursor-pointer" />
              </div>
              <span className="sr-only">{item.label}</span>
            </>
          )

          if (item.href) {
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.target}
                rel={item.rel}
                aria-label={item.label}
                aria-describedby={
                  activeIndex === index ? `tools-menu-tooltip-${index}` : undefined
                }
                className={itemClassName}
                onClick={(event) => handleItemClick(event)}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
              >
                {itemContent}
              </a>
            )
          }

          return (
            <button
              key={item.label}
              type="button"
              aria-label={item.label}
              aria-describedby={
                activeIndex === index ? `tools-menu-tooltip-${index}` : undefined
              }
              className={itemClassName}
              onClick={(event) => handleItemClick(event, item.onClick)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
            >
              {itemContent}
            </button>
          )
        })}
      </div>
    </div>
  )
}
