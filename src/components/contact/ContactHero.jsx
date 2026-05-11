import { useEffect, useRef } from 'react';

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
    <section ref={ref} style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
      <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1400&q=80" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(20,12,5,0.82) 0%,rgba(20,12,5,0.55) 55%,rgba(176,138,58,0.20) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.06' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='28'/%3E%3Cpath d='M60 32 C68 44 68 76 60 88 C52 76 52 44 60 32Z'/%3E%3Cpath d='M32 60 C44 52 76 52 88 60 C76 68 44 68 32 60Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '80px' }}>
        <div className="rc" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(212,173,90,0.15)', border: '1px solid rgba(212,173,90,0.50)', borderRadius: '50px', marginBottom: '22px', width: 'fit-content' }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#d4ad5a', display: 'block' }} />
          <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#d4ad5a' }}>Get in Touch</span>
        </div>
        <h1 className="rc" style={{ fontSize: 'clamp(26px,3.5vw,52px)', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.15', letterSpacing: '-0.5px', maxWidth: '680px', margin: '0 0 20px' }}>
          Visit Us &amp; Discover<br />
          <span style={{ color: GOLD }}>Timeless Elegance</span>
        </h1>
        <p className="rc" style={{ fontSize: '15px', lineHeight: '1.9', color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: 0 }}>
          Step into Sri Lakshimi Thanga Maligai and experience premium jewellery collections crafted with beauty, trust, and tradition. Our team is ready to help you find the perfect jewellery for every occasion.
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top,#FAF6EE,transparent)' }} />
    </section>
  );
}
