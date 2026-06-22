import { SectionDivider } from "@/components/portfolio/section-divider"
import type { PortfolioProject } from "@/constants/types"

type ProjectChallengesSolutionsProps = Pick<
  PortfolioProject,
  "challenges" | "solutions"
>

type ProjectListSectionProps = {
  items: string[]
  title: string
}

const renderHighlightedText = (text: string) => {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    const isHighlighted = part.startsWith("`") && part.endsWith("`")
    const content = isHighlighted ? part.slice(1, -1) : part

    if (!isHighlighted) {
      return content
    }

    return (
      <span key={`${content}-${index}`} className="text-gallery-white">
        {content}
      </span>
    )
  })
}

const ProjectListSection = ({ items, title }: ProjectListSectionProps) => {
  return (
    <div className="flex w-full flex-col gap-framer-3">
      <h2 className="type-heading-2">{title}</h2>
      <ul className="flex w-full list-disc flex-col gap-framer-3 pl-framer-5 marker:text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="pl-framer-1">
            <p className="type-label text-pretty text-muted-foreground">
              {renderHighlightedText(item)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const ProjectChallengesSolutions = ({
  challenges = [],
  solutions = [],
}: ProjectChallengesSolutionsProps) => {
  if (challenges.length === 0 && solutions.length === 0) {
    return null
  }

  return (
    <section
      aria-label="Project challenges and solutions"
      className="flex w-full flex-col gap-framer-7"
    >
      <SectionDivider />
      <div className="flex w-full flex-col gap-framer-7">
        {challenges.length > 0 ? (
          <ProjectListSection title="Challenges" items={challenges} />
        ) : null}
        {solutions.length > 0 ? (
          <ProjectListSection title="Solutions" items={solutions} />
        ) : null}
      </div>
    </section>
  )
}
