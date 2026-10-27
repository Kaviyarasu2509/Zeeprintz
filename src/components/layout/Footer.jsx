import { ArrowUpRight, ArrowUp, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import './Footer.css';

const services = ['Business Cards', 'Bill Books', 'Brochures & Flyers', 'Stickers & Labels', 'Invitations', 'Binding & Lamination'];
const pages = [['Home', '/'], ['About', '/#about'], ['Services', '/#services'], ['Our Work', '/#work'], ['Contact', '/#contact']];
const whatsapp = 'https://wa.me/917598951141';

export default function Footer() {
  const navigate = (event, href) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    const target = href.includes('#') ? document.getElementById(href.split('#')[1]) : null;
    if (target) target.scrollIntoView({ behavior: 'smooth' }); else window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return <footer className="site-footer">
    <div className="footer-ink" aria-hidden="true"><span /><span /><span /><span /></div>
    <div className="footer-inner">
      <div className="footer-invitation">
        <div><p className="footer-eyebrow">LET'S MAKE SOMETHING REAL</p><h2>Your next print starts here.</h2></div>
        <a className="footer-order" href={`${whatsapp}?text=Hi%20Zee7%20Printz!%20I%20would%20like%20a%20printing%20quote.`} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /> Get a print quote <ArrowUpRight size={20} /></a>
      </div>
      <div className="footer-columns">
        <div className="footer-brand-block">
          <a className="footer-brand" href="/" onClick={event => navigate(event, '/')} aria-label="Zee7 Printz home"><img src="/images/brand/logo.png" alt="" width="60" height="46" /><span>ZEE7 <b>PRINTZ</b><i>.</i></span></a>
          <p>Printing, design and finishing for businesses and everyday celebrations in Coimbatore.</p>
          <a className="footer-location" href="https://maps.app.goo.gl/imKWSbv9jLXc37XF6" target="_blank" rel="noopener noreferrer"><MapPin size={18} /><span>Gandhipuram, Coimbatore<br />Tamil Nadu, India</span><ArrowUpRight size={16} /></a>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation"><h3>Explore</h3>{pages.map(([name, href]) => <a key={href} href={href} onClick={event => navigate(event, href)}>{name}</a>)}</nav>
        <nav className="footer-nav" aria-label="Printing enquiries"><h3>Print Services</h3>{services.map(name => <a key={name} href={`${whatsapp}?text=${encodeURIComponent(`Hi Zee7 Printz! I need a quote for ${name}.`)}`} target="_blank" rel="noopener noreferrer">{name}</a>)}</nav>
        <div className="footer-contact"><h3>Let's Talk</h3><a href="tel:+917598951141"><Phone size={17} /><span>+91 75989 51141</span></a><a href="mailto:zeeprintzcbe@gmail.com"><Mail size={17} /><span>zeeprintzcbe@gmail.com</span></a><a className="footer-directions" href="https://maps.app.goo.gl/imKWSbv9jLXc37XF6" target="_blank" rel="noopener noreferrer">Find our shop <ArrowUpRight size={17} /></a><a className="footer-review" href="https://g.page/r/CYHj16RE9UOyECE/review" target="_blank" rel="noopener noreferrer">Leave a Google review <ArrowUpRight size={15} /></a></div>
      </div>
      <div className="footer-bottom"><p>&copy; {new Date().getFullYear()} Zee7 Printz. All rights reserved.</p><span>Made for your ideas.</span><button aria-label="Back to top" title="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}><ArrowUp size={18} /></button></div>
    </div>
  </footer>;
}
