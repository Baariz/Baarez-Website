import BookDemoForm from '../../components/BookDemoForm'

function RobotAsAService() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Enterprise RPA Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Robot as a Service (RaaS)
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Enterprise-grade robotic process automation delivered as a managed service with rapid deployment, scalability, and intelligent process orchestration.
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
              The Process Automation Challenge
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-3">High Implementation Cost</h3>
                <p className="text-gray-600">Traditional RPA requires significant upfront investment in licensing, infrastructure, and expertise.</p>
              </div>
              <div>
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3">Slow Time-to-Value</h3>
                <p className="text-gray-600">Lengthy implementation cycles delay realization of automation benefits and ROI.</p>
              </div>
              <div>
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-3">Maintenance Burden</h3>
                <p className="text-gray-600">Ongoing bot maintenance and updates consume internal resources and technical capacity.</p>
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
                <div className="text-6xl mb-4">🤖</div>
                <p className="text-xl font-semibold">Intelligent Process Automation</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                RPA Without the Complexity
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Fully managed RPA service with zero infrastructure overhead, rapid bot deployment, and enterprise-grade governance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Subscription-based pricing with pay-as-you-go scalability</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Pre-built automation templates for common enterprise processes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Managed bot maintenance, monitoring, and optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI-powered process discovery and optimization recommendations</span>
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
              Comprehensive RaaS Capabilities
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Discovery</h3>
              <p className="text-gray-600">AI-driven identification of automation opportunities with ROI analysis and prioritization.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bot Development</h3>
              <p className="text-gray-600">Rapid bot creation using pre-built templates, low-code builders, and custom development.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Orchestration</h3>
              <p className="text-gray-600">Centralized bot orchestration with intelligent workload distribution and scheduling.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monitoring & Analytics</h3>
              <p className="text-gray-600">Real-time bot performance monitoring with detailed analytics and ROI tracking.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Exception Handling</h3>
              <p className="text-gray-600">Intelligent error handling with human-in-the-loop workflows and automated recovery.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Governance & Compliance</h3>
              <p className="text-gray-600">Enterprise governance framework with audit trails, access controls, and compliance reporting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-maroon text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Automation ROI
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">80%</div>
              <p className="text-lg opacity-90">Reduction in processing time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">70%</div>
              <p className="text-lg opacity-90">Lower operational costs</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">2 weeks</div>
              <p className="text-lg opacity-90">Average deployment time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3">99.5%</div>
              <p className="text-lg opacity-90">Bot accuracy rate</p>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <BookDemoForm
              title="Experience Robot as a Service"
              subtitle="Discover how enterprises are achieving automation at scale with managed RPA"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default RobotAsAService
