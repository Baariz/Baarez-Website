import BookDemoForm from '../../components/BookDemoForm'

function TPRM() {
  const features = [
    {
      title: 'Vendor Onboarding & Assessment',
      description: 'Streamlined vendor due diligence with automated risk assessments and intelligent questionnaire distribution.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
    },
    {
      title: 'Continuous Monitoring',
      description: 'Real-time vendor risk monitoring with automated alerts for security incidents, financial changes, and regulatory issues.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Risk Scoring & Analytics',
      description: 'AI-powered vendor risk scoring with predictive analytics and customizable risk rating frameworks.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Contract & SLA Management',
      description: 'Centralized contract repository with automated renewal tracking and SLA performance monitoring.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Fourth-Party Risk Management',
      description: 'Extended visibility into your vendors\' third-party relationships and downstream risk exposure.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: 'Compliance Documentation',
      description: 'Automated evidence collection and compliance documentation for SOC 2, ISO 27001, and other frameworks.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ]

  const outcomes = [
    { metric: '75%', description: 'Faster vendor onboarding' },
    { metric: '90%', description: 'Reduction in manual assessments' },
    { metric: '100%', description: 'Vendor portfolio visibility' },
    { metric: '50%', description: 'Lower third-party risk exposure' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Third-Party Risk Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Intelligent Third-Party Risk Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Gain complete visibility and control over your vendor ecosystem with continuous monitoring, automated assessments, and predictive risk intelligence.
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
              The Third-Party Risk Challenge
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Limited Visibility</h3>
                <p className="text-gray-600">
                  Organizations struggle to maintain visibility into vendor security posture and compliance status across hundreds of relationships.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Assessments</h3>
                <p className="text-gray-600">
                  Time-intensive questionnaire distribution, review processes, and risk evaluations consuming valuable security team resources.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚠️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reactive Response</h3>
                <p className="text-gray-600">
                  Learning about vendor security incidents or financial distress after the damage is done, rather than proactively managing risk.
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
              Complete TPRM Lifecycle Management
            </h2>
            <p className="text-xl text-gray-600">
              From vendor onboarding through continuous monitoring and offboarding, manage the entire third-party lifecycle.
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
            <div className="bg-gradient-to-br from-brand-maroon to-brand-maroon-dark rounded-2xl p-8 flex items-center justify-center text-white aspect-video">
              <div className="text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <p className="text-xl font-semibold">Vendor Risk Dashboard</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Continuous Vendor Monitoring
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Automated monitoring of vendor security posture, financial health, and compliance status with real-time alerts.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time security incident detection and notification</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Financial stability monitoring and bankruptcy prediction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Compliance certification tracking and expiration alerts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-20 bg-brand-maroon text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Results for Enterprises
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Organizations leveraging Baarez TPRM Platform achieve measurable improvements in vendor risk management efficiency.
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
              title="Experience Baarez TPRM Platform"
              subtitle="Discover how to transform your third-party risk management with intelligent automation"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default TPRM
