import Link from "next/link"

type SecondaryLinkProps = {
  href: string
  children: React.ReactNode
}

const ArrowLeftIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 14 14"
    className="size-3.5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 7H2" />
    <path d="m6 3-4 4 4 4" />
  </svg>
)

export const SecondaryLink = ({ href, children }: SecondaryLinkProps) => {
  return (
    <Link
      href={href}
      className="inline-flex w-fit items-center gap-framer-3 rounded-pill bg-dark-gray/80 px-3.5 py-2 type-label font-medium text-gallery-white transition-colors duration-portfolio ease-portfolio hover:bg-dark-gray focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gallery-white"
    >
      <ArrowLeftIcon />
      {children}
    </Link>
  )
}