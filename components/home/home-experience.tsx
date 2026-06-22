"use client"

import { HomeSection } from "@/components/home/home-section"
import { ExperienceRow } from "@/components/home/experience-row"
import type { Experience } from "@/constants/types"

type HomeExperienceSectionProps = {
  experience: Experience[]
}

export const HomeExperienceSection = ({
  experience,
}: HomeExperienceSectionProps) => {
  return (
    <HomeSection id="experience" title="Experience">
      <div className="flex w-full flex-col gap-framer-7">
        {experience.map((item) => (
          <ExperienceRow key={`${item.company}-${item.dates}`} {...item} />
        ))}
      </div>
    </HomeSection>
  )
}
