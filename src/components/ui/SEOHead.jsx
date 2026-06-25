import { Helmet } from "react-helmet-async";
import { BUSINESS, SERVICES, SITE_URL } from "../../data/businessData";

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  schema = [],
}) {
  const fullTitle = title
    ? `${title} | ZeePrintz Coimbatore`
    : "ZeePrintz Coimbatore - Best Printing Shop for Cards, Flex & Banners";

  const pageUrl = canonical || SITE_URL;
  const defaultDesc =
    "ZeePrintz is a top printing shop in Gandhipuram, Coimbatore for visiting cards, flex banners, brochures, wedding cards, stickers, ID cards and t-shirt printing.";

  const defaultKeywords =
    "printing shop coimbatore, printer shop coimbatore, visiting card printing coimbatore, flex printing coimbatore, banner printing coimbatore, wedding card printing coimbatore, brochure printing coimbatore, zeeprintz, gandhipuram printing shop";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    image: `${SITE_URL}/logo512.png`,
    description: description || defaultDesc,
    telephone: BUSINESS.contact.phoneDisplay,
    email: BUSINESS.contact.email,
    url: SITE_URL,
    priceRange: "Rs",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS.address.line1}, ${BUSINESS.address.line2}`,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Coimbatore",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Printing Services in Coimbatore",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.desc,
          areaServed: "Coimbatore",
        },
      })),
    },
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
  };

  const schemas = [localBusinessSchema, ...schema];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="author" content="ZeePrintz Coimbatore" />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={`${SITE_URL}/logo512.png`} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={`${SITE_URL}/logo512.png`} />

      <script type="application/ld+json">{JSON.stringify(schemas)}</script>
    </Helmet>
  );
}
