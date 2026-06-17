import SEOHead from "../components/ui/SEOHead";
import { BUSINESS } from "../data/businessData";
import "./GalleryPage.css";

const GALLERY_ITEMS = [
  { emoji: "🪪", label: "Premium Visiting Cards", category: "Cards", color: "#1a1a2e" },
  { emoji: "🖼️", label: "Outdoor Flex Banner", category: "Banners", color: "#e63312" },
  { emoji: "📄", label: "Tri-fold Brochure", category: "Brochures", color: "#00416a" },
  { emoji: "💍", label: "Wedding Invitation", category: "Wedding", color: "#8b4a8b" },
  { emoji: "👕", label: "Custom T-Shirts", category: "Apparel", color: "#1a5276" },
  { emoji: "🏷️", label: "Product Labels", category: "Stickers", color: "#1e8449" },
  { emoji: "📅", label: "Wall Calendar 2025", category: "Calendars", color: "#784212" },
  { emoji: "🪪", label: "PVC ID Cards", category: "ID Cards", color: "#154360" },
  { emoji: "📦", label: "Box Packaging", category: "Packaging", color: "#2c3e50" },
];

export default function GalleryPage() {
  return (
    <>
      <SEOHead
        title="Print Gallery – ZeePrintz Coimbatore Work Samples"
        description="See ZeePrintz Coimbatore's work — visiting cards, flex banners, wedding cards, brochures, t-shirt printing. Quality prints by the best printer shop in Gandhipuram."
        keywords="zeeprintz gallery, printing samples coimbatore, visiting card samples, flex banner printing coimbatore, wedding card samples coimbatore"
        canonical="https://zeeprintz.com/gallery"
      />

      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Work</p>
          <h1>Print Gallery</h1>
          <p>A glimpse of the quality we deliver to our Coimbatore customers.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className="gallery-card"
                style={{ "--card-color": item.color }}
              >
                <div className="gallery-card__visual">
                  <span className="gallery-card__emoji">{item.emoji}</span>
                </div>
                <div className="gallery-card__info">
                  <span className="tag tag-paper gallery-card__cat">{item.category}</span>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-cta">
            <h3>Want to See More?</h3>
            <p>Visit our Gandhipuram store or check our Instagram for the latest work!</p>
            <div className="gallery-cta__btns">
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                📸 Instagram Gallery
              </a>
              <a
                href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi ZeePrintz! I'd like to see samples.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                📲 Request Samples
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}