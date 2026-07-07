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

function App() {
  const hash = useHashRoute()

  const route = hash.replace(/^#/, '')

  // Land at the top whenever the route changes (e.g. opening a case study).
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route])

  let page = null
  if (route === '/two-audience-commenting') {
    page = <CommentVisibility />
  } else if (route === '/case-studies/learnhub') {
    page = <LearnHub />
  } else if (route === '/case-studies/desiam') {
    page = <DesiamCaseStudy />
  } else if (route.startsWith(CASE_STUDY_PREFIX)) {
    const slug = route.slice(CASE_STUDY_PREFIX.length).replace(/\/$/, '')
    const cs = caseStudies.find((c) => c.slug === slug)
    if (cs) page = <CaseStudyPage cs={cs} />
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <Nav />
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
