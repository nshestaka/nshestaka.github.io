import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Section01 from './learnhub/Section01'
import Section02 from './learnhub/Section02'
import Section03 from './learnhub/Section03'
import Section04 from './learnhub/Section04'
import Section05 from './learnhub/Section05'
import Section06 from './learnhub/Section06'
import Section07 from './learnhub/Section07'
import Section08 from './learnhub/Section08'
import Section09 from './learnhub/Section09'
import Section10 from './learnhub/Section10'
import Section11 from './learnhub/Section11'
import Section12 from './learnhub/Section12'
import Section13 from './learnhub/Section13'
import Section14 from './learnhub/Section14'
import Section15 from './learnhub/Section15'
import Section16 from './learnhub/Section16'
import Section17 from './learnhub/Section17'
import Section18 from './learnhub/Section18'
import Section19 from './learnhub/Section19'
import Section20 from './learnhub/Section20'
import Section21 from './learnhub/Section21'
import Section22 from './learnhub/Section22'
import Section23 from './learnhub/Section23'
import Section24 from './learnhub/Section24'

/**
 * LearnHub — full-page, scrollable case study.
 *
 * A faithful DOM rebuild of the Figma case study (node 9316-64345): text is real
 * text and layout is real markup so every element can be animated later. Only
 * genuinely graphical assets (phone mockups, 3D podiums, chart visuals, in-app
 * screenshots) are exported images, served from /covers/learnhub/.
 *
 * The comp is a fixed 1440px-wide canvas. We render every section at native pixel
 * size stacked in a column, then uniformly scale that column to exactly fill the
 * viewport width — so section backgrounds (photos / grey) bleed edge-to-edge while
 * the content composition stays identical, just larger or smaller.
 */
const CANVAS_WIDTH = 1440

function LearnHub() {
  const outerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [scaledHeight, setScaledHeight] = useState<number | undefined>(undefined)

  useLayoutEffect(() => {
    const outer = outerRef.current
    const canvas = canvasRef.current
    if (!outer || !canvas) return

    const measure = () => {
      const available = outer.clientWidth
      const next = available / CANVAS_WIDTH
      setScale(next)
      setScaledHeight(canvas.offsetHeight * next)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(outer)
    ro.observe(canvas)
    return () => ro.disconnect()
  }, [])

  // Re-measure once fonts have loaded, since Urbanist metrics shift line heights.
  useEffect(() => {
    if (!document.fonts?.ready) return
    document.fonts.ready.then(() => {
      const canvas = canvasRef.current
      const outer = outerRef.current
      if (!canvas || !outer) return
      const next = outer.clientWidth / CANVAS_WIDTH
      setScaledHeight(canvas.offsetHeight * next)
    })
  }, [])

  return (
    <div className="bg-white pt-14 font-[Urbanist,sans-serif] text-[#151516] antialiased">
      <div ref={outerRef} className="w-full overflow-hidden">
        {/* Reserve the scaled height so the page scrolls correctly. */}
        <div style={{ height: scaledHeight }}>
          <div
            ref={canvasRef}
            className="flex w-[1440px] origin-top-left flex-col"
            style={{ transform: `scale(${scale})` }}
          >
            <Section01 />
            <Section02 />
            <Section03 />
            <Section04 />
            <Section05 />
            <Section06 />
            <Section07 />
            <Section08 />
            <Section09 />
            <Section10 />
            <Section11 />
            <Section12 />
            <Section13 />
            <Section14 />
            <Section15 />
            <Section16 />
            <Section17 />
            <Section18 />
            <Section19 />
            <Section20 />
            <Section21 />
            <Section22 />
            <Section23 />
            <Section24 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnHub
