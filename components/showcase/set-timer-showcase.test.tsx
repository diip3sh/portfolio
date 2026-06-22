"use client"

import { afterEach, describe, expect, it, vi } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { SetTimer } from "./set-timer-showcase"

vi.mock("@ncdai/react-wheel-picker", () => ({
  WheelPickerWrapper: ({
    children,
    className,
  }: {
    children: React.ReactNode
    className?: string
  }) => (
    <div className={className} data-testid="wheel-picker-wrapper">
      {children}
    </div>
  ),
  WheelPicker: ({
    value,
    onValueChange,
  }: {
    value: number
    onValueChange: (v: number) => void
  }) => (
    <div data-testid="wheel-picker">
      <button
        type="button"
        onClick={() => onValueChange(10)}
        aria-label="change minutes"
      >
        pick {value}
      </button>
    </div>
  ),
}))

afterEach(cleanup)

describe("SetTimer reset behavior", () => {
  it("renders compact mode with 'Set timer' label visible", () => {
    render(<SetTimer />)
    const timerText = screen.getByText("Set timer")
    expect(timerText).toBeInTheDocument()
    expect(timerText.closest("[aria-hidden]")).toHaveAttribute(
      "aria-hidden",
      "false"
    )
  })

  it("opens picker on click, then resets on resetSignal", () => {
    const { rerender } = render(<SetTimer />)

    fireEvent.click(screen.getByText("Set timer"))
    const startButton = screen.getByText("Start")
    expect(startButton).toBeInTheDocument()
    expect(startButton.closest("[aria-hidden]")).toHaveAttribute(
      "aria-hidden",
      "false"
    )

    rerender(<SetTimer resetSignal={1} />)

    const timerText = screen.getByText("Set timer")
    expect(timerText.closest("[aria-hidden]")).toHaveAttribute(
      "aria-hidden",
      "false"
    )
  })

  it("resets running timer back to compact on resetSignal change", () => {
    vi.useFakeTimers()
    const { rerender } = render(<SetTimer />)

    fireEvent.click(screen.getByText("Set timer"))
    fireEvent.click(screen.getByText("Start"))
    const pauseButton = screen.getByText("Pause")
    expect(pauseButton.closest("[aria-hidden]")).toHaveAttribute(
      "aria-hidden",
      "false"
    )

    rerender(<SetTimer resetSignal={1} />)

    const timerText = screen.getByText("Set timer")
    expect(timerText.closest("[aria-hidden]")).toHaveAttribute(
      "aria-hidden",
      "false"
    )

    vi.useRealTimers()
  })

  it("does not reset when resetSignal stays at zero", () => {
    const { rerender } = render(<SetTimer />)

    fireEvent.click(screen.getByText("Set timer"))
    const startButton = screen.getByText("Start")
    expect(startButton.closest("[aria-hidden]")).toHaveAttribute(
      "aria-hidden",
      "false"
    )

    rerender(<SetTimer resetSignal={0} />)
    expect(startButton.closest("[aria-hidden]")).toHaveAttribute(
      "aria-hidden",
      "false"
    )
  })

  it("re-triggers reset when signal changes between nonzero values", () => {
    const { rerender } = render(<SetTimer />)

    fireEvent.click(screen.getByText("Set timer"))
    fireEvent.click(screen.getByText("Start"))
    expect(screen.getByText("Pause").closest("[aria-hidden]")).toHaveAttribute(
      "aria-hidden",
      "false"
    )

    rerender(<SetTimer resetSignal={1} />)
    expect(screen.getByText("Set timer").closest("[aria-hidden]")).toHaveAttribute(
      "aria-hidden",
      "false"
    )

    fireEvent.click(screen.getByText("Set timer"))
    fireEvent.click(screen.getByText("Start"))
    expect(screen.getByText("Pause").closest("[aria-hidden]")).toHaveAttribute(
      "aria-hidden",
      "false"
    )

    rerender(<SetTimer resetSignal={2} />)
    expect(screen.getByText("Set timer").closest("[aria-hidden]")).toHaveAttribute(
      "aria-hidden",
      "false"
    )
  })

  it("clears interval when timer is running and reset fires", () => {
    vi.useFakeTimers()
    const { rerender } = render(<SetTimer />)

    fireEvent.click(screen.getByText("Set timer"))
    fireEvent.click(screen.getByText("Start"))

    vi.advanceTimersByTime(500)

    rerender(<SetTimer resetSignal={1} />)

    const timerText = screen.getByText("Set timer")
    expect(timerText.closest("[aria-hidden]")).toHaveAttribute(
      "aria-hidden",
      "false"
    )

    vi.advanceTimersByTime(1000)
    expect(screen.getByText("Set timer").closest("[aria-hidden]")).toHaveAttribute(
      "aria-hidden",
      "false"
    )

    vi.useRealTimers()
  })
})
