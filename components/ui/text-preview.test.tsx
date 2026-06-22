import { afterEach, describe, expect, it } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { HoverTextPreview } from "./text-preview"

afterEach(cleanup)

const getTrigger = (name: RegExp | string) =>
  screen.getByRole("button", { name })

describe("HoverTextPreview", () => {
  it("renders the trigger as a button with its accessible name", () => {
    render(
      <HoverTextPreview previewImage="/a.png" imageAlt="Alt A">
        anime
      </HoverTextPreview>
    )
    const trigger = getTrigger(/anime/i)
    expect(trigger.tagName).toBe("BUTTON")
    expect(trigger).toHaveAttribute("type", "button")
  })

  it("opens on pointer hover and closes on leave", () => {
    render(
      <HoverTextPreview previewImage="/a.png" imageAlt="Alt A">
        anime
      </HoverTextPreview>
    )
    const trigger = getTrigger(/anime/i)
    expect(trigger).toHaveAttribute("aria-expanded", "false")

    fireEvent.pointerEnter(trigger, { pointerType: "mouse" })
    expect(trigger).toHaveAttribute("aria-expanded", "true")

    fireEvent.pointerLeave(trigger, { pointerType: "mouse" })
    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  it("opens on keyboard focus", () => {
    render(
      <HoverTextPreview previewImage="/a.png" imageAlt="Alt A">
        anime
      </HoverTextPreview>
    )
    const trigger = getTrigger(/anime/i)
    fireEvent.focus(trigger)
    expect(trigger).toHaveAttribute("aria-expanded", "true")
  })

  it("closes on Escape and keeps trigger focus", () => {
    render(
      <HoverTextPreview previewImage="/a.png" imageAlt="Alt A">
        anime
      </HoverTextPreview>
    )
    const trigger = getTrigger(/anime/i)
    fireEvent.focus(trigger)
    expect(trigger).toHaveAttribute("aria-expanded", "true")

    fireEvent.keyDown(trigger, { key: "Escape" })
    expect(trigger).toHaveAttribute("aria-expanded", "false")
    expect(trigger).toHaveFocus()
  })

  it("first touch tap opens the preview", () => {
    render(
      <HoverTextPreview previewImage="/a.png" imageAlt="Alt A">
        anime
      </HoverTextPreview>
    )
    const trigger = getTrigger(/anime/i)
    fireEvent.pointerDown(trigger, { pointerType: "touch" })
    expect(trigger).toHaveAttribute("aria-expanded", "true")
  })

  it("second touch tap closes the preview", () => {
    render(
      <HoverTextPreview previewImage="/a.png" imageAlt="Alt A">
        anime
      </HoverTextPreview>
    )
    const trigger = getTrigger(/anime/i)
    fireEvent.pointerDown(trigger, { pointerType: "touch" })
    expect(trigger).toHaveAttribute("aria-expanded", "true")
    fireEvent.pointerDown(trigger, { pointerType: "touch" })
    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  it("dismisses on outside pointer interaction", () => {
    render(
      <HoverTextPreview previewImage="/a.png" imageAlt="Alt A">
        anime
      </HoverTextPreview>
    )
    const trigger = getTrigger(/anime/i)
    fireEvent.pointerDown(trigger, { pointerType: "touch" })
    expect(trigger).toHaveAttribute("aria-expanded", "true")

    fireEvent.pointerDown(document.body, { pointerType: "touch" })
    expect(trigger).toHaveAttribute("aria-expanded", "false")
  })

  it("aria-controls points at the preview container", () => {
    render(
      <HoverTextPreview previewImage="/a.png" imageAlt="Alt A">
        anime
      </HoverTextPreview>
    )
    const trigger = getTrigger(/anime/i)
    const controls = trigger.getAttribute("aria-controls")
    expect(controls).toBeTruthy()

    fireEvent.focus(trigger)
    expect(document.getElementById(controls as string)).toBeInTheDocument()
  })

  it("preserves alt text for one-, two-, and three-image stacks", () => {
    const one = render(
      <HoverTextPreview previewImage="/a.png" imageAlt="One Alt">
        x
      </HoverTextPreview>
    )
    fireEvent.focus(getTrigger(/x/i))
    expect(screen.getByAltText("One Alt")).toBeInTheDocument()
    one.unmount()

    const two = render(
      <HoverTextPreview
        previewImage={["/a.png", "/b.png"]}
        imageAlt={["Alt 1", "Alt 2"]}
      >
        x
      </HoverTextPreview>
    )
    fireEvent.focus(getTrigger(/x/i))
    expect(screen.getByAltText("Alt 1")).toBeInTheDocument()
    expect(screen.getByAltText("Alt 2")).toBeInTheDocument()
    two.unmount()

    render(
      <HoverTextPreview
        previewImage={["/a.png", "/b.png", "/c.png"]}
        imageAlt={["Alt 1", "Alt 2", "Alt 3"]}
      >
        x
      </HoverTextPreview>
    )
    fireEvent.focus(getTrigger(/x/i))
    expect(screen.getByAltText("Alt 1")).toBeInTheDocument()
    expect(screen.getByAltText("Alt 2")).toBeInTheDocument()
    expect(screen.getByAltText("Alt 3")).toBeInTheDocument()
  })
})
