import { motion, type Variants } from 'motion/react'
import { EASE_OUT_QUART } from '../lib/motion'

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: EASE_OUT_QUART },
  }),
}

function CV() {
  return (
    <section id="cv" className="relative border-t border-line/70 bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15%' }}
          className="max-w-xl"
        >
          <motion.h2
            variants={fade}
            custom={0}
            className="text-3xl font-medium text-ink md:text-4xl"
          >
            About
          </motion.h2>
          <motion.p
            variants={fade}
            custom={1}
            className="mt-8 text-[15px] font-light leading-relaxed text-ink-soft"
          >
            Armed with 15 years of design expertise and a degree in Computer Science, I bring a
            unique blend of creativity and technical knowledge to every project.
          </motion.p>
          <motion.p
            variants={fade}
            custom={2}
            className="mt-5 text-[15px] font-light leading-relaxed text-ink-soft"
          >
            Let’s collaborate to create intuitive interfaces that delight users and drive
            business success.
          </motion.p>
          <motion.a
            variants={fade}
            custom={3}
            href="/cv.pdf"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#23202e] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.25em] text-paper transition-colors hover:bg-[#181626]"
          >
            Download CV
            <span aria-hidden>↓</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CV
