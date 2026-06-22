import { cleanup, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"

import { ProjectCard } from "@/components/portfolio/project-card"
import type { PortfolioProject } from "@/constants/types"

const project: PortfolioProject = {
  type: "project",
  slug: "test-project",
  title: "Test Project",
  col: 1,
  order: 1,
  stack: ["React"],
  description: "Test project description",
  media: [
    {
      type: "image",
      src: "https://example.com/project.png",
      alt: "Test project preview",
      width: 800,
      height: 1000,
    },
  ],
}

afterEach(cleanup)

describe("ProjectCard media loading", () => {
  it("keeps the placeholder behind a visible prioritized image", () => {
    const { container } = render(<ProjectCard project={project} isPriority />)
    const image = screen.getByAltText("Test project preview")
    const placeholder = container.querySelector(
      '[data-media-placeholder="image"]'
    )

    expect(image).toHaveAttribute("loading", "eager")
    expect(image).toHaveAttribute("fetchpriority", "high")
    expect(image).not.toHaveClass("opacity-0")
    expect(placeholder).toHaveClass("opacity-100")
  })

  it("preserves lazy loading for non-prioritized images", () => {
    render(<ProjectCard project={project} />)

    expect(screen.getByAltText("Test project preview")).toHaveAttribute(
      "loading",
      "lazy"
    )
  })
})
