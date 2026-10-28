// Renders the Orbit gallery stills from og-render/orbit/orbit.html into
// og-render/orbit/*.png (1600x2000 each: 800x1000 at 2x for crisp text).
//
// The PNGs are served from R2, not the site, so they render outside public/.
// Upload them as orbit.png … orbit-5.png under projects/ and update the Orbit
// entry in constants/portfolio/projects.ts.
//
// Usage:  bun run assets:orbit        (or: node scripts/render-orbit-assets.mjs)

import { createReadStream, mkdirSync, statSync } from "node:fs"
import { createServer } from "node:http"
import path from "node:path"
import { chromium } from "playwright"

const ROOT = path.resolve(import.meta.dirname, "..")
const STAGE = path.join(ROOT, "og-render/orbit/orbit.html")
const OUT_DIR = path.join(ROOT, "og-render/orbit")
const SLIDES = ["orbit", "orbit-2", "orbit-3", "orbit-4", "orbit-5"]
const WIDTH = 800
const HEIGHT = 1000
const SCALE = 2
mkdirSync(OUT_DIR, { recursive: true })

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".otf": "font/otf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
}

const server = createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname)
  const filePath = path.join(ROOT, urlPath)
  if (!filePath.startsWith(ROOT)) return res.writeHead(403).end()
  try {
    if (!statSync(filePath).isFile()) throw new Error()
  } catch {
    return res.writeHead(404).end()
  }
  res.writeHead(200, {
    "content-type": TYPES[path.extname(filePath)] ?? "application/octet-stream",
  })
  createReadStream(filePath).pipe(res)
})
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve))
const baseUrl = `http://127.0.0.1:${server.address().port}`

let browser
try {
  browser = await chromium.launch({ channel: "chrome" })
} catch {
  console.warn("Google Chrome not found, falling back to Playwright Chromium")
  browser = await chromium.launch()
}

const page = await browser.newPage({
  viewport: { width: WIDTH, height: HEIGHT },
  deviceScaleFactor: SCALE,
})
await page.goto(`${baseUrl}/${path.relative(ROOT, STAGE)}`)
await page.waitForFunction(() => document.body.dataset.ready === "true", null, {
  timeout: 120_000,
})

for (const id of SLIDES) {
  const out = path.join(OUT_DIR, `${id}.png`)
  await page.locator(`#${id}`).screenshot({ type: "png", path: out })
  const kb = (statSync(out).size / 1024).toFixed(0)
  console.log(`Wrote ${path.relative(ROOT, out)} (${kb} KB)`)
}

await browser.close()
server.close()
