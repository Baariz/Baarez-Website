import React,{ useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion'

/* ===================================================================
   1. INTERNAL ICON SYSTEM (Self-Contained)
   Expanded with new icons for the new sections.
   =================================================================== */
const Icons = {
  // --- Existing Icons (Preserved) ---
  ShieldCheck: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
  ),
  Users: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  ),
  ClipboardCheck: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  ),
  Search: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  ),
  Lightning: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  ),
  Briefcase: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  Server: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
  ),
  ArrowRight: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
  ),
  CheckCircle: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
  Globe: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
  ChevronDown: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
  ),
  ChartBar: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  ),
  Chart: ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Lock: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
  ),
  Database: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
  ),
  Cloud: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
  ),
  Quote: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" /></svg>
  ),
  TrendingUp: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
  ),
  Chip: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
  ),
  Headset: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
  ),

  // --- NEW ICONS (Added to Fix Errors) ---
  Settings: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
  RefreshCcw: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
  ),
  BarChart3: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
  ),
  Shield: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  ),
  Default: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
};

/* ===================================================================
   2. CONFIGURATION & CONTENT
   Expanded with new sections data.
   =================================================================== */
const BAAREZ_CONFIG = {
  brand: {
    primary: "#760015",
    secondary: "#ef7f25",
  },
 hero: {
  tagline: "Baarez Technology Solutions",
  headline: "AI Transformation Company",
  subheadline:
    "Baarez builds AI-driven systems that bring clarity, control, and continuity to enterprise governance, risk, and compliance.",
  ctaPrimary: "Request Platform Demo",
  ctaSecondary: "Explore AI Platforms",
  image:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
}


,
 trust: {
  label: "Trusted By Regulated Industries",
  logos: [
    { 
      name: "Oracle", 
      url: "https://i.postimg.cc/RFdd76kq/image.png" 
    },
    { 
      name: "AWS", 
      url: "https://i.postimg.cc/fykcYH72/image.png" 
    },
    { 
      name: "Google Cloud", 
      url: "https://i.postimg.cc/B67DZTWB/image.png" 
    },
    { 
      name: "Fujitsu", 
      url: "https://i.postimg.cc/nVQMQbqH/image.png" 
    },
    { 
      name: "Palo Alto Networks", 
      url: "https://i.postimg.cc/9frc5Zpj/image.png" 
    },
    { 
      name: "Newgen", 
      url: "https://i.postimg.cc/mgrsCCKd/image.png" 
    },
    { 
      name: "RSA Security", 
      url: "https://i.postimg.cc/9Q06rVqy/image.png" 
    },
    { 
      name: "AlgoSec", 
      url: "https://i.postimg.cc/76ktMybB/image.png" 
    }
  ]
},
    solutions: {
  title: "Baarez Platforms",
  subtitle: "Independent platforms designed to work standalone or together across the enterprise.",
  tabs: [
    {
      id: "grc",
      label: "GRC Platform",
      icon: Icons.ShieldCheck,
      title: "Enterprise Governance, Centralized",
      desc: "Baarez GRC provides a structured system to manage governance, risk, and compliance across policies, controls, risks, and regulatory obligations—built for organizations operating in complex regulatory environments.",
      features: [
        "Policy, Risk & Control Management",
        "Regulatory Mapping & Compliance Tracking",
        "Centralized Risk Visibility"
      ],
      link: "/solutions/grc",
      image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "tprm",
      label: "Third-Party Risk",
      icon: Icons.Users,
      title: "Control Risk Beyond Your Enterprise",
      desc: "Baarez TPRM helps enterprises assess, monitor, and manage third-party and vendor risks across the full lifecycle—extending governance beyond internal boundaries.",
      features: [
        "Vendor Risk Assessments",
        "Continuous Risk Monitoring",
        "Third-Party Compliance Oversight"
      ],
      link: "/solutions/tprm",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "internal-audit",
      label: "Internal Audit",
      icon: Icons.ClipboardCheck,
      title: "Modernize Audit Execution",
      desc: "Baarez Internal Audit enables structured audit planning, execution, and reporting—allowing audit teams to operate with consistency, transparency, and traceability.",
      features: [
        "Audit Planning & Scheduling",
        "Issue & Observation Management",
        "Audit Reporting & Traceability"
      ],
      link: "/solutions/internal-audit",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "scanvista",
      label: "ScanVista",
      icon: Icons.Search,
      title: "Intelligent Document Understanding",
      desc: "ScanVista converts unstructured documents into structured, usable data through AI-powered document understanding—supporting compliance, operations, and enterprise workflows.",
      features: [
        "Multi-Language OCR (English & Arabic)",
        "Automated Document Classification",
        "Enterprise-Ready Data Extraction"
      ],
      link: "/solutions/scanvista",
      image: "https://i.postimg.cc/05WRxbzP/image.png"
    },
    {
      id: "glimmora",
      label: "Glimmora",
      icon: Icons.Chip,
      title: "AGI-Native Hospitality Intelligence",
      desc: "Glimmora is an AGI-native operating platform for hospitality groups, designed to unify operations, pricing intelligence, guest experience optimization, and digital twins into a single intelligent system.",
      features: [
        "Predictive Operations & Demand Forecasting",
        "Pricing & Revenue Intelligence",
        "Guest Experience Optimization",
        "Digital Twin–Driven Insights"
      ],
      link: "/solutions/glimmora",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
    }
  ]
}
,
services: {
  title: "Baarez Services",
  subtitle: "Advisory and execution services that help enterprises design, transform, and operate with confidence.",
  tabs: [
    {
      id: "business-process-consulting",
      label: "Business Process Consulting",
      icon: Icons.Settings,
      title: "Optimize How Your Business Operates",
      desc: "Baarez Business Process Consulting helps organizations analyze, redesign, and optimize critical business processes—reducing inefficiencies, improving control, and enabling scalable operations.",
      features: [
        "Process Assessment & Gap Analysis",
        "Process Redesign & Optimization",
        "Operational Efficiency Improvement"
      ],
      link: "/services/business-process-consulting",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "digital-transformation",
      label: "Digital Transformation",
      icon: Icons.RefreshCcw,
      title: "Transform Operations Through Technology",
      desc: "Baarez partners with enterprises to modernize legacy operations through digital transformation—aligning people, processes, and technology to drive agility, resilience, and long-term growth.",
      features: [
        "Digital Strategy & Roadmapping",
        "Process Automation Enablement",
        "Enterprise Technology Modernization"
      ],
      link: "/services/digital-transformation",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "data-analytics-ai",
      label: "Data Analytics & AI",
      icon: Icons.BarChart3,
      title: "Turn Data Into Actionable Intelligence",
      desc: "Baarez Data Analytics & AI services help organizations unlock insights from enterprise data—enabling better decision-making, predictive analytics, and intelligent automation.",
      features: [
        "Enterprise Data Analytics",
        "Predictive & Prescriptive Insights",
        "AI & Machine Learning Enablement"
      ],
      link: "/services/data-analytics-ai",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "erp-consulting",
      label: "ERP Consulting",
      icon: Icons.Database,
      title: "Strengthen Core Enterprise Systems",
      desc: "Baarez ERP Consulting supports organizations in implementing, optimizing, and governing ERP platforms—ensuring alignment with business processes, controls, and compliance requirements.",
      features: [
        "ERP Implementation & Optimization",
        "Process & Control Alignment",
        "ERP Governance & Support"
      ],
      link: "/services/erp-consulting",
      image: "https://i.postimg.cc/ryB6z7Nv/image.png"
    },
    {
      id: "cybersecurity-soc",
      label: "Cybersecurity & SOC",
      icon: Icons.Shield,
      title: "Protect Critical Systems and Data",
      desc: "Baarez Cybersecurity & SOC services help enterprises strengthen security posture, detect threats early, and respond effectively—supporting regulatory compliance and business continuity.",
      features: [
        "Security Risk Assessment & Hardening",
        "Security Operations & Monitoring",
        "Incident Response & Compliance Support"
      ],
      link: "/services/cybersecurity-soc",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "cloud-automation",
      label: "Cloud & Automation",
      icon: Icons.Cloud,
      title: "Enable Scalable, Automated Infrastructure",
      desc: "Baarez Cloud & Automation services help organizations design, migrate, and optimize cloud environments—leveraging automation to improve scalability, reliability, and operational efficiency.",
      features: [
        "Cloud Strategy & Migration",
        "Infrastructure Automation",
        "Cloud Governance & Optimization"
      ],
      link: "/services/cloud-automation",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop"
    }
  ]
}

,
  methodology: {
  title: "How Baarez Operates",
  subtitle: "A structured approach to bringing clarity, control, and continuity across enterprise operations.",
  steps: [
    {
      num: "01",
      title: "Connect",
      desc: "Integrate enterprise systems, third-party platforms, and documents to establish a consistent and reliable operational data foundation.",
      icon: Icons.Server
    },
    {
      num: "02",
      title: "Interpret",
      desc: "Apply intelligent analysis to identify risk signals, compliance gaps, and operational patterns across interconnected processes.",
      icon: Icons.Search
    },
    {
      num: "03",
      title: "Operationalize",
      desc: "Enable structured actions through workflows, reporting, and controls—ensuring decisions translate into measurable outcomes.",
      icon: Icons.CheckCircle
    }
  ]
}
,
 industries: {
  title: "Industries We Serve",
  desc: "Baarez platforms are designed for organizations operating in highly regulated environments where governance, risk management, and compliance are critical to business continuity.",
  cards: [
    {
      title: "Banking & Financial Services",
      icon: Icons.Briefcase,
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Healthcare & Life Sciences",
      icon: Icons.ShieldCheck,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Government & Public Sector",
      icon: Icons.Server,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Energy & Utilities",
      icon: Icons.Lightning,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
    }
  ]
}
,


  // --- NEW CONFIG DATA START ---
  integrations: {
    title: "The Neural Nexus",
    subtitle: "Baarez doesn't replace your stack. It unifies it. Pre-built connectors for the world's leading enterprise systems.",
    nodes: ["SAP", "Oracle", "Microsoft", "Salesforce", "Workday", "ServiceNow"]
  },
  impact: {
    title: "Return on Intelligence",
    stats: [
      { val: "60%", desc: "Reduction in Audit Cycle Time" },
      { val: "$2.4M", desc: "Average Annual Compliance Savings" },
      { val: "0", desc: "Critical Vulnerabilities Missed" },
      { val: "100%", desc: "Regulatory Audit Success Rate" }
    ]
  },
  testimonials: {
    title: "Executive Perspectives",
    items: [
      {
        quote: "Baarez didn't just automate our compliance; they gave us a real-time view of our risk posture that we never thought possible.",
        author: "Sarah J.",
        role: "Chief Risk Officer, FinBank Global",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
      },
      {
        quote: "The RaaS implementation was flawless. We scaled our operations overnight without hiring a single new headcount.",
        author: "Ahmed K.",
        role: "VP of Operations, LogiTech Solutions",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
      }
    ]
  },
  // --- NEW CONFIG DATA END ---
  cta: {
    headline: "The Future is Visible.",
    subheadline: "Join the enterprises replacing manual oversight with intelligent automation.",
    button: "Initiate Transformation"
  }
}



const SOVEREIGN_SECTION = {
  badge: {
    label: "Global Presence",
    icon: Icons.Globe
  },
  headline: {
    primary: "Global Operations.",
    highlight: "Local Governance."
  },
  description:
    "Baarez operates across the USA, UAE, Qatar, Singapore, India, and Latvia, supporting enterprises with region-aware governance and data management.",
  cards: [
    {
      title: "Regional Deployments",
      desc: "Active deployments across key global regions.",
      icon: Icons.Server
    },
    {
      title: "Local Compliance Models",
      desc: "Configurable controls aligned to regional regulations.",
      icon: Icons.ShieldCheck
    },
    {
      title: "Unified Security Standards",
      desc: "Consistent security and access controls worldwide.",
      icon: Icons.Lock
    },
    {
      title: "Regional Support",
      desc: "Local teams with global delivery coverage.",
      icon: Icons.Briefcase
    }
  ]
}




/* ===================================================================
   3. UI COMPONENTS
   =================================================================== */

const Section = ({ className = "", children }) => (
  <section className={`relative w-full px-6 md:px-12 lg:px-24 ${className}`}>
    {children}
  </section>
)

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
)

const Button = ({ children, to = "/", variant = "primary", className = "" }) => {
  const base = "inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 transform hover:-translate-y-1"
  const variants = {
    primary: `bg-[#760015] text-white hover:bg-[#5a0010] shadow-xl shadow-[#760015]/20`,
    secondary: `bg-white border-2 border-[#760015] text-[#760015] hover:bg-gray-50`,
    white: `bg-white text-[#760015] hover:bg-gray-100 shadow-xl`
  }
  
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {variant === 'primary' && <Icons.ArrowRight className="w-5 h-5 ml-2" />}
    </Link>
  )
}

/* ===================================================================
   4. NEW CREATIVE COMPONENTS (For Added Sections)
   =================================================================== */

const IntegrationNode = ({ label, angle, radius }) => {
    // Calculate position based on angle and radius
    const x = Math.cos(angle * (Math.PI / 180)) * radius;
    const y = Math.sin(angle * (Math.PI / 180)) * radius;
    
    return (
        <motion.div 
            className="absolute w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 z-10"
            style={{ x, y }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
        >
            {label}
        </motion.div>
    )
}

const ConnectionLine = ({ angle, radius }) => {
    return (
        <motion.div 
             className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-[#760015] to-transparent origin-left opacity-30"
             style={{ 
                 width: radius, 
                 rotate: angle,
                 x: 0,
                 y: 0
             }}
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             transition={{ duration: 1.5, delay: 0.2 }}
        />
    )
}

/* ===================================================================
   5. MAIN PAGE
   =================================================================== */

function Home() {
  const [activeTab, setActiveTab] = useState(BAAREZ_CONFIG.solutions.tabs[0].id)
  const { scrollYProgress } = useScroll()
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="font-sans text-gray-900 bg-[#fdfbf9] selection:bg-[#ef7f25] selection:text-white overflow-x-hidden">

      
{/* --- BAAREZ FLAGSHIP: SPATIAL LAYERED INTELLIGENCE HERO --- */}
<section className="relative min-h-screen flex mt-20 lg:mt-0 items-center bg-[#fcfcfc] overflow-hidden py-12 lg:py-0">
  
  {/* LAYER 0: THE MATHEMATICAL ENVIRONMENT */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-[30%] top-0 w-[1px] h-full bg-gray-100 hidden lg:block" />
    <div className="absolute -top-40 -left-40 w-[800px] h-[800px] border-[1px] border-[#760015]/5 rounded-full" />
    <div className="absolute inset-0 opacity-[0.03]" 
      style={{ backgroundImage: `radial-gradient(#760015 1px, transparent 1px)`, backgroundSize: '60px 60px' }} 
    />
  </div>

  <div className="max-w-[1440px] mx-auto px-6 lg:px-20 w-full relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-0 h-full">
      
      {/* 1. THE NARRATIVE PANEL (Left) */}
      <div className="w-full lg:w-[50%] flex flex-col justify-center lg:pr-12 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="space-y-6" 
        >
          <div className="space-y-2">
            <h2 className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              AI Transformation Company
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#760015] leading-tight tracking-tight">
              Architecting Intelligent
              <span className="text-[#760015] font-semibold"> Platforms.</span>
            </h1>
          </div>

          <div className="flex justify-center lg:justify-start">
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm font-light border-l-2 border-[#760015] pl-6 text-left">
              Building scalable AI ecosystems designed for high-performance enterprise operations and highly regulated environments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
            <Link to="/contact" className="w-full sm:w-auto text-center group relative bg-[#760015] text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.15em] shadow-xl overflow-hidden transition-all">
              <span className="relative z-10">Book Platform Demo</span>
              <div className="absolute inset-0 bg-[#ef7f25] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link to="/solutions" className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#760015] hover:text-[#ef7f25] transition-colors">
              Explore AI Platforms
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 2. THE TECH SCULPTURE (Right) */}
      {/* Added 'min-h-[auto]' for mobile so it fits content naturally, kept desktop 'lg:min-h' */}
      <div className="w-full lg:w-[55%] mt-16 lg:mt-0 relative min-h-[auto] lg:min-h-[700px] flex items-center justify-center lg:justify-end">
        
        <div className="relative w-full max-w-sm md:max-w-xl h-full flex flex-col items-center justify-center">
          
          {/* Main Mission Block */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-20 bg-[#760015] text-white p-8 md:p-12 shadow-[0_60px_100px_-20px_rgba(118,0,21,0.4)] w-full max-w-sm border-t-8 border-[#ef7f25]"
          >
            <p className="text-[#ef7f25] text-[9px] font-bold uppercase tracking-[0.4em] mb-6">Core Framework</p>
            <h3 className="text-lg md:text-2xl font-bold leading-tight tracking-tight mb-8">
              Scalable Platforms for High-Performance Ecosystems.
            </h3>
            
            <div className="flex gap-4 pt-6 border-t border-white/10">
               <div className="space-y-1">
                 <p className="text-[8px] text-white/40 uppercase tracking-widest">System</p>
                 <p className="text-[10px] font-bold">Active AI</p>
               </div>
               <div className="w-[1px] h-8 bg-white/10" />
               <div className="space-y-1">
                 <p className="text-[8px] text-white/40 uppercase tracking-widest">Region</p>
                 <p className="text-[10px] font-bold">MENA</p>
               </div>
            </div>
          </motion.div>

          {/* Glimmora AI Node */}
          {/* Mobile Changes: Added 'w-full mt-4' to stack nicely. Desktop 'lg:absolute' remains untouched. */}
          <Link to="/solutions/glimmora" className="w-full md:w-auto mt-4 lg:mt-6 lg:mt-0 z-30">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="lg:absolute lg:top-[65%] lg:-right-4 bg-white p-6 border border-gray-100 shadow-2xl w-full lg:w-60 hover:border-[#ef7f25] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#ef7f25] animate-pulse" />
                <span className="text-[10px] font-bold text-[#760015] uppercase tracking-widest">Glimmora AI</span>
              </div>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                Specialized hospitality intelligence module for guest-centric operational excellence.
              </p>
            </motion.div>
          </Link>

          {/* Capability Nodes */}
          {/* Mobile Changes: Added 'w-full mt-4' to stack nicely. Desktop 'lg:absolute' remains untouched. */}
          <div className="flex flex-col gap-4 w-full md:w-auto mt-4 lg:mt-0 lg:absolute lg:bottom-[50%] lg:left-[-5%] z-30">
            {[
              { label: 'AI GRC Platform', path: '/solutions/grc' },
              { label: 'AI TPRM Platform', path: '/solutions/tprm' },
              { label: 'AI Internal Audit', path: '/solutions/internal-audit' }
            ].map((node, i) => (
              <Link to={node.path} key={node.label}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  className="bg-white/80 backdrop-blur-md border border-gray-100 px-5 py-4 lg:py-2 shadow-lg flex items-center gap-3 hover:border-[#ef7f25] transition-colors cursor-pointer"
                >
                  <div className="w-1 h-1 bg-[#ef7f25]" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#760015]">{node.label}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* BACKGROUND KINETIC ELEMENTS */}
          <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none opacity-40">
             <div className="absolute w-[550px] h-[550px] border border-gray-100 rounded-full animate-[spin_60s_linear_infinite]" />
             <div className="absolute w-[450px] h-[450px] border border-dashed border-gray-200 rounded-full animate-[spin_40s_linear_reverse_infinite]" />
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
{/* CSS for the rotating border (add to global CSS) */}
<style>{`
  .animate-spin-slow {
    animation: spin 60s linear infinite;
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`}</style>
      {/* --- TRUST TICKER --- */}
      {/* --- TRUST LOGO GRID --- */}
      {/* --- TRUST LOGO SLIDER (MARQUEE) --- */}
      <div className="py-16 bg-white border-b border-gray-100 overflow-hidden">
        {/* Inject Custom Animation Styles */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}</style>

        <Section>
          <div className="text-center mb-12">
             <span className="inline-block relative px-4">
                <span className="text-xs font-bold text-[#760015] uppercase tracking-[0.2em] relative z-10 bg-white px-4">
                  {BAAREZ_CONFIG.trust.label}
                </span>
                <div className="absolute top-1/2 left-0 w-full h-px bg-[#760015]/10 -z-0"></div>
             </span>
          </div>

          <div className="relative w-full overflow-hidden">
            {/* Gradient Fade Masks on Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Track */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {/* We duplicate the list 4 times to ensure seamless scrolling on wide screens */}
              {[...Array(4)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex items-center">
                  {BAAREZ_CONFIG.trust.logos.map((logo, i) => (
                    <div key={i} className="flex items-center">
                      
                      {/* Logo */}
                      <div className="px-12 group cursor-pointer">
                        <img 
                          src={logo.url} 
                          alt={logo.name} 
                          className="h-12 md:h-12 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" 
                        />
                      </div>

                      {/* The "Small Line" Separator */}
                      <div className="h-10 w-px bg-gray-100 transform rotate-12"></div>
                      
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
{/* --- PLATFORM TABS SECTION (RESPONSIVE) --- */}
<div className="py-16 md:py-24 bg-[#fdfbf9] relative">
  <Section>
    <div className="mb-12 md:mb-16 max-w-3xl">
      <FadeIn>
        <h2 className="text-[#ef7f25] font-bold uppercase tracking-[0.2em] mb-4 text-xs md:text-sm">Our Platform</h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2a2a] mb-4 md:mb-6">{BAAREZ_CONFIG.solutions.title}</h3>
        <p className="text-lg md:text-xl text-gray-500">{BAAREZ_CONFIG.solutions.subtitle}</p>
      </FadeIn>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Left: Tab Navigation */}
      {/* Mobile: Full width vertical list. Desktop: 4 columns wide. */}
      <div className="w-full lg:col-span-4 flex flex-col gap-3">
        {BAAREZ_CONFIG.solutions.tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`group w-full text-left p-4 md:p-5 transition-all duration-300 border-l-4 relative overflow-hidden rounded-r-lg ${
              activeTab === tab.id 
              ? 'bg-white border-[#760015] shadow-md z-10' 
              : 'bg-transparent border-gray-200 hover:bg-white hover:border-[#ef7f25]'
            }`}
          >
            <div className="flex items-center gap-4 relative z-10">
              <div className={`p-2 rounded-lg transition-colors ${activeTab === tab.id ? 'bg-[#760015] text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-[#ef7f25] group-hover:text-white'}`}>
                <tab.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-sm md:text-base font-bold transition-colors ${activeTab === tab.id ? 'text-[#760015]' : 'text-gray-500 group-hover:text-gray-900'}`}>
                  {tab.label}
                </h4>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Right: Tab Content */}
      {/* Mobile: Height auto to fit content. Desktop: Fixed 500px height preserved. */}
      <div className="w-full lg:col-span-8 h-auto lg:h-[500px]">
        <AnimatePresence mode="wait">
          {BAAREZ_CONFIG.solutions.tabs.map((tab) => (
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-xl border border-gray-100 h-full" 
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                  
                  {/* Text Content Side */}
                  <div className="flex flex-col justify-center h-full order-2 md:order-1">
                    <div className="mb-auto">
                      <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-[#ef7f25]/10 rounded-full flex items-center justify-center text-[#ef7f25]">
                              <tab.icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-[#2d2a2a]">{tab.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                        {tab.desc}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        {tab.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2.5">
                            <Icons.CheckCircle className="w-4 h-4 text-[#760015] shrink-0" />
                            <span className="font-medium text-gray-700 text-sm">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Button to={tab.link} variant="secondary" className="text-xs px-5 py-3 h-auto uppercase tracking-wider font-bold w-full md:w-auto">
                        Explore {tab.label}
                      </Button>
                    </div>
                  </div>

                  {/* Image Content Side */}
                  {/* Mobile: Fixed height (h-56) to prevent collapse. Desktop: Full height. */}
                  <div className="relative rounded-lg overflow-hidden w-full h-56 md:h-full min-h-[200px] shadow-inner order-1 md:order-2">
                    <div className="absolute inset-0 bg-[#760015]/10 z-10 mix-blend-multiply"></div>
                    <img 
                      src={tab.image} 
                      alt={tab.label} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  </Section>
</div>

{/* --- SERVICES SECTION: "THE EXECUTIVE DOSSIER" (RESPONSIVE) --- */}
<div className="py-16 md:py-24 bg-white relative overflow-hidden" id="services">
  <Section>
    
    {/* Section Header */}
    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
      <div>
        <h2 className="text-[#ef7f25] font-bold uppercase tracking-[0.2em] mb-2 text-xs">
          {BAAREZ_CONFIG.services.title}
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-[#2d2a2a]">
          Strategic Capabilities.
        </h3>
      </div>
      <div className="hidden md:block h-[1px] bg-gray-200 flex-1 mx-8 mb-2"></div>
      <div className="text-right">
        <span className="text-[#760015] font-mono font-bold text-lg">06</span>
        <span className="text-gray-400 text-xs uppercase tracking-wider ml-2">Core Modules</span>
      </div>
    </div>

    {/* THE DOSSIER INTERFACE */}
    {/* Mobile: h-auto (grows with content). Desktop: Fixed h-[550px] preserved. */}
    <div className="flex flex-col lg:flex-row-reverse h-auto lg:h-[550px] border border-gray-200 rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 bg-[#fdfbf9]">
      
      {/* RIGHT PANEL: Navigation */}
      {/* Mobile: w-full. Desktop: Fixed w-[350px]. */}
      <div className="w-full lg:w-[350px] flex flex-col bg-white border-b lg:border-b-0 lg:border-l border-gray-200 overflow-y-auto custom-scrollbar lg:h-full max-h-[300px] lg:max-h-full">
        {BAAREZ_CONFIG.services.tabs.map((service, index) => {
          const isActive = activeService === index;
          const IconComponent = service.icon || Icons.Default;

          return (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              // Mobile: Compact padding. Desktop: Spacious padding.
              className={`relative p-4 md:p-6 text-left transition-all duration-300 group outline-none ${
                isActive ? 'bg-[#fdfbf9]' : 'hover:bg-gray-50'
              }`}
            >
              {/* Active Marker */}
              {isActive && (
                <motion.div 
                  layoutId="activeMarker"
                  // Mobile: Bottom marker. Desktop: Right marker.
                  className="absolute bottom-0 left-0 right-0 h-1 lg:h-auto lg:top-0 lg:bottom-0 lg:left-auto lg:right-0 lg:w-1 bg-[#760015]"
                />
              )}

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-mono font-bold transition-colors ${
                    isActive ? 'text-[#ef7f25]' : 'text-gray-300'
                  }`}>
                    0{index + 1}
                  </span>
                  <h4 className={`font-bold text-sm transition-colors ${
                    isActive ? 'text-[#2d2a2a]' : 'text-gray-500 group-hover:text-gray-800'
                  }`}>
                    {service.label}
                  </h4>
                </div>
                
                <IconComponent className={`w-4 h-4 transition-all duration-300 ${
                  isActive ? 'text-[#760015] opacity-100' : 'text-gray-300 opacity-0 -translate-x-2'
                }`} />
              </div>
            </button>
          )
        })}
      </div>

      {/* LEFT PANEL: Content Viewport */}
      {/* Mobile: Relative height. Desktop: Flex-1 relative. */}
      <div className="w-full lg:flex-1 relative overflow-hidden bg-[#fdfbf9] min-h-[500px] lg:min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            // Mobile: Relative (flows naturally), flex-col-reverse (Image Top).
            // Desktop: Absolute inset-0 (overlay), flex-row-reverse (Image Left).
            className="relative lg:absolute inset-0 flex flex-col-reverse lg:flex-row-reverse h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            
            {/* Background Number - Adjusted for mobile size */}
            <div className="absolute top-0 left-0 text-[120px] lg:text-[200px] font-bold text-[#760015]/5 select-none leading-none z-0 pointer-events-none">
              0{activeService + 1}
            </div>

            {/* Content Text */}
            <div className="p-8 md:p-12 w-full lg:w-1/2 flex flex-col justify-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-sm mb-6 text-[#760015]">
                    {(() => {
                      const IconComp = BAAREZ_CONFIG.services.tabs[activeService].icon || Icons.Default;
                      return <IconComp className="w-6 h-6" />;
                    })()}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#2d2a2a] mb-4 leading-tight">
                  {BAAREZ_CONFIG.services.tabs[activeService].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {BAAREZ_CONFIG.services.tabs[activeService].desc}
                </p>

                <ul className="space-y-3 mb-8">
                  {BAAREZ_CONFIG.services.tabs[activeService].features.map((feat, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex items-center gap-3 text-sm font-medium text-[#2d2a2a]"
                    >
                      <Icons.CheckCircle className="w-4 h-4 text-[#ef7f25]" />
                      {feat}
                    </motion.li>
                  ))}
                </ul>

                <Link 
                  to={BAAREZ_CONFIG.services.tabs[activeService].link}
                  className="inline-flex items-center gap-2 text-[#760015] font-bold uppercase tracking-widest text-xs border-b border-[#760015] pb-1 hover:text-[#ef7f25] hover:border-[#ef7f25] transition-colors"
                >
                  Explore Capabilities
                </Link>
              </motion.div>
            </div>

            {/* Image Area */}
            {/* Mobile: Fixed height (h-64). Desktop: Full height (h-full). */}
            <div className="w-full lg:w-1/2 relative h-64 lg:h-full overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gray-100 lg:rounded-tr-[80px] overflow-hidden border-r border-t border-white shadow-[20px_20px_60px_rgba(0,0,0,0.05)] z-10">
                <motion.img 
                  src={BAAREZ_CONFIG.services.tabs[activeService].image}
                  alt={BAAREZ_CONFIG.services.tabs[activeService].title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#760015]/40 to-transparent mix-blend-multiply"></div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  </Section>
</div>
      {/* --- METHODOLOGY (DARK SECTION) --- */}
     {/* --- METHODOLOGY (UNIFIED WORKFLOW STRIP) --- */}
      <div className="py-24 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
        <Section>
          <div className="max-w-6xl mx-auto">
            
            {/* Header - Centered & Minimal */}
            <div className="text-center mb-16">
               <FadeIn>
                  <h2 className="text-[#ef7f25] font-bold uppercase tracking-[0.2em] mb-3 text-xs">Our Process</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#760015] mb-4">
                    {BAAREZ_CONFIG.methodology.title}
                  </h3>
                  <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                    {BAAREZ_CONFIG.methodology.subtitle}
                  </p>
               </FadeIn>
            </div>

            {/* The Unified Strip Container */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  
                  {BAAREZ_CONFIG.methodology.steps.map((step, i) => (
                    <div key={i} className="group relative p-8 md:p-10 hover:bg-[#fdfbf9] transition-colors duration-500">
                       {/* Top Decorative Line */}
                       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#760015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                       
                       <div className="flex flex-col h-full">
                          {/* Header Part */}
                          <div className="flex items-start justify-between mb-6">
                             <div className="w-12 h-12 bg-[#ef7f25]/10 rounded-lg flex items-center justify-center text-[#ef7f25] group-hover:bg-[#760015] group-hover:text-white transition-all duration-300">
                                <step.icon className="w-6 h-6" />
                             </div>
                             <span className="text-4xl font-bold text-gray-100 group-hover:text-[#ef7f25]/20 transition-colors">
                                {step.num}
                             </span>
                          </div>

                          {/* Content Part */}
                          <div>
                             <h4 className="text-lg font-bold text-[#2d2a2a] mb-3 group-hover:text-[#760015] transition-colors">
                                {step.title}
                             </h4>
                             <p className="text-sm text-gray-500 leading-relaxed">
                                {step.desc}
                             </p>
                          </div>
                       </div>
                    </div>
                  ))}

                </div>
              </div>
            </FadeIn>

          </div>
        </Section>
      </div>

      {/* --- SOVEREIGN COMPLIANCE --- */}
     {/* --- DATA SOVEREIGNTY & COMPLIANCE (PANORAMIC LAYOUT) --- */}
<div className="py-24 bg-[#760015] text-white relative overflow-hidden">
  
  {/* Background Texture */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

  {/* Abstract Map Background */}
  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
      alt="Global Presence Map"
      className="w-[90%] h-auto invert brightness-0"
    />
  </div>

  <Section>
    <div className="relative z-10 flex flex-col items-center">

      {/* Header */}
      <div className="text-center max-w-4xl mb-16">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 mb-6">
            <SOVEREIGN_SECTION.badge.icon className="w-4 h-4 text-[#ef7f25]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#ef7f25]">
              {SOVEREIGN_SECTION.badge.label}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {SOVEREIGN_SECTION.headline.primary}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              {SOVEREIGN_SECTION.headline.highlight}
            </span>
          </h2>

          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            {SOVEREIGN_SECTION.description}
          </p>
        </FadeIn>
      </div>

      {/* Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SOVEREIGN_SECTION.cards.map((card, i) => {
          const IconComponent = card.icon
          return (
            <FadeIn key={i} delay={0.2 + i * 0.1} className="h-full">
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
                <div className="w-12 h-12 bg-[#ef7f25]/20 rounded-lg flex items-center justify-center text-[#ef7f25] mb-6 group-hover:bg-[#ef7f25] group-hover:text-white transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </FadeIn>
          )
        })}
      </div>

    </div>
  </Section>
</div>


      {/* --- INDUSTRIES CARDS --- */}
      <div className="py-32 bg-gray-50">
        <Section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-[#ef7f25] font-bold uppercase tracking-[0.2em] mb-4 text-sm">Industries</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#2d2a2a]">{BAAREZ_CONFIG.industries.title}</h3>
            </div>
            <Link to="/about" className="group flex items-center gap-2 text-[#760015] font-bold mt-6 md:mt-0">
               View All Case Studies 
               <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BAAREZ_CONFIG.industries.cards.map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative h-[450px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-lg">
                  <div className="absolute inset-0 bg-gray-900">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#760015] via-transparent to-transparent opacity-90"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                    <div className="w-14 h-14 bg-[#ef7f25] text-white flex items-center justify-center mb-6 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                      <card.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                    <div className="h-0.5 w-0 bg-white group-hover:w-full transition-all duration-700"></div>
                    <p className="text-white/80 text-sm mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      Explore specialized solutions for {card.title} sectors.
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      </div>

{/* --- INTEGRATION NEXUS (RESPONSIVE) --- */}
<div className="py-16 md:py-24 lg:py-32 bg-[#fdfbf9] relative overflow-hidden">
  <Section>
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
      
      {/* Text Side */}
      <div className="w-full lg:w-1/2">
        <FadeIn>
          <h2 className="text-[#ef7f25] font-bold uppercase tracking-[0.2em] mb-4 text-xs md:text-sm">
            Enterprise Connectivity
          </h2>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2a2a] mb-6 leading-tight">
            Built to Fit Your Existing Enterprise Stack
          </h3>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Baarez integrates seamlessly with the systems you already trust—enabling unified governance,
            risk intelligence, and compliance workflows without disrupting business operations.
          </p>

          <div className="mt-8 md:mt-10 p-6 bg-white border-l-4 border-[#760015] shadow-lg rounded-r-lg">
            <div className="flex items-center gap-4">
              <Icons.Cloud className="w-8 h-8 text-[#760015] shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm md:text-base">
                  Enterprise-Ready Integration Model
                </h4>
                <p className="text-xs md:text-sm text-gray-500">
                  Connect once. Govern consistently across platforms.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Visual Side: The Aligned Neural Orbit */}
      {/* Adjusted height for mobile to fit scaled content */}
      <div className="w-full lg:w-1/2 h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center relative overflow-hidden lg:overflow-visible">
        
        {/* Container for the Orbit System */}
        {/* Mobile: Scale down to 0.65 to fit 450px circle in small screens. Tablet: 0.8. Desktop: 1.0 */}
        <div className="relative w-[450px] h-[450px] flex items-center justify-center scale-[0.65] md:scale-[0.8] lg:scale-100 origin-center transition-transform duration-500">
          
          {/* Central Hub */}
          <div className="absolute z-20 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#760015]">
            <Icons.Chip className="w-10 h-10 text-[#760015]" />
          </div>

          {/* Orbit Ring (Visual Guide) */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200 animate-[spin_60s_linear_infinite] opacity-60"></div>
          <div className="absolute inset-24 rounded-full border border-gray-100 opacity-50"></div>

          {/* Nodes & Lines */}
          {BAAREZ_CONFIG.integrations.nodes.map((label, i) => {
            const totalNodes = BAAREZ_CONFIG.integrations.nodes.length
            const angle = i * (360 / totalNodes)
            const radius = 225

            return (
              <div key={i} className="absolute top-1/2 left-1/2 w-0 h-0">
                
                {/* Connection Line */}
                <motion.div
                  className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-[#760015] to-transparent origin-left opacity-30"
                  style={{
                    width: radius,
                    rotate: angle,
                    y: "-50%"
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }} // Triggers when in viewport
                  viewport={{ once: true, margin: "-100px" }} // Won't reset, triggers slightly before full view
                  transition={{ duration: 0.8, delay: 0.1 + (i * 0.05) }}
                />

                {/* Orbiting Node */}
                <motion.div
                  className="absolute flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg border border-gray-100 z-10 text-xs font-bold text-gray-600 text-center px-2"
                  style={{
                    x: Math.cos(angle * (Math.PI / 180)) * radius,
                    y: Math.sin(angle * (Math.PI / 180)) * radius
                  }}
                  // 1. Initial State (Hidden & Uncentered)
                  initial={{ 
                    scale: 0, 
                    marginLeft: 0, 
                    marginTop: 0 
                  }}
                  // 2. Target State (Visible & Centered) - moved to whileInView
                  whileInView={{
                    scale: 1,
                    marginLeft: "-2.5rem", // Centers the 5rem width
                    marginTop: "-2.5rem"   // Centers the 5rem height
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: 0.3 + (i * 0.1), // Staggered delay
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                >
                  {label}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  </Section>
</div>


      {/* ==========================================================
          NEW CREATIVE SECTION 2: HIGH CONTRAST IMPACT (ROI)
          Dark section focusing purely on numbers and results.
         ========================================================== */}
     {/* --- IMPACT SECTION (COMPACT & LIGHT) --- */}
      {/* --- IMPACT SECTION (COMPACT & LIGHT) --- */}
<div className="py-16 bg-[#fdfbf9] border-y border-gray-100">
  <Section>
    <div className="grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Text Content */}
        <div className="lg:col-span-4">
          <FadeIn>
            <div className="w-12 h-12 bg-[#ef7f25]/10 rounded-xl flex items-center justify-center text-[#ef7f25] mb-4">
              <Icons.TrendingUp className="w-6 h-6" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#760015]">
              Measurable Enterprise Impact
            </h2>

            <p className="text-gray-500 text-base leading-relaxed">
              Organizations partner with Baarez to move faster, operate with confidence, 
              and convert governance and risk management into a source of strategic advantage.
            </p>
          </FadeIn>
        </div>

        {/* Right: Stat Cards Grid */}
        <div className="lg:col-span-8">
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { val: "60%", desc: "Reduction in manual compliance effort" },
              { val: "3–5x", desc: "Faster audit and reporting cycles" },
              { val: "99.9%", desc: "Operational availability across platforms" },
              { val: "Weeks", desc: "Time to value instead of months" }
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:border-[#ef7f25]/30 transition-all duration-300 group relative overflow-hidden">
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[#760015]/5 rounded-bl-full -mr-6 -mt-6 group-hover:bg-[#ef7f25]/10 transition-colors"></div>
                  
                  <div className="text-4xl font-bold text-[#760015] mb-2 relative z-10 font-mono tracking-tighter">
                    {stat.val}
                  </div>

                  <div className="h-1 w-8 bg-[#ef7f25] mb-3 rounded-full"></div>

                  <p className="text-gray-600 font-medium text-xs uppercase tracking-wide relative z-10">
                    {stat.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

    </div>
  </Section>
</div>

    




      {/* --- FINAL CTA --- */}
      {/* --- MINIMALIST CTA CARD --- */}
      <div className="py-20 bg-white border-t border-gray-50 relative">
        <Section>
          <FadeIn>
            {/* Card Container */}
            <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:border-[#760015]/20 transition-colors duration-500">
              
              {/* Stylish Brand Accent (Left Vertical Line) */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#760015]"></div>
              
              {/* Subtle Ambient Glow (Decorative) */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ef7f25]/5 to-transparent rounded-full blur-[60px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

              {/* Text Content */}
              <div className="relative z-10 text-center md:text-left">
                <h2 className="text-3xl font-bold text-[#2d2a2a] mb-2 tracking-tight">
                  {BAAREZ_CONFIG.cta.headline}
                </h2>
                <p className="text-gray-500 text-lg font-light max-w-lg leading-relaxed">
                  {BAAREZ_CONFIG.cta.subheadline}
                </p>
              </div>

              {/* Actions (Minimal Buttons - No Zoom) */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
                 <Link 
                    to="/contact" 
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#760015] text-white font-semibold rounded text-center hover:bg-[#5a0010] transition-colors shadow-lg shadow-[#760015]/20"
                 >
                   {BAAREZ_CONFIG.cta.button}
                 </Link>
                 <Link 
                    to="/contact" 
                    className="w-full sm:w-auto px-6 py-3.5 text-[#760015] font-semibold text-center hover:bg-gray-50 rounded transition-colors"
                 >
                   Talk to Sales
                 </Link>
              </div>

            </div>
          </FadeIn>
        </Section>
      </div>

      {/* --- REVIEW TRUST DASHBOARD (MINIMAL & MERGED) --- */}
      <div className="py-16 bg-gray-50 border-t border-gray-200">
         <Section>
            <FadeIn>
               <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                  
                  {/* Left: Text Context */}
                  <div className="text-center md:text-left md:w-1/3">
                     <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a2a] mb-2">Customer Reviews</h2>
                     <p className="text-gray-500 text-base leading-relaxed">
                        Trusted by government entities and global enterprises. Our partners don't just use Baarez; they rely on it.
                     </p>
                     <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <Icons.ShieldCheck className="w-4 h-4 text-green-600" />
                        <span>Verified Feedback</span>
                     </div>
                  </div>

                  {/* Right: The Data Card (Transparent/Merged) */}
                  <div className="flex-1 w-full flex flex-col sm:flex-row items-center justify-around gap-8 pl-0 md:pl-12">
                     
                     {/* Big Aggregate Score */}
                     <div className="text-center border-r-0 sm:border-r border-gray-200 sm:pr-12 w-full sm:w-auto">
                        <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-bold">Average Rating</div>
                        <div className="text-5xl font-bold text-[#760015] mb-1 tracking-tighter">4.9</div>
                        <div className="flex justify-center gap-1 text-[#ef7f25] mb-1">
                           {[...Array(5)].map((_, i) => (
                              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                           ))}
                        </div>
                        <div className="text-[10px] font-bold text-gray-400">out of 5.0</div>
                     </div>

                     {/* Review Count & Breakdown */}
                     <div className="flex flex-col gap-4 w-full sm:w-auto">
                        <div className="flex items-center justify-center sm:justify-start gap-4">
                           <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm text-lg font-bold text-gray-900">
                              31
                           </div>
                           <div className="text-left">
                              <div className="font-bold text-gray-900 text-sm">Total Reviews</div>
                              <div className="text-[10px] text-gray-500">Across all platforms</div>
                           </div>
                        </div>

                        {/* Mini Platform Bar */}
                        <div className="space-y-2 w-full max-w-xs mx-auto sm:mx-0">
                           <div className="flex items-center gap-3 text-xs">
                              <span className="font-bold text-gray-600 w-24 text-right sm:text-left">Reviewed on</span>
                              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                 <div className="h-full bg-[#760015] w-[98%]"></div>
                              </div>
                              <span className="font-bold text-[#760015]">5.0</span>
                           </div>
                           <div className="flex items-center gap-3 text-xs">
                              <span className="font-bold text-gray-600 w-24 text-right sm:text-left">Service Quality</span>
                              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                 <div className="h-full bg-[#ef7f25] w-[90%]"></div>
                              </div>
                              <span className="font-bold text-[#ef7f25]">4.5</span>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </FadeIn>
         </Section>
      </div>

    </div>
  )
}

export default Home