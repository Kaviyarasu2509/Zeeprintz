import SEOHead from "../components/ui/SEOHead";
import { BUSINESS, SITE_URL } from "../data/businessData";
import { PRINT_IMAGES } from "../data/imageLibrary";
import "./GalleryPage.css";

// ⚠️ IMPORTANT: Replace each `image` path below with a REAL photo of your
// actual printed work. Save photos in /public/images/gallery/ and point to
// them here. Real photos are what get you found on Google Images —
// placeholder icons/colors have zero image-search value.
//
// Tips for the photos themselves:
//  - Well-lit, close-up shots of the finished print (not the machine)
//  - File name should describe the item, e.g. visiting-card-coimbatore-01.jpg
//    (Google reads file names too, not just alt text)
//  - Compress before upload (use squoosh.app) so page stays fast
const GALLERY_ITEMS = [
  {
    id: "visiting-card-matte",
    image: PRINT_IMAGES.businessCards,
    alt: "Premium matte finish visiting card printing sample in Coimbatore",
    label: "Matte Visiting Cards",
    category: "Visiting Cards",
  },
  {
    id: "bill-book-sample",
    image: PRINT_IMAGES.paperStack,
    alt: "Custom duplicate bill book printing sample Coimbatore",
    label: "Bill Books",
    category: "Bill Books",
  },
  {
    id: "brochure-trifold",
    image: PRINT_IMAGES.flyerProduction,
    alt: "Tri-fold brochure printing sample for Coimbatore business",
    label: "Tri-fold Brochure",
    category: "Brochures",
  },
  {
    id: "invitation-card",
    image: PRINT_IMAGES.simpleCards,
    alt: "Wedding invitation card printing sample Coimbatore",
    label: "Invitation Cards",
    category: "Invitations",
  },
  {
    id: "sticker-labels",
    image: PRINT_IMAGES.cardMockup,
    alt: "Custom product sticker and label printing sample Coimbatore",
    label: "Stickers & Labels",
    category: "Stickers",
  },
  {
    id: "wall-poster",
    image: PRINT_IMAGES.proofing,
    alt: "Large format wall poster printing sample Coimbatore",
    label: "Wall Poster",
    category: "Wall Posters",
  },
  {
    id: "id-card-pvc",
    image: PRINT_IMAGES.blankCards,
    alt: "PVC ID card printing sample for college and office Coimbatore",
    label: "PVC ID Cards",
    category: "ID Cards",
  },
  {
    id: "calendar-desk",
    image: PRINT_IMAGES.darkroomPrint,
    alt: "Corporate desk calendar printing sample Coimbatore",
    label: "Desk Calendar",
    category: "Calendars",
  },
  {
    id: "rubber-stamp",
    image: PRINT_IMAGES.letterpress,
    alt: "Self-inking rubber stamp and company seal sample Coimbatore",
    label: "Seal & Stamp",
    category: "Seal & Stamp",
  },
  {
    id: "vinyl-flex-banner",
    image: PRINT_IMAGES.signage,
    alt: "Outdoor flex banner printing sample Coimbatore",
    label: "Vinyl & Flex Banner",
    category: "Vinyl & Flex",
  },
  {
    id: "sunpack-board",
    image: PRINT_IMAGES.printStudio,
    alt: "Sunpack shop name board printing sample Coimbatore",
    label: "Sunpack Board",
    category: "Sunpack",
  },
  {
    id: "certificate-print",
    image: PRINT_IMAGES.printPress,
    alt: "College certificate printing sample Coimbatore",
    label: "Certificate Printing",
    category: "Certificate",
  },
];

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "ZeePrintz Print Gallery - Coimbatore",
  url: `${SITE_URL}/gallery`,
  associatedMedia: GALLERY_ITEMS.map((item) => ({
    "@type": "ImageObject",
    contentUrl: item.image.startsWith("http") ? item.image : `${SITE_URL}${item.image}`,
    name: item.label,
    description: item.alt,
  })),
};

export default function GalleryPage() {
  return (
    <>
      <SEOHead
        title="Print Gallery - ZeePrintz Coimbatore Work Samples"
        description="View real ZeePrintz Coimbatore printing samples: visiting cards, brochures, invitations, stickers, ID cards, calendars, seals, flex banners, sunpack boards and certificates."
        keywords="zeeprintz gallery, printing samples coimbatore, visiting card samples coimbatore, flex banner printing coimbatore, invitation card samples coimbatore"
        canonical={`${SITE_URL}/gallery`}
        schema={[gallerySchema]}
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
          <div className="work-editorial">
            <div>
              <p className="eyebrow">Selected Print Work</p>
              <h2>Cards, signs, paper goods and business print samples in a larger portfolio layout.</h2>
            </div>
            <img src={PRINT_IMAGES.printStudio} alt="ZeePrintz print studio portfolio" loading="lazy" />
          </div>

          <div className="gallery-grid">
            {GALLERY_ITEMS.map((item) => (
              <article key={item.id} className="gallery-card">
                <div className="gallery-card__visual">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    width="400"
                    height="400"
                  />
                </div>
                <div className="gallery-card__info">
                  <span className="tag tag-paper gallery-card__cat">
                    {item.category}
                  </span>
                  <p>{item.label}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="work-process-band">
            {["Business Identity", "Retail Visibility", "Events", "Bulk Orders"].map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                <p>Printed with clean finishing and fast local support.</p>
              </div>
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
