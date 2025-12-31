import BookDemoForm from '../../components/BookDemoForm'

function InternalAudit() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Internal Audit Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Modern Internal Audit Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your audit function with AI-driven risk-based planning, automated workflows, and real-time collaboration capabilities.
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
                End-to-End Audit Lifecycle Management
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                From annual planning through execution and reporting, manage your entire audit process in one integrated platform.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI-powered risk-based audit universe and annual planning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Automated workpaper management and evidence collection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time collaboration with auditees and stakeholders</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Integrated finding tracking and remediation management</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-maroon to-brand-maroon-dark rounded-2xl p-8 flex items-center justify-center text-white aspect-video">
              <div className="text-center">
                <div className="text-6xl mb-4">📋</div>
                <p className="text-xl font-semibold">Audit Workflow Automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Platform Capabilities
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk-Based Planning</h3>
              <p className="text-gray-600">AI-driven audit universe creation and dynamic risk assessment for optimal resource allocation.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Workflow Automation</h3>
              <p className="text-gray-600">Automated fieldwork execution with intelligent task assignment and deadline management.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Issue Management</h3>
              <p className="text-gray-600">Comprehensive tracking of audit findings from identification through closure and validation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-maroon text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Audit Function
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Leading audit departments achieve measurable efficiency gains with Baarez Internal Audit Platform.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">50%</div>
              <p className="text-lg opacity-90">Faster audit completion</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">80%</div>
              <p className="text-lg opacity-90">Reduction in manual work</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">100%</div>
              <p className="text-lg opacity-90">Audit trail visibility</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">65%</div>
              <p className="text-lg opacity-90">Better stakeholder satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <BookDemoForm
              title="Experience Baarez Internal Audit Platform"
              subtitle="See how modern audit teams are transforming their operations with intelligent automation"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default InternalAudit
