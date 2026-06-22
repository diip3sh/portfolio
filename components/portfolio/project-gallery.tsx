import type { PortfolioProject } from "@/constants/types"
import { ProjectCard } from "@/components/portfolio/project-card"

type ProjectGalleryProps = {
  projects: PortfolioProject[]
}

export const ProjectGallery = ({ projects }: ProjectGalleryProps) => {
  const firstRail = projects.filter((_, index) => index % 2 === 0)
  const secondRail = projects.filter((_, index) => index % 2 === 1)

  return (
    <aside
      aria-label="Selected projects"
      className="overflow-hidden bg-page-black px-framer-5 pt-[17px] pb-framer-5 md:h-dvh md:w-1/2 md:pl-0 lg:w-2/3"
    >
      <div className="no-scrollbar flex gap-framer-2 overflow-x-auto pb-framer-2 md:hidden">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            className="w-[280px]"
            isPriority={index === 0}
          />
        ))}
      </div>

      <div className="hidden h-full gap-framer-2 md:grid md:grid-cols-1 lg:grid-cols-2">
        <div className="no-scrollbar flex h-full flex-col gap-framer-2 overflow-y-auto">
          {firstRail.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              isPriority={index === 0}
            />
          ))}
        </div>
        <div className="no-scrollbar hidden h-full flex-col gap-framer-2 overflow-y-auto lg:flex">
          {secondRail.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              isPriority={index === 0}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}
