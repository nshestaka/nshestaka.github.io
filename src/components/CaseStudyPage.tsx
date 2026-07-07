import { useEffect } from 'react'
import { motion, useScroll, useSpring, type Variants } from 'motion/react'
import { caseStudies, type CaseStudy } from '../data/caseStudies'
import { caseStudyContent, type Block } from '../data/caseStudyContent'
import { EASE_OUT_QUART } from '../lib/motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT_QUART },
  },
}

/**
 * Full-page, scrollable case study rendered by the router at
 * `/case-studies/:slug`. Base facts come from `caseStudies`; the narrative is
 * a list of typed blocks from `caseStudyContent` (with a graceful fallback so
 * every card links somewhere real).
 */
function CaseStudyPage({ cs }: { cs: CaseStudy }) {
  const content = caseStudyContent[cs.slug]
  const accent = content?.accent

  // Reading-progress bar pinned to the top of the viewport.
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  // Keep the tab title in sync with the open case study.
  useEffect(() => {
    const previous = document.title
    document.title = `${cs.title} — Case study`
    return () => {
      document.title = previous
    }
  }, [cs.title])

  const currentIndex = caseStudies.findIndex((c) => c.id === cs.id)
  const next = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <div className="bg-paper text-ink">
      {/* Reading progress */}
      <motion.div
        style={{ scaleX: progress, background: accent ?? 'var(--color-ink)' }}
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left"
        aria-hidden
      />


      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <header className="mx-auto max-w-6xl px-6 pt-32 pb-14 md:px-12 md:pt-40">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-semibold uppercase tracking-[0.3em] text-mute"
            >
              Case study {cs.number} · {cs.kicker}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-5 font-serif text-5xl leading-[1.02] tracking-[-0.01em] md:text-7xl"
            >
              {cs.title}
              {accent && (
                <span style={{ color: accent }}>.</span>
              )}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-xl font-light leading-relaxed text-ink-soft"
            >
              {cs.description}
            </motion.p>

            <motion.dl
              variants={fadeUp}
              className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4"
            >
              <Meta label="Role" value={cs.role} />
              <Meta label="Year" value={cs.year} />
              <Meta label="Platform" value={cs.kicker.split(' · ')[0]} />
              <Meta label="Focus" value={cs.kicker.split(' · ')[1] ?? '—'} />
            </motion.dl>
          </motion.div>
        </header>

        {/* ── Cover ────────────────────────────────────────────────── */}
        <Section className="pt-0">
          <div className="overflow-hidden rounded-3xl bg-neutral-900 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.45)]">
            <img
              src={cs.cover}
              alt={`${cs.title} cover`}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </Section>

        {/* ── Process / methods (real tags) ────────────────────────── */}
        <Section>
          <div className="grid gap-10 md:grid-cols-12">
            <h2 className="font-serif text-3xl md:col-span-4 md:text-4xl">Process</h2>
            <div className="md:col-span-8">
              <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-ink-soft">
                The methods and deliverables that shaped this project, from discovery through to a
                polished, adaptive interface.
              </p>
              <ul className="flex flex-wrap gap-3">
                {cs.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line bg-white/60 px-4 py-2 text-sm font-medium text-ink"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* ── Narrative blocks ─────────────────────────────────────── */}
        {content?.blocks.map((block, i) => (
          <Section key={i}>
            <BlockView block={block} accent={accent} index={i} />
          </Section>
        ))}

        {/* ── Closing / next ───────────────────────────────────────── */}
        <Section className="pb-28">
          <div className="rounded-3xl border border-line bg-white/60 p-10 md:p-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-mute">
              Next case study
            </span>
            <a
              href={`#/case-studies/${next.slug}`}
              className="group mt-4 flex flex-wrap items-baseline justify-between gap-4"
            >
              <span className="font-serif text-4xl transition-colors group-hover:text-accent md:text-6xl">
                {next.title}
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-mute transition-colors group-hover:text-ink">
                View
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#work"
              className="rounded-full border border-line bg-white/50 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper-soft"
            >
              ← Back to all work
            </a>
          </div>
        </Section>
      </main>
    </div>
  )
}

function BlockView({
  block,
  accent,
  index,
}: {
  block: Block
  accent?: string
  index: number
}) {
  switch (block.kind) {
    case 'text':
      return (
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-mute">
              {String(index + 1).padStart(2, '0')}
            </span>
            {block.heading && (
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">{block.heading}</h2>
            )}
          </div>
          <div className="space-y-5 text-lg font-light leading-relaxed text-ink-soft md:col-span-8">
            {block.body.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </div>
      )

    case 'stats':
      return (
        <div>
          {block.intro && (
            <p className="mx-auto mb-12 max-w-2xl text-center font-serif text-2xl italic leading-snug md:text-3xl">
              {block.intro}
            </p>
          )}
          <div className="grid gap-8 sm:grid-cols-3">
            {block.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="font-serif text-6xl md:text-7xl"
                  style={{ color: accent ?? 'var(--color-ink)' }}
                >
                  {s.value}
                </div>
                <p className="mx-auto mt-3 max-w-[16rem] text-sm font-light text-mute">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )

    case 'persona':
      return (
        <div className="grid items-center gap-10 rounded-3xl bg-neutral-900 p-8 text-neutral-100 md:grid-cols-12 md:p-14">
          <div className="md:col-span-4">
            <div
              className="mx-auto flex aspect-square w-full max-w-[16rem] items-center justify-center rounded-2xl font-serif text-6xl text-neutral-900"
              style={{ background: accent ?? '#fff' }}
            >
              {block.name.charAt(0)}
            </div>
          </div>
          <div className="md:col-span-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Primary persona
            </span>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">{block.name}</h2>
            <p className="mt-1 text-sm font-medium" style={{ color: accent ?? '#fff' }}>
              {block.role}
            </p>
            <p className="mt-5 text-lg font-light leading-relaxed text-neutral-200">
              {block.bio}
            </p>
            {block.rationale && (
              <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400">
                {block.rationale}
              </p>
            )}
          </div>
        </div>
      )

    case 'table':
      return (
        <div>
          {block.heading && (
            <h2 className="mb-8 font-serif text-3xl md:text-4xl">{block.heading}</h2>
          )}
          <div className="overflow-hidden rounded-2xl border border-line">
            <div className="hidden bg-paper-soft text-[11px] font-semibold uppercase tracking-[0.2em] text-mute md:grid md:grid-cols-3">
              {block.columns.map((c) => (
                <div key={c} className="border-b border-line px-6 py-4">
                  {c}
                </div>
              ))}
            </div>
            {block.rows.map((row, r) => (
              <div
                key={r}
                className="grid gap-2 border-b border-line px-6 py-6 last:border-b-0 md:grid-cols-3 md:gap-6"
              >
                {row.map((cell, c) => (
                  <div key={c} className="text-base font-light leading-relaxed text-ink-soft">
                    <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-mute md:hidden">
                      {block.columns[c]}
                    </span>
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
          {block.note && <p className="mt-5 text-sm font-light text-mute">{block.note}</p>}
        </div>
      )

    case 'palette':
      return (
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="mb-6 font-serif text-3xl md:text-4xl">Colours</h2>
            <div className="space-y-3">
              {block.colors.map((c) => (
                <div key={c.hex} className="flex items-center gap-4">
                  <span
                    className="h-12 w-12 rounded-xl border border-line"
                    style={{ background: c.hex }}
                  />
                  <div>
                    <div className="text-sm font-medium text-ink">{c.name}</div>
                    <div className="text-xs uppercase tracking-wider text-mute">{c.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-6">
            <h2 className="mb-6 font-serif text-3xl md:text-4xl">Typography</h2>
            <div className="space-y-5">
              {block.fonts.map((f) => (
                <div key={f.name}>
                  <div className="font-serif text-2xl text-ink">{f.name}</div>
                  <p className="mt-1 text-sm font-light text-mute">{f.use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )

    case 'feature':
      return (
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            {block.heading && (
              <h2 className="font-serif text-3xl md:text-4xl">{block.heading}</h2>
            )}
            <p className="mt-4 text-lg font-light leading-relaxed text-ink-soft">{block.body}</p>
          </div>
          {/* Placeholder for the product screenshot (not yet exported from Figma) */}
          <div
            className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-line md:col-span-7"
            style={{
              background: `linear-gradient(135deg, ${accent ?? '#e4eff0'} 0%, #1a1a1a 320%)`,
            }}
            aria-hidden
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-900/50">
              Product screen
            </span>
          </div>
        </div>
      )
  }
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">{label}</dt>
      <dd className="mt-1.5 text-base font-medium text-ink">{value}</dd>
    </div>
  )
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-15%' }}
      variants={fadeUp}
      className={`mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export default CaseStudyPage
