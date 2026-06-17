import { Link } from "react-router-dom";
import SEOHead from "../components/ui/SEOHead";
import { BUSINESS, SERVICES, STATS, TESTIMONIALS } from "../data/businessData";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Best Printing Shop in Coimbatore | Visiting Cards, Flex, Banners"
        description="ZeePrintz – Coimbatore's #1 print studio in Gandhipuram. Visiting cards, flex banners, wedding cards, brochures, t-shirt printing & more. Fast delivery. Call +91 75989 51141."
        keywords="printer shop coimbatore, visiting card printing coimbatore, flex printing coimbatore, banner printing coimbatore, gandhipuram printing shop, zeeprintz"
        canonical="https://zeeprintz.com"
      />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__ink-drop hero__ink-drop--1" />
          <div className="hero__ink-drop hero__ink-drop--2" />
          <div className="hero__ink-drop hero__ink-drop--3" />
        </div>
        <div className="container hero__content">
          <div className="hero__text">
            <p className="eyebrow">📍 Gandhipuram, Coimbatore</p>
            <h1 className="hero__heading">
              Print It Bold.<br />
              <span className="hero__heading-accent">Deliver It Fast.</span>
            </h1>
            <p className="hero__sub">
              Coimbatore's trusted print studio — visiting cards, flex banners,
              wedding cards, t-shirts & 50+ more services. Same-day delivery available.
            </p>
            <div className="hero__actions">
              <a
                href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi ZeePrintz! I want to place an order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                📲 Order on WhatsApp
              </a>
              <Link to="/services" className="btn btn-outline">
                View All Services →
              </Link>
            </div>
            <div className="hero__trust">
              <span>⭐⭐⭐⭐⭐</span>
              <span>500+ Google Reviews</span>
              <span className="hero__trust-sep">·</span>
              <span>10+ Years in Coimbatore</span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__card hero__card--main">
              <div className="hcard__icon">🖨️</div>
              <div className="hcard__text">
                <strong>50+ Print Services</strong>
                <span>All under one roof</span>
              </div>
            </div>
            <div className="hero__card hero__card--delivery">
              <div className="hcard__icon">⚡</div>
              <div className="hcard__text">
                <strong>Same-Day Delivery</strong>
                <span>For urgent orders</span>
              </div>
            </div>
            <div className="hero__card hero__card--price">
              <div className="hcard__icon">💰</div>
              <div className="hcard__text">
                <strong>Best Price Guarantee</strong>
                <span>Lowest in Coimbatore</span>
              </div>
            </div>
            <div className="hero__mockup">
              <div className="mockup__visiting-card">
                <div className="mvc__logo">ZP</div>
                <div className="mvc__info">
                  <strong>Your Business Name</strong>
                  <span>Coimbatore</span>
                </div>
              </div>
              <div className="mockup__banner">FLEX BANNER PRINTING</div>
              <div className="mockup__tshirt">👕</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-bar">
        <div className="container stats-bar__grid">
          {STATS.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section services-preview">
        <div className="container">
          <p className="eyebrow">What We Do</p>
          <h2>Print Services in Coimbatore</h2>
          <p className="section-sub">
            From visiting cards to giant flex banners — everything printed with precision
            at the best price in Coimbatore.
          </p>
          <div className="services-grid">
            {SERVICES.filter((s) => s.popular).map((s) => (
              <Link to="/services" key={s.id} className="service-card">
                {s.popular && <span className="tag tag-accent service-card__badge">Popular</span>}
                <div className="service-card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-card__price">{s.price}</span>
              </Link>
            ))}
          </div>
          <div className="services-preview__cta">
            <Link to="/services" className="btn btn-outline">
              See All 50+ Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section why-us">
        <div className="container why-us__inner">
          <div className="why-us__text">
            <p className="eyebrow">Why ZeePrintz?</p>
            <h2>Coimbatore's Most Trusted Print Studio</h2>
            <p>
              Located in the heart of Gandhipuram, ZeePrintz has been serving
              Coimbatore businesses and individuals with premium quality prints
              since 2014.
            </p>
            <ul className="why-list">
              {[
                ["⚡", "Same-Day Delivery", "Urgent orders ready within hours"],
                ["🎨", "Premium Quality", "Vibrant colors, durable materials"],
                ["💰", "Lowest Prices", "Best rates guaranteed in Coimbatore"],
                ["📲", "WhatsApp Orders", "Send design & order instantly"],
                ["🔄", "Bulk Discounts", "Great deals for large quantities"],
                ["✅", "10+ Years Experience", "Trusted by 5000+ customers"],
              ].map(([icon, title, sub]) => (
                <li key={title} className="why-item">
                  <span className="why-item__icon">{icon}</span>
                  <div>
                    <strong>{title}</strong>
                    <span>{sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="why-us__cta-box">
            <h3>Ready to Print?</h3>
            <p>Send your design on WhatsApp and get an instant quote!</p>
            <a
              href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi ZeePrintz! I need a quote for printing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              📲 Get Instant Quote
            </a>
            <a href={`tel:${BUSINESS.contact.phone}`} className="btn btn-outline">
              📞 Call Us Now
            </a>
            <p className="cta-box__phone">{BUSINESS.contact.phoneDisplay}</p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials">
        <div className="container">
          <p className="eyebrow">Customer Reviews</p>
          <h2>What Coimbatore Says About Us</h2>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {"⭐".repeat(t.rating)}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION CTA ── */}
      <section className="section location-cta">
        <div className="container location-cta__inner">
          <div>
            <p className="eyebrow">Find Us</p>
            <h2>Visit Our Gandhipuram Store</h2>
            <p>{BUSINESS.address.full}</p>
            <div className="location-cta__actions">
              <a
                href={BUSINESS.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                📍 Get Directions
              </a>
              <a href={`tel:${BUSINESS.contact.phone}`} className="btn btn-outline">
                📞 {BUSINESS.contact.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="location-cta__map">
            <iframe
              title="ZeePrintz Location"
              src="https://maps.google.com/maps?q=Gandhipuram+Coimbatore&output=embed"
              width="100%"
              height="260"
              style={{ border: 0, borderRadius: "var(--radius-lg)" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}