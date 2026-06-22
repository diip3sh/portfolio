import { afterEach, describe, expect, it, vi } from "vitest"
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react"

import { BookACallLink } from "./book-a-call-link"

afterEach(() => {
  cleanup()
  vi.useRealTimers()
})

describe("BookACallLink", () => {
  it("moves through start and end hover states before resetting", () => {
    vi.useFakeTimers()
    render(<BookACallLink href="mailto:test@example.com" />)

    const link = screen.getByRole("link", { name: "GET IN TOUCH" })
    expect(link).toHaveAttribute("data-phase", "idle")

    fireEvent.mouseEnter(link)
    expect(link).toHaveAttribute("data-phase", "start")

    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(link).toHaveAttribute("data-phase", "end")

    fireEvent.mouseLeave(link)
    expect(link).toHaveAttribute("data-phase", "idle")
  })

  it("supports same interaction through keyboard focus", () => {
    vi.useFakeTimers()
    render(<BookACallLink href="mailto:test@example.com" />)

    const link = screen.getByRole("link", { name: "GET IN TOUCH" })
    fireEvent.focus(link)
    expect(link).toHaveAttribute("data-phase", "start")

    fireEvent.blur(link)
    expect(link).toHaveAttribute("data-phase", "idle")
  })

  it("uses primary CTA shell and keeps YOU above portrait", () => {
    const { container } = render(
      <BookACallLink href="mailto:test@example.com" />
    )

    const link = screen.getByRole("link", { name: "GET IN TOUCH" })
    const portrait = container.querySelector('[data-avatar-layer="portrait"]')
    const youAvatar = container.querySelector('[data-avatar-layer="you"]')
    const activeLayer = container.querySelector('[data-book-layer="active"]')

    expect(link.className).toContain("rounded-full")
    expect(link.style.background).toContain("linear-gradient")
    expect(activeLayer).toHaveClass("opacity-0")
    expect(activeLayer).toHaveStyle({ opacity: "0" })
    expect(portrait).toHaveClass("z-0")
    expect(youAvatar).toHaveClass("z-10")
  })
})
