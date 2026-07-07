// One-off optimizer for the DESIAM Figma-exported PNGs: caps oversized retina
// exports and re-encodes with palette quantization. Run with:
//   npm i -D sharp && node scripts/optimize-desiam.mjs
// (sharp is not a committed dependency — it's only needed to re-run this.)
import { readdirSync, statSync, renameSync } from 'node:fs'
import { join } from 'node:path'
import sharp from 'sharp'

const dir = new URL('../public/desiam/', import.meta.url).pathname
const MAX = 2048 // cap the largest dimension — the design renders at ≤1440 CSS px

const pngs = readdirSync(dir).filter((f) => f.endsWith('.png'))
let before = 0
let after = 0

for (const file of pngs) {
  const src = join(dir, file)
  const tmp = join(dir, `.tmp-${file}`)
  const startSize = statSync(src).size
  before += startSize

  const img = sharp(src)
  const meta = await img.metadata()
  const longest = Math.max(meta.width ?? 0, meta.height ?? 0)

  let pipeline = sharp(src)
  if (longest > MAX) {
    pipeline = pipeline.resize({
      width: meta.width >= meta.height ? MAX : undefined,
      height: meta.height > meta.width ? MAX : undefined,
      withoutEnlargement: true,
    })
  }
  await pipeline
    .png({ palette: true, quality: 80, effort: 10, compressionLevel: 9 })
    .toFile(tmp)

  const endSize = statSync(tmp).size
  // Keep whichever is smaller (never make a file bigger).
  if (endSize < startSize) {
    renameSync(tmp, src)
    after += endSize
  } else {
    const { unlinkSync } = await import('node:fs')
    unlinkSync(tmp)
    after += startSize
  }
}

const mb = (n) => (n / 1024 / 1024).toFixed(1)
console.log(`PNGs: ${pngs.length}`)
console.log(`before: ${mb(before)} MB  after: ${mb(after)} MB  saved: ${mb(before - after)} MB`)
