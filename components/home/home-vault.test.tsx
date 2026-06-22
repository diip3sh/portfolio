import { afterEach, describe, expect, it } from "vitest"
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react"
import { HomeVaultSection } from "./home-vault"
import type { VaultItem } from "@/constants/types"

const items: VaultItem[] = Array.from({ length: 6 }, (_, i) => ({
  title: `Item ${i + 1}`,
  by: `Author ${i + 1}`,
  link: `https://example.com/${i + 1}`,
  icon: "article",
}))

afterEach(cleanup)

describe("HomeVaultSection", () => {
  it("renders only the initial visible count", () => {
    render(<HomeVaultSection items={items} />)
    expect(screen.getAllByRole("link")).toHaveLength(4)
  })

  it("More exposes additional entries and updates aria-expanded", () => {
    render(<HomeVaultSection items={items} />)
    const toggle = screen.getByRole("button")
    expect(toggle).toHaveAttribute("aria-expanded", "false")

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute("aria-expanded", "true")
    expect(screen.getAllByRole("link")).toHaveLength(6)
  })

  it("Less collapses and restores focus to the trigger", async () => {
    render(<HomeVaultSection items={items} />)
    const toggle = screen.getByRole("button")

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute("aria-expanded", "true")

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute("aria-expanded", "false")

    await waitFor(() =>
      expect(screen.getAllByRole("link")).toHaveLength(4)
    )
    await waitFor(() => expect(toggle).toHaveFocus())
  })
})
