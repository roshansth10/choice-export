'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      company: 'Global Trading Co.',
      role: 'CEO',
      content: 'Choice International Export has been our trusted logistics partner for 5 years. Their reliability and professionalism are unmatched in the industry.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Sarah Johnson',
      company: 'Tech Importers Ltd.',
      role: 'Operations Manager',
      content: 'Their real-time tracking and customer support made international shipping stress-free for our business. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w-150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Michael Chen',
      company: 'Asian Exports Inc.',
      role: 'Logistics Director',
      content: 'The team at Choice International Export handles all customs documentation efficiently. They save us hours of paperwork every week.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Priya Patel',
      company: 'Heritage Crafts',
      role: 'Owner',
      content: 'Shipping fragile handicrafts internationally was a challenge until we found Choice. Their packing service is exceptional.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-r from-primary-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-pattern"></div>
      
      <div className="container-custom relative z-10">
        <div className="section-header">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            See what our clients say about our premium shipping services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="glass-effect rounded-3xl p-8 shadow-2xl">
            <div className="flex items-start space-x-6">
              {/* Client Image */}
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white/20">
                  <img 
                    src={testimonials[currentSlide].image} 
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary-500 to-accent-500 w-10 h-10 rounded-full flex items-center justify-center">
                  <i className="fas fa-quote-left text-white text-sm"></i>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 mr-1"></i>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-lg md:text-xl italic mb-6">
                  "{testimonials[currentSlide].content}"
                </blockquote>
                
                {/* Client Info */}
                <div>
                  <h4 className="text-xl font-bold">{testimonials[currentSlide].name}</h4>
                  <p className="text-primary-200">
                    {testimonials[currentSlide].role}, {testimonials[currentSlide].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-primary-400 to-accent-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">98.5%</div>
              <p className="text-primary-200">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
              <p className="text-primary-200">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">85%</div>
              <p className="text-primary-200">Repeat Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">24h</div>
              <p className="text-primary-200">Avg. Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}