import Hero from '../components/home/Hero';
import LuxuryIntro from '../components/home/LuxuryIntro';
import Collections from '../components/home/Collections';
import Bridal from '../components/home/Bridal';
import Process from '../components/home/Process';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
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
