'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  useEffect(() => {
    // Add any initialization code here
  }, []);

  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-40 md:pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern -z-10"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-r from-secondary-400/20 to-pink-400/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mr-2 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold gradient-text">Trusted Since 2010</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="block">Premium Global</span>
              <span className="gradient-text">Logistics Solutions</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience world-class international shipping and export services from Nepal to global destinations. 
              Fast, secure, and reliable logistics solutions tailored to your needs.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">50000+</div>
                <p className="text-xs sm:text-sm text-gray-600">Clients Served</p>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">99.7%</div>
                <p className="text-xs sm:text-sm text-gray-600">On-Time Delivery</p>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">80+</div>
                <p className="text-xs sm:text-sm text-gray-600">Countries Covered</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="btn btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg shadow-xl hover:shadow-2xl"
              >
                <i className="fas fa-paper-plane mr-2 sm:mr-3"></i>
                <span>Get Free Quote</span>
              </a>
              <a
                href="#services"
                className="btn btn-outline px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg"
              >
                <i className="fas fa-play-circle mr-2 sm:mr-3"></i>
                <span>Our Services</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
              <div className="aspect-w-16 aspect-h-12">
                <Image 
                  src="/img/plane.jpg" 
                  alt="Global Logistics Plane"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Cards - Hidden on small screens */}
            <div className="hidden md:block absolute -top-6 -left-6 glass-effect p-3 sm:p-4 rounded-2xl shadow-2xl max-w-xs animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shipping-fast text-white text-base sm:text-xl"></i>
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">Door-to-Door</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-white whitespace-nowrap">Complete Delivery</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block absolute -bottom-6 -right-6 glass-effect p-3 sm:p-4 rounded-2xl shadow-2xl max-w-xs animate-float animation-delay-2000">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-white text-base sm:text-xl"></i>
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">24/7 Tracking</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-white whitespace-nowrap">Real-Time Updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}