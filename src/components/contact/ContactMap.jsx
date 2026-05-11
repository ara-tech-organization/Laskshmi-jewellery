import { MapPin, ArrowRight } from 'lucide-react';

export default function ContactMap() {
  return (
    <section style={{ background: '#922e61', padding: '0' }}>
      <div style={{ width: '100%', height: '400px', background: 'linear-gradient(135deg,#922e61,#7a2451)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.04' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='28'/%3E%3Cpath d='M60 32 C68 44 68 76 60 88 C52 76 52 44 60 32Z'/%3E%3Cpath d='M32 60 C44 52 76 52 88 60 C76 68 44 68 32 60Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }} />
        <div style={{ textAlign: 'center', zIndex: 1 }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,#d4ad5a,#b08a3a)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 6px 18px rgba(212,173,90,0.16)' }}>
            <MapPin size={30} color="#fff" />
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 8px' }}>Find Us on Google Maps</h3>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', margin: '0 0 24px' }}>123, Gold Bazaar Street, Chennai, Tamil Nadu — 600001</p>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', background: 'linear-gradient(135deg,#d4ad5a,#b08a3a)', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '14px', fontWeight: '600', boxShadow: '0 3px 12px rgba(212,173,90,0.18)', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 5px 16px rgba(212,173,90,0.20)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 3px 12px rgba(212,173,90,0.18)'; }}>
            Get Directions <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
