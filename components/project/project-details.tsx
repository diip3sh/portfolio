import { SectionDivider } from "@/components/portfolio/section-divider"

type ProjectDetailsProps = {
  description: string
}

export const ProjectDetails = ({ description }: ProjectDetailsProps) => {
  return (
    <section
      aria-labelledby="project-details-heading"
      className="flex w-full flex-col gap-framer-10"
    >
      <SectionDivider />
      <div className="flex w-full flex-col gap-framer-8">
        <h2 id="project-details-heading" className="sr-only">
          Project overview
        </h2>
        <p className="max-w-[480px] type-body-small text-pretty text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  )
}
