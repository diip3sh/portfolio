export type ProjectMedia =
  | { type: "placeholder"; alt: string }
  | {
      type: "image"
      src: string
      alt: string
      width?: number
      height?: number
    }
  | {
      type: "video"
      src: string
      alt: string
      poster?: string
      width?: number
      height?: number
    }

export type ShowcaseComponentKey = "edit-time" | "card-hover"

export type ShowcaseMedia =
  | {
      type: "video"
      src: string
      alt: string
      poster?: string
      width?: number
      height?: number
    }
  | { type: "component"; componentKey: string; alt: string }

export type PortfolioProject = {
  type: "project"
  slug: string
  title: string
  col: 1 | 2
  order: number
  media: ProjectMedia[]
  stack: string[]
  description: string
  solutions?: string[]
  challenges?: string[]
}

export type ProjectShowcaseComponent = {
  type: "showcase"
  title: string
  col: 1 | 2
  order: number
  media: ShowcaseMedia
  stack: string[]
  xLink: string
  prompt?: string
  resettable?: boolean
}

export type PortfolioGalleryItem = PortfolioProject | ProjectShowcaseComponent

export type HomeCta = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
}

export type ContactInfo = {
  email: string
  phone: string
  phoneHref: string
  bookingHref: string
  creditName: string
  creditHref: string
  copyright: string
}

export type HomeIntro = {
  name: string
  role: string
  description: string
  avatarAlt: string
}

export type Stat = {
  value: string
  label: string
}

export type StackTool = {
  name: string
  description: string
  iconAlt?: string
  iconSrc: string
  iconSrcDark?: string
  iconSrcLight?: string
  link: string
}

export type Experience = {
  position: string
  company: string
  dates: string
  description: string
}

export type Certification = {
  icon: string
  iconDark?: string
  iconLight?: string
  iconAlt?: string
  name: string
  link: string
  year: string
}

export type VaultItem = {
  icon: "video" | "article" | "course" | "newsletter"
  title: string
  by: string
  link: string
  image?: string
}

export type Hobby = {
  title: string
  media: string[]
  description: string
}

export type ClientLogo = {
  name: string
  alt?: string
  iconSrc: string
  iconSrcDark?: string
  iconSrcLight?: string
  width?: number
  height?: number
}

export type HomeSection = {
  id: string
  label: string
}

export type ProjectGalleryImage = ProjectMedia

export type ProjectGalleryVideo = {
  name: string
  href: string
}
