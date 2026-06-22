"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"
import type { PortfolioProject } from "@/constants/types"
import { MediaPlaceholder } from "@/components/portfolio/media-placeholder"

type ProjectCardProps = {
  project: PortfolioProject
  className?: string
  isPriority?: boolean
}

const HOVER_INSET_PX = 2
const MEDIA_RADIUS_PX = 4
// Bottom inset = heading-band height, so the media ends just above the band
// and its rounded bottom corners stay visible.
const HOVER_BOTTOM_INSET_PX = 42

const ProjectImageMedia = ({
  isPriority,
  media,
}: {
  isPriority: boolean
  media: Extract<PortfolioProject["media"][number], { type: "image" }>
}) => {
  return (
    <div className="relative overflow-hidden bg-portfolio-media">
      <MediaPlaceholder variant="image" />
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width ?? 800}
        height={media.height ?? 1000}
        quality={95}
        sizes="(min-width: 1200px) 33vw, (min-width: 810px) 50vw, 100vw"
        loading={isPriority ? "eager" : "lazy"}
        fetchPriority={isPriority ? "high" : "auto"}
        className="relative z-10 h-auto w-full rounded-sm object-cover"
      />
    </div>
  )
}

const ProjectVideoMedia = ({
  media,
}: {
  media: Extract<PortfolioProject["media"][number], { type: "video" }>
}) => {
  const [isReady, setIsReady] = useState(false)

  return (
    <div className="relative overflow-hidden bg-portfolio-media">
      <MediaPlaceholder variant="video" isVisible={!isReady} />
      <video
        key={media.src}
        muted
        loop
        playsInline
        preload="metadata"
        poster={media.poster}
        aria-label={media.alt}
        onLoadedData={() => setIsReady(true)}
        style={
          media.width && media.height
            ? { aspectRatio: media.width / media.height }
            : undefined
        }
        className={cn(
          "duration-portfolio relative z-10 h-auto w-full object-cover transition-opacity ease-portfolio",
          isReady ? "opacity-100" : "opacity-0"
        )}
      >
        <source src={media.src} />
      </video>
    </div>
  )
}

const ProjectMedia = ({
  isPriority,
  project,
}: {
  isPriority: boolean
  project: PortfolioProject
}) => {
  const media = project.media[0]

  if (media.type === "image") {
    return <ProjectImageMedia media={media} isPriority={isPriority} />
  }

  if (media.type === "video") {
    return <ProjectVideoMedia media={media} />
  }

  return (
    <div
      role="img"
      aria-label={media.alt}
      className="aspect-[4/5] w-full bg-portfolio-media"
    />
  )
}

export const ProjectCard = ({
  project,
  className = "",
  isPriority = false,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const isActive = isHovered || isFocused

  const revealSpring = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 420, damping: 26, mass: 0.9 }

  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`View ${project.title} project`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn(
        "group relative block shrink-0 overflow-hidden bg-secondary outline outline-transparent [contain:layout_paint] [contain-intrinsic-size:auto_800px] [content-visibility:auto] hover:rounded-md hover:outline-border focus-visible:outline-none",
        className
      )}
    >
      <span className="sr-only">{project.title}</span>
      <motion.div
        className="overflow-hidden"
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
          className="duration-portfolio overflow-hidden transition-[filter] ease-portfolio group-hover:grayscale-0 group-focus-visible:grayscale-0"
          initial={false}
          animate={{ borderRadius: isActive ? MEDIA_RADIUS_PX : 0 }}
          transition={revealSpring}
        >
          <ProjectMedia project={project} isPriority={isPriority} />
        </motion.div>
      </motion.div>
      <motion.div
        initial={false}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
        transition={revealSpring}
        className="absolute inset-x-0 bottom-0 z-20 flex items-center gap-1.5 rounded-b-md bg-[inherit] px-3.5 pt-2 pb-3"
      >
        <span className="min-w-0 truncate text-xs text-gallery-white uppercase">
          {project.title}
        </span>
      </motion.div>
    </Link>
  )
}
