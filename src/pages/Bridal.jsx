import { useEffect } from 'react';
import BridalHero from '../components/bridal/BridalHero';
import BridalIntro from '../components/bridal/BridalIntro';
import BridalCategories from '../components/bridal/BridalCategories';
import BridalExperience from '../components/bridal/BridalExperience';

export default function Bridal() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ fontFamily: "'Poppins',sans-serif" }}>
      <BridalHero />
      <BridalIntro />
      <BridalCategories />
      <BridalExperience />
    </div>
  );
}
