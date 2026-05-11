import { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const ACCENT = '#D8D8D8';
const ACCENT_DARK = '#A0A0A0';

const collections = [
  { title: 'Platinum Couple Rings', desc: 'Matching platinum rings symbolizing eternal love.', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80' },
  { title: 'Engagement Rings',      desc: 'Timeless platinum engagement rings for precious proposals.', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80' },
  { title: 'Wedding Bands',         desc: 'Classic and contemporary wedding bands in pure platinum.', img: 'https://images.unsplash.com/photo-1573408301185-9519f94815b5?w=500&q=80' },
  { title: 'Platinum Chains',       desc: 'Sleek, durable platinum chains in refined contemporary styles.', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80' },
  { title: 'Pendants',              desc: 'Elegant platinum pendants for everyday and special occasions.', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&q=80' },
  { title: 'Contemporary Pieces',   desc: 'Modern platinum jewellery for the discerning lifestyle.', img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&q=80' },
];

export default function PlatinumCollections() {
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
      el.style.transition = `all 0.75s cubic-bezier(0.4,0,0.2,1) ${i * 0.07}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="collections" style={{ background: 'linear-gradient(135deg,#111318 0%,#1A1C22 50%,#111318 100%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23D8D8D8' stroke-opacity='0.04' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='28'/%3E%3Cpath d='M60 32 C68 44 68 76 60 88 C52 76 52 44 60 32Z'/%3E%3Cpath d='M32 60 C44 52 76 52 88 60 C76 68 44 68 32 60Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="rp" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '40px', marginBottom: '56px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', background: 'rgba(216,216,216,0.10)', border: '1px solid rgba(216,216,216,0.25)', borderRadius: '50px', marginBottom: '18px' }}>
              <Sparkles size={11} color={ACCENT} />
              <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2.5px', textTransform: 'uppercase', color: ACCENT }}>Our Collections</span>
            </div>
            <h2 style={{ fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: '700', color: '#FFFFFF', margin: 0, lineHeight: '1.15', letterSpacing: '-0.5px' }}>
              Explore Platinum <span style={{ color: ACCENT }}>Collections</span>
            </h2>
          </div>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: '1.85', maxWidth: '360px', paddingBottom: '4px' }}>
            Rare, refined, and enduring — platinum jewellery for life's most precious milestones.
          </p>
        </div>

        <div className="plat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
          {collections.map(({ title, desc, img }, i) => (
            <div key={title} className="rp" style={{ borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.35s ease', boxShadow: '0 4px 20px rgba(0,0,0,0.30)' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.50)';
                const im = e.currentTarget.querySelector('img'); if (im) { im.style.transform = 'scale(1.12)'; im.style.filter = 'grayscale(10%) brightness(1)'; }
                const ov = e.currentTarget.querySelector('.img-overlay'); if (ov) ov.style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.30)';
                const im = e.currentTarget.querySelector('img'); if (im) { im.style.transform = 'scale(1)'; im.style.filter = 'grayscale(40%) brightness(0.9)'; }
                const ov = e.currentTarget.querySelector('.img-overlay'); if (ov) ov.style.opacity = '0';
              }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease, filter 0.5s ease', filter: 'grayscale(40%) brightness(0.9)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(17,19,24,0.75) 0%,transparent 60%)' }} />
                <div className="img-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(216,216,216,0.12)', opacity: 0, transition: 'opacity 0.35s ease', backdropFilter: 'blur(3px)' }}>
                  <span style={{ color: '#fff', fontSize: '10px', fontWeight: '700', letterSpacing: '2.5px', textTransform: 'uppercase', border: '1px solid rgba(216,216,216,0.70)', padding: '6px 16px', borderRadius: '50px' }}>Explore</span>
                </div>
                <div style={{ position: 'absolute', top: '12px', left: '12px', fontSize: '10px', fontWeight: '700', color: ACCENT, letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(216,216,216,0.12)', padding: '12px 18px' }}>
                <div style={{ width: 24, height: '2px', background: `linear-gradient(to right,${ACCENT},transparent)`, borderRadius: '2px', marginBottom: '8px' }} />
                <h3 style={{ fontSize: '13px', fontWeight: '700', color: '#FFFFFF', margin: 0, lineHeight: 1.35 }}>{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .plat-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .plat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
