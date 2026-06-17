import SEOHead from "../components/ui/SEOHead";
import { BUSINESS } from "../data/businessData";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About ZeePrintz – Coimbatore's Trusted Printing Shop"
        description="ZeePrintz is Coimbatore's trusted printing shop in Gandhipuram since 2014. Learn about our story, values, and commitment to quality printing."
        keywords="about zeeprintz, coimbatore printing shop history, gandhipuram printer, trusted printing coimbatore"
        canonical="https://zeeprintz.com/about"
      />

      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Story</p>
          <h1>About ZeePrintz Coimbatore</h1>
          <p>10+ years of quality printing in the heart of Gandhipuram.</p>
        </div>
      </div>

      <section className="section">
        <div className="container about-grid">
          <div className="about-text">
            <p className="eyebrow">Who We Are</p>
            <h2>Coimbatore's Trusted Print Studio Since 2014</h2>
            <p>
              ZeePrintz was born from a simple belief: every business deserves high-quality prints
              at an affordable price. Located in the commercial heart of Coimbatore — Gandhipuram —
              we've been serving thousands of customers with precision and passion.
            </p>
            <p>
              From a tiny shop to a full-service print studio, ZeePrintz has grown alongside
              Coimbatore's thriving business community. Today, we serve startups, established
              businesses, event planners, schools, and individuals across the city.
            </p>
            <p>
              Our team of print experts uses the latest digital and offset printing technology to
              deliver vibrant, durable, and precise prints — every single time.
            </p>

            <div className="about-values">
              {[
                ["🎯", "Precision", "Every print is checked for quality before delivery"],
                ["⚡", "Speed", "Fast turnaround — same day for urgent orders"],
                ["🤝", "Trust", "5000+ happy customers in Coimbatore"],
                ["💰", "Value", "Best price guarantee — no compromises on quality"],
              ].map(([icon, title, desc]) => (
                <div key={title} className="about-value">
                  <span>{icon}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-sidebar">
            <div className="about-contact-box">
              <h3>Visit Us Today</h3>
              <div className="acb-item">
                <span>📍</span>
                <address>{BUSINESS.address.full}</address>
              </div>
              <div className="acb-item">
                <span>📞</span>
                <a href={`tel:${BUSINESS.contact.phone}`}>{BUSINESS.contact.phoneDisplay}</a>
              </div>
              <div className="acb-item">
                <span>✉️</span>
                <a href={`mailto:${BUSINESS.contact.email}`}>{BUSINESS.contact.email}</a>
              </div>
              <div className="acb-item">
                <span>🕐</span>
                <div>
                  <span>Mon–Fri: {BUSINESS.hours.weekdays}</span>
                  <span>Sat: {BUSINESS.hours.saturday}</span>
                </div>
              </div>
              <a
                href={`https://wa.me/${BUSINESS.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: "100%", justifyContent: "center", marginTop: "8px" }}
              >
                📲 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}