"use client"

import { HomeSection } from "@/components/home/home-section"
import { StatRow } from "@/components/home/stat-row"
import type { Stat } from "@/constants/types"

type HomeAboutSectionProps = {
  heading: string
  body: string
  stats: Stat[]
}

export const HomeAboutSection = ({
  heading,
  body,
  stats,
}: HomeAboutSectionProps) => {
  return (
    <HomeSection id="about" title={heading}>
      <div className="flex w-full flex-col gap-framer-7">
        <p className="type-label text-muted-foreground">{body}</p>
        <div className="flex flex-col flex-wrap gap-x-framer-4 gap-y-framer-1">
          {stats.map((stat) => (
            <StatRow key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </HomeSection>
  )
}
