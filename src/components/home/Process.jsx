import { useEffect } from 'react';
import { MessageCircle, Gem, Pencil, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Book a Consultation',
    desc: 'Visit our store or reach us by phone to share your requirements, occasion, budget, and design preferences with our expert jewellery advisors.',
  },
  {
    icon: Pencil,
    step: '02',
    title: 'Design & Customise',
    desc: 'Our skilled artisans craft a design concept based on your vision — from classic heritage pieces to modern contemporary styles.',
  },
  {
    icon: Gem,
    step: '03',
    title: 'Crafted with Purity',
    desc: 'Every jewel is handcrafted using certified BIS hallmarked gold, silver, platinum, and certified diamonds with meticulous attention to detail.',
  },
  {
    icon: PackageCheck,
    step: '04',
    title: 'Delivered with Pride',
    desc: 'Your jewellery is carefully finished, quality-checked, and presented to you with a certificate of authenticity and premium packaging.',
  },
];

export default function Process() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-process');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(32px)';
      el.style.transition = `all 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 0.12}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: 'linear-gradient(135deg,#14161A 0%,#1E2028 50%,#14161A 100%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Floral tile pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23c4c2c1' stroke-opacity='0.06' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='28'/%3E%3Ccircle cx='60' cy='60' r='18'/%3E%3Cpath d='M60 32 C68 44 68 76 60 88 C52 76 52 44 60 32Z'/%3E%3Cpath d='M32 60 C44 52 76 52 88 60 C76 68 44 68 32 60Z'/%3E%3Cpath d='M41 41 C50 50 70 70 79 79 C70 70 50 50 41 41Z'/%3E%3Cpath d='M79 41 C70 50 50 70 41 79 C50 70 70 50 79 41Z'/%3E%3Ccircle cx='60' cy='60' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px',
      }} />
      {/* Radial glows */}
      <div style={{ position:'absolute', top:'-60px', right:'-60px', width:'320px', height:'320px', borderRadius:'50%', background:'radial-gradient(circle, rgba(196,194,193,0.07) 0%, transparent 70%)', pointerEvents:'none', zIndex:0 }} />
      <div style={{ position:'absolute', bottom:'-60px', left:'-60px', width:'280px', height:'280px', borderRadius:'50%', background:'radial-gradient(circle, rgba(196,194,193,0.05) 0%, transparent 70%)', pointerEvents:'none', zIndex:0 }} />
      <div style={{ position:'relative', zIndex:1 }} className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="section-tag reveal-process" style={{ justifyContent: 'center' }}>Our Process</div>
          <h2 className="reveal-process" style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(28px,3vw,44px)', fontWeight: '600', color: '#FFFFFF', marginBottom: '16px' }}>
            From Vision to <span style={{ color: '#d4ad5a' }}>Your Hands</span>
          </h2>
          <p className="reveal-process" style={{ fontFamily: "'Poppins',sans-serif", fontSize: '15px', color: 'rgba(255,255,255,0.6)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>
            A seamless, personal journey — from your first conversation to the moment you wear your dream jewellery.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', position: 'relative' }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute',
            top: '48px', left: '12.5%', right: '12.5%',
            height: '1px',
            background: 'linear-gradient(to right, #c4c2c1, rgba(196,194,193,0.2), #c4c2c1, rgba(196,194,193,0.2))',
            backgroundSize: '200% 1px',
            zIndex: 0,
          }} />

          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <div
              key={step}
              className="reveal-process"
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center', padding: '0 24px 0',
                position: 'relative', zIndex: 1,
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: '96px', height: '96px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)',
                  border: '2px solid rgba(196,194,193,0.35)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '28px',
                  boxShadow: '0 8px 24px rgba(196,194,193,0.12)',
                  transition: 'all 0.35s ease',
                  cursor: 'default',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg,#c4c2c1,#8a8886)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(196,194,193,0.35)';
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                  e.currentTarget.querySelector('svg').style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(196,194,193,0.12)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.querySelector('svg').style.color = '#c4c2c1';
                }}
              >
                <Icon size={32} color="#c4c2c1" style={{ transition: 'color 0.35s ease' }} />

                {/* Step number badge */}
                <div style={{
                  position: 'absolute', top: '-4px', right: '-4px',
                  width: '26px', height: '26px', borderRadius: '50%',
                  background: 'linear-gradient(135deg,#c4c2c1,#8a8886)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: '10px', fontWeight: '600', color: '#fff',
                  border: '2px solid #14161A',
                }}>
                  {step}
                </div>
              </div>

              <h3 style={{ fontFamily: "'Poppins',sans-serif", fontSize: '16px', fontWeight: '600', color: '#FFFFFF', marginBottom: '12px' }}>
                {title}
              </h3>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '13px', lineHeight: '1.8', color: 'rgba(255,255,255,0.55)' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section .container > div:last-child {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
          section .container > div:last-child > div::before { display: none; }
        }
        @media (max-width: 480px) {
          section .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
