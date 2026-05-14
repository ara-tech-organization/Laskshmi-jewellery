import { ArrowRight, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroImage from '../../assets/Hero2.png';

const stats = [
  { num: '25+',  label: 'Years of Trust' },
  { num: '10K+', label: 'Happy Families' },
  { num: '5K+',  label: 'Unique Designs' },
];

export default function Hero() {
  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>

      {/* ── Full-bleed background image ── */}
      <img
        src={HeroImage}
        alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          display: 'block',
        }}
      />



      {/* ── CONTENT ── */}
      <div className="container" style={{ position:'relative', zIndex:2, padding:'80px 24px 60px' }}>
        <div style={{ maxWidth:'560px' }}>

          {/* Badge */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            padding:'7px 16px',
            background:'rgba(212,173,90,0.15)',
            border:'1px solid rgba(212,173,90,0.50)',
            borderRadius:'50px', marginBottom:'24px',
            animation:'fadeUp 0.5s ease both',
          }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#d4ad5a', display:'block' }} />
            <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', fontWeight:'600', letterSpacing:'2px', textTransform:'uppercase', color:'#d4ad5a' }}>
              Trusted Since Generations
            </span>
          </div>

          {/* Heading */}
          <h1 style={{ margin:'0 0 20px', animation:'fadeUp 0.6s ease 0.1s both' }}>
            <span style={{ display:'block', fontFamily:"'Poppins',sans-serif", fontSize:'clamp(32px,4vw,58px)', fontWeight:'700', lineHeight:'1.1', letterSpacing:'-1px', color:'#1a1208' }}>
              Crafting Timeless
            </span>
            <span style={{ display:'block', fontFamily:"'Poppins',sans-serif", fontSize:'clamp(32px,4vw,58px)', fontWeight:'700', lineHeight:'1.1', letterSpacing:'-1px', color:'#d4ad5a' }}>
              Gold Jewellery
            </span>
          </h1>

          {/* Sub */}
          <p style={{
            fontFamily:"'Poppins',sans-serif", fontSize:'15px', lineHeight:'1.85',
            color:'rgba(0,0,0,0.60)', maxWidth:'420px', marginBottom:'32px',
            animation:'fadeUp 0.6s ease 0.18s both',
          }}>
            From grand bridal sets to elegant everyday pieces — every jewel crafted with certified purity and exceptional artistry for every cherished moment.
          </p>

          {/* Buttons */}
          <div style={{ display:'flex', gap:'14px', flexWrap:'wrap', marginBottom:'40px', animation:'fadeUp 0.6s ease 0.24s both' }}>
            <a href="#" onClick={e => { e.preventDefault(); document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{ padding:'13px 30px', fontSize:'14px' }}>
              Explore Collections <ArrowRight size={15} />
            </a>
          </div>

          {/* Stats */}
          <div style={{ display:'flex', gap:'32px', marginBottom:'24px', animation:'fadeUp 0.6s ease 0.3s both' }}>
            {stats.map(({ num, label }, i) => (
              <div key={label} style={{
                paddingRight: i < 2 ? '32px' : 0,
                borderRight: i < 2 ? '1px solid rgba(212,173,90,0.22)' : 'none',
              }}>
                <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:'28px', fontWeight:'700', color:'#d4ad5a', lineHeight:1 }}>{num}</div>
                <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:'11px', color:'rgba(0,0,0,0.50)', marginTop:'4px' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* BIS */}
          <div style={{ display:'flex', alignItems:'center', gap:'8px', animation:'fadeUp 0.6s ease 0.36s both' }}>
            <div style={{ width:26, height:26, borderRadius:'50%', background:'linear-gradient(135deg,#d4ad5a,#b08a3a)', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <Shield size={12} color="#fff" />
            </div>
            <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:'12px', color:'#3a3a3a' }}>
              All jewellery <strong style={{ color:'#d4ad5a', fontWeight:'600' }}>BIS Hallmarked</strong> & certified
            </span>
          </div>
        </div>
      </div>

      {/* Floating rating chip */}
      <div style={{
        position:'absolute', bottom:'5%', right:'4%', zIndex:3,
        background:'rgba(255,255,255,0.96)', backdropFilter:'blur(12px)',
        border:'1px solid rgba(212,173,90,0.25)', borderRadius:'14px',
        padding:'12px 16px', boxShadow:'0 8px 32px rgba(0,0,0,0.20)',
        animation:'floatY 4s ease-in-out infinite',
      }}>
        <div style={{ display:'flex', gap:'3px', marginBottom:'4px' }}>
          {[1,2,3,4,5].map(s => <Star key={s} size={11} fill="#d4ad5a" color="#d4ad5a" />)}
        </div>
        <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:'12px', fontWeight:'600', color:'#1A1610' }}>10,000+ Families</div>
        <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:'10px', color:'#8a6070' }}>Trusted Legacy</div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @media (max-width: 768px) {
          #home .container { padding: 100px 24px 80px !important; }
        }
      `}</style>
    </section>
  );
}
