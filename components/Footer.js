'use client';

import { useState } from 'react';
import PolicyModal from './PolicyModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState('privacy');

  const openPolicyModal = (type) => {
    setPolicyType(type);
    setIsModalOpen(true);
  };
  const quickLinks = [
    { name: 'Home', href: '#home', icon: 'fas fa-home' },
    { name: 'Services', href: '#services', icon: 'fas fa-shipping-fast' },
    { name: 'About', href: '#about', icon: 'fas fa-info-circle' },
    { name: 'Process', href: '#process', icon: 'fas fa-cogs' },
    { name: 'Testimonials', href: '#testimonials', icon: 'fas fa-comments' },
    { name: 'Contact', href: '#contact', icon: 'fas fa-envelope' },
  ];

  const serviceLinks = [
    { name: 'DHL Express', href: '#services' },
    { name: 'UPS Worldwide', href: '#services' },
    { name: 'FedEx Services', href: '#services' },
    { name: 'DPD Delivery', href: '#services' },
    { name: 'EMS Express', href: '#services' },
    { name: 'TNT Express', href: '#services' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-pattern"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-r from-secondary-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <img
                src="/img/1logo.png"
                alt="Choice International"
                className="h-12 w-auto rounded-md mr-3"
              />
              <div className="min-w-0">
                <h3 className="text-base sm:text-xl font-bold">Choice International Export</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Premium Global Logistics</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 sm:mb-6">
              Your trusted partner for world-class international shipping and logistics solutions from Nepal to global destinations.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/share/1FqGXR4MUx/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary-600 text-white flex items-center justify-center transition-colors text-lg">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/9863486932" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary-600 text-white flex items-center justify-center transition-colors text-lg">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.tiktok.com/@choiceexport?_r=1&_t=ZS-96HwO1s4qwM" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary-600 text-white flex items-center justify-center transition-colors text-lg">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://www.instagram.com/choiceexport/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary-600 text-white flex items-center justify-center transition-colors text-lg">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"></span>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="flex items-center text-gray-400 hover:text-white transition-colors group text-sm sm:text-base">
                    <i className={`${link.icon} text-primary-500 mr-2 sm:mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform`}></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"></span>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="flex items-center text-gray-400 hover:text-white transition-colors group text-sm sm:text-base">
                    <i className="fas fa-chevron-right text-primary-500 text-xs mr-2 sm:mr-3 group-hover:translate-x-1 transition-transform flex-shrink-0"></i>
                    <span className="line-clamp-1">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"></span>
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 mb-6 sm:mb-8 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary-500 mt-0.5 mr-2 sm:mr-3 flex-shrink-0"></i>
                <span>Nayabazar-16, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-primary-500 mr-2 sm:mr-3 flex-shrink-0"></i>
                <span>+977-01-4957710</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-mobile-alt text-primary-500 mr-2 sm:mr-3 flex-shrink-0"></i>
                <span>+977-9841052081</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-primary-500 mr-2 sm:mr-3 flex-shrink-0"></i>
                <span className="truncate">choiceinternationalexport@gmail.com</span>
              </li>
            </ul>

            <div>
              <h4 className="text-base font-bold mb-2 sm:mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm">Subscribe for logistics insights</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-3 rounded-l-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                />
                <button className="px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-r-lg hover:opacity-90 transition-opacity">
                  <i className="fas fa-paper-plane text-sm sm:text-base"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6 lg:my-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm gap-4">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Choice International Export. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <button onClick={() => openPolicyModal('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => openPolicyModal('terms')} className="hover:text-white transition-colors">Terms & Conditions</button>
            <button onClick={() => openPolicyModal('shipping')} className="hover:text-white transition-colors">Shipping Policy</button>
          </div>
        </div>
      </div>

      <PolicyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        policyType={policyType} 
      />
    </footer>
  );
}
