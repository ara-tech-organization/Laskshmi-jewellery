import { useEffect, useState } from 'react';
import { Send, Sparkles, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal-nl');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
      }),
      { threshold: 0.15 }
    );
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(32px)';
      el.style.transition = `all 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  return (
    <section style={{
      background: 'linear-gradient(135deg, #922e61 0%, #7a2451 50%, #922e61 100%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Floral mandala background pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-opacity='0.09' stroke-width='1'%3E%3Ccircle cx='70' cy='70' r='32'/%3E%3Ccircle cx='70' cy='70' r='22'/%3E%3Ccircle cx='70' cy='70' r='10'/%3E%3Cpath d='M70 38 C80 52 80 88 70 102 C60 88 60 52 70 38Z'/%3E%3Cpath d='M38 70 C52 60 88 60 102 70 C88 80 52 80 38 70Z'/%3E%3Cpath d='M48 48 C58 58 82 82 92 92 C82 82 58 58 48 48Z'/%3E%3Cpath d='M92 48 C82 58 58 82 48 92 C58 82 82 58 92 48Z'/%3E%3Ccircle cx='70' cy='38' r='3'/%3E%3Ccircle cx='70' cy='102' r='3'/%3E%3Ccircle cx='38' cy='70' r='3'/%3E%3Ccircle cx='102' cy='70' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '140px 140px',
      }} />

      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,173,90,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,173,90,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="nl-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Left — CTA Text */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }} className="reveal-nl">
              <Sparkles size={14} color="#d4ad5a" />
              <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: '12px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', color: '#d4ad5a' }}>
                Stay Connected
              </span>
            </div>
            <h2 className="reveal-nl" style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(28px,3vw,44px)', fontWeight: '600', lineHeight: '1.2', color: '#FFFFFF', marginBottom: '20px' }}>
              Get Exclusive Access to{' '}
              <span style={{ color: '#d4ad5a' }}>New Collections</span>
            </h2>
            <p className="reveal-nl" style={{ fontFamily: "'Poppins',sans-serif", fontSize: '15px', lineHeight: '1.9', color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>
              Subscribe to receive first looks at new arrivals, festive offers, bridal collection launches, and exclusive jewellery tips from our master craftsmen.
            </p>

            {/* Quick contact links */}
            <div className="reveal-nl" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: Phone,  text: '+91 99999 99999', label: 'Call Us',     href: 'tel:+919999999999' },
                { icon: MapPin, text: 'Gold Bazaar Street, Chennai', label: 'Visit Store', href: '/contact' },
              ].map(({ icon: Icon, text, label, href }) => {
                const isExternal = href.startsWith('tel:') || href.startsWith('http');
                const inner = (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(212,173,90,0.1)', border: '1px solid rgba(212,173,90,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={15} color="#d4ad5a" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</div>
                      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>{text}</div>
                    </div>
                  </div>
                );
                return isExternal
                  ? <a key={label} href={href} style={{ textDecoration: 'none' }}>{inner}</a>
                  : <Link key={label} to={href} style={{ textDecoration: 'none' }}>{inner}</Link>;
              })}
            </div>
          </div>

          {/* Right — Newsletter Form */}
          <div className="reveal-nl">
            <div style={{
              padding: '48px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(212,173,90,0.15)',
              borderRadius: '24px',
              backdropFilter: 'blur(16px)',
            }}>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '22px', fontWeight: '600', color: '#FFFFFF', marginBottom: '8px' }}>
                Join Our Jewellery Family
              </div>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: '1.7' }}>
                No spam — only beautiful jewellery updates, offers, and inspiration delivered to your inbox.
              </p>

              {submitted ? (
                <div style={{
                  padding: '24px',
                  background: 'rgba(212,173,90,0.1)',
                  border: '1px solid rgba(212,173,90,0.3)',
                  borderRadius: '12px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '32px', marginBottom: '8px' }}>✓</div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '15px', fontWeight: '600', color: '#d4ad5a' }}>Thank you for subscribing!</div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>We'll be in touch with exclusive updates soon.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ fontFamily: "'Poppins',sans-serif", fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      style={{
                        width: '100%', padding: '14px 18px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(212,173,90,0.2)',
                        borderRadius: '12px', outline: 'none',
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '14px', color: '#FFFFFF',
                        transition: 'border-color 0.3s ease',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => e.target.style.borderColor = '#d4ad5a'}
                      onBlur={e => e.target.style.borderColor = 'rgba(212,173,90,0.2)'}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Poppins',sans-serif", fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      style={{
                        width: '100%', padding: '14px 18px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(212,173,90,0.2)',
                        borderRadius: '12px', outline: 'none',
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: '14px', color: '#FFFFFF',
                        transition: 'border-color 0.3s ease',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => e.target.style.borderColor = '#d4ad5a'}
                      onBlur={e => e.target.style.borderColor = 'rgba(212,173,90,0.2)'}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '8px', fontSize: '15px' }}
                  >
                    Subscribe Now <Send size={16} />
                  </button>
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.3)', textAlign: 'center', margin: 0 }}>
                    By subscribing you agree to receive jewellery updates. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nl-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        input::placeholder { color: rgba(255,255,255,0.25) !important; }
      `}</style>
    </section>
  );
}
