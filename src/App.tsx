import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import Workflow from './components/Workflow'
import UxAudit from './components/UxAudit'
import CV from './components/CV'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import CommentVisibility from './components/CommentVisibility'
import LearnHub from './components/LearnHub'
import DesiamCaseStudy from './components/desiam/DesiamCaseStudy'
import CaseStudyPage from './components/CaseStudyPage'
import ProactiveIntelligence from './components/case-study/ProactiveIntelligence'
import { caseStudies } from './data/caseStudies'

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

const CASE_STUDY_PREFIX = '/case-studies/'
// Home-page section ids (matches the Nav links). Arriving with one of these as
// the hash (e.g. `/#workflow` from a sub-page) should scroll to that section.
const SECTION_IDS = new Set(['work', 'workflow', 'ux-audit', 'cv', 'contact'])

function App() {
  const hash = useHashRoute()
  const route = hash.replace(/^#/, '')

  let page = null
  if (route === '/two-audience-commenting') {
    page = <CommentVisibility />
  } else if (route === '/case-studies/learnhub') {
    page = <LearnHub />
  } else if (route === '/case-studies/desiam') {
    page = <DesiamCaseStudy />
  } else if (route === '/case-studies/proactive-intelligence') {
    page = <ProactiveIntelligence />
  } else if (route.startsWith(CASE_STUDY_PREFIX)) {
    const slug = route.slice(CASE_STUDY_PREFIX.length).replace(/\/$/, '')
    const cs = caseStudies.find((c) => c.slug === slug)
    if (cs) page = <CaseStudyPage cs={cs} />
  }

  // Scroll behaviour on route change: a sub-page lands at the top; a home
  // section hash (e.g. arriving from a case study via `/#workflow`) scrolls to
  // that section, re-pinning for a beat as images/layout settle.
  useEffect(() => {
    if (!SECTION_IDS.has(route)) {
      window.scrollTo(0, 0)
      return
    }
    let frame = 0
    let ticks = 0
    let lastTop = -1
    const settle = () => {
      const el = document.getElementById(route)
      if (el) {
        const top = Math.round(el.getBoundingClientRect().top + window.scrollY - 72)
        if (Math.abs(top - lastTop) > 1) {
          window.scrollTo({ top, behavior: 'auto' })
          lastTop = top
        }
      }
      ticks += 1
      if (ticks < 45) frame = requestAnimationFrame(settle) // ~0.75s of settling
    }
    frame = requestAnimationFrame(settle)
    return () => cancelAnimationFrame(frame)
  }, [route])

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <Nav progress={route === '/case-studies/proactive-intelligence'} />
      {page ?? (
        <main>
          <Hero />
          <CaseStudies />
          <Workflow />
          <UxAudit />
          <CV />
          <Contact />
        </main>
      )}
      <ScrollToTop />
    </div>
  )
}

export default App
