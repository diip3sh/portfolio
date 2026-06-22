import Link from "next/link"

import { SeparatorDot } from "@/components/portfolio/separator-dot"
import { BookmarkSVG } from "@/components/svgs/bookmark-svg"
import type { VaultItem } from "@/constants/types"
import { NewsletterSVG } from "../svgs/newsletter-svg"
import { VideoSVG } from "../svgs/video-svg"
import { CourseSVG } from "../svgs/course-svg"

export const VaultRow = ({ title, by, link, icon }: VaultItem) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${title} by ${by}`}
      className="flex min-h-10 w-full items-center gap-framer-4 rounded-[10px] py-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      {(icon === "course" && <CourseSVG size={18} />) ||
        (icon === "newsletter" && <NewsletterSVG size={18} />) ||
        (icon === "article" && <BookmarkSVG size={18} />) || (
          <VideoSVG size={18} />
        )}

      <div className="flex min-w-0 flex-1 flex-col gap-framer-1">
        <p className="flex flex-wrap items-center gap-x-framer-1 gap-y-framer-1">
          <span className="type-label uppercase">{title}</span>
          <SeparatorDot />
          <span className="type-label text-muted-foreground">by {by}</span>
        </p>
      </div>
    </Link>
  )
}
