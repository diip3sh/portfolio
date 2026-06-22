import Link from "next/link"

type PrimaryLinkProps = {
  href: string
  children: React.ReactNode
}

export const PrimaryLink = ({ href, children }: PrimaryLinkProps) => {
  return (
    <Link
      href={href}
      className="duration-portfolio w-fit rounded-md border-x border-b-[1.5px] border-primary bg-foreground px-4 py-2.5 type-button text-accent transition-colors ease-portfolio hover:bg-portfolio-button-hover hover:text-portfolio-button-hover-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gallery-white"
    >
      {children}
    </Link>
  )
}
