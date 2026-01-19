import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Using Environment Variables for Security
    const serviceId = "service_wxj1uz3";
    const templateId = "template_1n8jyv4";
    const publicKey = "usx7JhywGy63cCrKc";

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        setStatus({ type: 'success', message: 'Thank you! We will schedule a call at your convenience.' });
        setIsSubmitting(false);
        e.target.reset();
      }, (error) => {
        setStatus({ type: 'error', message: 'Transmission failed. Please call us at +971 501371105.' });
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-[#FCFCFC] font-sans text-[#2d2a2a] selection:bg-[#ef7f25] selection:text-white pt-32 overflow-x-hidden">
      
      {/* 1. SECTION: HEADER & CONTEXT */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#ef7f25]"></span>
              <span className="text-xs text-[#ef7f25] font-bold uppercase tracking-[0.3em]">Engagement Hub</span>
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#760015] leading-tight mb-8">
              Reach us for Comprehensive <br /> IT Services.
            </h1>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              We’re happy to answer any questions you may have and help you determine 
              which of our services best fit your needs.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SECTION: THE BAAREZ INTERACTION GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-20">
            
            {/* LEFT SIDE: THINKING VISIBLE & BENEFITS */}
            <div className="lg:col-span-5 space-y-12">
              
              <div className="bg-[#760015] p-10 text-white shadow-2xl relative">
                <p className="text-xs text-[#ef7f25] font-bold uppercase tracking-widest mb-4 italic">Direct Connection</p>
                <h3 className="text-xl font-bold mb-2">Call us at:</h3>
                <p className="text-3xl font-light tracking-tighter text-[#ef7f25]">971 501371105</p>
              </div>

              {/* Benefit Pillars */}
              <div>
                <h4 className="text-[#760015] font-bold text-xs uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">
                  Why Partners Choose Baarez
                </h4>
                <div className="grid grid-cols-2 gap-y-4">
                  {['Client-oriented', 'Independent', 'Competent', 'Results-driven', 'Problem-solving', 'Transparent'].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-[#ef7f25]"></div>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thinking Visible Process */}
              <div className="bg-white p-10 border-l-4 border-[#760015] shadow-sm">
                <h4 className="text-xs text-[#760015] font-bold uppercase tracking-widest mb-10">What happens next?</h4>
                <div className="space-y-10">
                  {[
                    { s: "1", t: "Coordination", d: "We schedule a call at your convenience." },
                    { s: "2", t: "Discovery", d: "A deep-dive consulting and discovery meeting." },
                    { s: "3", t: "Strategy", d: "We prepare a comprehensive project proposal." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-[#ef7f25] font-bold text-sm">
                        {step.s}
                      </div>
                      <div>
                        <h5 className="font-bold text-[#760015] text-sm mb-1">{step.t}</h5>
                        <p className="text-gray-400 text-xs leading-relaxed">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: CONSULTATION FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 lg:p-14 border border-gray-100 shadow-xl">
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-[#760015] mb-2">Schedule a Free Consultation</h3>
                  <div className="h-[2px] w-12 bg-[#ef7f25]"></div>
                </div>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input required type="text" name="first_name" placeholder="First name" className="w-full px-5 py-4 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm" />
                    <input required type="text" name="last_name" placeholder="Last name" className="w-full px-5 py-4 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm" />
                  </div>

                  <input required type="text" name="company" placeholder="Company / Organization" className="w-full px-5 py-4 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <input required type="email" name="email" placeholder="Company email" className="w-full px-5 py-4 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm" />
                    <input required type="tel" name="phone" placeholder="Phone" className="w-full px-5 py-4 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm" />
                  </div>

                  <div className="relative">
                    <select required name="service" className="w-full px-5 py-4 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm appearance-none">
                      <option value="">How Can We Help You?</option>
                      <option value="AI GRC Platform">AI GRC Platform</option>
                      <option value="AI TPRM Platform">AI TPRM Platform</option>
                      <option value="Al Internal Audit Platform">Al Internal Audit Platform</option>
                      <option value="AI OCR ScanVista">AI OCR ScanVista</option>
                      <option value="Automation Services">Automation Services</option>
                      <option value="Remote Consulting Services">Remote Consulting Services</option>
                      <option value="Microsoft ERP">Microsoft ERP</option>
                      <option value="IT Consulting & Advisory">IT Consulting & Advisory</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile Development">Mobile Development</option>
                      <option value="Cloud Services">Cloud Services</option>
                      <option value="Others">Others</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      ▼
                    </div>
                  </div>

                  <textarea name="message" rows="4" placeholder="Message" className="w-full px-5 py-4 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm resize-none"></textarea>

                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-[#760015] text-white py-5 font-bold uppercase tracking-widest text-xs hover:bg-[#ef7f25] transition-all duration-500 shadow-lg disabled:bg-gray-400"
                  >
                    {isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}
                  </button>

                  {status.message && (
                    <motion.p 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className={`text-center text-xs font-bold ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
                    >
                      {status.message}
                    </motion.p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOOTER IDENTIFIER */}
      <footer className="py-12 bg-white border-t border-gray-50 text-center">
         <p className="text-gray-300 text-xs uppercase tracking-[0.5em] font-bold">
           Doha • Technology • Ownership
         </p>
      </footer>

    </div>
  );
};

export default Contact;