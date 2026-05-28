import { motion, type Variants } from 'motion/react'
import { EASE_OUT_QUART } from '../lib/motion'

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.1 + i * 0.12, ease: EASE_OUT_QUART },
  }),
}

function Hero() {
  return (
    <header className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20 md:px-12">
      <motion.div
        initial="hidden"
        animate="show"
        className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16"
      >
        {/* Portrait — left column */}
        <motion.div variants={fade} custom={0} className="relative md:col-span-5">
          <div
            className="relative mx-auto w-full max-w-[20rem] md:max-w-none"
            style={{ aspectRatio: '861 / 1024' }}
          >
            <img
              src="/portrait.png?v=2"
              alt="Natalia Shestaka portrait sketch"
              loading="eager"
              className="absolute inset-0 h-full w-full object-contain"
              style={{
                maskImage:
                  'linear-gradient(to bottom, transparent 0%, black 12%, black 100%)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, transparent 0%, black 12%, black 100%)',
              }}
            />
          </div>
        </motion.div>

        {/* Text — right column */}

        <div className="space-y-6 md:col-span-7">
          <motion.p
            variants={fade}
            custom={1}
            className="flex items-center gap-2 text-[17px] font-light text-ink-soft"
          >
            Welcome{' '}
            <motion.span
              role="img"
              aria-label="waving hand"
              style={{ display: 'inline-block', transformOrigin: '70% 70%' }}
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0, 0] }}
              transition={{
                duration: 2.4,
                ease: 'easeInOut',
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 2.5,
              }}
            >
              👋
            </motion.span>
            , I&rsquo;m Natalia.
          </motion.p>

          <motion.h1
            variants={fade}
            custom={2}
            className="whitespace-nowrap font-serif text-5xl leading-[1.05] tracking-[-0.01em] text-ink md:text-6xl"
          >
            Senior Product Designer
          </motion.h1>

          <motion.p
            variants={fade}
            custom={3}
            className="max-w-xl text-lg font-light leading-relaxed text-ink-soft"
          >
            I bring UX expertise and AI development together to ship real products — from
            research and prototyping through to working code and client delivery.
          </motion.p>

          <motion.div variants={fade} custom={4} className="flex items-center gap-3 pt-4">
            <a
              href="#contact"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
            >
              Get in touch
            </a>
            <a
              href="#work"
              className="rounded-full border border-line bg-white/50 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper-soft"
            >
              Browse work
            </a>
          </motion.div>
        </div>
      </motion.div>
    </header>
  )
}

export default Hero
