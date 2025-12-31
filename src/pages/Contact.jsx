import BookDemoForm from '../components/BookDemoForm'

function Contact() {
  const offices = [
    {
      region: 'India',
      address: 'Bangalore Technology Park',
      city: 'Bangalore, Karnataka',
      phone: '+91 80 XXXX XXXX',
      email: 'india@baarez.com',
    },
    {
      region: 'Middle East',
      address: 'Dubai Business Bay',
      city: 'Dubai, UAE',
      phone: '+971 4 XXXX XXXX',
      email: 'middleeast@baarez.com',
    },
    {
      region: 'USA',
      address: 'Technology Square',
      city: 'San Francisco, CA',
      phone: '+1 415 XXX XXXX',
      email: 'usa@baarez.com',
    },
    {
      region: 'Singapore',
      address: 'Marina Bay Financial Centre',
      city: 'Singapore',
      phone: '+65 XXXX XXXX',
      email: 'singapore@baarez.com',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Let's discuss how Baarez platforms can transform your enterprise governance, risk, and compliance operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <BookDemoForm
                title="Request a Demo"
                subtitle="Fill out the form and our team will contact you within 24 hours"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How Can We Help?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you're exploring solutions, need technical support, or want to discuss a partnership, our team is here to assist.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-maroon/10 rounded-lg flex items-center justify-center text-brand-maroon flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <a href="mailto:contact@baarez.com" className="text-brand-maroon hover:underline">
                      contact@baarez.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-maroon/10 rounded-lg flex items-center justify-center text-brand-maroon flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600">24/7 Support Available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-maroon/10 rounded-lg flex items-center justify-center text-brand-maroon flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">24/7 Global Support Coverage</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/resources/blogs" className="block text-brand-maroon hover:underline">
                    Visit our Blog
                  </a>
                  <a href="/solutions/grc" className="block text-brand-maroon hover:underline">
                    Explore GRC Platform
                  </a>
                  <a href="/about" className="block text-brand-maroon hover:underline">
                    Learn About Baarez
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-600">
              With teams across four continents, we provide local support with global expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office) => (
              <div key={office.region} className="card p-6">
                <div className="w-12 h-12 bg-brand-maroon/10 rounded-lg flex items-center justify-center text-brand-maroon mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{office.region}</h3>
                <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                <p className="text-gray-600 text-sm mb-4">{office.city}</p>
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <p className="text-sm text-gray-600">{office.phone}</p>
                  <a href={`mailto:${office.email}`} className="text-sm text-brand-maroon hover:underline block">
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Support & Resources
            </h2>
            <p className="text-xl text-gray-600">
              Multiple channels to get the help you need, when you need it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-brand-maroon/10 rounded-full flex items-center justify-center text-brand-maroon mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Technical Support</h3>
              <p className="text-gray-600 mb-6">24/7 technical assistance for platform users</p>
              <a href="mailto:support@baarez.com" className="text-brand-maroon font-semibold hover:underline">
                support@baarez.com
              </a>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-brand-maroon/10 rounded-full flex items-center justify-center text-brand-maroon mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sales Inquiries</h3>
              <p className="text-gray-600 mb-6">Discuss solutions and pricing options</p>
              <a href="mailto:sales@baarez.com" className="text-brand-maroon font-semibold hover:underline">
                sales@baarez.com
              </a>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-brand-maroon/10 rounded-full flex items-center justify-center text-brand-maroon mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Partnerships</h3>
              <p className="text-gray-600 mb-6">Explore partnership opportunities</p>
              <a href="mailto:partners@baarez.com" className="text-brand-maroon font-semibold hover:underline">
                partners@baarez.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
