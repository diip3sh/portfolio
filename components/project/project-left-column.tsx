import { ProjectChallengesSolutions } from "@/components/project/project-challenges-solutions"
import { ProjectIntro } from "@/components/project/project-intro"
import { ProjectMetadata } from "@/components/project/project-metadata"
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer"
import { ScrollColumn } from "@/components/portfolio/scroll-column"
import { portfolioContact } from "@/constants/portfolio/contact"
import { portfolioSocialLinks } from "@/constants/portfolio/social"
import type { PortfolioProject } from "@/constants/types"

type ProjectLeftColumnProps = {
  project: PortfolioProject
}

export const ProjectLeftColumn = ({ project }: ProjectLeftColumnProps) => {
  return (
    <ScrollColumn
      ariaLabel={`${project.title} project details`}
      className="w-full bg-absolute-black md:h-dvh md:w-1/2 lg:w-1/3"
      contentClassName="flex w-full flex-col items-center gap-framer-9 px-framer-5 pt-20 pb-framer-5 md:gap-framer-10 md:pt-framer-5 md:pr-10 md:pb-framer-5"
      showProgress
    >
      <ProjectIntro
        title={project.title}
        description={project.description}
      />
      <ProjectMetadata stack={project.stack} />
      <ProjectChallengesSolutions
        challenges={project.challenges}
        solutions={project.solutions}
      />
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
