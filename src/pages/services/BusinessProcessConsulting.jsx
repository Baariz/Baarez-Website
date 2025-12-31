import { Link } from 'react-router-dom'

function BusinessProcessConsulting() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Advisory Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Business Process Consulting
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform operational efficiency through strategic process optimization, enabling your GRC and automation platforms to deliver maximum business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary bg-white text-brand-maroon hover:bg-gray-100">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Process Excellence as a Foundation
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Before implementing technology, we optimize your processes. Our consultants work alongside your teams to redesign workflows that maximize the value of Baarez platforms.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Process mapping and gap analysis for GRC operations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Risk and compliance workflow optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Operating model design for governance functions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Change management and stakeholder alignment</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-maroon to-brand-maroon-dark rounded-2xl p-8 flex items-center justify-center text-white aspect-video">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-xl font-semibold">Process Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We Enable Platform Success
            </h2>
            <p className="text-xl text-gray-600">
              Our consulting services ensure your organization is ready to leverage Baarez platforms effectively.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Assessment</h3>
              <p className="text-gray-600 mb-4">Comprehensive analysis of current-state processes, identifying inefficiencies and automation opportunities.</p>
              <p className="text-sm text-brand-maroon font-semibold">Enables: GRC Platform, TPRM, Internal Audit</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Workflow Redesign</h3>
              <p className="text-gray-600 mb-4">Future-state process design optimized for automation and platform capabilities.</p>
              <p className="text-sm text-brand-maroon font-semibold">Enables: RaaS, Tax Automation</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Governance Framework</h3>
              <p className="text-gray-600 mb-4">Design and implementation of governance structures for risk, compliance, and audit functions.</p>
              <p className="text-sm text-brand-maroon font-semibold">Enables: GRC Platform, TPRM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Typical Engagement Outcomes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-brand-maroon pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Process Efficiency</h3>
                <p className="text-gray-600">40-60% reduction in manual effort through optimized workflows and automation readiness.</p>
              </div>
              <div className="border-l-4 border-brand-maroon pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Platform Adoption</h3>
                <p className="text-gray-600">Faster platform deployment with pre-optimized processes and stakeholder buy-in.</p>
              </div>
              <div className="border-l-4 border-brand-maroon pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Risk Visibility</h3>
                <p className="text-gray-600">Enhanced risk identification and management through structured governance frameworks.</p>
              </div>
              <div className="border-l-4 border-brand-maroon pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Compliance Readiness</h3>
                <p className="text-gray-600">Streamlined compliance processes aligned with regulatory requirements and best practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-maroon text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Optimize Your Processes?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Let's discuss how business process consulting can prepare your organization for successful platform implementation.
          </p>
          <Link to="/contact" className="bg-white text-brand-maroon hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all text-lg inline-flex items-center justify-center">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BusinessProcessConsulting
