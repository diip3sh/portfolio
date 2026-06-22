import { SeparatorDot } from "@/components/portfolio/separator-dot"
import type { Experience } from "@/constants/types"

export const ExperienceRow = ({
  position,
  company,
  dates,
  description,
}: Experience) => {
  return (
    <article className="flex w-full flex-col gap-framer-3">
      <p className="flex flex-wrap items-center gap-x-framer-3 gap-y-framer-1">
        <span className="font-serif type-heading-3">{position}</span>
        <SeparatorDot />
        <span className="font-mono type-body-small">{company}</span>
        <SeparatorDot />
        <span className="type-label text-muted-foreground tabular-nums uppercase">
          {dates}
        </span>
      </p>
      <p className="max-w-[480px] type-label text-muted-foreground">
        {description}
      </p>
    </article>
  )
}
