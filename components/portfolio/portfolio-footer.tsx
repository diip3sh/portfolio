import { BackToTop } from "@/components/portfolio/back-to-top"
import type { SocialLink } from "@/constants/types"
import { SectionDivider } from "./section-divider"
import Image from "next/image"
import Link from "next/link"
import { FooterBuildStack } from "@/constants/home/footer"

type PortfolioFooterProps = {
  email: string
  phone: string
  phoneHref: string
  socialLinks: SocialLink[]
  creditName: string
  creditHref: string
  copyright: string
  backToTopHref?: string
}

export const PortfolioFooter = ({
  email,
  phone,
  phoneHref,
  socialLinks,
  creditName,
  creditHref,
  copyright,
  backToTopHref = "#intro",
}: PortfolioFooterProps) => {
  const linkClassName =
    "inline-flex w-fit items-center underline hover:decoration-dotted underline-offset-4 transition-colors duration-portfolio ease-portfolio hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gallery-white"

  return (
    <footer className="relative w-full text-gallery-white">
      <SectionDivider />
      <div className="flex flex-col gap-framer-7 py-framer-8">
        <div className="flex flex-col gap-framer-3">
          <h2 className="type-heading-2">
            Grateful you&apos;re here! Always happy to chat ^^
          </h2>
          <p className="max-w-[480px] type-label text-muted-foreground">
            I&apos;m open to new opportunities – full-time roles, freelance
            projects, and collaborations. If you&apos;re working on something
            interesting, I&apos;d love to hear about it.
          </p>
        </div>

        <div className="flex flex-col gap-framer-6">
          <address className="flex flex-col items-start gap-framer-3 type-body-small not-italic">
            <Link href={`mailto:${email}`} className={linkClassName}>
              {email}
            </Link>
            <Link href={phoneHref} className={linkClassName}>
              {phone}
            </Link>
          </address>

          <nav
            aria-label="Social links"
            className="flex flex-wrap items-center gap-framer-3 type-body-small"
          >
            {socialLinks.map((socialLink) => (
              <Link
                key={socialLink.label}
                href={socialLink.href}
                target="_blank"
                rel="noreferrer"
                className={linkClassName}
              >
                {socialLink.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex flex-col gap-framer-3">
        <SectionDivider />
        <div className="flex flex-col items-start gap-framer-3 pr-14 type-label">
          <p className="max-w-[480px] text-muted-foreground">
            Designed and developed by{" "}
            <a
              href={creditHref}
              target="_blank"
              rel="noreferrer"
              className="duration-portfolio text-gallery-white transition-colors ease-portfolio hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gallery-white"
            >
              {creditName}
            </a>{" "}
            <span className="inline-flex items-center gap-2 align-middle">
              <span>and</span>
              <Image
                src={"/home-icons/redbull.png"}
                className="h-6 w-3"
                height={34}
                width={34}
                alt="redbull"
              />
            </span>
          </p>
          <div className="grid grid-cols-3">
            <p className="text-muted-foreground">Thanks to</p>
            <div className="col-span-2 flex flex-col gap-1.5 underline-offset-4">
              {FooterBuildStack.map((item) => (
                <Link
                  href={item.href}
                  target="_blank"
                  key={item.name}
                  className="w-fit cursor-pointer decoration-dotted hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid w-full grid-cols-3">
            <p className="text-muted-foreground">Inspired by</p>
            <div className="col-span-2 flex flex-col gap-1.5 underline-offset-4">
              {[
                "https://ana.sh",
                "https://www.jkane.co",
              ].map((item) => (
                <Link
                  href={item}
                  target="_blank"
                  key={item}
                  className="w-fit cursor-pointer decoration-dotted hover:underline"
                >
                  {item.replace("https://", "")}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-muted-foreground">{copyright}</p>
        </div>
      </div>

      <BackToTop href={backToTopHref} />
    </footer>
  )
}
