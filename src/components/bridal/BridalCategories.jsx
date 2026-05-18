import { useEffect, useRef, useState } from 'react';
import { Crown, X } from 'lucide-react';
import bridalTraditional from '../../assets/collections/bridal/bridal-traditional.png';
import bridalTemple from '../../assets/collections/bridal/bridal-temple.png';
import bridalDiamond from '../../assets/collections/bridal/bridal-diamond.png';
import bridalPlatinum from '../../assets/collections/bridal/bridal-platinum.png';
import bridalReception from '../../assets/collections/bridal/bridal-reception.png';
import bridalCustomized from '../../assets/collections/bridal/bridal-customized.png';

const GOLD = '#d4ad5a';

const categories = [
  { title: 'Traditional Bridal Jewellery', img: bridalTraditional },
  { title: 'Temple Jewellery',             img: bridalTemple },
  { title: 'Diamond Bridal Collections',   img: bridalDiamond },
  { title: 'Platinum Couple Jewellery',    img: bridalPlatinum },
  { title: 'Reception Jewellery',          img: bridalReception },
  { title: 'Customized Bridal Sets',       img: bridalCustomized },
];

export default function BridalCategories() {
  const ref = useRef(null);
  const [modal, setModal] = useState(null);

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
      el.style.transition = `all 0.75s cubic-bezier(0.4,0,0.2,1) ${i * 0.07}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="collections" style={{ background: '#FEF9F0', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.05' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='28'/%3E%3Cpath d='M60 32 C68 44 68 76 60 88 C52 76 52 44 60 32Z'/%3E%3Cpath d='M32 60 C44 52 76 52 88 60 C76 68 44 68 32 60Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="rb" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '40px', marginBottom: '56px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', background: 'rgba(146,46,97,0.10)', border: '1px solid rgba(146,46,97,0.35)', borderRadius: '50px', marginBottom: '18px' }}>
              <Crown size={11} color="#922e61" />
              <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#922e61' }}>Bridal Categories</span>
            </div>
            <h2 style={{ fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: '700', color: '#1a1208', margin: 0, lineHeight: '1.15', letterSpacing: '-0.5px' }}>
              Explore Bridal <span style={{ color: GOLD }}>Collections</span>
            </h2>
          </div>
          <p style={{ fontSize: '15px', color: '#5a4a30', margin: 0, lineHeight: '1.85', maxWidth: '360px', paddingBottom: '4px' }}>
            Complete bridal sets and personalized styling — everything for your dream wedding look.
          </p>
        </div>

        <div className="bridal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
          {categories.map(({ title, img }, i) => (
            <div key={title} className="rb" style={{ borderRadius: '18px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.35s ease', boxShadow: '0 4px 20px rgba(212,173,90,0.10)', border: '1px solid rgba(212,173,90,0.12)' }}
              onClick={() => setModal({ img, title })}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(212,173,90,0.12)';
                e.currentTarget.style.borderColor = 'rgba(212,173,90,0.35)';
                const im = e.currentTarget.querySelector('img'); if (im) im.style.transform = 'scale(1.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(212,173,90,0.10)';
                e.currentTarget.style.borderColor = 'rgba(212,173,90,0.12)';
                const im = e.currentTarget.querySelector('img'); if (im) im.style.transform = 'scale(1)';
              }}>
              <div style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(26,18,8,0.72) 0%,transparent 55%)' }} />
                <div style={{ position: 'absolute', top: '12px', left: '12px', fontSize: '10px', fontWeight: '700', color: GOLD, letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
              <div style={{ background: '#FFFFFF', borderTop: '1px solid rgba(212,173,90,0.12)', padding: '14px 18px' }}>
                <div style={{ width: 24, height: '2px', background: `linear-gradient(to right,${GOLD},transparent)`, borderRadius: '2px', marginBottom: '8px' }} />
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#1a1208', margin: 0, lineHeight: 1.35 }}>{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <div onClick={() => setModal(null)} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(10,6,2,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(6px)' }}>
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '820px', width: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.55)', border: '1px solid rgba(212,173,90,0.25)' }}>
            <img src={modal.img} alt={modal.title} style={{ width: '100%', display: 'block', maxHeight: '80vh', objectFit: 'contain', background: '#1a1208' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 22px', background: 'linear-gradient(to top,rgba(10,6,2,0.85),transparent)' }}>
              <p style={{ margin: 0, color: '#fff', fontSize: '15px', fontWeight: '600', letterSpacing: '0.3px' }}>{modal.title}</p>
            </div>
            <button onClick={() => setModal(null)} style={{ position: 'absolute', top: '14px', right: '14px', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(10,6,2,0.70)', border: '1px solid rgba(212,173,90,0.40)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) { .bridal-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .bridal-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
