export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home', icon: 'fas fa-home' },
    { name: 'Services', href: '#services', icon: 'fas fa-shipping-fast' },
    { name: 'About', href: '#about', icon: 'fas fa-info-circle' },
    { name: 'Process', href: '#process', icon: 'fas fa-cogs' },
    { name: 'Testimonials', href: '#testimonials', icon: 'fas fa-comments' },
    { name: 'Contact', href: '#contact', icon: 'fas fa-envelope' },
  ];

  const serviceLinks = [
    { name: 'DHL Express', href: '#services' },
    { name: 'UPS Worldwide', href: '#services' },
    { name: 'FedEx Services', href: '#services' },
    { name: 'DPD Delivery', href: '#services' },
    { name: 'EMS Express', href: '#services' },
    { name: 'TNT Express', href: '#services' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-pattern"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-r from-secondary-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-start sm:items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-globe-americas text-white text-lg sm:text-xl"></i>
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-xl font-bold">Choice International Export</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Premium Global Logistics</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 sm:mb-6">
              Your trusted partner for world-class international shipping and logistics solutions from Nepal to global destinations.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary-600 text-white flex items-center justify-center transition-colors text-lg">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-400 text-white flex items-center justify-center transition-colors text-lg">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-700 text-white flex items-center justify-center transition-colors text-lg">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-pink-600 text-white flex items-center justify-center transition-colors text-lg">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"></span>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-white transition-colors group text-sm sm:text-base"
                  >
                    <i className={`${link.icon} text-primary-500 mr-2 sm:mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform`}></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"></span>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="flex items-center text-gray-400 hover:text-white transition-colors group text-sm sm:text-base"
                  >
                    <i className="fas fa-chevron-right text-primary-500 text-xs mr-2 sm:mr-3 group-hover:translate-x-1 transition-transform flex-shrink-0"></i>
                    <span className="line-clamp-1">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"></span>
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 mb-6 sm:mb-8 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary-500 mt-0.5 mr-2 sm:mr-3 flex-shrink-0"></i>
                <span>Nayabazar-16, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-primary-500 mr-2 sm:mr-3 flex-shrink-0"></i>
                <span>+977-01-4957710</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-mobile-alt text-primary-500 mr-2 sm:mr-3 flex-shrink-0"></i>
                <span>+977-9841052081</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-primary-500 mr-2 sm:mr-3 flex-shrink-0"></i>
                <span className="truncate">choiceinternationalexport@gmail.com</span>
              </li>
            </ul>

            <div>
              <h4 className="text-base font-bold mb-2 sm:mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm">Subscribe for logistics insights</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-3 rounded-l-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                />
                <button className="px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-r-lg hover:opacity-90 transition-opacity">
                  <i className="fas fa-paper-plane text-sm sm:text-base"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6 lg:my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm gap-4">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Choice International Export. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
          </div>
        </div>

        {/* Attribution */}
        <div className="text-center mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-800 text-gray-500 text-xs">
          <p>Designed with <i className="fas fa-heart text-red-500 mx-1"></i> for seamless global logistics</p>
        </div>
      </div>
    </footer>
  );
}