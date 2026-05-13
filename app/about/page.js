import Header from '@/components/Header';
import AboutHero from '@/components/AboutHero';
import MissionVision from '@/components/MissionVision';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <MissionVision />
        <WhyChooseUs />
      </main>
      <Footer />
      
      <WhatsAppButton />
    </div>
  );
}
