import { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const GOLD = '#d4ad5a';

const collections = [
  { title: 'Bridal Gold Sets',    desc: 'Complete bridal sets for your most cherished day.', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80' },
  { title: 'Long Chains',         desc: 'Elegant long chains in classic and contemporary designs.', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80' },
  { title: 'Short Necklaces',     desc: 'Versatile short necklaces for everyday and festive wear.', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&q=80' },
  { title: 'Temple Jewellery',    desc: 'Intricate temple designs inspired by ancient craftsmanship.', img: 'https://images.unsplash.com/photo-1573408301185-9519f94815b5?w=500&q=80' },
  { title: 'Antique Collections', desc: 'Heritage-style antique pieces with timeless character.', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80' },
  { title: 'Bangles & Bracelets', desc: 'Stacking bangles and delicate bracelets for every wrist.', img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&q=80' },
  { title: 'Earrings',            desc: 'From studs to chandbalis — gold earrings for every look.', img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&q=80' },
  { title: 'Rings',               desc: 'Solitaire, band, and statement rings in pure gold.', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80' },
  { title: 'Daily Wear',          desc: 'Lightweight, comfortable pieces for everyday elegance.', img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&q=80' },
  { title: 'Kids Jewellery',      desc: 'Safe, delicate gold jewellery crafted for children.', img: 'https://images.unsplash.com/photo-1608042314453-ae338d9c07e3?w=500&q=80' },
];

export default function GoldCollections() {
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
      el.style.transition = `all 0.75s cubic-bezier(0.4,0,0.2,1) ${i * 0.07}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="collections" style={{ background: 'linear-gradient(135deg,#14161A 0%,#1E2028 50%,#14161A 100%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23d4ad5a' stroke-opacity='0.05' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='28'/%3E%3Cpath d='M60 32 C68 44 68 76 60 88 C52 76 52 44 60 32Z'/%3E%3Cpath d='M32 60 C44 52 76 52 88 60 C76 68 44 68 32 60Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }} />
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,173,90,0.07) 0%,transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="rg" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '40px', marginBottom: '64px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', background: 'rgba(212,173,90,0.10)', border: '1px solid rgba(212,173,90,0.35)', borderRadius: '50px', marginBottom: '18px' }}>
              <Sparkles size={11} color={GOLD} />
              <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2.5px', textTransform: 'uppercase', color: GOLD }}>Our Collections</span>
            </div>
            <h2 style={{ fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: '700', color: '#FFFFFF', margin: 0, lineHeight: '1.15', letterSpacing: '-0.5px' }}>
              Explore Gold <span style={{ color: GOLD }}>Collections</span>
            </h2>
          </div>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.50)', margin: 0, lineHeight: '1.85', maxWidth: '360px', paddingBottom: '4px' }}>
            From bridal masterpieces to everyday elegance — crafted for every personality and occasion.
          </p>
        </div>

        <div className="gold-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '16px' }}>
          {collections.map(({ title, desc, img }, i) => (
            <div key={title} className="rg" style={{ borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.35s ease', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.40)';
                const im = e.currentTarget.querySelector('img'); if (im) im.style.transform = 'scale(1.12)';
                const ov = e.currentTarget.querySelector('.img-overlay'); if (ov) ov.style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
                const im = e.currentTarget.querySelector('img'); if (im) im.style.transform = 'scale(1)';
                const ov = e.currentTarget.querySelector('.img-overlay'); if (ov) ov.style.opacity = '0';
              }}>
              <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(20,12,5,0.65) 0%,transparent 60%)' }} />
                <div className="img-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(212,173,90,0.18)', opacity: 0, transition: 'opacity 0.35s ease', backdropFilter: 'blur(3px)' }}>
                  <span style={{ color: '#fff', fontSize: '10px', fontWeight: '700', letterSpacing: '2.5px', textTransform: 'uppercase', border: '1px solid rgba(212,173,90,0.70)', padding: '6px 16px', borderRadius: '50px' }}>Explore</span>
                </div>
                <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '10px', fontWeight: '700', color: GOLD, letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderTop: `1px solid rgba(212,173,90,0.18)`, padding: '12px 16px' }}>
                <div style={{ width: 24, height: '2px', background: `linear-gradient(to right,${GOLD},transparent)`, borderRadius: '2px', marginBottom: '8px' }} />
                <h3 style={{ fontSize: '13px', fontWeight: '700', color: '#FFFFFF', margin: 0, lineHeight: 1.35 }}>{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) { .gold-grid { grid-template-columns: repeat(4,1fr) !important; } }
        @media (max-width: 960px)  { .gold-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 640px)  { .gold-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 400px)  { .gold-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
