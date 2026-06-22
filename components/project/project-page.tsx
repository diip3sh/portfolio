import { ProjectLayout } from "@/components/project/project-layout"
import type { PortfolioProject } from "@/constants/types"

type ProjectPageProps = {
  project: PortfolioProject
}

export const ProjectPage = ({ project }: ProjectPageProps) => {
  return <ProjectLayout project={project} />
}
