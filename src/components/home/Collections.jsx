import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import goldImg     from '../../assets/collections/gold/gold-long-chain.png';
import silverImg   from '../../assets/collections/silver/silver-anklets.png';
import platinumImg from '../../assets/collections/platinum/platinum-wedding-bands.png';
import diamondImg  from '../../assets/collections/diamond/diamond-necklaces.png';

const collections = [
  {
    title: 'Gold Jewellery',
    desc: 'Traditional artistry crafted into timeless gold elegance.',
    image: goldImg,
    tag: 'Most Popular',
    accent: '#d4ad5a',
    href: '/gold',
  },
  {
    title: 'Silver Jewellery',
    desc: 'Elegant silver collections designed for tradition and gifting.',
    image: silverImg,
    tag: 'Gifting Favourite',
    accent: '#c4c2c1',
    href: '/silver',
  },
  {
    title: 'Platinum Jewellery',
    desc: 'Minimal, sophisticated, and crafted for modern luxury.',
    image: platinumImg,
    tag: 'Modern Luxury',
    accent: '#c4c2c1',
    href: '/platinum',
  },
  {
    title: 'Diamond Jewellery',
    desc: 'Brilliant diamond creations that radiate grace and sophistication.',
    image: diamondImg,
    tag: 'Premium',
    accent: '#d4ad5a',
    href: '/diamond',
  },
];

export default function Collections() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-col');
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
    <section id="collections" style={{ background:'linear-gradient(135deg,#d4ad5a 0%,#c49a3a 50%,#d4ad5a 100%)', padding:'100px 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'64px' }}>
          <div className="section-tag reveal-col" style={{ justifyContent:'center', color:'#1a1208' }}>Our Collections</div>
          <h2 className="reveal-col" style={{
            fontFamily:"'Poppins',sans-serif",
            fontSize:'clamp(28px,3vw,44px)',
            fontWeight:'600',
            color:'#1a1208',
            marginBottom:'16px',
          }}>
            Discover Your Perfect{' '}
            <span style={{ color:'#922e61' }}>Jewellery</span>
          </h2>
          <p className="reveal-col" style={{
            fontFamily:"'Poppins',sans-serif",
            fontSize:'15px', color:'rgba(26,18,8,0.70)',
            maxWidth:'520px', margin:'0 auto', lineHeight:'1.8',
          }}>
            Explore our curated collections spanning gold, silver, platinum, and diamonds — each piece a testament to masterful craftsmanship.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'24px' }}>
          {collections.map((col, i) => (
            <Link
              key={col.title}
              to={col.href}
              className="reveal-col"
              style={{
                position:'relative',
                borderRadius:'20px',
                overflow:'hidden',
                height: i < 2 ? '480px' : '360px',
                cursor:'pointer',
                boxShadow:'0 8px 32px rgba(0,0,0,0.3)',
                display:'block',
                textDecoration:'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.querySelector('.col-overlay').style.opacity = '1';
                e.currentTarget.querySelector('.col-img').style.transform = 'scale(1.08)';
                e.currentTarget.querySelector('.col-content').style.transform = 'translateY(0)';
                e.currentTarget.querySelector('.col-arrow').style.opacity = '1';
                e.currentTarget.querySelector('.col-arrow').style.transform = 'translateX(0)';
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector('.col-overlay').style.opacity = '0';
                e.currentTarget.querySelector('.col-img').style.transform = 'scale(1)';
                e.currentTarget.querySelector('.col-content').style.transform = 'translateY(8px)';
                e.currentTarget.querySelector('.col-arrow').style.opacity = '0';
                e.currentTarget.querySelector('.col-arrow').style.transform = 'translateX(-8px)';
              }}
            >
              <img
                className="col-img"
                src={col.image}
                alt={col.title}
                style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s ease', display:'block' }}
              />
              {/* Always visible gradient */}
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(20,12,5,0.85) 0%, rgba(20,12,5,0.25) 60%, transparent 100%)' }} />

              {/* Hover overlay */}
              <div className="col-overlay" style={{
                position:'absolute', inset:0,
                background:`linear-gradient(135deg, ${col.accent}33 0%, rgba(20,12,5,0.55) 100%)`,
                opacity:0, transition:'opacity 0.4s ease',
              }} />

              {/* Tag */}
              <div style={{
                position:'absolute', top:'20px', left:'20px',
                padding:'6px 14px',
                background:`${col.accent}22`,
                border:`1px solid ${col.accent}44`,
                borderRadius:'50px',
                fontFamily:"'Poppins',sans-serif",
                fontSize:'11px', fontWeight:'600',
                color: col.accent,
                letterSpacing:'1px', textTransform:'uppercase',
              }}>
                {col.tag}
              </div>

              {/* Content */}
              <div className="col-content" style={{
                position:'absolute', bottom:0, left:0, right:0,
                padding:'28px',
                transform:'translateY(8px)',
                transition:'transform 0.4s ease',
              }}>
                <h3 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'22px', fontWeight:'600', color:'#FFFFFF', marginBottom:'8px' }}>{col.title}</h3>
                <p style={{ fontFamily:"'Poppins',sans-serif", fontSize:'14px', color:'rgba(255,255,255,0.7)', marginBottom:'16px', lineHeight:'1.6' }}>{col.desc}</p>
                <div className="col-arrow" style={{
                  display:'inline-flex', alignItems:'center', gap:'8px',
                  fontFamily:"'Poppins',sans-serif", fontSize:'13px', fontWeight:'600',
                  color:'#d4ad5a',
                  opacity:0, transform:'translateX(-8px)',
                  transition:'all 0.4s ease',
                }}>
                  Explore Now <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #collections .container > div:last-child { grid-template-columns: 1fr !important; }
          #collections .container > div:last-child > a { height: 300px !important; }
        }
      `}</style>
    </section>
  );
}
