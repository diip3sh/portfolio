"use client"

import { useEffect, useMemo, useState } from "react"
import { DateTime } from "luxon"
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "motion/react"

type WorldClockRow = {
  city: string
  offset: string
  status: "day" | "night"
  time: string
  height: string
  timezoneLabel: string
  deltaLabel: string
  rulerTilt: number
  isLocal: boolean
}

type WorldClockLocation = {
  city: string
  zone: string
  height: string
  rulerTilt: number
  isLocal?: boolean
}

// The clock is designed at full size (690px wide) but the showcase grid expects
// cards around ~410px, so the whole thing is shrunk with CSS `zoom`. Unlike a
// `transform: scale`, `zoom` reflows the layout box — which keeps every tuned
// offset and the SVG ruler intact, lets the card centre itself in the grid, and
// (crucially) doesn't break Framer Motion's `layout` animations the way an
// ancestor transform does.
const CARD_SCALE = 0.6

const localZone = "Asia/Kolkata"

const worldClockLocations: WorldClockLocation[] = [
  {
    city: "Jamshedpur",
    zone: localZone,
    height: "h-[126px]",
    rulerTilt: 0,
    isLocal: true,
  },
  {
    city: "San Francisco",
    zone: "America/Los_Angeles",
    height: "h-[127px]",
    rulerTilt: -22,
  },
  {
    city: "London",
    zone: "Europe/London",
    height: "h-[126px]",
    rulerTilt: 18,
  },
  {
    city: "New York",
    zone: "America/New_York",
    height: "h-[121px]",
    rulerTilt: 24,
  },
]

const timezoneLabelByZone: Record<string, string> = {
  "Asia/Kolkata": "IST",
}

const getTimezoneLabel = (dateTime: DateTime, zone: string) => {
  const configuredLabel = timezoneLabelByZone[zone]

  if (configuredLabel) {
    return configuredLabel
  }

  const shortName = dateTime.offsetNameShort

  if (shortName && !shortName.startsWith("GMT")) {
    return shortName
  }

  return dateTime.toFormat("ZZZZ")
}

const formatOffsetDifference = (
  targetOffsetMinutes: number,
  baseOffsetMinutes: number
) => {
  const differenceMinutes = targetOffsetMinutes - baseOffsetMinutes

  if (differenceMinutes === 0) {
    return "+0H"
  }

  const sign = differenceMinutes > 0 ? "+" : "-"
  const absoluteMinutes = Math.abs(differenceMinutes)
  const hours = Math.floor(absoluteMinutes / 60)
  const minutes = absoluteMinutes % 60

  if (minutes === 0) {
    return `${sign}${hours}H`
  }

  return `${sign}${hours}:${String(minutes).padStart(2, "0")}H`
}

const getStatus = (dateTime: DateTime): WorldClockRow["status"] => {
  const hour = dateTime.hour

  if (hour >= 8 && hour < 18) {
    return "day"
  }

  return "night"
}

const createWorldClockRows = (now: DateTime): WorldClockRow[] => {
  const baseDateTime = now.setZone(localZone)

  return worldClockLocations.map((location) => {
    const zonedDateTime = now.setZone(location.zone)
    const timezoneLabel = getTimezoneLabel(zonedDateTime, location.zone)
    const deltaLabel = formatOffsetDifference(
      zonedDateTime.offset,
      baseDateTime.offset
    )

    return {
      city: location.city,
      offset: location.isLocal
        ? "MY TIME"
        : `${deltaLabel} / ${timezoneLabel}`,
      status: getStatus(zonedDateTime),
      time: zonedDateTime.toFormat("HH:mm"),
      height: location.height,
      timezoneLabel,
      deltaLabel,
      rulerTilt: location.rulerTilt,
      isLocal: Boolean(location.isLocal),
    }
  })
}

// A 12-hour clock face laid out horizontally: each hour is a numbered major tick,
// split into twelve 5-minute minor ticks. The pattern repeats so it reads as an
// infinite loop (…11, 12, 1, 2…) and the centered marker can point at any time.
const RULER_SUB_SPACING = 7 // px per 5-minute tick
const RULER_HOUR_WIDTH = RULER_SUB_SPACING * 12 // 84px per hour
const RULER_CYCLE_WIDTH = RULER_HOUR_WIDTH * 12 // one full 12-hour loop
const RULER_HOUR_RANGE = 96 // several full loops on each side prevents visible strip ends
const RULER_VIEW_WIDTH = 690
const RULER_MARKER_X = RULER_VIEW_WIDTH / 2 // marker sits at the center of the strip
const RULER_ANCHOR_CYCLE = RULER_CYCLE_WIDTH * 4
const CLOCK_ACTIVE_SURFACE_CLASS = "bg-[#ECECEE] dark:bg-[#1B1E22]"
const CLOCK_ROW_SURFACE_CLASS =
  "bg-[#F6F6F7] hover:bg-[#EFEFF1] dark:bg-[#24262B] dark:hover:bg-[#292C31]"

const toClockLabel = (hourIndex: number) => {
  const value = ((hourIndex % 12) + 12) % 12
  return value === 0 ? 12 : value
}

const rulerHourTicks = Array.from(
  { length: RULER_HOUR_RANGE * 2 + 1 },
  (_, offset) => {
    const hourIndex = offset - RULER_HOUR_RANGE
    return {
      id: `hour-${hourIndex}`,
      x: hourIndex * RULER_HOUR_WIDTH,
      label: toClockLabel(hourIndex),
    }
  }
)

const rulerMinorTicks = Array.from(
  { length: RULER_HOUR_RANGE * 2 },
  (_, offset) => {
    const hourIndex = offset - RULER_HOUR_RANGE
    return Array.from({ length: 11 }, (_unused, step) => ({
      id: `minor-${hourIndex}-${step + 1}`,
      x: hourIndex * RULER_HOUR_WIDTH + (step + 1) * RULER_SUB_SPACING,
    }))
  }
).flat()

// Folds a wall-clock time onto the 12-hour scale (e.g. 16:30 -> 4.5 hours).
const timeToClockHours = (time: string) => {
  const [hour, minute] = time.split(":").map(Number)
  return (hour % 12) + minute / 60
}

const cardEnterTransition = {
  duration: 0.24,
  ease: [0.22, 1, 0.36, 1],
} as const

const subtleTransition = {
  duration: 0.16,
  ease: [0.22, 1, 0.36, 1],
} as const

const springTransition = {
  type: "spring",
  duration: 0.34,
  bounce: 0,
} as const

// Ruler glides toward its mark and settles with a little bounce to feel alive.
const rulerSpring = {
  type: "spring",
  stiffness: 70,
  damping: 12,
  mass: 1,
} as const

const collapseTransition = {
  duration: 0.32,
  ease: [0.22, 1, 0.36, 1],
} as const

const MoonIcon = () => (
  <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" aria-hidden="true">
    <path
      d="M13.7 1.9c-1.8.6-3.1 2.3-3.1 4.3 0 2.6 2.1 4.7 4.7 4.7 1.2 0 2.3-.5 3.1-1.2-.7 3.8-4 6.6-8 6.6-4.5 0-8.1-3.6-8.1-8.1 0-3.8 2.6-7 6.1-7.9 1.8-.5 3.7.1 5.3 1.6z"
      fill="currentColor"
    />
  </svg>
)

const ChevronUpIcon = () => (
  <svg
    className="h-[22px] w-[22px] shrink-0"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M18 15l-6-6-6 6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.4"
    />
  </svg>
)

const StatusIndicator = ({ status }: { status: WorldClockRow["status"] }) => {
  if (status === "night") {
    return (
      <motion.div
        className="flex items-center gap-2 text-[#71757c] dark:text-[#90939a]"
        layout
        transition={springTransition}
      >
        <span>NIGHT</span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key="night"
            initial={{ opacity: 0, scale: 0.92, filter: "blur(2px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.96, filter: "blur(2px)" }}
            transition={subtleTransition}
          >
            <MoonIcon />
          </motion.span>
        </AnimatePresence>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="flex items-center gap-2 text-[#90939a]"
      layout
      transition={springTransition}
    >
      <span>DAY</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key="day"
          className="h-3 w-3 rounded-full bg-[#23ce72] shadow-[0_0_0_2px_rgba(35,206,114,0.16)]"
          initial={{ opacity: 0, scale: 0.92, filter: "blur(2px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.96, filter: "blur(2px)" }}
          transition={subtleTransition}
        />
      </AnimatePresence>
    </motion.div>
  )
}

const digitTransition = {
  duration: 0.5,
  ease: [0.34, 1.45, 0.64, 1],
} as const

const digitVariants = {
  hidden: { y: 8, opacity: 0, filter: "blur(2px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
}

// Per-digit pop-in that replays only when the value actually changes (keyed remount),
// so the clock ticking over doesn't flicker the whole block.
const AnimatedTime = ({
  value,
  shouldReduceMotion,
}: {
  value: string
  shouldReduceMotion: boolean
}) => {
  if (shouldReduceMotion) {
    return <span className="tabular-nums">{value}</span>
  }

  return (
    <motion.span
      key={value}
      className="inline-flex tabular-nums"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
    >
      {value.split("").map((char, index) => (
        <motion.span
          key={`${index}-${char}`}
          className="inline-block will-change-[transform,opacity,filter]"
          variants={digitVariants}
          transition={digitTransition}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

const WorldClockListRow = ({
  row,
  index,
  shouldReduceMotion,
  handleHoveredTimezoneChange,
}: {
  row: WorldClockRow
  index: number
  shouldReduceMotion: boolean
  handleHoveredTimezoneChange: (row: WorldClockRow | null) => void
}) => {
  const rowSurfaceClass = row.isLocal
    ? CLOCK_ACTIVE_SURFACE_CLASS
    : CLOCK_ROW_SURFACE_CLASS
  const offsetPositionClass = index === 0 ? "top-[23px]" : "top-6"
  const cityPositionClass = index === 0 ? "top-[59px]" : "top-[61px]"
  const statusPositionClass = index === 0 ? "top-[23px]" : "top-6"
  const timePositionClass = index === 0 ? "top-[55px]" : "top-14"
  const timeWeightClass = index === 0 ? "" : "font-light"

  return (
    <motion.div
      tabIndex={0}
      aria-label={`${row.city}, ${row.offset}, ${row.status}, ${row.time}`}
      className={[
        "relative shrink-0 border-b border-[#DEDEE1] transition-colors dark:border-[#34373b]",
        row.height,
        rowSurfaceClass,
      ].join(" ")}
      initial={
        shouldReduceMotion ? false : { opacity: 0, y: 6, filter: "blur(3px)" }
      }
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
      transition={{
        ...cardEnterTransition,
        delay: shouldReduceMotion ? 0 : 0.08 + index * 0.025,
      }}
      onFocus={() => handleHoveredTimezoneChange(row)}
      onBlur={() => handleHoveredTimezoneChange(null)}
      onMouseEnter={() => handleHoveredTimezoneChange(row)}
      onMouseLeave={() => handleHoveredTimezoneChange(null)}
    >
      <div
        className={[
          "absolute left-[22px] font-['CommitMono-575Regular','CommitMono',system-ui,sans-serif] text-[20px]/6 font-[575] tracking-[0.04em] text-[#71757c] dark:text-[#90939a]",
          offsetPositionClass,
        ].join(" ")}
      >
        {row.offset}
      </div>
      <div
        className={[
          "absolute left-[22px] font-['Instrument_Serif',system-ui,sans-serif] text-[40px]/12 tracking-normal text-[#15181b] dark:text-[#f4f4f6]",
          cityPositionClass,
        ].join(" ")}
      >
        {row.city}
      </div>
      <div
        className={[
          "absolute right-[23px] font-['CommitMono-575Regular','CommitMono',system-ui,sans-serif] text-[20px]/6 font-[575] tracking-[0.04em]",
          statusPositionClass,
        ].join(" ")}
      >
        <StatusIndicator status={row.status} />
      </div>
      <div
        className={[
          "absolute right-[22px] font-['Inter',system-ui,sans-serif] text-[42px]/12.5 tracking-normal text-[#15181b] dark:text-[#f4f4f6]",
          timePositionClass,
          timeWeightClass,
        ].join(" ")}
      >
        <AnimatedTime
          value={row.time}
          shouldReduceMotion={shouldReduceMotion}
        />
      </div>
    </motion.div>
  )
}

export const TimezoneShowcase = () => {
  const shouldReduceMotion = useReducedMotion()
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [expanded, setExpanded] = useState(false)
  const [now, setNow] = useState(() => DateTime.now())
  const worldClockRows = useMemo(() => createWorldClockRows(now), [now])
  const localRow = worldClockRows[0]
  // Resolve from the live rows so the hovered values keep ticking with the clock.
  const activeRow =
    worldClockRows.find((row) => row.city === hoveredCity) ?? localRow
  const activeTimezoneLabel = activeRow.timezoneLabel
  const activeDeltaLabel = activeRow.deltaLabel
  const activeClockHours = timeToClockHours(activeRow.time)

  const rulerX = useMotionValue(
    RULER_ANCHOR_CYCLE + RULER_MARKER_X - activeClockHours * RULER_HOUR_WIDTH
  )

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNow(DateTime.now())
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  // Slide the strip so the active time lands under the centered marker, always
  // taking the shorter way around the 12-hour loop.
  useEffect(() => {
    const target =
      RULER_ANCHOR_CYCLE + RULER_MARKER_X - activeClockHours * RULER_HOUR_WIDTH
    const current = rulerX.get()
    const wrapped =
      target +
      Math.round((current - target) / RULER_CYCLE_WIDTH) * RULER_CYCLE_WIDTH

    if (shouldReduceMotion) {
      rulerX.set(wrapped)
      return
    }

    const controls = animate(rulerX, wrapped, rulerSpring)
    return () => controls.stop()
  }, [activeClockHours, rulerX, shouldReduceMotion])

  const handleHoveredTimezoneChange = (row: WorldClockRow | null) => {
    setHoveredCity(row?.city ?? null)
  }

  return (
    <motion.section
      aria-label="World clock time comparison"
      className="relative my-10 w-[690px] overflow-clip rounded-[30px] bg-[#F6F6F7] text-xs/4 text-[#15181b] antialiased shadow-[0_0_0_1px_#0000000F] [font-synthesis:none] dark:bg-[#1B1F22] dark:text-[#f4f4f6] dark:shadow-[0_0_0_1px_#FFFFFF08]"
      style={{ zoom: CARD_SCALE }}
      initial={
        shouldReduceMotion ? false : { opacity: 0, y: 8, filter: "blur(4px)" }
      }
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        height: expanded ? 734 : 486,
      }}
      transition={{ ...cardEnterTransition, height: collapseTransition }}
    >
      <div
        className={`pointer-events-none absolute top-0 left-0 h-[263px] w-full ${CLOCK_ACTIVE_SURFACE_CLASS}`}
      />

      <div className="absolute top-6 left-[23px] flex h-7 w-[642px] items-center justify-between">
        <span className="relative h-6 min-w-[88px] overflow-hidden font-['Roboto_Mono',system-ui,sans-serif] text-[20px]/6 font-semibold text-[#71757c] dark:text-[#8d9097]">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={activeTimezoneLabel}
              className="absolute top-0 left-0"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 6, filter: "blur(2px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(2px)" }}
              transition={subtleTransition}
            >
              {activeTimezoneLabel}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="relative flex h-6 min-w-[72px] justify-end overflow-hidden font-['Roboto_Mono',system-ui,sans-serif] text-[20px]/6 font-semibold text-[#71757c] dark:text-[#8d9097]">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={activeDeltaLabel}
              className="absolute top-0 right-0"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 6, filter: "blur(2px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(2px)" }}
              transition={subtleTransition}
            >
              {activeDeltaLabel}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>

      <div className="absolute top-[72px] left-0 h-[70px] w-[690px] overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_9%,black_91%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_9%,black_91%,transparent_100%)]">
        <svg
          className="h-[70px] w-[690px]"
          viewBox={`0 0 ${RULER_VIEW_WIDTH} 70`}
          aria-hidden="true"
        >
          {/* The wide tick range plus this translate keep both ends filled at any offset. */}
          <motion.g className="will-change-transform" style={{ x: rulerX }}>
            <g
              strokeLinecap="round"
              strokeWidth="2"
              className="stroke-[#c7c9ce] dark:stroke-[#3c4046]"
            >
              {rulerMinorTicks.map((tick) => (
                <line key={tick.id} x1={tick.x} x2={tick.x} y1={40} y2={66} />
              ))}
            </g>
            <g
              strokeLinecap="round"
              strokeWidth="2"
              className="stroke-[#9fa4ac] dark:stroke-[#5a5f66]"
            >
              {rulerHourTicks.map((tick) => (
                <line key={tick.id} x1={tick.x} x2={tick.x} y1={24} y2={66} />
              ))}
            </g>
            <g
              stroke="none"
              className="fill-[#71757c] font-['Roboto_Mono',system-ui,sans-serif] dark:fill-[#8d9097]"
              fontSize="13"
              fontWeight={600}
              textAnchor="middle"
            >
              {rulerHourTicks.map((tick) => (
                <text key={`label-${tick.id}`} x={tick.x} y={14}>
                  {tick.label}
                </text>
              ))}
            </g>
          </motion.g>
        </svg>
      </div>

      <motion.div
        className="absolute top-0 left-[344px] h-[75px] w-[3px] rounded-full bg-[#e17b2f] shadow-[0_0_6px_rgba(225,123,47,0.3)]"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ...cardEnterTransition,
          delay: shouldReduceMotion ? 0 : 0.14,
          duration: 0.18,
        }}
      />

      <div className="absolute top-[137px] left-0 flex w-[690px] flex-col">
        {worldClockRows.slice(0, 2).map((row, index) => (
          <WorldClockListRow
            key={row.city}
            row={row}
            index={index}
            shouldReduceMotion={Boolean(shouldReduceMotion)}
            handleHoveredTimezoneChange={handleHoveredTimezoneChange}
          />
        ))}
        <AnimatePresence initial={false}>
          {expanded &&
            worldClockRows.slice(2).map((row, sliceIndex) => {
              const index = sliceIndex + 2
              return (
                <motion.div
                  key={row.city}
                  className="overflow-hidden"
                  initial={
                    shouldReduceMotion
                      ? false
                      : { height: 0, opacity: 0, filter: "blur(4px)" }
                  }
                  animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { height: 0, opacity: 0, filter: "blur(4px)" }
                  }
                  transition={collapseTransition}
                >
                  <WorldClockListRow
                    row={row}
                    index={index}
                    shouldReduceMotion={Boolean(shouldReduceMotion)}
                    handleHoveredTimezoneChange={handleHoveredTimezoneChange}
                  />
                </motion.div>
              )
            })}
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute left-0 flex h-24 w-[690px] items-center justify-end bg-[#F6F6F7] px-11 dark:bg-[#1B1F22]"
        animate={{ top: expanded ? 638 : 390 }}
        transition={collapseTransition}
      >
        <motion.button
          type="button"
          className="relative flex h-[52px] shrink-0 items-center gap-2 text-[#3a3d42] transition-colors outline-none hover:text-black focus-visible:ring-2 focus-visible:ring-[#71757c]/60 dark:text-[#d7d7d9] dark:hover:text-white dark:focus-visible:ring-[#d7d7d9]/60"
          aria-label={
            expanded
              ? "See fewer world clock rows"
              : "See more world clock rows"
          }
          aria-expanded={expanded}
          onClick={() => setExpanded((previous) => !previous)}
          whileHover={shouldReduceMotion ? undefined : "hover"}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          transition={subtleTransition}
        >
          <span className="font-['Inter',system-ui,sans-serif] text-[22px]/7">
            {expanded ? "See less" : "See more"}
          </span>
          <motion.span
            variants={{ hover: { y: expanded ? -1 : 1 } }}
            animate={{ rotate: expanded ? 0 : 180 }}
            transition={subtleTransition}
          >
            <ChevronUpIcon />
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.section>
  )
}
