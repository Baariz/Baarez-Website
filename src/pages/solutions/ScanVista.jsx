import BookDemoForm from '../../components/BookDemoForm'

function ScanVista() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Vulnerability Management Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ScanVista: Advanced Vulnerability Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Proactive vulnerability detection and management with AI-powered threat intelligence, continuous scanning, and automated remediation workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#demo" className="btn-primary bg-white text-brand-maroon hover:bg-gray-100">
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              The Security Vulnerability Challenge
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">Attack Surface Expansion</h3>
                <p className="text-gray-600">Growing infrastructure complexity creates blind spots and unknown vulnerabilities.</p>
              </div>
              <div>
                <div className="text-5xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold mb-3">Time-to-Remediation</h3>
                <p className="text-gray-600">Slow vulnerability identification and remediation windows expose organizations to threats.</p>
              </div>
              <div>
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3">Alert Fatigue</h3>
                <p className="text-gray-600">High volume of false positives overwhelms security teams and delays critical action.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-brand-maroon to-brand-maroon-dark rounded-2xl p-8 flex items-center justify-center text-white aspect-video">
              <div className="text-center">
                <div className="text-6xl mb-4">🔒</div>
                <p className="text-xl font-semibold">Continuous Security Scanning</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Vulnerability Coverage
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Multi-layered scanning across infrastructure, applications, and cloud environments with intelligent prioritization.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Network and infrastructure vulnerability scanning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Web application security testing and DAST capabilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Cloud configuration and compliance assessment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI-powered threat intelligence and risk scoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ScanVista Core Features
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Scanning</h3>
              <p className="text-gray-600">Automated, scheduled vulnerability scans across your entire digital infrastructure with zero-touch deployment.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk Prioritization</h3>
              <p className="text-gray-600">AI-driven risk scoring based on exploitability, business impact, and threat intelligence feeds.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Remediation Workflows</h3>
              <p className="text-gray-600">Automated ticket creation and tracking with integration to ITSM and DevOps tools.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance Reporting</h3>
              <p className="text-gray-600">Pre-built compliance reports for PCI-DSS, HIPAA, SOC 2, and other regulatory frameworks.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Asset Discovery</h3>
              <p className="text-gray-600">Automated asset inventory and classification with shadow IT detection capabilities.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Threat Intelligence</h3>
              <p className="text-gray-600">Real-time threat feeds and vulnerability intelligence from global security research networks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-maroon text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Measurable Security Improvement
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">85%</div>
              <p className="text-lg opacity-90">Faster vulnerability detection</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">70%</div>
              <p className="text-lg opacity-90">Reduction in critical vulnerabilities</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">90%</div>
              <p className="text-lg opacity-90">Decrease in false positives</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">60%</div>
              <p className="text-lg opacity-90">Lower remediation time</p>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <BookDemoForm
              title="Experience ScanVista Platform"
              subtitle="Discover how to strengthen your security posture with intelligent vulnerability management"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ScanVista
