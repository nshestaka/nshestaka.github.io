import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { workflowSteps } from '../data/aiWorkflow'

/**
 * AI Workflow — Stacking Cards pattern (scroll-driven-animations.style #10).
 *
 * Each step is a wide landscape card split 50/50: text content on the left,
 * a full-bleed Bauhaus-style illustration filling the right half edge to edge.
 *
 * Cards are `position: sticky` with progressively larger `top` offsets so they
 * deck up like a fanned hand as you scroll. Each card also drives a subtle
 * scale/opacity shift while it's being covered, so the covered card visibly
 * recedes into the stack instead of just being overlapped.
 */
function Workflow() {
  return (
    <section id="workflow" className="border-t border-line/70 bg-paper">
      <div className="mx-auto max-w-7xl px-6 pt-28 md:px-12 md:pt-36">
        <header className="mb-14 max-w-2xl">
          <h2 className="font-serif text-5xl leading-[1] text-ink md:text-7xl">
            AI <span className="text-mute">workflow</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] font-light leading-relaxed text-ink-soft">
            AI accelerates generation but creates a new responsibility: verifying logic and{' '}
            <span className="font-medium text-ink">
              translating machine feedback into meaningful human experiences.
            </span>
          </p>
        </header>
      </div>

      <ul className="mx-auto max-w-7xl px-6 pb-44 md:px-12">
        {workflowSteps.map((step, i) => (
          <StackCard key={step.id} step={step} index={i} total={workflowSteps.length} />
        ))}
      </ul>
    </section>
  )
}

type Step = (typeof workflowSteps)[number]

function StackCard({ step, index, total }: { step: Step; index: number; total: number }) {
  const ref = useRef<HTMLLIElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-2%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  // Each card sticks 2.5rem lower than the previous, so a 2.5rem strip of every
  // earlier card stays visible at the top of the deck while you scroll.
  const stickyTop = `${5 + index * 2.5}rem`

  return (
    <li ref={ref} style={{ top: stickyTop }} className="sticky mb-6 list-none">
      <motion.article
        style={{ scale, y, opacity, transformOrigin: 'center top' }}
        className="relative overflow-hidden rounded-3xl border border-line/70 bg-white shadow-[0_24px_60px_-24px_rgba(17,17,17,0.18)]"
      >
        <div className="grid md:grid-cols-2">
          {/* Left — text */}
          <div className="flex flex-col justify-center gap-6 p-8 md:p-12 md:py-14">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-mute">
              <span className="font-serif text-2xl italic leading-none text-ink-soft">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="h-px w-10 bg-line" />
              <span>
                Preferred tool ·{' '}
                <span className="font-medium text-ink">{step.tool}</span>
              </span>
            </div>

            <h3 className="font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl">
              {step.label}
            </h3>
            <p className="max-w-prose text-[15px] font-light leading-relaxed text-ink-soft">
              {step.description}
            </p>

            <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-mute-soft">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </div>
          </div>

          {/* Right — full-bleed illustration */}
          <div className="relative min-h-[260px] md:min-h-[420px]">
            {step.illustration}
          </div>
        </div>
      </motion.article>
    </li>
  )
}

export default Workflow
