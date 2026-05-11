import { useEffect } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import BridalBangles    from '../../assets/BridalBangles.jpg';
import bridalImg2       from '../../assets/collections/bridal/bridal-reception.png';
import bridalImg3       from '../../assets/collections/bridal/bridal-customized.png';
import bridalImg4       from '../../assets/collections/bridal/bridal-temple.png';

const specialties = [
  'Grand Bridal Gold Sets',
  'Temple Jewellery Collections',
  'Diamond Bridal Jewellery',
  'Platinum Couple Rings',
  'Customized Wedding Jewellery',
  'Family Matching Collections',
];

const bridalImages = [
  { src: bridalImg2, alt: 'Bridal Reception Jewellery' },
  { src: bridalImg3, alt: 'Customized Bridal Set' },
];

export default function Bridal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-bridal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(32px)';
      el.style.transition = `all 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="bridal" style={{ background:'#FAF6EE', padding:'100px 0', overflow:'hidden' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center' }}>
          {/* Left — Content */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'16px' }} className="reveal-bridal">
              <Sparkles size={14} color="#d4ad5a" />
              <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:'12px', fontWeight:'600', letterSpacing:'2px', textTransform:'uppercase', color:'#d4ad5a' }}>Bridal Collection</span>
            </div>

            <h2 className="reveal-bridal" style={{
              fontFamily:"'Poppins',sans-serif",
              fontSize:'clamp(28px,3vw,44px)',
              fontWeight:'600',
              lineHeight:'1.2',
              color:'#1A1610',
              marginBottom:'24px',
            }}>
              Celebrate Your Wedding with{' '}
              <span style={{ color:'#d4ad5a' }}>Timeless Grandeur</span>
            </h2>

            <p className="reveal-bridal" style={{
              fontFamily:"'Poppins',sans-serif",
              fontSize:'15px', lineHeight:'1.9', color:'#5A4F3F', marginBottom:'16px',
            }}>
              Your wedding jewellery is more than adornment — it is a symbol of love, tradition, and unforgettable memories. Our bridal collections are carefully curated to complement every bridal look.
            </p>
            <p className="reveal-bridal" style={{
              fontFamily:"'Poppins',sans-serif",
              fontSize:'15px', lineHeight:'1.9', color:'#5A4F3F', marginBottom:'40px',
            }}>
              We offer complete bridal jewellery solutions with personalized consultation, custom bridal sets, and matching accessories crafted to perfection.
            </p>

            {/* Specialties */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginBottom:'44px' }}>
              {specialties.map(item => (
                <div key={item} className="reveal-bridal" style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                  <div style={{
                    width:22, height:22, borderRadius:'50%',
                    background:'linear-gradient(135deg,#d4ad5a,#b08a3a)',
                    display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                  }}>
                    <Check size={12} color="#fff" strokeWidth={2.5} />
                  </div>
                  <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:'13px', fontWeight:'500', color:'#3A3020' }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="reveal-bridal" style={{ display:'flex', gap:'16px', flexWrap:'wrap' }}>
              <Link to="/bridal" className="btn-primary">
                See Bridal Collection
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right — Image Grid */}
          <div className="reveal-bridal" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:'auto auto', gap:'16px' }}>
            <div style={{
              gridColumn:'1 / -1',
              borderRadius:'20px', overflow:'hidden',
              height:'260px',
              boxShadow:'0 16px 48px rgba(146,46,97,0.15)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700&q=80"
                alt="Grand Bridal Jewellery"
                style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s ease' }}
                onMouseEnter={e => e.target.style.transform='scale(1.05)'}
                onMouseLeave={e => e.target.style.transform='scale(1)'}
              />
            </div>
            {bridalImages.slice(0, 2).map(img => (
              <div key={img.src} style={{
                borderRadius:'16px', overflow:'hidden',
                height:'180px',
                boxShadow:'0 12px 32px rgba(146,46,97,0.12)',
              }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s ease' }}
                  onMouseEnter={e => e.target.style.transform='scale(1.07)'}
                  onMouseLeave={e => e.target.style.transform='scale(1)'}
                />
              </div>
            ))}
            {/* 100% badge */}
            <div style={{
              display:'flex', alignItems:'center', justifyContent:'center',
              borderRadius:'16px',
              height:'180px',
              background:'linear-gradient(135deg,#922e61,#7a2451)',
              border:'1px solid rgba(212,173,90,0.2)',
              flexDirection:'column', gap:'8px',
              boxShadow:'0 12px 32px rgba(146,46,97,0.2)',
            }}>
              <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:'40px', fontWeight:'600', color:'#d4ad5a', lineHeight:1 }}>100%</div>
              <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:'12px', fontWeight:'500', color:'rgba(255,255,255,0.7)', textAlign:'center', padding:'0 12px', lineHeight:'1.5' }}>Custom Bridal Solutions</div>
            </div>
            {/* 5th — extra bridal image */}
            <div style={{
              borderRadius:'16px', overflow:'hidden',
              height:'180px',
              boxShadow:'0 12px 32px rgba(146,46,97,0.12)',
            }}>
              <img
                src={bridalImg4}
                alt="Bridal Temple Jewellery"
                style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s ease' }}
                onMouseEnter={e => e.target.style.transform='scale(1.07)'}
                onMouseLeave={e => e.target.style.transform='scale(1)'}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #bridal .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
