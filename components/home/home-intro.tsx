import Image from "next/image"
import type { HomeIntro } from "@/constants/types"
import Link from "next/link"
import { DesignSvg } from "../svgs/design-svg"
import { MapSVG } from "../svgs/map-svg"
import { CompanySVG } from "../svgs/company-svg"
import { ProductDesignSVG } from "../svgs/product-design-svg"
import { FrontSVG } from "../svgs/front-svg"
import { portfolioContact } from "@/constants/portfolio/contact"
import { BookACallLink } from "../ui/book-a-call-link"

type HomeIntroSectionProps = {
  intro: HomeIntro
}

export const HomeIntroSection = ({ intro }: HomeIntroSectionProps) => {
  return (
    <section
      id="intro"
      aria-labelledby="intro-name"
      className="mt-8 flex w-full flex-col gap-framer-8"
    >
      <div className="flex w-full items-center justify-center gap-framer-3">
        <Image
          src="/logo.png"
          alt={intro.avatarAlt}
          width={56}
          height={56}
          className="size-14 shrink-0 rounded-sm outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
          priority
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <h1 id="intro-name" className="type-heading-2 text-muted-foreground">
            @{intro.name}
          </h1>
          <p className="type-body-small uppercase">{intro.role}</p>
        </div>
      </div>

      <p className="max-w-[520px] type-body-small text-pretty text-muted-foreground">
        A{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <DesignSvg size={16} />
          design engineer
        </span>{" "}
        living in{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          <MapSVG size={16} />
          India.
        </span>{" "}
        Currently working as{" "}
        <span className="text-foreground">founding front-end engineer</span> at{" "}
        <Link
          href={"https://www.linkedin.com/company/portdex/"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 align-middle decoration-muted-foreground decoration-dotted underline-offset-4"
        >
          <CompanySVG size={16} />
          <span className="bg-linear-90 from-[#5C0A9A] from-0% via-[#3A076E] via-55% to-[#171033] to-100% bg-clip-text font-medium text-transparent dark:from-[#E4C1FF] dark:via-[#C77DFF] dark:via-55% dark:to-[#9B5DE5]">
            Portdex
          </span>
        </Link>
        . Open to <span className="text-foreground">full-time</span> opportunities
        and{" "}
        <span className="text-foreground">
          freelance&nbsp;projects
        </span>
        . This website serves as a collection of my previous work across{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          product design
          <ProductDesignSVG size={16} />,
        </span>{" "}
        <span className="inline-flex items-center gap-1.5 align-middle text-foreground">
          front-end
          <FrontSVG size={16} />
        </span>{" "}
        and{" "}
        <span className="inline-flex items-center gap-1 align-middle text-foreground">
          <Image
            alt=""
            src={"/home-icons/Motion_light.svg"}
            height={34}
            width={34}
            className="block size-[1.125em] dark:hidden"
          />
          <Image
            alt=""
            src={"/home-icons/Motion_dark.svg"}
            height={34}
            width={34}
            className="hidden size-[1.125em] dark:block"
          />
          motion.
        </span>
      </p>
      <BookACallLink
        href={portfolioContact.bookingHref}
        imageSrc="/logo.png"
        target="_blank"
        rel="noopener noreferrer"
      />
    </section>
  )
}
