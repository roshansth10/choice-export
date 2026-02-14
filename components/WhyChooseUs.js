// components/WhyChooseUs.js
export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Expert Team',
      description: 'Our certified professionals have 10+ years of logistics experience.',
      icon: 'fas fa-users',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Global Network',
      description: 'Partnerships with 50+ carriers for worldwide coverage.',
      icon: 'fas fa-network-wired',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Advanced Technology',
      description: 'Real-time tracking and digital documentation systems.',
      icon: 'fas fa-microchip',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored logistics strategies for every client.',
      icon: 'fas fa-puzzle-piece',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Competitive Pricing',
      description: 'Transparent pricing with no hidden charges.',
      icon: 'fas fa-tag',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer service and tracking.',
      icon: 'fas fa-headset',
      color: 'from-indigo-500 to-purple-500'
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-gray-50 to-white/50">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="section-title">Why Choose Choice International Export?</h2>
          <p className="section-subtitle">
            Discover what sets us apart as Nepal's leading logistics provider
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="card">
              <div className={`h-2 bg-gradient-to-r ${reason.color}`}></div>
              <div className="p-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4`}>
                  <i className={`${reason.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="glass-effect inline-block px-8 py-6 rounded-2xl shadow-xl">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold gradient-text">Ready to experience premium logistics?</span>{' '}
              Join thousands of satisfied clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-paper-plane mr-2"></i>
                Get Free Quote
              </a>
              <a href="tel:+977014957710" className="btn btn-outline">
                <i className="fas fa-phone-alt mr-2"></i>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}