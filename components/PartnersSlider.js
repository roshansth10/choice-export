'use client';

import { useEffect, useState } from 'react';

export default function PartnersSlider() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const partners = [
    { name: 'DHL Express', image: '/img/dhl.jpg', color: 'from-yellow-500 to-red-600' },
    { name: 'UPS Worldwide', image: '/img/ups.jpg', color: 'from-yellow-800 to-yellow-500' },
    { name: 'FedEx Services', image: '/img/fedex.jpg', color: 'from-orange-500 to-purple-600' },
    { name: 'DPD Delivery', image: '/img/dpd.jpg', color: 'from-yellow-400 to-red-500' },
    { name: 'Depex Logistics', image: '/img/depex.jpg', color: 'from-blue-500 to-cyan-600' },
    { name: 'EMS Express', image: '/img/ems.jpg', color: 'from-red-500 to-yellow-600' },
    { name: 'TNT Express', image: '/img/tnt.jpg', color: 'from-orange-600 to-red-700' },
    { name: 'Toll Logistics', image: '/img/toll.jpg', color: 'from-blue-600 to-indigo-700' },
    { name: 'DTDC Courier', image: '/img/dtdc.jpg', color: 'from-green-500 to-blue-600' },
    { name: 'GIG Logistics', image: '/img/gig.jpg', color: 'from-purple-500 to-pink-600' },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-gray-50 to-white/50 overflow-hidden">
      <div className="container-custom">
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="section-title mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl">Trusted by Global Leaders</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Partnering with world's leading logistics providers for seamless global coverage
          </p>
        </div>

        {/* Infinite Slider Container */}
        <div className="relative overflow-hidden py-6 md:py-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white/50 to-transparent z-10"></div>
          
          {/* Slider Track */}
          <div className="flex animate-slide space-x-4 sm:space-x-6 md:space-x-8">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="flex-shrink-0"
              >
                <div className="group relative">
                  <div className={`w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-40 ${partner.image ? 'bg-transparent' : `bg-gradient-to-br ${partner.color}`} rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl`}>
                    {partner.image ? (
                      <img src={partner.image} alt={partner.name} className="w-16 h-10 sm:w-20 sm:h-12 object-contain mb-2 sm:mb-3" />
                    ) : (
                      <i className={`${partner.icon} text-white text-2xl sm:text-3xl mb-2 sm:mb-3`}></i>
                    )}
                    <span className="font-bold text-center gradient-text dark:text-white text-sm sm:text-base md:text-lg">{partner.name}</span>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-10 md:mt-16 glass-effect rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 shadow-xl">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text dark:text-white mb-1 sm:mb-2">24/7</div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Customer Support</p>
          </div> 
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text dark:text-white mb-1 sm:mb-2">150+</div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Shipping Routes</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text dark:text-white mb-1 sm:mb-2">13+</div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text dark:text-white mb-1 sm:mb-2">50+</div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Global Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}