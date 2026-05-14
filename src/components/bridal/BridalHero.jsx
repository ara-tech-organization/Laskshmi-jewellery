import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BridalHeroImg from '../../assets/collections/bridal/bridal-traditional.png';

const GOLD = '#d4ad5a';

export default function BridalHero() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.rb') ?? [];
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
    <section ref={ref} className="hero-fixed" style={{ position: 'relative', height: '560px', overflow: 'hidden' }}>
      <img src={BridalHeroImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(20,12,5,0.85) 0%,rgba(20,12,5,0.58) 55%,rgba(176,138,58,0.20) 100%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '80px' }}>
        <div className="rb" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(212,173,90,0.15)', border: '1px solid rgba(212,173,90,0.50)', borderRadius: '50px', marginBottom: '22px', width: 'fit-content' }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#d4ad5a', display: 'block' }} />
          <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#d4ad5a' }}>Bridal Collections</span>
        </div>
        <h1 className="rb" style={{ fontSize: 'clamp(22px,2.8vw,40px)', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.2', letterSpacing: '-0.5px', maxWidth: '640px', margin: '0 0 24px' }}>
          Jewellery Designed for<br />
          <span style={{ color: GOLD }}>Your Dream Wedding</span>
        </h1>
        <div className="rb" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#" onClick={e => { e.preventDefault(); document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', background: 'linear-gradient(135deg,#d4ad5a,#b08a3a)', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '14px', fontWeight: '600', boxShadow: '0 3px 12px rgba(212,173,90,0.18)', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 5px 16px rgba(212,173,90,0.20)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 3px 12px rgba(212,173,90,0.18)'; }}>
            View Collections <ArrowRight size={15} />
          </a>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '11px 26px', border: '1.5px solid rgba(212,173,90,0.45)', color: '#FFFFFF', textDecoration: 'none', borderRadius: '50px', fontSize: '14px', fontWeight: '500', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor=GOLD; e.currentTarget.style.color=GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(212,173,90,0.45)'; e.currentTarget.style.color='#FFFFFF'; }}>
            Bridal Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
