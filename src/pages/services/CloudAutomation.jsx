import { Link } from 'react-router-dom'

function CloudAutomation() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Cloud & Automation Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Cloud infrastructure and automation services that provide the foundation for Baarez platforms, ensuring scalability, security, and operational excellence.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-brand-maroon hover:bg-gray-100">
              Modernize Your Infrastructure
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-brand-maroon to-brand-maroon-dark rounded-2xl p-8 flex items-center justify-center text-white aspect-video">
              <div className="text-center">
                <div className="text-6xl mb-4">☁️</div>
                <p className="text-xl font-semibold">Cloud-Native Infrastructure</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Cloud Foundation for Platform Success
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We design and manage cloud infrastructure optimized for Baarez platform performance, security, and compliance requirements.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Azure, AWS, and multi-cloud infrastructure design</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Infrastructure as Code (IaC) and automation frameworks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">CI/CD pipeline design and DevOps enablement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-maroon flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Cloud security and compliance architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cloud & Automation Capabilities
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Migration</h3>
              <p className="text-gray-600">Seamless migration of legacy systems and Baarez platform deployment to cloud infrastructure.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Automation</h3>
              <p className="text-gray-600">Terraform, ARM templates, and CloudFormation for automated infrastructure provisioning.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Container Orchestration</h3>
              <p className="text-gray-600">Kubernetes and container services for scalable platform deployment and management.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Cost Optimization</h3>
              <p className="text-gray-600">FinOps practices and automation for cloud cost management and optimization.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Managed Services</h3>
              <p className="text-gray-600">24/7 monitoring, maintenance, and support for cloud infrastructure and platforms.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Disaster Recovery</h3>
              <p className="text-gray-600">High availability and disaster recovery solutions for business continuity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Platform-Optimized Cloud Services
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our cloud services are specifically designed to support Baarez platforms with the infrastructure, automation, and security they require.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">GRC & TPRM</h4>
                <p className="text-sm text-gray-600">Secure, compliant cloud infrastructure with audit trails and access controls</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">RaaS Platform</h4>
                <p className="text-sm text-gray-600">Scalable compute resources for bot orchestration and automation workloads</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Dynamics 365</h4>
                <p className="text-sm text-gray-600">Azure-native infrastructure optimized for Microsoft ecosystem integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-maroon text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build on Solid Cloud Foundation
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Enable platform success with enterprise-grade cloud infrastructure and automation.
          </p>
          <Link to="/solutions/robot-as-a-service" className="bg-white text-brand-maroon hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all text-lg inline-flex items-center justify-center mr-4">
            Explore RaaS
          </Link>
          <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-brand-maroon font-semibold px-8 py-4 rounded-lg transition-all text-lg inline-flex items-center justify-center">
            Discuss Your Needs
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CloudAutomation
