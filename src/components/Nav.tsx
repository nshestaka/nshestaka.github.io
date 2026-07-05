import { useCallback } from 'react'
import { motion } from 'motion/react'
import { EASE_OUT_QUART } from '../lib/motion'

const links = [
  { label: 'Case studies', href: '#work', external: false },
  { label: 'AI Workflow', href: '#workflow', external: false },
  { label: 'UX Audit', href: '#ux-audit', external: false },
  { label: 'CV', href: '#cv', external: false },
]

function Nav() {
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
      className="fixed inset-x-0 top-0 z-50 border-b border-line/50 bg-paper/60 backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 md:px-12">
        <a
          href="/"
          aria-label="Natalia Shestaka — home"
          className="font-display flex flex-col text-[24px] leading-[20px] text-[#25252D]"
        >
          <span className="font-bold">natalia</span>
          <span>
            <span className="font-extralight">shestaka</span>
            <span className="font-extrabold">.</span>
          </span>
        </a>

        <div className="flex items-center gap-7 text-[13px] font-medium text-mute">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => !l.external && smoothScroll(e, l.href)}
              className="group relative hidden items-center transition-colors hover:text-ink md:inline-flex"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-[width] duration-300 group-hover:w-full" />
            </a>
          ))}
          <span className="hidden text-line md:inline">|</span>
          <a
            href="#contact"
            onClick={(e) => smoothScroll(e, '#contact')}
            className="rounded-full bg-ink px-5 py-2 text-[12px] font-medium text-paper transition-all hover:-translate-y-[1px] hover:bg-ink-soft"
          >
            Get in touch
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Nav
