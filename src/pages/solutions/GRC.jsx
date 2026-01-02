import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';


// 1. Reusable Layout Wrapper
const Section = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 ${className}`}>
    {children}
  </div>
);

// 2. Animation Wrapper
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// 3. Icons Definition
const Icons = {
  Chip: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  Lock: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  Server: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  TrendingUp: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )
};

/* =========================================
   1. Brand Icon System (Clean & Technical)
   ========================================= */
const BrandIcons = {
  Hexagon: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
    </svg>
  ),
  PulseLine: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  ShieldCheck: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Scale: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2v2H3z" />
      <path d="M19 7h2v2h-2z" />
    </svg>
  ),
  ArrowUpRight: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  ),
  ChevronDown: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  Chart: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  ),
  FileText: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  )
};

/* =========================================
   2. Micro-Components
   ========================================= */


// Fixed GovernanceNetwork: Nodes stay upright while orbiting
const GovernanceNetwork = () => (
  <div className="relative w-full h-[450px] flex items-center justify-center">
    
    {/* 1. Central Node (Static) */}
    <div className="relative z-20 w-32 h-32 bg-white rounded-full border border-gray-100 shadow-2xl flex items-center justify-center">
      <div className="w-24 h-24 bg-[#760015]/5 rounded-full flex items-center justify-center animate-pulse">
        <BrandIcons.ShieldCheck className="w-10 h-10 text-[#760015]" />
      </div>
      {/* Orbiting Dashed Ring */}
      <div className="absolute inset-0 border border-gray-200 rounded-full w-[140%] h-[140%] -left-[20%] -top-[20%] opacity-50 border-dashed animate-[spin_60s_linear_infinite]"></div>
    </div>

    {/* 2. The Orbiting System */}
    <motion.div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      animate={{ rotate: 360 }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
    >
      
      {/* Connection Lines (These rotate with the system) */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <line x1="50%" y1="50%" x2="30%" y2="30%" stroke="#760015" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="70%" y2="70%" stroke="#760015" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="70%" y2="30%" stroke="#760015" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="#760015" strokeWidth="1" />
      </svg>

      {/* Satellite Nodes */}
      {[
        { label: "Risk", x: "-140px", y: "-80px", color: "bg-[#ef7f25]" },
        { label: "Audit", x: "140px", y: "80px", color: "bg-[#760015]" },
        { label: "Policy", x: "120px", y: "-100px", color: "bg-gray-400" },
        { label: "Vendor", x: "-120px", y: "100px", color: "bg-gray-800" },
      ].map((node, i) => (
        <div
          key={i}
          className="absolute z-20"
          style={{ transform: `translate(${node.x}, ${node.y})` }}
        >
          {/* FIX: 
             We apply the counter-rotation to this wrapper.
             Inside this wrapper, we put the actual Card (bg-white, shadow).
             This keeps the whole card upright.
          */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            {/* The Actual Card Design */}
            <div className="bg-white px-4 py-2 rounded shadow-lg border border-gray-100 flex items-center gap-3 whitespace-nowrap">
              <div className={`w-2 h-2 rounded-full ${node.color}`}></div>
              <span className="text-xs font-bold text-[#2d2a2a] uppercase tracking-wide">
                {node.label}
              </span>
            </div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  </div>
);
/* =========================================
   3. Main Page Layout
   ========================================= */

const GRC = () => {
  // --- Updated Industries List ---
  const industries = [
    { 
        id: 'finance', 
        name: 'Financial Services', 
        icon: BrandIcons.Scale, 
        desc: 'Automate liquidity risk reporting, AML monitoring, and SAMA compliance without stalling transaction velocity.' 
    },
    { 
        id: 'manufacturing', 
        name: 'Manufacturing', 
        icon: BrandIcons.Hexagon, 
        desc: 'Ensure compliance with environmental regulations and ISO 9001. Manage supply chain risks and workplace safety.' 
    },
    { 
        id: 'healthcare', 
        name: 'Healthcare', 
        icon: BrandIcons.ShieldCheck, 
        desc: 'Protect patient data (HIPAA) and ensure interoperability standards are met without compromising operational speed.' 
    },
    { 
        id: 'aviation', 
        name: 'Aviation', 
        icon: BrandIcons.PulseLine, 
        desc: 'Unified safety management systems (SMS) for ICAO standards, crew certification tracking, and incident reporting.' 
    },
    { 
        id: 'energy', 
        name: 'Energy & Utilities', 
        icon: BrandIcons.Hexagon, 
        desc: 'Manage HSE incident tracking, NERC CIP compliance, and operational resilience across distributed assets.' 
    },
    { 
        id: 'public', 
        name: 'Public Sector', 
        icon: BrandIcons.Scale, 
        desc: 'National data localization standards (NIST/GDPR) and secure governance for government entities.' 
    },
    { 
        id: 'retail', 
        name: 'Retail', 
        icon: BrandIcons.ShieldCheck, 
        desc: 'PCI-DSS compliance for payment security and consumer privacy protection across global chains.' 
    },
    { 
        id: 'tech', 
        name: 'Technology', 
        icon: BrandIcons.PulseLine, 
        desc: 'SOC 2 automation, ISO 27001 certification management, and continuous cloud security monitoring.' 
    },
  ];

  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans text-[#2d2a2a] selection:bg-[#760015] selection:text-white">
      
      {/* --- 1. HERO: The Governance Control Plane --- */}
      <section className="relative py-24 lg:py-32 border-b border-gray-200 overflow-hidden bg-[#fafafa]">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Content */}
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-[1px] bg-[#ef7f25]"></div>
                <span className="text-xs font-bold text-[#760015] uppercase tracking-[0.2em]">Enterprise-Ready GRC</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#2d2a2a] mb-8 leading-[1.1]">
                Elevate Governance, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#760015] to-[#ef7f25]">Risk & Compliance.</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-normal">
                Baarez’s AI-enabled platform helps organizations centralize governance, identify risks proactively, and continuously monitor compliance—ensuring operational resilience in a dynamic landscape.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link to="/contact" className="px-8 py-4 bg-[#760015] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#5a0010] transition-all shadow-xl shadow-[#760015]/10 text-center rounded-sm">
                  Book a Demo
                </Link>
                <Link to="#features" className="px-8 py-4 bg-white border border-gray-300 text-[#2d2a2a] font-bold text-sm uppercase tracking-wider hover:border-[#760015] hover:text-[#760015] transition-all text-center rounded-sm">
                  View Capabilities
                </Link>
              </div>
            </div>

            {/* Right: Visualization */}
            <div className="hidden lg:block relative transform scale-125 origin-center">
  <GovernanceNetwork />
</div>
          </div>
        </div>
      </section>

      {/* --- 2. THE FRICTION POINT: "The Reality Check" --- */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-[#2d2a2a] mb-6">Managing an increasingly complex GRC landscape?</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Simplify governance, risk, and compliance with Baarez’s enterprise-ready, easy-to-manage GRC platform. Traditional methods can't keep up with today's velocity.
              </p>
            </div>
            <div className="lg:col-span-8 grid md:grid-cols-3 gap-8">
              {[
                { title: "Fragmented Processes", status: "Critical", desc: "Siloed governance leading to oversight gaps." },
                { title: "Reactive Risk", status: "High Risk", desc: "Addressing threats only after they impact operations." },
                { title: "Manual Reporting", status: "Inefficient", desc: "Time-consuming spreadsheets and email chains." }
              ].map((item, i) => (
                <div key={i} className="border-t-2 border-gray-100 pt-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-[#2d2a2a]">{item.title}</h3>
                    <span className="text-[10px] uppercase font-bold text-[#ef7f25] bg-[#ef7f25]/5 px-2 py-1 rounded">{item.status}</span>
                  </div>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. CORE ARCHITECTURE: "Key Capabilities" --- */}
      <section id="features" className="py-32 bg-[#f8f9fa] border-y border-gray-200">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#2d2a2a] mb-2">Key Capabilities</h2>
              <p className="text-gray-500 text-lg">A unified system for enterprise oversight.</p>
            </div>
            <div className="hidden md:block w-32 h-[2px] bg-[#760015]"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI-Driven Risk Assessment",
                desc: "Leverage machine learning to identify, assess, and prioritize enterprise risks based on impact and likelihood.",
                icon: BrandIcons.Scale,
                tag: "Predictive"
              },
              {
                title: "Real-Time Monitoring",
                desc: "Continuously track regulatory and policy requirements with automated controls and alerts.",
                icon: BrandIcons.PulseLine,
                tag: "Continuous"
              },
              {
                title: "Customizable Dashboards",
                desc: "Visualize risk posture, compliance status, and audit metrics through role-based executive dashboards.",
                icon: BrandIcons.Chart,
                tag: "Visibility"
              },
              {
                title: "Automated Reporting",
                desc: "Generate accurate, audit-ready reports and documentation with automated workflows.",
                icon: BrandIcons.FileText,
                tag: "Efficiency"
              }
            ].map((layer, i) => (
              <div key={i} className="bg-white p-10 rounded-lg shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-[#760015] hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="mb-8 flex justify-between items-start">
                  <div className="w-12 h-12 bg-[#760015]/5 rounded-lg flex items-center justify-center text-[#760015]">
                    <layer.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase text-gray-400 tracking-wider group-hover:text-[#ef7f25] transition-colors">{layer.tag}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#2d2a2a] mb-4">{layer.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {layer.desc}
                </p>
                
                <div className="pt-6 border-t border-gray-50">
                  <span className="text-xs font-bold text-[#760015] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore Feature <BrandIcons.ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- NEW SECTION 1: THE NEURAL GRID (COMPACT BENTO BOX) --- */}
<div className="py-20 bg-gray-50 relative overflow-hidden">
  <Section>
    <div className="mb-12 max-w-3xl mx-auto text-center">
      <FadeIn>
        <h2 className="text-[#ef7f25] font-bold uppercase tracking-[0.2em] mb-3 text-xs">
          Enterprise Foundations
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-[#2d2a2a] mb-4">
          Built for How Large Organizations Actually Work.
        </h3>
        <p className="text-lg text-gray-500">
          Modern enterprises operate across systems, teams, and regulations.  
          Sustainable platforms are designed to absorb complexity—not fight it.
        </p>
      </FadeIn>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-5 h-auto md:h-[450px]">
      
      {/* Large Main Card */}
      <FadeIn
        delay={0.1}
        className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#ef7f25]/5"></div>
        <div className="p-8 relative z-10 flex flex-col h-full justify-between">
          <div>
            <div className="w-12 h-12 bg-[#760015] rounded-lg flex items-center justify-center text-white mb-5 shadow-lg shadow-[#760015]/20 group-hover:scale-110 transition-transform">
              <Icons.Chip className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">
              Decision Intelligence
            </h4>
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              Enterprises generate vast amounts of operational signals every day.
              The challenge is not data availability, but making timely, defensible decisions from it.
            </p>
          </div>

          <div className="mt-6 relative h-24 w-full bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
            {/* Abstract Data Visualization */}
            <div className="absolute inset-0 flex items-center justify-center gap-1">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 bg-[#ef7f25]/40 rounded-full"
                  animate={{ height: [15, 45, 15] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Top Right Card */}
      <FadeIn
        delay={0.2}
        className="relative group overflow-hidden rounded-2xl bg-[#760015] text-white shadow-lg hover:shadow-xl transition-all duration-500"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="p-6 relative z-10">
          <Icons.Lock className="w-6 h-6 text-[#ef7f25] mb-3" />
          <h4 className="text-lg font-bold mb-1">
            Governance as a Constant
          </h4>
          <p className="text-white/70 text-xs leading-relaxed">
            Large organizations must operate within evolving regulatory and policy environments without slowing execution.
          </p>
        </div>
        <div className="absolute -bottom-4 -right-4 text-[#ef7f25]/10">
          <Icons.Server className="w-24 h-24" />
        </div>
      </FadeIn>

      {/* Bottom Right Card */}
      <FadeIn
        delay={0.3}
        className="relative group overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500"
      >
        <div className="p-6 relative z-10 flex flex-col h-full justify-center">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <Icons.TrendingUp className="w-4 h-4" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              Continuous
            </div>
          </div>
          <h4 className="text-base font-bold text-gray-900">
            Operational Continuity
          </h4>
          <p className="text-gray-500 text-xs mt-1">
            Systems designed for availability, resilience, and long-term operational stability.
          </p>
        </div>
      </FadeIn>
    </div>
  </Section>
</div>

      {/* --- 4. INDUSTRY MATRIX: "Sector Grid" --- */}
      <section className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
            <div>
              <span className="text-[#ef7f25] font-bold text-xs uppercase tracking-widest mb-2 block">Use Cases</span>
              <h2 className="text-4xl font-bold text-[#2d2a2a]">Applied Intelligence</h2>
            </div>
            <p className="text-gray-500 text-sm font-medium mt-4 md:mt-0">
              Tailored solutions for regulated industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
            {industries.map((ind, i) => (
              <div 
                key={i}
                onMouseEnter={() => setHoveredIndustry(i)}
                onMouseLeave={() => setHoveredIndustry(null)}
                className="bg-white p-10 min-h-[240px] hover:bg-[#fafafa] transition-colors group relative cursor-default"
              >
                <div className="flex justify-between items-start mb-8">
                  <ind.icon className={`w-8 h-8 transition-colors ${hoveredIndustry === i ? 'text-[#ef7f25]' : 'text-gray-300'}`} />
                  <span className="text-[10px] font-bold text-gray-300 group-hover:text-[#760015]">0{i+1}</span>
                </div>
                <h3 className="text-lg font-bold text-[#2d2a2a] mb-3">{ind.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{ind.desc}</p>
                
                {/* Hover Reveal Line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-[#ef7f25] transform origin-left transition-transform duration-300 ${hoveredIndustry === i ? 'scale-x-100' : 'scale-x-0'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. OUTCOMES: "Business Benefits" --- */}
      <section className="py-24 bg-[#760015] text-white relative overflow-hidden">
        {/* Subtle Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold mb-6">Business Benefits</h2>
              <p className="text-white/80 leading-relaxed text-lg font-light">
                Baarez does not just protect value; we create it.
              </p>
            </div>

            <div className="lg:col-span-9">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  { title: "Enhanced Decisions", desc: "Predictive risk insights enable proactive governance." },
                  { title: "Increased Efficiency", desc: "Automation reduces manual assessments and fragmented processes." },
                  { title: "Cost Savings", desc: "Streamlined workflows minimize operational overhead." },
                  { title: "Regulatory Confidence", desc: "Continuous monitoring helps stay aligned with evolving mandates." }
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-[#ef7f25] pl-6">
                    <div className="text-lg font-bold mb-3 text-white">{stat.title}</div>
                    <div className="text-xs text-white/70 leading-relaxed">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 6. FAQs: "Critical Questions" --- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#2d2a2a]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is GRC?", a: "GRC stands for Governance, Risk, and Compliance. It is a strategic framework designed to ensure that an organization effectively manages risks, complies with relevant laws and regulations, and establishes strong governance policies for decision-making and performance monitoring." },
              { q: "What are the key components of GRC services?", a: "Governance (establishing policies), Risk Management (identifying and assessing threats), and Compliance (ensuring adherence to regulations and standards)." },
              { q: "Why is GRC important for my business?", a: "It helps reduce risks, avoid penalties, improve decision-making, protect against reputational damage, and optimize business performance through better policy enforcement." },
              { q: "What industries benefit from GRC services?", a: "Financial services, Healthcare, Manufacturing, Technology, Energy, and the Public Sector. Each has its own set of regulations making GRC essential." },
              { q: "What regulations are typically addressed?", a: "GDPR, SOX, HIPAA, PCI-DSS, ISO 27001, and NIST, among others specific to local regions like SAMA/NCA." },
              { q: "How can GRC help with risk management?", a: "By identifying potential risks in financial operations, cybersecurity, and supply chains, and enabling businesses to develop mitigation strategies to minimize impact." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                >
                  <span className={`text-lg font-bold transition-colors ${openFaq === i ? 'text-[#760015]' : 'text-[#2d2a2a] group-hover:text-[#760015]'}`}>
                    {faq.q}
                  </span>
                  <BrandIcons.ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#760015]' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="pb-6 text-gray-500 leading-relaxed text-base max-w-2xl">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. FOOTER CTA: "The Next Step" --- */}
      <section className="py-24 bg-[#fafafa] border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-8 lg:px-16 text-center">
          <div className="inline-block p-4 rounded-full bg-white border border-gray-100 shadow-sm mb-8">
            <BrandIcons.Scale className="w-8 h-8 text-[#760015]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d2a2a] mb-6">
            Struggling with GRC requirements?
          </h2>
          <p className="text-lg text-gray-500 mb-10 max-w-lg mx-auto">
            Our solution architects can help assess your current infrastructure and recommend the right configuration for your specific needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-[#760015] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#5a0010] transition-colors shadow-xl rounded-sm"
          >
            Book a Demo
          </Link>
        </div>
      </section>

    </div>
  );
};

export default GRC;