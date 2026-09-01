import { useState } from "react";
import SEOHead from "../components/ui/SEOHead";
import { BUSINESS, SITE_URL } from "../data/businessData";
import { PRINT_IMAGES } from "../data/imageLibrary";
import "./ContactPage.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleWASubmit = () => {
    const msg = [
      "Hi ZeePrintz!",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Message: ${form.message}`,
    ].join("\n");

    window.open(
      `https://wa.me/${BUSINESS.contact.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <SEOHead
        title="Contact ZeePrintz - Printer Shop Gandhipuram, Coimbatore"
        description="Contact ZeePrintz at Gandhipuram, Coimbatore. Call or WhatsApp +91 75989 51141 for visiting cards, flex banners, wedding cards, stickers and custom printing."
        keywords="zeeprintz contact, printer shop gandhipuram coimbatore, printing shop contact coimbatore, cross cut road printing, printing shop near me coimbatore"
        canonical={`${SITE_URL}/contact`}
      />

      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Get In Touch</p>
          <h1>Contact ZeePrintz Coimbatore</h1>
          <p>Visit us, call us, or send a WhatsApp message for a quick print quote.</p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Printing Shop Details</h2>

            <div className="contact-card">
              <div className="contact-card__icon">LOC</div>
              <div>
                <strong>Address</strong>
                <address>{BUSINESS.address.full}</address>
                <a href={BUSINESS.googleMapsLink} target="_blank" rel="noopener noreferrer" className="map-link">
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">PH</div>
              <div>
                <strong>Phone / WhatsApp</strong>
                <a href={`tel:${BUSINESS.contact.phone}`}>{BUSINESS.contact.phoneDisplay}</a>
                <a
                  href={`https://wa.me/${BUSINESS.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-link"
                >
                  Open WhatsApp Chat
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">EM</div>
              <div>
                <strong>Email</strong>
                <a href={`mailto:${BUSINESS.contact.email}`}>{BUSINESS.contact.email}</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">HR</div>
              <div>
                <strong>Business Hours</strong>
                <span>Mon - Fri: {BUSINESS.hours.weekdays}</span>
                <span>Saturday: {BUSINESS.hours.saturday}</span>
                <span>Sunday: {BUSINESS.hours.sunday}</span>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                title="ZeePrintz Map"
                src={BUSINESS.mapEmbed}
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: "var(--radius-md)" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <div className="contact-form-box">
            <h2>Send a Print Enquiry</h2>
            <p>Fill in the details and we will open WhatsApp with your enquiry ready to send.</p>

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
                placeholder="Describe quantity, size, material, and deadline..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button onClick={handleWASubmit} className="btn btn-whatsapp cf-submit">
              Send via WhatsApp
            </button>
            <p className="cf-note">This opens WhatsApp with your details pre-filled.</p>
          </div>
        </div>
      </section>

      <section className="contact-visual-section">
        <div className="container contact-visual">
          <div>
            <p className="eyebrow">Before You Message</p>
            <h2>For fastest quote, send these details.</h2>
            <div className="quote-checklist">
              {[
                "Print item name",
                "Size and quantity",
                "Paper/material preference",
                "Design file or sample photo",
                "Deadline or pickup date",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <img src={PRINT_IMAGES.businessCards} alt="Print quote sample cards" loading="lazy" />
        </div>
      </section>
    </>
  );
}
