import { cleanup, render } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"

import { MediaPlaceholder } from "@/components/portfolio/media-placeholder"
import { mediaPlaceholderByVariant } from "@/lib/media-placeholders"

afterEach(cleanup)

describe("MediaPlaceholder", () => {
  it.each(["image", "video", "component"] as const)(
    "renders the %s inline canvas decoratively",
    (variant) => {
      const { container } = render(<MediaPlaceholder variant={variant} />)
      const placeholder = container.querySelector(
        `[data-media-placeholder="${variant}"]`
      )

      expect(placeholder).toHaveAttribute(
        "src",
        mediaPlaceholderByVariant[variant]
      )
      expect(placeholder).toHaveAttribute("alt", "")
      expect(placeholder).toHaveAttribute("aria-hidden", "true")
      expect(placeholder).toHaveClass("opacity-100")
    }
  )

  it("hides without leaving the media canvas", () => {
    const { container } = render(
      <MediaPlaceholder variant="video" isVisible={false} />
    )
    const placeholder = container.querySelector(
      '[data-media-placeholder="video"]'
    )

    expect(placeholder).toHaveClass("absolute", "inset-0", "opacity-0")
  })
})
