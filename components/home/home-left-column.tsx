import { HomeAboutSection } from "@/components/home/home-about"
import { HomeCertificationsSection } from "@/components/home/home-awards"
import { HomeClientsSection } from "@/components/home/home-clients"
import { HomeExperienceSection } from "@/components/home/home-experience"
import { HomeHobbiesSection } from "@/components/home/home-hobbies"
import { HomeIntroSection } from "@/components/home/home-intro"
import { HomeStackSection } from "@/components/home/home-stack"
import { HomeVaultSection } from "@/components/home/home-vault"
import { ScrollColumn } from "@/components/portfolio/scroll-column"
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer"
import { homeAbout, homeStats } from "@/constants/home/about"
import { homeCertifications } from "@/constants/home/certification"
import { homeClients } from "@/constants/home/clients"
import { homeExperience } from "@/constants/home/experience"
import { homeIntro } from "@/constants/home/intro"
import { homeStack } from "@/constants/home/stack"
import { homeVault } from "@/constants/home/vault"
import { portfolioContact } from "@/constants/portfolio/contact"
import { portfolioSocialLinks } from "@/constants/portfolio/social"

export const HomeLeftColumn = () => {
  return (
    <ScrollColumn
      ariaLabel="Portfolio information"
      className="w-full bg-absolute-black md:h-dvh md:w-1/2 lg:w-1/3"
      contentClassName="flex w-full flex-col items-center gap-framer-9 px-framer-5 pt-20 pb-framer-5 md:gap-framer-10 md:pt-framer-5 md:pr-10 md:pb-framer-5"
      showProgress
    >
      <HomeIntroSection intro={homeIntro} />
      <HomeClientsSection clients={homeClients} />
      <HomeAboutSection
        heading={homeAbout.heading}
        body={homeAbout.body}
        stats={homeStats}
      />
      <HomeStackSection tools={homeStack} />
      <HomeExperienceSection experience={homeExperience} />
      <HomeCertificationsSection certifications={homeCertifications} />
      <HomeVaultSection items={homeVault} />
      <HomeHobbiesSection />
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
    </ScrollColumn>
  )
}
