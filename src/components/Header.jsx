import { useState, useEffect } from 'react'
import crownLogo from '../Logo/photo.jpg'
import './Header.css'

const CrownLogo = () => (
  <div className="header-logo-lockup" aria-label="Crown Limousine LA">
    <img src={crownLogo} alt="" className="header-logo-img" aria-hidden="true" />
    <div className="header-logo-text">
      <span className="header-logo-name">CROWN</span>
      <span className="header-logo-sub">LIMOUSINE LA</span>
    </div>
  </div>
)

export default function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
  ]

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header-inner container">
        <a href="#" className="header-logo" aria-label="Crown Limousine LA – Home">
          <CrownLogo />
        </a>

        <nav className="header-nav" aria-label="Main navigation">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="header-nav-link">{l.label}</a>
          ))}
        </nav>

        <button
          className={`header-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} role="dialog" aria-modal="true">
        <nav className="mobile-menu-nav">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="mobile-menu-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
