import { useEffect } from 'react';
import GoldHero from '../components/gold/GoldHero';
import GoldIntro from '../components/gold/GoldIntro';
import GoldCollections from '../components/gold/GoldCollections';
import GoldHighlight from '../components/gold/GoldHighlight';

export default function Gold() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ fontFamily: "'Poppins',sans-serif" }}>
      <GoldHero />
      <GoldIntro />
      <GoldCollections />
      <GoldHighlight />
    </div>
  );
}
