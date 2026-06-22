import { ProjectLeftColumn } from "@/components/project/project-left-column"
import { ProjectRightColumn } from "@/components/project/project-right-column"
import { PhoneNavigation } from "@/components/portfolio/phone-navigation"
import { projectPhoneNavSections } from "@/constants/projects/navigation"
import type { PortfolioProject } from "@/constants/types"

type ProjectLayoutProps = {
  project: PortfolioProject
}

export const ProjectLayout = ({ project }: ProjectLayoutProps) => {
  return (
    <main className="min-h-dvh bg-absolute-black text-gallery-white md:h-dvh md:overflow-hidden">
      <PhoneNavigation
        sections={projectPhoneNavSections}
        className="md:hidden"
      />
      <div className="flex min-h-dvh flex-col gap-framer-10 md:h-full md:flex-row md:gap-0">
        <ProjectLeftColumn project={project} />
        <ProjectRightColumn project={project} />
      </div>
    </main>
  )
}
