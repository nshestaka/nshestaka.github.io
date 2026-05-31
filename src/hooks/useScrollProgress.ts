import { useEffect, useState, type RefObject } from 'react'

/**
 * Returns 0 → 1 as the referenced element scrolls through the viewport.
 * 0 = element top hits viewport bottom, 1 = element bottom hits viewport top.
 * Foundation for scrollytelling: drive transforms/opacity off this value.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = rect.height + vh
      const traveled = vh - rect.top
      const p = Math.max(0, Math.min(1, traveled / total))
      setProgress(p)
      raf = 0
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref])

  return progress
}
