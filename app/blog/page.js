import Header from '@/components/Header';
import BlogHero from '@/components/BlogHero';
import BlogList from '@/components/BlogList';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BlogHero />
        <BlogList />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

