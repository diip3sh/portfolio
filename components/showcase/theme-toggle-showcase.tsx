"use client"

import { type ChangeEvent, useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { useSound } from "@/hooks/use-sound"
import { clickSoftSound } from "@/sounds/click-soft"

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const [playToggleSound] = useSound(clickSoftSound, { volume: 0.25 })
  const isDarkTheme = isMounted ? resolvedTheme === "dark" : false

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    playToggleSound()
    setTheme(event.target.checked ? "dark" : "light")
  }

  const wrapperClassName = isDarkTheme
    ? "bg-transparent text-[#f8fafc]"
    : "bg-transparent text-[#0f172a]"

  const toggleWrapperClassName = isDarkTheme
    ? "bg-gradient-to-b from-[#111827] to-[#273244] shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_1px_1px_rgb(0_0_0/0.5)]"
    : "bg-gradient-to-b from-[#d5d5d5] to-[#e8e8e8] shadow-[0_1px_1px_rgb(255_255_255/0.6)]"

  const containerClassName = isDarkTheme
    ? "bg-[#1f2937] shadow-[inset_0_0_0.0625em_0.125em_rgb(255_255_255/0.05),inset_0_0.0625em_0.125em_rgb(0_0_0/0.75)] peer-checked:bg-[#0f766e] peer-checked:[&_[data-toggle-button]]:translate-x-[1.5em]"
    : "bg-[#e8e8e8] shadow-[inset_0_0_0.0625em_0.125em_rgb(255_255_255/0.2),inset_0_0.0625em_0.125em_rgb(0_0_0/0.4)] peer-checked:bg-[var(--color-primary)] peer-checked:[&_[data-toggle-button]]:translate-x-[1.5em]"

  const buttonClassName = isDarkTheme
    ? "bg-[#374151] shadow-[inset_0_-0.0625em_0.0625em_0.125em_rgb(0_0_0/0.3),inset_0_-0.125em_0.0625em_rgb(0_0_0/0.45),inset_0_0.1875em_0.0625em_rgb(255_255_255/0.08),0_0.125em_0.125em_rgb(0_0_0/0.7)]"
    : "bg-[#e8e8e8] shadow-[inset_0_-0.0625em_0.0625em_0.125em_rgb(0_0_0/0.1),inset_0_-0.125em_0.0625em_rgb(0_0_0/0.2),inset_0_0.1875em_0.0625em_rgb(255_255_255/0.3),0_0.125em_0.125em_rgb(0_0_0/0.5)]"

  const circleClassName = isDarkTheme
    ? "bg-[radial-gradient(circle_at_50%_0,#9ca3af,#111827)]"
    : "bg-[radial-gradient(circle_at_50%_0,#f5f5f5,#c4c4c4)]"

  return (
    <div
      className={`flex min-h-[140px] w-full flex-col items-center justify-center rounded-[0.75em] p-[1em] transition-colors duration-[220ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${wrapperClassName}`}
    >
      <div
        className={`relative flex items-center justify-center rounded-[0.5em] p-[0.125em] text-[1.5em] ${toggleWrapperClassName}`}
      >
        <input
          className="peer absolute inset-0 z-[1] h-full w-full cursor-pointer appearance-none rounded-[inherit] font-[inherit] opacity-0"
          type="checkbox"
          aria-label={`${isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}`}
          checked={isDarkTheme}
          onChange={handleThemeChange}
        />
        <div
          className={`relative flex h-[1.5em] w-[3em] items-center rounded-[0.375em] transition-[background-color] duration-[400ms] ease-linear ${containerClassName}`}
        >
          <div
            data-toggle-button
            className={`absolute left-[0.0625em] flex h-[1.375em] w-[1.375em] items-center justify-center rounded-[0.3125em] transition-transform duration-[220ms] ease-[cubic-bezier(0.32,0.72,0,1)] [will-change:transform] motion-reduce:duration-[120ms] ${buttonClassName}`}
          >
            <div className="absolute mx-auto grid grid-cols-[repeat(3,min-content)] gap-[0.125em]">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-[0.125em] w-[0.125em] rounded-full ${circleClassName}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
