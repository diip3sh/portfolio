"use client"

import { PortfolioFooter } from "@/components/portfolio/portfolio-footer"
import { HomeSVG } from "@/components/svgs/home-svg"
import { PrimaryCtaButton } from "@/components/ui/primary-button"
import { portfolioContact } from "@/constants/portfolio/contact"
import { portfolioSocialLinks } from "@/constants/portfolio/social"
import { useRouter } from "next/navigation"
import {
  portfolioProjects,
  portfolioShowcaseComponents,
} from "@/constants/portfolio/projects"
import { HomeRightColumn } from "@/components/home/home-right-column"

export default function NotFound() {
  const router = useRouter()
  return (
    <main className="min-h-dvh bg-absolute-black text-gallery-white md:h-dvh md:min-h-[600px] md:overflow-hidden">
      <div className="flex min-h-dvh flex-col gap-framer-5 md:h-full md:min-h-[600px] md:flex-row md:gap-0">
        <section className="flex min-h-[600px] w-full flex-col justify-center gap-framer-9 overflow-hidden bg-absolute-black px-framer-5 pt-10 pb-framer-5 md:h-dvh md:w-1/2 md:justify-between md:gap-framer-10 md:pt-framer-5 md:pr-10 lg:w-1/3">
          <div id="intro" className="flex flex-col gap-framer-8">
            <h1 className="type-heading-2">404 - Page Not Found!</h1>
            <p className="max-w-[520px] type-label text-pretty text-muted-foreground">
              Looks like this page doesn&apos;t exist. You can head back to the
              homepage or explore the work instead.
            </p>
            <PrimaryCtaButton
              onClick={() => router.push("/")}
              className="w-fit rounded-full px-3"
            >
              <HomeSVG size={14}/>
              <span className="text-sm leading-7 font-medium tracking-[-0.02em]">
                Take me back!
              </span>
            </PrimaryCtaButton>
          </div>

          <PortfolioFooter
            email={portfolioContact.email}
            phone={portfolioContact.phone}
            phoneHref={portfolioContact.phoneHref}
            socialLinks={portfolioSocialLinks}
            creditName={portfolioContact.creditName}
            creditHref={portfolioContact.creditHref}
            copyright={portfolioContact.copyright}
            backToTopHref="#intro"
          />
        </section>

        {/*<ProjectGallery projects={portfolioProjects} />*/}
        <HomeRightColumn
          projects={portfolioProjects}
          showcaseItems={portfolioShowcaseComponents}
        />
      </div>
    </main>
  )
}
