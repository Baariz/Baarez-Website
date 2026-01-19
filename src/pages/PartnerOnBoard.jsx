import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs, { init } from '@emailjs/browser';

const PartnerOnboard = () => {
  // Initialize EmailJS with your Public Key
  useEffect(() => {
    init("usx7JhywGy63cCrKc");
  }, []);

  const formRef = useRef();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Using sendForm with the physical ref
    emailjs.sendForm(
      "service_juodf0k",
      "template_fjuiudn",
      formRef.current,
      "hbSmjgNJuGIGzSLrq"
    )
    .then(() => {
      setStatus({ type: 'success', message: 'Application submitted successfully.' });
      setIsSubmitting(false);
      setStep(4); 
    })
    .catch((error) => {
      console.error("EmailJS Error details:", error);
      setStatus({ type: 'error', message: 'Submission failed. Please try again later.' });
      setIsSubmitting(false);
    });
  };

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", 
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
    "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
    "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", 
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
    "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", 
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", 
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", 
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", 
    "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", 
    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", 
    "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", 
    "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
    "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", 
    "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", 
    "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", 
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", 
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
    "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", 
    "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", 
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", 
    "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", 
    "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", 
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  return (
    <div className="bg-[#FCFCFC] font-sans text-[#2d2a2a] pt-32 min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <span className="text-xs text-[#ef7f25] font-bold uppercase tracking-[0.4em] mb-4 block">Partner Program</span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#760015] mb-6">Partner with Baarez to Deliver AI-Native Governance</h1>
            <p className="text-gray-500 text-sm max-w-3xl mx-auto leading-relaxed mb-8">
              Regional integrators, global SIs, and specialist consultancies use Baarez to deliver AI-native GRC, TPRM, and audit solutions for regulated clients across MENA, Europe, and Asia.
            </p>

            {/* Partner Value Bullets */}
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-left mb-8">
              <div className="flex items-start gap-3">
                <span className="text-[#ef7f25] text-xl mt-1">•</span>
                <div>
                  <h4 className="text-sm font-bold text-[#2d2a2a] mb-1">Differentiated Offering</h4>
                  <p className="text-xs text-gray-500">Offer AI-native governance platforms to banks, government entities, and healthcare systems, backed by sovereign cloud and on-prem deployment options.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#ef7f25] text-xl mt-1">•</span>
                <div>
                  <h4 className="text-sm font-bold text-[#2d2a2a] mb-1">Enablement & Support</h4>
                  <p className="text-xs text-gray-500">Access enablement, implementation accelerators, and co-marketing support tailored for regulated environments.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#ef7f25] text-xl mt-1">•</span>
                <div>
                  <h4 className="text-sm font-bold text-[#2d2a2a] mb-1">Integration Ready</h4>
                  <p className="text-xs text-gray-500">Integrate Baarez platforms with SAP, Oracle, Microsoft, Salesforce, Workday, and ServiceNow to deliver end-to-end transformation.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
              Please provide accurate organizational details to begin the validation and onboarding process.
            </p>

          {/* PROGRESS BAR */}
          <div className="max-w-md mx-auto mt-12 flex items-center justify-between relative">
            <div className="absolute h-[1px] bg-gray-100 w-full top-1/2 -z-10"></div>
            {[1, 2, 3].map((num) => (
              <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${step >= num ? 'bg-[#760015] text-white' : 'bg-gray-100 text-gray-400'}`}>
                {num}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-gray-100 shadow-xl p-8 md:p-12">
            
            <form ref={formRef} onSubmit={handleSubmit}>
              
                {/* STEP 1: PARTNER TYPE & REGION */}
                <div className={step === 1 ? "block" : "hidden"}>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <h3 className="text-xl text-[#760015] font-bold border-b border-gray-50 pb-4">Primary Classification</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Partner Type *</label>
                        <select required name="partner_type" className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm appearance-none">
                          <option value="">--None--</option>
                          <option value="Reseller">Reseller</option>
                          <option value="Distributor">Distributor</option>
                          <option value="MSSP">Managed Security Services Provider (MSSP)</option>
                          <option value="MSP">Managed Service Provider (MSP)</option>
                          <option value="ISV">Independent Software Vendor (ISV)</option>
                          <option value="Consulting Partner">Consulting Partner</option>
                          <option value="CSP">Cloud Solution Provider (CSP)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Region *</label>
                        <select required name="region" className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm appearance-none">
                          <option value="">--Select Region--</option>
                          <option value="Middle East & Africa">Middle East & Africa (MEA)</option>
                          <option value="Asia-Pacific">Asia-Pacific (APAC)</option>
                          <option value="Europe">Europe</option>
                          <option value="North America">North America</option>
                          <option value="Latin America">Latin America (LATAM)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Country of Registration *</label>
                      <div className="relative">
                        <select required name="country" className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm appearance-none">
                          <option value="">--Select Country--</option>
                          {countries.map((c) => (<option key={c} value={c}>{c}</option>))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-[8px]">▼</div>
                      </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <button type="button" onClick={nextStep} className="bg-[#760015] text-white px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#ef7f25] transition-all">Next</button>
                    </div>
                  </motion.div>
                </div>

                {/* STEP 2: LEGAL & CAPACITY */}
                <div className={step === 2 ? "block" : "hidden"}>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <h3 className="text-xl text-[#760015] font-bold border-b border-gray-50 pb-4">Legal & Business Capacity</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Legal Name *</label>
                        <input required type="text" name="legal_name" className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Doing Business As (DBA) *</label>
                        <input required type="text" name="dba" className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Years in Business *</label>
                        <input required type="number" name="years_business" className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Workforce Count *</label>
                        <select required name="total_employees" className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm appearance-none">
                          <option value="">--None--</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="51-100">51-100</option>
                          <option value="101-500">101-500</option>
                          <option value="500+">500+</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-6 flex justify-between">
                      <button type="button" onClick={prevStep} className="text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-[#760015]">Back</button>
                      <button type="button" onClick={nextStep} className="bg-[#760015] text-white px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#ef7f25] transition-all">Next</button>
                    </div>
                  </motion.div>
                </div>

                {/* STEP 3: TECHNICAL & SALES TEAM */}
                <div className={step === 3 ? "block" : "hidden"}>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <h3 className="text-xl text-[#760015] font-bold border-b border-gray-50 pb-4">Professional Resources</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Technical Employees *</label>
                        <select required name="tech_employees" className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm appearance-none">
                          <option value="">--None--</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="50+">50+</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Sales Employees *</label>
                        <select required name="sales_employees" className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm appearance-none">
                          <option value="">--None--</option>
                          <option value="1-5">1-5</option>
                          <option value="6-10">6-10</option>
                          <option value="10+">10+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Brief Business Profile / URL *</label>
                      <textarea required name="profile" rows="4" className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm resize-none"></textarea>
                    </div>

                    <div className="pt-6 flex justify-between items-center">
                      <button type="button" onClick={prevStep} className="text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-[#760015]">Back</button>
                      <button type="submit" disabled={isSubmitting} className="bg-[#760015] text-white px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#ef7f25] transition-all disabled:bg-gray-400">
                        {isSubmitting ? 'Processing Application...' : 'Complete Onboarding'}
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* STEP 4: SUCCESS MESSAGE */}
                {step === 4 && (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10 space-y-6">
                    <div className="w-16 h-16 bg-[#fff5eb] text-[#ef7f25] rounded-full flex items-center justify-center mx-auto text-3xl">✓</div>
                    <h3 className="text-xl font-bold text-[#760015]">Application Received</h3>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you for your interest in partnering with Baarez Technology Solutions. 
                      Our team will reach out within 3-5 business days.
                    </p>
                    <button type="button" onClick={() => window.location.href = '/'} className="text-[#ef7f25] font-bold text-xs uppercase tracking-widest border-b border-[#ef7f25]">Return to Home</button>
                  </motion.div>
                )}

            </form>

            {status.message && step !== 4 && (
              <p className={`mt-6 text-center text-xs font-bold uppercase ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {status.message}
              </p>
            )}

          </div>
        </div>
      </section>

      {/* FOOTER NOTICE */}
      <footer className="py-12 bg-white border-t border-gray-50 text-center">
        <p className="text-gray-300 text-xs uppercase tracking-[0.5em] font-bold italic">
          Transparency • Innovation • Partnership
        </p>
      </footer>

    </div>
  );
};

export default PartnerOnboard;