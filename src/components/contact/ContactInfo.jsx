import { useEffect, useRef } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Map, Clock, ArrowRight } from 'lucide-react';

const GOLD = '#d4ad5a';

const contactInfo = [
  { icon: MapPin,        label: 'Store Address',    value: '123, Gold Bazaar Street, Chennai, Tamil Nadu — 600001', sub: 'Visit us in store',         href: null },
  { icon: Phone,         label: 'Phone Number',     value: '+91 99999 99999',                                        sub: 'Call us anytime',           href: 'tel:+919999999999' },
  { icon: MessageCircle, label: 'WhatsApp Support', value: '+91 99999 99999',                                        sub: 'Chat with us on WhatsApp',  href: 'https://wa.me/919999999999' },
  { icon: Mail,          label: 'Email Address',    value: 'contact@sltm.in',                                        sub: 'Send us an email',          href: 'mailto:contact@sltm.in' },
  { icon: Map,           label: 'Google Maps',      value: 'Find Us on Google Maps',                                 sub: 'Get directions to our store', href: '#' },
  { icon: Clock,         label: 'Business Hours',   value: 'Mon – Sat: 10:00 AM – 9:00 PM',                         sub: 'Sunday: 11:00 AM – 7:00 PM', href: null },
];

export default function ContactInfo() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.rc') ?? [];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
      }),
      { threshold: 0.07 }
    );
    els.forEach((el, i) => {
      el.style.opacity = '0'; el.style.transform = 'translateY(28px)';
      el.style.transition = `all 0.75s cubic-bezier(0.4,0,0.2,1) ${i * 0.07}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const Card = ({ icon: Icon, label, value, sub, href }) => (
    <div className="rc" style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid rgba(212,173,90,0.12)', padding: '32px 28px', cursor: href ? 'pointer' : 'default', transition: 'all 0.35s ease', display: 'flex', flexDirection: 'column', position: 'relative' }}
      onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 20px 56px rgba(212,173,90,0.12)'; e.currentTarget.style.borderColor='rgba(212,173,90,0.30)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor='rgba(212,173,90,0.12)'; }}>
      <div style={{ width: 52, height: 52, borderRadius: '14px', background: 'linear-gradient(135deg,rgba(212,173,90,0.14),rgba(212,173,90,0.06))', border: '1px solid rgba(212,173,90,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <Icon size={22} color={GOLD} />
      </div>
      <div style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(212,173,90,0.70)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{label}</div>
      <div style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', lineHeight: 1.4, marginBottom: '6px' }}>{value}</div>
      <div style={{ fontSize: '12px', color: '#606060' }}>{sub}</div>
      {href && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '16px', color: GOLD, fontSize: '12px', fontWeight: '600' }}>
          <span>Open</span><ArrowRight size={12} />
        </div>
      )}
    </div>
  );

  return (
    <section ref={ref} style={{ background: '#F5F5F8', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.05' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='28'/%3E%3Cpath d='M60 32 C68 44 68 76 60 88 C52 76 52 44 60 32Z'/%3E%3Cpath d='M32 60 C44 52 76 52 88 60 C76 68 44 68 32 60Z'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="rc" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ fontSize: '11px', fontWeight: '600', color: GOLD, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Reach Us</div>
          <h2 style={{ fontSize: 'clamp(26px,3vw,42px)', fontWeight: '700', color: '#1a1a1a', margin: 0, lineHeight: 1.2 }}>
            Contact <span style={{ color: GOLD }}>Information</span>
          </h2>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
          {contactInfo.map(({ href, ...rest }) =>
            href ? (
              <a key={rest.label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                <Card icon={rest.icon} label={rest.label} value={rest.value} sub={rest.sub} href={href} />
              </a>
            ) : (
              <Card key={rest.label} icon={rest.icon} label={rest.label} value={rest.value} sub={rest.sub} href={null} />
            )
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 960px) { .contact-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
