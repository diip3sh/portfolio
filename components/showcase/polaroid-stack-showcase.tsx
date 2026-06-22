"use client"

import { cn } from "@/lib/utils"

type FanCard = {
  alt: string
  hoverClassName: string
  src: string
}

const cardClassName = cn(
  "absolute top-1/2 left-1/2 h-[226px] w-[152px] -translate-x-1/2 -translate-y-1/2",
  "z-[100] origin-bottom-left overflow-hidden rounded-[8%] border-[5px] border-b-[40px] border-white bg-[#ebebeb]",
  "[scale:1] [transform:rotate(0deg)_translate(0px,-8px)] shadow-[#c7c7c7_-2px_2px_4px] duration-200",
  "group-hover:z-[110] hover:z-[110] hover:[scale:1.1]"
)

const fanCards: FanCard[] = [
  {
    src: "https://images.pexels.com/photos/5995712/pexels-photo-5995712.jpeg",
    alt: "Close-up portrait card",
    hoverClassName:
      "group-hover:[transform:rotate(-54deg)_translate(0px,-8px)]",
  },
  {
    src: "https://images.pexels.com/photos/19259515/pexels-photo-19259515.jpeg",
    alt: "Editorial portrait card",
    hoverClassName:
      "group-hover:[transform:rotate(-36deg)_translate(0px,-8px)]",
  },
  {
    src: "https://images.pexels.com/photos/8765790/pexels-photo-8765790.jpeg",
    alt: "Lifestyle portrait card",
    hoverClassName:
      "group-hover:[transform:rotate(-18deg)_translate(0px,-8px)]",
  },
  {
    src: "https://images.pexels.com/photos/16611954/pexels-photo-16611954.jpeg",
    alt: "Center portrait card",
    hoverClassName: "group-hover:[transform:rotate(0deg)_translate(0px,-8px)]",
  },
  {
    src: "https://images.pexels.com/photos/2354863/pexels-photo-2354863.jpeg",
    alt: "Outdoor portrait card",
    hoverClassName: "group-hover:[transform:rotate(18deg)_translate(0px,-8px)]",
  },
  {
    src: "https://images.pexels.com/photos/28367850/pexels-photo-28367850.jpeg",
    alt: "Fashion portrait card",
    hoverClassName: "group-hover:[transform:rotate(36deg)_translate(0px,-8px)]",
  },
  {
    src: "https://images.pexels.com/photos/15295562/pexels-photo-15295562.jpeg",
    alt: "Studio portrait card",
    hoverClassName: "group-hover:[transform:rotate(54deg)_translate(0px,-8px)]",
  },
]

export const PolaroidStack = () => {
  return (
    <section
      aria-label="Fanned photo cards"
      className="relative z-[100] flex h-[360px] w-full items-center justify-center overflow-visible"
    >
      <div className="group relative z-[100] h-full w-full overflow-visible">
        {fanCards.map(({ alt, hoverClassName, src }) => (
          <div className={cn(cardClassName, hoverClassName)} key={src}>
            {/* oxlint-disable-next-line next/no-img-element */}
            <img
              className="h-full w-full object-cover"
              draggable={false}
              loading="lazy"
              src={src}
              alt={alt}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
