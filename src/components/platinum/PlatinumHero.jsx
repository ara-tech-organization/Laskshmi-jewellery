import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PlatinumHeroImg from '../../assets/PlatinumHero.png';

export default function PlatinumHero() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.rp') ?? [];
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
          }
        }),
      { threshold: 0.07 }
    );
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = `all 0.75s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="hero-fixed"
      style={{
        position: 'relative',
      }}
    >
      <img
        src={PlatinumHeroImg}
        alt=""
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.18)' }} />

      <div
        className="container"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '120px',
          paddingBottom: '40px',
        }}
      >
        <div
          className="rp"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: 'rgba(146,46,97,0.20)',
            border: '1px solid rgba(146,46,97,0.70)',
            borderRadius: '50px',
            marginBottom: '22px',
            width: 'fit-content',
          }}
        >
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#922e61', display: 'block' }} />
          <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#922e61' }}>
            Platinum Collections
          </span>
        </div>
        <h1
          className="rp"
          style={{
            fontSize: 'clamp(22px,2.8vw,38px)',
            fontWeight: '700',
            color: '#1a1a1a',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            maxWidth: '620px',
            margin: '0 0 24px',
          }}
        >
          Pure Platinum Jewellery
          <br />
          <span style={{ color: '#922e61' }}>for Modern Luxury</span>
        </h1>
        <div className="rp" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 28px',
              background: 'linear-gradient(135deg,#922e61,#7a2451)',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: '600',
              boxShadow: '0 3px 12px rgba(146,46,97,0.30)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 5px 16px rgba(146,46,97,0.40)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 3px 12px rgba(146,46,97,0.30)';
            }}
          >
            View Collections <ArrowRight size={15} />
          </a>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '11px 26px',
              border: '1.5px solid rgba(146,46,97,0.60)',
              color: '#1a1a1a',
              textDecoration: 'none',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#922e61';
              e.currentTarget.style.color = '#922e61';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(146,46,97,0.60)';
              e.currentTarget.style.color = '#1a1a1a';
            }}
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
