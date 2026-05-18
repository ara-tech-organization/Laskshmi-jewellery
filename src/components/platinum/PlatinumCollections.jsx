import { useEffect, useRef, useState } from 'react';
import { Sparkles, X } from 'lucide-react';

import imgCoupleRings   from '../../assets/collections/platinum/platinum-couple-rings.png';
import imgEngagement    from '../../assets/collections/platinum/platinum-engagement.png';
import imgWeddingBands  from '../../assets/collections/platinum/platinum-wedding-bands.png';
import imgChains        from '../../assets/collections/platinum/platinum-chains.png';
import imgPendants      from '../../assets/collections/platinum/platinum-pendants.png';
import imgContemporary  from '../../assets/collections/platinum/platinum-contemporary.png';

const ACCENT = '#D8D8D8';

const collections = [
  { title: 'Platinum Couple Rings', desc: 'Matching platinum rings symbolizing eternal love.',                    img: imgCoupleRings },
  { title: 'Engagement Rings',      desc: 'Timeless platinum engagement rings for precious proposals.',           img: imgEngagement },
  { title: 'Wedding Bands',         desc: 'Classic and contemporary wedding bands in pure platinum.',             img: imgWeddingBands },
  { title: 'Platinum Chains',       desc: 'Sleek, durable platinum chains in refined contemporary styles.',       img: imgChains },
  { title: 'Pendants',              desc: 'Elegant platinum pendants for everyday and special occasions.',         img: imgPendants },
  { title: 'Contemporary Pieces',   desc: 'Modern platinum jewellery for the discerning lifestyle.',              img: imgContemporary },
];

export default function PlatinumCollections() {
  const ref = useRef(null);
  const [modal, setModal] = useState(null);

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

  useEffect(() => {
    if (modal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

  return (
    <>
      {modal && (
        <div onClick={() => setModal(null)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '700px', width: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>
            <img src={modal.img} alt={modal.title} style={{ width: '100%', display: 'block', maxHeight: '80vh', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top,rgba(17,19,24,0.92) 0%,transparent 60%)', padding: '32px 24px 20px' }}>
              <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: '700', margin: 0 }}>{modal.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', margin: '6px 0 0' }}>{modal.desc}</p>
            </div>
            <button onClick={() => setModal(null)} style={{ position: 'absolute', top: '14px', right: '14px', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <X size={16} />
            </button>
          </div>
        </div>
      )}

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
                onClick={() => setModal({ img, title, desc })}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.50)';
                  const im = e.currentTarget.querySelector('img'); if (im) im.style.transform = 'scale(1.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.30)';
                  const im = e.currentTarget.querySelector('img'); if (im) im.style.transform = 'scale(1)';
                }}>
                <div style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden' }}>
                  <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(17,19,24,0.75) 0%,transparent 60%)' }} />
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
    </>
  );
}
