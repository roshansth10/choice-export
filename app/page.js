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
      
      {/* WhatsApp Button - Only on Home Page */}
      <a
        href="https://wa.me/9779863466932"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-2xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      
      <BackToTop />
    </div>
  );
}
