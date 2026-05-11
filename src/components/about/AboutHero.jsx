import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
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
      el.style.transition = `all 0.75s cubic-bezier(0.4,0,0.2,1) ${i * 0.09}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ position:'relative', height:'100vh', minHeight:'700px', display:'flex', alignItems:'center', overflow:'hidden' }}>
      <img src={AboutImage} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block' }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(110deg, rgba(10,8,4,0.95) 0%, rgba(146,46,97,0.85) 45%, rgba(146,46,97,0.35) 75%, rgba(176,138,58,0.15) 100%)' }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(10,8,4,0.70) 0%, transparent 45%)' }} />
      <div style={{ position:'absolute', top:0, left:0, right:0, height:'200px', background:'linear-gradient(to bottom, rgba(212,173,90,0.04) 0%, transparent 100%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.04' stroke-width='1'%3E%3Ccircle cx='80' cy='80' r='36'/%3E%3Ccircle cx='80' cy='80' r='22'/%3E%3Cpath d='M80 44 C90 58 90 102 80 116 C70 102 70 58 80 44Z'/%3E%3Cpath d='M44 80 C58 70 102 70 116 80 C102 90 58 90 44 80Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize:'160px 160px' }} />
      <div style={{ position:'absolute', left:0, top:0, bottom:0, width:'4px', background:'linear-gradient(to bottom, transparent 0%, #d4ad5a 30%, #b08a3a 70%, transparent 100%)', opacity:0.5 }} />

      <div className="container" style={{ position:'relative', zIndex:2, padding:'180px 24px 80px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:'60px', alignItems:'center', maxWidth:'1100px' }}>

          <div>
            <div className="ra" style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'32px' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'10px', padding:'8px 20px', background:'rgba(212,173,90,0.15)', border:'1px solid rgba(212,173,90,0.50)', borderRadius:'50px' }}>
                <span style={{ width:6, height:6, borderRadius:'50%', background:'#d4ad5a', display:'block', boxShadow:'0 0 5px rgba(212,173,90,0.35)' }} />
                <span style={{ fontSize:'11px', fontWeight:'700', letterSpacing:'3px', textTransform:'uppercase', color:'#d4ad5a' }}>Our Story</span>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                <div style={{ width:'32px', height:'1px', background:'rgba(212,173,90,0.35)' }} />
                <span style={{ fontSize:'11px', color:'rgba(255,255,255,0.30)', letterSpacing:'2px', textTransform:'uppercase' }}>Est. 1970s</span>
              </div>
            </div>

            <div className="ra" style={{ marginBottom:'10px' }}>
              <h1 style={{ margin:0, fontFamily:"'Poppins',sans-serif", fontSize:'clamp(28px,3.2vw,52px)', fontWeight:'700', lineHeight:'1.1', letterSpacing:'-0.5px', color:'#FFFFFF' }}>
                A Legacy Built on
              </h1>
              <h1 style={{ margin:0, fontFamily:"'Poppins',sans-serif", fontSize:'clamp(28px,3.2vw,52px)', fontWeight:'700', lineHeight:'1.1', letterSpacing:'-0.5px', background:'linear-gradient(135deg,#d4ad5a 0%,#E8D08A 50%,#b08a3a 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                Trust, Craftsmanship
              </h1>
              <h1 style={{ margin:0, fontFamily:"'Poppins',sans-serif", fontSize:'clamp(28px,3.2vw,52px)', fontWeight:'700', lineHeight:'1.1', letterSpacing:'-0.5px', background:'linear-gradient(135deg,#d4ad5a 0%,#E8D08A 50%,#b08a3a 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                &amp; Elegance
              </h1>
            </div>

            <div className="ra" style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'28px', marginTop:'24px' }}>
              <div style={{ width:'60px', height:'2px', background:'linear-gradient(to right,#d4ad5a,rgba(212,173,90,0.2))' }} />
              <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#d4ad5a', opacity:0.6 }} />
              <div style={{ width:'30px', height:'1px', background:'rgba(212,173,90,0.2)' }} />
            </div>

            <p className="ra" style={{ fontSize:'15px', lineHeight:'1.95', color:'rgba(255,255,255,0.62)', marginBottom:'0', maxWidth:'560px' }}>
              For 50+ years, Sri Lakshimi Thanga Maligai has been a trusted destination for premium jewellery collections crafted with purity, passion, and precision. Rooted in tradition and inspired by modern luxury, we proudly serve generations of families with jewellery that celebrates life's most meaningful moments.
            </p>

            <div className="ra" style={{ display:'flex', gap:0, margin:'36px 0', borderTop:'1px solid rgba(212,173,90,0.12)', borderBottom:'1px solid rgba(212,173,90,0.12)', padding:'20px 0' }}>
              {[['50+','Years of Legacy'],['10K+','Happy Families'],['5K+','Unique Designs'],['100%','BIS Certified']].map(([n,l],i) => (
                <div key={l} style={{ flex:1, textAlign:'center', borderRight: i<3 ? '1px solid rgba(212,173,90,0.12)' : 'none', padding:'0 8px' }}>
                  <div style={{ fontSize:'clamp(20px,2vw,28px)', fontWeight:'800', color:'#d4ad5a', lineHeight:1, fontFamily:"'Poppins',sans-serif" }}>{n}</div>
                  <div style={{ fontSize:'10px', color:'rgba(255,255,255,0.35)', marginTop:'6px', letterSpacing:'1px', textTransform:'uppercase', lineHeight:1.4 }}>{l}</div>
                </div>
              ))}
            </div>

            <div className="ra" style={{ display:'flex', gap:'14px', flexWrap:'wrap', alignItems:'center' }}>
              <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:'10px', padding:'14px 32px', background:'linear-gradient(135deg,#d4ad5a,#b08a3a)', color:'#fff', textDecoration:'none', borderRadius:'50px', fontSize:'14px', fontWeight:'600', boxShadow:'0 4px 14px rgba(212,173,90,0.18)', transition:'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 6px 18px rgba(212,173,90,0.20)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 14px rgba(212,173,90,0.18)'; }}>
                Visit Our Store <ArrowRight size={15} />
              </a>
              <a href="/gold" style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'13px 28px', fontSize:'14px', fontWeight:'500', border:'1.5px solid rgba(212,173,90,0.35)', borderRadius:'50px', color:'rgba(255,255,255,0.75)', textDecoration:'none', transition:'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='#d4ad5a'; e.currentTarget.style.color='#d4ad5a'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(212,173,90,0.35)'; e.currentTarget.style.color='rgba(255,255,255,0.75)'; }}>
                Our Collections
              </a>
            </div>
          </div>

          <div className="about-hero-right" style={{ display:'flex', flexDirection:'column', gap:'12px', minWidth:'160px' }}>
            {[
              { num:'22K', label:'Gold Purity', sub:'Hallmarked' },
              { num:'50+', label:'Years', sub:'Established' },
              { num:'4.9★', label:'Rating', sub:'Customer Reviews' },
            ].map(({ num, label, sub }) => (
              <div key={label} style={{ background:'rgba(255,255,255,0.04)', backdropFilter:'blur(16px)', border:'1px solid rgba(212,173,90,0.18)', borderRadius:'20px', padding:'22px 24px', textAlign:'center', transition:'all 0.35s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background='rgba(212,173,90,0.10)'; e.currentTarget.style.borderColor='rgba(212,173,90,0.40)'; e.currentTarget.style.transform='translateX(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor='rgba(212,173,90,0.18)'; e.currentTarget.style.transform='translateX(0)'; }}>
                <div style={{ fontSize:'28px', fontWeight:'800', color:'#d4ad5a', lineHeight:1, fontFamily:"'Poppins',sans-serif" }}>{num}</div>
                <div style={{ fontSize:'12px', fontWeight:'600', color:'#FFFFFF', marginTop:'6px' }}>{label}</div>
                <div style={{ fontSize:'10px', color:'rgba(255,255,255,0.35)', marginTop:'3px', letterSpacing:'0.5px' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position:'absolute', bottom:'36px', left:'50%', transform:'translateX(-50%)', zIndex:3, display:'flex', flexDirection:'column', alignItems:'center', gap:'8px' }}>
        <span style={{ fontSize:'10px', color:'rgba(255,255,255,0.30)', letterSpacing:'2px', textTransform:'uppercase' }}>Scroll</span>
        <div style={{ width:'1px', height:'40px', background:'linear-gradient(to bottom,rgba(212,173,90,0.60),transparent)' }} />
      </div>

      <style>{`@media (max-width: 960px) { .about-hero-right { display: none !important; } }`}</style>
    </section>
  );
}
