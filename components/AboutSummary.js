// components/AboutSummary.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSummary() {
  const features = [
    {
      title: 'Expertise & Experience',
      description: '13+ years of reliable export and logistics solutions with 99% client satisfaction.',
      icon: 'fas fa-award',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Global Network',
      description: 'Direct partnerships with 50+ global logistics providers for worldwide coverage.',
      icon: 'fas fa-globe-americas',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored logistics strategies for businesses of all sizes.',
      icon: 'fas fa-cogs',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Real-time Tracking',
      description: 'Advanced tracking systems for complete shipment visibility.',
      icon: 'fas fa-satellite-dish',
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section id="aboutsummary" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-xs sm:text-sm font-semibold text-primary-600 mb-4 md:mb-6">
              ABOUT OUR COMPANY
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Your Trusted Partner in <span className="gradient-text">Global Logistics</span>
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">
              Founded in 2010, Choice International Export has established itself as Nepal's leading 
              international shipping and logistics provider. We specialize in connecting businesses 
              and individuals with reliable, efficient, and secure global shipping solutions.
            </p>
            
            <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
              Our mission is to simplify international trade by providing comprehensive logistics 
              services that are tailored to meet the unique needs of each client.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                    <i className={`${feature.icon} text-white text-base md:text-lg`}></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{feature.title}</h4>
                    <p className="text-xs md:text-sm text-gray-600 line-clamp-2">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 items-center sm:items-start">
              <Link 
                href="/about" 
                className="btn btn-primary px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                <i className="fas fa-book-open mr-2"></i>
                Read More
              </Link>
              <Link 
                href="#contact" 
                className="btn btn-outline px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                <i className="fas fa-phone-alt mr-2"></i>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Image with Stats */}
          <div className="relative mt-6 md:mt-0">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
              <Image 
                src="/img/shipment1.jpg" 
                alt="Choice International Export Team"
                width={600}
                height={450}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Stats - Hidden on small screens */}
            <div className="hidden md:block absolute -bottom-6 -left-6 glass-effect p-4 md:p-6 rounded-2xl shadow-2xl w-56 md:w-64">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50000+</div>
                <p className="text-gray-700 font-semibold text-sm md:text-base">Successful Shipments</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>
            
            {/* Experience Badge - Hidden on small screens */}
            <div className="hidden md:block absolute -top-6 -right-6">
              <div className="relative">
                <div className="w-28 h-28 md:w-32 md:h-32 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex flex-col items-center justify-center shadow-2xl">
                  <span className="text-2xl md:text-3xl font-bold text-white">13+</span>
                  <span className="text-white text-xs md:text-sm text-center">Years of<br/>Excellence</span>
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="mt-10 md:mt-16 glass-effect rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 shadow-xl">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 md:mb-2">13+</div>
            <p className="text-xs sm:text-sm text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 md:mb-2">80+</div>
            <p className="text-xs sm:text-sm text-gray-600">Countries Served</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 md:mb-2">50+</div>
            <p className="text-xs sm:text-sm text-gray-600">Global Partners</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 md:mb-2">99.7%</div>
            <p className="text-xs sm:text-sm text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}