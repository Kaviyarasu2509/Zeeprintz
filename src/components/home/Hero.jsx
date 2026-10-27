import { useEffect, useState } from 'react';
import { ArrowUpRight, Asterisk, Sparkles } from 'lucide-react';
import './Hero.css';
import PrintCarousel from './PrintCarousel';
import StrokeText from './StrokeText';
const products = [
  ['Business Cards', 'Business Card.png'], ['Invitations', 'Invitation Collection.png'],
  ['Stickers', 'Sticker.png'], ['Bill Books', 'bill book.png'], ['Stationery', 'Stationery.png'],
  ['Calendars', 'Calendar.png'], ['ID Cards', 'ID Cards.png'], ['Binding & Lamination', 'binding-lamination.png']
];
export default function Hero() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  useEffect(() => { setPlaying(!window.matchMedia('(prefers-reduced-motion: reduce)').matches); }, []);
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => setIndex(value => (value + 1) % products.length), 5556);
    return () => clearInterval(timer);
  }, [playing]);
  const change = direction => { setPlaying(false); setIndex(value => (value + direction + products.length) % products.length); };
  return <section className="print-hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <div className="hero-star hero-star-left" aria-hidden="true"><Asterisk /></div><div className="hero-star hero-star-right" aria-hidden="true"><Sparkles /></div>
      <h1 id="hero-title"><span className="brand-title">Zee7 Printz</span><span className="kinetic-title"><span><StrokeText>PRINT YOUR IDEA.</StrokeText></span><span><StrokeText delay={0.2}>BUILD YOUR</StrokeText>{' '}<em><StrokeText delay={0.4}>BRAND.</StrokeText></em></span></span></h1>
      <div className="hero-editorial"><p className="hero-description"><strong>Your printing shop in Coimbatore.</strong> From a first business card to your next big celebration, bring your ideas to life with visiting cards, bill books, stickers, invitations and custom stationery.</p><div className="hero-actions"><a className="hero-quote" href="https://wa.me/917598951141?text=Hi%20Zee7%20Printz!%20I%20need%20a%20printing%20quote." target="_blank" rel="noopener noreferrer">Let's make it real <ArrowUpRight size={22} /></a><a className="hero-explore" href="#services">Explore what we print <ArrowUpRight size={17} /></a></div></div>
    </div>
    <div className="carousel-stage" role="region" aria-roledescription="carousel" aria-label="Printing services" onKeyDown={event => { if (event.key === 'ArrowLeft') change(-1); if (event.key === 'ArrowRight') change(1); }}>
      <PrintCarousel products={products} index={index} playing={playing} />
    </div>
    <div className="hero-ticker" aria-hidden="true"><div>{[0, 1].map(copy => <span key={copy}>DESIGN <Asterisk /> PRINT <Asterisk /> MAKE AN IMPRESSION <Asterisk /> COIMBATORE <Asterisk /></span>)}</div></div>
  </section>;
}
