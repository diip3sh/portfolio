"use client"

import { useEffect, useRef, useState } from "react"

import { MediaPlaceholder } from "@/components/portfolio/media-placeholder"
import { cn } from "@/lib/utils"

export const NEAR_VIEWPORT_ROOT_MARGIN = "700px"

type LazyVideoProps = {
  media: {
    src: string
    alt: string
    poster?: string
    width?: number
    height?: number
  }
}

const useIsNearViewport = <T extends HTMLElement>() => {
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
      { rootMargin: NEAR_VIEWPORT_ROOT_MARGIN }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return [ref, isNearViewport] as const
}

// Autoplaying video that only attaches its source near the viewport. The source
// has to wait for the observer because the gallery renders mobile and desktop
// layouts together, and the hidden copy must not download the file again.
export const LazyVideo = ({ media }: LazyVideoProps) => {
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
