import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { EASE_OUT_QUART } from '../lib/motion'

function ScrollToTop() {
  const [show, setShow] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setShow(y > 600)
  })

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25, ease: EASE_OUT_QUART }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-ink/10 bg-ink/85 text-paper shadow-[0_12px_30px_rgba(17,17,17,0.25)] backdrop-blur-md transition-colors hover:bg-ink"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
