'use client';

import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = stored ? stored === 'dark' : prefersDark;
      setIsDark(initial);
      if (initial) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    } catch (e) {
      // ignore
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch (e) {}
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 bg-white dark:bg-gray-800 shadow transition-transform duration-300 ease-in-out ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <img src="/img/logo.jpg" alt="Choice International" className="h-10 w-auto rounded-md" />
            <div className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 truncate">Choice International Export</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="relative text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-300 pb-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary-600 dark:after:bg-primary-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-400 after:ease-out"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={toggle} 
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} 
              aria-pressed={isDark} 
              className="ml-4 p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 5a1 1 0 011-1V3a1 1 0 10-2 0v1a1 1 0 011 1zM15.657 6.343a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM17 10a1 1 0 110 2h-1a1 1 0 110-2h1zM15.657 13.657a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.343 13.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM3 10a1 1 0 110-2h1a1 1 0 110 2H3zM4.343 6.343a1 1 0 011.414-1.414l.707.707A1 1 0 015.05 6.05l-.707-.707z" />
                  <path d="M10 7a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M17.293 13.293A8 8 0 116.707 2.707a6 6 0 0010.586 10.586z" />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={toggle} 
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} 
              aria-pressed={isDark} 
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 5a1 1 0 011-1V3a1 1 0 10-2 0v1a1 1 0 011 1zM15.657 6.343a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM17 10a1 1 0 110 2h-1a1 1 0 110-2h1zM15.657 13.657a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.343 13.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM3 10a1 1 0 110-2h1a1 1 0 110 2H3zM4.343 6.343a1 1 0 011.414-1.414l.707.707A1 1 0 015.05 6.05l-.707-.707z" />
                  <path d="M10 7a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M17.293 13.293A8 8 0 116.707 2.707a6 6 0 0010.586 10.586z" />
                </svg>
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
