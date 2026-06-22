"use client"

import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useRef, useState } from "react"

import { HomeSection } from "@/components/home/home-section"
import { VaultRow } from "@/components/home/vault-row"
import type { VaultItem } from "@/constants/types"
import { PrimaryCtaButton } from "../ui/primary-button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Plus } from "@hugeicons/core-free-icons"

const INITIAL_VISIBLE_ITEM_COUNT = 4

type HomeVaultSectionProps = {
  items: VaultItem[]
}

export const HomeVaultSection = ({ items }: HomeVaultSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const viewMoreButtonRef = useRef<HTMLButtonElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const hasMoreItems = items.length > INITIAL_VISIBLE_ITEM_COUNT
  const initialItems = items.slice(0, INITIAL_VISIBLE_ITEM_COUNT)
  const additionalItems = items.slice(INITIAL_VISIBLE_ITEM_COUNT)

  const handleViewMore = () => {
    setIsExpanded(true)
  }

  const handleShowLess = () => {
    setIsExpanded(false)
  }

  const handleExitComplete = () => {
    if (isExpanded) {
      return
    }

    viewMoreButtonRef.current?.focus()
  }

  return (
    <HomeSection id="vault" title="Vault">
      <div className="flex w-full flex-col gap-framer-3">
        {initialItems.map((item, index) => (
          <VaultRow key={`${item.link}-${index}`} {...item} />
        ))}

        <div
          id="vault-additional-items"
          className="flex w-full flex-col overflow-hidden"
        >
          <AnimatePresence initial={false} onExitComplete={handleExitComplete}>
            {isExpanded
              ? additionalItems.map((item, index) => (
                  <motion.div
                    key={item.link}
                    className="overflow-hidden"
                    initial={{
                      height: 0,
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : 12,
                      scale: shouldReduceMotion ? 1 : 0.96,
                      filter: shouldReduceMotion ? "blur(0px)" : "blur(4px)",
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                      transition: shouldReduceMotion
                        ? { duration: 0.18 }
                        : {
                            delay: index * 0.05,
                            height: {
                              type: "spring",
                              stiffness: 520,
                              damping: 30,
                            },
                            default: {
                              type: "spring",
                              stiffness: 480,
                              damping: 22,
                              mass: 0.9,
                            },
                          },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : -4,
                      scale: shouldReduceMotion ? 1 : 0.98,
                      filter: shouldReduceMotion ? "blur(0px)" : "blur(2px)",
                      transition: shouldReduceMotion
                        ? { duration: 0.12 }
                        : {
                            delay:
                              (additionalItems.length - 1 - index) * 0.04,
                            duration: 0.16,
                            ease: "easeIn",
                          },
                    }}
                  >
                    <div className={index === 0 ? undefined : "pt-framer-3"}>
                      <VaultRow {...item} />
                    </div>
                  </motion.div>
                ))
              : null}
          </AnimatePresence>
        </div>

        {hasMoreItems ? (
          <div className="flex w-full justify-start">
            <PrimaryCtaButton
              ref={viewMoreButtonRef}
              type="button"
              onClick={isExpanded ? handleShowLess : handleViewMore}
              aria-expanded={isExpanded}
              aria-controls="vault-additional-items"
              aria-label={
                isExpanded
                  ? "Show fewer vault items"
                  : `View ${additionalItems.length} more vault items`
              }
              className="rounded-full type-body-small focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {/* <HugeiconsIcon
                icon={Plus}
                className="size-3.5"
                strokeWidth={2.5}
              /> */}
              <span className="text-sm leading-7 font-medium tracking-[-0.02em] px-1.5">
                {isExpanded ? "Less" : "see more"}
              </span>
            </PrimaryCtaButton>
          </div>
        ) : null}
      </div>
    </HomeSection>
  )
}
