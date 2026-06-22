"use client"

import * as React from "react"
import { useEffect, useId, useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionStyle,
} from "motion/react"

interface HoverTextPreviewProps {
  previewImage: string | string[]
  imageAlt?: string | string[]
  children: React.ReactNode
}

type PreviewStackCount = 1 | 2 | 3

type PreviewStackConfig = {
  containerClassName: string
  height: number
  imageClassName: string
  transforms: string[]
  width: number
}

const previewStackConfigs = {
  1: {
    containerClassName: "h-16 w-24",
    height: 64,
    imageClassName: "size-10",
    transforms: ["left-1/2 top-3 z-20 -translate-x-1/2"],
    width: 96,
  },
  2: {
    containerClassName: "h-24 w-44",
    height: 96,
    imageClassName: "size-20",
    transforms: [
      "left-[31%] top-2 z-10 -translate-x-1/2 -rotate-[8deg]",
      "left-[69%] top-2 z-10 -translate-x-1/2 rotate-[8deg]",
    ],
    width: 176,
  },
  3: {
    containerClassName: "h-24 w-48",
    height: 96,
    imageClassName: "size-14",
    transforms: [
      "left-[28%] top-8 z-10 -translate-x-1/2 -rotate-[10deg]",
      "left-1/2 top-3 z-20 -translate-x-1/2 rotate-[1deg]",
      "left-[72%] top-8 z-10 -translate-x-1/2 rotate-[11deg]",
    ],
    width: 192,
  },
} satisfies Record<PreviewStackCount, PreviewStackConfig>

const VIEWPORT_INSET = 8
const ANCHOR_GAP = 8

type InteractionMode = "pointer" | "anchored"

export const HoverTextPreview: React.FC<HoverTextPreviewProps> = ({
  previewImage,
  imageAlt = "Link preview",
  children,
}) => {
  const previewId = useId()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isTouchOpen, setIsTouchOpen] = useState(false)
  const [mode, setMode] = useState<InteractionMode>("pointer")
  const [anchorPos, setAnchorPos] = useState({ top: 0, left: 0 })

  const isOpen = isHovered || isFocused || isTouchOpen

  const previewImages = (
    Array.isArray(previewImage) ? previewImage : [previewImage]
  ).slice(0, 3)
  const previewImageCount = Math.min(
    Math.max(previewImages.length, 1),
    3
  ) as PreviewStackCount
  const stackConfig = previewStackConfigs[previewImageCount]

  // Pointer-follow motion values (mouse / pen only)
  const prevX = useRef<number | null>(null)
  const suppressFocusOpen = useRef(false)
  const motionTop = useMotionValue(0)
  const motionLeft = useMotionValue(0)
  const motionRotate = useMotionValue(0)
  const springTop = useSpring(motionTop, { stiffness: 300, damping: 30 })
  const springLeft = useSpring(motionLeft, { stiffness: 300, damping: 30 })
  const springRotate = useSpring(motionRotate, { stiffness: 300, damping: 20 })

  const computeAnchor = () => {
    const el = triggerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const { width, height } = stackConfig
    let left = rect.left + rect.width / 2 - width / 2
    left = Math.max(
      VIEWPORT_INSET,
      Math.min(left, window.innerWidth - width - VIEWPORT_INSET)
    )
    let top = rect.top - height - ANCHOR_GAP
    if (top < VIEWPORT_INSET) {
      top = rect.bottom + ANCHOR_GAP
    }
    setAnchorPos({ top, left })
  }

  const closeAll = () => {
    setIsHovered(false)
    setIsTouchOpen(false)
    prevX.current = null
    motionRotate.set(0)
  }

  const handlePointerEnter = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "touch") return
    setMode("pointer")
    setIsHovered(true)
    prevX.current = null
  }

  const handlePointerLeave = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "touch") return
    // Do not close a touch-opened preview on mouse-leave.
    setIsHovered(false)
    prevX.current = null
    motionRotate.set(0)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "touch" || mode !== "pointer") return
    if (shouldReduceMotion) return
    motionTop.set(event.clientY - stackConfig.height - ANCHOR_GAP)
    motionLeft.set(event.clientX - stackConfig.width / 2)
    if (prevX.current !== null) {
      const deltaX = event.clientX - prevX.current
      motionRotate.set(Math.max(-15, Math.min(15, deltaX * 1.2)))
    }
    prevX.current = event.clientX
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== "touch") return
    setMode("anchored")
    if (isTouchOpen) {
      setIsTouchOpen(false)
    } else {
      computeAnchor()
      setIsTouchOpen(true)
    }
  }

  const handleFocus = () => {
    // Refocusing after Escape must not reopen the preview.
    if (suppressFocusOpen.current) {
      suppressFocusOpen.current = false
      return
    }
    setIsFocused(true)
    if (!isHovered) {
      setMode("anchored")
      computeAnchor()
    }
  }

  const handleBlur = () => {
    setIsFocused(false)
    setIsTouchOpen(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape" && isOpen) {
      event.preventDefault()
      suppressFocusOpen.current = true
      closeAll()
      setIsFocused(false)
      triggerRef.current?.focus()
    }
  }

  // Outside pointer press dismisses a touch-open preview.
  useEffect(() => {
    if (!isTouchOpen) return
    const handleOutside = (event: PointerEvent) => {
      if (!triggerRef.current?.contains(event.target as Node)) {
        setIsTouchOpen(false)
      }
    }
    document.addEventListener("pointerdown", handleOutside)
    return () => document.removeEventListener("pointerdown", handleOutside)
  }, [isTouchOpen])

  const useFollow = mode === "pointer" && !shouldReduceMotion

  const enter = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 1, scale: 1, y: 0 }
  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, scale: 0.8, y: -10, rotate: 0 }
  const exit = shouldReduceMotion
    ? { opacity: 0, transition: { duration: 0.12 } }
    : { opacity: 0, scale: 0.9, y: -6, transition: { duration: 0.12 } }

  const positionStyle: MotionStyle = useFollow
    ? {
        position: "fixed",
        top: springTop,
        left: springLeft,
        rotate: springRotate,
        zIndex: 50,
        pointerEvents: "none",
      }
    : {
        position: "fixed",
        top: anchorPos.top,
        left: anchorPos.left,
        zIndex: 50,
        pointerEvents: "none",
      }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={previewId}
        className="m-0 inline cursor-pointer appearance-none border-0 bg-transparent p-0 text-left text-inherit [font:inherit] underline decoration-dotted underline-offset-4"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      >
        {children}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={previewId}
            initial={initial}
            animate={enter}
            exit={exit}
            style={positionStyle}
          >
            <div className={`relative ${stackConfig.containerClassName}`}>
              {previewImages.map((imageSrc, index) => {
                const altText = Array.isArray(imageAlt)
                  ? (imageAlt[index] ?? "Link preview")
                  : imageAlt
                const stackClassName = stackConfig.transforms[index]

                return (
                  // Preview assets are usually transparent PNGs and need object-contain stacking.
                  // oxlint-disable-next-line next/no-img-element
                  <img
                    src={imageSrc}
                    alt={altText}
                    draggable={false}
                    key={`${imageSrc}-${index}`}
                    className={`absolute rounded-[10px] object-contain drop-shadow-[0_6px_10px_rgb(0_0_0/0.28)] ${stackConfig.imageClassName} ${stackClassName}`}
                  />
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
