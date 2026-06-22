"use client"

import type { PointerEvent, SVGProps } from "react";
import type { MotionProps } from "motion/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Category = {
  label: string;
  percentage: number;
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
};

type CategoryRowProps = Category & {
  shouldShowFill: boolean;
  transition: MotionProps["transition"];
};

const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    height="18"
    viewBox="0 0 24 24"
    width="18"
    {...props}
  >
    <path
      d="m9 18 6-6-6-6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
    />
  </svg>
);

const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    height="18"
    viewBox="0 0 24 24"
    width="18"
    {...props}
  >
    <path
      d="m18 15-6-6-6 6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.4"
    />
  </svg>
);

const ChatGptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 260"
    {...props}
  >
    <path
      d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"
      fill="currentColor"
    />
  </svg>
);

const OpenCodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 512 512" {...props}>
    <rect className="fill-white dark:fill-white/10" height="512" width="512" />
    <path
      className="fill-zinc-200 dark:fill-white/5"
      d="M320 224V352H192V224H320Z"
    />
    <path
      clipRule="evenodd"
      d="M384 416H128V96H384V416ZM320 160H192V352H320V160Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const KiloCodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" fill="currentColor" viewBox="0 0 32 32" {...props}>
    <path d="M23,26v-2h3v-5l-2-2h-4v2h-3v5l2,2h4ZM20,20h3v3h-3v-3Z" />
    <rect height="3" width="3" x="12" y="17" />
    <polygon points="26 12 23 12 23 9 20 6 17 6 17 9 20 9 20 12 17 12 17 15 26 15 26 12" />
    <path d="M0,0v32h32V0H0ZM29,29H3V3h26v26Z" />
    <polygon points="15 26 15 23 9 23 9 17 6 17 6 23.188 8.813 26 15 26" />
    <rect height="3" width="3" x="12" y="6" />
    <polygon points="9 12 12 12 12 15 15 15 15 12 12 9 9 9 9 6 6 6 6 15 9 15 9 12" />
  </svg>
);

const GrokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 1024 1024" {...props}>
    <path
      d="M395.479 633.828L735.91 381.105C752.599 368.715 776.454 373.548 784.406 392.792C826.26 494.285 807.561 616.253 724.288 699.996C641.016 783.739 525.151 802.104 419.247 760.277L303.556 814.143C469.49 928.202 670.987 899.995 796.901 773.282C896.776 672.843 927.708 535.937 898.785 412.476L899.047 412.739C857.105 231.37 909.358 158.874 1016.4 10.633C1018.93 7.118 1021.47 3.603 1024 0L883.144 141.651V141.212L395.392 633.916"
      fill="currentColor"
    />
    <path
      d="M325.226 695.251C206.128 580.84 226.662 403.776 328.285 301.668C403.431 226.097 526.549 195.254 634.026 240.596L749.454 186.994C728.657 171.88 702.007 155.623 671.424 144.2C533.19 86.994 367.693 115.465 255.323 228.382C147.234 337.081 113.244 504.215 171.613 646.833C215.216 753.423 143.739 828.818 71.739 904.916C46.224 931.893 20.622 958.87 0 987.429L325.139 695.339"
      fill="currentColor"
    />
  </svg>
);

const OthersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.9"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect height="6" rx="1" width="6" x="4" y="4" />
    <rect height="6" rx="1" width="6" x="14" y="4" />
    <rect height="6" rx="1" width="6" x="4" y="14" />
    <rect height="6" rx="1" width="6" x="14" y="14" />
  </svg>
);

const categories: Category[] = [
  { label: "ChatGPT", percentage: 32, icon: ChatGptIcon },
  { label: "OpenCode", percentage: 28, icon: OpenCodeIcon },
  { label: "Kilo Code", percentage: 16, icon: KiloCodeIcon },
  { label: "Grok", percentage: 14, icon: GrokIcon },
  { label: "Others", percentage: 10, icon: OthersIcon },
];

const CategoryRow = ({
  icon: Icon,
  label,
  percentage,
  shouldShowFill,
  transition,
}: CategoryRowProps) => (
  <motion.button
    aria-label={`${label}, ${percentage}% of monthly spend`}
    className="relative flex h-16 w-full shrink-0 items-center gap-3 overflow-hidden rounded-[17px] border-[1.5px] border-solid border-zinc-100 bg-white px-4.5 pl-3.5 text-left text-foreground shadow-[0_2px_8px_#0F11150E] transition-transform duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:border-white/10 dark:bg-background/65 dark:shadow-none"
    type="button"
    transition={transition}
    variants={{
      collapsed: { opacity: 0, y: 8 },
      expanded: { opacity: 1, y: 0 },
    }}
  >
    <motion.span
      aria-hidden="true"
      animate={{ width: shouldShowFill ? `${percentage}%` : "0%" }}
      className="absolute inset-y-0 left-0 bg-zinc-100 dark:bg-white/[0.06]"
      initial={false}
      transition={{ duration: shouldShowFill ? 0.42 : 0, ease: "linear" }}
    />
    <span className="relative z-10 flex size-8.5 shrink-0 items-center justify-center">
      <Icon className="size-[25px] shrink-0 text-foreground" />
    </span>
    <span className="relative z-10 min-w-0 flex-1 basis-0 truncate font-['Inter',system-ui,sans-serif] text-lg leading-6 font-medium tracking-[-0.01em]">
      {label}
    </span>
    <span className="relative z-10 w-13 shrink-0 text-right font-sans text-lg leading-6 font-medium">
      {percentage}%
    </span>
    <span className="relative z-10 flex h-6 w-5 shrink-0 items-center justify-end">
      <ChevronRightIcon className="shrink-0 text-foreground" />
    </span>
  </motion.button>
);

export const SubscriptionShowcase = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [shouldShowRowFill, setShouldShowRowFill] = useState(true);
  const fillDelayTimeoutRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    return () => {
      if (fillDelayTimeoutRef.current === null) {
        return;
      }

      window.clearTimeout(fillDelayTimeoutRef.current);
    };
  }, []);

  const handleToggleCategories = () => {
    if (fillDelayTimeoutRef.current !== null) {
      window.clearTimeout(fillDelayTimeoutRef.current);
      fillDelayTimeoutRef.current = null;
    }

    setShouldShowRowFill(false);
    setIsExpanded((currentIsExpanded) => !currentIsExpanded);
  };

  const handleTogglePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleStaggerComplete = () => {
    if (!isExpanded) {
      return;
    }

    fillDelayTimeoutRef.current = window.setTimeout(() => {
      setShouldShowRowFill(true);
      fillDelayTimeoutRef.current = null;
    }, 3);
  };

  const listTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        type: "spring" as const,
        stiffness: 400,
        damping: 30,
        mass: 1.5,
      };

  const rowListVariants = shouldReduceMotion
    ? {
        collapsed: {},
        expanded: {},
      }
    : {
        collapsed: {
          transition: {
            staggerChildren: 0.035,
            staggerDirection: -1,
          },
        },
        expanded: {
          transition: {
            delayChildren: 0.05,
            staggerChildren: 0.055,
          },
        },
      };

  const rowTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        type: "spring" as const,
        stiffness: 400,
        damping: 30,
        mass: 1.5,
      };

  return (
    <section
      aria-label="Monthly AI spend summary"
      className="flex h-[600px] items-start justify-center p-6"
    >
      <div className="flex w-[410px] flex-col rounded-[28px] bg-white px-4.5 pt-5.5 pb-5 font-['Inter',system-ui,sans-serif] text-foreground antialiased shadow-[0_20px_45px_#1012180F] dark:bg-white/[0.055] dark:shadow-none">
        <header className="flex w-full items-start justify-between px-0.5">
          <div className="flex flex-col gap-1">
            <p className="text-sm leading-4.5 font-medium text-zinc-500 dark:text-muted-foreground">
              May 2025
            </p>
            <h2 className="text-[28px] leading-8 font-bold tracking-normal text-foreground">
              $44.99
            </h2>
            <p className="text-base leading-5.5 font-medium text-emerald-700 dark:text-emerald-400">
              You spent 22% less than last month!
            </p>
          </div>
          <button
            aria-controls="monthly-spend-categories"
            aria-expanded={isExpanded}
            aria-label={
              isExpanded
                ? "Collapse monthly spend categories"
                : "Expand monthly spend categories"
            }
            className="flex size-7.5 shrink-0 items-center justify-center text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            onClick={handleToggleCategories}
            onPointerDown={handleTogglePointerDown}
            type="button"
          >
            <motion.span
              animate={{ rotate: isExpanded ? 0 : 180 }}
              className="flex shrink-0"
              transition={listTransition}
            >
              <ChevronUpIcon className="shrink-0" />
            </motion.span>
          </button>
        </header>

        <AnimatePresence initial={false}>
          {isExpanded ? (
            <motion.div
              animate={{ height: "auto", marginTop: 32, opacity: 1 }}
              className="overflow-hidden will-change-auto"
              exit={{ height: 0, marginTop: 0, opacity: 0 }}
              id="monthly-spend-categories"
              initial={{ height: 0, marginTop: 0, opacity: 0 }}
              transition={listTransition}
            >
              <motion.div
                animate="expanded"
                className="flex w-full flex-col gap-3.5"
                initial="collapsed"
                onAnimationComplete={handleStaggerComplete}
                variants={rowListVariants}
              >
                {categories.map((category) => (
                  <CategoryRow
                    key={category.label}
                    shouldShowFill={shouldShowRowFill}
                    transition={rowTransition}
                    {...category}
                  />
                ))}
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
};
