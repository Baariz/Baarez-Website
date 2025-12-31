import { Link, useParams } from 'react-router-dom'

function BlogPost() {
  const { slug } = useParams()

  // Sample blog content - in a real app, this would be fetched based on slug
  const post = {
    title: 'The Future of GRC: How AI and Automation are Transforming Governance',
    author: 'Rajesh Kumar',
    role: 'Chief Product Officer, Baarez',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'GRC',
    image: '📊',
    content: `
      <p class="lead">Enterprise governance, risk, and compliance (GRC) operations are undergoing a fundamental transformation. As regulatory complexity increases and business ecosystems expand, traditional manual approaches to GRC management are no longer sustainable.</p>

      <h2>The Challenge: GRC at Scale</h2>
      <p>Modern enterprises face an unprecedented GRC challenge. Organizations must manage compliance across multiple regulatory frameworks simultaneously—SOX, GDPR, HIPAA, PCI-DSS, and industry-specific regulations—while maintaining visibility into thousands of risks, controls, and third-party relationships.</p>

      <p>Traditional GRC approaches rely heavily on spreadsheets, manual workflows, and point solutions that create data silos and inefficiencies. Risk officers spend 60-70% of their time on manual data collection and consolidation rather than strategic risk analysis and decision-making.</p>

      <h2>The AI-Native GRC Platform Advantage</h2>
      <p>AI-native GRC platforms represent a paradigm shift from reactive compliance management to proactive risk intelligence. These platforms leverage machine learning, natural language processing, and predictive analytics to transform GRC operations:</p>

      <h3>Automated Risk Identification</h3>
      <p>Machine learning algorithms continuously analyze transaction data, employee behaviors, and external threat intelligence to identify emerging risks before they materialize. Natural language processing scans internal communications, contracts, and documents to detect potential compliance issues and policy violations.</p>

      <h3>Intelligent Control Testing</h3>
      <p>Rather than manual, point-in-time control testing, AI-powered platforms enable continuous control monitoring. Automated testing frameworks execute thousands of control tests daily, identifying control gaps and weaknesses in real-time. This shift from periodic to continuous assurance fundamentally changes the risk profile.</p>

      <h3>Predictive Compliance Intelligence</h3>
      <p>AI systems monitor global regulatory developments and automatically assess the impact of regulatory changes on your organization. Predictive models forecast compliance risks based on historical patterns, business changes, and industry trends, enabling proactive remediation.</p>

      <h2>Real-World Impact: Measurable Outcomes</h2>
      <p>Organizations implementing AI-native GRC platforms are achieving transformative results:</p>

      <ul>
        <li><strong>60% reduction</strong> in compliance workload through automation of manual processes</li>
        <li><strong>85% faster</strong> risk identification with continuous monitoring and predictive analytics</li>
        <li><strong>99.5% audit success rate</strong> with comprehensive evidence collection and audit trails</li>
        <li><strong>70% cost savings</strong> on compliance operations over three years</li>
      </ul>

      <h2>The Path Forward</h2>
      <p>The future of GRC is not about replacing human judgment with AI—it's about augmenting human expertise with intelligent automation. Risk and compliance professionals can focus on strategic decision-making, stakeholder engagement, and complex risk scenarios while AI handles routine tasks, data analysis, and continuous monitoring.</p>

      <p>Organizations that embrace AI-native GRC platforms gain competitive advantages: faster response to regulatory changes, better risk-adjusted decision making, and the ability to scale compliance operations without proportional cost increases.</p>

      <h2>Getting Started with AI-Powered GRC</h2>
      <p>Transforming GRC operations requires more than technology implementation—it demands process redesign, change management, and stakeholder alignment. Successful organizations follow a phased approach:</p>

      <ol>
        <li><strong>Assessment:</strong> Evaluate current-state processes and identify high-impact automation opportunities</li>
        <li><strong>Foundation:</strong> Implement core GRC platform capabilities for policy, risk, and compliance management</li>
        <li><strong>Automation:</strong> Deploy AI-powered capabilities for continuous monitoring and intelligent workflows</li>
        <li><strong>Optimization:</strong> Leverage predictive analytics and advanced automation for proactive risk management</li>
      </ol>

      <p>The transition to AI-native GRC is not a question of if, but when. Organizations that move early will build sustainable competitive advantages in risk management, operational efficiency, and regulatory compliance.</p>
    `,
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/resources/blogs"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blogs
            </Link>
            <div className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-white">{post.author}</div>
                  <div className="text-sm">{post.role}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-8xl text-center my-12">{post.image}</div>
              <div dangerouslySetInnerHTML={{ __html: post.content }} className="article-content" />
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="card p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your GRC Operations?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover how Baarez AI-native platforms can revolutionize your governance, risk, and compliance management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/solutions/grc" className="btn-primary">
                  Explore GRC Platform
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Third-Party Risk Management in 2025', category: 'TPRM', slug: 'third-party-risk-management-2025' },
              { title: 'Modernizing Internal Audit', category: 'Internal Audit', slug: 'internal-audit-digital-transformation' },
              { title: 'Scaling RPA Across the Enterprise', category: 'Automation', slug: 'rpa-enterprise-scale' },
            ].map((article) => (
              <Link
                key={article.slug}
                to={`/resources/blogs/${article.slug}`}
                className="card p-6 group hover:shadow-xl transition-shadow"
              >
                <div className="text-sm font-semibold text-brand-maroon mb-2">{article.category}</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-maroon transition-colors">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .article-content {
          color: #374151;
          line-height: 1.8;
        }
        .article-content .lead {
          font-size: 1.25rem;
          color: #4B5563;
          margin-bottom: 2rem;
          line-height: 1.75;
        }
        .article-content h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #111827;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
        }
        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .article-content p {
          margin-bottom: 1.5rem;
        }
        .article-content ul, .article-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .article-content li {
          margin-bottom: 0.5rem;
        }
        .article-content strong {
          color: #760015;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}

export default BlogPost
