import { useEffect } from 'react';
import PlatinumHero from '../components/platinum/PlatinumHero';
import PlatinumIntro from '../components/platinum/PlatinumIntro';
import PlatinumCollections from '../components/platinum/PlatinumCollections';
import PlatinumHighlight from '../components/platinum/PlatinumHighlight';

export default function Platinum() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ fontFamily: "'Poppins',sans-serif" }}>
      <PlatinumHero />
      <PlatinumIntro />
      <PlatinumCollections />
      <PlatinumHighlight />
    </div>
  );
}
