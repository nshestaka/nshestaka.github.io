import { useEffect } from 'react'
import DesignCanvas from './DesignCanvas'
import Section01 from './Section01'
import Section02 from './Section02'
import Section03 from './Section03'
import Section04 from './Section04'
import Section05 from './Section05'
import Section06 from './Section06'
import Section07 from './Section07'
import Section08 from './Section08'
import Section09 from './Section09'
import Section10 from './Section10'
import Section12 from './Section12'
import Section13 from './Section13'
import Section14 from './Section14'
import Section15 from './Section15'
import Section16 from './Section16'
import Section17 from './Section17'
import Section18 from './Section18'
import Section19 from './Section19'
import Section20 from './Section20'
import Section21 from './Section21'

const sections = [
  Section01,
  Section02,
  Section03,
  Section04,
  Section05,
  Section06,
  Section07,
  Section08,
  Section09,
  Section10,
  Section12,
  Section13,
  Section14,
  Section15,
  Section16,
  Section17,
  Section18,
  Section19,
  Section20,
  Section21,
]

/**
 * DESIAM case study — a faithful, pixel-for-pixel reproduction of the Figma
 * artboard (node 9334-73829). Each section is generated from Figma's own
 * export and stacked on a canvas that scales to fill the viewport width
 * (see DesignCanvas). The shared site nav (rendered globally in App) sits above
 * it, so the header is identical on every page.
 */
// Top offset reserved for the fixed site nav so it never covers the hero.
const NAV_OFFSET = 56
function DesiamCaseStudy() {
  useEffect(() => {
    const previous = document.title
    document.title = 'DESIAM — Reference Storing Tool · Case study'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#25252d]">
      <div style={{ paddingTop: NAV_OFFSET }}>
        <DesignCanvas width={1440}>
          <div className="flex flex-col">
            {sections.map((Section, i) => (
              <Section key={i} />
            ))}
          </div>
        </DesignCanvas>
      </div>
    </div>
  )
}

export default DesiamCaseStudy
