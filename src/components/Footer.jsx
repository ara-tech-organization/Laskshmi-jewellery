import { Phone, Mail, MapPin, ArrowRight, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const socials = [
  { icon: InstagramIcon, href: 'https://www.instagram.com/slt_kumbakonam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
  { icon: FacebookIcon,  href: 'https://www.facebook.com/profile.php?id=61589154564849', label: 'Facebook'  },
  { icon: WhatsAppIcon,  href: 'https://wa.me/919999999999', label: 'WhatsApp'  },
];

const footerLinks = {
  Collections: [
    { label: 'Gold Jewellery',      href: '/gold' },
    { label: 'Silver Jewellery',    href: '/silver' },
    { label: 'Platinum Jewellery',  href: '/platinum' },
    { label: 'Diamond Jewellery',   href: '/diamond' },
    { label: 'Bridal Collections',  href: '/bridal' },
  ],
  Services: [
    { label: 'Book Consultation',  href: '/contact', scrollTo: 'contact-info' },
    { label: 'Bridal Experience',  href: '/bridal',  scrollTo: 'bridal-experience' },
    { label: 'Bridal Collections', href: '/bridal',  scrollTo: 'collections' },
    { label: 'Our Process',        href: '/',        scrollTo: 'process-section' },
    { label: 'Why Choose Us',      href: '/',        scrollTo: 'why-section' },
  ],
  Company: [
    { label: 'About Us',       href: '/about', scrollTo: null },
    { label: 'Our Story',      href: '/about', scrollTo: 'our-story' },
    { label: 'Certifications', href: '/about', scrollTo: 'certifications' },
    { label: 'Testimonials',   href: '/',      scrollTo: 'testimonials' },
    { label: 'Contact Us',     href: '/contact', scrollTo: null },
  ],
};

const contactItems = [
  { icon: MapPin, text: '123, Gold Bazaar Street, Chennai, Tamil Nadu — 600001' },
  { icon: Phone,  text: '+91 99999 99999' },
  { icon: Mail,   text: 'contact@sltm.in' },
  { icon: Clock,  text: 'Mon – Sat: 10:00 AM – 9:00 PM' },
];

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Sitemap'];

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#7a2451', fontFamily: "'Poppins',sans-serif" }}>

      {/* ── Main content ── */}
      <div style={{ borderBottom: '1px solid rgba(212,173,90,0.12)', padding: '80px 0 64px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1.4fr', gap: '48px' }}>

            {/* Brand column */}
            <div>
              <img
                src={Logo}
                alt="Sri Lakshmi Thanga Maaligai"
                style={{ height: '64px', width: 'auto', marginBottom: '24px', filter: 'drop-shadow(0 2px 10px rgba(212,173,90,0.35))' }}
              />
              <p style={{ fontSize: '14px', lineHeight: '1.95', color: 'rgba(196,194,193,0.75)', marginBottom: '20px', maxWidth: '260px' }}>
                Sri Lakshmi Thanga Maaligai is a trusted jewellery destination offering premium gold, silver, platinum, and diamond jewellery crafted with purity, elegance, and timeless craftsmanship.
              </p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      width: 36, height: 36, borderRadius: '9px',
                      background: 'rgba(212,173,90,0.10)',
                      border: '1px solid rgba(212,173,90,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#d4ad5a', transition: 'all 0.3s ease', textDecoration: 'none',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background='rgba(212,173,90,0.22)'; e.currentTarget.style.borderColor='rgba(212,173,90,0.6)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background='rgba(212,173,90,0.10)'; e.currentTarget.style.borderColor='rgba(212,173,90,0.25)'; }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 style={{ fontFamily: "'Poppins',sans-serif", fontSize: '12px', fontWeight: '700', color: '#d4ad5a', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '22px' }}>
                  {heading}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {links.map(({ label, href, scrollTo }) => (
                    <li key={label}>
                      <Link
                        to={href}
                        state={scrollTo ? { scrollTo } : undefined}
                        style={{ fontFamily: "'Poppins',sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.70)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '7px', transition: 'all 0.3s ease' }}
                        onMouseEnter={e => { e.currentTarget.style.color='#d4ad5a'; e.currentTarget.style.paddingLeft='5px'; }}
                        onMouseLeave={e => { e.currentTarget.style.color='rgba(255,255,255,0.70)'; e.currentTarget.style.paddingLeft='0'; }}
                      >
                        <ArrowRight size={9} style={{ flexShrink: 0 }} />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact column — right side */}
            <div>
              <h4 style={{ fontFamily: "'Poppins',sans-serif", fontSize: '12px', fontWeight: '700', color: '#d4ad5a', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '22px' }}>
                Contact Us
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {contactItems.map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'rgba(212,173,90,0.10)', border: '1px solid rgba(212,173,90,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <Icon size={13} color="#d4ad5a" />
                    </div>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.70)', lineHeight: '1.7' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ padding: '18px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>

            <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.55)', margin: 0, fontWeight: '400' }}>
              &copy; {new Date().getFullYear()} Sri Lakshmi Thanga Maaligai. All rights reserved.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {legalLinks.map((item, i) => (
                <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <a
                    href="#"
                    style={{ fontFamily: "'Poppins',sans-serif", fontSize: '12px', color: '#c4c2c1', textDecoration: 'none', transition: 'color 0.3s ease' }}
                    onMouseEnter={e => e.target.style.color = '#d4ad5a'}
                    onMouseLeave={e => e.target.style.color = '#c4c2c1'}
                  >
                    {item}
                  </a>
                  {i < legalLinks.length - 1 && (
                    <span style={{ color: 'rgba(196,194,193,0.30)', fontSize: '12px' }}>|</span>
                  )}
                </span>
              ))}
            </div>

            <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.40)', margin: 0, display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <Heart size={12} color="#d4ad5a" fill="#d4ad5a" />
              Crafted with Excellence by{' '}
              <a
                href="https://discovertechnologies.co/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#d4ad5a', textDecoration: 'none', fontWeight: '600', transition: 'opacity 0.3s ease' }}
                onMouseEnter={e => e.target.style.opacity = '0.7'}
                onMouseLeave={e => e.target.style.opacity = '1'}
              >
                Ara Discoveries Pvt. Ltd
              </a>
            </p>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          footer .container > div:first-child { grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          footer .container > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
