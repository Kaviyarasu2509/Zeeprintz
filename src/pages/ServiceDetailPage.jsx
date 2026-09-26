import { Link } from "react-router-dom";
import SEOHead from "../components/ui/SEOHead";
import { BUSINESS, SITE_URL } from "../data/businessData";
import { SERVICE_DETAILS, servicePath } from "../data/serviceDetails";
import "./ServiceDetailPage.css";

export default function ServiceDetailPage({ service }) {
  const url = `${SITE_URL}${servicePath(service.id)}`;
  const quote = `https://wa.me/${BUSINESS.contact.whatsapp}?text=${encodeURIComponent(`Hi ZeePrintz! I need ${service.title}. Quantity: ; Size: ; Deadline: . Please share options and a quote.`)}`;
  return <>
    <SEOHead title={`${service.title} in Coimbatore`} description={service.intro} canonical={url} schema={[
      { "@context": "https://schema.org", "@type": "Service", name: `${service.title} in Coimbatore`, url, description: service.intro, provider: { "@id": `${SITE_URL}/#localbusiness` }, areaServed: { "@type": "City", name: "Coimbatore" } },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: service.title, item: url }
      ] }
    ]} />
    <header className="page-hero"><div className="container">
      <nav aria-label="Breadcrumb"><Link to="/">Home</Link> / <Link to="/services">Services</Link> / {service.title}</nav>
      <h1>{service.title} in Coimbatore</h1><p>{service.intro}</p>
      <a className="btn btn-primary" href={quote} target="_blank" rel="noopener noreferrer">Get a printing quote</a>
    </div></header>
    <section className="section"><div className="container service-detail-grid">
      <div><p className="eyebrow">Made for your requirements</p><h2>Choose your print options</h2><ul>{service.options.map(option => <li key={option}>{option}</li>)}</ul><h2>Choosing the right specification</h2><p>{service.advice}</p></div>
      <div><h2>What to send for a quote</h2><p>{service.prepare}</p><p>Pricing depends on quantity, material, size, finishing and artwork requirements. Confirm the final quote and pickup date before placing your order.</p><a href={quote} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">Discuss on WhatsApp</a></div>
    </div></section>
    <section className="section service-detail-faq"><div className="container"><h2>Common questions</h2>
      <details><summary>{service.question}</summary><p>{service.answer}</p></details>
      <details><summary>Where can I collect my order?</summary><p>{BUSINESS.address.full}. Confirm your pickup time before travelling.</p></details>
      <details><summary>Can you meet an urgent deadline?</summary><p>Send your artwork, quantity and required date. Availability depends on materials, file readiness and the production schedule. Please get confirmation before ordering.</p></details>
    </div></section>
    <section className="section"><div className="container service-detail-grid"><div><h2>Visit ZeePrintz in Gandhipuram</h2><address>{BUSINESS.address.full}</address><p><a href={`tel:+91${BUSINESS.contact.phone}`}>{BUSINESS.contact.phoneDisplay}</a></p><p><a href={`mailto:${BUSINESS.contact.email}`}>{BUSINESS.contact.email}</a></p><a href={BUSINESS.googleMapsLink} target="_blank" rel="noopener noreferrer">Get directions to the shop</a></div><div><h2>More printing services</h2><ul>{SERVICE_DETAILS.filter(item => item.id !== service.id).map(item => <li key={item.id}><Link to={servicePath(item.id)}>{item.title}</Link></li>)}</ul><Link to="/services">View all printing services</Link></div></div></section>
  </>;
}
