import { useEffect } from 'react';
import { ShieldCheck, Wrench, Layers, UserCheck, BadgeDollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Trusted Purity',
    desc: 'Every piece is crafted with certified quality and BIS hallmarked assurance for complete peace of mind.',
    color: '#d4ad5a',
  },
  {
    icon: Wrench,
    title: 'Timeless Craftsmanship',
    desc: 'Our jewellery reflects detailed artistry inspired by heritage and elevated by modern design sensibilities.',
    color: '#c4c2c1',
  },
  {
    icon: Layers,
    title: 'Exclusive Designs',
    desc: 'Unique collections crafted for weddings, festivals, gifting, and everyday elegance — no two pieces alike.',
    color: '#d4ad5a',
  },
  {
    icon: UserCheck,
    title: 'Personalized Experience',
    desc: 'We guide every customer with care to find jewellery that perfectly matches their style and occasion.',
    color: '#c4c2c1',
  },
  {
    icon: BadgeDollarSign,
    title: 'Transparent Pricing',
    desc: 'Fair pricing with complete transparency and customer trust at every step of your journey with us.',
    color: '#d4ad5a',
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-why');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
      }),
      { threshold: 0.08 }
    );
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = `all 0.65s cubic-bezier(0.4,0,0.2,1) ${i * 0.09}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why-section" style={{ background: '#FAF6EE', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Floral SVG background pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.07' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='28'/%3E%3Ccircle cx='60' cy='60' r='18'/%3E%3Cpath d='M60 32 C68 44 68 76 60 88 C52 76 52 44 60 32Z'/%3E%3Cpath d='M32 60 C44 52 76 52 88 60 C76 68 44 68 32 60Z'/%3E%3Cpath d='M41 41 C50 50 70 70 79 79 C70 70 50 50 41 41Z'/%3E%3Cpath d='M79 41 C70 50 50 70 41 79 C50 70 70 50 79 41Z'/%3E%3Ccircle cx='60' cy='60' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px',
        opacity: 1,
      }} />
      {/* Corner floral accents */}
      <div style={{ position:'absolute', top:'-40px', left:'-40px', width:'200px', height:'200px', borderRadius:'50%', background:'radial-gradient(circle, rgba(212,173,90,0.06) 0%, transparent 70%)', pointerEvents:'none', zIndex:0 }} />
      <div style={{ position:'absolute', bottom:'-40px', right:'-40px', width:'240px', height:'240px', borderRadius:'50%', background:'radial-gradient(circle, rgba(212,173,90,0.05) 0%, transparent 70%)', pointerEvents:'none', zIndex:0 }} />
      <div style={{ position:'relative', zIndex:1 }} className="container">

        {/* ── Header ── */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div className="section-tag reveal-why">Why Choose Us</div>
            <h2 className="reveal-why" style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(28px,3vw,44px)', fontWeight: '600', color: '#1A1610', margin: 0 }}>
              Why Families Trust{' '}
              <span style={{ color: '#d4ad5a' }}>Sri Lakshmi Thanga Maaligai</span>
            </h2>
          </div>
          <p className="reveal-why" style={{ fontFamily: "'Poppins',sans-serif", fontSize: '14px', color: '#5A4F3F', maxWidth: '340px', lineHeight: '1.8', margin: 0 }}>
            Our commitment to quality, craftsmanship, and trust has made us a beloved destination for generations.
          </p>
        </div>

        {/* ── Two-column layout: big feature left + cards right ── */}
        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }}>

          {/* Left — large highlight card */}
          <div className="reveal-why" style={{
            background: 'linear-gradient(145deg, #922e61 0%, #7a2451 100%)',
            borderRadius: '24px',
            border: '1px solid rgba(212,173,90,0.20)',
            padding: '48px 40px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 16px 48px rgba(146,46,97,0.12)',
            minHeight: '460px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Decorative circle */}
            <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '240px', height: '240px', borderRadius: '50%', border: '1px solid rgba(212,173,90,0.08)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '340px', height: '340px', borderRadius: '50%', border: '1px solid rgba(212,173,90,0.05)', pointerEvents: 'none' }} />

            <div>
              <div style={{ width: 64, height: 64, borderRadius: '18px', background: 'linear-gradient(135deg,#d4ad5a,#b08a3a)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px', boxShadow: '0 3px 12px rgba(212,173,90,0.18)' }}>
                <ShieldCheck size={28} color="#fff" />
              </div>
              <h3 style={{ fontFamily: "'Poppins',sans-serif", fontSize: '26px', fontWeight: '600', color: '#FFFFFF', marginBottom: '16px', lineHeight: '1.3' }}>
                A Legacy Built on Trust & Purity
              </h3>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '15px', lineHeight: '1.9', color: 'rgba(255,255,255,0.55)', marginBottom: '32px' }}>
                For generations, families have trusted us to be their jewellery destination. From BIS hallmarked gold to certified diamonds, every piece reflects our unwavering commitment to quality, transparency, and artistry.
              </p>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(212,173,90,0.12)', borderRadius: '16px', overflow: 'hidden' }}>
              {[['25+','Years'], ['10K+','Families'], ['5K+','Designs']].map(([num, label]) => (
                <div key={label} style={{ padding: '20px 16px', background: 'rgba(146,46,97,0.8)', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '24px', fontWeight: '600', color: '#d4ad5a', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '4px', letterSpacing: '0.5px' }}>{label}</div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn-primary" style={{ marginTop: '28px', justifyContent: 'center' }}>
              Book a Visit <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right — 4 smaller reason cards in 2×2 */}
          <div className="why-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {reasons.slice(1).map(({ icon: Icon, title, desc, color }, i) => (
              <div
                key={title}
                className="reveal-why"
                style={{
                  padding: '28px 24px',
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  border: '1px solid rgba(212,173,90,0.09)',
                  transition: 'all 0.32s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(212,173,90,0.13)';
                  e.currentTarget.style.borderColor = 'rgba(212,173,90,0.32)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(212,173,90,0.09)';
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: '13px',
                  background: color === '#d4ad5a'
                    ? 'linear-gradient(135deg,rgba(212,173,90,0.14),rgba(212,173,90,0.04))'
                    : 'linear-gradient(135deg,rgba(196,194,193,0.18),rgba(196,194,193,0.04))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '18px',
                  border: `1px solid ${color}28`,
                }}>
                  <Icon size={22} color={color} />
                </div>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '11px', fontWeight: '600', color: color + '99', letterSpacing: '1.8px', textTransform: 'uppercase', marginBottom: '8px' }}>
                  0{i + 2}
                </div>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontSize: '15px', fontWeight: '600', color: '#1A1610', marginBottom: '10px' }}>{title}</h3>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '13px', lineHeight: '1.75', color: '#5A4F3F', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .why-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
