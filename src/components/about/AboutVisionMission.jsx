import { useEffect, useRef } from 'react';
import { Compass, Target, CheckCircle } from 'lucide-react';

const missionPoints = [
  'Create jewellery that combines heritage with modern elegance.',
  'Deliver superior quality and transparent service.',
  'Make every customer experience memorable and meaningful.',
  'Continuously innovate with unique jewellery collections.',
];

export default function AboutVisionMission() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.ra') ?? [];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
      }),
      { threshold: 0.08 }
    );
    els.forEach((el, i) => {
      el.style.opacity = '0'; el.style.transform = 'translateY(28px)';
      el.style.transition = `all 0.75s cubic-bezier(0.4,0,0.2,1) ${i * 0.09}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="our-story" ref={ref} style={{ background: '#FAF6EE', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.05' stroke-width='1'%3E%3Ccircle cx='70' cy='70' r='32'/%3E%3Ccircle cx='70' cy='70' r='20'/%3E%3Cpath d='M70 38 C80 52 80 88 70 102 C60 88 60 52 70 38Z'/%3E%3Cpath d='M38 70 C52 60 88 60 102 70 C88 80 52 80 38 70Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '140px 140px' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="ra" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', color: '#d4ad5a', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>What Drives Us</div>
          <h2 style={{ fontSize: 'clamp(26px,3vw,42px)', fontWeight: '700', color: '#1A1610', margin: 0, lineHeight: 1.2 }}>
            Vision &amp; <span style={{ color: '#d4ad5a' }}>Mission</span>
          </h2>
        </div>

        <div className="about-vm-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div className="ra" style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid rgba(212,173,90,0.12)', padding: '48px 44px', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 24px rgba(212,173,90,0.06)', transition: 'all 0.35s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 20px 56px rgba(212,173,90,0.12)'; e.currentTarget.style.borderColor='rgba(212,173,90,0.28)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 24px rgba(212,173,90,0.06)'; e.currentTarget.style.borderColor='rgba(212,173,90,0.12)'; }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right,#d4ad5a,transparent)' }} />
            <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,173,90,0.06) 0%,transparent 70%)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <div style={{ width: 56, height: 56, borderRadius: '16px', background: 'linear-gradient(135deg,#d4ad5a,#b08a3a)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 12px rgba(212,173,90,0.15)', flexShrink: 0 }}>
                <Compass size={26} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#d4ad5a', letterSpacing: '2px', textTransform: 'uppercase' }}>Our Vision</div>
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#1A1610', marginTop: '2px' }}>Where We're Headed</div>
              </div>
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.9', color: '#5A4F3F', margin: 0 }}>
              To become a globally trusted jewellery brand known for exceptional craftsmanship, purity, innovation, and lasting customer relationships built on generations of trust.
            </p>
          </div>

          <div className="ra" style={{ background: 'linear-gradient(145deg,#922e61 0%,#7a2451 100%)', borderRadius: '24px', border: '1px solid rgba(212,173,90,0.18)', padding: '48px 44px', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 24px rgba(146,46,97,0.10)', transition: 'all 0.35s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 20px 56px rgba(146,46,97,0.22)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 24px rgba(146,46,97,0.10)'; }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right,#d4ad5a,transparent)' }} />
            <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,173,90,0.07) 0%,transparent 70%)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <div style={{ width: 56, height: 56, borderRadius: '16px', background: 'rgba(212,173,90,0.12)', border: '1px solid rgba(212,173,90,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Target size={26} color="#d4ad5a" />
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#d4ad5a', letterSpacing: '2px', textTransform: 'uppercase' }}>Our Mission</div>
                <div style={{ fontSize: '20px', fontWeight: '700', color: '#FFFFFF', marginTop: '2px' }}>What We Stand For</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {missionPoints.map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 0', borderBottom: i < missionPoints.length - 1 ? '1px solid rgba(212,173,90,0.08)' : 'none' }}>
                  <CheckCircle size={16} color="#d4ad5a" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(255,255,255,0.68)' }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 960px) { .about-vm-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
