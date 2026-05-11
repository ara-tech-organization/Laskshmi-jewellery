import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Krishnamurthy',
    role: 'Bride, Chennai',
    initials: 'PK',
    review: 'The bridal set I got from Sri Lakshimi Thanga Maligai was beyond my expectations. Every piece was crafted beautifully and the staff guided me with so much warmth. My wedding looked absolutely magical.',
    rating: 5,
  },
  {
    name: 'Ramesh Venkataraman',
    role: 'Regular Customer, Coimbatore',
    initials: 'RV',
    review: "I have been buying jewellery from this store for over 15 years. Their gold quality is unmatched and pricing is always fair and transparent. I would never go anywhere else for my family's jewellery needs.",
    rating: 5,
  },
  {
    name: 'Anitha Sundaram',
    role: 'Gifting Customer, Madurai',
    initials: 'AS',
    review: "Bought a diamond pendant set as a gift for my mother's 60th birthday. The staff helped me choose something perfect within my budget. My mother was in tears of joy. Excellent service and exquisite designs.",
    rating: 5,
  },
  {
    name: 'Karthik Selvam',
    role: 'Groom, Trichy',
    initials: 'KS',
    review: 'Purchased platinum couple rings for our wedding. The quality is outstanding and the custom engraving was done with such precision. The entire experience was premium from start to finish.',
    rating: 5,
  },
  {
    name: 'Deepa Murugesan',
    role: 'Repeat Customer, Salem',
    initials: 'DM',
    review: 'Every piece I have purchased here has been truly special. The temple jewellery collection is stunning and authentically crafted. This is a store that genuinely understands tradition and quality.',
    rating: 5,
  },
];

function Avatar({ initials, size = 48 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: 'linear-gradient(135deg, #922e61 0%, #7a2451 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 4px 14px rgba(146,46,97,0.35)',
    }}>
      <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: size * 0.33 + 'px', fontWeight: '600', color: '#fff', letterSpacing: '0.5px', lineHeight: 1 }}>
        {initials}
      </span>
    </div>
  );
}

const VISIBLE = 3;

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const [animDir, setAnimDir] = useState(null);
  const [animating, setAnimating] = useState(false);
  const autoRef = useRef(null);

  const total = testimonials.length;

  const slide = (dir) => {
    if (animating) return;
    setAnimDir(dir);
    setAnimating(true);
    setTimeout(() => {
      setStart(prev => (prev + dir + total) % total);
      setAnimDir(null);
      setAnimating(false);
    }, 320);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => slide(1), 4500);
    return () => clearInterval(autoRef.current);
  }, [animating]);

  // get 3 visible cards with wrap-around
  const visible = Array.from({ length: VISIBLE }, (_, i) => testimonials[(start + i) % total]);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal-test');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el, i) => {
      el.style.opacity = '0'; el.style.transform = 'translateY(28px)';
      el.style.transition = `all 0.65s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: '#FAF6EE', padding: '100px 0', overflow: 'hidden' }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="section-tag reveal-test">Testimonials</div>
            <h2 className="reveal-test" style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(28px,3vw,44px)', fontWeight: '600', color: '#1A1610', margin: 0 }}>
              What Our <span style={{ color: '#922e61' }}>Families Say</span>
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="reveal-test" style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
            <button
              onClick={() => slide(-1)}
              style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(146,46,97,0.08)', border: '1px solid rgba(146,46,97,0.25)', color: '#922e61', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(146,46,97,0.18)'; e.currentTarget.style.transform = 'scale(1.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(146,46,97,0.08)'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => slide(1)}
              style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg,#922e61,#7a2451)', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', boxShadow: '0 4px 16px rgba(146,46,97,0.35)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(146,46,97,0.50)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(146,46,97,0.35)'; }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div
          className="reveal-test"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            transition: 'opacity 0.32s ease',
            opacity: animating ? 0 : 1,
          }}
        >
          {visible.map((t, i) => (
            <div
              key={t.name + i}
              style={{
                background: i === 1
                  ? 'linear-gradient(135deg,#14161A 0%,#1E2028 100%)'
                  : '#FFFFFF',
                border: i === 1
                  ? '1px solid rgba(212,173,90,0.30)'
                  : '1px solid rgba(212,173,90,0.12)',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                transition: 'all 0.35s ease',
                position: 'relative',
                transform: i === 1 ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: i === 1 ? '0 20px 60px rgba(212,173,90,0.12)' : 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(212,173,90,0.45)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(212,173,90,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = i === 1 ? 'rgba(212,173,90,0.30)' : 'rgba(212,173,90,0.12)';
                e.currentTarget.style.transform = i === 1 ? 'translateY(-10px)' : 'translateY(0)';
                e.currentTarget.style.boxShadow = i === 1 ? '0 20px 60px rgba(0,0,0,0.30)' : 'none';
              }}
            >
              {/* Large decorative quote mark */}
              <div style={{
                position: 'absolute', top: '20px', right: '24px',
                fontFamily: 'Georgia, serif',
                fontSize: '80px',
                lineHeight: 1,
                color: i === 1 ? 'rgba(212,173,90,0.18)' : 'rgba(212,173,90,0.15)',
                fontWeight: '600',
                pointerEvents: 'none',
                userSelect: 'none',
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px' }}>
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={14} fill={s <= t.rating ? '#922e61' : 'transparent'} color="#922e61" />
                ))}
              </div>

              {/* Review text */}
              <p style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: '14px', lineHeight: '1.85',
                color: i === 1 ? 'rgba(255,255,255,0.80)' : '#5A4F3F',
                margin: 0,
                flex: 1,
              }}>
                "{t.review}"
              </p>

              {/* Divider */}
              <div style={{ height: '1px', background: i === 1 ? 'rgba(212,173,90,0.20)' : 'rgba(212,173,90,0.15)' }} />

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Avatar initials={t.initials} size={44} />
                <div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '14px', fontWeight: '600', color: i === 1 ? '#FFFFFF' : '#1A1610', marginBottom: '2px' }}>{t.name}</div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '12px', color: i === 1 ? '#922e61' : '#8A7A60' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Dot indicators ── */}
        <div className="reveal-test" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '40px' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { if (!animating) { setStart(i); } }}
              style={{
                width: i === start ? '28px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === start ? '#d4ad5a' : 'rgba(212,173,90,0.20)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'all 0.35s ease',
              }}
            />
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .test-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .test-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
