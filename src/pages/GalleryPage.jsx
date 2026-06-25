import SEOHead from "../components/ui/SEOHead";
import { BUSINESS, SITE_URL } from "../data/businessData";
import "./GalleryPage.css";

const GALLERY_ITEMS = [
  { mark: "VC", label: "Premium Visiting Cards", category: "Cards", color: "#1a1a2e" },
  { mark: "FB", label: "Outdoor Flex Banner", category: "Banners", color: "#e63312" },
  { mark: "BR", label: "Tri-fold Brochure", category: "Brochures", color: "#00416a" },
  { mark: "WC", label: "Wedding Invitation", category: "Wedding", color: "#8b4a8b" },
  { mark: "TS", label: "Custom T-Shirts", category: "Apparel", color: "#1a5276" },
  { mark: "SL", label: "Product Labels", category: "Stickers", color: "#1e8449" },
  { mark: "CL", label: "Wall Calendar", category: "Calendars", color: "#784212" },
  { mark: "ID", label: "PVC ID Cards", category: "ID Cards", color: "#154360" },
  { mark: "PK", label: "Box Packaging", category: "Packaging", color: "#2c3e50" },
];

export default function GalleryPage() {
  return (
    <>
      <SEOHead
        title="Print Gallery - ZeePrintz Coimbatore Work Samples"
        description="View ZeePrintz Coimbatore printing samples: visiting cards, flex banners, wedding cards, brochures, stickers, t-shirt printing and packaging work."
        keywords="zeeprintz gallery, printing samples coimbatore, visiting card samples coimbatore, flex banner printing coimbatore, wedding card samples coimbatore"
        canonical={`${SITE_URL}/gallery`}
      />

      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Work</p>
          <h1>Print Gallery</h1>
          <p>A glimpse of the print quality we deliver to Coimbatore customers.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY_ITEMS.map((item) => (
              <article
                key={item.label}
                className="gallery-card"
                style={{ "--card-color": item.color }}
              >
                <div className="gallery-card__visual">
                  <span className="gallery-card__emoji">{item.mark}</span>
                </div>
                <div className="gallery-card__info">
                  <span className="tag tag-paper gallery-card__cat">{item.category}</span>
                  <p>{item.label}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="gallery-cta">
            <h2>Want to See More Samples?</h2>
            <p>Visit our Gandhipuram store or message us for recent print samples.</p>
            <div className="gallery-cta__btns">
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Instagram Gallery
              </a>
              <a
                href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi ZeePrintz! I'd like to see print samples.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Request Samples
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
