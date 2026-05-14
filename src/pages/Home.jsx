import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import LuxuryIntro from '../components/home/LuxuryIntro';
import Collections from '../components/home/Collections';
import Bridal from '../components/home/Bridal';
import Process from '../components/home/Process';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
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
    <>
      <Hero />
      <LuxuryIntro />
      <Collections />
      <Bridal />
      <Process />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
