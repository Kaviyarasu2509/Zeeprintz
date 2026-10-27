import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X, Phone } from 'lucide-react';
const links = [['Home', '/'], ['About', '/#about'], ['Services', '/#services'], ['Our Work', '/#work'], ['Contact', '/#contact']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState('/');
  const trigger = useRef(null);
  const drawer = useRef(null);
  useEffect(() => {
    const changed = () => { setPath(window.location.pathname); setOpen(false); };
    window.addEventListener('popstate', changed);
    return () => window.removeEventListener('popstate', changed);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    drawer.current.querySelector('button').focus();
    const key = event => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'Tab') {
        const items = [...drawer.current.querySelectorAll('a,button')];
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    const resized = () => { if (window.innerWidth >= 960) setOpen(false); };
    window.addEventListener('keydown', key);
    window.addEventListener('resize', resized);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', key); window.removeEventListener('resize', resized); trigger.current?.focus(); };
  }, [open]);
  const navigate = (event, href) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault(); window.history.pushState({}, '', href); setPath(href); setOpen(false);
    const target = href.includes('#') ? document.getElementById(href.split('#')[1]) : null;
    if (target) target.scrollIntoView({ behavior: 'smooth' }); else window.scrollTo(0, 0);
  };
  return <>
    <header className="navbar"><div className="navbar-inner">
      <a className="brand" href="/" onClick={event => navigate(event, '/')} aria-label="Zee7 Printz home">
        <img src="/images/brand/logo.png" alt="" width="64" height="48" />
        <span>ZEE7 <b>PRINTZ</b><i aria-hidden="true">.</i></span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={event => navigate(event, href)} aria-current={path === href ? 'page' : undefined}>{label}</a>)}</nav>
      <a className="quote-link" href="https://wa.me/917598951141" target="_blank" rel="noopener noreferrer">Get a quote <ArrowUpRight size={17} /></a>
      <button ref={trigger} className="menu-button" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)} title="Open navigation"><Menu size={24} /></button>
    </div></header>
    {open && <div className="menu-layer"><button className="menu-backdrop" tabIndex={-1} onClick={() => setOpen(false)} aria-label="Close navigation" /><aside ref={drawer} id="mobile-navigation" className="drawer" role="dialog" aria-modal="true" aria-label="Navigation">
      <div className="drawer-top"><span>ZEE7 <b>PRINTZ</b></span><button className="close-button" onClick={() => setOpen(false)} aria-label="Close navigation" title="Close navigation"><X size={24} /></button></div>
      <nav aria-label="Mobile navigation">{links.map(([label, href], index) => <a key={href} href={href} onClick={event => navigate(event, href)} aria-current={path === href ? 'page' : undefined}><span className="nav-number">0{index + 1}</span>{label}<ArrowUpRight size={20} /></a>)}</nav>
      <div className="drawer-contact"><p>Gandhipuram, Coimbatore</p><a href="tel:+917598951141"><Phone size={17} /> +91 75989 51141</a><a className="drawer-quote" href="https://wa.me/917598951141" target="_blank" rel="noopener noreferrer">Get a quote <ArrowUpRight size={18} /></a></div>
    </aside></div>}
  </>;
}
