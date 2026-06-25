import SEOHead from "../components/ui/SEOHead";
import { BUSINESS, SERVICES, SITE_URL } from "../data/businessData";
import "./PricingPage.css";

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "ZeePrintz Printing Prices in Coimbatore",
  itemListElement: SERVICES.map((service) => ({
    "@type": "Offer",
    name: service.title,
    description: service.desc,
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      description: service.price,
    },
    availability: "https://schema.org/InStock",
  })),
};

export default function PricingPage() {
  return (
    <>
      <SEOHead
        title="Printing Prices in Coimbatore - Visiting Card & Flex Rates"
        description="Check starting prices at ZeePrintz Coimbatore: visiting cards from Rs.199, flex banners from Rs.18 per sqft, wedding cards from Rs.8 and custom print quotes on WhatsApp."
        keywords="printing price coimbatore, visiting card price coimbatore, flex banner price coimbatore, cheap printing coimbatore, affordable printing coimbatore"
        canonical={`${SITE_URL}/pricing`}
        schema={[pricingSchema]}
      />

      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Transparent Pricing</p>
          <h1>Printing Prices in Coimbatore</h1>
          <p>
            Starting rates for popular print jobs. Final price depends on
            quantity, size, paper, finish, and delivery deadline.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {SERVICES.map((s) => (
              <article key={s.id} className="pricing-card">
                <div className="pricing-card__header">
                  <span className="pricing-card__icon" aria-hidden="true">{s.icon}</span>
                  <div>
                    <h2>{s.title}</h2>
                    <span className="pricing-card__from">{s.price}</span>
                  </div>
                </div>
                <p>{s.desc}</p>
                <a
                  href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi ZeePrintz! I need a quote for ${encodeURIComponent(s.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-card__cta"
                >
                  Get Exact Quote
                </a>
              </article>
            ))}
          </div>

          <div className="pricing-note">
            <h2>Bulk Discount Available</h2>
            <p>
              Ordering 1000+ visiting cards, 100+ brochures, large flex banners,
              corporate kits, or wedding cards in bulk? Contact ZeePrintz for
              special bulk pricing in Coimbatore.
            </p>
            <a
              href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi ZeePrintz! I have a bulk printing order. Please share pricing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ask for Bulk Price
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
