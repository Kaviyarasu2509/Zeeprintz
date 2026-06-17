import { Helmet } from "react-helmet-async";
import { BUSINESS } from "../../data/businessData";

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
}) {
  const fullTitle = title
    ? `${title} | ZeePrintz Coimbatore`
    : "ZeePrintz Coimbatore – Best Printing Shop | Visiting Cards, Flex, Banners";

  const defaultDesc =
    "ZeePrintz is Coimbatore's top printing shop in Gandhipuram. Visiting cards, flex banners, brochures, wedding cards, t-shirt printing & more. Fast delivery, best price. Call +91 75989 51141.";

  const defaultKeywords =
    "printer shop coimbatore, printing coimbatore, visiting card printing coimbatore, flex printing coimbatore, banner printing coimbatore, wedding card printing coimbatore, brochure printing coimbatore, zeeprintz, gandhipuram printing shop";

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    description: description || defaultDesc,
    telephone: BUSINESS.contact.phone,
    email: BUSINESS.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS.address.line1}, ${BUSINESS.address.line2}`,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.pincode,
      addressCountry: "IN",
    },
    openingHours: ["Mo-Fr 09:00-20:00", "Sa 09:00-18:00"],
    priceRange: "₹",
    url: "https://zeeprintz.com",
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="ZeePrintz Coimbatore" />
      <link rel="canonical" href={canonical || "https://zeeprintz.com"} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || "https://zeeprintz.com"} />
      <meta property="og:locale" content="en_IN" />

      {/* Schema.org Local Business */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}