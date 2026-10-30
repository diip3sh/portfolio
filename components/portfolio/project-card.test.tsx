import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

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

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

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

  it("keeps an autoplaying video running when the pointer leaves", () => {
    vi.spyOn(HTMLMediaElement.prototype, "load").mockImplementation(() => {})
    vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue()
    const pause = vi
      .spyOn(HTMLMediaElement.prototype, "pause")
      .mockImplementation(() => {})

    render(
      <ProjectCard
        project={{
          ...project,
          media: [
            {
              type: "video",
              src: "https://example.com/demo.mp4",
              alt: "Autoplay preview",
              autoPlay: true,
            },
          ],
        }}
      />
    )
    pause.mockClear()
    fireEvent.mouseLeave(screen.getByLabelText("Autoplay preview"))

    expect(pause).not.toHaveBeenCalled()
  })
})
