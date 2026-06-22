import { portfolioProjects } from "@/constants/portfolio/projects"

export { projectPhoneNavSections } from "@/constants/projects/navigation"

export const getProjectBySlug = (slug: string) =>
  portfolioProjects.find((project) => project.slug === slug)

export const getAllProjectSlugs = () =>
  portfolioProjects.map((project) => project.slug)
