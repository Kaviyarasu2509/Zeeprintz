import { useState } from "react";
import SEOHead from "../components/ui/SEOHead";
import { BUSINESS } from "../data/businessData";
import "./ContactPage.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleWASubmit = () => {
    const msg = `Hi ZeePrintz!%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${BUSINESS.contact.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="Contact ZeePrintz – Printer Shop Gandhipuram, Coimbatore"
        description="Contact ZeePrintz at Gandhipuram, Coimbatore. Call +91 75989 51141 or WhatsApp for printing orders. Located at 2nd Floor, Balaji Complex, Cross Cut Road."
        keywords="zeeprintz contact, printer shop gandhipuram coimbatore, printing shop contact coimbatore, cross cut road printing"
        canonical="https://zeeprintz.com/contact"
      />

      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Get In Touch</p>
          <h1>Contact ZeePrintz Coimbatore</h1>
          <p>Visit us, call us, or just send a WhatsApp — we're always ready to help!</p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-grid">
          {/* Info */}
          <div className="contact-info">
            <h2>Our Details</h2>

            <div className="contact-card">
              <div className="contact-card__icon">📍</div>
              <div>
                <strong>Address</strong>
                <address>{BUSINESS.address.full}</address>
                <a href={BUSINESS.googleMapsLink} target="_blank" rel="noopener noreferrer" className="map-link">
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">📞</div>
              <div>
                <strong>Phone / WhatsApp</strong>
                <a href={`tel:${BUSINESS.contact.phone}`}>{BUSINESS.contact.phoneDisplay}</a>
                <a
                  href={`https://wa.me/${BUSINESS.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-link"
                >
                  💬 Open WhatsApp Chat
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">✉️</div>
              <div>
                <strong>Email</strong>
                <a href={`mailto:${BUSINESS.contact.email}`}>{BUSINESS.contact.email}</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">🕐</div>
              <div>
                <strong>Business Hours</strong>
                <span>Mon – Fri: {BUSINESS.hours.weekdays}</span>
                <span>Saturday: {BUSINESS.hours.saturday}</span>
                <span>Sunday: {BUSINESS.hours.sunday}</span>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                title="ZeePrintz Map"
                src="https://maps.google.com/maps?q=Gandhipuram+Coimbatore+641012&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: "var(--radius-md)" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-box">
            <h2>Send Us an Enquiry</h2>
            <p>Fill in the details below and we'll send it directly to our WhatsApp!</p>

            <div className="cf-field">
              <label>Your Name *</label>
              <input
                type="text"
                placeholder="e.g. Rajan Kumar"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="cf-field">
              <label>Phone Number *</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div className="cf-field">
              <label>Service Required</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option value="">Select a service...</option>
                <option>Visiting Cards</option>
                <option>Flex / Banners</option>
                <option>Brochures / Flyers</option>
                <option>Wedding Cards</option>
                <option>T-Shirt Printing</option>
                <option>ID Cards</option>
                <option>Stickers / Labels</option>
                <option>Other</option>
              </select>
            </div>

            <div className="cf-field">
              <label>Message / Requirements</label>
              <textarea
                placeholder="Describe your requirement, quantity, deadline..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button onClick={handleWASubmit} className="btn btn-whatsapp cf-submit">
              📲 Send via WhatsApp
            </button>
            <p className="cf-note">This will open WhatsApp with your details pre-filled.</p>
          </div>
        </div>
      </section>
    </>
  );
}