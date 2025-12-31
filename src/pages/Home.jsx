import { Link } from 'react-router-dom'
import { BriefcaseIcon, ShieldCheckIcon, LockClosedIcon, LightningBoltIcon, CogIcon, ServerIcon } from '../components/Icons'
import { images } from '../utils/images'

function Home() {
  const solutions = [
    {
      title: 'GRC Platform',
      description: 'AI-powered governance, risk, and compliance management for enterprise-wide visibility and control.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      path: '/solutions/grc',
    },
    {
      title: 'TPRM Platform',
      description: 'Intelligent third-party risk management with continuous monitoring and automated assessments.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      path: '/solutions/tprm',
    },
    {
      title: 'Internal Audit',
      description: 'Modern audit management platform with AI-driven insights and end-to-end workflow automation.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      path: '/solutions/internal-audit',
    },
    {
      title: 'ScanVista',
      description: 'Advanced vulnerability scanning and security assessment platform for proactive threat detection.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      path: '/solutions/scanvista',
    },
    {
      title: 'Tax Automation',
      description: 'Streamline tax compliance and reporting with intelligent automation and regulatory intelligence.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      path: '/solutions/tax-automation',
    },
    {
      title: 'Robot as a Service',
      description: 'Enterprise RPA platform delivering intelligent automation at scale with minimal deployment time.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      path: '/solutions/robot-as-a-service',
    },
    {
      title: 'Dynamics 365',
      description: 'Enterprise-grade Microsoft Dynamics 365 implementation and customization for digital transformation.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      path: '/solutions/dynamics-365',
    },
  ]

  const industries = [
    { name: 'Banking & Financial Services', icon: BriefcaseIcon },
    { name: 'Healthcare & Life Sciences', icon: ShieldCheckIcon },
    { name: 'Insurance', icon: LockClosedIcon },
    { name: 'Energy & Utilities', icon: LightningBoltIcon },
    { name: 'Manufacturing', icon: CogIcon },
    { name: 'Government & Public Sector', icon: ServerIcon },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #760015 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-brand-maroon/10 text-brand-maroon px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-brand-maroon rounded-full animate-pulse"></span>
              <span>AI-Native Enterprise Platform</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Making Thinking <span className="text-brand-maroon">Visible</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Transform enterprise operations with AI-powered platforms for governance, risk, compliance, and intelligent automation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Book a Demo
              </Link>
              <Link to="/solutions/grc" className="btn-secondary text-lg px-8 py-4">
                Explore Solutions
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-maroon mb-2">500+</div>
                <div className="text-sm text-gray-600">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-maroon mb-2">4</div>
                <div className="text-sm text-gray-600">Global Regions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-maroon mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Platform Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-maroon mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise Platforms Built for Scale
            </h2>
            <p className="text-xl text-gray-600">
              AI-native solutions designed for regulated industries requiring compliance, security, and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.path}
                to={solution.path}
                className="card p-8 group hover:border-brand-maroon border-2 border-transparent transition-all"
              >
                <div className="w-16 h-16 bg-brand-maroon/10 rounded-xl flex items-center justify-center text-brand-maroon mb-6 group-hover:bg-brand-maroon group-hover:text-white transition-all">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-maroon transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <div className="flex items-center text-brand-maroon font-semibold group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Baarez */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Leading Enterprises Choose Baarez
              </h2>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-maroon rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Native Architecture</h3>
                    <p className="text-gray-600">
                      Built from the ground up with artificial intelligence at the core, enabling predictive insights and intelligent automation.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-maroon rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise-Grade Security</h3>
                    <p className="text-gray-600">
                      SOC 2 Type II certified with enterprise-grade encryption, role-based access control, and comprehensive audit trails.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-maroon rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable & Flexible</h3>
                    <p className="text-gray-600">
                      Cloud-native platforms that scale with your organization, from mid-market to Fortune 500 enterprises.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-maroon rounded-lg flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Regulatory Intelligence</h3>
                    <p className="text-gray-600">
                      Stay ahead of compliance requirements with built-in regulatory frameworks and continuous updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-maroon to-brand-maroon-dark rounded-2xl overflow-hidden">
                <img
                  src={images.compliance}
                  alt="Enterprise Compliance"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShieldCheckIcon className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Built for Regulated Industries</h3>
                    <p className="text-lg opacity-90">
                      Compliance-first platforms designed for banking, healthcare, insurance, and other highly regulated sectors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Regulated Industries
            </h2>
            <p className="text-xl text-gray-600">
              Purpose-built for organizations where compliance, security, and risk management are mission-critical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const IconComponent = industry.icon
              return (
                <div
                  key={industry.name}
                  className="card p-8 text-center hover:shadow-2xl transition-all"
                >
                  <div className="w-16 h-16 bg-brand-maroon/10 rounded-full flex items-center justify-center text-brand-maroon mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-maroon to-brand-maroon-dark text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Join hundreds of leading organizations leveraging Baarez platforms for governance, risk, and compliance excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="bg-white text-brand-maroon hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all text-lg inline-flex items-center justify-center">
                Book a Demo
              </Link>
              <Link to="/about" className="border-2 border-white text-white hover:bg-white hover:text-brand-maroon font-semibold px-8 py-4 rounded-lg transition-all text-lg inline-flex items-center justify-center">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
