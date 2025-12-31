import BookDemoForm from '../../components/BookDemoForm'

function GRC() {
  const features = [
    {
      title: 'Risk Assessment & Management',
      description: 'AI-powered risk identification, assessment, and mitigation tracking with real-time risk heat maps.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Compliance Management',
      description: 'Centralized compliance framework mapping with automated control testing and evidence collection.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Policy & Document Management',
      description: 'Version-controlled policy repository with workflow automation and stakeholder acknowledgment tracking.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Incident Management',
      description: 'End-to-end incident tracking from identification through remediation with automated escalation workflows.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      title: 'Audit & Reporting',
      description: 'Comprehensive audit trails and customizable dashboards with executive-ready reporting capabilities.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Regulatory Intelligence',
      description: 'Stay current with evolving regulations through AI-driven regulatory change monitoring and impact analysis.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ]

  const outcomes = [
    { metric: '60%', description: 'Reduction in compliance workload' },
    { metric: '85%', description: 'Faster risk identification' },
    { metric: '99.5%', description: 'Audit success rate' },
    { metric: '70%', description: 'Cost savings on compliance' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Enterprise GRC Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Unified Governance, Risk & Compliance Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform enterprise risk and compliance management with AI-powered automation, real-time visibility, and intelligent decision support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#demo" className="btn-primary bg-white text-brand-maroon hover:bg-gray-100">
                Request a Demo
              </a>
              <a href="#features" className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              The Enterprise GRC Challenge
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fragmented Systems</h3>
                <p className="text-gray-600">
                  Risk, compliance, and governance data scattered across multiple tools, creating visibility gaps and inefficiencies.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Processes</h3>
                <p className="text-gray-600">
                  Time-consuming manual workflows for control testing, evidence collection, and compliance reporting.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Complexity</h3>
                <p className="text-gray-600">
                  Difficulty tracking evolving regulations and maintaining compliance across multiple frameworks simultaneously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive GRC Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              A complete platform for managing governance, risk, and compliance across your entire organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8">
                <div className="w-12 h-12 bg-brand-maroon/10 rounded-lg flex items-center justify-center text-brand-maroon mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Real-Time Risk Visibility
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Gain complete visibility into your organization's risk posture with interactive dashboards, heat maps, and predictive analytics.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Automated risk scoring with AI-driven severity assessment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dynamic risk heat maps with drill-down capabilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Predictive trend analysis and early warning indicators</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-maroon to-brand-maroon-dark rounded-2xl p-8 flex items-center justify-center text-white aspect-video">
              <div className="text-center">
                <div className="text-6xl mb-4">📈</div>
                <p className="text-xl font-semibold">Interactive Risk Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-20 bg-brand-maroon text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Measurable Business Impact
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Organizations using Baarez GRC Platform achieve significant improvements in efficiency, compliance, and risk management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-3">{outcome.metric}</div>
                <p className="text-lg opacity-90">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section id="demo" className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <BookDemoForm
              title="Experience Baarez GRC Platform"
              subtitle="See how leading enterprises are transforming their governance, risk, and compliance operations"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default GRC
