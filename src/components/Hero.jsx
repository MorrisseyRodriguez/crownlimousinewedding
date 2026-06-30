import './Hero.css'
import heroImage from '../Images/weddingherosection.png'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg">
        <img src={heroImage} alt="" className="hero-image" aria-hidden="true" fetchPriority="high" />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <p className="hero-eyebrow">Crown Limousine LA</p>
        <h1 id="hero-heading" className="hero-title">
          Your Wedding Day Deserves Transportation That Gets Everything Right
        </h1>
        <p className="hero-subtitle">
          Los Angeles Wedding Transportation Specialists Since 1994. Trusted by brides, wedding planners, and event coordinators throughout Southern California.
        </p>
        <div className="hero-actions">
          <button className="btn-primary hero-btn" onClick={scrollToQuote}>
            Reserve Your Wedding Date
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
