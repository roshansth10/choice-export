import { Inter, Poppins, Roboto } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Choice International Export | Premium Global Logistics & Shipping',
  description: 'World-class international shipping and logistics solutions. Fast, secure, and reliable export services from Nepal to worldwide destinations.',
  keywords: 'international shipping, export services, logistics Nepal, cargo services, courier services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${roboto.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link rel="icon" type="image/x-icon" href="/img/logo.jpg" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{const t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');} }catch(e){} })()` }} />
      </head>
      <body className="min-h-screen relative">
        {/* Animated background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-4000"></div>
        </div>
        
        {children}
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9779863466932"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-2xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-bounce-slow"
          aria-label="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </body>
    </html>
  );
}