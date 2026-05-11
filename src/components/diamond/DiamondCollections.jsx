import { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const GOLD = '#d4ad5a';

const collections = [
  { title: 'Diamond Rings',               desc: 'Solitaire, band, and statement diamond rings for every occasion.', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80' },
  { title: 'Diamond Earrings',            desc: 'Sparkling diamond earrings from elegant studs to grand chandeliers.', img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&q=80' },
  { title: 'Diamond Necklaces',           desc: 'Brilliant diamond necklaces for statement looks and bridal glory.', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&q=80' },
  { title: 'Pendants',                    desc: 'Classic solitaire pendants and contemporary diamond drops.', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80' },
  { title: 'Bridal Diamond Sets',         desc: 'Complete diamond bridal sets crafted for your most cherished day.', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80' },
  { title: 'Contemporary Diamond Jewellery', desc: "Modern diamond pieces designed for today's sophisticated lifestyle.", img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&q=80' },
];

export default function DiamondCollections() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.rd') ?? [];
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
    <section ref={ref} id="collections" style={{ background: 'linear-gradient(135deg,#0A0E16 0%,#131720 50%,#0A0E16 100%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23d4ad5a' stroke-opacity='0.04' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='28'/%3E%3Cpath d='M60 32 C68 44 68 76 60 88 C52 76 52 44 60 32Z'/%3E%3Cpath d='M32 60 C44 52 76 52 88 60 C76 68 44 68 32 60Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="rd" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '40px', marginBottom: '56px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', background: 'rgba(146,46,97,0.10)', border: '1px solid rgba(146,46,97,0.35)', borderRadius: '50px', marginBottom: '18px' }}>
              <Sparkles size={11} color="#922e61" />
              <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#922e61' }}>Our Collections</span>
            </div>
            <h2 style={{ fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: '700', color: '#FFFFFF', margin: 0, lineHeight: '1.15', letterSpacing: '-0.5px' }}>
              Explore Diamond <span style={{ color: GOLD }}>Collections</span>
            </h2>
          </div>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: '1.85', maxWidth: '360px', paddingBottom: '4px' }}>
            Certified brilliance for every occasion — from bridal sets to everyday diamond elegance.
          </p>
        </div>

        <div className="diam-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
          {collections.map(({ title, desc, img }, i) => (
            <div key={title} className="rd" style={{ borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.35s ease', boxShadow: '0 4px 20px rgba(0,0,0,0.35)' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.55)';
                const im = e.currentTarget.querySelector('img'); if (im) im.style.transform = 'scale(1.12)';
                const ov = e.currentTarget.querySelector('.img-overlay'); if (ov) ov.style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.35)';
                const im = e.currentTarget.querySelector('img'); if (im) im.style.transform = 'scale(1)';
                const ov = e.currentTarget.querySelector('.img-overlay'); if (ov) ov.style.opacity = '0';
              }}>
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(10,14,22,0.80) 0%,transparent 55%)' }} />
                <div className="img-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(212,173,90,0.15)', opacity: 0, transition: 'opacity 0.35s ease', backdropFilter: 'blur(3px)' }}>
                  <span style={{ color: '#fff', fontSize: '10px', fontWeight: '700', letterSpacing: '2.5px', textTransform: 'uppercase', border: `1px solid rgba(212,173,90,0.70)`, padding: '7px 18px', borderRadius: '50px' }}>Explore</span>
                </div>
                <div style={{ position: 'absolute', top: '12px', left: '12px', fontSize: '10px', fontWeight: '700', color: GOLD, letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', borderTop: `1px solid rgba(212,173,90,0.12)`, padding: '12px 18px' }}>
                <div style={{ width: 24, height: '2px', background: `linear-gradient(to right,${GOLD},transparent)`, borderRadius: '2px', marginBottom: '8px' }} />
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#FFFFFF', margin: 0, lineHeight: 1.35 }}>{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .diam-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .diam-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
