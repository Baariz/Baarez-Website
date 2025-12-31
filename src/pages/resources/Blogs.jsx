import { Link } from 'react-router-dom'

// Sample blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    slug: 'future-of-grc-ai-automation',
    title: 'The Future of GRC: How AI and Automation are Transforming Governance',
    excerpt: 'Explore how artificial intelligence and intelligent automation are reshaping enterprise governance, risk, and compliance operations for Fortune 500 companies.',
    category: 'GRC',
    author: 'Rajesh Kumar',
    date: 'December 15, 2024',
    readTime: '8 min read',
    image: '📊',
  },
  {
    slug: 'third-party-risk-management-2025',
    title: 'Third-Party Risk Management in 2025: Key Trends and Best Practices',
    excerpt: 'As supply chain risks evolve, organizations must adopt modern TPRM platforms with continuous monitoring and predictive intelligence capabilities.',
    category: 'TPRM',
    author: 'Sarah Mitchell',
    date: 'December 10, 2024',
    readTime: '6 min read',
    image: '🔍',
  },
  {
    slug: 'internal-audit-digital-transformation',
    title: 'Modernizing Internal Audit: A Digital Transformation Roadmap',
    excerpt: 'Learn how leading audit departments are leveraging technology to increase efficiency, improve risk coverage, and deliver greater value to stakeholders.',
    category: 'Internal Audit',
    author: 'Michael Chen',
    date: 'December 5, 2024',
    readTime: '7 min read',
    image: '📋',
  },
  {
    slug: 'rpa-enterprise-scale',
    title: 'Scaling RPA Across the Enterprise: Lessons from 500+ Deployments',
    excerpt: 'Insights from real-world RaaS implementations on building governance frameworks, managing bot portfolios, and achieving sustainable automation ROI.',
    category: 'Automation',
    author: 'David Park',
    date: 'November 28, 2024',
    readTime: '10 min read',
    image: '🤖',
  },
  {
    slug: 'cybersecurity-compliance-integration',
    title: 'Integrating Cybersecurity and Compliance: A Unified Approach',
    excerpt: 'Break down silos between security and compliance teams with integrated platforms that streamline vulnerability management and regulatory adherence.',
    category: 'Security',
    author: 'Jennifer Lee',
    date: 'November 20, 2024',
    readTime: '9 min read',
    image: '🛡️',
  },
  {
    slug: 'tax-automation-regulatory-challenges',
    title: 'Navigating Tax Automation in a Complex Regulatory Environment',
    excerpt: 'How enterprises are using intelligent automation to manage multi-jurisdictional tax compliance while maintaining accuracy and audit readiness.',
    category: 'Tax & Compliance',
    author: 'Priya Sharma',
    date: 'November 15, 2024',
    readTime: '8 min read',
    image: '💼',
  },
]

const categories = ['All', 'GRC', 'TPRM', 'Internal Audit', 'Automation', 'Security', 'Tax & Compliance']

function Blogs() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Blog & Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Expert perspectives on enterprise governance, risk, compliance, and intelligent automation from Baarez thought leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="section-container">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  category === 'All'
                    ? 'bg-brand-maroon text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Article</h2>
          </div>
          <Link
            to={`/resources/blogs/${blogPosts[0].slug}`}
            className="card overflow-hidden grid lg:grid-cols-2 gap-0 group"
          >
            <div className="bg-gradient-to-br from-brand-maroon to-brand-maroon-dark p-16 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-8xl mb-4">{blogPosts[0].image}</div>
                <div className="text-sm font-semibold opacity-90">{blogPosts[0].category}</div>
              </div>
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span>{blogPosts[0].date}</span>
                <span>•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-maroon transition-colors">
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">By {blogPosts[0].author}</span>
                </div>
                <div className="flex items-center text-brand-maroon font-semibold group-hover:gap-2 transition-all">
                  <span>Read Article</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recent Articles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                to={`/resources/blogs/${post.slug}`}
                className="card overflow-hidden group"
              >
                <div className="bg-gradient-to-br from-brand-maroon to-brand-maroon-dark p-12 flex items-center justify-center text-white">
                  <div className="text-6xl">{post.image}</div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-brand-maroon/10 text-brand-maroon rounded-full text-sm font-semibold mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-maroon transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-brand-maroon text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Never Miss an Insight
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to receive the latest articles, platform updates, and industry analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-brand-maroon hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs
