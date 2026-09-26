import SEOHead from "../components/ui/SEOHead";
import { Link } from "react-router-dom";
import { servicePath } from "../data/serviceDetails";
import { BUSINESS, SERVICES, SITE_URL } from "../data/businessData";
import { PRINT_IMAGES } from "../data/imageLibrary";
import "./ServicesPage.css";

const SERVICE_IMAGE_BY_ID = {
  "visiting-cards": PRINT_IMAGES.businessCards,
  "letter-pads": PRINT_IMAGES.blankCards,
  "bill-books": PRINT_IMAGES.paperStack,
  vouchers: PRINT_IMAGES.cardMockup,
  brochures: PRINT_IMAGES.flyerProduction,
  "envelope-covers": PRINT_IMAGES.simpleCards,
  flyers: PRINT_IMAGES.proofing,
  invitations: PRINT_IMAGES.simpleCards,
  stickers: PRINT_IMAGES.cardMockup,
  "wall-posters": PRINT_IMAGES.darkroomPrint,
  "id-cards": PRINT_IMAGES.blankCards,
  calendars: PRINT_IMAGES.paperStack,
  diaries: PRINT_IMAGES.letterpress,
  "seal-stamp": PRINT_IMAGES.letterpress,
  certificate: PRINT_IMAGES.printPress,
  "vinyl-flex": PRINT_IMAGES.signage,
  sunpack: PRINT_IMAGES.printStudio,
  "typing-translation": PRINT_IMAGES.proofing,
};

const SERVICE_SPOTLIGHTS = [
  ["Business Essentials", "Visiting cards, letter pads, bill books, envelopes and certificates for daily office use.", PRINT_IMAGES.businessCards],
  ["Marketing & Retail", "Brochures, flyers, posters, stickers, sunpack boards and flex banners for local visibility.", PRINT_IMAGES.signage],
  ["Events & Custom", "Invitations, IDs, calendars, diaries, stamps and custom merchandise for every occasion.", PRINT_IMAGES.printStudio],
];

const SERVICE_FLOW = [
  ["Send File", "Share artwork, quantity, size and deadline on WhatsApp."],
  ["Choose Finish", "Pick paper, lamination, board, vinyl, binding or custom finish."],
  ["Proof & Print", "We check clarity, color, alignment and production readiness."],
  ["Pickup", "Collect from Gandhipuram or ask for local delivery support."],
];

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
        title="Printing Services in Coimbatore - Cards, Flex, Stickers, Stamps & More"
        description="ZeePrintz Coimbatore offers visiting cards, letter pads, bill books, brochures, invitations, stickers, ID cards, calendars, seals & stamps, vinyl & flex, sunpack boards, and typing & translation services from Gandhipuram."
        keywords="printing services coimbatore, visiting card printing coimbatore, bill book printing coimbatore, flex printing coimbatore, invitation card printing coimbatore, rubber stamp coimbatore, sunpack board printing coimbatore, typing services coimbatore"
        canonical={`${SITE_URL}/services`}
        schema={[servicesSchema]}
      />

      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">What We Offer</p>
          <h1>18+ Printing Services in Coimbatore</h1>
          <p>
            Premium print quality for businesses, shops, colleges, events, and
            personal orders from our Gandhipuram print studio.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="services-intro-split">
            <div>
              <p className="eyebrow">Complete Print Menu</p>
              <h2>Everything your business needs, from one Coimbatore print studio.</h2>
            </div>
            <p>
              Browse the full range below. Every service can be customized by
              size, paper, finish, quantity and urgency.
            </p>
          </div>

          <div className="service-spotlight-grid">
            {SERVICE_SPOTLIGHTS.map(([title, text, image]) => (
              <article key={title} className="service-spotlight-card">
                <img src={image} alt={title} loading="lazy" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="services-full-grid">
            {SERVICES.map((s) => (
              <article key={s.id} className="service-full-card">
                <img
                  className="sfc__image"
                  src={SERVICE_IMAGE_BY_ID[s.id] || PRINT_IMAGES.printPress}
                  alt={`${s.title} printing service in Coimbatore`}
                  loading="lazy"
                />
                <div className="sfc__top">
                  <span className="sfc__icon" aria-hidden="true">{s.icon}</span>
                  {s.popular && <span className="tag tag-accent">Popular</span>}
                </div>
                <h2>{s.title} in Coimbatore</h2>
                <p>{s.desc}</p>
                {servicePath(s.id) !== "/services" && <Link to={servicePath(s.id)}>Explore {s.title.toLowerCase()} options</Link>}
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

      <section className="service-flow-section">
        <div className="container">
          <div className="services-intro-split services-intro-split--light">
            <div>
              <p className="eyebrow">Order Flow</p>
              <h2>Simple process, premium output.</h2>
            </div>
            <p>From file check to pickup, the order stays clear and fast.</p>
          </div>
          <div className="service-flow-grid">
            {SERVICE_FLOW.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
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
