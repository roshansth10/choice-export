export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Request Quote',
      description: 'Share your shipping details for a customized quote',
      icon: 'fas fa-comments-dollar',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Schedule Pickup',
      description: 'We collect your shipment from your location',
      icon: 'fas fa-truck-pickup',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Documentation',
      description: 'We handle all customs and export paperwork',
      icon: 'fas fa-file-contract',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '04',
      title: 'Shipping & Tracking',
      description: 'Real-time tracking from pickup to delivery',
      icon: 'fas fa-satellite-dish',
      color: 'from-orange-500 to-red-500'
    },
    {
      number: '05',
      title: 'Customs Clearance',
      description: 'Expert handling of import/export regulations',
      icon: 'fas fa-passport',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      number: '06',
      title: 'Final Delivery',
      description: 'Safe delivery to the destination address',
      icon: 'fas fa-box-check',
      color: 'from-teal-500 to-green-500'
    },
  ];

  return (
    <section id="process" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="section-title">Our Shipping Process</h2>
          <p className="section-subtitle dark:text-gray-300">
            Simple, transparent, and efficient shipping from start to finish
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group">
                <div className="card h-full hover:scale-105">
                  <div className={`h-1.5 bg-gradient-to-r ${step.color}`}></div>
                  
                  <div className="p-6 text-center">
                    {/* Step Number */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    
                    {/* Step Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                      <i className={`${step.icon} text-white text-2xl`}></i>
                    </div>
                    
                    {/* Step Content */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
                    
                    {/* Connector for mobile */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-4">
                        <div className={`w-0.5 h-8 bg-gradient-to-b ${step.color}`}></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process CTA */}
        <div className="mt-16 text-center">
          <div className="glass-effect inline-block px-8 py-8 rounded-2xl shadow-2xl max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Shipment?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get a free quote and expert consultation for your specific shipping needs
            </p>
            <a 
              href="#contact" 
              className="btn btn-primary px-8 py-4 rounded-xl text-lg"
            >
              <i className="fas fa-rocket mr-3"></i>
              Begin Shipping Process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
