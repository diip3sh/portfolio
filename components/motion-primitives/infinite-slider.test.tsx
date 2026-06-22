import { cleanup, render, waitFor } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

const { animateMock, translationMock } = vi.hoisted(() => ({
  animateMock: vi.fn(
    (
      _value: unknown,
      _keyframes: unknown,
      _options: { duration?: number }
    ) => ({ stop: vi.fn() })
  ),
  translationMock: {
    get: vi.fn(() => 0),
    set: vi.fn(),
  },
}))

vi.mock("motion/react", () => ({
  animate: animateMock,
  motion: {
    div: ({
      children,
      className,
    }: {
      children: React.ReactNode
      className?: string
    }) => <div className={className}>{children}</div>,
  },
  useMotionValue: () => translationMock,
}))

vi.mock("react-use-measure", () => ({
  default: () => [vi.fn(), { width: 200, height: 100 }],
}))

import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider"

afterEach(() => {
  cleanup()
  animateMock.mockClear()
  translationMock.get.mockClear()
  translationMock.set.mockClear()
})

describe("InfiniteSlider", () => {
  it("falls back to a finite positive duration for invalid speed", async () => {
    render(
      <InfiniteSlider speed={0}>
        <span>Slide</span>
      </InfiniteSlider>
    )

    await waitFor(() => expect(animateMock).toHaveBeenCalled())

    const animationOptions = animateMock.mock.calls.at(-1)?.[2]

    expect(animationOptions?.duration).toBeGreaterThan(0)
    expect(Number.isFinite(animationOptions?.duration)).toBe(true)
  })

  it("hides and disables the repeated copy without changing flex layout", () => {
    const { container, getAllByText } = render(
      <InfiniteSlider>
        <button type="button">Slide action</button>
      </InfiniteSlider>
    )

    const repeatedCopy = container.querySelector('[aria-hidden="true"]')

    expect(getAllByText("Slide action")).toHaveLength(2)
    expect(repeatedCopy).toHaveAttribute("inert")
    expect(repeatedCopy).toHaveClass("contents")
  })
})
