import { HomeLayout } from "@/components/home/home-layout"
import {
  portfolioProjects,
  portfolioShowcaseComponents,
} from "@/constants/portfolio/projects"

export const HomePage = () => {
  return (
    <HomeLayout
      projects={portfolioProjects}
      showcaseItems={portfolioShowcaseComponents}
    />
  )
}
