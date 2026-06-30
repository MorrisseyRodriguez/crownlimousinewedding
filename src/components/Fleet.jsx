import { useState, useEffect, useRef } from 'react'
import './Fleet.css'

import xtsExt from '../Fleet/Cadillac XTS/xts.webp'
import xtsInt from '../Fleet/Cadillac XTS/xts-int.webp'
import teslaSExt from '../Fleet/Tesla S Model/tesla-s.webp'
import teslaSInt from '../Fleet/Tesla S Model/tesla-s-int.webp'
import escaladeExt from '../Fleet/Cadillac Escalade/escalade.webp'
import escaladeInt from '../Fleet/Cadillac Escalade/escalade-int.webp'
import teslaYExt from '../Fleet/Tesla Y Model/tesla-y.webp'
import teslaYInt from '../Fleet/Tesla Y Model/tesla-y-int.webp'
import sprinterExt from '../Fleet/Mercedes Sprinter Van/sprinter-van.webp'
import sprinterInt from '../Fleet/Mercedes Sprinter Van/sprinter-van-int.webp'
import mktExt from '../Fleet/MKT Stretch Limousine/mkt-limo.webp'
import mktInt from '../Fleet/MKT Stretch Limousine/mkt-limo-int.webp'
import partyBusExt from '../Fleet/Party bus/party-bus.webp'
import partyBusInt from '../Fleet/Party bus/party-bus-int.jpg'
import charterExt from '../Fleet/Executive Charter Bus/charter-bus.webp'
import charterInt from '../Fleet/Executive Charter Bus/charter-bus-int.webp'

const vehicles = [
  {
    class: 'MKT Stretch Limousine',
    models: 'The classic bridal arrival. Timeless, elegant, unforgettable.',
    exterior: mktExt,
    interior: mktInt,
    features: [
      'Fits up to 8 passengers',
      'The arrival your guests will remember',
      'Professional chauffeur, impeccably presented',
    ],
  },
  {
    class: 'Mercedes Sprinter Van',
    models: 'Keep the entire wedding party together and on schedule.',
    exterior: sprinterExt,
    interior: sprinterInt,
    features: [
      'Fits up to 12 passengers',
      'Everyone together from ceremony to reception',
      'Spacious, comfortable, coordinated',
    ],
  },
  {
    class: 'Cadillac XTS',
    models: 'Elegant private transportation for the bride and groom.',
    exterior: xtsExt,
    interior: xtsInt,
    features: [
      'Fits up to 3 passengers',
      'Intimate, refined cabin for special moments',
      'Professional chauffeur, available 24/7',
    ],
  },
  {
    class: 'Tesla Model S',
    models: 'A quietly modern arrival that makes a lasting impression.',
    exterior: teslaSExt,
    interior: teslaSInt,
    features: [
      'Fits up to 3 passengers',
      'Whisper-quiet, zero emissions',
      'Cutting-edge luxury throughout',
    ],
  },
  {
    class: 'Cadillac Escalade',
    models: 'Comfortable transportation for family members and VIP guests.',
    exterior: escaladeExt,
    interior: escaladeInt,
    features: [
      'Fits up to 6 passengers',
      'Generous space for family and VIPs',
      'Professional chauffeur throughout Los Angeles',
    ],
  },
  {
    class: 'Tesla Model Y',
    models: 'Modern comfort for family and close guests.',
    exterior: teslaYExt,
    interior: teslaYInt,
    features: [
      'Fits up to 5 passengers',
      'Premium SUV comfort, zero emissions',
      'Available throughout Southern California',
    ],
  },
  {
    class: 'Party Bus',
    models: 'Bachelor and bachelorette celebrations done right.',
    exterior: partyBusExt,
    interior: partyBusInt,
    features: [
      'Fits large groups comfortably',
      'Built for celebratory pre-wedding events',
      'Available throughout Los Angeles',
    ],
  },
  {
    class: 'Executive Charter Bus',
    models: 'Organized guest shuttle service between venues.',
    exterior: charterExt,
    interior: charterInt,
    features: [
      'Fits large groups comfortably',
      'Perfect for ceremony-to-reception shuttles',
      'Coordinated timing for your wedding schedule',
    ],
  },
]

function FleetCard({ v, cardRef }) {
  const [showInterior, setShowInterior] = useState(false)

  return (
    <div className="fleet-card" ref={cardRef}>
      <div className="fleet-card-img">
        <img
          src={showInterior ? v.interior : v.exterior}
          alt={`${v.class} ${showInterior ? 'interior' : 'exterior'}`}
          className="fleet-card-photo"
          draggable={false}
          loading="lazy"
        />
        <button
          className="fleet-img-arrow fleet-img-arrow--left"
          aria-label="Show exterior"
          onClick={() => setShowInterior(false)}
          disabled={!showInterior}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="fleet-img-arrow fleet-img-arrow--right"
          aria-label="Show interior"
          onClick={() => setShowInterior(true)}
          disabled={showInterior}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        <div className="fleet-img-dots" aria-hidden="true">
          <span className={`fleet-img-dot${!showInterior ? ' fleet-img-dot--active' : ''}`} />
          <span className={`fleet-img-dot${showInterior ? ' fleet-img-dot--active' : ''}`} />
        </div>
      </div>

      <div className="fleet-card-body">
        <h3 className="fleet-card-name">{v.class}</h3>
        <p className="fleet-card-models">{v.models}</p>
        <div className="fleet-card-divider" />
        <ul className="fleet-card-features">
          {v.features.map((f, fi) => (
            <li key={fi} className="fleet-card-feature">
              <svg
                className="fleet-check"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Fleet() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(2)
  const [translateX, setTranslateX] = useState(0)
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  // mutable ref so touch handlers always read fresh values without re-registering
  const live = useRef({ activeIndex: 0, cardsPerPage: 2, translateX: 0 })

  useEffect(() => {
    live.current.activeIndex = activeIndex
    live.current.cardsPerPage = cardsPerPage
    live.current.translateX = translateX
  })

  useEffect(() => {
    const update = () => {
      const cpp = window.innerWidth <= 640 ? 1 : 2
      setCardsPerPage(cpp)
      live.current.cardsPerPage = cpp
    }
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  const getStep = () => {
    const card = cardRefs.current[0]
    const track = trackRef.current
    if (!card || !track) return 0
    return card.offsetWidth + (parseFloat(getComputedStyle(track).gap) || 0)
  }

  const snapToIndex = (index) => {
    const clamped = Math.max(0, Math.min(vehicles.length - 1, index))
    const x = -(clamped * getStep())
    setActiveIndex(clamped)
    setTranslateX(x)
    live.current.activeIndex = clamped
    live.current.translateX = x
    if (trackRef.current) {
      trackRef.current.style.transition = ''
      trackRef.current.style.transform = `translateX(${x}px)`
    }
  }

  // Attach touch handlers as non-passive so we can call preventDefault
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let startX = 0
    let startY = 0
    let isHoriz = null

    const onStart = (e) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
      isHoriz = null
    }

    const onMove = (e) => {
      const dx = e.touches[0].clientX - startX
      const dy = e.touches[0].clientY - startY

      if (isHoriz === null) {
        if (Math.abs(dx) < 4 && Math.abs(dy) < 4) return
        isHoriz = Math.abs(dx) >= Math.abs(dy)
      }

      if (!isHoriz) return
      e.preventDefault()

      const liveX = live.current.translateX + dx
      track.style.transition = 'none'
      track.style.transform = `translateX(${liveX}px)`
    }

    const onEnd = (e) => {
      if (!isHoriz) return
      const dx = e.changedTouches[0].clientX - startX
      const step = getStep()
      const { activeIndex: ai, cardsPerPage: cpp } = live.current
      track.style.transition = ''
      if (Math.abs(dx) > step * 0.2) {
        snapToIndex(ai + (dx < 0 ? cpp : -cpp))
      } else {
        snapToIndex(ai)
      }
    }

    track.addEventListener('touchstart', onStart, { passive: true })
    track.addEventListener('touchmove', onMove, { passive: false })
    track.addEventListener('touchend', onEnd, { passive: true })

    return () => {
      track.removeEventListener('touchstart', onStart)
      track.removeEventListener('touchmove', onMove)
      track.removeEventListener('touchend', onEnd)
    }
  }, []) // empty — reads live ref, no stale closures

  const totalPages = Math.ceil(vehicles.length / cardsPerPage)
  const page = Math.floor(activeIndex / cardsPerPage)

  const goPrev = () => snapToIndex(Math.max(0, activeIndex - cardsPerPage))
  const goNext = () => snapToIndex(Math.min(vehicles.length - 1, activeIndex + cardsPerPage))
  const goToPage = (p) => snapToIndex(p * cardsPerPage)

  return (
    <section className="fleet" id="fleet" aria-labelledby="fleet-heading">
      <div className="container">
        <div className="fleet-header reveal">
          <h2 id="fleet-heading" className="fleet-heading">
            Choose The Right Vehicle For Your Wedding Day
          </h2>
        </div>
      </div>

      <div className="fleet-carousel-outer">
        <div
          className="fleet-carousel-track"
          ref={trackRef}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {vehicles.map((v, i) => (
            <FleetCard key={i} v={v} cardRef={el => cardRefs.current[i] = el} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="fleet-pagination">
          <button
            className="fleet-page-arrow"
            onClick={goPrev}
            disabled={page === 0}
            aria-label="Previous page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`fleet-page-num${page === i ? ' fleet-page-num--active' : ''}`}
              onClick={() => goToPage(i)}
              aria-label={`Page ${i + 1}`}
              aria-current={page === i ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="fleet-page-arrow"
            onClick={goNext}
            disabled={page === totalPages - 1}
            aria-label="Next page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
