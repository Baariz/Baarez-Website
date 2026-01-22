import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs, { init } from '@emailjs/browser';

const ALL_COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", 
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
  "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
  "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", 
  "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea", "Kosovo", "Kuwait", "Kyrgyzstan", 
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", 
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", 
  "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
  "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", 
  "Yemen", "Zambia", "Zimbabwe", "Other"
];

const PartnerOnboard = () => {
  useEffect(() => {
    init("usx7JhywGy63cCrKc"); 
  }, []);

  const formRef = useRef();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  
  // Validation State
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    first_name: '', last_name: '', business_email: '', job_title: '',
    company_name: '', company_website: '', region: '', country: '',
    state_province: '', official_address: '', postal_code: '',
    desired_partnerships: [], relevant_solutions: [],
    industries_serviced: '', market_segments: '',
    number_of_employees: '', security_certifications: ''
  });

  // Helper state to manage the "Other" dropdown logic
  const [countrySelection, setCountrySelection] = useState("");

  // Handle Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      let updatedList = [...formData[name]];
      if (checked) updatedList.push(value);
      else updatedList = updatedList.filter((item) => item !== value);
      
      setFormData({ ...formData, [name]: updatedList });
      if (updatedList.length > 0) setErrors({ ...errors, [name]: '' });

    } else if (name === 'country_selector') {
      // Logic for Country Dropdown
      setCountrySelection(value);
      if (value !== 'Other') {
        setFormData({ ...formData, country: value });
        if (value) setErrors({ ...errors, country: '' });
      } else {
        setFormData({ ...formData, country: '' }); // Clear country so they have to type it
      }

    } else {
      setFormData({ ...formData, [name]: value });
      if (value.trim() !== '') setErrors({ ...errors, [name]: '' });
    }
  };

  // Validation
  const validateStep = (currentStep) => {
    let newErrors = {};
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    if (currentStep === 1) {
      if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
      if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
      if (!formData.job_title.trim()) newErrors.job_title = "Job title is required";
      if (!formData.business_email.trim()) {
        newErrors.business_email = "Email is required";
      } else if (!emailRegex.test(formData.business_email)) {
        newErrors.business_email = "Invalid email format";
      }
    }

    if (currentStep === 2) {
      if (!formData.company_name.trim()) newErrors.company_name = "Company name is required";
      if (!formData.company_website.trim()) {
        newErrors.company_website = "Website is required";
      } else if (!urlRegex.test(formData.company_website)) {
        newErrors.company_website = "Invalid URL format";
      }
      if (!formData.region) newErrors.region = "Region is required";
      
      // Strict Country Check
      if (!formData.country.trim()) {
        newErrors.country = countrySelection === 'Other' ? "Please type your country" : "Country is required";
      }

      if (!formData.official_address.trim()) newErrors.official_address = "Address is required";
      if (!formData.postal_code.trim()) newErrors.postal_code = "Postal code is required";
    }

    if (currentStep === 3) {
      if (formData.desired_partnerships.length === 0) newErrors.desired_partnerships = "Select at least one partnership";
      if (formData.relevant_solutions.length === 0) newErrors.relevant_solutions = "Select at least one solution";
      if (!formData.industries_serviced.trim()) newErrors.industries_serviced = "Industry details required";
      if (!formData.market_segments.trim()) newErrors.market_segments = "Market segment required";
      if (!formData.number_of_employees) newErrors.number_of_employees = "Employee count required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    // Add hidden inputs for arrays to form so EmailJS reads them
    const hiddenPartnerships = document.createElement("input");
    hiddenPartnerships.type = "hidden";
    hiddenPartnerships.name = "desired_partnerships_str";
    hiddenPartnerships.value = formData.desired_partnerships.join(", ");
    formRef.current.appendChild(hiddenPartnerships);

    const hiddenSolutions = document.createElement("input");
    hiddenSolutions.type = "hidden";
    hiddenSolutions.name = "relevant_solutions_str";
    hiddenSolutions.value = formData.relevant_solutions.join(", ");
    formRef.current.appendChild(hiddenSolutions);

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
      console.error("EmailJS Error:", error);
      setStatus({ type: 'error', message: 'Submission failed. Please try again later.' });
      setIsSubmitting(false);
    });
  };

  // --- Data Arrays ---
  const regions = ["NORAM", "EMEA", "LATAM", "APAC"];
  const partnershipTypes = ["Tech/Integration", "Resell", "Referral", "Managed Services", "Professional Services", "Implementation"];
  const solutionsList = ["OCR Solutions", "Governance, Risk and Compliance (GRC)", "Third-Party Management", "Tech Risk & Compliance", "AI Governance", "Internal Audit", "Microsoft Dynamics 365"];

  return (
    <div className="bg-[#FCFCFC] font-sans text-[#2d2a2a] pt-32 min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="bg-white py-16 border-b border-gray-100 print:hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <span className="text-xs text-[#ef7f25] font-bold uppercase tracking-[0.4em] mb-4 block">Partner Application</span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#760015] mb-6">Join the Baarez Ecosystem</h1>
            <p className="text-gray-500 text-sm max-w-3xl mx-auto leading-relaxed">
              Complete the form below to apply for our partner program. 
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
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-gray-100 shadow-xl p-8 md:p-12">
            
            <form ref={formRef} onSubmit={handleSubmit}>
              
                {/* STEP 1: CONTACT INFO */}
                <div className={step === 1 ? "block" : "hidden"}>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <h3 className="text-xl text-[#760015] font-bold border-b border-gray-50 pb-4">1. Contact Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name *</label>
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.first_name ? 'border-red-500' : 'border-gray-100'} focus:border-[#ef7f25] outline-none text-sm`} />
                        {errors.first_name && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.first_name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name *</label>
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.last_name ? 'border-red-500' : 'border-gray-100'} focus:border-[#ef7f25] outline-none text-sm`} />
                        {errors.last_name && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.last_name}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Business Email *</label>
                        <input type="email" name="business_email" value={formData.business_email} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.business_email ? 'border-red-500' : 'border-gray-100'} focus:border-[#ef7f25] outline-none text-sm`} />
                        {errors.business_email && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.business_email}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Job Role / Title *</label>
                        <input type="text" name="job_title" value={formData.job_title} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.job_title ? 'border-red-500' : 'border-gray-100'} focus:border-[#ef7f25] outline-none text-sm`} />
                        {errors.job_title && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.job_title}</p>}
                      </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <button type="button" onClick={handleNext} className="bg-[#760015] text-white px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#ef7f25] transition-all">Next</button>
                    </div>
                  </motion.div>
                </div>

                {/* STEP 2: COMPANY & LOCATION */}
                <div className={step === 2 ? "block" : "hidden"}>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <h3 className="text-xl text-[#760015] font-bold border-b border-gray-50 pb-4">2. Company & Location</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Company Name *</label>
                        <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.company_name ? 'border-red-500' : 'border-gray-100'} focus:border-[#ef7f25] outline-none text-sm`} />
                        {errors.company_name && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.company_name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Company Website *</label>
                        <input type="text" name="company_website" value={formData.company_website} onChange={handleChange} placeholder="baarez.com" className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.company_website ? 'border-red-500' : 'border-gray-100'} focus:border-[#ef7f25] outline-none text-sm`} />
                        {errors.company_website && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.company_website}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Region *</label>
                        <select name="region" value={formData.region} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.region ? 'border-red-500' : 'border-gray-100'} focus:border-[#ef7f25] outline-none text-sm`}>
                          <option value="">--Select Region--</option>
                          {regions.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                        {errors.region && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.region}</p>}
                    </div>

                    {/* COUNTRY SELECTION WITH OTHER LOGIC */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Country *</label>
                            
                            {/* The Hidden input holds the actual value sent to email */}
                            <input type="hidden" name="country" value={formData.country} />

                            <select name="country_selector" value={countrySelection} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.country ? 'border-red-500' : 'border-gray-100'} focus:border-[#ef7f25] outline-none text-sm`}>
                                <option value="">--Select--</option>
                                {ALL_COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                            
                            {/* "Other" Text Input */}
                            {countrySelection === 'Other' && (
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-2">
                                    <input 
                                        type="text" 
                                        name="country" 
                                        placeholder="Type your country name" 
                                        value={formData.country} 
                                        onChange={handleChange} 
                                        className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.country ? 'border-red-500' : 'border-gray-100'} focus:border-[#ef7f25] outline-none text-sm`}
                                    />
                                </motion.div>
                            )}
                            
                            {errors.country && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.country}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">State / Province</label>
                            <input type="text" name="state_province" value={formData.state_province} onChange={handleChange} className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Official Address *</label>
                        <textarea name="official_address" value={formData.official_address} onChange={handleChange} rows="2" className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.official_address ? 'border-red-500' : 'border-gray-100'} focus:border-[#ef7f25] outline-none text-sm resize-none`}></textarea>
                        {errors.official_address && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.official_address}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Postal Code / Zip Code *</label>
                        <input type="text" name="postal_code" value={formData.postal_code} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.postal_code ? 'border-red-500' : 'border-gray-100'} focus:border-[#ef7f25] outline-none text-sm`} />
                        {errors.postal_code && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.postal_code}</p>}
                    </div>

                    <div className="pt-6 flex justify-between">
                      <button type="button" onClick={prevStep} className="text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-[#760015]">Back</button>
                      <button type="button" onClick={handleNext} className="bg-[#760015] text-white px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#ef7f25] transition-all">Next</button>
                    </div>
                  </motion.div>
                </div>

                {/* STEP 3: BUSINESS DETAILS */}
                <div className={step === 3 ? "block" : "hidden"}>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                    <h3 className="text-xl text-[#760015] font-bold border-b border-gray-50 pb-4">3. Partnership Details</h3>
                    
                    {/* Desired Partnerships */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Desired Partnership(s) *</label>
                        <div className="grid md:grid-cols-2 gap-2">
                            {partnershipTypes.map((type) => (
                                <label key={type} className="flex items-center space-x-2 text-sm text-[#2d2a2a] cursor-pointer hover:bg-gray-50 p-2 rounded">
                                    <input 
                                      type="checkbox" 
                                      name="desired_partnerships" 
                                      value={type} 
                                      checked={formData.desired_partnerships.includes(type)}
                                      onChange={handleChange}
                                      className="accent-[#760015] w-4 h-4" 
                                    />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                        {errors.desired_partnerships && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.desired_partnerships}</p>}
                    </div>

                    {/* Relevant Solutions */}
                    <div className="space-y-3 pt-4 border-t border-gray-50">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Relevant Baarez Solutions *</label>
                        <div className="grid md:grid-cols-2 gap-2">
                            {solutionsList.map((sol) => (
                                <label key={sol} className="flex items-center space-x-2 text-sm text-[#2d2a2a] cursor-pointer hover:bg-gray-50 p-2 rounded">
                                    <input 
                                      type="checkbox" 
                                      name="relevant_solutions" 
                                      value={sol} 
                                      checked={formData.relevant_solutions.includes(sol)}
                                      onChange={handleChange}
                                      className="accent-[#760015] w-4 h-4" 
                                    />
                                    <span>{sol}</span>
                                </label>
                            ))}
                        </div>
                        {errors.relevant_solutions && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.relevant_solutions}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Industries Serviced *</label>
                            <input type="text" name="industries_serviced" value={formData.industries_serviced} onChange={handleChange} placeholder="e.g. Finance, Healthcare" className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.industries_serviced ? 'border-red-500' : 'border-gray-100'} focus:border-[#ef7f25] outline-none text-sm`} />
                            {errors.industries_serviced && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.industries_serviced}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Market Segments *</label>
                            <input type="text" name="market_segments" value={formData.market_segments} onChange={handleChange} placeholder="e.g. Enterprise, SMB" className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.market_segments ? 'border-red-500' : 'border-gray-100'} focus:border-[#ef7f25] outline-none text-sm`} />
                            {errors.market_segments && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.market_segments}</p>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Number of Employees *</label>
                            <select name="number_of_employees" value={formData.number_of_employees} onChange={handleChange} className={`w-full px-4 py-3 bg-[#fcfcfc] border ${errors.number_of_employees ? 'border-red-500' : 'border-gray-100'} focus:border-[#ef7f25] outline-none text-sm`}>
                                <option value="">--Select--</option>
                                <option value="1-50">1-50</option>
                                <option value="51-200">51-200</option>
                                <option value="201-500">201-500</option>
                                <option value="500+">500+</option>
                            </select>
                            {errors.number_of_employees && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.number_of_employees}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Security Certifications</label>
                            <input type="text" name="security_certifications" value={formData.security_certifications} onChange={handleChange} placeholder="e.g. ISO 27001, SOC 2" className="w-full px-4 py-3 bg-[#fcfcfc] border border-gray-100 focus:border-[#ef7f25] outline-none text-sm" />
                        </div>
                    </div>

                    <div className="pt-6 flex justify-between items-center">
                      <button type="button" onClick={prevStep} className="text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-[#760015]">Back</button>
                      <button type="submit" disabled={isSubmitting} className="bg-[#760015] text-white px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#ef7f25] transition-all disabled:bg-gray-400">
                        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* STEP 4: SUCCESS MESSAGE */}
                {step === 4 && (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10 space-y-6">
                    <div className="w-16 h-16 bg-[#fff5eb] text-[#ef7f25] rounded-full flex items-center justify-center mx-auto text-3xl">✓</div>
                    <h3 className="text-xl font-bold text-[#760015]">Application Submitted Successfully</h3>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you for applying to the Baarez Partner Program. Our team will review your details and contact you shortly.
                    </p>
                    <div className="flex justify-center pt-4">
                        <button type="button" onClick={() => window.location.href = '/'} className="text-[#ef7f25] text-xs underline font-bold uppercase tracking-wider">Return to Home</button>
                    </div>
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
      <footer className="py-12 bg-white border-t border-gray-50 text-center print:hidden">
        <p className="text-gray-300 text-xs uppercase tracking-[0.5em] font-bold italic">
          Transparency • Innovation • Partnership
        </p>
      </footer>

    </div>
  );
};

export default PartnerOnboard;