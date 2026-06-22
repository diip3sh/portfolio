import { HomeLeftColumn } from "@/components/home/home-left-column"
import { HomeRightColumn } from "@/components/home/home-right-column"
import { PhoneNavigation } from "@/components/portfolio/phone-navigation"
import { homePhoneNavSections } from "@/constants/home/sections"
import type {
  PortfolioProject,
  ProjectShowcaseComponent,
} from "@/constants/types"

type HomeLayoutProps = {
  projects: PortfolioProject[]
  showcaseItems: ProjectShowcaseComponent[]
}

export const HomeLayout = ({ projects, showcaseItems }: HomeLayoutProps) => {
  return (
    <main className="min-h-dvh bg-absolute-black text-gallery-white md:h-dvh md:overflow-hidden">
      <PhoneNavigation sections={homePhoneNavSections} className="md:hidden" />
      <div className="flex min-h-dvh flex-col gap-framer-10 md:h-full md:flex-row md:gap-0">
        <HomeLeftColumn />
        <HomeRightColumn projects={projects} showcaseItems={showcaseItems} />
      </div>
    </main>
  )
}
