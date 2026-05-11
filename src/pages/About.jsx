import { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutVisionMission from '../components/about/AboutVisionMission';
import AboutValues from '../components/about/AboutValues';

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div id="about" style={{ fontFamily: "'Poppins',sans-serif" }}>
      <AboutHero />
      <AboutVisionMission />
      <AboutValues />
    </div>
  );
}
