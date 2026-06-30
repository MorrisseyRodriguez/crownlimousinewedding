import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Aspirational from './components/Aspirational'
import Benefits from './components/Benefits'
import Services from './components/Services'
import Fleet from './components/Fleet'
import Stats from './components/Stats'
import Reviews from './components/Reviews'
import HowItWorks from './components/HowItWorks'
import QuoteForm from './components/QuoteForm'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Problem />
        <Aspirational />
        <Benefits />
        <Services />
        <Fleet />
        <Stats />
        <Reviews />
        <HowItWorks />
        <QuoteForm />
      </main>
      <Footer />
      <MobileCTA menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  )
}
