import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PartnersSlider from '@/components/PartnersSlider';
import AboutSummary from '@/components/AboutSummary';
import Services from '@/components/Services';
import Process from '@/components/Process';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <PartnersSlider />
        <AboutSummary />
        <Services />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      <BackToTop />
    </div>
  );
}