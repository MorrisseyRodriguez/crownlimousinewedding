import { useState } from 'react'
import './QuoteForm.css'

const vehicleTypes = [
  'Cadillac XTS Sedan',
  'Tesla Model S',
  'Tesla Model Y',
  'Cadillac Escalade SUV',
  'MKT Stretch Limousine',
  'Mercedes Sprinter Van',
  'Party Bus',
  'Executive Charter Bus',
  'Not Sure — Help Me Choose',
]

const serviceTypes = [
  'Point to Point',
  'Hourly (As Directed)',
  'Wedding',
  'Bachelor Party',
  'Bachelorette Party',
]

const defaultForm = {
  name: '',
  date: '',
  phone: '',
  email: '',
  serviceType: '',
  pickup: '',
  destination: '',
  vehicleType: '',
  passengers: '',
  notes: '',
}

const encode = (data) =>
  new URLSearchParams(data).toString()

export default function QuoteForm() {
  const [form, setForm] = useState(defaultForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'wedding-quote-request', campaignType: 'Wedding Transportation', ...form }),
      })

      const templateParams = {
        campaignType: 'Wedding Transportation',
        name: form.name || 'Not provided',
        phone: form.phone || 'Not provided',
        email: form.email || 'Not provided',
        date: form.date || 'Not provided',
        serviceType: form.serviceType || 'Not provided',
        vehicleType: form.vehicleType || 'Not provided',
        passengers: form.passengers || 'Not provided',
        pickup: form.pickup || 'Not provided',
        destination: form.destination || 'Not provided',
        notes: form.notes || 'None',
      }

      await window.emailjs.send(
        'service_3ft34fv',
        'template_xpozite',
        templateParams,
        'OZo1S52ylqKZv5AWM'
      )

      setSubmitted(true)
      setForm(defaultForm)
    } catch (error) {
      console.error(error)
      alert('Submission failed. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section className="quote-section" id="quote" aria-labelledby="quote-heading">
        <div className="container">
          <div className="quote-success">
            <div className="quote-success-icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2 className="quote-success-title">Your Wedding Date Is Reserved</h2>
            <p className="quote-success-body">
              Your request has been received. A member of Crown's wedding transportation team will be in touch shortly to discuss your plans.
            </p>
            <button className="btn-outline" onClick={() => setSubmitted(false)}>
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="quote-section" id="quote" aria-labelledby="quote-heading">
      <div className="container">
        <div className="quote-inner">
          <div className="quote-text">
            <p className="section-label">Reserve Your Wedding Date</p>
            <div className="divider" />
            <h2 id="quote-heading" className="section-title">
              Reserve Your Wedding Date
            </h2>
            <p className="section-subtitle">
              Tell us about your wedding plans and we'll help create a transportation experience that fits your day perfectly.
            </p>

            <p className="quote-urgency">
              Popular wedding dates book months in advance. The earlier you reserve, the more options you'll have available.
            </p>

            <div className="quote-trust">
              {[
                'Serving SoCal Since 1994',
                'Wedding-Day Specialists',
                '1,900+ Reviews',
                '13 Vehicle Options',
              ].map((t, i) => (
                <div key={i} className="quote-trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <div className="quote-phone-block">
              <p className="quote-phone-label">Speak With Our Wedding Transportation Team</p>
              <a href="tel:+13109478898" className="quote-phone-number">(310) 947-8898</a>
            </div>
          </div>

          <form
            name="wedding-quote-request"
            method="POST"
            data-netlify="true"
            className="quote-form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Wedding transportation reservation request"
          >
            <input type="hidden" name="form-name" value="wedding-quote-request" />
            <input type="hidden" name="campaignType" value="Wedding Transportation" />
            <div className="form-grid form-grid-2">
              <div className="form-field">
                <label htmlFor="name" className="form-label">Full Name <span aria-hidden="true">*</span></label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="date" className="form-label">Wedding Date</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="form-input"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-grid form-grid-2">
              <div className="form-field">
                <label htmlFor="phone" className="form-label">Phone <span aria-hidden="true">*</span></label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-input"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(310) 555-0100"
                  required
                  autoComplete="tel"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email" className="form-label">Email <span aria-hidden="true">*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="serviceType" className="form-label">Service Type</label>
              <select
                id="serviceType"
                name="serviceType"
                className="form-input form-select"
                value={form.serviceType}
                onChange={handleChange}
              >
                <option value="">Select a service type</option>
                {serviceTypes.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="pickup" className="form-label">Pickup Location <span aria-hidden="true">*</span></label>
              <input
                id="pickup"
                name="pickup"
                type="text"
                className="form-input"
                value={form.pickup}
                onChange={handleChange}
                placeholder="Address or venue name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="destination" className="form-label">Destination</label>
              <input
                id="destination"
                name="destination"
                type="text"
                className="form-input"
                value={form.destination}
                onChange={handleChange}
                placeholder="Address or venue name"
              />
            </div>

            <div className="form-grid form-grid-2">
              <div className="form-field">
                <label htmlFor="vehicleType" className="form-label">Vehicle Type</label>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  className="form-input form-select"
                  value={form.vehicleType}
                  onChange={handleChange}
                >
                  <option value="">Select a vehicle</option>
                  {vehicleTypes.map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="passengers" className="form-label">Estimated Guest Count</label>
                <input
                  id="passengers"
                  name="passengers"
                  type="number"
                  className="form-input"
                  value={form.passengers}
                  onChange={handleChange}
                  placeholder="Total guests"
                  min="1"
                  max="500"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="notes" className="form-label">Additional Details</label>
              <textarea
                id="notes"
                name="notes"
                className="form-input form-textarea"
                value={form.notes}
                onChange={handleChange}
                placeholder="Multiple pickups, special requests, timing details, questions…"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className={`btn-primary form-submit${loading ? ' loading' : ''}`}
              disabled={loading}
              aria-label={loading ? 'Submitting your wedding reservation request' : 'Submit wedding reservation request'}
            >
              {loading ? (
                <>
                  <span className="form-spinner" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Reserve Your Wedding Date
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
