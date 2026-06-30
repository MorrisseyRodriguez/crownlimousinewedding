import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Choose Your Wedding Transportation',
    body: 'Browse our fleet or share your wedding details and we\'ll help you find the right vehicles for every moment.',
  },
  {
    number: '02',
    title: 'Request Your Quote',
    body: 'Share your wedding date, venues, guest count, and transportation needs through our simple form.',
  },
  {
    number: '03',
    title: 'Receive A Customized Wedding Transportation Plan',
    body: 'A member of our wedding team reaches out with a tailored plan designed around your specific day.',
  },
  {
    number: '04',
    title: 'Reserve Your Wedding Date',
    body: 'Your vehicles are secured, your chauffeurs are assigned, and every detail is coordinated in advance.',
  },
  {
    number: '05',
    title: 'Enjoy Your Wedding Day',
    body: 'Your only job on your wedding day is to be completely present. Transportation is ours.',
  },
]

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function HowItWorks() {
  return (
    <section className="how" aria-labelledby="how-heading">
      <div className="container">
        <div className="how-header">
          <p className="section-label">The Process</p>
          <div className="divider" />
          <h2 id="how-heading" className="section-title reveal">
            Planning Your Wedding Transportation Is Simple
          </h2>
        </div>

        <div className="how-steps" role="list">
          {steps.map((s, i) => (
            <div key={i} className={`how-step reveal reveal-delay-${i + 1}`} role="listitem">
              <div className="how-step-left">
                <div className="how-step-num" aria-hidden="true">{s.number}</div>
                {i < steps.length - 1 && <div className="how-step-line" aria-hidden="true" />}
              </div>
              <div className="how-step-content">
                <h3 className="how-step-title">{s.title}</h3>
                <p className="how-step-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="how-cta reveal">
          <button className="btn-primary how-cta-btn" onClick={scrollToQuote}>
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
