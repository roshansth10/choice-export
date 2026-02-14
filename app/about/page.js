import AboutHero from '@/components/AboutHero';
import MissionVision from '@/components/MissionVision';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <MissionVision />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}