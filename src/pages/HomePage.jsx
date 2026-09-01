import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Link } from "react-router-dom";
import SplitType from "split-type";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SEOHead from "../components/ui/SEOHead";
import loaderLogo from "../assets/images/zeeprintz-logo-loader.png";
import { PRINT_IMAGES } from "../data/imageLibrary";
import {
  BUSINESS,
  FAQS,
  SERVICE_AREAS,
  SERVICES,
  SITE_URL,
  TESTIMONIALS,
} from "../data/businessData";
import "./HomePage.css";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const SERVICE_ROWS = [
  ["01", "Digital Printing", "Sharp short-run prints for business, retail, events.", PRINT_IMAGES.printPress],
  ["02", "Business Cards", "Matte, gloss, textured and premium visiting cards.", PRINT_IMAGES.businessCards],
  ["03", "Signage", "Flex, boards, retail signs and local brand visibility.", PRINT_IMAGES.signage],
  ["04", "Custom Merchandise", "T-shirts, mugs, stickers and branded products.", PRINT_IMAGES.tshirtPress],
  ["05", "Branding", "Print-ready identity systems for growing businesses.", PRINT_IMAGES.printStudio],
  ["06", "Brochures & Flyers", "Sales material, menus, leaflets and event handouts.", PRINT_IMAGES.flyerProduction],
];

const PORTFOLIO = [
  ["Business Cards", "Premium stationery", "BC", "portfolio-card--large", PRINT_IMAGES.businessCards],
  ["Branding", "Identity system", "BR", "portfolio-card--tall", PRINT_IMAGES.printStudio],
  ["Packaging", "Retail packaging", "PK", "portfolio-card--wide", PRINT_IMAGES.paperStack],
  ["Signage", "Outdoor branding", "SG", "", PRINT_IMAGES.signage],
  ["Custom Printing", "Merchandise", "CP", "portfolio-card--tall", PRINT_IMAGES.mugPress],
  ["Brochures", "Marketing print", "BO", "", PRINT_IMAGES.flyerProduction],
];

const COUNTERS = [
  ["10+", "Years Experience", 10],
  ["5000+", "Orders Completed", 5000],
  ["1000+", "Happy Customers", 1000],
  ["50+", "Printing Solutions", 50],
];

const IMAGE_RIBBON = [
  ["Print Studio", PRINT_IMAGES.printStudio],
  ["Business Cards", PRINT_IMAGES.businessCards],
  ["Press Work", PRINT_IMAGES.printPress],
  ["Signage", PRINT_IMAGES.signage],
  ["Paper Finishing", PRINT_IMAGES.paperStack],
  ["Production", PRINT_IMAGES.production],
];

const STUDIO_FEATURES = [
  ["01", "Color Managed Printing", "Balanced CMYK output for sharper business prints and cleaner brand colors.", PRINT_IMAGES.printPress],
  ["02", "Premium Finishing", "Lamination, cutting, binding and neat packing before every pickup.", PRINT_IMAGES.paperStack],
  ["03", "Fast Local Support", "WhatsApp quotes, practical timelines and pickup from Gandhipuram.", PRINT_IMAGES.printStudio],
];

const FINISHES = [
  ["Matte Finish", "Smooth non-glare cards and brochures", PRINT_IMAGES.businessCards],
  ["Gloss Lamination", "Bright, protective finish for high-impact prints", PRINT_IMAGES.cardMockup],
  ["Textured Paper", "Premium feel for invitations and stationery", PRINT_IMAGES.simpleCards],
  ["Large Format", "Boards, flex and shop visibility material", PRINT_IMAGES.signage],
  ["Bulk Cutting", "Clean edges and consistent sizing", PRINT_IMAGES.paperStack],
  ["Press Proofing", "Checked output before final delivery", PRINT_IMAGES.proofing],
];

const WHY_CHOOSE = [
  ["Fast WhatsApp Quote", "Send size, quantity and file. We reply with practical options."],
  ["Real Print Guidance", "Paper, finish and size suggestions based on your usage."],
  ["Coimbatore Pickup", "Easy pickup from Gandhipuram with local delivery support."],
  ["Business Ready Output", "Cards, signs, brochures and merchandise that feel finished."],
];

const WORKFLOW_STEPS = [
  ["Idea", "Tell us what you need, from business cards to store signage."],
  ["Design", "We prepare clean, print-ready artwork with the right finish."],
  ["Print", "Your job moves through sharp color-managed production."],
  ["Finish", "Cutting, lamination, binding and quality checks happen here."],
  ["Deliver", "Pickup or local delivery, neatly packed and ready to use."],
];

function useRevealAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useCounters() {
  useEffect(() => {
    const counters = document.querySelectorAll("[data-count-to]");
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target;
          const target = Number(node.getAttribute("data-count-to"));
          const suffix = node.getAttribute("data-count-suffix") || "";
          const started = performance.now();
          const duration = 1200;

          const tick = (now) => {
            const progress = Math.min((now - started) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            node.textContent = `${Math.round(target * eased)}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.unobserve(node);
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => observer.observe(counter));
    return () => observer.disconnect();
  }, []);
}

function CinematicIntro() {
  const [visible, setVisible] = useState(() => sessionStorage.getItem("zpCmykIntroSeen") !== "yes");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!visible) return undefined;
    const fallback = window.setTimeout(() => setReady(true), 80);
    const done = window.setTimeout(() => {
      sessionStorage.setItem("zpCmykIntroSeen", "yes");
      setVisible(false);
    }, 3500);

    return () => {
      window.clearTimeout(fallback);
      window.clearTimeout(done);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`cinema-intro cmyk-intro ${ready ? "is-ready" : ""}`} role="presentation">
      <span className="ink-line ink-line--cyan" />
      <span className="ink-line ink-line--magenta" />
      <span className="ink-line ink-line--yellow" />
      <span className="ink-line ink-line--black" />
      <div className="cmyk-intro__mark">
        <img src={loaderLogo} alt="ZeePrintz" />
        <strong>ZEE PRINTZ</strong>
        <span>PRINT / DESIGN / BRAND / CREATE</span>
      </div>
      <div className="cinema-intro__flash" />
      <button
        className="cinema-intro__skip"
        onClick={() => {
          sessionStorage.setItem("zpCmykIntroSeen", "yes");
          setVisible(false);
        }}
      >
        Skip Intro
      </button>
    </div>
  );
}

function CustomCursor() {
  const [label, setLabel] = useState("");
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) return undefined;

    const move = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    const over = (event) => {
      if (event.target.closest(".portfolio-card")) setLabel("VIEW");
      else if (event.target.closest("a, button")) setLabel("GO");
      else setLabel("");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return <div ref={cursorRef} className={`custom-cursor ${label ? "is-active" : ""}`}>{label}</div>;
}

export default function HomePage() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const processRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const popularServices = useMemo(() => SERVICES.filter((service) => service.popular), []);

  useRevealAnimations();
  useCounters();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!headlineRef.current) return undefined;
    const split = new SplitType(headlineRef.current, { types: "lines" });
    const introDelay = sessionStorage.getItem("zpCmykIntroSeen") === "yes" ? 0.12 : 3.35;

    gsap.fromTo(
      split.lines,
      { yPercent: 110, opacity: 0, rotateX: 18 },
      {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        delay: introDelay,
        duration: 0.92,
        ease: "power4.out",
        stagger: 0.14,
      }
    );

    const printTween = gsap.to(".impact-hero__print-word", {
      y: 120,
      scale: 1.18,
      opacity: 0.52,
      ease: "none",
      scrollTrigger: {
        trigger: ".impact-hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.utils.toArray(".image-ribbon__card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: index % 2 ? 80 : -40, rotate: index % 2 ? 4 : -4 },
        {
          y: index % 2 ? -60 : 55,
          rotate: index % 2 ? -3 : 3,
          ease: "none",
          scrollTrigger: {
            trigger: ".image-ribbon-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    gsap.utils.toArray(".sticky-feature").forEach((card) => {
      gsap.fromTo(
        card,
        { scale: 0.92, opacity: 0.35 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 78%",
            end: "top 34%",
            scrub: true,
          },
        }
      );
    });

    const progressTween = processRef.current
      ? gsap.fromTo(
          ".process-line__progress",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: processRef.current,
              start: "top 70%",
              end: "bottom 70%",
              scrub: true,
            },
          }
        )
      : null;

    return () => {
      printTween.kill();
      progressTween?.kill();
      split.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const y = Math.min(window.scrollY, window.innerHeight);
      heroRef.current.style.setProperty("--scroll-progress", `${y / window.innerHeight}`);
    };

    const onMove = (event) => {
      if (window.matchMedia("(pointer: coarse)").matches) return;
      setParallax({
        x: (event.clientX / window.innerWidth - 0.5) * 18,
        y: (event.clientY / window.innerHeight - 0.5) * 18,
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Best Printing Shop in Coimbatore - Premium Printing Studio"
        description="ZeePrintz is a premium printing studio in Gandhipuram, Coimbatore for business cards, signage, branding, brochures, custom merchandise and fast local print orders."
        keywords="best printing shop in coimbatore, premium printing studio coimbatore, visiting card printing coimbatore, signage coimbatore, custom printing coimbatore"
        canonical={SITE_URL}
        schema={[homeFaqSchema]}
      />

      <CinematicIntro />
      <CustomCursor />

      <section className="impact-hero" ref={heroRef}>
        <div className="impact-hero__light" />
        <div className="impact-hero__print-word">PRINT</div>
        <div className="container impact-hero__inner">
          <div className="impact-hero__copy">
            <p className="impact-hero__kicker">Premium Printing • Branding • Signage • Custom Printing</p>
            <h1 ref={headlineRef}>
              <span><em>PRINT</em> YOUR <i>IDEA.</i></span>
              <span>BUILD YOUR <b>BRAND.</b></span>
            </h1>
            <div className="impact-hero__actions">
              <Link to="/gallery" className="studio-btn studio-btn--light">Explore Our Work →</Link>
              <a
                href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi ZeePrintz! I need a quote for printing.`}
                target="_blank"
                rel="noopener noreferrer"
                className="studio-btn studio-btn--fill"
              >
                Start a Project →
              </a>
            </div>
          </div>

          <div className="floating-products" style={{ "--mx": `${parallax.x}px`, "--my": `${parallax.y}px` }}>
            {[
              ["Business Cards", "CARD", "product-card--one", PRINT_IMAGES.businessCards],
              ["Printed Tee", "TEE", "product-card--two", PRINT_IMAGES.tshirtPress],
              ["Coffee Mug", "MUG", "product-card--three", PRINT_IMAGES.mugPress],
              ["Brochure", "BOOK", "product-card--four", PRINT_IMAGES.flyerProduction],
              ["Sign Board", "SIGN", "product-card--five", PRINT_IMAGES.signage],
              ["Packaging", "BOX", "product-card--six", PRINT_IMAGES.paperStack],
            ].map(([title, mark, className, image]) => (
              <div key={title} className={`product-card ${className}`}>
                <img src={image} alt="" loading="eager" />
                <span>{mark}</span>
                <strong>{title}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-marquee" aria-label="ZeePrintz capabilities">
        <div className="studio-marquee__track">
          <span>PRINT • DESIGN • CREATE • BRAND • DELIVER • PRINT • DESIGN • CREATE • BRAND • DELIVER •</span>
          <span>PRINT • DESIGN • CREATE • BRAND • DELIVER • PRINT • DESIGN • CREATE • BRAND • DELIVER •</span>
        </div>
        <div className="studio-marquee__track studio-marquee__track--reverse">
          <span>BUSINESS CARDS • SIGNAGE • MERCH • BROCHURES • PACKAGING •</span>
          <span>BUSINESS CARDS • SIGNAGE • MERCH • BROCHURES • PACKAGING •</span>
        </div>
      </section>

      <section className="image-ribbon-section">
        <div className="container">
          <div className="section-title" data-reveal>
            <p>Print Energy</p>
            <h2>Real print textures, machines, paper, cards and production moments.</h2>
          </div>
        </div>
        <div className="image-ribbon">
          {IMAGE_RIBBON.concat(IMAGE_RIBBON).map(([label, image], index) => (
            <figure className="image-ribbon__card" key={`${label}-${index}`}>
              <img src={image} alt={`${label} at ZeePrintz`} loading={index < 4 ? "eager" : "lazy"} />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section service-rows-section">
        <div className="container">
          <div className="section-title" data-reveal>
            <p>Services</p>
            <h2>Full-screen print services, treated like editorial spreads.</h2>
          </div>
          <div className="service-spreads">
            {SERVICE_ROWS.map(([num, title, desc, image], index) => (
              <article
                className={`service-spread ${index % 2 ? "service-spread--reverse" : ""}`}
                key={title}
                data-reveal
                style={{ "--delay": `${index * 70}ms` }}
              >
                <div className="service-spread__copy">
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <Link to="/services">Explore Service →</Link>
                </div>
                <div className="service-spread__visual">
                  <img src={image} alt={`${title} printing sample`} loading="lazy" />
                  <span>{title.split(" ")[0]}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sticky-showcase-section">
        <div className="container sticky-showcase">
          <div className="sticky-showcase__intro">
            <p>Big Studio Feel</p>
            <h2>Not just printing. A full brand production workflow.</h2>
            <span>Scroll through the core strengths that make ZeePrintz feel premium, fast and practical for Coimbatore businesses.</span>
          </div>
          <div className="sticky-showcase__stack">
            {STUDIO_FEATURES.map(([num, title, text, image]) => (
              <article className="sticky-feature" key={title}>
                <img src={image} alt={title} loading="lazy" />
                <div>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section print-lab-section">
        <div className="container print-lab">
          <div className="section-title" data-reveal>
            <p>Print Lab</p>
            <h2><span>FROM BLANK</span><span>TO BRANDED</span></h2>
          </div>
          <div className="print-machine" data-reveal>
            <div className="blank-product">
              <span className="blank-product__label">BLANK T-SHIRT</span>
              <div className="printed-layer">
                <strong>ZeePrintz</strong>
                <span>CREATE IMPACT</span>
              </div>
              <div className="scan-bar" />
            </div>
          </div>
        </div>
      </section>

      <section className="section finishes-section">
        <div className="container">
          <div className="section-title" data-reveal>
            <p>Materials & Finishes</p>
            <h2>Premium options for cards, flyers, signs, gifts and business kits.</h2>
          </div>
          <div className="finish-grid">
            {FINISHES.map(([title, text, image], index) => (
              <article className="finish-card" key={title} data-reveal style={{ "--delay": `${index * 70}ms` }}>
                <img src={image} alt={title} loading="lazy" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="container">
          <div className="section-title" data-reveal>
            <p>Portfolio</p>
            <h2>Editorial work layout, not a basic grid.</h2>
          </div>
          <div className="portfolio-masonry">
            {PORTFOLIO.map(([name, category, mark, className, image], index) => (
              <article className={`portfolio-card ${className}`} key={name} data-reveal style={{ "--delay": `${index * 65}ms` }}>
                <div className="portfolio-card__visual">
                  <img src={image} alt={`${name} printing work`} loading="lazy" />
                  <span>{mark}</span>
                </div>
                <p>{category}</p>
                <h3>{name}</h3>
                <Link to="/gallery">View Project →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section selected-work-section">
        <div className="container">
          <div className="section-title" data-reveal>
            <p>Selected Work</p>
            <h2>Featured projects that move with the scroll.</h2>
          </div>
        </div>
        <div className="selected-work-track">
          {PORTFOLIO.slice(0, 4).map(([name, category, mark, , image], index) => (
            <article className="selected-work-card" key={`selected-${name}`} data-reveal style={{ "--delay": `${index * 80}ms` }}>
              <div>
                <img src={image} alt={`${name} selected work`} loading="lazy" />
                <span>{mark}</span>
              </div>
              <small>2026 / {category}</small>
              <h3>{name}</h3>
              <Link to="/gallery">View Project →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-line-section" ref={processRef}>
        <div className="container">
          <div className="section-title" data-reveal>
            <p>Our Process</p>
            <h2>From idea to delivery, everything stays clear.</h2>
          </div>
          <div className="process-line">
            <div className="process-line__progress" />
            {WORKFLOW_STEPS.map(([title, text], index) => (
              <div className="process-step" key={title} data-reveal style={{ "--delay": `${index * 90}ms` }}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats-counter-section">
        <div className="container stats-counter">
          {COUNTERS.map(([value, label, count], index) => (
            <div className="counter-card" key={label} data-reveal style={{ "--delay": `${index * 70}ms` }}>
              <strong data-count-to={count} data-count-suffix={value.includes("+") ? "+" : ""}>0</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section why-premium-section">
        <div className="container why-premium">
          <div className="why-premium__image" data-reveal>
            <img src={PRINT_IMAGES.printStudio} alt="ZeePrintz print studio workflow" loading="lazy" />
          </div>
          <div className="why-premium__content">
            <div className="section-title" data-reveal>
              <p>Why ZeePrintz</p>
              <h2>Built for urgent orders, repeat business and premium brand output.</h2>
            </div>
            <div className="why-premium__list">
              {WHY_CHOOSE.map(([title, text], index) => (
                <article key={title} data-reveal style={{ "--delay": `${index * 75}ms` }}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section popular-services">
        <div className="container">
          <div className="section-title" data-reveal>
            <p>Quick Orders</p>
            <h2>Most requested print jobs.</h2>
          </div>
          <div className="quick-service-grid">
            {popularServices.map((service, index) => (
              <Link to="/services" className="quick-service" key={service.id} data-reveal style={{ "--delay": `${index * 70}ms` }}>
                <img src={PORTFOLIO[index % PORTFOLIO.length][4]} alt={`${service.title} print sample`} loading="lazy" />
                <span>{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <strong>{service.price}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section local-big-section">
        <div className="container">
          <div className="local-big" data-reveal>
            <div>
              <p>Coimbatore Local Print Studio</p>
              <h2>Printing near Gandhipuram, Cross Cut Road and all major Coimbatore areas.</h2>
            </div>
            <div className="local-big__areas">
              {SERVICE_AREAS.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-premium">
        <div className="container">
          <div className="section-title" data-reveal>
            <p>Testimonials</p>
            <h2>Trusted by Coimbatore businesses and families.</h2>
          </div>
          <Swiper
            className="testimonial-carousel"
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4300, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              760: { slidesPerView: 2 },
              1080: { slidesPerView: 3 },
            }}
          >
            {TESTIMONIALS.map((item, index) => (
              <SwiperSlide key={item.name}>
                <article className="premium-testimonial" data-reveal style={{ "--delay": `${index * 90}ms` }}>
                  <span>{"★".repeat(item.rating)}</span>
                  <p>"{item.text}"</p>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="section faq-premium-section">
        <div className="container faq-premium">
          <div className="section-title" data-reveal>
            <p>Questions</p>
            <h2>Before you place a print order.</h2>
          </div>
          <div className="faq-premium__grid">
            {FAQS.map((faq, index) => (
              <article key={faq.question} data-reveal style={{ "--delay": `${index * 70}ms` }}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-cta">
        <div className="container premium-cta__inner" data-reveal>
          <h2>
            <span>YOUR NEXT PRINT</span>
            <span>STARTS HERE.</span>
          </h2>
          <a
            href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=Hi ZeePrintz! I need a free quote.`}
            target="_blank"
            rel="noopener noreferrer"
            className="studio-btn studio-btn--fill"
          >
            Get a Free Quote →
          </a>
        </div>
      </section>
    </>
  );
}
