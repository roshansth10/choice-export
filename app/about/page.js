// app/about/page.js
import AboutHero from '@/components/AboutHero';
import AboutSummary from '@/components/AboutSummary';
import MissionVision from '@/components/MissionVision';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutSummary />
      <MissionVision />
      <WhyChooseUs />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}