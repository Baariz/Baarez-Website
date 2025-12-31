import { Link } from 'react-router-dom'

function DigitalTransformation() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Digital Transformation Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              End-to-end digital transformation powered by Baarez AI-native platforms, enabling organizations to modernize operations and achieve measurable business outcomes.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-brand-maroon hover:bg-gray-100">
              Start Your Transformation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Platform-Led Transformation
            </h2>
            <p className="text-xl text-gray-600">
              We don't just advise on digital transformation - we deliver it through proven AI-native platforms that drive real business value.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategy & Roadmap</h3>
              <p className="text-gray-600">Define transformation vision, identify quick wins, and build phased implementation roadmap.</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Implementation</h3>
              <p className="text-gray-600">Deploy Baarez GRC, TPRM, Audit, and Automation platforms tailored to your needs.</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Value Realization</h3>
              <p className="text-gray-600">Measure and optimize outcomes with continuous improvement and support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-brand-maroon to-brand-maroon-dark rounded-2xl p-8 flex items-center justify-center text-white aspect-video">
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <p className="text-xl font-semibold">Enterprise Modernization</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transform with Confidence
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Our transformation approach combines strategic consulting with platform deployment for accelerated time-to-value.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Governance, risk, and compliance digitization with GRC platform</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Process automation through RaaS and intelligent workflows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Cloud migration and modernization with Dynamics 365</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-maroon text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Digital Journey
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Transform your organization with AI-native platforms designed for enterprise excellence.
          </p>
          <Link to="/contact" className="bg-white text-brand-maroon hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all text-lg inline-flex items-center justify-center">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}

export default DigitalTransformation
