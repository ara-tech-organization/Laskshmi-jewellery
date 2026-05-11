import { useEffect, useRef, useState } from 'react';
import { Sparkles, X } from 'lucide-react';

import imgBridalSet    from '../../assets/collections/gold/gold-bridal-set.png';
import imgLongChain    from '../../assets/collections/gold/gold-long-chain.png';
import imgShortNeck    from '../../assets/collections/gold/gold-short-necklace.png';
import imgTemple       from '../../assets/collections/gold/gold-temple.png';
import imgAntique      from '../../assets/collections/gold/gold-antique.png';
import imgBangles      from '../../assets/collections/gold/gold-bangles.png';
import imgEarrings     from '../../assets/collections/gold/gold-earrings.png';
import imgRings        from '../../assets/collections/gold/gold-rings.png';
import imgDailyWear    from '../../assets/collections/gold/gold-daily-wear.png';
import imgKids         from '../../assets/collections/gold/gold-kids.png';

const GOLD = '#d4ad5a';

const collections = [
  { title: 'Bridal Gold Sets',    desc: 'Complete bridal sets for your most cherished day.',          img: imgBridalSet },
  { title: 'Long Chains',         desc: 'Elegant long chains in classic and contemporary designs.',    img: imgLongChain },
  { title: 'Short Necklaces',     desc: 'Versatile short necklaces for everyday and festive wear.',    img: imgShortNeck },
  { title: 'Temple Jewellery',    desc: 'Intricate temple designs inspired by ancient craftsmanship.', img: imgTemple },
  { title: 'Antique Collections', desc: 'Heritage-style antique pieces with timeless character.',      img: imgAntique },
  { title: 'Bangles & Bracelets', desc: 'Stacking bangles and delicate bracelets for every wrist.',   img: imgBangles },
  { title: 'Earrings',            desc: 'From studs to chandbalis — gold earrings for every look.',    img: imgEarrings },
  { title: 'Rings',               desc: 'Solitaire, band, and statement rings in pure gold.',          img: imgRings },
  { title: 'Daily Wear',          desc: 'Lightweight, comfortable pieces for everyday elegance.',      img: imgDailyWear },
  { title: 'Kids Jewellery',      desc: 'Safe, delicate gold jewellery crafted for children.',         img: imgKids },
];

export default function GoldCollections() {
  const ref = useRef(null);
  const [modal, setModal] = useState(null);

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
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top,rgba(20,12,5,0.90) 0%,transparent 60%)', padding: '32px 24px 20px' }}>
              <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: '700', margin: 0 }}>{modal.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', margin: '6px 0 0' }}>{modal.desc}</p>
            </div>
            <button onClick={() => setModal(null)} style={{ position: 'absolute', top: '14px', right: '14px', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <X size={16} />
            </button>
          </div>
        </div>
      )}

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
                onClick={() => setModal({ img, title, desc })}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.40)';
                  const im = e.currentTarget.querySelector('img'); if (im) im.style.transform = 'scale(1.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
                  const im = e.currentTarget.querySelector('img'); if (im) im.style.transform = 'scale(1)';
                }}>
                <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                  <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(20,12,5,0.65) 0%,transparent 60%)' }} />
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
    </>
  );
}
