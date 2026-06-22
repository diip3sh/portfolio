import { cn } from "@/lib/utils"

type BackToTopProps = {
  href?: string
  className?: string
}

export const BackToTop = ({
  href = "#intro",
  className,
}: BackToTopProps) => {
  return (
    <a
      href={href}
      aria-label="Back to top"
      className={cn(
        "duration-portfolio absolute right-0 bottom-2 flex size-10 items-center justify-center rounded-circle text-gallery-white shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_4px_8px_0_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.06)] transition-[background-color,color,box-shadow,transform] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.12)] ease-portfolio hover:bg-gallery-white hover:text-absolute-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gallery-white active:scale-[0.96] motion-reduce:transform-none motion-reduce:transition-none",
        className
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="m6 11 6-6 6 6" />
      </svg>
    </a>
  )
}
