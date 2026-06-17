import SEOHead from "../components/ui/SEOHead";
import { BUSINESS, SERVICES } from "../data/businessData";
import "./ServicesPage.css";

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Printing Services in Coimbatore – Visiting Cards, Flex, Wedding Cards"
        description="ZeePrintz Coimbatore offers 50+ printing services: visiting cards, flex banners, brochures, wedding cards, ID cards, t-shirt printing & more. Best prices in Gandhipuram."
        keywords="printing services coimbatore, visiting card printing coimbatore, flex printing coimbatore, wedding card printing coimbatore, t-shirt printing coimbatore, brochure printing coimbatore"
        canonical="https://zeeprintz.com/services"
      />

      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">What We Offer</p>
          <h1>50+ Printing Services in Coimbatore</h1>
          <p>Premium quality prints for businesses, events, and personal needs — all at the best price in Coimbatore.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="services-full-grid">
            {SERVICES.map((s) => (
              <div key={s.id} className="service-full-card">
                <div className="sfc__top">
                  <span className="sfc__icon">{s.icon}</span>
                  {s.popular && <span className="tag tag-accent">Popular</span>}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="sfc__footer">
                  <span className="sfc__price">{s.price}</span>
                  <a
                    href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi! I need ${s.title} printing. Please share details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp sfc__btn"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta-strip">
        <div className="container services-cta-strip__inner">
          <div>
            <h2>Need a Custom Print Job?</h2>
            <p>Can't find what you need? Contact us — we handle all types of custom printing!</p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi ZeePrintz! I have a custom print requirement.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            📲 Chat With Us
          </a>
        </div>
      </section>
    </>
  );
}