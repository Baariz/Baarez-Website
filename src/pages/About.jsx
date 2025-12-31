import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AnimatedDiv, AnimatedCard, fadeInUp, fadeIn, slideInLeft, slideInRight } from '../components/AnimatedSection'
import { CpuChipIcon, ServerIcon, UsersIcon, GlobeIcon, BriefcaseIcon, LightBulbIcon, ShieldCheckIcon, CogIcon } from '../components/Icons'
import { images } from '../utils/images'

function About() {
  const values = [
    {
      title: 'AI-First Innovation',
      description: 'We build AI-native platforms from the ground up, not legacy systems with AI bolted on.',
      icon: CpuChipIcon,
    },
    {
      title: 'Enterprise Focus',
      description: 'Purpose-built for regulated industries where compliance, security, and scale are non-negotiable.',
      icon: ServerIcon,
    },
    {
      title: 'Customer Success',
      description: 'Your success drives our innovation. We partner with customers for continuous platform evolution.',
      icon: UsersIcon,
    },
    {
      title: 'Global Excellence',
      description: 'World-class teams across India, Middle East, USA, and Singapore delivering 24/7 support.',
      icon: GlobeIcon,
    },
  ]

  const leadership = [
    {
      name: 'Executive Leadership',
      role: 'Visionary leaders with decades of enterprise software experience',
      icon: BriefcaseIcon
    },
    {
      name: 'Product Team',
      role: 'AI/ML experts and domain specialists building next-generation platforms',
      icon: LightBulbIcon
    },
    {
      name: 'Customer Success',
      role: 'Dedicated teams ensuring platform adoption and measurable ROI',
      icon: ShieldCheckIcon
    },
    {
      name: 'Engineering',
      role: 'World-class engineers delivering enterprise-grade, secure, scalable solutions',
      icon: CogIcon
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={images.corporate}
            alt="Corporate"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedDiv animation={fadeInUp}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Making Thinking Visible
              </h1>
            </AnimatedDiv>
            <AnimatedDiv animation={{...fadeInUp, transition: { duration: 0.5, delay: 0.2 }}}>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Baarez Technology Solutions is an AI-native enterprise platform company helping organizations transform governance, risk, compliance, and operational processes.
              </p>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedDiv animation={slideInLeft}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                To empower enterprises with AI-native platforms that transform complex governance, risk, and compliance operations into strategic advantages.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that enterprise GRC and automation should be intelligent, proactive, and seamlessly integrated—not fragmented across point solutions and manual processes.
              </p>
            </AnimatedDiv>
            <AnimatedDiv animation={slideInRight}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                To be the global standard for AI-powered enterprise governance, risk, and compliance platforms.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where every enterprise operates with complete risk visibility, automated compliance, and intelligent decision support—powered by Baarez platforms.
              </p>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedDiv animation={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide how we build products, serve customers, and grow as an organization.
              </p>
            </AnimatedDiv>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <AnimatedCard key={value.title} delay={index * 0.1} className="card p-8 text-center">
                  <div className="w-20 h-20 bg-brand-maroon/10 rounded-full flex items-center justify-center text-brand-maroon mx-auto mb-6">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedDiv animation={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Global Presence
              </h2>
              <p className="text-xl text-gray-600">
                Supporting enterprise customers across four continents with local teams and 24/7 support.
              </p>
            </AnimatedDiv>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['India', 'Middle East', 'USA', 'Singapore'].map((location, index) => (
              <AnimatedCard key={location} delay={index * 0.1} className="card p-8 text-center">
                <div className="w-16 h-16 bg-brand-maroon/10 rounded-full flex items-center justify-center text-brand-maroon mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{location}</h3>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedDiv animation={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                World-Class Team
              </h2>
              <p className="text-xl text-gray-600">
                Experienced professionals passionate about building enterprise platforms that make a difference.
              </p>
            </AnimatedDiv>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((team, index) => {
              const IconComponent = team.icon
              return (
                <AnimatedCard key={team.name} delay={index * 0.15} className="card p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-brand-maroon/10 rounded-lg flex items-center justify-center text-brand-maroon flex-shrink-0">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{team.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{team.role}</p>
                    </div>
                  </div>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-brand-maroon text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={images.dataAnalytics}
            alt="Analytics"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container relative">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Enterprise Customers' },
              { value: '4', label: 'Global Regions' },
              { value: '99.9%', label: 'Platform Uptime' },
              { value: '24/7', label: 'Support Coverage' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold mb-3">{stat.value}</div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedDiv animation={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Join Leading Enterprises
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Discover how Baarez platforms can transform your governance, risk, and compliance operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                    Book a Demo
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/solutions/grc" className="btn-secondary text-lg px-8 py-4">
                    Explore Solutions
                  </Link>
                </motion.div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
