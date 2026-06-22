import { SeparatorDot } from "@/components/portfolio/separator-dot"

type ProjectMetadataRowProps = {
  label: string
  value: string
}

export const ProjectMetadataRow = ({
  label,
  value,
}: ProjectMetadataRowProps) => {
  return (
    <p className="flex flex-wrap items-center gap-x-framer-3 gap-y-framer-3 text-pretty">
      <span className="type-heading-2">{label}</span>
      <SeparatorDot />
      <span className="type-label text-muted-foreground">{value}</span>
    </p>
  )
}
