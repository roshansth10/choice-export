"use client";
// components/AboutHero.js

import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Base gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary-100/40 dark:from-primary-900/40 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-t from-accent-100/40 dark:from-accent-900/40 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        {/* Breadcrumb */}
        <div className="mb-12 md:mb-16">
          <nav className="flex items-center space-x-2 text-sm text-primary-600 dark:text-primary-400 mb-6">
            <a href="/" className="hover:text-primary-700 dark:hover:text-primary-300 transition">Home</a>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-gray-700 dark:text-gray-300 font-semibold">About Us</span>
          </nav>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story: From <span className="gradient-text">Vision to Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Pioneering Nepal's logistics revolution since 2010 — connecting entrepreneurs, businesses, and enterprises with seamless global shipping solutions through cutting-edge technology and uncompromising dedication.
            </p>
          </div>
        </div>

        {/* Main Content - Image First, Then Text Below */}
        <div className="mb-16">
          {/* Full Width Image Section - Above Text */}
          <div className="relative mb-12 md:mb-16">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl h-64 md:h-96 group">
              <Image 
                src="/img/container.jpg" 
                alt="Choice International Export Team and Operations"
                width={1200}
                height={500}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Card - Positioned below image */}
            <div className="relative mt-6 flex justify-start">
              <div className="glass-effect rounded-2xl p-6 shadow-xl max-w-sm hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">13+</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Years of Excellence</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Trusted by 5000+ clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Section - Below Image */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Who We Are
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Choice International Export stands as Nepal's most trusted international shipping and logistics partner. 
              Since our founding in 2010, we've revolutionized how Nepali businesses connect with the global marketplace. 
              What started as a vision to simplify international trade has evolved into a comprehensive logistics powerhouse 
              serving entrepreneurs, SMEs, and corporations across diverse industries.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Our expertise spans air freight, sea freight, courier services, and specialized cargo handling. With direct 
              partnerships with 50+ international logistics providers and a presence across 80+ countries, we've established 
              ourselves as the bridge between Nepal and the world. Our commitment to innovation, combined with 13+ years of 
              field experience, ensures that every shipment receives the attention it deserves.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              We manage over 50,000 successful shipments annually across 150+ international routes, maintaining a remarkable 
              99% on-time delivery rate. Our team of dedicated logistics professionals work around the clock to ensure transparent 
              tracking, regulatory compliance, and hassle-free customs clearance. We're not just a shipping company, we're your 
              strategic partner in global expansion.
            </p>

            {/* Core Values */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 dark:from-primary-900 to-primary-50 dark:to-primary-800 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shield-alt text-primary-600 dark:text-primary-400 text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Reliability & Trust</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Delivering on every promise with 99% on-time performance and zero-compromise quality standards</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-100 dark:from-accent-900 to-accent-50 dark:to-accent-800 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-rocket text-accent-600 dark:text-accent-400 text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Innovation & Technology</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Real-time tracking, AI-powered route optimization, and digital solutions for modern commerce</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 dark:from-green-900 to-green-50 dark:to-green-800 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-handshake text-green-600 dark:text-green-400 text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Partnership & Growth</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Long-term relationships built on transparency, mutual success, and continuous improvement</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-100 dark:from-orange-900 to-orange-50 dark:to-orange-800 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-leaf text-orange-600 dark:text-orange-400 text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Sustainability</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Committed to eco-friendly practices and responsible logistics for a better future</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/about#mission" className="btn btn-primary">
                <i className="fas fa-bullseye mr-2"></i>
                Our Mission & Vision
              </a>
              <a href="#contact" className="btn btn-outline">
                <i className="fas fa-phone-alt mr-2"></i>
                Connect With Us
              </a>
            </div>
          </div>

        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">50K+</div>
            <p className="text-primary-100">Successful Shipments</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">80+</div>
            <p className="text-primary-100">Countries Served</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">150+</div>
            <p className="text-primary-100">Shipping Routes</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">99%</div>
            <p className="text-primary-100">On-Time Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
