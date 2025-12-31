import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solutions = [
    { name: 'GRC Platform', path: '/solutions/grc' },
    { name: 'TPRM Platform', path: '/solutions/tprm' },
    { name: 'Internal Audit Platform', path: '/solutions/internal-audit' },
    { name: 'ScanVista', path: '/solutions/scanvista' },
    { name: 'Tax Automation', path: '/solutions/tax-automation' },
    { name: 'Robot as a Service', path: '/solutions/robot-as-a-service' },
    { name: 'Dynamics 365', path: '/solutions/dynamics-365' },
  ]

  const services = [
    { name: 'Business Process Consulting', path: '/services/business-process-consulting' },
    { name: 'Digital Transformation', path: '/services/digital-transformation' },
    { name: 'Data Analytics & AI', path: '/services/data-analytics-ai' },
    { name: 'ERP Consulting', path: '/services/erp-consulting' },
    { name: 'Cybersecurity & SOC', path: '/services/cybersecurity-soc' },
    { name: 'Cloud & Automation', path: '/services/cloud-automation' },
  ]

  const resources = [
    { name: 'Blogs', path: '/resources/blogs' },
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Baarez Technology Solutions"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('solutions')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-gray-700 hover:text-brand-maroon font-medium transition-colors flex items-center space-x-1">
                <span>Solutions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.path}
                      to={solution.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-maroon transition-colors"
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-gray-700 hover:text-brand-maroon font-medium transition-colors flex items-center space-x-1">
                <span>Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-maroon transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('resources')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-gray-700 hover:text-brand-maroon font-medium transition-colors flex items-center space-x-1">
                <span>Resources</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                  {resources.map((resource) => (
                    <Link
                      key={resource.path}
                      to={resource.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-maroon transition-colors"
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-700 hover:text-brand-maroon font-medium transition-colors ${
                  isActive ? 'text-brand-maroon' : ''
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-700 hover:text-brand-maroon font-medium transition-colors ${
                  isActive ? 'text-brand-maroon' : ''
                }`
              }
            >
              Contact
            </NavLink>

            <Link to="/contact" className="btn-primary">
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-gray-900 mb-2">Solutions</div>
                {solutions.map((solution) => (
                  <Link
                    key={solution.path}
                    to={solution.path}
                    className="block py-2 pl-4 text-gray-600 hover:text-brand-maroon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {solution.name}
                  </Link>
                ))}
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block py-2 pl-4 text-gray-600 hover:text-brand-maroon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-2">Resources</div>
                {resources.map((resource) => (
                  <Link
                    key={resource.path}
                    to={resource.path}
                    className="block py-2 pl-4 text-gray-600 hover:text-brand-maroon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {resource.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/about"
                className="block py-2 text-gray-700 hover:text-brand-maroon font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-gray-700 hover:text-brand-maroon font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/contact" className="btn-primary w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
