import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: 'Information We Collect',
    content: `We may collect the following information:\n• Name\n• Phone Number\n• Email Address\n• Billing and Shipping Address\n• Enquiry Details\n• Device and Browser Information`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the collected information to:\n• Respond to customer enquiries\n• Process orders and requests\n• Improve our products and services\n• Send updates, offers, or promotional communications\n• Maintain website security and performance`,
  },
  {
    title: 'Cookies',
    content: 'Our website may use cookies to improve user experience and analyze website traffic. Users may choose to disable cookies through browser settings.',
  },
  {
    title: 'Data Protection',
    content: 'We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse.',
  },
  {
    title: 'Third-Party Services',
    content: 'We may use trusted third-party services for payment processing, analytics, or communication purposes. These providers handle data according to their own privacy policies.',
  },
  {
    title: 'Sharing of Information',
    content: 'We do not sell, trade, or rent personal information to third parties except where required by law or necessary to provide our services.',
  },
  {
    title: 'Links to External Websites',
    content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external sites.',
  },
  {
    title: 'Your Rights',
    content: `Users may contact us to:\n• Access personal information\n• Request corrections\n• Request deletion of personal data\n• Opt out of promotional communications`,
  },
  {
    title: 'Contact Us',
    content: 'If you have any questions regarding this Privacy Policy, please contact us through our official website: srilakshmithangamaaligai.com',
  },
];

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#faf8f5', fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #7a2451 0%, #922e61 100%)', padding: '100px 0 64px' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
          <Link
            to="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#d4ad5a'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(212,173,90,0.15)', border: '1px solid rgba(212,173,90,0.40)', borderRadius: '50px' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#d4ad5a', display: 'block' }} />
            <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', color: '#d4ad5a' }}>Legal</span>
          </div>
          <div>
            <h1 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: '700', margin: '0 0 10px' }}>
              <span style={{ color: '#ffffff' }}>Privacy </span>
              <span style={{ color: '#d4ad5a' }}>Policy</span>
            </h1>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', margin: 0 }}>Effective Date: May 2026</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '60px 0 80px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '48px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid rgba(212,173,90,0.12)' }}>
            <p style={{ fontSize: '15px', lineHeight: '1.85', color: '#555', marginBottom: '40px' }}>
              Welcome to <strong style={{ color: '#7a2451' }}>Sri Lakshmi Thanga Maaligai</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or interact with our services.
            </p>

            {sections.map((sec, i) => (
              <div key={i} style={{ marginBottom: '36px', paddingBottom: '36px', borderBottom: i < sections.length - 1 ? '1px solid rgba(212,173,90,0.15)' : 'none' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#7a2451', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: 4, height: 20, background: '#d4ad5a', borderRadius: 2, display: 'inline-block', flexShrink: 0 }} />
                  {sec.title}
                </h2>
                {sec.content.split('\n').map((line, j) => (
                  <p key={j} style={{ fontSize: '14px', lineHeight: '1.85', color: '#555', margin: '0 0 6px' }}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
