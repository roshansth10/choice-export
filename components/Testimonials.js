'use client';

import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Export Manager',
      company: 'Himalayan Tea Exports',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Choice International Export has been instrumental in streamlining our export process. Their expertise and professionalism are unmatched in Nepal.',
    },
    {
      name: 'Priya Sharma',
      position: 'CEO',
      company: 'Kathmandu Handicrafts',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Excellent service! They handled our international shipments with utmost care. Highly recommended for anyone looking for reliable logistics partners.',
    },
    {
      name: 'Santosh Bhatta',
      position: 'Managing Director',
      company: 'Pashmina Palace',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Our pashmina exports to Europe have never been smoother. Choice International Export understands the Nepalese market perfectly.',
    },
    {
      name: 'Anita Rai',
      position: 'Operations Head',
      company: 'Everest Organic Foods',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'The team provides exceptional support for organic food exports. Their temperature-controlled shipping is flawless.',
    },
    {
      name: 'Deepak Shrestha',
      position: 'Founder',
      company: 'Mountain Adventure Gear',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'From trekking gear to climbing equipment, they ensure our products reach international clients safely and on time.',
    },
    {
      name: 'Sunita Thapa',
      position: 'Procurement Manager',
      company: 'Koshi Rice Mills',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Our rice exports to India and beyond have grown significantly thanks to their efficient logistics network.',
    },
    {
      name: 'Niraj Maharjan',
      position: 'CEO',
      company: 'Artisan Jewelry Nepal',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'They handle our delicate jewelry exports with exceptional care. Our international customers are always satisfied.',
    },
    {
      name: 'Maya Gurung',
      position: 'Export Coordinator',
      company: 'Himalayan Spice Garden',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Fresh spices require careful handling and fast delivery. Choice International Export never disappoints.',
    },
    {
      name: 'Bikash Yadav',
      position: 'Logistics Manager',
      company: 'Kathmandu Trading Co.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Their customs clearance expertise has saved us countless delays. Highly professional team!',
    },
    {
      name: 'Kamala Singh',
      position: 'Director',
      company: 'Tansen Herbal Products',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Our herbal products reach global markets in perfect condition. Their refrigerated shipping is excellent.',
    },
    {
      name: 'Raj Kumar Oli',
      position: 'Supply Chain Head',
      company: 'Butwal Textile Industries',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Textile exports require careful packaging and timing. They deliver excellence every single time.',
    },
    {
      name: 'Asha Khadka',
      position: 'CEO',
      company: 'Snowy Mountain Wool',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Their understanding of wool export regulations and shipping has been invaluable for our business growth.',
    },
    {
      name: 'Prakash Paudel',
      position: 'Managing Partner',
      company: 'Pokhara Furniture Works',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Even large furniture pieces arrive safely at destinations. Outstanding packaging and handling.',
    },
    {
      name: 'Sabita Tamang',
      position: 'Export Manager',
      company: 'Dhulikhel Coffee Roasters',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Nepalese coffee is now reaching specialty markets worldwide. Their logistics make it possible.',
    },
    {
      name: 'Dipak Rai',
      position: 'Operations Director',
      company: 'Himalayan Adventure Tours',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Equipment and merchandise exports handled flawlessly. True professionals in international shipping.',
    },
    {
      name: 'Laxmi Karki',
      position: 'Founder',
      company: 'Kathmandu Silver Arts',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Delicate silver jewelry exports require expertise. They deliver with precision and care every time.',
    },
    {
      name: 'Suresh Basnet',
      position: 'Head of Exports',
      company: 'Chitwan Bamboo Products',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Sustainable bamboo products from Nepal are now in high demand globally. Their shipping makes it happen.',
    },
    {
      name: 'Nirmala Devi',
      position: 'CEO',
      company: 'Lumbini Silk Weavers',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Our silk products reach fashion houses in Paris and Milan beautifully. Exceptional service!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle dark:text-gray-300">
            Trusted by businesses across Nepal and beyond
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={index} className="card">
                <div className="p-6 md:p-8">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-400"></i>
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <i className="fas fa-star-half-alt text-yellow-400"></i>
                    )}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index 
                    ? 'bg-primary-600 dark:bg-primary-400' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
