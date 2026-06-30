import { useState, useRef, useEffect } from 'react'
import './Reviews.css'
import weddingWireLogo from '../Logo/download.jpg'
import theKnotLogo from '../Logo/download(1).png'

const reviews = [
  {
    text: "We used Crown Limousine for our wedding night transportation and it was one of the best decisions we made! The Crown Limo team is incredibly responsive to messages and flexible with changes. Our driver arrived on time during a stormy night and made sure we stayed dry by covering us with umbrellas as we entered the vehicle. The Escalade SUV was clean and felt VIP. The driver also helped us load all of our bags. I highly recommend Crown Limo and would hire them again in a heartbeat. Thank you!",
    name: "Rachel",
    title: "Wonderful experience!",
    stars: 5,
  },
  {
    text: "This was a last minute reservation, but everyone was very helpful and our driver was extremely flexible and helpful.",
    name: "Barbara",
    title: "Exceptional service",
    stars: 5,
  },
  {
    text: "Very easy coordination. Kevin was our limo driver and was very friendly and was always on time! Helped keep our day running smoothly!",
    name: "Austin",
    title: "Smooth process and reliable!",
    stars: 5,
  },
  {
    text: "We had a great experience with Edward from Crown Limousine! He was very helpful and really made the vibe during the transport great! Would 100% recommend!!!",
    name: "Kristine",
    title: "Great Experience!!!",
    stars: 5,
  },
  {
    text: "I had family flying in internationally and Crown Limousine picked them up timely and brought them to their destination safely & with comfort.",
    name: "Yasemin",
    title: "Mother of the bride",
    stars: 5,
  },
]

const Stars = ({ count }) => (
  <div className="review-stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}
  </div>
)

export default function Reviews() {
  const [active, setActive] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const trackRef = useRef(null)
  const firstCardRef = useRef(null)
  const startXRef = useRef(null)
  const isDraggingRef = useRef(false)

  const prev = () => setActive(a => (a - 1 + reviews.length) % reviews.length)
  const next = () => setActive(a => (a + 1) % reviews.length)

  useEffect(() => {
    const measure = () => {
      if (firstCardRef.current) {
        setCardWidth(firstCardRef.current.getBoundingClientRect().width)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const onTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX
    isDraggingRef.current = true
  }

  const onTouchEnd = (e) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    const diff = startXRef.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
  }

  const onMouseDown = (e) => {
    startXRef.current = e.clientX
    isDraggingRef.current = true
  }

  const onMouseUp = (e) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    const diff = startXRef.current - e.clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
  }

  const translateX = cardWidth ? -(active * (cardWidth + 28)) : 0

  return (
    <section className="reviews-section" id="reviews" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="reviews-header">
          <p className="section-label">Wedding Reviews</p>
          <div className="divider" />
          <h2 id="reviews-heading" className="section-title reveal">
            What Brides Say About Crown
          </h2>
        </div>
      </div>

      <div
        className="reviews-carousel"
        ref={trackRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        role="region"
        aria-label="Wedding reviews carousel"
        aria-live="polite"
      >
        <div className="reviews-track" style={{ transform: `translateX(${translateX}px)` }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              ref={i === 0 ? firstCardRef : undefined}
              className={`review-card${i === active ? ' review-card--active' : ''}`}
              role="article"
              aria-hidden={i !== active}
            >
              <Stars count={r.stars} />
              <blockquote className="review-text">"{r.text}"</blockquote>
              <div className="review-author">
                <div className="review-author-avatar" aria-hidden="true">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="review-author-name">{r.name}</p>
                  {r.title && <p className="review-author-title">{r.title}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="reviews-controls">
          <button
            className="reviews-arrow"
            onClick={prev}
            aria-label="Previous review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>

          <div className="reviews-dots" role="tablist" aria-label="Review navigation">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`reviews-dot${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="reviews-arrow"
            onClick={next}
            aria-label="Next review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div className="reviews-platforms">
          <p className="reviews-platforms-label">READ OUR REVIEWS ON</p>
          <div className="reviews-platforms-buttons">
            <a
              href="https://www.weddingwire.com/biz/crown-limousine/96005f34e87676e0.html"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-platform-btn"
            >
              <img src={weddingWireLogo} alt="WeddingWire" className="reviews-platform-logo" />
              <span>WeddingWire</span>
            </a>
            <a
              href="https://www.theknot.com/marketplace/crown-limousine-la-los-angeles-ca-388276"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-platform-btn"
            >
              <img src={theKnotLogo} alt="The Knot" className="reviews-platform-logo" />
              <span>The Knot</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
