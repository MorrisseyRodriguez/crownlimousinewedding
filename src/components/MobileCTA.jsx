import './MobileCTA.css'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function MobileCTA({ menuOpen, setMenuOpen }) {
  return (
    <div className="mobile-dock" role="navigation" aria-label="Quick actions">
      <button
        className={`dock-btn dock-btn--menu${menuOpen ? ' dock-btn--active' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <div className="dock-circle dock-circle--gray">
          {menuOpen ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </div>
        <span className="dock-label">Menu</span>
      </button>

      <button
        className="dock-btn dock-btn--quote"
        onClick={scrollToQuote}
        aria-label="Get a quote"
      >
        <div className="dock-circle dock-circle--blue">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <span className="dock-label">Get Quote</span>
      </button>

      <a
        href="tel:+13105550000"
        className="dock-btn dock-btn--call"
        aria-label="Call us"
      >
        <div className="dock-circle dock-circle--gray">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.3a16 16 0 0 0 5.79 5.79l1.67-1.67a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <span className="dock-label">Call</span>
      </a>
    </div>
  )
}
