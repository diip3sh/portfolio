import { describe, expect, it } from "vitest"

import { GET } from "./route"

describe("showcase prompt route", () => {
  it("returns a prompt without placing it in the initial gallery props", async () => {
    const response = await GET(new Request("http://localhost"), {
      params: Promise.resolve({ promptId: "1-4" }),
    })
    const data = (await response.json()) as { prompt: string }

    expect(response.status).toBe(200)
    expect(data.prompt).toContain("Holographic Referral Card")
  })

  it("returns 404 for an unknown prompt", async () => {
    const response = await GET(new Request("http://localhost"), {
      params: Promise.resolve({ promptId: "missing" }),
    })

    expect(response.status).toBe(404)
  })
})
