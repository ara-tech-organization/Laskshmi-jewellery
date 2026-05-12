import { useEffect, useRef } from 'react';
import { Gem, Heart, Crown, Sparkles } from 'lucide-react';

const pillars = [
  { icon: Gem,      title: 'Exceptional Purity',    desc: 'Every piece crafted with certified materials and BIS hallmarked assurance.' },
  { icon: Crown,    title: 'Heritage Design',        desc: 'Rooted in South Indian tradition, elevated for the modern luxury connoisseur.' },
  { icon: Heart,    title: 'Emotional Craftsmanship',desc: 'Jewellery made for life\'s most cherished moments and lasting memories.' },
  { icon: Sparkles, title: 'Bespoke Artistry',       desc: 'Custom creations tailored to your individual style and occasion.' },
];

function useScrollReveal(selector) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
      }),
      { threshold: 0.15 }
    );
    els.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(32px)'; el.style.transition = 'all 0.7s cubic-bezier(0.4,0,0.2,1)'; obs.observe(el); });
    return () => obs.disconnect();
  }, []);
}

export default function LuxuryIntro() {
  useScrollReveal('.reveal-intro');

  return (
    <section id="about" style={{ background:'#FAF6EE', padding:'100px 0', overflow:'hidden' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center' }}>
          {/* Left — Images Mosaic */}
          <div className="reveal-intro" style={{ position:'relative', height:'560px' }}>
            <div style={{
              position:'absolute', top:0, left:0,
              width:'62%', height:'68%',
              borderRadius:'20px',
              overflow:'hidden',
              boxShadow:'0 20px 60px rgba(20,12,5,0.12)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80"
                alt="Gold Jewellery Craftsmanship"
                style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s ease' }}
                onMouseEnter={e => e.target.style.transform='scale(1.06)'}
                onMouseLeave={e => e.target.style.transform='scale(1)'}
              />
            </div>
            <div style={{
              position:'absolute', bottom:0, right:0,
              width:'55%', height:'62%',
              borderRadius:'20px',
              overflow:'hidden',
              boxShadow:'0 20px 60px rgba(20,12,5,0.12)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80"
                alt="Diamond Jewellery"
                style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s ease' }}
                onMouseEnter={e => e.target.style.transform='scale(1.06)'}
                onMouseLeave={e => e.target.style.transform='scale(1)'}
              />
            </div>
            {/* Gold accent badge */}
            <div style={{
              position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
              width:'88px', height:'88px',
              background:'linear-gradient(135deg,#d4ad5a,#b08a3a)',
              borderRadius:'50%',
              display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow:'0 3px 14px rgba(212,173,90,0.20)',
              border:'4px solid #FAF6EE',
              zIndex:2,
            }}>
              <Gem size={32} color="#fff" />
            </div>
            {/* Decorative ring */}
            <div style={{
              position:'absolute', top:'50%', left:'50%',
              transform:'translate(-50%,-50%)',
              width:'108px', height:'108px',
              borderRadius:'50%',
              border:'1px dashed rgba(212,173,90,0.4)',
              zIndex:1,
              animation:'rotateGlow 12s linear infinite',
            }} />
          </div>

          {/* Right — Text */}
          <div>
            <div className="section-tag reveal-intro">Our Heritage</div>
            <h2 className="reveal-intro" style={{
              fontFamily:"'Poppins',sans-serif",
              fontSize:'clamp(28px,3vw,44px)',
              fontWeight:'600',
              lineHeight:'1.2',
              color:'#1A1610',
              marginBottom:'24px',
            }}>
              Where Heritage Becomes{' '}
              <span style={{ color:'#d4ad5a' }}>Jewellery</span>
            </h2>
            <p className="reveal-intro" style={{
              fontFamily:"'Poppins',sans-serif",
              fontSize:'15px', lineHeight:'1.9',
              color:'#5A4F3F',
              marginBottom:'16px',
            }}>
              At Sri Lakshmi Thanga Maaligai, every ornament tells a story of beauty, craftsmanship, and tradition. For generations, we have been creating jewellery that becomes part of life's most cherished moments — weddings, celebrations, achievements, and family traditions.
            </p>
            <p className="reveal-intro" style={{
              fontFamily:"'Poppins',sans-serif",
              fontSize:'15px', lineHeight:'1.9',
              color:'#5A4F3F',
              marginBottom:'48px',
            }}>
              Our collections thoughtfully blend timeless South Indian heritage with modern luxury, offering jewellery that suits every generation and occasion — from handcrafted gold bridal sets to elegant platinum rings and dazzling diamond collections.
            </p>

            {/* Pillars */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
              {pillars.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="reveal-intro"
                  style={{
                    padding:'20px',
                    background:'#FFFFFF',
                    borderRadius:'16px',
                    border:'1px solid rgba(212,173,90,0.12)',
                    transition:'all 0.35s ease',
                    cursor:'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(212,173,90,0.15)';
                    e.currentTarget.style.borderColor = 'rgba(212,173,90,0.4)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(212,173,90,0.12)';
                  }}
                >
                  <div style={{
                    width:40, height:40, borderRadius:'10px',
                    background:'linear-gradient(135deg,rgba(212,173,90,0.15),rgba(212,173,90,0.05))',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    marginBottom:'12px',
                    border:'1px solid rgba(212,173,90,0.2)',
                  }}>
                    <Icon size={18} color="#d4ad5a" />
                  </div>
                  <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:'13px', fontWeight:'600', color:'#1A1610', marginBottom:'6px' }}>{title}</div>
                  <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:'12px', lineHeight:'1.6', color:'#5A4F3F' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rotateGlow { from{transform:translate(-50%,-50%) rotate(0deg)} to{transform:translate(-50%,-50%) rotate(360deg)} }
        @media (max-width: 900px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #about .container > div > div:first-child { height: 300px !important; }
        }
      `}</style>
    </section>
  );
}
