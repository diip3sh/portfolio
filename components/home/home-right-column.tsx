import { ScrollColumn } from "@/components/portfolio/scroll-column"
import { HomeProjectGallery } from "@/components/home/home-project-gallery"
import type {
  PortfolioProject,
  ProjectShowcaseComponent,
} from "@/constants/types"

type HomeRightColumnProps = {
  projects: PortfolioProject[]
  showcaseItems: ProjectShowcaseComponent[]
}

export const HomeRightColumn = ({
  projects,
  showcaseItems,
}: HomeRightColumnProps) => {
  return (
    <ScrollColumn
      ariaLabel="Project gallery"
      className="w-full bg-absolute-black md:h-dvh md:w-1/2 lg:w-2/3"
      contentClassName="flex w-full flex-col items-center gap-framer-10 px-framer-5 pt-[17px] pb-framer-10 md:pr-framer-5 md:pb-framer-5 md:pl-0"
      showProgress={false}
    >
      <HomeProjectGallery projects={projects} showcaseItems={showcaseItems} />
    </ScrollColumn>
  )
}
