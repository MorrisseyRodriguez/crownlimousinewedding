import './Benefits.css'

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Early Arrival Standards',
    body: 'Your chauffeur arrives early, confirms arrival in advance, and communicates proactively before pickup.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Every Stop Coordinated In Advance',
    body: 'Venues, pickup locations, timing, and route planning are coordinated before your wedding day begins.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Professional Wedding Chauffeurs',
    body: 'Professionally dressed, courteous chauffeurs experienced in the specific dynamics of wedding-day transportation.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
        <line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
    title: 'Flexible Schedule Coordination',
    body: 'Wedding timelines change. Our team adapts in real time so transportation never becomes the reason the day falls behind.',
  },
]

export default function Benefits() {
  return (
    <section className="benefits" aria-labelledby="benefits-heading">
      <div className="container">
        <div className="benefits-header">
          <p className="section-label">How We Help</p>
          <div className="divider" />
          <h2 id="benefits-heading" className="section-title reveal">
            How Crown Prevents The Problems Brides Worry About
          </h2>
          <p className="section-subtitle reveal reveal-delay-1">
            Every concern you have about wedding-day transportation has a system behind it.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className={`benefit-card reveal reveal-delay-${i + 1}`} role="article">
              <div className="benefit-card-icon" aria-hidden="true">
                {b.icon}
              </div>
              <h3 className="benefit-card-title">{b.title}</h3>
              <p className="benefit-card-body">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
