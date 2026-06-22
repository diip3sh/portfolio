import Image from "next/image"

import type { ProjectGalleryImage } from "@/constants/types"

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
    return (
      <div className="overflow-hidden rounded-project">
        <video
          controls
          playsInline
          preload="metadata"
          poster={image.poster}
          aria-label={image.alt}
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

export const ProjectImageGallery = ({ images }: ProjectImageGalleryProps) => {
  return (
    <div
      id="gallery"
      aria-label="Project gallery"
      className="relative flex w-full flex-col gap-framer-2"
    >
      {images.map((image, index) => (
        <GalleryImage
          key={`${image.alt}-${index}`}
          image={image}
          isPriority={index === 0}
        />
      ))}
    </div>
  )
}
