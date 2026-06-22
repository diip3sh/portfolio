"use client"

import type { PortfolioProject } from "@/constants/types"
import { useRouter } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft02FreeIcons } from "@hugeicons/core-free-icons"
import { GooeyButton } from "../ui/gooey-button"

type ProjectIntroProps = Pick<PortfolioProject, "title" | "description">

export const ProjectIntro = ({ title, description }: ProjectIntroProps) => {
  const router = useRouter()
  return (
    <section
      id="intro"
      aria-labelledby="project-title"
      className="flex w-full flex-col gap-10"
    >
      <div className="flex w-full flex-col gap-framer-3 pt-8">
        <div className="pb-framer-8">
          <GooeyButton
            size="sm"
            onClick={() => router.push("/")}
            icon={
              <HugeiconsIcon icon={ArrowLeft02FreeIcons} strokeWidth={3.5} />
            }
          >
            Back
          </GooeyButton>
        </div>
        <div className="flex w-full flex-col gap-framer-3">
          <h1
            id="project-title"
            className="font-serif type-heading-1 tracking-normal"
          >
            {title}
          </h1>
          <p className="max-w-[520px] type-label text-pretty text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
