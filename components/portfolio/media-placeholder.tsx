import { cn } from "@/lib/utils"
import {
  mediaPlaceholderByVariant,
  type MediaPlaceholderVariant,
} from "@/lib/media-placeholders"

type MediaPlaceholderProps = {
  className?: string
  isVisible?: boolean
  variant: MediaPlaceholderVariant
}

export const MediaPlaceholder = ({
  className,
  isVisible = true,
  variant,
}: MediaPlaceholderProps) => {
  return (
    // This intentional inline image avoids a network request while media loads.
    // oxlint-disable-next-line next/no-img-element
    <img
      src={mediaPlaceholderByVariant[variant]}
      alt=""
      aria-hidden="true"
      data-media-placeholder={variant}
      className={cn(
        "duration-portfolio pointer-events-none absolute inset-0 z-0 size-full scale-110 bg-portfolio-media object-cover blur-lg transition-opacity ease-portfolio select-none",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    />
  )
}
