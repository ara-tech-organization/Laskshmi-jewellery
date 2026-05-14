import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutHero from '../components/about/AboutHero';
import AboutVisionMission from '../components/about/AboutVisionMission';
import AboutValues from '../components/about/AboutValues';

export default function About() {
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
    <div id="about" style={{ fontFamily: "'Poppins',sans-serif" }}>
      <AboutHero />
      <AboutVisionMission />
      <AboutValues />
    </div>
  );
}
