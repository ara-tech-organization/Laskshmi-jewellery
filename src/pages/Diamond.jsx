import { useEffect } from 'react';
import DiamondHero from '../components/diamond/DiamondHero';
import DiamondIntro from '../components/diamond/DiamondIntro';
import DiamondCollections from '../components/diamond/DiamondCollections';
import DiamondHighlight from '../components/diamond/DiamondHighlight';

export default function Diamond() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ fontFamily: "'Poppins',sans-serif" }}>
      <DiamondHero />
      <DiamondIntro />
      <DiamondCollections />
      <DiamondHighlight />
    </div>
  );
}
