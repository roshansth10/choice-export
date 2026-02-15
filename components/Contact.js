'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent. We will contact you within 24 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Our Office',
      details: ['Nayabazar-16, Kathmandu, Nepal'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Call Us',
      details: ['+977-01-4957710', '+977-9841052081', '+977-9863466932'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: ['choiceinternationalexport@gmail.com'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'fas fa-clock',
      title: 'Business Hours',
      details: ['Sun - Fri: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
      color: 'from-orange-500 to-red-500'
    },
  ];

  const services = [
    'DHL Express',
    'UPS Worldwide',
    'FedEx Services',
    'DPD Delivery',
    'Depex Logistics',
    'EMS Express',
    'TNT Express',
    'Toll Logistics',
    'DTDC Courier',
    'GOG Logistics',
    'Professional Packing',
    'Not Sure - Need Advice'
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-r from-primary-50/30 to-accent-50/30 -z-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to ship? Contact us for a free quote and expert consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="card">
                  <div className={`h-2 bg-gradient-to-r ${info.color}`}></div>
                  <div className="p-4 sm:p-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0`}>
                      <i className={`${info.icon} text-white text-lg sm:text-xl`}></i>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{info.title}</h3>
                    <ul className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <li key={idx} className="text-sm sm:text-base text-gray-600">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="card">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <a href="https://www.facebook.com/" target="_blank" className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center hover:scale-110 transition-transform text-lg sm:text-xl">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://wa.me/9779841052081" target="_blank"  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white flex items-center justify-center hover:scale-110 transition-transform text-lg sm:text-xl">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="https://www.tiktok.com/en/" target="_blank" className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-white to-red-600 text-black flex items-center justify-center hover:scale-110 transition-transform text-lg sm:text-xl">
                    <i className="fab fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <div className="h-2 bg-gradient-to-r from-primary-500 to-accent-500"></div>
            <div className="p-4 sm:p-8">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                  <i className="fas fa-paper-plane text-primary-500 mr-2 sm:mr-3"></i>
                  Send Quick Message
                </h3>
                <p className="text-sm sm:text-base text-gray-600">We typically respond within 2 hours</p>
              </div>

              {submitStatus && (
                <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl text-sm sm:text-base ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-700' 
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                  <div className="flex items-start sm:items-center">
                    <i className={`fas ${
                      submitStatus.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'
                    } mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0`}></i>
                    <span>{submitStatus.message}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      <i className="far fa-user text-primary-500 mr-2"></i>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none text-sm"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      <i className="far fa-envelope text-primary-500 mr-2"></i>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      <i className="fas fa-phone text-primary-500 mr-2"></i>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      <i className="fas fa-box text-primary-500 mr-2"></i>
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none appearance-none bg-white text-sm"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    <i className="far fa-comment-dots text-primary-500 mr-2"></i>
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none text-sm"
                    placeholder="Describe your shipping needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2 sm:mr-3"></i>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2 sm:mr-3"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}