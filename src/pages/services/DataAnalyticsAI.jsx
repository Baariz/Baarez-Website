import { Link } from 'react-router-dom'

function DataAnalyticsAI() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Data Analytics & AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Unlock the power of your data with advanced analytics and AI capabilities that enhance Baarez platform intelligence and drive data-driven decision making.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-brand-maroon hover:bg-gray-100">
              Explore AI Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                AI-Enhanced Platform Intelligence
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Our AI and analytics services amplify the intelligence of Baarez platforms, delivering predictive insights and automated decision support.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Predictive risk modeling for GRC and TPRM platforms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Machine learning for anomaly detection and fraud prevention</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Natural language processing for document analysis and extraction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Advanced analytics dashboards and executive reporting</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-maroon to-brand-maroon-dark rounded-2xl p-8 flex items-center justify-center text-white aspect-video">
              <div className="text-center">
                <div className="text-6xl mb-4">🧠</div>
                <p className="text-xl font-semibold">AI-Powered Insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Analytics & AI Capabilities
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">Risk forecasting, compliance prediction, and proactive issue identification for GRC operations.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Mining</h3>
              <p className="text-gray-600">Discover automation opportunities and optimize workflows through data-driven process analysis.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom AI Models</h3>
              <p className="text-gray-600">Develop domain-specific AI models tailored to your industry and use cases.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-maroon text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Harness the Power of AI
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Enhance your Baarez platforms with advanced analytics and AI capabilities.
          </p>
          <Link to="/contact" className="bg-white text-brand-maroon hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all text-lg inline-flex items-center justify-center">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default DataAnalyticsAI
