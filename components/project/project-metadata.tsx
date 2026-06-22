import { ProjectMetadataRow } from "@/components/project/project-metadata-row"
import { SectionDivider } from "@/components/portfolio/section-divider"
import type { PortfolioProject } from "@/constants/types"

type ProjectMetadataProps = Pick<PortfolioProject, "stack">

export const ProjectMetadata = ({ stack }: ProjectMetadataProps) => {
  return (
    <section
      aria-label="Project information"
      className="flex w-full flex-col gap-framer-10"
    >
      <SectionDivider />
      <div className="flex w-full flex-col gap-framer-7">
          <ProjectMetadataRow label="Build Stack" value={stack.join(", ")} />
      </div>
    </section>
  )
}
