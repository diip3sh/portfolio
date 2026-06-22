import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { ToolsMenu, type MenuBarItem } from "@/components/ui/tools-menu"

const TestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" {...props} />
)

const createMenuItems = (handleClick: () => void): MenuBarItem[] => [
  {
    label: "Copy prompt",
    icon: TestIcon,
    onClick: handleClick,
  },
]

afterEach(cleanup)

describe("ToolsMenu focus behavior", () => {
  it("releases focus after a pointer click", () => {
    const handleClick = vi.fn()
    render(<ToolsMenu items={createMenuItems(handleClick)} />)
    const button = screen.getByRole("button", { name: "Copy prompt" })

    button.focus()
    fireEvent.click(button, { detail: 1 })

    expect(handleClick).toHaveBeenCalledOnce()
    expect(button).not.toHaveFocus()
  })

  it("retains focus after keyboard activation", () => {
    const handleClick = vi.fn()
    render(<ToolsMenu items={createMenuItems(handleClick)} />)
    const button = screen.getByRole("button", { name: "Copy prompt" })

    button.focus()
    fireEvent.click(button, { detail: 0 })

    expect(handleClick).toHaveBeenCalledOnce()
    expect(button).toHaveFocus()
  })
})
