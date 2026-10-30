"use client"

import Image from "next/image"

import { LazyVideo } from "@/components/portfolio/lazy-video"
import { hoverPlayHandlers } from "@/lib/hover-play"
import { optimizedPoster } from "@/lib/optimized-poster"

import type { ProjectGalleryImage } from "@/constants/types"

const GALLERY_POSTER_DISPLAY_WIDTH = 800

type ProjectImageGalleryProps = {
  images: ProjectGalleryImage[]
}

const GalleryImage = ({
  image,
  isPriority,
}: {
  image: ProjectGalleryImage
  isPriority: boolean
}) => {
  if (image.type === "image") {
    return (
      <div className="overflow-hidden rounded-project bg-portfolio-media">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width ?? 1600}
          height={image.height ?? 1600}
          quality={95}
          sizes="(min-width: 1024px) 66vw, (min-width: 768px) 50vw, 100vw"
          loading={isPriority ? "eager" : "lazy"}
          fetchPriority={isPriority ? "high" : "auto"}
          className="h-auto w-full object-contain"
        />
      </div>
    )
  }

  if (image.type === "video") {
    if (image.autoPlay) {
      return (
        <div className="overflow-hidden rounded-project">
          <LazyVideo media={image} />
        </div>
      )
    }

    return (
      <div className="overflow-hidden rounded-project">
        <video
          muted
          loop
          playsInline
          tabIndex={0}
          preload="metadata"
          poster={optimizedPoster(image.poster, GALLERY_POSTER_DISPLAY_WIDTH)}
          aria-label={image.alt}
          {...hoverPlayHandlers}
          className="h-auto w-full object-contain"
        >
          <source src={image.src} />
        </video>
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={image.alt}
      className="aspect-[4/5] w-full rounded-project bg-portfolio-media"
    />
  )
}

// Consecutive media with the same `row` value share a row; everything else gets
// a row of its own. Inside a row, consecutive media with the same `cell` value
// stack in one column.
const groupBy = (
  images: ProjectGalleryImage[],
  key: "row" | "cell"
): ProjectGalleryImage[][] =>
  images.reduce<ProjectGalleryImage[][]>((groups, image) => {
    const lastGroup = groups.at(-1)

    if (image[key] !== undefined && lastGroup?.at(-1)?.[key] === image[key]) {
      lastGroup.push(image)
      return groups
    }

    groups.push([image])
    return groups
  }, [])

export const ProjectImageGallery = ({ images }: ProjectImageGalleryProps) => {
  const rows = groupBy(images, "row")

  return (
    <div
      id="gallery"
      aria-label="Project gallery"
      className="relative flex w-full flex-col gap-framer-2"
    >
      {rows.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="flex w-full flex-col items-start gap-framer-2 md:flex-row"
        >
          {groupBy(row, "cell").map((cell, cellIndex) => (
            <div
              key={`cell-${cellIndex}`}
              className="flex min-w-0 flex-1 flex-col gap-framer-2"
            >
              {cell.map((image, index) => (
                <GalleryImage
                  key={`${image.alt}-${index}`}
                  image={image}
                  isPriority={rowIndex === 0}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
