export const SITE_URL = new URL("https://diip3sh.xyz")

export const SITE_NAME = "Dipesh"
export const SITE_TITLE = "Dipesh | Design Engineer"
export const SITE_DESCRIPTION =
  "Dipesh is a design engineer from India building polished digital products with thoughtful UX, motion, and modern web technology."
export const SITE_LOCALE = "en_IN"
export const X_HANDLE = "@diip3sh"

export const DEFAULT_SOCIAL_IMAGE = {
  url: "/og-image.png",
  width: 1622,
  height: 970,
  alt: "Dipesh — Design Engineer from India",
} as const

export const createMetadataDescription = (
  description: string,
  maximumLength = 155
) => {
  const plainTextDescription = description
    .replace(/[`*_#]/g, "")
    .replace(/\s+/g, " ")
    .trim()

  if (plainTextDescription.length <= maximumLength) {
    return plainTextDescription
  }

  const shortenedDescription = plainTextDescription.slice(0, maximumLength - 1)
  const lastWordBoundary = shortenedDescription.lastIndexOf(" ")

  if (lastWordBoundary === -1) {
    return `${shortenedDescription}…`
  }

  return `${shortenedDescription.slice(0, lastWordBoundary)}…`
}
