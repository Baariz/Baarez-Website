import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const solutions = [
    { name: 'GRC Platform', path: '/solutions/grc' },
    { name: 'TPRM Platform', path: '/solutions/tprm' },
    { name: 'Internal Audit', path: '/solutions/internal-audit' },
    { name: 'ScanVista', path: '/solutions/scanvista' },
  ]

  const services = [
    { name: 'Business Process Consulting', path: '/services/business-process-consulting' },
    { name: 'Digital Transformation', path: '/services/digital-transformation' },
    { name: 'Data Analytics & AI', path: '/services/data-analytics-ai' },
    { name: 'ERP Consulting', path: '/services/erp-consulting' },
  ]

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blogs', path: '/resources/blogs' },
  ]

  const locations = [
    'India',
    'Middle East',
    'USA',
    'Singapore',
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <img
              src="/logo.png"
              alt="Baarez Technology Solutions"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 mb-4">
              Making Thinking Visible
            </p>
            <p className="text-sm text-gray-400">
              AI-native enterprise platform for regulated industries.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.path}>
                  <Link
                    to={solution.path}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Presence */}
          <div>
            <h3 className="text-white font-semibold mb-4">Global Presence</h3>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location} className="text-sm flex items-center space-x-2">
                  <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Baarez Technology Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/security" className="text-sm text-gray-400 hover:text-white transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
