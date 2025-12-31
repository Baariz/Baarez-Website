import { Link } from 'react-router-dom'

function CybersecuritySOC() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Cybersecurity & SOC Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Enterprise security operations and threat management services that complement Baarez ScanVista and GRC platforms for comprehensive security posture management.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-brand-maroon hover:bg-gray-100">
              Strengthen Your Security
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Integrated Security Operations
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Our SOC services work seamlessly with ScanVista vulnerability management and GRC platform for unified security and compliance operations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 security monitoring and incident response</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Threat intelligence and vulnerability coordination with ScanVista</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Security compliance management through GRC platform integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Managed detection and response (MDR) services</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-maroon to-brand-maroon-dark rounded-2xl p-8 flex items-center justify-center text-white aspect-video">
              <div className="text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <p className="text-xl font-semibold">Security Operations Center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Security Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SOC as a Service</h3>
              <p className="text-gray-600">Managed security operations center with continuous monitoring, threat detection, and incident response.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vulnerability Management</h3>
              <p className="text-gray-600">Integrated with ScanVista for comprehensive vulnerability assessment and remediation tracking.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Penetration Testing</h3>
              <p className="text-gray-600">Regular security assessments and penetration testing to identify weaknesses before attackers do.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Compliance</h3>
              <p className="text-gray-600">ISO 27001, SOC 2, PCI-DSS compliance support integrated with Baarez GRC platform.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Threat Intelligence</h3>
              <p className="text-gray-600">Proactive threat hunting and intelligence feeds to stay ahead of emerging threats.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Incident Response</h3>
              <p className="text-gray-600">Rapid incident response and forensics capabilities with 24/7 availability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-maroon text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Elevate Your Security Posture
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Combine SOC services with ScanVista and GRC platforms for comprehensive security management.
          </p>
          <Link to="/solutions/scanvista" className="bg-white text-brand-maroon hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all text-lg inline-flex items-center justify-center mr-4">
            Explore ScanVista
          </Link>
          <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-brand-maroon font-semibold px-8 py-4 rounded-lg transition-all text-lg inline-flex items-center justify-center">
            Contact Security Team
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CybersecuritySOC
