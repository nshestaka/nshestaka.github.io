import Home from './components/Home'
import CaseStudyPage from './components/CaseStudyPage'
import DesiamCaseStudy from './components/desiam/DesiamCaseStudy'
import Nav from './components/Nav'
import ScrollToTop from './components/ScrollToTop'
import { usePathname } from './hooks/useLocation'
import { caseStudies } from './data/caseStudies'

const CASE_STUDY_PREFIX = '/case-studies/'

function App() {
  const pathname = usePathname()

  let content = <Home />
  if (pathname.startsWith(CASE_STUDY_PREFIX)) {
    const slug = decodeURIComponent(pathname.slice(CASE_STUDY_PREFIX.length)).replace(/\/$/, '')
    const cs = caseStudies.find((c) => c.slug === slug)
    if (slug === 'desiam') content = <DesiamCaseStudy />
    else if (cs) content = <CaseStudyPage cs={cs} />
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <Nav />
      {content}
      <ScrollToTop />
    </div>
  )
}

export default App
