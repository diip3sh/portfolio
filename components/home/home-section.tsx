import { SectionDivider } from "@/components/portfolio/section-divider"

type HomeSectionProps = {
  id: string
  title: string
  showDivider?: boolean
  outerGapClassName?: string
  children: React.ReactNode
}

export const HomeSection = ({
  id,
  title,
  showDivider = true,
  outerGapClassName = "gap-framer-10",
  children,
}: HomeSectionProps) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`flex w-full flex-col ${outerGapClassName}`}
    >
      {showDivider ? <SectionDivider /> : null}
      <div className="flex w-full flex-col gap-framer-7">
        <h2 id={`${id}-heading`} className="type-heading-2">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
