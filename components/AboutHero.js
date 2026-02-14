// components/AboutHero.js
'use client';

import Header from './Header';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <>
      <Header />
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-primary-900 to-gray-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-pattern"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <nav className="flex items-center space-x-2 text-sm text-primary-200 mb-8">
                <a href="/" className="hover:text-white">Home</a>
                <i className="fas fa-chevron-right text-xs"></i>
                <span className="text-white">About Us</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="gradient-text">Choice International Export</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Leading Nepal's global logistics revolution since 2010. We bridge 
                the gap between local businesses and international markets with 
                reliable, efficient, and secure shipping solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#mission" className="btn btn-primary">
                  <i className="fas fa-bullseye mr-2"></i>
                  Our Mission
                </a>
                <a href="#contact" className="btn btn-outline border-white text-white hover:bg-white/10">
                  <i className="fas fa-headset mr-2"></i>
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/img/container.jpg" 
                  alt="Choice International Export Global Logistics"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">2010</div>
              <p className="text-gray-300">Established</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50000+</div>
              <p className="text-gray-300">Successful Shipments</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">150+</div>
              <p className="text-gray-300">Shipping Routes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <p className="text-gray-300">Team Members</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}