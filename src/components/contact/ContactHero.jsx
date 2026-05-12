import { useEffect, useRef } from 'react';
import ContactHeroImg from '../../assets/AboutStore.jpg';

const GOLD = '#d4ad5a';

export default function ContactHero() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.rc') ?? [];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
      }),
      { threshold: 0.07 }
    );
    els.forEach((el, i) => {
      el.style.opacity = '0'; el.style.transform = 'translateY(28px)';
      el.style.transition = `all 0.75s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="contact-hero" style={{ position: 'relative', height: '560px', overflow: 'hidden', marginBottom: '48px' }}>
      <img src={ContactHeroImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(20,12,5,0.82) 0%,rgba(20,12,5,0.55) 55%,rgba(176,138,58,0.20) 100%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '120px' }}>
        <div className="rc" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(212,173,90,0.15)', border: '1px solid rgba(212,173,90,0.50)', borderRadius: '50px', marginBottom: '22px', width: 'fit-content' }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#d4ad5a', display: 'block' }} />
          <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#d4ad5a' }}>Get in Touch</span>
        </div>
        <h1 className="rc" style={{ fontSize: 'clamp(26px,3.5vw,52px)', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.15', letterSpacing: '-0.5px', maxWidth: '680px', margin: '0 0 20px' }}>
          Visit Us &amp; Discover<br />
          <span style={{ color: GOLD }}>Timeless Elegance</span>
        </h1>
        <p className="rc" style={{ fontSize: '15px', lineHeight: '1.9', color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: 0 }}>
          Step into Sri Lakshmi Thanga Maaligai and experience premium jewellery collections crafted with beauty, trust, and tradition. Our team is ready to help you find the perfect jewellery for every occasion.
        </p>
      </div>
    </section>
  );
}
