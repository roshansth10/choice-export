export default function Services() {
  const services = [
    {
      name: 'DHL Express',
      image: '/img/dhl.jpg',
      description: 'Worldwide express delivery with time-definite international shipping services.',
      features: ['Fastest delivery options', 'Real-time tracking', 'Customs clearance', 'Insurance coverage'],
      gradient: 'from-yellow-400 to-red-600'
    },
    {
      name: 'UPS Worldwide',
      image: '/img/ups.jpg',
      description: 'Global logistics, distribution, and freight services with advanced tracking.',
      features: ['Advanced tracking', 'Global network', 'Business solutions', 'Flexible delivery'],
      gradient: 'from-yellow-800 to-yellow-500'
    },
    {
      name: 'FedEx Services',
      icon: 'fas fa-box',
      image: '/img/fedex.jpg',
      description: 'Reliable shipping, e-commerce, and business solutions worldwide.',
      features: ['E-commerce solutions', 'Business logistics', 'Reliable delivery', 'Global reach'],
      gradient: 'from-orange-500 to-purple-600'
    },
    {
      name: 'DPD Delivery',
      image: '/img/dpd.jpg',
      description: 'European parcel delivery network with innovative Predict service.',
      features: ['Predict service', 'European network', 'Flexible options', 'Real-time updates'],
      gradient: 'from-yellow-400 to-red-500'
    },
    {
      name: 'Depex Logistics',
      icon: 'fas fa-ship',
      image: '/img/depex.jpg',
      description: 'Specialized logistics solutions for sea and air freight.',
      features: ['Sea freight', 'Air freight', 'Heavy cargo', 'Custom solutions'],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'EMS Express',
      icon: 'fas fa-mail-bulk',
      image: '/img/ems.jpg',
      description: 'Express Mail Service for documents and parcels with tracking.',
      features: ['Document shipping', 'Parcel delivery', 'Tracking included', 'Affordable rates'],
      gradient: 'from-red-500 to-yellow-600'
    },
    {
      name: 'TNT Express',
      icon: 'fas fa-rocket',
      image: '/img/tnt.jpg',
      description: 'Fast and reliable road and air express delivery services.',
      features: ['Express delivery', 'Road transport', 'Air freight', 'Time-sensitive'],
      gradient: 'from-orange-600 to-red-700'
    },
    {
      name: 'Toll Logistics',
      icon: 'fas fa-tachometer-alt',
      image: '/img/toll.jpg',
      description: 'Integrated logistics solutions across road, rail, sea and air.',
      features: ['Multi-modal', 'Integrated solutions', 'Supply chain', 'Custom logistics'],
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      name: 'DTDC Courier',
      image: '/img/dtdc.jpg',
      description: 'Domestic and international courier and cargo services.',
      features: ['Domestic delivery', 'International cargo', 'Warehousing', 'Distribution'],
      gradient: 'from-green-500 to-blue-600'
    },
    {
      name: 'GIG Logistics',
      image: '/img/gig.jpg',      
      description: 'Global logistics solutions with customs clearance expertise.',
      features: ['Customs expertise', 'Global network', 'End-to-end', 'Documentation'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Professional Packing',
      icon: 'fas fa-box-open',
      description: 'Expert packing services to ensure your items are protected during transit.',
      features: ['Expert packing', 'Fragile handling', 'Secure packaging', 'Custom crating'],
      gradient: 'from-teal-500 to-green-600'
    },
    {
      name: '24/7 Support',
      icon: 'fas fa-headset',
      description: 'Round-the-clock customer support for tracking and queries.',
      features: ['24/7 support', 'Multi-language', 'Instant response', 'Proactive updates'],
      gradient: 'from-gray-600 to-blue-700'
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 dark:bg-accent-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle dark:text-gray-300">
            End-to-end shipping and export services tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const gradient = service.gradient || 'from-gray-500 to-gray-700';
            const featureColorClass = gradient.replace('from-', 'text-').split(' ')[0];
            return (
              <div 
                key={index} 
                className="card group"
              >
                {/* Service Header */}
                <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>
                
                <div className="p-4 sm:p-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 ${service.image ? 'bg-transparent' : `bg-gradient-to-br ${gradient}`} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                    {service.image ? (
                      <img src={service.image} alt={service.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                    ) : (
                      <i className={`${service.icon} text-white text-lg sm:text-2xl`}></i>
                    )}
                  </div>

                  {/* Service Info */}
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:gradient-text transition-all duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center mb-2">
                      <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">Key Features:</span>
                    </div>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          <i className={`fas fa-check text-xs mr-2 flex-shrink-0 ${featureColorClass}`}></i>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a 
                    href="#contact" 
                    className={`inline-flex items-center justify-center w-full py-2 sm:py-3 px-3 sm:px-4 rounded-xl bg-gradient-to-r ${gradient} text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0`}
                  >
                    Get Quote
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300 text-xs sm:text-sm"></i>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Service Summary */}
        <div className="mt-16 text-center">
          <div className="glass-effect inline-block px-8 py-4 rounded-2xl shadow-xl">
            <p className="text-lg text-gray-700 dark:text-gray-200">
              <span className="font-bold gradient-text">Not sure which service you need?</span>{' '}
              Contact our experts for personalized recommendations
            </p>
            <a 
              href="#contact" 
              className="btn btn-primary mt-4 px-8 py-3 rounded-xl"
            >
              <i className="fas fa-comments mr-2"></i>
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}