export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Export Manager',
      company: 'Nepal Tea Exports',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      text: 'Choice International Export has been instrumental in streamlining our export process. Their expertise and professionalism are unmatched in Nepal.',
    },
    {
      name: 'Priya Sharma',
      position: 'CEO',
      company: 'Himalayan Crafts',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      text: 'Excellent service! They handled our international shipments with utmost care. Highly recommended for anyone looking for reliable logistics partners.',
    },
    {
      name: 'Michael Chen',
      position: 'Procurement Head',
      company: 'Asia Trading Co.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      text: 'The team at Choice International Export provides exceptional service. Their tracking system gives us peace of mind throughout the shipping process.',
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle dark:text-gray-300">
            Trusted by businesses across Nepal and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="p-6 md:p-8">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
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
      </div>
    </section>
  );
}
