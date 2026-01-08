import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, ChevronRight, ShieldCheck, Sparkles, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// --- CONFIGURATION START ---
// 1. BRAND CONFIG
const BRAND = {
  name: "Saarah",
  role: "Baarez AI Assistant",
  avatar: "./Saarah.jpg", // Replace with your image
  colors: {
    primary: "#760015",   // Baarez Maroon
    accent: "#ef7f25",    // Baarez Orange
    bg: "#F8FAFC"
  }
};

// 2. EMAILJS CONFIG
// Get these from your EmailJS Dashboard: https://dashboard.emailjs.com/
const EMAIL_CONFIG = {
  SERVICE_ID: "service_et7dxaq",   // e.g., 'service_x9s2k3'
  TEMPLATE_ID: "template_aid7iji", // e.g., 'template_8d7f3j'
  PUBLIC_KEY: "MZXZ3LhDPgFoyTNFJ"    // e.g., 'user_9s8d7f6g5h4j'
};
// --- CONFIGURATION END ---

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false); // New state for email loading
  
  // Logic State
  const [step, setStep] = useState(0); 
  const [inputValue, setInputValue] = useState('');
  const [formData, setFormData] = useState({ name: '', interest: '', email: '' });

  // Chat History
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `Hi, I’m ${BRAND.name} from Baarez Technology Solutions. May I know your name?`,
      sender: 'bot',
      type: 'text'
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  // Catalog Data
  const catalog = {
    solutions: [
      { id: 'ai-grc', label: 'AI GRC Platform', desc: 'AI GRC helps enterprises manage governance, risk, and compliance through a unified, AI-driven platform.' },
      { id: 'tprm', label: 'TPRM', desc: 'Automate third-party risk assessments and continuous monitoring to secure your supply chain.' },
      { id: 'audit', label: 'Internal Audit Automation', desc: 'Streamline audit lifecycles with AI-powered evidence collection and reporting.' },
      { id: 'scanvista', label: 'ScanVista (IDP)', desc: 'Intelligent Document Processing to extract and organize data from complex docs instantly.' },
      { id: 'raas', label: 'Robot as a Service (RPA)', desc: 'Deploy software robots to automate repetitive business tasks without infrastructure overhead.' },
      { id: 'glimmora', label: 'Glimmora', desc: 'A Hospitality Intelligence Platform designed to enhance guest experiences via data.' },
    ],
    services: [
      { id: 'consulting', label: 'Business Process Consulting', desc: 'Optimize your operational workflows with our expert process re-engineering.' },
      { id: 'dt', label: 'Digital Transformation', desc: 'End-to-end modernization of your legacy systems and digital strategy.' },
      { id: 'data', label: 'Data Analytics & AI', desc: 'Turn raw data into actionable business intelligence with advanced analytics.' },
      { id: 'erp', label: 'ERP Consulting', desc: 'Implementation and optimization of enterprise resource planning systems.' },
      { id: 'cyber', label: 'Cybersecurity & SOC', desc: '24/7 security operations and threat defense for your enterprise assets.' },
      { id: 'cloud', label: 'Cloud & Automation', desc: 'Scalable cloud architecture and DevOps automation services.' },
    ]
  };

  const addMessage = (text, sender = 'bot', delay = 600) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), text, sender }]);
      setIsTyping(false);
    }, delay);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const name = inputValue.trim();
    setFormData(prev => ({ ...prev, name }));
    setMessages(prev => [...prev, { id: Date.now(), text: name, sender: 'user' }]);
    setInputValue('');
    
    addMessage(`Nice to meet you, ${name}. What are you exploring today?`, 'bot', 800);
    setStep(1);
  };

  const handleOptionSelect = (item) => {
    const label = item.label || item;
    const desc = item.desc || "Our team can guide you through this specific requirement.";
    
    setFormData(prev => ({ ...prev, interest: label }));
    setMessages(prev => [...prev, { id: Date.now(), text: label, sender: 'user' }]);
    
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), text: desc, sender: 'bot' }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now() + 1, text: "Would you like to explore this further with our team?", sender: 'bot' }]);
        setIsTyping(false);
        setStep(2);
      }, 1000);
    }, 600);
  };

  const handleContextResponse = (response) => {
    setMessages(prev => [...prev, { id: Date.now(), text: response, sender: 'user' }]);

    if (response === 'Yes, talk to an expert') {
      addMessage("Excellent. May I have your work email so our team can share details?", 'bot', 800);
      setStep(3);
    } else {
      addMessage("No problem. Feel free to browse our website. Have a great day!", 'bot', 800);
      setStep(4);
    }
  };

  // --- EMAIL SENDING LOGIC ---
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || !inputValue.includes('@')) return;
    
    const email = inputValue.trim();
    const finalData = { ...formData, email };
    setFormData(finalData);
    setMessages(prev => [...prev, { id: Date.now(), text: email, sender: 'user' }]);
    setInputValue('');
    setIsSending(true);

    // Prepare template parameters
    const templateParams = {
      from_name: finalData.name,
      reply_to: finalData.email,
      interest: finalData.interest,
      message: `New Lead: ${finalData.name} is interested in ${finalData.interest}.`
    };

    emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSending(false);
      addMessage(`Thank you, ${finalData.name}. Our team has received your details and will reach out shortly.`, 'bot', 800);
      setStep(4);
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setIsSending(false);
      // Fallback message even if email fails, so user doesn't feel stuck
      addMessage("Thanks! We've noted your details. Our team will contact you soon.", 'bot', 800);
      setStep(4);
    });
  };

  const renderInputArea = () => {
    switch (step) {
      case 0: // Name
        return (
          <form onSubmit={handleNameSubmit} className="flex gap-2">
            <input
              autoFocus
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your name..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 transition-all"
              style={{ '--tw-ring-color': BRAND.colors.primary }} 
            />
            <button 
              type="submit" 
              disabled={!inputValue.trim()} 
              className="text-white p-2 rounded-lg transition-colors disabled:opacity-50 hover:opacity-90 shadow-sm"
              style={{ backgroundColor: BRAND.colors.accent }}
            >
              <ChevronRight size={20} />
            </button>
          </form>
        );

      case 1: // Intent Options
        return (
          <div className="flex flex-col gap-3 h-[220px] overflow-y-auto pr-1 custom-scrollbar">
            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1 sticky top-0 bg-white z-10 py-1">Solutions</p>
            <div className="grid grid-cols-1 gap-2">
              {catalog.solutions.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleOptionSelect(item)}
                  className="text-left px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm text-gray-700 hover:bg-orange-50 transition-all flex justify-between items-center group shadow-sm hover:border-orange-200"
                >
                  {item.label}
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: BRAND.colors.accent }}/>
                </button>
              ))}
            </div>
            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1 mt-2 sticky top-0 bg-white z-10 py-1">Services</p>
            <div className="grid grid-cols-1 gap-2">
              {catalog.services.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleOptionSelect(item)}
                  className="text-left px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm text-gray-700 hover:bg-orange-50 transition-all flex justify-between items-center group shadow-sm hover:border-orange-200"
                >
                  {item.label}
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: BRAND.colors.accent }}/>
                </button>
              ))}
            </div>
            <button onClick={() => handleOptionSelect({ label: "Not sure, need guidance" })} className="text-xs text-gray-400 mt-2 pb-2 hover:underline text-center">
              Not sure? I need guidance.
            </button>
          </div>
        );

      case 2: // Context
        return (
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleContextResponse('Yes, talk to an expert')}
              className="w-full py-3 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
              style={{ backgroundColor: BRAND.colors.accent }} 
            >
              <Sparkles size={16} />
              Yes, talk to an expert
            </button>
            <button
              onClick={() => handleContextResponse('Just browsing')}
              className="w-full py-3 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm hover:bg-gray-50 transition-colors"
            >
              Just browsing
            </button>
          </div>
        );

      case 3: // Email
        return (
          <form onSubmit={handleEmailSubmit} className="flex gap-2">
            <input
              autoFocus
              type="email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="name@company.com"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 transition-all"
              style={{ '--tw-ring-color': BRAND.colors.primary }}
            />
            <button 
              type="submit" 
              disabled={!inputValue.includes('@') || isSending} 
              className="text-white p-2 rounded-lg transition-colors disabled:opacity-50 hover:opacity-90 shadow-sm flex items-center justify-center"
              style={{ backgroundColor: BRAND.colors.accent }}
            >
              {isSending ? <Loader2 size={18} className="animate-spin"/> : <Send size={18} />}
            </button>
          </form>
        );

      case 4: // End
        return (
          <div className="text-center py-2">
            <p className="text-xs font-medium flex items-center justify-center gap-1" style={{ color: BRAND.colors.primary }}>
              <ShieldCheck size={14} /> session complete
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 font-sans antialiased">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[360px] h-[550px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-100 ring-1 ring-black/5"
            style={{ maxHeight: 'calc(100vh - 100px)' }}
          >
            <div className="p-4 flex justify-between items-center text-white shrink-0 shadow-md" 
                 style={{ backgroundColor: BRAND.colors.primary }}>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src={BRAND.avatar} 
                    alt={BRAND.name} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/20 shadow-sm"
                    onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Saarah&background=random"; }}
                  />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#760015] rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm tracking-wide">{BRAND.name}</h3>
                  <p className="text-[10px] text-white/80 uppercase tracking-wider">{BRAND.role}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={18} className="text-white/90" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-5 scroll-smooth" style={{ backgroundColor: BRAND.colors.bg }}>
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'text-white rounded-tr-none'
                        : 'bg-white text-slate-700 border border-gray-200/60 rounded-tl-none'
                    }`}
                    style={msg.sender === 'user' ? { backgroundColor: BRAND.colors.primary } : {}}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              {renderInputArea()}
              <div className="text-center mt-3">
                <p className="text-[10px] text-gray-300">Powered by Baarez Technology Solutions</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button with "Pulse/Ripple" Animation */}
      <motion.button
        layoutId="launcher"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        // Infinite subtle ripple effect using shadow
        animate={{ 
          boxShadow: [
            "0 0 0 0 rgba(118, 0, 21, 0.7)", 
            "0 0 0 10px rgba(118, 0, 21, 0)",
            "0 0 0 0 rgba(118, 0, 21, 0)"
          ]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatDelay: 1
        }}
        className="w-14 h-14 text-white rounded-full flex items-center justify-center transition-all relative"
        style={{ backgroundColor: BRAND.colors.primary }}
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
      </motion.button>
    </div>
  );
};

export default ChatBot;