import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BridalHero from '../components/bridal/BridalHero';
import BridalIntro from '../components/bridal/BridalIntro';
import BridalCategories from '../components/bridal/BridalCategories';
import BridalExperience from '../components/bridal/BridalExperience';

export default function Bridal() {
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
      <BridalHero />
      <BridalIntro />
      <BridalCategories />
      <BridalExperience />
    </div>
  );
}
