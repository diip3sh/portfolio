"use client"

import Image from "next/image"
import Link from "next/link"

import { SeparatorDot } from "@/components/portfolio/separator-dot"
import type { Certification } from "@/constants/types"

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 14 14"
    className="duration-portfolio size-4 shrink-0 transition-transform ease-portfolio group-hover:translate-x-1 motion-reduce:transition-none"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 7h10" />
    <path d="m7 2 5 5-5 5" />
  </svg>
)

export const CertificationRow = ({
  icon,
  iconDark,
  iconLight,
  iconAlt,
  name,
  link,
  year,
}: Certification) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${name} certification`}
      className="group duration-portfolio block w-full text-gallery-white transition-[border-color,color,background-color] ease-portfolio focus-visible:border-gallery-white focus-visible:bg-page-black/50 focus-visible:outline-none active:bg-page-black motion-reduce:transition-none"
    >
      <span className="flex min-w-0 items-center gap-framer-3">
        <span className="duration-portfolio flex size-11 shrink-0 items-center justify-center bg-absolute-black transition-colors group-hover:border-structural-gray motion-reduce:transition-none">
          {iconDark && iconLight ? (
            <>
              <Image
                src={iconLight}
                alt={iconAlt || `${name} icon`}
                width={24}
                height={24}
                unoptimized
                className="block size-6 object-contain dark:hidden"
              />
              <Image
                src={iconDark}
                alt={iconAlt || `${name} icon`}
                width={24}
                height={24}
                unoptimized
                className="hidden size-6 object-contain dark:block"
              />
            </>
          ) : (
            <Image
              src={icon}
              alt={iconAlt || `${name} icon`}
              width={24}
              height={24}
              unoptimized
              className="size-6 object-contain"
            />
          )}
        </span>

        <span className="flex min-w-0 flex-1 items-center gap-framer-3">
          <span className="min-w-0 truncate type-label uppercase">{name}</span>
          <span className="ml-auto flex shrink-0 items-center gap-framer-3">
            <SeparatorDot />
            <span className="type-label text-muted-foreground">
              {year}
            </span>
            <ArrowIcon />
          </span>
        </span>
      </span>
    </Link>
  )
}
