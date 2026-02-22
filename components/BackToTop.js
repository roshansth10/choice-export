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
      className={`fixed bottom-28 right-8 z-50 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Back to top"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center shadow-xl shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-all duration-300 group-hover:-translate-y-1">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <i className="fas fa-arrow-up text-white text-sm font-bold"></i>
        </div>
      </div>
      {/* Animated ring effect */}
      <div className="absolute inset-0 w-14 h-14 bg-primary-600 rounded-full opacity-30 animate-ping"></div>
    </button>
  );
}
