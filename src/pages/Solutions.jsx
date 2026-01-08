import React from 'react';
import { Link } from 'react-router-dom';

/* =========================================
   1. Internal Icon System 
   ========================================= */
const Icons = {
  Shield: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Users: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  DocSearch: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Scan: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  Chart: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Robot: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Cloud: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  ArrowRight: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  Layers: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  Server: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  Check: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Sparkles: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
};

/* =========================================
   2. Data Configuration
   ========================================= */
const solutionCategories = [
  {
    title: "Core Risk & Compliance",
    description: "Foundational platforms for governance, third-party oversight, and audit readiness.",
    items: [
      {
        id: 'grc',
        name: 'GRC Platform',
        desc: 'Unified governance, risk management, and compliance automation.',
        path: '/solutions/grc',
        icon: Icons.Shield
      },
      {
        id: 'tprm',
        name: 'TPRM Platform',
        desc: 'End-to-end third-party risk management and vendor due diligence.',
        path: '/solutions/tprm',
        icon: Icons.Users
      },
      {
        id: 'audit',
        name: 'Internal Audit Platform',
        desc: 'Streamline audit workflows, workpapers, and reporting cycles.',
        path: '/solutions/internal-audit',
        icon: Icons.DocSearch
      }
    ]
  },
  {
    title: "Intelligence & Automation",
    description: "AI-driven tools to digitize documentation and automate complex calculations.",
    items: [
      {
        id: 'scanvista',
        name: 'ScanVista',
        desc: 'Intelligent OCR for document digitisation and data extraction.',
        path: '/solutions/scanvista',
        icon: Icons.Scan
      },
      {
        id: 'tax',
        name: 'Tax Automation',
        desc: 'Automated tax compliance engine for regulatory reporting.',
        path: '/solutions/tax-automation',
        icon: Icons.Chart
      },
      {
        id: 'glimmora',
        name: 'Glimmora',
        desc: 'AGI-native hospitality intelligence for predictive operations and revenue.',
        path: '/solutions/glimmora',
        icon: Icons.Sparkles
      }
    ]
  },
  {
    title: "Enterprise Enablement",
    description: "Scalable technology solutions to power your daily operations.",
    items: [
      {
        id: 'raas',
        name: 'Robot as a Service',
        desc: 'Deploy software robots to handle repetitive, high-volume tasks.',
        path: '/solutions/robot-as-a-service',
        icon: Icons.Robot
      },
      {
        id: 'dynamics',
        name: 'Dynamics 365',
        desc: 'Comprehensive ERP and CRM implementation and support.',
        path: '/solutions/dynamics-365',
        icon: Icons.Cloud
      }
    ]
  }
];

// Helper to determine link text
const getCtaText = (id) => {
    const platformIds = ['grc', 'tprm', 'audit', 'scanvista', 'glimmora'];
    return platformIds.includes(id) ? 'Explore Platform' : 'Explore Solution';
};

/* =========================================
   3. Reusable Components
   ========================================= */

const SolutionCard = ({ item }) => {
  return (
    <Link 
      to={item.path}
      className="group relative flex flex-col h-full bg-white pl-8 pr-6 py-8 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-transparent hover:border-[#760015]"
    >
      {/* Icon - Clean and Minimal */}
      <div className="w-12 h-12 flex items-center justify-start text-[#760015] mb-5">
          <item.icon className="w-8 h-8" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#760015] transition-colors">
          {item.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
          {item.desc}
        </p>
      </div>

      {/* CTA Link - Dynamic Text */}
      <div className="flex items-center text-sm font-bold text-[#ef7f25] mt-auto uppercase tracking-wide">
        <span className="mr-2 border-b border-transparent group-hover:border-[#ef7f25] transition-all">
            {getCtaText(item.id)}
        </span>
        <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </Link>
  );
};

/* =========================================
   4. Main Page Component
   ========================================= */
const Solutions = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-900 pt-20">
      
      {/* --- 1. HERO SECTION (CATALOG STYLE) --- */}
      <section className="relative bg-white py-20 lg:py-24 border-b border-gray-200 overflow-hidden">
        {/* Technical Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Subtle Brand Gradient Orb */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ef7f25]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Text */}
                <div>
                    <h4 className="text-[#760015] font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-[#ef7f25]"></span>
                        Enterprise Catalog
                    </h4>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2d2a2a] mb-6 leading-[1.1]">
                        Solutions Built for <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#760015] to-[#ef7f25]">Governance & Scale</span>
                    </h1>
                    <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
                        A unified ecosystem of AI-powered platforms designed to automate risk, streamline compliance, and modernize enterprise operations.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/contact" className="px-8 py-3.5 bg-[#760015] text-white font-semibold rounded hover:bg-[#5a0010] transition-all shadow-xl shadow-[#760015]/20 flex items-center gap-2 group">
                            Schedule a Briefing
                            <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Right: UI Composition (Visuals) */}
                <div className="relative h-[400px] w-full flex items-center justify-center lg:justify-end">
                    
                    {/* Background Circle */}
                    <div className="absolute w-[350px] h-[350px] border border-[#760015]/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
                    <div className="absolute w-[250px] h-[250px] border border-[#ef7f25]/20 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>

                    {/* Card 1: Main Dashboard View (Back) */}
                    <div className="relative z-10 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform -rotate-3 translate-y-4 hover:rotate-0 hover:translate-y-0 transition-all duration-500 cursor-default">
                        {/* Fake Browser Header */}
                        <div className="bg-gray-50 border-b border-gray-100 p-3 flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="ml-auto text-[10px] font-mono text-gray-400">dashboard.baarez.com</div>
                        </div>
                        {/* Image representing Dashboard */}
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                                alt="Analytics Dashboard" 
                                className="w-full h-48 object-cover opacity-90"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                        </div>
                        {/* Fake Stats Row */}
                        <div className="p-4 grid grid-cols-3 gap-4">
                            <div>
                                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Risk Score</div>
                                <div className="text-xl font-bold text-[#760015]">Low</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Compliance</div>
                                <div className="text-xl font-bold text-green-600">98%</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Audits</div>
                                <div className="text-xl font-bold text-[#ef7f25]">Active</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Floating Alert/Status (Front) */}
                    <div className="absolute z-20 -bottom-4 left-4 md:left-20 w-64 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-l-4 border-[#ef7f25] transform translate-x-4 -translate-y-8 animate-bounce-slow">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#ef7f25]/10 flex items-center justify-center text-[#ef7f25] shrink-0">
                                <Icons.Scan className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-gray-500 uppercase">ScanVista Active</div>
                                <div className="text-sm font-semibold text-gray-800 mt-1">
                                    Document Processing Complete
                                </div>
                                <div className="text-[10px] text-gray-400 mt-1 flex items-center gap-1">
                                    <Icons.Check className="w-3 h-3 text-green-500" />
                                    <span>No anomalies detected</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Floating Glimmora (New) */}
                    <div className="absolute z-20 top-0 right-4 w-56 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-l-4 border-[#760015] transform translate-x-4 -translate-y-8 animate-bounce-slow" style={{animationDelay: '1s'}}>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#760015]/10 flex items-center justify-center text-[#760015] shrink-0">
                                <Icons.Sparkles className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-gray-500 uppercase">Glimmora AI</div>
                                <div className="text-sm font-semibold text-gray-800 mt-1">
                                    Predictive Insights Ready
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </section>

      {/* --- 2. VALUE STRIP (HORIZONTAL LAYOUT) --- */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                        <Icons.Layers className="w-5 h-5 text-[#760015]" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">Enterprise Grade</h4>
                        <p className="text-xs text-gray-500">SOC2 & ISO 27001 Ready</p>
                    </div>
                </div>
                <div className="w-px h-10 bg-gray-100 hidden md:block"></div>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                        <Icons.Robot className="w-5 h-5 text-[#760015]" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">AI-Native Core</h4>
                        <p className="text-xs text-gray-500">Built on Advanced ML Models</p>
                    </div>
                </div>
                <div className="w-px h-10 bg-gray-100 hidden md:block"></div>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                        <Icons.Server className="w-5 h-5 text-[#760015]" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm">Sovereign Data</h4>
                        <p className="text-xs text-gray-500">Region-Locked Hosting</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- 3. SOLUTIONS GRID (Clean & Categorized) --- */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          {solutionCategories.map((category, idx) => (
            <div key={idx}>
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[#2d2a2a] mb-2 flex items-center gap-2">
                        <span className="w-2 h-8 bg-[#ef7f25] rounded-sm block"></span>
                        {category.title}
                    </h2>
                    <p className="text-gray-500 text-base max-w-2xl ml-4">
                        {category.description}
                    </p>
                  </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((solution) => (
                  <SolutionCard key={solution.id} item={solution} />
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* --- 4. CTA SECTION (LIGHT & MODERN) --- */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
            <div className="relative bg-white rounded-2xl p-10 md:p-14 border border-gray-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden text-center">
                
                {/* Decorative Gradients */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#760015] via-[#ef7f25] to-[#760015]"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ef7f25]/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#760015]/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2d2a2a] mb-4">
                        Find the right fit for your enterprise.
                    </h2>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto font-light">
                        Unsure which platform aligns with your compliance needs? Our solution architects can provide a tailored roadmap.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            to="/contact" 
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-[#760015] rounded hover:bg-[#5a0010] transition-colors shadow-lg shadow-[#760015]/20"
                        >
                            Talk to an Expert
                        </Link>
                        <Link 
                            to="/about" 
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[#760015] bg-white border border-[#760015]/20 rounded hover:bg-gray-50 transition-colors"
                        >
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Solutions;