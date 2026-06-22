"use client"

import Image from "next/image"
import Link from "next/link"

import { PrimaryTooltip } from "@/components/ui/primary-tooltip"
import type { StackTool } from "@/constants/types"

export const StackRow = ({
  name,
  iconAlt,
  iconSrc,
  iconSrcDark,
  iconSrcLight,
  link,
}: StackTool) => {
  return (
    <article className="flex w-full items-center gap-framer-3">
      <PrimaryTooltip
        content={<p className="uppercase tracking-tight">{name}</p>}
      >
        {({ className, ...tooltipTriggerProps }) => (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} details`}
            className={`${className} flex size-10 items-center justify-center rounded-sm focus-visible:ring-2 focus-visible:ring-ring`}
            {...tooltipTriggerProps}
          >
            {iconSrcDark && iconSrcLight ? (
              <>
                <Image
                  src={iconSrcLight}
                  alt={iconAlt || `${name} icon`}
                  height={34}
                  width={34}
                  className="block size-[34px] shrink-0 dark:hidden"
                />
                <Image
                  src={iconSrcDark}
                  alt={iconAlt || `${name} icon`}
                  height={34}
                  width={34}
                  className="hidden size-[34px] shrink-0 dark:block"
                />
              </>
            ) : (
              <Image
                src={iconSrc}
                alt={iconAlt || `${name} icon`}
                height={34}
                width={34}
                className="size-[34px] shrink-0"
              />
            )}
          </Link>
        )}
      </PrimaryTooltip>
    </article>
  )
}
