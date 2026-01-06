import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const solutions = [
    { name: 'AI GRC Platform', path: '/solutions/grc' },
    { name: 'AI TPRM Platform', path: '/solutions/tprm' },
    { name: 'AI Internal Audit', path: '/solutions/internal-audit' },
    { name: 'AI OCR ScanVista', path: '/solutions/scanvista' },
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
    'US',
    'Qatar',
    'Dubai',
    'Singapore'
  ]

  return (
    <footer className="bg-[#1a0505] text-gray-300 border-t border-[#760015]/30 relative overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#760015] via-[#ef7f25] to-[#760015]"></div>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#760015] opacity-5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="section-container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
                {/* Ensure you have a white version or use filter invert */}
                <img
                src="/logo.png"
                alt="Baarez Technology Solutions"
                className="h-20 w-auto"
                />
            </Link>
            <p className="text-sm text-gray-400 mb-4 font-medium tracking-wide uppercase text-[#ef7f25]">
              Making Thinking Visible
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              AI-native enterprise platform for regulated industries. Transforming governance with speed and precision.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-[#760015]/30 pb-2 inline-block">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.path}>
                  <Link
                    to={solution.path}
                    className="text-sm text-gray-400 hover:text-[#ef7f25] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#ef7f25] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-[#760015]/30 pb-2 inline-block">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-sm text-gray-400 hover:text-[#ef7f25] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#ef7f25] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-[#760015]/30 pb-2 inline-block">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-400 hover:text-[#ef7f25] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#ef7f25] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Presence */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-[#760015]/30 pb-2 inline-block">Global Presence</h3>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location} className="text-sm text-gray-400 flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#760015]/20 flex items-center justify-center text-[#ef7f25]">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                  </div>
                  <span>{location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#760015]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} Baarez Technology Solutions. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link to="/privacy" className="text-xs text-gray-500 hover:text-[#ef7f25] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-gray-500 hover:text-[#ef7f25] transition-colors">
                Terms of Service
              </Link>
           
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer