import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PlatinumHeroImg from '../../assets/PlatinumHero.jpg';

const ACCENT = '#D8D8D8';
const ACCENT_DARK = '#A0A0A0';

export default function PlatinumHero() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.rp') ?? [];
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
    <section ref={ref} style={{ position: 'relative', height: '560px', overflow: 'hidden' }}>
      <img src={PlatinumHeroImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(20,12,5,0.82) 0%,rgba(20,12,5,0.55) 55%,rgba(176,138,58,0.20) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='none' stroke='%23D8D8D8' stroke-opacity='0.07' stroke-width='1'%3E%3Ccircle cx='50' cy='50' r='22'/%3E%3Cpath d='M50 28 C56 38 56 62 50 72 C44 62 44 38 50 28Z'/%3E%3Cpath d='M28 50 C38 44 62 44 72 50 C62 56 38 56 28 50Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '100px 100px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '80px' }}>
        <div className="rp" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(212,173,90,0.15)', border: '1px solid rgba(212,173,90,0.50)', borderRadius: '50px', marginBottom: '22px', width: 'fit-content' }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#d4ad5a', display: 'block' }} />
          <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#d4ad5a' }}>Platinum Collections</span>
        </div>
        <h1 className="rp" style={{ fontSize: 'clamp(22px,2.8vw,40px)', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.2', letterSpacing: '-0.5px', maxWidth: '640px', margin: '0 0 24px' }}>
          Pure Platinum Jewellery<br />
          <span style={{ color: '#d4ad5a' }}>for Modern Luxury</span>
        </h1>
        <div className="rp" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#collections" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', background: 'linear-gradient(135deg,#d4ad5a,#b08a3a)', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '14px', fontWeight: '600', boxShadow: '0 3px 12px rgba(212,173,90,0.18)', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 5px 16px rgba(212,173,90,0.20)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 3px 12px rgba(212,173,90,0.18)'; }}>
            View Collections <ArrowRight size={15} />
          </a>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '11px 26px', border: '1.5px solid rgba(212,173,90,0.45)', color: '#FFFFFF', textDecoration: 'none', borderRadius: '50px', fontSize: '14px', fontWeight: '500', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='#d4ad5a'; e.currentTarget.style.color='#d4ad5a'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(212,173,90,0.45)'; e.currentTarget.style.color='#FFFFFF'; }}>
            Book Consultation
          </Link>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top,#FAF6EE,transparent)' }} />
    </section>
  );
}
