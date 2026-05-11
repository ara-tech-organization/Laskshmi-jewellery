import { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GOLD = '#d4ad5a';
const GOLD_DARK = '#b08a3a';

export default function PlatinumHighlight() {
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
    <section ref={ref} style={{ background: '#FAF6EE', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.06' stroke-width='1'%3E%3Ccircle cx='70' cy='70' r='32'/%3E%3Cpath d='M70 38 C80 52 80 88 70 102 C60 88 60 52 70 38Z'/%3E%3Cpath d='M38 70 C52 60 88 60 102 70 C88 80 52 80 38 70Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '140px 140px' }} />
      <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,173,90,0.08) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
        <div className="rp" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(146,46,97,0.10)', border: '1px solid rgba(146,46,97,0.35)', borderRadius: '50px', marginBottom: '28px' }}>
          <Sparkles size={12} color="#922e61" />
          <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', color: '#922e61' }}>The Platinum Promise</span>
        </div>
        <h2 className="rp" style={{ fontSize: 'clamp(26px,3.2vw,44px)', fontWeight: '700', color: '#1A1610', lineHeight: '1.2', letterSpacing: '-0.5px', marginBottom: '24px' }}>
          Elegant, Modern &amp; <span style={{ color: GOLD }}>Enduring</span>
        </h2>
        <p className="rp" style={{ fontSize: '16px', lineHeight: '1.95', color: '#5A4F3F', marginBottom: '48px' }}>
          Elegant, modern, and enduring — our platinum jewellery collections perfectly complement today's lifestyle and celebrations. Crafted for individuals who appreciate the finest things in life.
        </p>
        <Link to="/contact" className="rp" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', background: `linear-gradient(135deg,${GOLD},${GOLD_DARK})`, color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '15px', fontWeight: '600', boxShadow: '0 4px 14px rgba(212,173,90,0.18)', transition: 'all 0.3s ease' }}
          onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 6px 18px rgba(212,173,90,0.20)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 14px rgba(212,173,90,0.18)'; }}>
          Book a Store Visit <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
