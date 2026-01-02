import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* =========================================
   1. Icons (Enterprise, ERP-Specific)
   ========================================= */
const Icons = {
  Server: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="2" y="2" width="20" height="8" />
      <rect x="2" y="14" width="20" height="8" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  Box: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Money: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="2" y="6" width="20" height="12" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  ),
  Globe: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  ArrowRight: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Check: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Layers: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  Briefcase: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
};

/* =========================================
   2. Animations
   ========================================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

/* =========================================
   3. Main Component
   ========================================= */

const ERPConsulting = () => {
  
  return (
    <div className="min-h-screen bg-white font-sans text-[#2d2a2a] selection:bg-[#ef7f25] selection:text-white overflow-x-hidden">
      
      {/* --- 1. HERO: "The System Synapse" --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1800px] mx-auto border-b border-gray-100">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Strategic Content */}
          <div className="lg:col-span-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-gray-200 bg-[#faf9f6]"
            >
              <span className="text-[#ef7f25] font-mono text-[10px] font-bold uppercase tracking-widest">
                ERP Consulting Services
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold text-[#2d2a2a] leading-[1.05] tracking-tight mb-8"
            >
              Unify Operations. <br/>
              <span className="text-[#760015]">Accelerate Scale.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-500 leading-relaxed max-w-lg mb-10 font-light"
            >
              From Procurement to Supply Chain, we integrate your core business functions into a single source of truth. Expert ERP implementation across Qatar, UAE, and India.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-[#760015] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#5a0010] transition-colors rounded-none shadow-xl"
              >
                Get a Quick Consultation
              </Link>
            </motion.div>
          </div>

          {/* Right: "System Synapse" Animation */}
          <div className="lg:col-span-6 relative h-[500px] flex items-center justify-center">
            
            {/* Central Core (ERP) */}
            <motion.div 
                className="relative z-20 w-32 h-32 bg-white border-2 border-[#760015] flex flex-col items-center justify-center shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Icons.Server className="w-10 h-10 text-[#760015]" />
                <span className="text-[10px] font-bold mt-2 uppercase tracking-wider">Core ERP</span>
            </motion.div>

            {/* Orbiting Satellites (Departments) */}
            {[
                { label: "Finance", icon: Icons.Money, x: -140, y: -100 },
                { label: "Supply", icon: Icons.Box, x: 140, y: -100 },
                { label: "Plan", icon: Icons.Layers, x: -140, y: 100 },
                { label: "Sales", icon: Icons.Globe, x: 140, y: 100 },
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    className="absolute z-10 w-24 h-24 bg-[#faf9f6] border border-gray-200 flex flex-col items-center justify-center"
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: item.x, y: item.y, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 + (i * 0.1), type: "spring" }}
                >
                    <item.icon className="w-6 h-6 text-[#ef7f25] mb-2" />
                    <span className="text-[10px] text-gray-500 font-medium uppercase">{item.label}</span>
                    
                    {/* Connecting Line to Center */}
                    <svg className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none overflow-visible">
                        <line 
                            x1="50%" 
                            y1="50%" 
                            x2={50 + (item.x * -0.3)} // Invert direction for line
                            y2={50 + (item.y * -0.3)} 
                            stroke="#e5e7eb" 
                            strokeWidth="1" 
                        />
                    </svg>
                </motion.div>
            ))}

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] -z-10 opacity-50"></div>
          </div>

        </div>
      </section>

      {/* --- 2. CONTEXT: "Regional Authority" --- */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-[#ef7f25] font-bold uppercase tracking-[0.2em] mb-4 text-xs">
              Why Baarez?
            </h2>
            <h3 className="text-3xl font-bold text-[#2d2a2a] mb-6">
              Global Standards. <br/> Regional Expertise.
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Modern organizations cannot afford data silos. ERP provides real-time visibility and control across your entire enterprise.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              We provide tailor-made ERP consulting for SMEs and Enterprises across **Qatar, UAE, and India**, ensuring your system aligns with local compliance and global best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {[
              { label: "Qatar", sub: "Doha HQ" },
              { label: "UAE", sub: "Dubai Hub" },
              { label: "India", sub: "Dev Center" },
              { label: "Global", sub: "Best Practices" }
            ].map((loc, i) => (
              <div key={i} className="bg-[#fdfbf9] p-8 text-center hover:bg-white transition-colors">
                <div className="text-xl font-bold text-[#760015] mb-1">{loc.label}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">{loc.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- 3. PLATFORMS: "The Neutral Stack" --- */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-[#760015] font-bold uppercase tracking-[0.2em] mb-12 text-xs">
            Platforms We Support
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "SAP", color: "text-[#008FD3]" },
              { name: "Oracle", color: "text-[#C74634]" },
              { name: "Microsoft Dynamics", color: "text-[#760015]" }, // Using brand color for MS
              { name: "Salesforce", color: "text-[#00A1E0]" }
            ].map((brand, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 p-10 flex items-center justify-center shadow-sm"
              >
                <span className={`text-xl font-bold ${brand.color}`}>{brand.name}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500">
            We are platform-neutral. We recommend the solution that fits <em>your</em> business.
          </p>
        </div>
      </section>

      {/* --- 4. FUNCTIONAL DOMAINS: "Quadrant Blueprint" --- */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-[#ef7f25] font-bold uppercase tracking-[0.2em] mb-4 text-xs">
              Functional Coverage
            </h2>
            <h3 className="text-3xl font-bold text-[#2d2a2a]">
              End-to-End Enterprise Management
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {/* Domain 1: Procurement */}
            <div className="bg-white p-12 hover:bg-[#fdfbf9] transition-colors group">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-[#2d2a2a]">Procurement</h4>
                <Icons.Briefcase className="w-6 h-6 text-[#ef7f25]" />
              </div>
              <ul className="space-y-3">
                {["Strategic Sourcing", "Contract Management", "Procure-to-Pay", "Supplier Management"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-[#ef7f25]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Domain 2: Finance */}
            <div className="bg-white p-12 hover:bg-[#fdfbf9] transition-colors group">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-[#2d2a2a]">Finance</h4>
                <Icons.Money className="w-6 h-6 text-[#760015]" />
              </div>
              <ul className="space-y-3">
                {["AP / AR / Revenue", "Treasury & Tax", "Costing & FP&A", "Credit Control"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-[#760015]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Domain 3: Planning */}
            <div className="bg-white p-12 hover:bg-[#fdfbf9] transition-colors group">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-[#2d2a2a]">Planning</h4>
                <Icons.Layers className="w-6 h-6 text-[#ef7f25]" />
              </div>
              <ul className="space-y-3">
                {["Supply & Demand", "Integrated Planning", "Profitability Analysis", "Business Modeling"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-[#ef7f25]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Domain 4: Supply Chain */}
            <div className="bg-white p-12 hover:bg-[#fdfbf9] transition-colors group">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-[#2d2a2a]">Supply Chain</h4>
                <Icons.Box className="w-6 h-6 text-[#760015]" />
              </div>
              <ul className="space-y-3">
                {["Logistics Management", "Manufacturing Execution", "Lifecycle Management", "Risk & Compliance"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-[#760015]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. BENEFITS: "Editorial Strips" --- */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#2d2a2a]">
              Business Value Delivered
            </h2>
          </div>

          <div className="border-t border-gray-300">
            {[
              "Higher Productivity",
              "Lower Risk & Compliance Readiness",
              "Deeper Business Insights",
              "Simpler IT Landscape",
              "Accelerated Reporting",
              "Improved Business Agility"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center justify-between py-6 border-b border-gray-200 group hover:bg-white px-4 transition-colors">
                <span className="text-sm font-bold text-[#2d2a2a] group-hover:text-[#760015] transition-colors">
                  {benefit}
                </span>
                <Icons.ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#ef7f25] transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. APPROACH: "Execution Timeline" --- */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#760015] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
              Our Methodology
            </h2>
            <h3 className="text-3xl font-bold text-[#2d2a2a]">
              From Concept to Go-Live
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Enquiry", "Consultation", "Design", 
              "Agreement", "Execution", "Handover"
            ].map((step, i) => (
              <div key={i} className="relative p-6 border border-gray-100 bg-[#fdfbf9] text-center group hover:border-[#760015] transition-all">
                <div className="text-xs font-mono text-gray-400 mb-2 group-hover:text-[#ef7f25]">0{i+1}</div>
                <div className="font-bold text-[#2d2a2a] text-sm">{step}</div>
                
                {/* Connector Line (except last) */}
                {i !== 5 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-gray-300 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. CTA: "Sharp Strip" --- */}
      <section className="py-24 bg-[#760015] px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Optimize Your ERP?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Speak with our ERP consultants to plan your roadmap.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-white text-[#760015] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#ef7f25] hover:text-white transition-colors rounded-none"
          >
            Get a Quick Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ERPConsulting;