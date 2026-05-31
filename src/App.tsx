import Nav from './components/Nav'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import Workflow from './components/Workflow'
import UxAudit from './components/UxAudit'
import CV from './components/CV'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <CaseStudies />
        <Workflow />
        <UxAudit />
        <CV />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  )
}

export default App
