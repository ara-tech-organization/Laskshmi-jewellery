import { useEffect, useRef } from 'react';
import { Shield, Sparkles, CheckCircle, MessageCircle } from 'lucide-react';

const GOLD = '#d4ad5a';

const whyVisit = [
  { icon: Shield,        title: 'Certified Purity',      desc: 'All jewellery BIS hallmarked and certified for guaranteed quality.' },
  { icon: Sparkles,      title: '5,000+ Designs',         desc: 'An extensive collection across gold, silver, platinum, and diamond.' },
  { icon: CheckCircle,   title: 'Expert Guidance',        desc: 'Our team of jewellery experts help you find the perfect piece.' },
  { icon: MessageCircle, title: 'Personal Consultation',  desc: 'Bridal and custom jewellery consultations available by appointment.' },
];

export default function ContactWhyVisit() {
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
      el.style.transition = `all 0.75s cubic-bezier(0.4,0,0.2,1) ${i * 0.07}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: '#F5F5F8', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.05' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='28'/%3E%3Cpath d='M60 32 C68 44 68 76 60 88 C52 76 52 44 60 32Z'/%3E%3Cpath d='M32 60 C44 52 76 52 88 60 C76 68 44 68 32 60Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="rc" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', color: GOLD, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Why Visit Us</div>
          <h2 style={{ fontSize: 'clamp(26px,3vw,42px)', fontWeight: '700', color: '#1a1a1a', margin: 0, lineHeight: 1.2 }}>
            Experience the <span style={{ color: GOLD }}>Difference</span>
          </h2>
        </div>

        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
          {whyVisit.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rc" style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid rgba(212,173,90,0.10)', padding: '36px 24px', textAlign: 'center', transition: 'all 0.35s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 20px 48px rgba(212,173,90,0.12)'; e.currentTarget.style.borderColor='rgba(212,173,90,0.30)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor='rgba(212,173,90,0.10)'; }}>
              <div style={{ width: 60, height: 60, borderRadius: '16px', background: 'linear-gradient(135deg,#d4ad5a,#b08a3a)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 3px 12px rgba(212,173,90,0.14)' }}>
                <Icon size={24} color="#fff" />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 12px' }}>{title}</h3>
              <p style={{ fontSize: '13px', lineHeight: '1.85', color: '#555555', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .why-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
