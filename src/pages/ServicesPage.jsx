import SEOHead from "../components/ui/SEOHead";
import { BUSINESS, SERVICES, SITE_URL } from "../data/businessData";
import "./ServicesPage.css";

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Printing Services in Coimbatore",
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.desc,
      provider: {
        "@type": "LocalBusiness",
        name: "ZeePrintz",
        telephone: BUSINESS.contact.phoneDisplay,
      },
      areaServed: "Coimbatore",
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Printing Services in Coimbatore - Cards, Flex, Stickers & T-Shirts"
        description="Explore ZeePrintz printing services in Coimbatore: visiting cards, flex banners, brochures, wedding cards, stickers, ID cards, calendars and t-shirt printing from Gandhipuram."
        keywords="printing services coimbatore, visiting card printing coimbatore, flex printing coimbatore, wedding card printing coimbatore, t-shirt printing coimbatore, sticker printing coimbatore"
        canonical={`${SITE_URL}/services`}
        schema={[servicesSchema]}
      />

      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">What We Offer</p>
          <h1>50+ Printing Services in Coimbatore</h1>
          <p>
            Premium print quality for businesses, shops, colleges, events, and
            personal orders from our Gandhipuram print studio.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="services-full-grid">
            {SERVICES.map((s) => (
              <article key={s.id} className="service-full-card">
                <div className="sfc__top">
                  <span className="sfc__icon" aria-hidden="true">{s.icon}</span>
                  {s.popular && <span className="tag tag-accent">Popular</span>}
                </div>
                <h2>{s.title} in Coimbatore</h2>
                <p>{s.desc}</p>
                <p className="sfc__keyword">{s.keywords}</p>
                <div className="sfc__footer">
                  <span className="sfc__price">{s.price}</span>
                  <a
                    href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi ZeePrintz! I need ${encodeURIComponent(s.title)} printing in Coimbatore. Please share details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp sfc__btn"
                  >
                    Order Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta-strip">
        <div className="container services-cta-strip__inner">
          <div>
            <h2>Need a Custom Print Job?</h2>
            <p>
              Send the size, quantity, material, and deadline. ZeePrintz can
              quote most custom printing orders quickly on WhatsApp.
            </p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi ZeePrintz! I have a custom print requirement.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Chat With Us
          </a>
        </div>
      </section>
    </>
  );
}
