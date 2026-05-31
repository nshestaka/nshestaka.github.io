import { motion, type Variants } from 'motion/react'
import { EASE_OUT_QUART } from '../lib/motion'

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: EASE_OUT_QUART },
  }),
}

const checks = [
  {
    title: 'Information architecture',
    body: 'Where users get stuck, what they can’t find, what the navigation is hiding from them.',
  },
  {
    title: 'Conversion & flows',
    body: 'Friction points in onboarding, checkout, and the critical paths that drive your numbers.',
  },
  {
    title: 'Accessibility (WCAG 2.2)',
    body: 'Real audit against current standards — colour, contrast, focus order, screen reader paths.',
  },
  {
    title: 'AI surface review',
    body: 'For products with model-driven features: prompts, fallbacks, transparency, confidence signals.',
  },
]

function UxAudit() {
  return (
    <section id="ux-audit" className="border-t border-line/70 bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-32 md:px-12 md:py-44">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15%' }}
          className="grid gap-16 md:grid-cols-[1fr_2fr] md:gap-24"
        >
          <motion.div variants={fade} custom={0}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-mute">
              Service
            </span>
            <h2 className="mt-4 font-serif text-5xl leading-[1] tracking-[-0.01em] text-ink md:text-6xl">
              UX <em className="italic text-mute">audit</em>
            </h2>
            <p className="mt-6 max-w-sm text-[14px] font-light leading-relaxed text-mute">
              A focused review of an existing product. Two weeks, fixed price, a written report
              your team can act on without me in the room.
            </p>
            <a
              href="https://ux-audit-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[13px] text-ink"
            >
              <span className="border-b border-ink/40 pb-0.5">Request an audit</span>
              <span aria-hidden>→</span>
            </a>
          </motion.div>

          <ul className="grid gap-px bg-line sm:grid-cols-2">
            {checks.map((c, i) => (
              <motion.li
                key={c.title}
                variants={fade}
                custom={i + 1}
                className="flex flex-col gap-3 bg-paper p-8 transition-colors duration-500 hover:bg-paper-soft"
              >
                <h3 className="font-serif text-2xl leading-tight text-ink">{c.title}</h3>
                <p className="text-[14px] font-light leading-relaxed text-mute">{c.body}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default UxAudit
