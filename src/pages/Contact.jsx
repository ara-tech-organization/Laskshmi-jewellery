import { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import ContactWhyVisit from '../components/contact/ContactWhyVisit';

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ fontFamily: "'Poppins',sans-serif" }}>
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <ContactWhyVisit />
    </div>
  );
}
