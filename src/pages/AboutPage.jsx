import SEOHead from "../components/ui/SEOHead";
import { BUSINESS, SITE_URL } from "../data/businessData";
import { PRINT_IMAGES } from "../data/imageLibrary";
import "./AboutPage.css";

const TIMELINE = [
  ["2014", "Started serving local business print needs from Coimbatore."],
  ["2018", "Expanded into signage, brochures, stickers and corporate orders."],
  ["2022", "Built a faster WhatsApp-first quote and order workflow."],
  ["2026", "Premium print studio experience for brands, shops and events."],
];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About ZeePrintz - Trusted Printing Shop in Coimbatore"
        description="ZeePrintz is a trusted printing shop in Gandhipuram, Coimbatore, serving local businesses, events, colleges and families with quality printing since 2014."
        keywords="about zeeprintz, coimbatore printing shop, gandhipuram printer, trusted printing shop coimbatore"
        canonical={`${SITE_URL}/about`}
      />

      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Our Story</p>
          <h1>About ZeePrintz Coimbatore</h1>
          <p>10+ years of quality printing in the heart of Gandhipuram.</p>
        </div>
      </div>

      <section className="section">
        <div className="container about-grid">
          <div className="about-text">
            <p className="eyebrow">Who We Are</p>
            <h2>Coimbatore's Trusted Print Studio Since 2014</h2>
            <p>
              ZeePrintz was built on a simple idea: every business deserves
              sharp, reliable prints at a fair price. From our Gandhipuram print
              studio, we serve customers across Coimbatore with business,
              wedding, event, retail, and promotional printing.
            </p>
            <p>
              Our team works with startups, established companies, shops,
              schools, colleges, agencies, and families who need quick
              communication, practical guidance, and clean print finishing.
            </p>
            <p>
              We focus on file checking, color clarity, material selection,
              cutting, finishing, and delivery timelines so every order feels
              simple from quote to pickup.
            </p>

            <div className="about-values">
              {[
                ["Precision", "Every print is checked before delivery"],
                ["Speed", "Fast turnaround for urgent orders"],
                ["Trust", "5000+ happy customers in Coimbatore"],
                ["Value", "Fair pricing without cutting quality"],
              ].map(([title, desc]) => (
                <div key={title} className="about-value">
                  <span>ZP</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-sidebar">
            <div className="about-contact-box">
              <h3>Visit Us Today</h3>
              <div className="acb-item">
                <span>LOC</span>
                <address>{BUSINESS.address.full}</address>
              </div>
              <div className="acb-item">
                <span>PH</span>
                <a href={`tel:${BUSINESS.contact.phone}`}>{BUSINESS.contact.phoneDisplay}</a>
              </div>
              <div className="acb-item">
                <span>EM</span>
                <a href={`mailto:${BUSINESS.contact.email}`}>{BUSINESS.contact.email}</a>
              </div>
              <div className="acb-item">
                <span>HR</span>
                <div>
                  <span>Mon - Fri: {BUSINESS.hours.weekdays}</span>
                  <span>Sat: {BUSINESS.hours.saturday}</span>
                </div>
              </div>
              <a
                href={`https://wa.me/${BUSINESS.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: "100%", justifyContent: "center", marginTop: "8px" }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-studio-section">
        <div className="container about-studio">
          <img src={PRINT_IMAGES.printStudio} alt="ZeePrintz print studio" loading="lazy" />
          <div>
            <p className="eyebrow">Inside the Studio</p>
            <h2>Every order moves through file check, material choice, print, finish and packing.</h2>
            <p>
              The goal is simple: make printing less confusing for local
              businesses. You bring the idea, we help turn it into something
              that is ready to hand out, display, gift or sell.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-timeline-section">
        <div className="container">
          <div className="about-timeline-title">
            <p className="eyebrow">Growth</p>
            <h2>From a local print counter to a full print production partner.</h2>
          </div>
          <div className="about-timeline">
            {TIMELINE.map(([year, text]) => (
              <article key={year}>
                <span>{year}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
