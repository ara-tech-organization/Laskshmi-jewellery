import { useEffect } from 'react';
import SilverHero from '../components/silver/SilverHero';
import SilverIntro from '../components/silver/SilverIntro';
import SilverCollections from '../components/silver/SilverCollections';
import SilverHighlight from '../components/silver/SilverHighlight';

export default function Silver() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ fontFamily: "'Poppins',sans-serif" }}>
      <SilverHero />
      <SilverIntro />
      <SilverCollections />
      <SilverHighlight />
    </div>
  );
}
