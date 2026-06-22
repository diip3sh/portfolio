import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { PhoneNavigation } from "@/components/portfolio/phone-navigation"
import { ScrollColumn } from "@/components/portfolio/scroll-column"

afterEach(() => {
  cleanup()
  document.body.innerHTML = ""
})

describe("portfolio navigation accessibility", () => {
  it("uses native button semantics for in-page navigation", () => {
    const scrollIntoView = vi.fn()
    const workSection = document.createElement("section")
    workSection.id = "work"
    workSection.scrollIntoView = scrollIntoView
    document.body.appendChild(workSection)

    render(
      <PhoneNavigation
        sections={[
          { id: "intro", label: "Intro" },
          { id: "work", label: "Work" },
        ]}
      />
    )

    const introButton = screen.getByRole("button", { name: "Intro" })
    const workButton = screen.getByRole("button", { name: "Work" })

    expect(screen.queryByRole("tablist")).not.toBeInTheDocument()
    expect(screen.queryByRole("tab")).not.toBeInTheDocument()
    expect(introButton).toHaveAttribute("aria-current", "location")
    expect(workButton).not.toHaveAttribute("tabindex")

    fireEvent.click(workButton)

    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    })
    expect(workButton).toHaveAttribute("aria-current", "location")
    expect(introButton).not.toHaveAttribute("aria-current")
  })

  it("exposes scrollable columns as named keyboard-focusable regions", () => {
    render(
      <ScrollColumn ariaLabel="Project gallery" showProgress={false}>
        <p>Gallery content</p>
      </ScrollColumn>
    )

    const scrollRegion = screen.getByRole("region", {
      name: "Project gallery",
    })

    expect(scrollRegion).toHaveAttribute("tabindex", "0")
    expect(scrollRegion).toHaveClass("focus-visible:outline-2")
  })
})
