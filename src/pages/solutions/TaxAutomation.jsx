import BookDemoForm from '../../components/BookDemoForm'

function TaxAutomation() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Tax Compliance & Automation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Intelligent Tax Automation Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Streamline tax compliance, reporting, and regulatory filing with AI-powered automation and real-time regulatory intelligence.
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                End-to-End Tax Compliance Automation
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                From data collection through filing and reconciliation, automate your entire tax compliance lifecycle across multiple jurisdictions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Automated tax data extraction from ERP and financial systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Multi-jurisdiction tax calculation and compliance management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time regulatory change monitoring and impact analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Automated return generation and electronic filing</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-maroon to-brand-maroon-dark rounded-2xl p-8 flex items-center justify-center text-white aspect-video">
              <div className="text-center">
                <div className="text-6xl mb-4">💼</div>
                <p className="text-xl font-semibold">Tax Compliance Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Tax Management
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">GST/VAT Compliance</h3>
              <p className="text-gray-600">Automated GST, VAT, and sales tax calculation, reconciliation, and filing across global jurisdictions.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Income Tax Management</h3>
              <p className="text-gray-600">Corporate income tax provisioning, calculation, and return preparation with transfer pricing support.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Intelligence</h3>
              <p className="text-gray-600">AI-driven monitoring of tax law changes with automated impact assessment and compliance updates.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Audit Trail & Documentation</h3>
              <p className="text-gray-600">Complete audit trail with automated documentation and evidence collection for tax audits.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tax Reporting</h3>
              <p className="text-gray-600">Customizable dashboards and reports for tax positions, liabilities, and compliance status.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integration Hub</h3>
              <p className="text-gray-600">Seamless integration with ERP, accounting systems, and government tax portals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-maroon text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Tax Operations
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">75%</div>
              <p className="text-lg opacity-90">Reduction in manual effort</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">95%</div>
              <p className="text-lg opacity-90">Filing accuracy rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">60%</div>
              <p className="text-lg opacity-90">Faster compliance cycles</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">100%</div>
              <p className="text-lg opacity-90">Audit trail completeness</p>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <BookDemoForm
              title="Experience Tax Automation Platform"
              subtitle="See how leading finance teams are modernizing tax compliance operations"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default TaxAutomation
