import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ProjectPage } from "@/components/project/project-page"
import { getAllProjectSlugs, getProjectBySlug } from "@/constants/projects"
import {
  DEFAULT_SOCIAL_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  X_HANDLE,
  createMetadataDescription,
} from "@/lib/seo"

type ProjectRouteProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ProjectRouteProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Project not found",
      robots: { index: false, follow: false },
    }
  }

  const canonicalPath = `/projects/${project.slug}`
  const description = createMetadataDescription(project.description)
  const projectImage = project.media.find(
    (media) =>
      media.type === "image" ||
      (media.type === "video" && Boolean(media.poster))
  )
  const socialImage =
    projectImage?.type === "image"
      ? { url: projectImage.src, alt: projectImage.alt }
      : projectImage?.type === "video" && projectImage.poster
        ? { url: projectImage.poster, alt: projectImage.alt }
        : DEFAULT_SOCIAL_IMAGE

  return {
    title: project.title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "article",
      locale: SITE_LOCALE,
      url: canonicalPath,
      siteName: SITE_NAME,
      title: `${project.title} | ${SITE_NAME}`,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      site: X_HANDLE,
      creator: X_HANDLE,
      title: `${project.title} | ${SITE_NAME}`,
      description,
      images: [socialImage],
    },
  }
}

export default async function Page({ params }: ProjectRouteProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectPage project={project} />
}
