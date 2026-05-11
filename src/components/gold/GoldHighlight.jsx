import { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tags = ['Wedding', 'Festival', 'Engagement', 'Anniversary', 'Birthday', 'Daily Wear'];

export default function GoldHighlight() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.rg') ?? [];
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
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.06' stroke-width='1'%3E%3Ccircle cx='70' cy='70' r='32'/%3E%3Ccircle cx='70' cy='70' r='20'/%3E%3Cpath d='M70 38 C80 52 80 88 70 102 C60 88 60 52 70 38Z'/%3E%3Cpath d='M38 70 C52 60 88 60 102 70 C88 80 52 80 38 70Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '140px 140px' }} />
      <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,173,90,0.08) 0%,transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
        <div className="rg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(146,46,97,0.10)', border: '1px solid rgba(146,46,97,0.35)', borderRadius: '50px', marginBottom: '28px' }}>
          <Sparkles size={12} color="#922e61" />
          <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', color: '#922e61' }}>For Every Occasion</span>
        </div>
        <h2 className="rg" style={{ fontSize: 'clamp(26px,3.5vw,48px)', fontWeight: '700', color: '#1A1610', lineHeight: '1.2', letterSpacing: '-0.5px', marginBottom: '24px' }}>
          Perfect Gold Jewellery for<br />
          <span style={{ color: '#d4ad5a' }}>Every Moment That Matters</span>
        </h2>
        <p className="rg" style={{ fontSize: '16px', lineHeight: '1.9', color: '#5A4F3F', marginBottom: '48px' }}>
          Whether you are preparing for a wedding, festival, engagement, or everyday elegance, our gold jewellery collections offer designs that suit every personality and occasion.
        </p>
        <div className="rg" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '52px' }}>
          {tags.map(tag => (
            <span key={tag} style={{ padding: '8px 20px', border: '1px solid rgba(212,173,90,0.30)', borderRadius: '50px', fontSize: '13px', fontWeight: '500', color: '#5A4F3F', background: '#FFFFFF', transition: 'all 0.3s ease', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(212,173,90,0.12)'; e.currentTarget.style.borderColor='#d4ad5a'; e.currentTarget.style.color='#d4ad5a'; }}
              onMouseLeave={e => { e.currentTarget.style.background='#FFFFFF'; e.currentTarget.style.borderColor='rgba(212,173,90,0.30)'; e.currentTarget.style.color='#5A4F3F'; }}>
              {tag}
            </span>
          ))}
        </div>
        <div className="rg" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', background: 'linear-gradient(135deg,#d4ad5a,#b08a3a)', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '15px', fontWeight: '600', boxShadow: '0 4px 14px rgba(212,173,90,0.18)', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 6px 18px rgba(212,173,90,0.20)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 14px rgba(212,173,90,0.18)'; }}>
            Book a Store Visit <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
