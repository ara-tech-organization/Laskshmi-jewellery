import { useEffect, useRef } from 'react';
import { ShieldCheck, Heart, Sparkles, Lightbulb } from 'lucide-react';

const values = [
  { icon: ShieldCheck, num: '01', title: 'Purity',     desc: 'Committed to certified quality and genuine craftsmanship in every piece we create.' },
  { icon: Heart,       num: '02', title: 'Trust',      desc: 'Building lifelong relationships through honesty and complete transparency.' },
  { icon: Sparkles,    num: '03', title: 'Elegance',   desc: 'Creating jewellery that remains timeless and treasured across generations.' },
  { icon: Lightbulb,  num: '04', title: 'Innovation', desc: 'Blending traditional artistry with modern design excellence and creativity.' },
];

export default function AboutValues() {
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
    <section ref={ref} style={{ background: '#FAF6EE', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.05' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='28'/%3E%3Cpath d='M60 32 C68 44 68 76 60 88 C52 76 52 44 60 32Z'/%3E%3Cpath d='M32 60 C44 52 76 52 88 60 C76 68 44 68 32 60Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="ra" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', color: '#d4ad5a', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>What We Believe</div>
          <h2 style={{ fontSize: 'clamp(26px,3vw,42px)', fontWeight: '700', color: '#1A1610', margin: 0, lineHeight: 1.2 }}>
            Our Core <span style={{ color: '#d4ad5a' }}>Values</span>
          </h2>
        </div>

        <div className="about-values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
          {values.map(({ icon: Icon, num, title, desc }) => (
            <div key={title} className="ra" style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid rgba(212,173,90,0.10)', padding: '44px 28px 36px', textAlign: 'center', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.boxShadow='0 24px 56px rgba(212,173,90,0.13)'; e.currentTarget.style.borderColor='rgba(212,173,90,0.30)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor='rgba(212,173,90,0.10)'; }}>
              <div style={{ position: 'absolute', top: '-10px', right: '12px', fontSize: '100px', fontWeight: '800', lineHeight: 1, color: 'rgba(212,173,90,0.06)', userSelect: 'none', pointerEvents: 'none', fontFamily: "'Poppins',sans-serif" }}>{num}</div>
              <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '3px', background: 'linear-gradient(to right,transparent,#d4ad5a,transparent)', borderRadius: '0 0 4px 4px' }} />
              <div style={{ width: 68, height: 68, borderRadius: '20px', margin: '0 auto 20px', background: 'linear-gradient(135deg,#d4ad5a,#b08a3a)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 28px rgba(212,173,90,0.28)' }}>
                <Icon size={28} color="#fff" />
              </div>
              <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(212,173,90,0.5)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>{num}</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1A1610', margin: '0 0 14px' }}>{title}</h3>
              <div style={{ width: 32, height: 2, background: 'linear-gradient(to right,#d4ad5a,rgba(212,173,90,0.2))', margin: '0 auto 14px' }} />
              <p style={{ fontSize: '13px', lineHeight: '1.85', color: '#5A4F3F', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .about-values-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .about-values-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
