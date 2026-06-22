"use client"

import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider"
import { SectionDivider } from "@/components/portfolio/section-divider"
import type { ClientLogo } from "@/constants/types"

const CLIENT_LOGO_GAP = 26

const CLIENT_LOGO_WIDTH = 112
const CLIENT_LOGO_HEIGHT = 32

type HomeClientsSectionProps = {
  clients: ClientLogo[]
}

type ClientLogoImageProps = {
  src: string
  width: number
  height: number
  className: string
}

const ClientLogoImage = ({
  src,
  width,
  height,
  className,
}: ClientLogoImageProps) => {
  return (
    // SVG logos are not optimized by next/image and trigger false aspect-ratio warnings.
    // oxlint-disable-next-line next/no-img-element
    <img
      src={src}
      alt=""
      width={width}
      height={height}
      loading="lazy"
      className={className}
    />
  )
}

export const HomeClientsSection = ({ clients }: HomeClientsSectionProps) => {
  return (
    <section
      id="clients"
      aria-label="Clients"
      className="relative flex w-full flex-col gap-framer-9 md:gap-framer-10"
    >
      <SectionDivider />
      <InfiniteSlider
        gap={CLIENT_LOGO_GAP}
        reverse
        speed={50}
        className="w-full mask-x-from-30%"
      >
        {clients.map((client) => (
          <div
            key={client.name}
            role="img"
            aria-label={client.alt ?? `${client.name} logo`}
            className="flex h-8 w-28 shrink-0 items-center justify-center"
          >
            {client.iconSrcDark && client.iconSrcLight ? (
              <>
                <ClientLogoImage
                  src={client.iconSrcLight}
                  width={CLIENT_LOGO_WIDTH}
                  height={CLIENT_LOGO_HEIGHT}
                  className="max-h-8 max-w-28 object-contain grayscale dark:hidden"
                />
                <ClientLogoImage
                  src={client.iconSrcDark}
                  width={CLIENT_LOGO_WIDTH}
                  height={CLIENT_LOGO_HEIGHT}
                  className="hidden max-h-8 max-w-28 object-contain grayscale dark:block"
                />
              </>
            ) : (
              <ClientLogoImage
                src={client.iconSrc}
                width={CLIENT_LOGO_WIDTH}
                height={CLIENT_LOGO_HEIGHT}
                className="max-h-8 max-w-28 object-contain grayscale"
              />
            )}
          </div>
        ))}
      </InfiniteSlider>
    </section>
  )
}
