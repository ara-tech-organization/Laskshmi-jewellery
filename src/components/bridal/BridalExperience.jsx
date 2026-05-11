import { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const GOLD = '#d4ad5a';

const experienceSteps = [
  { num: '01', title: 'Bridal Consultation', desc: 'Meet our bridal experts for a personalized one-on-one jewellery consultation session.' },
  { num: '02', title: 'Style Selection',     desc: 'Explore our exclusive bridal collections and select designs that match your attire and personality.' },
  { num: '03', title: 'Custom Crafting',     desc: 'We craft or customize your chosen pieces with precision and premium finishing.' },
  { num: '04', title: 'Perfect Delivery',    desc: 'Your bridal jewellery is delivered beautifully packed and ready for your most cherished day.' },
];

export default function BridalExperience() {
  const ref = useRef(null);
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
    <section ref={ref} style={{ background: 'linear-gradient(135deg,#14161A 0%,#1E2028 50%,#14161A 100%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.04' stroke-width='1'%3E%3Ccircle cx='70' cy='70' r='32'/%3E%3Cpath d='M70 38 C80 52 80 88 70 102 C60 88 60 52 70 38Z'/%3E%3Cpath d='M38 70 C52 60 88 60 102 70 C88 80 52 80 38 70Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '140px 140px' }} />
      <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,173,90,0.07) 0%,transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="rb" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(146,46,97,0.15)', border: '1px solid rgba(146,46,97,0.45)', borderRadius: '50px', marginBottom: '24px' }}>
            <Sparkles size={12} color="#922e61" />
            <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', color: '#922e61' }}>Your Bridal Journey</span>
          </div>
          <h2 style={{ fontSize: 'clamp(26px,3.2vw,44px)', fontWeight: '700', color: '#FFFFFF', lineHeight: '1.2', letterSpacing: '-0.5px', marginBottom: '16px' }}>
            The <span style={{ color: GOLD }}>Bridal Experience</span>
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: 'rgba(255,255,255,0.55)', maxWidth: '560px', margin: '0 auto' }}>
            From consultation to final selection, we provide a personalized bridal jewellery experience designed to make your wedding shopping memorable and stress-free.
          </p>
        </div>

        <div className="bridal-exp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
          {experienceSteps.map(({ num, title, desc }, i) => (
            <div key={num} className="rb" style={{ position: 'relative', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,173,90,0.12)', borderRadius: '20px', padding: '36px 24px', transition: 'all 0.35s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(212,173,90,0.07)'; e.currentTarget.style.borderColor='rgba(212,173,90,0.30)'; e.currentTarget.style.transform='translateY(-6px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor='rgba(212,173,90,0.12)'; e.currentTarget.style.transform='translateY(0)'; }}>
              {i < experienceSteps.length - 1 && (
                <div style={{ position: 'absolute', top: '52px', right: '-10px', width: '20px', height: '1px', background: 'rgba(212,173,90,0.30)', zIndex: 1 }} />
              )}
              <div style={{ fontSize: '32px', fontWeight: '900', color: 'rgba(212,173,90,0.15)', lineHeight: 1, fontFamily: "'Poppins',sans-serif", marginBottom: '20px' }}>{num}</div>
              <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(212,173,90,0.10)', border: '1px solid rgba(212,173,90,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Sparkles size={18} color={GOLD} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 12px', lineHeight: 1.3 }}>{title}</h3>
              <p style={{ fontSize: '13px', lineHeight: '1.8', color: 'rgba(255,255,255,0.45)', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div className="rb" style={{ textAlign: 'center', marginTop: '56px' }}>
          <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 36px', background: 'linear-gradient(135deg,#d4ad5a,#b08a3a)', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '15px', fontWeight: '600', boxShadow: '0 4px 14px rgba(212,173,90,0.18)', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 6px 18px rgba(212,173,90,0.20)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 14px rgba(212,173,90,0.18)'; }}>
            Book Bridal Consultation <ArrowRight size={16} />
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .bridal-exp-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .bridal-exp-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
