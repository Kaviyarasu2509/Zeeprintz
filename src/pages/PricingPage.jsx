import SEOHead from "../components/ui/SEOHead";
import { BUSINESS, SERVICES } from "../data/businessData";
import "./PricingPage.css";

export default function PricingPage() {
  return (
    <>
      <SEOHead
        title="Printing Prices Coimbatore – Best Rates at ZeePrintz"
        description="Transparent printing prices at ZeePrintz Coimbatore. Visiting cards from ₹199, flex from ₹18/sqft, wedding cards from ₹8. Best and cheapest printing in Coimbatore."
        keywords="printing price coimbatore, cheap printing coimbatore, visiting card price coimbatore, flex banner price coimbatore, affordable printing coimbatore"
        canonical="https://zeeprintz.com/pricing"
      />

      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Transparent Pricing</p>
          <h1>Best Print Prices in Coimbatore</h1>
          <p>No hidden charges. No surprises. What you see is what you pay.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {SERVICES.map((s) => (
              <div key={s.id} className="pricing-card">
                <div className="pricing-card__header">
                  <span className="pricing-card__icon">{s.icon}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <span className="pricing-card__from">{s.price}</span>
                  </div>
                </div>
                <p>{s.desc}</p>
                <a
                  href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi! I need a quote for ${s.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-card__cta"
                >
                  Get Exact Quote →
                </a>
              </div>
            ))}
          </div>

          <div className="pricing-note">
            <h3>💡 Bulk Discount Available!</h3>
            <p>
              Order 1000+ visiting cards? 100+ brochures? Wedding with 500+ cards?
              Contact us for special bulk pricing — we offer the best bulk rates in Coimbatore.
            </p>
            <a
              href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi ZeePrintz! I have a bulk order. Please share pricing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              📲 Ask for Bulk Price
            </a>
          </div>
        </div>
      </section>
    </>
  );
}