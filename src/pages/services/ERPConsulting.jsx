import { Link } from 'react-router-dom'

function ERPConsulting() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ERP Consulting & Implementation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Strategic ERP advisory and implementation services that integrate seamlessly with Baarez platforms for unified enterprise operations.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-brand-maroon hover:bg-gray-100">
              Discuss Your ERP Needs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-brand-maroon to-brand-maroon-dark rounded-2xl p-8 flex items-center justify-center text-white aspect-video">
              <div className="text-center">
                <div className="text-6xl mb-4">💡</div>
                <p className="text-xl font-semibold">Enterprise System Integration</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Integrated ERP Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We design and implement ERP solutions that work in harmony with Baarez GRC, compliance, and automation platforms.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dynamics 365 Finance & Operations expertise</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Integration with Baarez Tax Automation and GRC platforms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">End-to-end implementation from planning to go-live support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ERP Services Portfolio
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ERP Selection & Strategy</h3>
              <p className="text-gray-600">Platform evaluation, vendor selection, and implementation roadmap development.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation & Migration</h3>
              <p className="text-gray-600">Full lifecycle implementation with data migration and legacy system integration.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Integration</h3>
              <p className="text-gray-600">Seamless integration between ERP and Baarez compliance and automation platforms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-maroon text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Modernize Your ERP Ecosystem
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Integrate ERP with governance, risk, and compliance platforms for unified operations.
          </p>
          <Link to="/solutions/dynamics-365" className="bg-white text-brand-maroon hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all text-lg inline-flex items-center justify-center mr-4">
            Explore Dynamics 365
          </Link>
          <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-brand-maroon font-semibold px-8 py-4 rounded-lg transition-all text-lg inline-flex items-center justify-center">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ERPConsulting
