import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: 'Use of Website',
    content: 'Users agree to use this website only for lawful purposes and in a manner that does not violate applicable laws or regulations.',
  },
  {
    title: 'Product Information',
    content: 'We strive to ensure all product details, images, and pricing are accurate. However, slight variations in jewellery design, weight, or color may occur.',
  },
  {
    title: 'Pricing & Availability',
    content: 'Prices and product availability are subject to change without prior notice. We reserve the right to modify or discontinue products at any time.',
  },
  {
    title: 'Orders & Payments',
    content: 'Orders are confirmed only after successful payment verification. We reserve the right to cancel or refuse orders in cases of pricing errors, fraudulent activity, or unavailable products.',
  },
  {
    title: 'Intellectual Property',
    content: 'All website content including logos, text, images, graphics, and designs are the property of Sri Lakshmi Thanga Maaligai and may not be copied or reproduced without permission.',
  },
  {
    title: 'Limitation of Liability',
    content: 'Sri Lakshmi Thanga Maaligai shall not be held liable for any indirect, incidental, or consequential damages arising from the use of this website or its services.',
  },
  {
    title: 'User Responsibilities',
    content: 'Users are responsible for providing accurate information during enquiries or purchases and for maintaining the confidentiality of their account details if applicable.',
  },
  {
    title: 'Third-Party Links',
    content: 'Our website may contain links to external websites. We are not responsible for the content, policies, or practices of those websites.',
  },
  {
    title: 'Changes to Terms',
    content: 'We reserve the right to update or modify these Terms of Service at any time without prior notice.',
  },
  {
    title: 'Governing Law',
    content: 'These terms shall be governed by and interpreted in accordance with the laws of India.',
  },
  {
    title: 'Contact Information',
    content: 'For any questions regarding these Terms of Service, please contact us through: srilakshmithangamaaligai.com',
  },
];

export default function TermsOfService() {
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
              <span style={{ color: '#ffffff' }}>Terms of </span>
              <span style={{ color: '#d4ad5a' }}>Service</span>
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
              Welcome to <strong style={{ color: '#7a2451' }}>Sri Lakshmi Thanga Maaligai</strong>. By accessing or using our website, you agree to comply with the following Terms of Service.
            </p>

            {sections.map((sec, i) => (
              <div key={i} style={{ marginBottom: '36px', paddingBottom: '36px', borderBottom: i < sections.length - 1 ? '1px solid rgba(212,173,90,0.15)' : 'none' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#7a2451', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: 4, height: 20, background: '#d4ad5a', borderRadius: 2, display: 'inline-block', flexShrink: 0 }} />
                  {sec.title}
                </h2>
                <p style={{ fontSize: '14px', lineHeight: '1.85', color: '#555', margin: 0 }}>{sec.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
