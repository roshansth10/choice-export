// components/MissionVision.js
export default function MissionVision() {
  return (
    <section id="mission" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="section-title">Our Mission & Vision</h2>
          <p className="section-subtitle">
            Driving excellence in global logistics with purpose and vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="card">
            <div className="h-2 bg-gradient-to-r from-primary-500 to-accent-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To simplify international trade by providing reliable, efficient, and secure 
                logistics solutions that empower businesses and individuals to connect with 
                global markets seamlessly.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-primary-500 mr-3"></i>
                  Provide end-to-end logistics solutions
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-primary-500 mr-3"></i>
                  Ensure 100% customer satisfaction
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-primary-500 mr-3"></i>
                  Embrace innovation in logistics technology
                </li>
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="card">
            <div className="h-2 bg-gradient-to-r from-secondary-500 to-pink-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-eye text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To become Nepal's most trusted and innovative global logistics partner, 
                recognized for our excellence in service, technological advancement, and 
                commitment to sustainable growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-secondary-500 mr-3"></i>
                  Lead Nepal's export logistics industry
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-secondary-500 mr-3"></i>
                  Expand to 100+ countries by 2025
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check text-secondary-500 mr-3"></i>
                  Pioneer sustainable logistics solutions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Integrity',
                description: 'We operate with honesty and transparency in all our dealings.',
                icon: 'fas fa-handshake',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Excellence',
                description: 'We strive for the highest standards in service and performance.',
                icon: 'fas fa-medal',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Innovation',
                description: 'We embrace technology to enhance logistics solutions.',
                icon: 'fas fa-lightbulb',
                color: 'from-purple-500 to-pink-500'
              },
            ].map((value, index) => (
              <div key={index} className="card">
                <div className={`h-2 bg-gradient-to-r ${value.color}`}></div>
                <div className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${value.icon} text-white text-2xl`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}