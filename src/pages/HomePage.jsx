import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/ui/SEOHead";
import {
  BUSINESS,
  FAQS,
  PROCESS_STEPS,
  SERVICE_AREAS,
  SERVICES,
  SITE_URL,
  STATS,
  TESTIMONIALS,
} from "../data/businessData";
import "./HomePage.css";

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const animationStyle = (index, step = 90) => ({
  "--aos-delay": `${index * step}ms`,
});

export default function HomePage() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll("[data-aos]");

    if (!("IntersectionObserver" in window)) {
      animatedItems.forEach((item) => item.classList.add("aos-animate"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    animatedItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEOHead
        title="Best Printing Shop in Coimbatore - Visiting Cards, Flex & Banners"
        description="ZeePrintz is a trusted printing shop in Gandhipuram, Coimbatore for visiting cards, flex banners, wedding cards, brochures, stickers, ID cards and t-shirt printing. Fast quotes on WhatsApp."
        keywords="best printing shop in coimbatore, printer shop coimbatore, visiting card printing coimbatore, flex printing coimbatore, banner printing coimbatore, gandhipuram printing shop"
        canonical={SITE_URL}
        schema={[homeFaqSchema]}
      />

      <section className="hero">
        <div className="hero__bg">
          <div className="hero__ink-drop hero__ink-drop--1" />
          <div className="hero__ink-drop hero__ink-drop--2" />
          <div className="hero__ink-drop hero__ink-drop--3" />
        </div>
        <div className="container hero__content">
          <div className="hero__text">
            <p className="eyebrow hero__eyebrow">Gandhipuram, Coimbatore</p>
            <h1 className="hero__heading">
              <span className="hero__heading-line">Printing Shop</span>
              <span className="hero__heading-line">in Coimbatore</span>
              <span className="hero__heading-line hero__heading-accent">
                for Fast, Premium Prints
              </span>
            </h1>
            <p className="hero__sub hero__intro">
              ZeePrintz prints visiting cards, flex banners, wedding cards,
              brochures, stickers, ID cards, calendars, and custom t-shirts with
              reliable quality and quick local delivery.
            </p>
            <div className="hero__actions hero__action-anim">
              <a
                href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi ZeePrintz! I want to place a printing order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Order on WhatsApp
              </a>
              <Link to="/services" className="btn btn-outline">
                View Services
              </Link>
            </div>
            <div className="hero__trust hero__trust-anim">
              <span>Rated 5 stars by local customers</span>
              <span className="hero__trust-sep">|</span>
              <span>10+ years in Coimbatore</span>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__card hero__card--main">
              <div className="hcard__icon">50+</div>
              <div className="hcard__text">
                <strong>Print Services</strong>
                <span>All under one roof</span>
              </div>
            </div>
            <div className="hero__card hero__card--delivery">
              <div className="hcard__icon">24h</div>
              <div className="hcard__text">
                <strong>Fast Turnaround</strong>
                <span>For urgent jobs</span>
              </div>
            </div>
            <div className="hero__card hero__card--price">
              <div className="hcard__icon">Rs</div>
              <div className="hcard__text">
                <strong>Best Price</strong>
                <span>Clear quotes</span>
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
              <div className="mockup__tshirt">CUSTOM TEE</div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-bar" aria-label="ZeePrintz highlights">
        <div className="container stats-bar__grid">
          {STATS.map((s, index) => (
            <div
              key={s.label}
              className="stat-item"
              data-aos="zoom-in"
              style={animationStyle(index, 70)}
            >
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <p className="eyebrow" data-aos="fade-up">Popular Printing Services</p>
          <h2 data-aos="fade-up" style={animationStyle(1)}>Print Services in Coimbatore</h2>
          <p className="section-sub" data-aos="fade-up" style={animationStyle(2)}>
            Get business printing, event printing, wedding printing, retail
            branding, and promotional materials from one local print studio in
            Gandhipuram.
          </p>
          <div className="services-grid">
            {SERVICES.filter((s) => s.popular).map((s, index) => (
              <Link
                to="/services"
                key={s.id}
                className="service-card"
                data-aos="fade-up"
                style={animationStyle(index)}
              >
                {s.popular && <span className="tag tag-accent service-card__badge">Popular</span>}
                <div className="service-card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-card__price">{s.price}</span>
              </Link>
            ))}
          </div>
          <div className="services-preview__cta" data-aos="fade-up">
            <Link to="/services" className="btn btn-outline">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section why-us">
        <div className="container why-us__inner">
          <div className="why-us__text">
            <p className="eyebrow" data-aos="fade-right">Why ZeePrintz?</p>
            <h2 data-aos="fade-right" style={animationStyle(1)}>
              Coimbatore's Trusted Print Studio
            </h2>
            <p data-aos="fade-right" style={animationStyle(2)}>
              Located on Cross Cut Road in Gandhipuram, ZeePrintz helps
              Coimbatore businesses, colleges, shops, event planners, and
              families print clearly, quickly, and affordably.
            </p>
            <ul className="why-list">
              {[
                ["Fast Delivery", "Urgent orders handled with practical timelines"],
                ["Premium Quality", "Sharp colors, clean cutting, durable materials"],
                ["Clear Pricing", "Quick quotes with options for your budget"],
                ["WhatsApp Orders", "Send files and requirements instantly"],
                ["Bulk Discounts", "Better pricing for large quantities"],
                ["Local Support", "Easy pickup from Gandhipuram"],
              ].map(([title, sub], index) => (
                <li
                  key={title}
                  className="why-item"
                  data-aos="fade-right"
                  style={animationStyle(index, 65)}
                >
                  <span className="why-item__icon">ZP</span>
                  <div>
                    <strong>{title}</strong>
                    <span>{sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="why-us__cta-box" data-aos="zoom-in">
            <h3>Need a Print Quote?</h3>
            <p>Send your design, quantity, size, and deadline on WhatsApp.</p>
            <a
              href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi ZeePrintz! I need a quote for printing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Get Instant Quote
            </a>
            <a href={`tel:${BUSINESS.contact.phone}`} className="btn btn-outline">
              Call {BUSINESS.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <p className="eyebrow" data-aos="fade-up">Simple Ordering</p>
          <h2 data-aos="fade-up" style={animationStyle(1)}>How Printing Orders Work</h2>
          <div className="process-grid">
            {PROCESS_STEPS.map((step, index) => (
              <div
                className="process-card"
                key={step.title}
                data-aos="flip-up"
                style={animationStyle(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section local-seo">
        <div className="container local-seo__inner">
          <div>
            <p className="eyebrow" data-aos="fade-right">Local Printing Near You</p>
            <h2 data-aos="fade-right" style={animationStyle(1)}>
              Printing Shop Near Gandhipuram, Cross Cut Road
            </h2>
            <p data-aos="fade-right" style={animationStyle(2)}>
              ZeePrintz serves customers across central Coimbatore, including
              shops, offices, colleges, agencies, and event teams who need
              dependable printing with quick communication.
            </p>
          </div>
          <div className="area-list" aria-label="Service areas in Coimbatore">
            {SERVICE_AREAS.map((area, index) => (
              <span key={area} data-aos="zoom-in" style={animationStyle(index, 45)}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <p className="eyebrow" data-aos="fade-up">Customer Reviews</p>
          <h2 data-aos="fade-up" style={animationStyle(1)}>What Coimbatore Customers Say</h2>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, index) => (
              <div
                key={t.name}
                className="testimonial-card"
                data-aos="fade-up"
                style={animationStyle(index)}
              >
                <div className="testimonial-card__stars" aria-label={`${t.rating} star rating`}>
                  {"★".repeat(t.rating)}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name.charAt(0)}</div>
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

      <section className="section faq-section">
        <div className="container">
          <p className="eyebrow" data-aos="fade-up">Printing FAQ</p>
          <h2 data-aos="fade-up" style={animationStyle(1)}>Common Questions</h2>
          <div className="faq-list">
            {FAQS.map((faq, index) => (
              <article
                className="faq-item"
                key={faq.question}
                data-aos="fade-up"
                style={animationStyle(index)}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section location-cta">
        <div className="container location-cta__inner">
          <div>
            <p className="eyebrow" data-aos="fade-right">Visit ZeePrintz</p>
            <h2 data-aos="fade-right" style={animationStyle(1)}>
              Printing Shop in Gandhipuram, Coimbatore
            </h2>
            <p data-aos="fade-right" style={animationStyle(2)}>{BUSINESS.address.full}</p>
            <div className="location-cta__actions" data-aos="fade-right" style={animationStyle(3)}>
              <a
                href={BUSINESS.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get Directions
              </a>
              <a href={`tel:${BUSINESS.contact.phone}`} className="btn btn-outline">
                {BUSINESS.contact.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="location-cta__map" data-aos="zoom-in">
            <iframe
              title="ZeePrintz Location"
              src={BUSINESS.mapEmbed}
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
