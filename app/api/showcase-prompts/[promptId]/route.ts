import { portfolioShowcaseComponents } from "@/constants/portfolio/projects"

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ promptId: string }> }
) => {
  const { promptId } = await params
  const showcaseItem = portfolioShowcaseComponents.find(
    (item) => `${item.col}-${item.order}` === promptId
  )
  const prompt = showcaseItem?.prompt?.trim()

  if (!prompt) {
    return Response.json({ error: "Prompt not found" }, { status: 404 })
  }

  return Response.json(
    { prompt },
    {
      headers: {
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    }
  )
}
