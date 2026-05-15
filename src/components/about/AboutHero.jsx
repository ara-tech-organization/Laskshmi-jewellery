import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AboutImage from '../../assets/AboutStore.jpg';

export default function AboutHero() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.ra') ?? [];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
      }),
      { threshold: 0.08 }
    );
    els.forEach((el, i) => {
      el.style.opacity = '0'; el.style.transform = 'translateY(28px)';
      el.style.transition = `all 0.75s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="about-hero-section" style={{ position:'relative', height:'100vh', minHeight:'680px', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>

      {/* Background image */}
      <img src={AboutImage} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', minHeight:'100%' }} />

      {/* Overlays */}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(10,8,4,0.55) 0%, rgba(10,8,4,0.72) 100%)' }} />
      <div style={{ position:'absolute', inset:0, background:'rgba(146,46,97,0.30)' }} />

      {/* Centered content */}
      <div className="container about-hero-content" style={{ position:'relative', zIndex:2, display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', padding:'120px 24px 80px' }}>

        {/* Badge */}
        <div className="ra" style={{ display:'inline-flex', alignItems:'center', gap:'10px', padding:'8px 22px', background:'rgba(212,173,90,0.15)', border:'1px solid rgba(212,173,90,0.50)', borderRadius:'50px', marginBottom:'28px' }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:'#d4ad5a', display:'block' }} />
          <span style={{ fontSize:'11px', fontWeight:'700', letterSpacing:'3px', textTransform:'uppercase', color:'#d4ad5a' }}>Our Story</span>
          <span style={{ fontSize:'11px', color:'rgba(255,255,255,0.35)', letterSpacing:'2px' }}>— Est. 1970s</span>
        </div>

        {/* Headline */}
        <div className="ra" style={{ marginBottom:'20px' }}>
          <h1 style={{ margin:0, fontFamily:"'Poppins',sans-serif", fontSize:'clamp(32px,4.5vw,64px)', fontWeight:'700', lineHeight:'1.12', letterSpacing:'-1px', color:'#FFFFFF' }}>
            A Legacy Built on
          </h1>
          <h1 style={{ margin:0, fontFamily:"'Poppins',sans-serif", fontSize:'clamp(32px,4.5vw,64px)', fontWeight:'700', lineHeight:'1.12', letterSpacing:'-1px', background:'linear-gradient(135deg,#d4ad5a 0%,#E8D08A 50%,#b08a3a 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', paddingBottom:'6px' }}>
            Trust, Craftsmanship &amp; Elegance
          </h1>
        </div>

        {/* Divider */}
        <div className="ra" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'12px', marginBottom:'24px' }}>
          <div style={{ width:'60px', height:'1px', background:'rgba(212,173,90,0.40)' }} />
          <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#d4ad5a', opacity:0.7 }} />
          <div style={{ width:'60px', height:'1px', background:'rgba(212,173,90,0.40)' }} />
        </div>

        {/* Paragraph */}
        <p className="ra" style={{ fontSize:'15px', lineHeight:'1.9', color:'rgba(255,255,255,0.65)', maxWidth:'620px', margin:'0 auto 36px' }}>
          For 50+ years, Sri Lakshmi Thanga Maaligai has been a trusted destination for premium jewellery collections crafted with purity, passion, and precision. Rooted in tradition and inspired by modern luxury, we proudly serve generations of families with jewellery that celebrates life's most meaningful moments.
        </p>

        {/* Stats row */}
        <div className="ra about-stats" style={{ display:'flex', gap:0, marginBottom:'36px', borderTop:'1px solid rgba(212,173,90,0.15)', borderBottom:'1px solid rgba(212,173,90,0.15)', padding:'18px 0', width:'100%', maxWidth:'640px' }}>
          {[['50+','Years of Legacy'],['25K+','Happy Families'],['5K+','Unique Designs'],['100%','BIS Certified']].map(([n, l], i) => (
            <div key={l} style={{ flex:1, textAlign:'center', borderRight: i < 3 ? '1px solid rgba(212,173,90,0.15)' : 'none' }}>
              <div style={{ fontSize:'clamp(20px,2.2vw,30px)', fontWeight:'800', color:'#d4ad5a', lineHeight:1, fontFamily:"'Poppins',sans-serif" }}>{n}</div>
              <div style={{ fontSize:'10px', color:'rgba(255,255,255,0.40)', marginTop:'6px', letterSpacing:'1px', textTransform:'uppercase' }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="ra">
          <Link to="/gold" style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'14px 36px', fontSize:'14px', fontWeight:'600', background:'linear-gradient(135deg,#d4ad5a,#b08a3a)', color:'#1a1208', textDecoration:'none', borderRadius:'50px', boxShadow:'0 4px 18px rgba(212,173,90,0.30)', transition:'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(212,173,90,0.40)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 18px rgba(212,173,90,0.30)'; }}>
            Our Collections
          </Link>
        </div>
      </div>

    </section>
  );
}
