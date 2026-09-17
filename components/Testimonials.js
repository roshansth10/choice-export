'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      position: 'Founder & CEO',
      company: 'Himalayan Art & Handicrafts, Kathmandu',
      image: '/img/testimonials/priya-sharma.jpg',
      rating: 5,
      text: 'Shipping delicate wooden sculptures and handmade thangkas to our galleries in the US and Europe used to be nerve-wracking. Choice International Export took complete charge of custom packaging, documentation, and safe doorstep delivery. Not a single damage in 3 years!',
    },
    {
      name: 'Santosh Shrestha',
      position: 'Managing Director',
      company: 'Royal Cashmere & Pashmina Exporters, Thamel',
      image: '/img/testimonials/santosh-shrestha.jpg',
      rating: 5,
      text: "Our seasonal pashmina consignments to Germany and the UK require express air transit and punctual customs clearance. Choice International's tie-ups with DHL and FedEx guarantee our shipments arrive right on schedule every autumn.",
    },
    {
      name: 'Sunita Gurung',
      position: 'Head of Exports',
      company: 'Annapurna Valley Organic Teas, Pokhara',
      image: '/img/testimonials/sunita-gurung.jpg',
      rating: 5,
      text: 'Specialty orthodox teas lose their aroma if transit times lag. Choice International Export provides moisture-sealed packaging and swift cargo booking to Japan and Europe. Their real-time tracking gives our buyers immense peace of mind.',
    },
    {
      name: 'Bikash Adhikari',
      position: 'Supply Chain Lead',
      company: 'Everest Felt & Woolen Industries, Lalitpur',
      image: '/img/testimonials/bikash-adhikari.jpg',
      rating: 5,
      text: 'We dispatch high-volume wool felt crafts to major distributors in the USA, Canada, and Australia. Their team offers unbeatable freight rates, punctual warehouse pickups, and handles all GSP documentation with complete transparency.',
    },
    {
      name: 'Anita Thapa',
      position: 'Founder & Formulator',
      company: 'Kanti Himalayan Herbal & Wellness, Kathmandu',
      image: '/img/testimonials/anita-thapa.jpg',
      rating: 5,
      text: 'Exporting certified organic skincare and botanical extracts entails rigorous customs and phytosanitary clearance. Choice International made the complex compliance process effortless for our team. Truly exceptional customer service!',
    },
    {
      name: 'Ramesh Maharjan',
      position: 'Proprietor & Master Artisan',
      company: 'Patan Heritage Bronze & Metal Crafts, Patan',
      image: '/img/testimonials/ramesh-maharjan.jpg',
      rating: 5,
      text: 'From sending urgent corporate legal documents to shipping heavy cast-bronze singing bowls overseas, Choice International provides honest guidance, fair pricing, and flawless international delivery every time.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    if (currentIndex >= totalSlides && totalSlides > 0) {
      setCurrentIndex(0);
    }
  }, [totalSlides, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrevious();
    }
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle dark:text-gray-300">
            Trusted by businesses across Nepal and global partners
          </p>
        </div>

        <div className="relative">
          {/* Side Navigation Arrows (Tablet & Desktop) */}
          <button
            onClick={goToPrevious}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 lg:-translate-x-6 z-10 w-11 h-11 lg:w-12 lg:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 hover:scale-105 transition-all border border-gray-100 dark:border-gray-700 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left text-sm md:text-base"></i>
          </button>

          <button
            onClick={goToNext}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 lg:translate-x-6 z-10 w-11 h-11 lg:w-12 lg:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 hover:scale-105 transition-all border border-gray-100 dark:border-gray-700 focus:outline-none"
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right text-sm md:text-base"></i>
          </button>

          {/* Testimonials Grid with Touch Swipe */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-6 lg:px-8"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={index} className="card h-full flex flex-col justify-between">
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                        <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                      ))}
                      {testimonial.rating % 1 !== 0 && (
                        <i className="fas fa-star-half-alt text-yellow-400 text-sm"></i>
                      )}
                    </div>
                    <i className="fas fa-quote-right text-2xl text-primary-500/20 dark:text-primary-400/20"></i>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic text-sm sm:text-base leading-relaxed flex-1">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center pt-4 border-t border-gray-100 dark:border-gray-700/60 mt-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4 ring-2 ring-primary-500/30 flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 dark:text-white text-base truncate">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 font-medium truncate">{testimonial.position}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Indicators & Mobile Controls */}
          <div className="flex items-center justify-center mt-8 gap-3">
            <button
              onClick={goToPrevious}
              className="sm:hidden w-9 h-9 bg-white dark:bg-gray-800 rounded-full shadow flex items-center justify-center text-primary-600 dark:text-primary-400 border border-gray-200 dark:border-gray-700 active:scale-95 transition-transform"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left text-xs"></i>
            </button>

            <div className="flex items-center gap-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'w-7 h-2.5 bg-primary-600 dark:bg-primary-400' 
                      : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="sm:hidden w-9 h-9 bg-white dark:bg-gray-800 rounded-full shadow flex items-center justify-center text-primary-600 dark:text-primary-400 border border-gray-200 dark:border-gray-700 active:scale-95 transition-transform"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
