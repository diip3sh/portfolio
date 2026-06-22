import { act, cleanup, fireEvent, render } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { ShowcaseCard } from "@/components/portfolio/showcase-card"
import type { ProjectShowcaseComponent } from "@/constants/types"

let observerCallback: IntersectionObserverCallback

class IntersectionObserverMock {
  constructor(callback: IntersectionObserverCallback) {
    observerCallback = callback
  }

  disconnect = vi.fn()
  observe = vi.fn()
  takeRecords = vi.fn(() => [])
  unobserve = vi.fn()
  root = null
  rootMargin = "0px"
  thresholds = [0]
}

const videoShowcase: ProjectShowcaseComponent = {
  type: "showcase",
  title: "Video Showcase",
  col: 1,
  order: 1,
  stack: ["Motion"],
  xLink: "https://x.com/diip3sh",
  media: {
    type: "video",
    src: "https://example.com/showcase.mp4",
    alt: "Video showcase preview",
    width: 1600,
    height: 900,
  },
}

const componentShowcase: ProjectShowcaseComponent = {
  type: "showcase",
  title: "Component Showcase",
  col: 1,
  order: 2,
  stack: ["React"],
  xLink: "https://x.com/diip3sh",
  media: {
    type: "component",
    componentKey: "missing-component",
    alt: "Component showcase preview",
  },
}

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", IntersectionObserverMock)
  vi.spyOn(HTMLMediaElement.prototype, "load").mockImplementation(() => {})
  vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {})
  vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue()
})

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe("ShowcaseCard media loading", () => {
  it("defers video source and hides its placeholder after loadeddata", () => {
    const { container } = render(<ShowcaseCard item={videoShowcase} />)
    const video = container.querySelector("video")
    const placeholder = container.querySelector(
      '[data-media-placeholder="video"]'
    )

    expect(container.querySelector("source")).not.toBeInTheDocument()
    expect(placeholder).toHaveClass("opacity-100")
    expect(video).toHaveClass("opacity-0")

    act(() => {
      observerCallback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    })

    expect(container.querySelector("source")).toHaveAttribute(
      "src",
      videoShowcase.media.type === "video" ? videoShowcase.media.src : undefined
    )

    fireEvent.loadedData(video as HTMLVideoElement)

    expect(placeholder).toHaveClass("opacity-0")
    expect(video).toHaveClass("opacity-100")

    act(() => {
      observerCallback(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    })

    expect(container.querySelector("source")).not.toBeInTheDocument()
    expect(placeholder).toHaveClass("opacity-100")
  })

  it("preserves the unavailable component fallback", () => {
    const { getByText } = render(<ShowcaseCard item={componentShowcase} />)

    expect(getByText("Component unavailable")).toBeInTheDocument()
  })

  it("holds a component slot before its dynamic module loads", () => {
    const item: ProjectShowcaseComponent = {
      ...componentShowcase,
      media: {
        type: "component",
        componentKey: "analog-stick",
        alt: "Analog stick preview",
      },
    }
    const { container } = render(<ShowcaseCard item={item} />)
    const placeholder = container.querySelector(
      '[data-media-placeholder="component"]'
    )

    expect(placeholder).toBeInTheDocument()
    expect(placeholder?.parentElement?.parentElement).toHaveClass(
      "min-h-[320px]"
    )
  })
})
