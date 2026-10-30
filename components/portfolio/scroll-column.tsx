"use client"

import { useLayoutEffect, useRef, type ReactNode } from "react"

import { ScrollProgress } from "@/components/portfolio/scroll-progress"

type ScrollColumnProps = {
  ariaLabel: string
  children: ReactNode
  className?: string
  contentClassName?: string
  // Restores scroll when this column remounts. The browser only restores window
  // scroll, not nested scrollers like this one.
  persistKey?: string
  showProgress?: boolean
}

export const ScrollColumn = ({
  ariaLabel,
  children,
  className = "",
  contentClassName = "",
  persistKey,
  showProgress = true,
}: ScrollColumnProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const column = scrollRef.current
    if (!column || !persistKey) {
      return
    }

    const storageKey = `scroll-column:${persistKey}`
    column.scrollTop = Number(sessionStorage.getItem(storageKey) ?? 0)

    return () => {
      sessionStorage.setItem(storageKey, String(column.scrollTop))
    }
  }, [persistKey])

  return (
    <div
      ref={scrollRef}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      className={`relative no-scrollbar focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gallery-white md:overflow-y-auto ${className}`}
    >
      {showProgress ? (
        <>
          <div className="pointer-events-none sticky top-0 left-0 z-10 hidden h-0 md:block">
            <div className="h-24 w-full bg-background/80 backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]" />
          </div>
          <ScrollProgress
            containerRef={scrollRef}
            className="sticky top-0 z-20 hidden md:block"
          />
        </>
      ) : null}
      <div className={contentClassName}>{children}</div>
    </div>
  )
}
