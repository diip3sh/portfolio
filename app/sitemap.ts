import type { MetadataRoute } from "next"

import { portfolioProjects } from "@/constants/portfolio/projects"
import { DEFAULT_SOCIAL_IMAGE, SITE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = portfolioProjects.map(
    (project) => {
      const projectImages = project.media.flatMap((media) =>
        media.type === "image" ? [media.src] : []
      )

      return {
        url: new URL(`/projects/${project.slug}`, SITE_URL).href,
        changeFrequency: "monthly",
        priority: 0.8,
        images: projectImages,
      }
    }
  )

  return [
    {
      url: SITE_URL.href,
      changeFrequency: "weekly",
      priority: 1,
      images: [new URL(DEFAULT_SOCIAL_IMAGE.url, SITE_URL).href],
    },
    ...projectPages,
  ]
}
