"use client"

import { useState } from "react"

const timeOptions = ["09:00", "10:30", "13:00", "16:45"] as const

export const EditTimeShowcase = () => {
  const [selectedTime, setSelectedTime] = useState<
    (typeof timeOptions)[number]
  >(timeOptions[1])

  const handleSelectTime = (time: (typeof timeOptions)[number]) => {
    setSelectedTime(time)
  }

  return (
    <div className="flex aspect-[4/5] w-full flex-col justify-between bg-portfolio-media p-framer-5 text-gallery-white">
      <div className="flex flex-col gap-framer-2">
        <p className="type-label text-muted-foreground">Interactive</p>
        <h3 className="type-heading-1">Edit time</h3>
        <p className="max-w-[320px] type-body-small text-muted-foreground">
          Select a time slot and watch the active state update directly in the
          card.
        </p>
      </div>
      <div className="flex flex-col gap-framer-2">
        {timeOptions.map((time) => {
          const isSelected = selectedTime === time

          return (
            <button
              key={time}
              type="button"
              onClick={() => handleSelectTime(time)}
              aria-pressed={isSelected}
              className={`flex items-center justify-between rounded-sm border px-framer-4 py-framer-3 text-left transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${
                isSelected
                  ? "border-gallery-white bg-gallery-white text-absolute-black"
                  : "border-border bg-absolute-black text-gallery-white hover:border-gallery-white"
              }`}
            >
              <span className="type-body-small">{time}</span>
              <span className="type-label">
                {isSelected ? "Selected" : "Pick"}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
