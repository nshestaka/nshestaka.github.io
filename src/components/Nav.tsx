import { useCallback, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { EASE_OUT_QUART } from '../lib/motion'

const links = [
  { label: 'Case studies', href: '#work', external: false },
  { label: 'AI Workflow', href: '#workflow', external: false },
  { label: 'UX Audit', href: '#ux-audit', external: false },
  { label: 'CV', href: '#cv', external: false },
]

/**
 * True while whatever sits behind the header band is dark. Rather than tag each
 * page, we sample the actual background colour under the header centre and flip
 * on luminance — so it works on every page (the dark case-studies grid, the
 * dark DESIAM / Proactive Intelligence pages, etc.) while the translucent glass
 * keeps its opacity and only the text flips to stay readable.
 */
function detectDark(): boolean {
  const x = Math.round(window.innerWidth / 2)
  const stack = document.elementsFromPoint(x, 26) // 26px ≈ middle of the header
  for (const start of stack) {
    if (start.closest?.('nav')) continue // ignore the header itself
    let node: Element | null = start
    while (node) {
      const match = getComputedStyle(node).backgroundColor.match(/rgba?\(([^)]+)\)/)
      if (match) {
        const [r, g, b, a = 1] = match[1].split(',').map((s) => parseFloat(s))
        if (a >= 0.5) return 0.2126 * r + 0.7152 * g + 0.0722 * b < 120
      }
      node = node.parentElement
    }
  }
  return false
}

function useOnDark() {
  const [onDark, setOnDark] = useState(false)
  useEffect(() => {
    let raf = 0
    const run = () => {
      raf = 0
      setOnDark(detectDark())
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(run)
    }
    schedule()
    const t = setTimeout(schedule, 60)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('hashchange', schedule)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      clearTimeout(t)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('hashchange', schedule)
    }
  }, [])
  return onDark
}

function Nav({ progress = false }: { progress?: boolean }) {
  const onDark = useOnDark()

  const smoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return
    e.preventDefault()
    const el = document.querySelector(href)
    if (!el) {
      // Section isn't on the current page (e.g. a sub-page route) — navigate
      // home with the anchor so the browser lands on the right section.
      window.location.href = `/${href}`
      return
    }
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
    history.replaceState(null, '', href)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: EASE_OUT_QUART }}
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 ${
        onDark ? 'border-white/10 bg-white/10' : 'border-line/50 bg-paper/60'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 md:px-12">
        <a
          href="/"
          aria-label="Natalia Shestaka — home"
          className={`font-display flex flex-col text-[24px] leading-[20px] transition-colors duration-300 ${
            onDark ? 'text-paper' : 'text-[#25252D]'
          }`}
        >
          <span className="font-bold">natalia</span>
          <span>
            <span className="font-extralight">shestaka</span>
            <span className="font-extrabold">.</span>
          </span>
        </a>

        <div
          className={`flex items-center gap-7 text-[13px] font-medium transition-colors duration-300 ${
            onDark ? 'text-neutral-300' : 'text-mute'
          }`}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => !l.external && smoothScroll(e, l.href)}
              className={`group relative hidden items-center transition-colors md:inline-flex ${
                onDark ? 'hover:text-white' : 'hover:text-ink'
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-px w-0 transition-[width] duration-300 group-hover:w-full ${
                  onDark ? 'bg-white' : 'bg-ink'
                }`}
              />
            </a>
          ))}
          <span className={`hidden md:inline ${onDark ? 'text-white/25' : 'text-line'}`}>|</span>
          <a
            href="#contact"
            onClick={(e) => smoothScroll(e, '#contact')}
            className={`rounded-full px-5 py-2 text-[12px] font-medium transition-all hover:-translate-y-[1px] ${
              onDark ? 'bg-paper text-ink hover:bg-white' : 'bg-ink text-paper hover:bg-ink-soft'
            }`}
          >
            Get in touch
          </a>
        </div>
      </div>
      {/* scroll progress rail — sits flush on the header's bottom edge */}
      {progress && <div className="cs-progress" aria-hidden />}
    </motion.nav>
  )
}

export default Nav
