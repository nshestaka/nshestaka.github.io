import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Renders a fixed-width Figma artboard faithfully at any viewport width.
 *
 * The DESIAM case study is a 1440px-wide design. Each section is reproduced
 * with the exact absolute layout Figma exports. This wrapper measures its
 * available width and uniformly scales the artboard to fill it edge-to-edge
 * (scaling up on wide screens too, so the coloured background and full-bleed
 * imagery always reach both edges — no gutters), collapsing the outer height to
 * the scaled height so the page scrolls naturally.
 */
function DesignCanvas({ width, children }: { width: number; children: ReactNode }) {
  const outer = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState<number | undefined>(undefined)

  useLayoutEffect(() => {
    const outerEl = outer.current
    const innerEl = inner.current
    if (!outerEl || !innerEl) return

    const measure = () => {
      const available = outerEl.clientWidth
      if (available === 0) return
      const s = available / width
      setScale(s)
      setHeight(innerEl.scrollHeight * s)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(outerEl)
    return () => ro.disconnect()
  }, [width])

  return (
    <div ref={outer} className="overflow-hidden" style={{ height }}>
      <div ref={inner} style={{ width, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        {children}
      </div>
    </div>
  )
}

export default DesignCanvas
