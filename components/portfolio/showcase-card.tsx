"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { toast } from "sonner"
import { HugeiconsIcon } from "@hugeicons/react"
import { Tick01FreeIcons } from "@hugeicons/core-free-icons"

import { CopySVG } from "@/components/svgs/copy-svg"
import { ResetSVG } from "@/components/svgs/reset-svg"
import {
  preloadShowcaseComponent,
  showcaseComponentRegistry,
} from "@/components/showcase/showcase-component-registry"
import { GooeyToast } from "@/components/ui/gooey-toast"
import { ToolsMenu, type MenuBarItem } from "@/components/ui/tools-menu"
import type { ProjectShowcaseComponent } from "@/constants/types"
import { useSound } from "@/hooks/use-sound"
import { cn } from "@/lib/utils"
import { clickSoftSound } from "@/sounds/click-soft"
import { MediaPlaceholder } from "@/components/portfolio/media-placeholder"

type CopyStatus = "idle" | "copied" | "failed"

type ShowcaseCardProps = {
  isPriority?: boolean
  item: Omit<ProjectShowcaseComponent, "prompt">
  promptId?: string
}

type ShowcaseMediaProps = ShowcaseCardProps & {
  resetSignal: number
}

type ShowcaseVideoMedia = Extract<
  ProjectShowcaseComponent["media"],
  { type: "video" }
>

type ShowcaseComponentMedia = Extract<
  ProjectShowcaseComponent["media"],
  { type: "component" }
>

const COPY_STATUS_RESET_DELAY_MS = 1500
const SHOWCASE_OBSERVER_ROOT_MARGIN = "700px"
const SHOWCASE_PRELOAD_ROOT_MARGIN = "1600px"
const HOVER_INSET_PX = 2
const MEDIA_RADIUS_PX = 4
// Bottom inset = heading-band height, so the media ends just above the band
// and its rounded bottom corners stay visible.
const HOVER_BOTTOM_INSET_PX = 46

const SHOWCASE_TOOL_ICON_CLASS = "size-[18px]"
// X mark is visually heavier and fills its box edge-to-edge, so it needs a
// smaller box than the copy/reset glyphs to look the same optical size.
const SHOWCASE_X_ICON_CLASS = "size-[15px]"

const ShowcaseXIcon = ({ className }: React.SVGProps<SVGSVGElement>) => (
  <span className={cn("relative block size-full", className)}>
    <Image
      src="/home-icons/x-light.svg"
      height={34}
      width={34}
      alt=""
      aria-hidden
      className="block size-full dark:hidden"
    />
    <Image
      src="/home-icons/x-dark.svg"
      height={34}
      width={34}
      alt=""
      aria-hidden
      className="hidden size-full dark:block"
    />
  </span>
)

const placeholderHeightByComponentKey: Record<string, string> = {
  "analog-stick": "min-h-[320px]",
  "card-hover": "min-h-[560px]",
  "paper-shred": "min-h-[432px]",
  "polaroid-stack": "min-h-[360px]",
  "scan-document": "min-h-[320px]",
  "set-timer": "min-h-[500px]",
  "theme-toggle": "min-h-[140px]",
}

const useIsNearViewport = <T extends HTMLElement>(
  rootMargin = SHOWCASE_OBSERVER_ROOT_MARGIN
) => {
  const ref = useRef<T | null>(null)
  const [isNearViewport, setIsNearViewport] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    if (!("IntersectionObserver" in window)) {
      setIsNearViewport(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearViewport(Boolean(entry?.isIntersecting))
      },
      { rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [rootMargin])

  return [ref, isNearViewport] as const
}

const LazyShowcaseVideo = ({ media }: { media: ShowcaseVideoMedia }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [containerRef, isNearViewport] = useIsNearViewport<HTMLDivElement>()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return
    }

    if (!isNearViewport) {
      video.pause()
      video.load()
      setIsReady(false)
      return
    }

    void video.play().catch(() => {
      // Muted autoplay should pass, but browsers can still reject it.
    })
  }, [isNearViewport])

  const aspectRatio =
    media.width && media.height ? media.width / media.height : undefined

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-portfolio-media"
    >
      <MediaPlaceholder variant="video" isVisible={!isReady} />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={media.poster}
        aria-label={media.alt}
        onLoadedData={() => setIsReady(true)}
        style={aspectRatio ? { aspectRatio } : undefined}
        className={cn(
          "duration-portfolio relative z-10 h-auto w-full object-cover transition-opacity ease-portfolio",
          isReady ? "opacity-100" : "opacity-0"
        )}
      >
        {isNearViewport ? <source src={media.src} /> : null}
      </video>
    </div>
  )
}

const LazyShowcaseComponent = ({
  isPriority = false,
  media,
  resetSignal,
}: {
  isPriority?: boolean
  media: ShowcaseComponentMedia
  resetSignal: number
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isNearViewport, setIsNearViewport] = useState(isPriority)
  const ShowcaseComponent = showcaseComponentRegistry[media.componentKey]
  const placeholderHeightClassName =
    placeholderHeightByComponentKey[media.componentKey] ?? "min-h-[320px]"

  useEffect(() => {
    const element = containerRef.current

    if (!element || isPriority || !ShowcaseComponent) {
      return
    }

    if (!("IntersectionObserver" in window)) {
      preloadShowcaseComponent(media.componentKey)
      setIsNearViewport(true)
      return
    }

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        preloadShowcaseComponent(media.componentKey)
        preloadObserver.disconnect()
      },
      { rootMargin: SHOWCASE_PRELOAD_ROOT_MARGIN }
    )
    const renderObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        setIsNearViewport(true)
        renderObserver.disconnect()
      },
      { rootMargin: SHOWCASE_OBSERVER_ROOT_MARGIN }
    )

    preloadObserver.observe(element)
    renderObserver.observe(element)

    return () => {
      preloadObserver.disconnect()
      renderObserver.disconnect()
    }
  }, [isPriority, media.componentKey, ShowcaseComponent])

  if (!ShowcaseComponent) {
    return (
      <div
        role="img"
        aria-label={media.alt}
        className="flex aspect-[4/5] w-full items-center justify-center bg-portfolio-media p-framer-5 text-center type-body-small text-muted-foreground"
      >
        Component unavailable
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex w-full justify-center overflow-visible bg-transparent",
        placeholderHeightClassName
      )}
    >
      {isNearViewport ? (
        <ShowcaseComponent resetSignal={resetSignal} />
      ) : (
        <div className="relative size-full min-h-[inherit] overflow-hidden bg-portfolio-media">
          <MediaPlaceholder variant="component" />
          <span className="sr-only">{media.alt}</span>
        </div>
      )}
    </div>
  )
}

const ShowcaseMedia = ({
  isPriority,
  item,
  resetSignal,
}: ShowcaseMediaProps) => {
  const { media } = item

  if (media.type === "video") {
    return <LazyShowcaseVideo media={media} />
  }

  return (
    <LazyShowcaseComponent
      isPriority={isPriority}
      media={media}
      resetSignal={resetSignal}
    />
  )
}

type ShowcasePromptResponse = {
  prompt: string
}

const promptRequestCache = new Map<string, Promise<string>>()

const loadShowcasePrompt = (promptId: string) => {
  const cachedPromptRequest = promptRequestCache.get(promptId)

  if (cachedPromptRequest) {
    return cachedPromptRequest
  }

  const promptRequest = fetch(`/api/showcase-prompts/${promptId}`)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Unable to load showcase prompt")
      }

      const data = (await response.json()) as ShowcasePromptResponse
      return data.prompt
    })
    .catch((error: unknown) => {
      promptRequestCache.delete(promptId)
      throw error
    })

  promptRequestCache.set(promptId, promptRequest)
  return promptRequest
}

export const ShowcaseCard = ({
  isPriority = false,
  item,
  promptId,
}: ShowcaseCardProps) => {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle")
  const [resetSignal, setResetSignal] = useState(0)
  const resetStatusTimeoutRef = useRef<number | null>(null)
  const hasPrompt = Boolean(promptId)
  const hasReset = Boolean(item.resettable)
  const allowsMediaOverflow = item.media.type === "component"
  const [playCopySound] = useSound(clickSoftSound, { volume: 0.25 })
  const [isHovered, setIsHovered] = useState(false)
  const [isFocusWithin, setIsFocusWithin] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const isActive = isHovered || isFocusWithin

  const revealSpring = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 420, damping: 26, mass: 0.9 }

  const handleFocusBlur = (event: React.FocusEvent<HTMLElement>) => {
    setIsFocusWithin(event.currentTarget.contains(event.relatedTarget))
  }

  useEffect(() => {
    return () => {
      if (resetStatusTimeoutRef.current) {
        window.clearTimeout(resetStatusTimeoutRef.current)
      }
    }
  }, [])

  const handleCopyPrompt = async () => {
    if (!promptId) {
      return
    }

    playCopySound()

    try {
      const prompt = await loadShowcasePrompt(promptId)
      await navigator.clipboard.writeText(prompt)
      setCopyStatus("copied")
      toast.custom(() => (
        <GooeyToast
          icon={
            <HugeiconsIcon
              icon={Tick01FreeIcons}
              size={18}
              strokeWidth={3.5}
              color="currentColor"
            />
          }
        >
          Prompt copied!
        </GooeyToast>
      ))
    } catch {
      setCopyStatus("failed")
    }

    if (resetStatusTimeoutRef.current) {
      window.clearTimeout(resetStatusTimeoutRef.current)
    }

    resetStatusTimeoutRef.current = window.setTimeout(() => {
      setCopyStatus("idle")
    }, COPY_STATUS_RESET_DELAY_MS)
  }

  const handleResetShowcase = () => {
    setResetSignal((currentSignal) => currentSignal + 1)
  }

  const handlePreloadShowcase = () => {
    if (item.media.type === "component") {
      preloadShowcaseComponent(item.media.componentKey)
    }

    if (promptId) {
      void loadShowcasePrompt(promptId).catch(() => {})
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    handlePreloadShowcase()
  }

  const handleFocus = () => {
    setIsFocusWithin(true)
    handlePreloadShowcase()
  }

  const statusMessage =
    copyStatus === "copied"
      ? "Copied"
      : copyStatus === "failed"
        ? "Copy failed"
        : ""

  const toolsMenuItems: MenuBarItem[] = []

  if (hasPrompt) {
    toolsMenuItems.push({
      label: `Copy prompt`,
      iconClassName: SHOWCASE_TOOL_ICON_CLASS,
      icon: (iconProps) => (
        <CopySVG
          color="currentColor"
          isCopied={copyStatus === "copied"}
          className={iconProps.className}
        />
      ),
      onClick: handleCopyPrompt,
    })
  }

  if (hasReset) {
    toolsMenuItems.push({
      label: `Reset`,
      iconClassName: SHOWCASE_TOOL_ICON_CLASS,
      icon: (iconProps) => (
        <ResetSVG color="currentColor" className={iconProps.className} />
      ),
      onClick: handleResetShowcase,
    })
  }

  toolsMenuItems.push({
    label: `View on X`,
    iconClassName: SHOWCASE_X_ICON_CLASS,
    icon: (iconProps) => <ShowcaseXIcon className={iconProps.className} />,
    href: item.xLink,
    target: "_blank",
    rel: "noreferrer",
  })

  return (
    <article
      aria-labelledby={`showcase-${item.order}-title`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={handleFocus}
      onBlur={handleFocusBlur}
      className={cn(
        "group duration-portfolio relative z-0 block shrink-0 rounded-none border border-transparent bg-secondary shadow-xs shadow-transparent transition-[border-radius,box-shadow] ease-portfolio will-change-transform ring-inset focus-within:z-50 focus-within:rounded-md focus-within:shadow-muted focus-within:ring-border focus-within:outline-none hover:z-50 hover:rounded-md hover:border-border hover:shadow-muted hover:ring-border",
        allowsMediaOverflow
          ? "overflow-visible"
          : "overflow-hidden [contain:layout_paint] [contain-intrinsic-size:auto_800px] [content-visibility:auto]"
      )}
    >
      <h2 id={`showcase-${item.order}-title`} className="sr-only">
        {item.title}
      </h2>
      <motion.div
        className={cn(
          allowsMediaOverflow ? "overflow-visible" : "overflow-hidden"
        )}
        initial={false}
        animate={{
          paddingTop: isActive ? HOVER_INSET_PX : 0,
          paddingLeft: isActive ? HOVER_INSET_PX : 0,
          paddingRight: isActive ? HOVER_INSET_PX : 0,
          paddingBottom: isActive ? HOVER_BOTTOM_INSET_PX : 0,
        }}
        transition={revealSpring}
      >
        <motion.div
          className={cn(
            "bg-card",
            allowsMediaOverflow ? "overflow-visible" : "overflow-hidden"
          )}
          initial={false}
          animate={{ borderRadius: isActive ? MEDIA_RADIUS_PX : 0 }}
          transition={revealSpring}
        >
          <ShowcaseMedia
            isPriority={isPriority}
            item={item}
            resetSignal={resetSignal}
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={false}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
        transition={revealSpring}
        style={{ pointerEvents: isActive ? "auto" : "none" }}
        className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 rounded-b-md bg-[inherit] px-3.5 py-2"
      >
        <span className="min-w-0 truncate text-xs text-gallery-white uppercase">
          {item.title}
        </span>
        <div className="flex shrink-0 items-center">
          <ToolsMenu items={toolsMenuItems} />
          <span className="sr-only" aria-live="polite">
            {statusMessage}
          </span>
        </div>
      </motion.div>
    </article>
  )
}
