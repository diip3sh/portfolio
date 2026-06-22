"use client"

import type { PointerEvent, ReactNode } from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"

import { cn } from "@/lib/utils"

const AVATAR_URL = "/logo.svg"
const INVITE_BACKGROUND_URL = "/logo.png"

export type CardLogo =
  | ReactNode
  | {
      src: string
      alt: string
      className?: string
    }

export type HolographicReferralCardProps = {
  image?: string
  imageAlt?: string
  title?: string
  description?: string
  logo?: CardLogo
  logoAlt?: string
  secondLogo?: CardLogo
  secondLogoAlt?: string
  secondLogoHref?: string
  secondLogoAriaLabel?: string
  ariaLabel?: string
  className?: string
}

const springOptions = {
  stiffness: 260,
  damping: 28,
  mass: 0.7,
}

const DiscountCheckIcon = () => (
  <svg
    aria-hidden="true"
    className="size-16 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.78"
  >
    <path d="M5 7.2a2.2 2.2 0 0 1 2.2-2.2h1a2.2 2.2 0 0 0 1.55-.64l.7-.7a2.2 2.2 0 0 1 3.12 0l.7.7c.412.41.97.64 1.55.64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58.23 1.138.64 1.55l.7.7a2.2 2.2 0 0 1 0 3.12l-.7.7a2.2 2.2 0 0 0-.64 1.55v1a2.2 2.2 0 0 1-2.2 2.2h-1a2.2 2.2 0 0 0-1.55.64l-.7.7a2.2 2.2 0 0 1-3.12 0l-.7-.7a2.2 2.2 0 0 0-1.55-.64h-1a2.2 2.2 0 0 1-2.2-2.2v-1a2.2 2.2 0 0 0-.64-1.55l-.7-.7a2.2 2.2 0 0 1 0-3.12l.7-.7A2.2 2.2 0 0 0 5 8.2v-1" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const isImageLogo = (
  logo: CardLogo
): logo is { src: string; alt: string; className?: string } => {
  return typeof logo === "object" && logo !== null && "src" in logo
}

const renderLogo = (logo: CardLogo, className: string, fallbackAlt: string) => {
  if (typeof logo === "string") {
    return (
      // oxlint-disable-next-line next/no-img-element
      <img alt={fallbackAlt} className={className} loading="lazy" src={logo} />
    )
  }

  if (isImageLogo(logo)) {
    return (
      // oxlint-disable-next-line next/no-img-element
      <img
        alt={logo.alt}
        className={cn(className, logo.className)}
        loading="lazy"
        src={logo.src}
      />
    )
  }

  return logo
}

const defaultLogo: CardLogo = {
  src: AVATAR_URL,
  alt: "Comet avatar",
}

export const HolographicReferralCard = ({
  image = INVITE_BACKGROUND_URL,
  imageAlt = "Invite background",
  title = "Portfolio",
  description = "#diip3sh",
  logo = defaultLogo,
  logoAlt = "Card logo",
  secondLogo = "/home-icons/x-dark.svg",
  secondLogoAlt = "X logo",
  secondLogoHref,
  secondLogoAriaLabel = "Open link",
  ariaLabel = "invite card for #diip3sh",
  className,
}: HolographicReferralCardProps) => {
  const shouldReduceMotion = Boolean(useReducedMotion())
  const rotateX = useSpring(useMotionValue(0), springOptions)
  const rotateY = useSpring(useMotionValue(0), springOptions)
  const translateZ = useSpring(useMotionValue(0), springOptions)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)
  const glowOpacity = useSpring(useMotionValue(0), {
    stiffness: 260,
    damping: 30,
  })
  const cardTransform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.9) 10%, rgba(255,255,255,0.75) 20%, rgba(255,255,255,0) 80%)`

  const secondLogoContent = renderLogo(
    secondLogo,
    "size-5 object-contain text-white",
    secondLogoAlt
  )

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return

    const bounds = event.currentTarget.getBoundingClientRect()
    const pointerX = event.clientX - bounds.left
    const pointerY = event.clientY - bounds.top
    const xProgress = pointerX / bounds.width
    const yProgress = pointerY / bounds.height

    glowX.set(xProgress * 100)
    glowY.set(yProgress * 100)
    glowOpacity.set(1)

    if (shouldReduceMotion) return

    rotateX.set((yProgress - 0.5) * 20)
    rotateY.set((xProgress - 0.5) * -20)
    translateZ.set(20)
  }

  const handlePointerEnter = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return

    glowOpacity.set(1)
    if (shouldReduceMotion) return

    translateZ.set(20)
  }

  const handlePointerLeave = () => {
    glowOpacity.set(0)
    rotateX.set(0)
    rotateY.set(0)
    translateZ.set(0)
    glowX.set(50)
    glowY.set(50)
  }

  const handleFocus = () => {
    glowOpacity.set(0.8)
  }

  const handleBlur = () => {
    handlePointerLeave()
  }

  return (
    <div
      className={cn(
        "my-5 w-[min(100vw-2rem,375px)] p-5 [perspective:1000px]",
        className
      )}
    >
      <motion.article
        aria-label={ariaLabel}
        style={{ transform: shouldReduceMotion ? "none" : cardTransform }}
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={cn(
          "relative flex w-full flex-col rounded-2xl bg-[#1f2121] p-2 text-left shadow-[0_520px_146px_rgba(0,0,0,0.01),0_333px_133px_rgba(0,0,0,0.04),0_83px_83px_rgba(0,0,0,0.26),0_21px_46px_rgba(0,0,0,0.29)] saturate-0 outline-none md:p-4"
        )}
      >
        <div className="mb-2 flex shrink-0 items-center justify-between p-2">
          {renderLogo(logo, "size-7 rounded-full object-cover", logoAlt)}
          {secondLogoHref ? (
            <a
              aria-label={secondLogoAriaLabel}
              className="rounded-sm transition-opacity duration-150 outline-none hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2121]"
              href={secondLogoHref}
              rel="noreferrer"
              target="_blank"
            >
              {secondLogoContent}
            </a>
          ) : (
            secondLogoContent
          )}
        </div>

        <div className="mx-2 flex-1">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
            {/* oxlint-disable-next-line next/no-img-element */}
            <img
              alt={imageAlt}
              className="absolute inset-0 size-full bg-black object-cover shadow-[0_5px_6px_rgba(0,0,0,0.05)] contrast-75"
              loading="lazy"
              src={image}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <DiscountCheckIcon />
            </div>
          </div>
        </div>

        <div className="mt-2 flex shrink-0 items-center justify-between p-2 text-xs text-white">
          <span className="truncate uppercase">{title}</span>
          <span className="truncate pl-3 font-serif text-base leading-none text-white/50">
            {description}
          </span>
        </div>

        <motion.div
          aria-hidden="true"
          style={{ background: glowBackground, opacity: glowOpacity }}
          className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-overlay"
        />
      </motion.article>
    </div>
  )
}
