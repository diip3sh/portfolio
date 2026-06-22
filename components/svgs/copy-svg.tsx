"use client"

import { useId } from "react"
import { motion, useReducedMotion, type Transition } from "motion/react"

type CopySVGProps = {
  size?: number
  color?: string
  isCopied?: boolean
  className?: string
}

type CopyMorphState = {
  copyClipX: number
  copyClipWidth: number
  copyOpacity: number
  filterScale: number | number[]
  filterStdDeviation: number | number[]
  successClipWidth: number
  successOpacity: number
}

const copyMorphTransition: Transition = {
  duration: 0.22,
  ease: [0.22, 1, 0.36, 1],
}

export const getCopyMorphState = (
  isCopied: boolean,
  shouldReduceMotion: boolean
): CopyMorphState => {
  if (shouldReduceMotion) {
    return {
      copyClipX: isCopied ? 24 : 0,
      copyClipWidth: isCopied ? 0 : 24,
      copyOpacity: isCopied ? 0 : 1,
      filterScale: 0,
      filterStdDeviation: 0,
      successClipWidth: isCopied ? 24 : 0,
      successOpacity: isCopied ? 1 : 0,
    }
  }

  return {
    copyClipX: isCopied ? 24 : 0,
    copyClipWidth: isCopied ? 0 : 24,
    copyOpacity: isCopied ? 0.35 : 1,
    filterScale: isCopied ? [1.1, 0] : 0,
    filterStdDeviation: isCopied ? [0.35, 0] : 0,
    successClipWidth: isCopied ? 24 : 0,
    successOpacity: isCopied ? 1 : 0,
  }
}

export const CopySuccessSVG = ({ size = 24, color = "#000000" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4418_5925)">
        <path
          opacity="0.4"
          d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.08008 15.0008L8.03008 16.9508L11.9201 13.0508"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4418_5925">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const CopySVG = ({
  size = 24,
  color = "#000000",
  isCopied = false,
  className,
}: CopySVGProps) => {
  const generatedId = useId().replaceAll(":", "")
  const shouldReduceMotion = Boolean(useReducedMotion())
  const morphState = getCopyMorphState(isCopied, shouldReduceMotion)
  const copyClipId = `copy-clip-${generatedId}`
  const successClipId = `copy-success-clip-${generatedId}`
  const morphFilterId = `copy-morph-filter-${generatedId}`
  const transition = shouldReduceMotion ? { duration: 0 } : copyMorphTransition

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.g
        clipPath={`url(#${copyClipId})`}
        initial={{ opacity: morphState.copyOpacity }}
        animate={{ opacity: morphState.copyOpacity }}
        transition={transition}
      >
        <path
          d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      <motion.g
        clipPath={`url(#${successClipId})`}
        filter={`url(#${morphFilterId})`}
        initial={{ opacity: morphState.successOpacity }}
        animate={{ opacity: morphState.successOpacity }}
        transition={transition}
      >
        <path
          opacity="0.4"
          d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.08008 15.0008L8.03008 16.9508L11.9201 13.0508"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      <defs>
        <clipPath id={copyClipId}>
          <motion.rect
            x={0}
            y={0}
            width={24}
            height={24}
            fill="white"
            animate={{
              x: morphState.copyClipX,
              width: morphState.copyClipWidth,
            }}
            transition={transition}
          />
        </clipPath>
        <clipPath id={successClipId}>
          <motion.rect
            x={0}
            y={0}
            width={0}
            height={24}
            fill="white"
            animate={{ width: morphState.successClipWidth }}
            transition={transition}
          />
        </clipPath>
        <filter
          id={morphFilterId}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <motion.feGaussianBlur
            in="SourceGraphic"
            result="blur"
            stdDeviation={0}
            animate={{ stdDeviation: morphState.filterStdDeviation }}
            transition={transition}
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="1"
            seed="7"
            result="noise"
          />
          <motion.feDisplacementMap
            in="blur"
            in2="noise"
            scale={0}
            animate={{ scale: morphState.filterScale }}
            transition={transition}
          />
        </filter>
      </defs>
    </svg>
  )
}
