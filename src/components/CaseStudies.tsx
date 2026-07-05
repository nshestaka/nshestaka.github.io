import { useRef, useState } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react'
import { caseStudies, type CaseStudy } from '../data/caseStudies'

/**
 * Case studies — scrollytelling with two reveal modes.
 *
 * 1. Case studies that ship a `sketchCover` (e.g. LearnHub) use a torch-beam
 *    interaction: a pencil-sketch image stacks on top of the colour image,
 *    and a radial mask follows the cursor to "punch a hole" of saturation.
 *    The OS pointer is hidden; a small magnifier SVG follows the mouse instead.
 *
 * 2. Cases without a sketch fall back to the original behaviour — the cover
 *    is desaturated by default and recolours as the scene scrolls into view
 *    (or on hover).
 *
 * Cards are clipped to their stage rectangle, so the small scale-up that runs
 * as a scene enters never spills above the card — no overlap with the section
 * header.
 */
function CaseStudies() {
  return (
    <section id="work" className="relative bg-neutral-900 text-neutral-100">
      <header className="mx-auto max-w-6xl px-6 pt-28 pb-12 md:px-12">
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
          Selected portfolio
        </span>
        <h2 className="mt-3 font-serif text-4xl md:text-6xl">Case Studies</h2>
      </header>

      {caseStudies.map((cs, i) => (
        <CaseStudyScene key={cs.id} cs={cs} index={i} />
      ))}

      <div className="h-[20vh]" aria-hidden />
    </section>
  )
}

// Matches the cover image's native ratio so `object-cover` never crops any
// part of the artwork. (Image: 2280 × 1784, aspect ≈ 1.278.)
const STAGE_ASPECT = '2280 / 1784'
const BEAM_RADIUS = 160 // px — torch beam circle radius

function CaseStudyScene({ cs, index }: { cs: CaseStudy; index: number }) {
  const hasSketch = !!cs.sketchCover
  const ref = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLAnchorElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 })

  const groupScale = useTransform(p, [0, 0.25, 0.75, 1], [0.96, 1, 1, 0.97])
  const groupOpacity = useTransform(p, [0, 0.15, 0.9, 1], [0.25, 1, 1, 0.45])

  // Subtle "enters the room" zoom on the cover — clipped by the stage so it
  // never spills above the card frame.
  const imageScale = useTransform(p, [0.05, 0.45, 0.75, 1], [0.97, 1.03, 1.03, 1.0])

  // ── Glass slide-down overlay — fast & rapid for all cards. ───────────
  // Reveal completes by ~22% of scene scroll — much snappier than before.
  const glassY = useTransform(p, [0.05, 0.22], ['0%', '115%'])
  const glassOpacity = useTransform(p, [0.05, 0.2], [1, 0])

  // ── Torch-beam state (only used when hasSketch) ──────────────────────
  const beamX = useMotionValue(50)
  const beamY = useMotionValue(50)
  const beamRTarget = useMotionValue(0)
  const beamR = useSpring(beamRTarget, { stiffness: 200, damping: 30, mass: 0.4 })
  const beamMask = useMotionTemplate`radial-gradient(circle ${beamR}px at ${beamX}% ${beamY}%, transparent 0%, transparent 60%, rgba(0,0,0,0.6) 75%, black 100%)`

  // ── Fallback desaturation reveal (for non-sketch cards) ──────────────
  const scrollReveal = useTransform(p, [0.05, 0.45, 0.75, 1], [0, 1, 1, 0.2])
  const hoverTarget = useMotionValue(0)
  const hoverReveal = useSpring(hoverTarget, { stiffness: 220, damping: 30, mass: 0.4 })
  const reveal = useTransform([scrollReveal, hoverReveal] as MotionValue[], (vals) =>
    Math.max((vals as number[])[0] ?? 0, (vals as number[])[1] ?? 0),
  )
  const grayscale = useTransform(reveal, [0, 1], [1, 0])
  const contrast = useTransform(reveal, [0, 1], [1.18, 1])
  const sepia = useTransform(reveal, [0, 1], [0.22, 0])
  const brightness = useTransform(reveal, [0, 1], [0.96, 1])
  const fallbackFilter = useMotionTemplate`grayscale(${grayscale}) contrast(${contrast}) sepia(${sepia}) brightness(${brightness})`

  // ── Magnetic cursor state ────────────────────────────────────────────
  const [hovered, setHovered] = useState(false)
  const cx = useMotionValue(0)
  const cy = useMotionValue(0)
  const cxs = useSpring(cx, { stiffness: 400, damping: 38, mass: 0.3 })
  const cys = useSpring(cy, { stiffness: 400, damping: 38, mass: 0.3 })

  // Velocity-driven tilt for the magnifier cursor — "pointing the flashlight".
  const tiltTarget = useMotionValue(0)
  const tilt = useSpring(tiltTarget, { stiffness: 220, damping: 22, mass: 0.4 })
  const lastMoveRef = useRef<{ x: number; y: number; t: number } | null>(null)
  const tiltIdleRef = useRef<number | null>(null)

  // Glow opacity & scale derived from beam radius, so it grows/fades with the beam.
  const glowOpacity = useTransform(beamR, [0, BEAM_RADIUS], [0, 1])
  const glowScale = useTransform(beamR, [0, BEAM_RADIUS], [0.55, 1])

  const onMouseEnter = () => {
    setHovered(true)
    if (hasSketch) beamRTarget.set(BEAM_RADIUS)
    else hoverTarget.set(1)
  }
  const onMouseLeave = () => {
    setHovered(false)
    if (hasSketch) beamRTarget.set(0)
    else hoverTarget.set(0)
    tiltTarget.set(0)
    lastMoveRef.current = null
  }
  const onMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const localX = e.clientX - rect.left
    const localY = e.clientY - rect.top
    cx.set(localX)
    cy.set(localY)
    if (hasSketch) {
      beamX.set((localX / rect.width) * 100)
      beamY.set((localY / rect.height) * 100)

      // Velocity → tilt. dx per ms, multiplied so a normal swipe lands around ±10–14°.
      const now = performance.now()
      const last = lastMoveRef.current
      lastMoveRef.current = { x: e.clientX, y: e.clientY, t: now }
      if (last) {
        const dt = Math.max(1, now - last.t)
        const vx = (e.clientX - last.x) / dt
        const angle = Math.max(-18, Math.min(18, vx * 70))
        tiltTarget.set(angle)
        // Snap back to upright when the user pauses for a moment.
        if (tiltIdleRef.current) window.clearTimeout(tiltIdleRef.current)
        tiltIdleRef.current = window.setTimeout(() => tiltTarget.set(0), 120)
      }
    }
  }

  return (
    <div ref={ref} className="relative" style={{ minHeight: '110vh' }}>
      <div className="sticky top-0 flex h-screen items-center justify-center px-6 md:px-12">
        <motion.div
          style={{ scale: groupScale, opacity: groupOpacity }}
          className="relative w-full max-w-4xl"
        >
          <div className="relative w-full" style={{ aspectRatio: STAGE_ASPECT }}>
            {/* Badges (z-0) — flying out from behind the card */}
            {cs.tags.map((tag, i) => (
              <Badge
                key={tag}
                progress={p}
                label={tag}
                layout={badgeLayout(i, cs.tags.length)}
                index={i}
              />
            ))}

            {/* Card stage backplate (z-10) */}
            <div
              aria-hidden
              className="absolute inset-0 z-10 rounded-2xl bg-neutral-800 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
            />

            {/* Card link — clips its contents to the stage rect */}
            <a
              ref={cardRef}
              href={`#/case-studies/${cs.slug}`}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onMouseMove={onMouseMove}
              className="absolute inset-0 z-20 block overflow-hidden rounded-2xl"
              style={{ cursor: hovered ? 'none' : 'pointer' }}
            >
              {/* Bottom layer: full-colour cover */}
              <motion.img
                src={cs.cover}
                alt={cs.title}
                style={{
                  scale: imageScale,
                  transformOrigin: 'center center',
                  filter: hasSketch ? 'none' : fallbackFilter,
                }}
                className="absolute inset-0 h-full w-full object-cover will-change-transform"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* Top layer: sketch with radial-mask hole at cursor (only if sketch exists) */}
              {hasSketch && (
                <motion.img
                  src={cs.sketchCover}
                  alt=""
                  aria-hidden
                  style={{
                    scale: imageScale,
                    transformOrigin: 'center center',
                    maskImage: beamMask,
                    WebkitMaskImage: beamMask,
                  }}
                  className="absolute inset-0 h-full w-full object-cover will-change-[mask-image,transform]"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              )}

              {/* Glass slide-down overlay (above sketch + color, below cursor) */}
              <motion.div
                style={{ y: glassY, opacity: glassOpacity }}
                aria-hidden
                className="pointer-events-none absolute inset-0 z-[28] overflow-hidden rounded-2xl backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-white/10" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.22) 100%)',
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-px bg-white/40" />
              </motion.div>

              {/* Warm torch glow at the beam position (sketch cards only) */}
              {hasSketch && (
                <motion.div
                  style={{ x: cxs, y: cys, opacity: glowOpacity, scale: glowScale }}
                  className="pointer-events-none absolute left-0 top-0 z-[25]"
                  aria-hidden
                >
                  <div
                    className="-translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      width: BEAM_RADIUS * 2,
                      height: BEAM_RADIUS * 2,
                      boxShadow:
                        'inset 0 0 30px rgba(255, 220, 100, 0.32), inset 0 0 80px rgba(255, 180, 80, 0.14)',
                    }}
                  />
                </motion.div>
              )}

              {/* Cursor follower */}
              <motion.div
                style={{ x: cxs, y: cys }}
                className="pointer-events-none absolute left-0 top-0 z-30"
              >
                <motion.div
                  initial={false}
                  animate={{
                    scale: hovered ? 1 : 0.6,
                    opacity: hovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={hasSketch ? { rotate: tilt } : undefined}
                  className="-translate-x-1/2 -translate-y-1/2 will-change-transform"
                >
                  {hasSketch ? <MagnifierCursor /> : <ViewCaseStudyPill />}
                </motion.div>
              </motion.div>
            </a>
          </div>

          {/* Caption beneath the card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-20%' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-3xl"
          >
            <p className="font-serif text-2xl italic leading-snug text-neutral-100 md:text-3xl">
              {cs.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

function MagnifierCursor() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
      aria-hidden
    >
      <circle cx="17" cy="17" r="11" stroke="white" strokeWidth="2.25" />
      <line
        x1="25"
        y1="25"
        x2="35"
        y2="35"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ViewCaseStudyPill() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-900 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
      View case study
      <span aria-hidden>→</span>
    </span>
  )
}

type BadgeLayout = {
  isLeft: boolean
  style: React.CSSProperties
  rot: number
  yOffsetPct: number
}

function badgeLayout(i: number, total: number): BadgeLayout {
  const isLeft = i % 2 === 0
  const leftCount = Math.ceil(total / 2)
  const rightCount = Math.floor(total / 2)
  const sideIndex = Math.floor(i / 2)
  const sideTotal = isLeft ? leftCount : Math.max(1, rightCount)
  const alongPct = (sideIndex + 0.5) / sideTotal

  const top = `${8 + alongPct * 84}%`
  const rotMag = (alongPct - 0.5) * 10

  const yOffsetPct = (i % 3 === 0 ? -1 : i % 3 === 1 ? 1 : 0) * 2

  if (isLeft) {
    return {
      isLeft: true,
      style: { left: 0, top },
      rot: -rotMag - 3,
      yOffsetPct,
    }
  }
  return {
    isLeft: false,
    style: { right: 0, top },
    rot: rotMag + 3,
    yOffsetPct,
  }
}

function Badge({
  progress,
  label,
  layout,
  index,
}: {
  progress: MotionValue<number>
  label: string
  layout: BadgeLayout
  index: number
}) {
  // Faster, more rapid pop — full emergence by ~22% of scene scroll.
  const stagger = Math.min(index * 0.006, 0.04)
  const t = useTransform(progress, [0.05 + stagger, 0.22 + stagger], [0, 1])

  const xTarget = layout.isLeft ? '-115%' : '115%'
  const x = useTransform(t, [0, 1], ['0%', xTarget])
  const yTarget = `${-50 + layout.yOffsetPct}%`
  const y = useTransform(t, [0, 1], ['-50%', yTarget])
  const rotate = useTransform(t, [0, 1], [0, layout.rot])
  const opacity = useTransform(t, [0, 0.25, 1], [0, 0.5, 1])

  return (
    <motion.span
      style={{ x, y, rotate, opacity, ...layout.style }}
      className="absolute z-0 inline-flex whitespace-nowrap rounded-full border border-neutral-200/50 bg-neutral-900/40 px-4 py-1.5 text-[12px] font-light text-neutral-100 backdrop-blur-sm"
    >
      {label}
    </motion.span>
  )
}

export default CaseStudies
