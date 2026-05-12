import { useEffect, useRef } from 'react';
import { Crown, Star, Shield, CheckCircle } from 'lucide-react';
import BridalHeroImg from '../../assets/BridalHero.jpg';

const GOLD = '#d4ad5a';

const features = [
  { icon: Crown,       label: 'Complete Sets',      sub: 'Head-to-toe bridal' },
  { icon: Star,        label: 'Custom Design',      sub: 'Personalised styling' },
  { icon: Shield,      label: 'BIS Certified',      sub: 'Guaranteed purity' },
  { icon: CheckCircle, label: 'Free Consultation',  sub: 'Bridal expert guidance' },
];

export default function BridalIntro() {
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
      el.style.transition = `all 0.75s cubic-bezier(0.4,0,0.2,1) ${i * 0.09}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: '#FAF6EE', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='130' height='130' viewBox='0 0 130 130'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.05' stroke-width='1'%3E%3Ccircle cx='65' cy='65' r='30'/%3E%3Cpath d='M65 35 C73 48 73 82 65 95 C57 82 57 48 65 35Z'/%3E%3Cpath d='M35 65 C48 57 82 57 95 65 C82 73 48 73 35 65Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '130px 130px' }} />
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,173,90,0.07) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="bridal-intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>

          <div className="rb" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-12px', border: '1px solid rgba(212,173,90,0.20)', borderRadius: '36px', pointerEvents: 'none' }} />
            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 28px 72px rgba(20,12,5,0.14)', position: 'relative' }}>
              <img src={BridalHeroImg} alt="Bridal Jewellery" style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(20,12,5,0.50) 0%,transparent 55%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right,#d4ad5a,transparent)' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '-20px', left: '32px', background: 'linear-gradient(135deg,#d4ad5a,#b08a3a)', borderRadius: '18px', padding: '18px 24px', boxShadow: '0 6px 18px rgba(212,173,90,0.18)' }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#fff', lineHeight: 1 }}>50+</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)', marginTop: '3px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Bridal Styles</div>
            </div>
            <div style={{ position: 'absolute', top: '24px', right: '-16px', background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212,173,90,0.22)', borderRadius: '14px', padding: '14px 18px', boxShadow: '0 8px 28px rgba(20,12,5,0.10)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Crown size={14} color={GOLD} />
              <div>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#1A1610' }}>Bridal Expert</div>
                <div style={{ fontSize: '10px', color: '#6a6a6a' }}>Free Consultation</div>
              </div>
            </div>
          </div>

          <div>
            <div className="rb" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(146,46,97,0.10)', border: '1px solid rgba(146,46,97,0.35)', borderRadius: '50px', marginBottom: '22px' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#922e61', display: 'block' }} />
              <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', color: '#922e61' }}>Bridal Jewellery</span>
            </div>
            <h2 className="rb" style={{ fontSize: 'clamp(26px,3vw,42px)', fontWeight: '700', color: '#1A1610', lineHeight: '1.2', letterSpacing: '-0.5px', marginBottom: '12px' }}>Jewellery that Reflects</h2>
            <h2 className="rb" style={{ fontSize: 'clamp(26px,3vw,42px)', fontWeight: '700', color: GOLD, lineHeight: '1.2', letterSpacing: '-0.5px', marginBottom: '28px' }}>Tradition &amp; Beauty</h2>
            <div className="rb" style={{ width: 48, height: 3, background: 'linear-gradient(to right,#d4ad5a,rgba(212,173,90,0.2))', borderRadius: '2px', marginBottom: '28px' }} />
            <p className="rb" style={{ fontSize: '15px', lineHeight: '1.95', color: '#5A4F3F', marginBottom: '16px' }}>
              A bride's jewellery reflects tradition, beauty, and emotion. At Sri Lakshmi Thanga Maaligai, we create bridal collections that complete every wedding story with elegance and grandeur.
            </p>
            <p className="rb" style={{ fontSize: '15px', lineHeight: '1.95', color: '#5A4F3F', marginBottom: '36px' }}>
              Our bridal specialists help brides choose jewellery that perfectly complements their attire, personality, and wedding traditions — making every wedding unforgettable.
            </p>
            <div className="rb" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {features.map(({ icon: Icon, label, sub }) => (
                <div key={label} style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid rgba(212,173,90,0.12)', padding: '18px 16px', display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(212,173,90,0.35)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(212,173,90,0.10)'; e.currentTarget.style.transform='translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(212,173,90,0.12)'; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)'; }}>
                  <div style={{ width: 40, height: 40, borderRadius: '11px', background: 'linear-gradient(135deg,rgba(212,173,90,0.14),rgba(212,173,90,0.04))', border: '1px solid rgba(212,173,90,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color={GOLD} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#1A1610', lineHeight: 1.2 }}>{label}</div>
                    <div style={{ fontSize: '11px', color: '#8A7A60', marginTop: '3px' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 960px) { .bridal-intro-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  );
}
