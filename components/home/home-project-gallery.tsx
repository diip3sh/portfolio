import { ProjectCard } from "@/components/portfolio/project-card"
import { ProjectSpinner } from "@/components/home/project-spinner"
import { ShowcaseCard } from "@/components/portfolio/showcase-card"
import type {
  PortfolioGalleryItem,
  PortfolioProject,
  ProjectShowcaseComponent,
} from "@/constants/types"

type HomeProjectGalleryProps = {
  projects: PortfolioProject[]
  showcaseItems: ProjectShowcaseComponent[]
}

const sortByOrder = (
  firstItem: PortfolioGalleryItem,
  secondItem: PortfolioGalleryItem
) => firstItem.order - secondItem.order

const renderGalleryItem = (item: PortfolioGalleryItem) => {
  if (item.type === "project") {
    return (
      <ProjectCard
        key={item.slug}
        project={item}
        isPriority={item.order <= 3}
      />
    )
  }

  const { prompt, ...clientItem } = item
  const promptId = prompt ? `${item.col}-${item.order}` : undefined

  return (
    <ShowcaseCard
      key={`${item.col}-${item.order}-${item.title}`}
      item={clientItem}
      promptId={promptId}
      isPriority={item.media.type === "component" && item.order <= 2}
    />
  )
}

export const HomeProjectGallery = ({
  projects,
  showcaseItems,
}: HomeProjectGalleryProps) => {
  const galleryItems: PortfolioGalleryItem[] = [...projects, ...showcaseItems]
  const mobileProjectItems = [...projects].sort(sortByOrder)
  const firstColumnItems = galleryItems
    .filter((item) => item.col === 1)
    .sort(sortByOrder)
  const secondColumnItems = galleryItems
    .filter((item) => item.col === 2)
    .sort(sortByOrder)

  return (
    <section
      id="work"
      aria-label="Selected projects"
      className="relative w-full"
    >
      <div className="flex w-full flex-col gap-framer-2 md:hidden">
        {mobileProjectItems.map(renderGalleryItem)}
      </div>

      <div className="hidden w-full flex-col gap-framer-2 md:flex lg:flex-row lg:items-start">
        <div className="flex w-full flex-col gap-framer-2 lg:w-1/2">
          {firstColumnItems.map(renderGalleryItem)}
        </div>
        <div className="flex w-full flex-col gap-framer-2 lg:w-1/2">
          {secondColumnItems.map(renderGalleryItem)}
        </div>
      </div>
      <ProjectSpinner visible={false} />
    </section>
  )
}
