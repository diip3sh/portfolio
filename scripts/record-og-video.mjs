// Renders public/og.html into the looping Open Graph video that iMessage plays
// inline in link previews (og-render/og-video.mp4), plus the all-colour still
// used as og:image everywhere else (public/og-cover.jpg).
//
// The video is served from R2, not the site, so it renders outside public/.
// Upload it under a new file name and update DEFAULT_SOCIAL_VIDEO in
// lib/seo.ts; iMessage caches previews by URL.
//
// Usage:  bun run og:video        (or: node scripts/record-og-video.mjs)
// Needs:  ffmpeg on PATH, Google Chrome installed (Playwright's bundled
//         Chromium can't decode the H.264 gallery clips).
//
// It serves public/ itself, so no Next build is needed. Every frame is rendered
// deterministically through window.__og.render(ms): the gallery clips are seeked
// to the exact time for that frame, so there are no dropped frames and the last
// frame matches frame 0 for a seamless loop.

import { spawn } from "node:child_process"
import {
  createReadStream,
  mkdirSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs"
import { createServer } from "node:http"
import path from "node:path"
import { chromium } from "playwright"

const PUBLIC_DIR = path.resolve("public")
const RENDER_DIR = path.resolve("og-render")
const OUTPUT = path.join(RENDER_DIR, "og-video.mp4")
// Encode to a temp file and rename on success, so an interrupted run never
// leaves a broken og-video.mp4 behind.
const TEMP_OUTPUT = path.join(RENDER_DIR, ".og-video.tmp.mp4")
mkdirSync(RENDER_DIR, { recursive: true })
const COVER = path.join(PUBLIC_DIR, "og-cover.jpg")
const WIDTH = 1200
const HEIGHT = 630
const SCALE = 2 // supersample, then downscale for crisp text
const FPS = 30
// Apple caps all link-preview assets combined at 10 MB; stay well under.
const MAX_BYTES = 5 * 1024 * 1024

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".otf": "font/otf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
}

const server = createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname)
  const filePath = path.join(PUBLIC_DIR, urlPath)
  if (!filePath.startsWith(PUBLIC_DIR)) return res.writeHead(403).end()
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
  console.warn("Google Chrome not found, falling back to Playwright Chromium (clips may not decode)")
  browser = await chromium.launch()
}

const page = await browser.newPage({
  viewport: { width: WIDTH, height: HEIGHT },
  deviceScaleFactor: SCALE,
})
await page.goto(`${baseUrl}/og.html?record`)
await page.waitForFunction(() => document.body.dataset.ready === "true", null, {
  timeout: 120_000,
})

const { duration, coverMs } = await page.evaluate(() => ({
  duration: window.__og.duration,
  coverMs: window.__og.coverMs,
}))
const frameCount = Math.round((duration / 1000) * FPS)
const stage = page.locator("#stage")

const ffmpeg = spawn(
  "ffmpeg",
  [
    "-y",
    "-loglevel", "error",
    "-f", "image2pipe",
    "-framerate", String(FPS),
    "-i", "-",
    "-vf", `scale=${WIDTH}:${HEIGHT}:flags=lanczos`,
    "-an",
    "-c:v", "libx264",
    "-profile:v", "high",
    "-pix_fmt", "yuv420p",
    "-preset", "slow",
    "-crf", "20",
    "-movflags", "+faststart",
    "-f", "mp4",
    TEMP_OUTPUT,
  ],
  { stdio: ["pipe", "inherit", "inherit"] }
)
const ffmpegDone = new Promise((resolve, reject) => {
  ffmpeg.on("error", (error) =>
    reject(new Error(`Could not start ffmpeg (is it installed?): ${error.message}`))
  )
  ffmpeg.on("close", (code) =>
    code === 0 ? resolve() : reject(new Error(`ffmpeg exited with ${code}`))
  )
})

for (let frame = 0; frame < frameCount; frame++) {
  const ms = (frame / FPS) * 1000
  await page.evaluate((t) => window.__og.render(t), ms)
  const png = await stage.screenshot({ type: "png" })
  if (!ffmpeg.stdin.write(png)) {
    await new Promise((resolve) => ffmpeg.stdin.once("drain", resolve))
  }
  process.stdout.write(`\rframe ${frame + 1}/${frameCount}`)
}
process.stdout.write("\n")
ffmpeg.stdin.end()
try {
  await ffmpegDone
} catch (error) {
  rmSync(TEMP_OUTPUT, { force: true })
  throw error
}
renameSync(TEMP_OUTPUT, OUTPUT)

// og:image: the moment every tile is in colour (2400 x 1260 at SCALE 2)
await page.evaluate((t) => window.__og.render(t), coverMs)
writeFileSync(COVER, await stage.screenshot({ type: "jpeg", quality: 88 }))

await browser.close()
server.close()

const videoBytes = statSync(OUTPUT).size
const coverBytes = statSync(COVER).size
console.log(
  `Wrote ${path.relative(process.cwd(), OUTPUT)} (${(videoBytes / 1024).toFixed(0)} KB) and ${path.relative(process.cwd(), COVER)} (${(coverBytes / 1024).toFixed(0)} KB)`
)
if (videoBytes > MAX_BYTES) {
  throw new Error("OG video is over 5 MB; raise -crf or shorten the loop")
}
