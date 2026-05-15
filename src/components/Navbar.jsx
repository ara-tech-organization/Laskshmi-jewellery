import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const navLinks = [
  { label: 'Home',              href: '/' },
  { label: 'About',             href: '/about' },
  { label: 'Gold',              href: '/gold' },
  { label: 'Silver',            href: '/silver' },
  { label: 'Platinum',          href: '/platinum' },
  { label: 'Diamond',           href: '/diamond' },
  { label: 'Bridal Collection', href: '/bridal' },
  { label: 'Contact',           href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isPageLink = (href) => href.startsWith('/') && !href.startsWith('/#');

  const isActive = (href) => {
    if (isPageLink(href)) return location.pathname === href;
    if (href === '/') return location.pathname === '/' && !location.hash;
    return location.pathname === '/' && location.hash === href.slice(1);
  };

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    if (href === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const hash = href.replace('/#', '#');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        background: 'rgba(146,46,97,0.97)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(212,173,90,0.2)',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
        padding: '14px 0',
      }}>
        <div className="nav-inner" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', padding:'0 48px' }}>
          {/* Logo */}
          <Link to="/" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ display:'flex', alignItems:'center', gap:'12px', textDecoration:'none' }}>
            <img src={Logo} alt="Sri Lakshmi Thanga Maaligai" style={{
              height: '56px',
              width: 'auto',
              transition: 'all 0.4s ease',
              filter: 'drop-shadow(0 2px 8px rgba(212,173,90,0.3))',
            }} />
          </Link>

          {/* Desktop Nav */}
          <ul style={{ display:'flex', alignItems:'center', gap:'20px', listStyle:'none', margin:0 }} className="desktop-nav">
            {navLinks.map(link => {
              const active = isActive(link.href);
              const linkStyle = {
                display: 'block',
                padding: '9px 20px',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '15px',
                fontWeight: '500',
                color: active ? '#c4c2c1' : '#FFFFFF',
                textDecoration: 'none',
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                background: active ? 'rgba(196,194,193,0.12)' : 'transparent',
                letterSpacing: '0.3px',
              };
              return (
                <li key={link.href}>
                  {isPageLink(link.href) ? (
                    <Link
                      to={link.href}
                      style={linkStyle}
                      onMouseEnter={e => { if (!active) { e.currentTarget.style.color='#c4c2c1'; e.currentTarget.style.background='rgba(196,194,193,0.08)'; }}}
                      onMouseLeave={e => { if (!active) { e.currentTarget.style.color='#FFFFFF'; e.currentTarget.style.background='transparent'; }}}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      style={linkStyle}
                      onMouseEnter={e => { if (!active) { e.currentTarget.style.color='#c4c2c1'; e.currentTarget.style.background='rgba(196,194,193,0.08)'; }}}
                      onMouseLeave={e => { if (!active) { e.currentTarget.style.color='#FFFFFF'; e.currentTarget.style.background='transparent'; }}}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
            <a href="tel:+917904635051" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 20px',
              background: 'linear-gradient(135deg, #d4ad5a, #b08a3a)',
              color: '#fff',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '13px',
              fontWeight: '600',
              textDecoration: 'none',
              borderRadius: '50px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(212,173,90,0.18)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 3px 12px rgba(212,173,90,0.20)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(212,173,90,0.18)'; }}
            className="nav-cta">
              <Phone size={14} />
              Visit Us
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'none',
                background: 'rgba(212,173,90,0.15)',
                border: '1px solid rgba(212,173,90,0.3)',
                color: '#d4ad5a',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              className="hamburger"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 999,
        background: 'rgba(146,46,97,0.98)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        transition: 'all 0.4s ease',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transform: menuOpen ? 'scale(1)' : 'scale(1.05)',
      }}>
        {navLinks.map((link, i) => {
          const active = isActive(link.href);
          const mobileStyle = {
            fontFamily: "'Poppins', sans-serif",
            fontSize: '28px',
            fontWeight: '600',
            color: active ? '#c4c2c1' : 'rgba(255,255,255,0.85)',
            textDecoration: 'none',
            padding: '12px 40px',
            transition: 'all 0.3s ease',
            animation: menuOpen ? `slideIn 0.4s ease forwards ${i * 0.08}s` : 'none',
            opacity: menuOpen ? 1 : 0,
          };
          return isPageLink(link.href) ? (
            <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)} className="mobile-link" style={mobileStyle}>
              {link.label}
            </Link>
          ) : (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="mobile-link"
              style={mobileStyle}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      <style>{`
        /* tablet + phone → hamburger */
        @media (max-width: 1100px) {
          .desktop-nav { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }

        /* ── mobile menu font scaling ── */
        @media (max-width: 768px) {
          .mobile-link { font-size: 22px !important; padding: 10px 28px !important; }
        }
        @media (max-width: 480px) {
          .mobile-link { font-size: 18px !important; padding: 8px 20px !important; }
        }
        @media (max-width: 375px) {
          .mobile-link { font-size: 16px !important; padding: 7px 16px !important; }
        }
        @media (max-width: 320px) {
          .mobile-link { font-size: 14px !important; padding: 6px 12px !important; }
        }

        /* ── navbar padding on small screens ── */
        @media (max-width: 480px) {
          .nav-inner { padding: 0 16px !important; }
        }
        @media (max-width: 320px) {
          .nav-inner { padding: 0 10px !important; }
        }
      `}</style>
    </>
  );
}
