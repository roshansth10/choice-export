'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="backToTop"
      onClick={scrollToTop}
      className={`fixed bottom-24 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-primary-light hover:-translate-y-1 transition-all z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
}