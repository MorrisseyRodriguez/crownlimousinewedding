import './Aspirational.css'
import joyfulBride from '../Images/joyfulbrideandbridesmaids.png'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Aspirational() {
  return (
    <section className="aspirational" aria-labelledby="aspirational-heading">
      <div className="container aspirational-inner">
        <div className="aspirational-image-wrap reveal">
          <img src={joyfulBride} alt="Joyful bride and bridesmaids" className="aspirational-image" loading="lazy" />
          <div className="aspirational-badge" aria-label="Serving Southern California Since 1994">
            <span className="aspirational-badge-year">1994</span>
            <span className="aspirational-badge-text">Serving SoCal</span>
          </div>
        </div>

        <div className="aspirational-text">
          <div className="aspirational-heading-group">
            <p className="section-label">The Experience</p>
            <div className="divider" />
            <h2 id="aspirational-heading" className="section-title reveal">
              When Transportation Is Handled Correctly, You Never Think About It
            </h2>
          </div>

          <div className="aspirational-body">
            <p className="aspirational-pull reveal reveal-delay-1">
              The chauffeur arrives early.
            </p>
            <div className="aspirational-paragraphs reveal reveal-delay-2">
              <p>The vehicle is exactly what was promised. The schedule flows naturally. The wedding party stays on track.</p>
              <p>The guests arrive comfortably. The bride stays focused on the moment instead of the logistics.</p>
              <p>Transportation becomes invisible.</p>
            </div>
            <div className="aspirational-close reveal reveal-delay-3">
              <p className="aspirational-close-strong">Exactly as it should.</p>
            </div>
          </div>

          <button className="btn-primary aspirational-cta reveal reveal-delay-3" onClick={scrollToQuote}>
            Reserve Your Wedding Date
          </button>
        </div>
      </div>
    </section>
  )
}
