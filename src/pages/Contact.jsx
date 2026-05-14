import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import ContactWhyVisit from '../components/contact/ContactWhyVisit';

export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div style={{ fontFamily: "'Poppins',sans-serif" }}>
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <ContactWhyVisit />
    </div>
  );
}
