import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"

import { StaggerEnter, StaggerItem } from "@/components/portfolio/stagger-enter"

describe("StaggerEnter", () => {
  it("prerenders content that is visible without JavaScript", () => {
    const html = renderToStaticMarkup(
      <StaggerEnter>
        <StaggerItem>Content</StaggerItem>
      </StaggerEnter>
    )

    expect(html).toContain("Content")
    expect(html).not.toContain("opacity")
    expect(html).not.toContain("style=")
  })
})
