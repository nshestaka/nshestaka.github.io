import { useEffect } from 'react'
import Hero from './Hero'
import CaseStudies from './CaseStudies'
import Workflow from './Workflow'
import UxAudit from './UxAudit'
import CV from './CV'
import Contact from './Contact'

function Home() {
  // When arriving from another page via a "/#section" link, scroll to it.
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const el = document.querySelector(hash)
    if (!el) return
    requestAnimationFrame(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    })
  }, [])

  return (
    <main>
      <Hero />
      <CaseStudies />
      <Workflow />
      <UxAudit />
      <CV />
      <Contact />
    </main>
  )
}

export default Home
