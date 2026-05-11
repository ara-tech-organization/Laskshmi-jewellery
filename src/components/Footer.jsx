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
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

const socials = [
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: FacebookIcon,  href: '#', label: 'Facebook'  },
  { icon: YoutubeIcon,   href: '#', label: 'YouTube'   },
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
    { label: 'Custom Jewellery',    href: '/contact' },
    { label: 'Jewellery Repair',    href: '/contact' },
    { label: 'Bridal Consultation', href: '/bridal' },
    { label: 'Gift Wrapping',       href: '/contact' },
    { label: 'Home Delivery',       href: '/contact' },
  ],
  Company: [
    { label: 'About Us',    href: '/about' },
    { label: 'Our Story',   href: '/about' },
    { label: 'Certifications', href: '/about' },
    { label: 'Testimonials',   href: '/' },
    { label: 'Contact Us',     href: '/contact' },
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
                alt="Sri Lakshimi Thanga Maligai"
                style={{ height: '64px', width: 'auto', marginBottom: '24px', filter: 'drop-shadow(0 2px 10px rgba(212,173,90,0.35))' }}
              />
              <p style={{ fontSize: '14px', lineHeight: '1.95', color: 'rgba(196,194,193,0.75)', marginBottom: '20px', maxWidth: '260px' }}>
                Sri Lakshimi Thanga Maligai is a trusted jewellery destination offering premium gold, silver, platinum, and diamond jewellery crafted with purity, elegance, and timeless craftsmanship.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 style={{ fontFamily: "'Poppins',sans-serif", fontSize: '12px', fontWeight: '700', color: '#d4ad5a', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '22px' }}>
                  {heading}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        to={href}
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
              &copy; {new Date().getFullYear()} Sri Lakshimi Thanga Maligai. All rights reserved.
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
