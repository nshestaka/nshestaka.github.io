import { useEffect, useState } from 'react'

/**
 * Tracks scroll direction with a small threshold to avoid jitter.
 * Returns 'up' | 'down' | 'idle' and the current scrollY.
 */
export function useScrollDirection(threshold = 8) {
  const [direction, setDirection] = useState<'up' | 'down' | 'idle'>('idle')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let lastY = window.scrollY
    let raf = 0

    const update = () => {
      const y = window.scrollY
      const delta = y - lastY
      if (Math.abs(delta) > threshold) {
        setDirection(delta > 0 ? 'down' : 'up')
        lastY = y
      }
      setScrollY(y)
      raf = 0
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [threshold])

  return { direction, scrollY }
}
