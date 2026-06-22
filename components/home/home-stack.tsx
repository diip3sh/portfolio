import { HomeSection } from "@/components/home/home-section"
import { StackRow } from "@/components/home/stack-row"
import type { StackTool } from "@/constants/types"

type HomeStackSectionProps = {
  tools: StackTool[]
}

export const HomeStackSection = ({ tools }: HomeStackSectionProps) => {
  return (
    <HomeSection id="stack" title="Stack & Tools">
      <div className="grid w-full grid-cols-4 gap-framer-1 space-y-5">
        {tools.map((tool) => (
          <StackRow key={tool.name} {...tool} />
        ))}
      </div>
    </HomeSection>
  )
}
