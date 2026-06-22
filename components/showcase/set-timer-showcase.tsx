"use client"

import "@ncdai/react-wheel-picker/style.css"

import { useCallback, useEffect, useRef, useState, type ComponentProps } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import * as WheelPickerPrimitive from "@ncdai/react-wheel-picker"
import { cn } from "../../lib/utils"

type WheelPickerValue = WheelPickerPrimitive.WheelPickerValue
type WheelPickerOption<T extends WheelPickerValue = string> =
  WheelPickerPrimitive.WheelPickerOption<T>

function WheelPickerWrapper({
  className,
  ...props
}: ComponentProps<typeof WheelPickerPrimitive.WheelPickerWrapper>) {
  return (
    <WheelPickerPrimitive.WheelPickerWrapper
      className={cn(
        "w-56 rounded-lg border border-zinc-200 bg-white px-1 shadow-xs dark:border-zinc-700/80 dark:bg-zinc-900",
        "*:data-rwp:first:*:data-rwp-highlight-wrapper:rounded-s-md",
        "*:data-rwp:last:*:data-rwp-highlight-wrapper:rounded-e-md",
        className
      )}
      {...props}
    />
  )
}

function WheelPicker<T extends WheelPickerValue = string>({
  classNames,
  ...props
}: WheelPickerPrimitive.WheelPickerProps<T>) {
  return (
    <WheelPickerPrimitive.WheelPicker
      classNames={{
        optionItem: cn(
          "text-zinc-400 dark:text-zinc-500 data-disabled:opacity-40",
          classNames?.optionItem
        ),
        highlightWrapper: cn(
          "bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50",
          "data-rwp-focused:inset-ring-2 data-rwp-focused:inset-ring-zinc-300 dark:data-rwp-focused:inset-ring-zinc-600",
          classNames?.highlightWrapper
        ),
        highlightItem: cn(
          "data-disabled:opacity-40",
          classNames?.highlightItem
        ),
      }}
      {...props}
    />
  )
}

type TimerMode = "compact" | "picker" | "running" | "paused"

type SetTimerProps = {
  resetSignal?: number
}

const DEFAULT_MINUTES = 55
const MIN_MINUTES = 1
const MAX_MINUTES = 60
const MINUTE_OPTIONS: WheelPickerOption<number>[] = Array.from(
  { length: MAX_MINUTES - MIN_MINUTES + 1 },
  (_, index) => {
    const minutes = index + MIN_MINUTES

    return {
      label: minutes,
      value: minutes,
      textValue: `${minutes} minutes`,
    }
  }
)

const SURFACE_DIMENSIONS: Record<
  TimerMode,
  { width: number; height: number; borderRadius: number }
> = {
  compact: { width: 300, height: 84, borderRadius: 42 },
  picker: { width: 342, height: 286, borderRadius: 48 },
  running: { width: 390, height: 180, borderRadius: 48 },
  paused: { width: 390, height: 180, borderRadius: 48 },
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

const TimerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-10 shrink-0"
    viewBox="0 0 18 18"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 10C2 6.134 5.13377 3 9 3C12.8662 3 16 6.134 16 10C16 13.866 12.8662 17 9 17C5.13377 17 2 13.866 2 10Z"
      fill="rgba(255, 255, 255, 1)"
      fillOpacity="0.4"
      data-color="color-2"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.1717 7.17167C6.46459 6.87877 6.93946 6.87877 7.23236 7.17166L9.53036 9.46966C9.82325 9.76255 9.82325 10.2374 9.53036 10.5303C9.23746 10.8232 8.76259 10.8232 8.4697 10.5303L6.1717 8.23233C5.8788 7.93943 5.8788 7.46456 6.1717 7.17167Z"
      fill="rgba(255, 255, 255, 1)"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7197 2.21967C14.0126 1.92678 14.4874 1.92678 14.7803 2.21967L16.7803 4.21967C17.0732 4.51256 17.0732 4.98744 16.7803 5.28033C16.4874 5.57322 16.0126 5.57322 15.7197 5.28033L13.7197 3.28033C13.4268 2.98744 13.4268 2.51256 13.7197 2.21967Z"
      fill="rgba(255, 255, 255, 1)"
    ></path>
    <path
      d="M6.75 0.5C6.33579 0.5 6 0.835786 6 1.25C6 1.66421 6.33579 2 6.75 2H8.25V3.0397C8.4964 3.01346 8.74663 3 9 3C9.25337 3 9.5036 3.01346 9.75 3.0397V2H11.25C11.6642 2 12 1.66421 12 1.25C12 0.835786 11.6642 0.5 11.25 0.5H6.75Z"
      fill="rgba(255, 255, 255, 1)"
    ></path>
  </svg>
)

type ContentLayerProps = {
  children: React.ReactNode
  isVisible: boolean
  className?: string
}

const ContentLayer = ({
  children,
  isVisible,
  className,
}: ContentLayerProps) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.95,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.95,
      }}
      transition={
        shouldReduceMotion
          ? { duration: 0.1 }
          : { duration: isVisible ? 0.22 : 0.15, delay: isVisible ? 0.09 : 0 }
      }
      aria-hidden={!isVisible}
      inert={!isVisible}
      className={cn(
        "absolute inset-0",
        isVisible ? "pointer-events-auto" : "pointer-events-none",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

type MinutePickerProps = {
  selectedMinutes: number
  onChange: (minutes: number) => void
}

const PICKER_ITEM_HEIGHT = 44

// Progressive blur: stacked backdrop-filter layers, each masked to a band
// farther from the crisp center row. The wheel package rotates items on a
// 3D cylinder, so per-item blur can't be applied — overlays do it instead.
const BlurLayer = ({
  blur,
  maskFrom,
  maskTo,
  side,
}: {
  blur: number
  maskFrom: number
  maskTo: number
  side: "top" | "bottom"
}) => {
  const direction = side === "top" ? "to top" : "to bottom"

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0"
      style={{
        top: side === "top" ? 0 : "50%",
        bottom: side === "bottom" ? 0 : "50%",
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        maskImage: `linear-gradient(${direction}, transparent ${maskFrom}%, black ${maskTo}%)`,
        WebkitMaskImage: `linear-gradient(${direction}, transparent ${maskFrom}%, black ${maskTo}%)`,
      }}
    />
  )
}

const MinutePicker = ({ selectedMinutes, onChange }: MinutePickerProps) => {
  return (
    <div className="relative h-full w-[190px] overflow-hidden">
      <WheelPickerWrapper className="h-full !w-[96px] border-0 bg-transparent p-0 shadow-none dark:border-0 dark:bg-transparent *:data-rwp:!h-full *:data-rwp:!mask-none">
        <WheelPicker
          options={MINUTE_OPTIONS}
          value={selectedMinutes}
          onValueChange={onChange}
          infinite
          visibleCount={20}
          optionItemHeight={PICKER_ITEM_HEIGHT}
          dragSensitivity={4}
          scrollSensitivity={10}
          classNames={{
            optionItem:
              "justify-start !text-[40px] font-normal leading-none text-white/60 dark:text-white/60 tabular-nums",
            highlightWrapper:
              "bg-transparent dark:bg-transparent text-white dark:text-white data-rwp-focused:inset-ring-0 dark:data-rwp-focused:inset-ring-0",
            highlightItem:
              "justify-start text-[40px] font-normal leading-none text-white dark:text-white tabular-nums",
          }}
        />
      </WheelPickerWrapper>

      {/* progressive blur above center row */}
      <BlurLayer side="top" blur={2} maskFrom={0} maskTo={35} />
      <BlurLayer side="top" blur={4} maskFrom={30} maskTo={65} />
      <BlurLayer side="top" blur={7} maskFrom={60} maskTo={95} />
      {/* progressive blur below center row */}
      <BlurLayer side="bottom" blur={2} maskFrom={0} maskTo={35} />
      <BlurLayer side="bottom" blur={4} maskFrom={30} maskTo={65} />
      <BlurLayer side="bottom" blur={7} maskFrom={60} maskTo={95} />
      {/* fade extremes like reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #2c2c2c 0%, transparent 22%, transparent 78%, #2c2c2c 100%)",
        }}
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-[85px] -translate-y-1/2 text-[34px] leading-none font-normal text-white"
      >
        mins
      </span>
    </div>
  )
}

type TimerBorderProps = {
  remainingSeconds: number
  totalSeconds: number
  width: number
  height: number
  borderRadius: number
}

// Progress indicator that traces the whole container perimeter (rounded
// rect) instead of a circle. pathLength={1} normalizes the stroke so
// dashoffset = 1 - progress draws the remaining fraction.
const TimerBorder = ({
  remainingSeconds,
  totalSeconds,
  width,
  height,
  borderRadius,
}: TimerBorderProps) => {
  const stroke = 7
  const gap = 7
  const inset = stroke / 2 + gap
  const progress = totalSeconds === 0 ? 0 : remainingSeconds / totalSeconds

  // Rounded-rect path that starts AND ends at the top-center, drawn
  // clockwise. Using an explicit path (not <rect>) puts the dash origin at
  // top-center so the shrinking gap stays centered at the top.
  const left = inset
  const right = width - inset
  const top = inset
  const bottom = height - inset
  const r = borderRadius - inset
  const cx = width / 2
  const path = [
    `M ${cx} ${top}`,
    `H ${right - r}`,
    `A ${r} ${r} 0 0 1 ${right} ${top + r}`,
    `V ${bottom - r}`,
    `A ${r} ${r} 0 0 1 ${right - r} ${bottom}`,
    `H ${left + r}`,
    `A ${r} ${r} 0 0 1 ${left} ${bottom - r}`,
    `V ${top + r}`,
    `A ${r} ${r} 0 0 1 ${left + r} ${top}`,
    `Z`,
  ].join(" ")

  return (
    <svg
      className="pointer-events-none absolute inset-0"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden="true"
    >
      <path d={path} stroke="#3a3a3a" strokeWidth={stroke} />
      <motion.path
        d={path}
        stroke="var(--color-primary)"
        strokeWidth={stroke}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        initial={{ strokeDashoffset: 1 - progress }}
        animate={{ strokeDashoffset: 1 - progress }}
        transition={{ duration: 0.25, ease: "linear" }}
      />
    </svg>
  )
}

export const SetTimer = ({ resetSignal = 0 }: SetTimerProps) => {
  const shouldReduceMotion = useReducedMotion()
  const [hasEntered, setHasEntered] = useState(false)
  const [mode, setMode] = useState<TimerMode>("compact")
  const [selectedMinutes, setSelectedMinutes] = useState(DEFAULT_MINUTES)
  const [remainingSeconds, setRemainingSeconds] = useState(
    DEFAULT_MINUTES * 60
  )
  const deadlineRef = useRef<number | null>(null)
  const totalSecondsRef = useRef(DEFAULT_MINUTES * 60)
  const activeDimensions = SURFACE_DIMENSIONS[mode]

  const handleReset = useCallback(() => {
    deadlineRef.current = null
    setSelectedMinutes(DEFAULT_MINUTES)
    setRemainingSeconds(DEFAULT_MINUTES * 60)
    totalSecondsRef.current = DEFAULT_MINUTES * 60
    setMode("compact")
  }, [])

  useEffect(() => {
    if (resetSignal === 0) {
      return
    }

    handleReset()
  }, [handleReset, resetSignal])

  useEffect(() => {
    setHasEntered(true)
  }, [])

  useEffect(() => {
    if (mode !== "running" || deadlineRef.current === null) return

    const updateRemainingSeconds = () => {
      if (deadlineRef.current === null) return

      const nextRemainingSeconds = Math.max(
        0,
        Math.ceil((deadlineRef.current - Date.now()) / 1000)
      )

      setRemainingSeconds(nextRemainingSeconds)

      if (nextRemainingSeconds > 0) return

      deadlineRef.current = null
      setMode("picker")
    }

    updateRemainingSeconds()
    const intervalId = window.setInterval(updateRemainingSeconds, 250)

    return () => window.clearInterval(intervalId)
  }, [mode])

  const handleOpenPicker = () => {
    setRemainingSeconds(selectedMinutes * 60)
    setMode("picker")
  }

  const handleStart = () => {
    const nextTotalSeconds = selectedMinutes * 60

    totalSecondsRef.current = nextTotalSeconds
    setRemainingSeconds(nextTotalSeconds)
    deadlineRef.current = Date.now() + nextTotalSeconds * 1000
    setMode("running")
  }

  const handlePauseResume = () => {
    if (mode === "running") {
      deadlineRef.current = null
      setMode("paused")
      return
    }

    deadlineRef.current = Date.now() + remainingSeconds * 1000
    setMode("running")
  }

  const handleCancel = () => {
    // Keep remainingSeconds as-is so the border doesn't flash back to full
    // while the running layer fades out; it's reset on re-entry (open/start).
    deadlineRef.current = null
    setMode("compact")
  }

  const handleMinutesChange = (minutes: number) => {
    setSelectedMinutes(minutes)
    setRemainingSeconds(minutes * 60)
  }

  return (
    <main className="flex h-[500px] w-full items-center justify-center overflow-hidden p-5">
      <motion.section
        aria-label="Timer"
        initial={{
          width: 84,
          height: activeDimensions.height,
          borderRadius: activeDimensions.borderRadius,
          opacity: shouldReduceMotion ? 1 : 0.96,
        }}
        animate={{
          width: hasEntered || shouldReduceMotion ? activeDimensions.width : 84,
          height: activeDimensions.height,
          borderRadius: activeDimensions.borderRadius,
          opacity: hasEntered || shouldReduceMotion ? 1 : 0.96,
        }}
        transition={
          shouldReduceMotion
            ? { duration: 0.1 }
            : { type: "spring", stiffness: 400, damping: 30, mass: 1.5 }
        }
        className="relative min-w-[250px] overflow-hidden bg-[#2c2c2c] shadow-sm"
      >
        <ContentLayer isVisible={mode === "compact"}>
          <button
            type="button"
            onClick={handleOpenPicker}
            className="flex size-full cursor-pointer items-center gap-4 rounded-full px-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-inset"
          >
            <TimerIcon />
            <span className="text-[34px] font-normal text-white">
              Set timer
            </span>
          </button>
        </ContentLayer>

        <ContentLayer
          isVisible={mode === "picker"}
          className="flex items-end justify-between pr-4 pl-6"
        >
          <MinutePicker
            selectedMinutes={selectedMinutes}
            onChange={handleMinutesChange}
          />
          <motion.button
            type="button"
            onClick={handleStart}
            whileTap={{ scale: 0.96 }}
            className="mb-5 grid shrink-0 cursor-pointer place-items-center rounded-full bg-[#004d09] px-5 text-[32px] font-medium text-[#32ff43] outline-none focus-visible:ring-2 focus-visible:ring-[#32ff43]"
          >
            Start
          </motion.button>
        </ContentLayer>

        <ContentLayer
          isVisible={mode === "running" || mode === "paused"}
          className="flex items-center justify-between px-5"
        >
          <TimerBorder
            remainingSeconds={remainingSeconds}
            totalSeconds={totalSecondsRef.current}
            width={activeDimensions.width}
            height={activeDimensions.height}
            borderRadius={activeDimensions.borderRadius}
          />
          <motion.button
            type="button"
            onClick={handlePauseResume}
            whileTap={{ scale: 0.96 }}
            className="relative grid h-[52px] w-[100px] cursor-pointer place-items-center overflow-hidden rounded-full bg-orange-950/50 text-[18px] font-medium text-orange-400 outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            <AnimatePresence initial={false} mode="popLayout">
              <motion.span
                key={mode === "paused" ? "Resume" : "Pause"}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
                className="col-start-1 row-start-1"
              >
                {mode === "paused" ? "Resume" : "Pause"}
              </motion.span>
            </AnimatePresence>
          </motion.button>
          <div className="flex flex-col items-center">
            <span className="text-[44px] font-semibold text-white tabular-nums">
              {formatTime(remainingSeconds)}
            </span>
            {/*<span className="text-[16px] font-medium text-muted-foreground">
              Timer
            </span>*/}
          </div>
          <motion.button
            type="button"
            onClick={handleCancel}
            whileTap={{ scale: 0.96 }}
            className="grid cursor-pointer place-items-center rounded-full bg-white/10 px-5 py-3 text-[18px] font-medium text-white outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            Cancel
          </motion.button>
        </ContentLayer>
      </motion.section>
    </main>
  )
}
