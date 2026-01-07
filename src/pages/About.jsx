import React from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom'

const About = () => {
  const CHAIRMAN_IMAGE = "https://i.postimg.cc/RV4jTwd4/Hamad_Suwaid.webp"; 
  const CEO_IMAGE = "https://i.postimg.cc/ncp61qk6/1763550079714.jpg";

  return (
    <div className="bg-[#FCFCFC] font-sans text-[#2d2a2a] selection:bg-[#ef7f25] selection:text-white overflow-x-hidden">
      
      {/* 1. ARCHITECTURAL HERO (Identity Focus) */}
 <section className="relative pt-44 pb-32 border-b border-gray-100 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[#ef7f25] text-[10px] font-bold uppercase tracking-[0.5em]">Identity 01.</span>
          <div className="h-[1px] w-20 bg-[#ef7f25]"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#760015] leading-[1.1] tracking-tight mb-10">
          The Intelligence <br /> 
          Behind the <br /> 
          <span className="text-gray-300 italic">Enterprise.</span>
        </h1>
        <p className="text-gray-500 text-lg font-light leading-relaxed max-w-lg mb-10">
          Baarez Technology Solutions is not just a consultancy; we are an innovation house. 
          Since 2017, we have engineered trust through transparency, turning complex 
          infrastructure into streamlined intelligence.
        </p>

        {/* --- UPDATED MILESTONES --- */}
        {/* <div className="flex items-center gap-8">
          <div className="text-left">
             <p className="text-2xl font-bold text-[#760015]">100+</p>
             <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">AI Deployments</p>
          </div>
          <div className="w-[1px] h-10 bg-gray-200"></div>
          <div className="text-left">
             <p className="text-2xl font-bold text-[#760015]">98%</p>
             <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Client Trust</p>
          </div>
        </div> */}
        {/* ------------------------- */}
        
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative hidden lg:block"
      >
        <div className="aspect-[4/3] bg-[#760015] relative p-12 overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 p-8">
              <span className="text-white/20 text-9xl font-black">B.</span>
           </div>
           <div className="relative z-10 h-full flex flex-col justify-center">
              <h2 className="text-white text-3xl font-bold leading-tight mb-6">"We take ownership of each project we engage in."</h2>
              <p className="text-[#ef7f25] font-bold text-xs uppercase tracking-widest">Making Thinking Visible</p>
           </div>
        </div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-gray-100 -z-10"></div>
      </motion.div>
    </div>
  </div>
</section>

      {/* 2. OUR DNA: THE CORE PILLARS (The Approach) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-24 max-w-2xl">
            <h2 className="text-[#ef7f25] text-xs font-bold uppercase tracking-[0.3em] mb-4">The Baarez Way</h2>
            <h3 className="text-3xl font-bold text-[#760015]">Precision in execution, consistency in results.</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-gray-100">
            {[
              { title: "Strategic Persistence", desc: "Driven by 'Technology Freaks' who believe in relentless technical procurement and remarkable endeavors." },
              { title: "Transparency", desc: "Openness and honesty at every stage. We build solutions based on trust and dedicated determination." },
              { title: "Excellence", desc: "A constant aim for 100% client satisfaction, ensuring every project leaves a lasting legacy." }
            ].map((pillar, i) => (
              <div key={i} className="p-12 border-r border-gray-100 last:border-r-0 hover:bg-[#fafafa] transition-colors group">
                <span className="text-[#ef7f25] text-xs font-mono block mb-8">0{i+1} ———</span>
                <h4 className="text-xl font-bold text-[#760015] mb-6">{pillar.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CEO LEADERSHIP (Mr. Santosh Kharje - First) */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="w-full lg:w-5/12">
              <div className="relative">
                <img 
                  src={CEO_IMAGE} 
                  alt="Mr. Santosh Kharje" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-[30px_30px_0px_0px_rgba(118,0,21,1)]"
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <span className="text-[#ef7f25] text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Leadership / CEO</span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#760015] mb-8">Mr. Santosh Kharje</h3>
              <div className="space-y-8 text-gray-600 leading-relaxed font-light text-lg">
                <p>
                  "The success of Baarez lies deeply in our pillars of customer satisfaction practices; <strong>quality, cost, delivery</strong>. Customers are the heart of everything we do."
                </p>
                <p >
                  "We have consistently delivered world-beating projects that make our large competitors admire us. By building long-term relationships with customers and partners, we achieve high levels of success in meeting their unique needs."
                </p>
              </div>
              <div className="mt-12 flex items-center gap-6">
                 <div className="w-16 h-[1px] bg-[#760015]"></div>
                 <p className="text-xs font-bold text-[#760015] uppercase tracking-widest">CEO & Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHAIRMAN LEADERSHIP (Mr. Hamad Suwaid) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse gap-24 items-center">
            <div className="w-full lg:w-5/12">
              <div className="relative">
                <img 
                  src={CHAIRMAN_IMAGE} 
                  alt="Mr. Hamad Suwaid" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-[-30px_30px_0px_0px_rgba(239,127,37,1)]"
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <span className="text-[#ef7f25] text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Leadership / Chairman</span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#760015] mb-8">Mr. Hamad Suwaid</h3>
              <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
                <p>
                  "Baarez is a local innovative IT company that supports <strong>Qatar National Vision 2030</strong>. We help build a knowledge-based economy and a knowledgeable national workforce."
                </p>
                <p>
                  "I believe that technology, used properly, can drive corporate innovation and growth, and help government departments maximize their resources. We empower our team to deliver the best possible outcomes for each and every one of our partners."
                </p>
                <p className=" bg-[#fff5eb] p-6 border-l-4 border-[#ef7f25]">
                  "Technology without the support of knowledgeable, trained and professional IT staff, does not maximize the opportunities that technology can deliver."
                </p>
              </div>
              <div className="mt-12 flex items-center gap-6">
                 <div className="w-16 h-[1px] bg-[#760015]"></div>
                 <p className="text-xs font-bold text-[#760015] uppercase tracking-widest">Chairman & Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VISIBLE THINKING: THE VALUE SYSTEM */}
      <section className="py-32 bg-[#760015] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ef7f25] translate-x-3/4 opacity-10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[#ef7f25] text-xs font-bold uppercase tracking-[0.4em] mb-4">Our Ethical Framework</h2>
            <h3 className="text-3xl font-bold text-white">The Principles of Ownership</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {[
              { t: "Integrity", d: "Communicate openly. Be honest." },
              { t: "Satisfaction", d: "Be responsive. Deliver quality." },
              { t: "Teamwork", d: "Leads to exceptional output." },
              { t: "Consistency", d: "Consistent customer-first attitude." },
              { t: "Ownership", d: "Be empowered. Be decisive." }
            ].map((v, i) => (
              <div key={i} className="bg-[#760015] p-10 hover:bg-[#8a0019] transition-all group">
                <h4 className="text-[#ef7f25] font-bold text-lg mb-4 group-hover:scale-110 transition-transform origin-left">{v.t}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STRATEGIC GROWTH (New Section) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#760015] mb-10 leading-tight">
                Driving Excellence Across <br />Sector Boundaries.
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <span className="text-3xl font-black text-[#ef7f25] opacity-20">01</span>
                  <div>
                    <h5 className="font-bold text-[#760015] text-xl mb-2">Public Sector</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">Helping government departments maximize their resources and drive efficiency, effectiveness, and customer service through local innovation.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-3xl font-black text-[#ef7f25] opacity-20">02</span>
                  <div>
                    <h5 className="font-bold text-[#760015] text-xl mb-2">Private Sector</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">Acting as the preferred technology partner for distinguished private organizations to drive corporate growth and national sustainability.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fafafa] p-16 border border-gray-100 relative">
               <div className="mb-10">
                  <h4 className="text-[#ef7f25] font-bold text-xs uppercase tracking-widest mb-4">Corporate Vision</h4>
                  <p className="text-[#760015] text-2xl font-bold italic leading-relaxed">"To become the preferred technology partner for distinguished private and public sector organizations."</p>
               </div>
               <div className="w-20 h-[2px] bg-[#ef7f25]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#760015] mb-8">Looking forward for longer & stronger business relation.</h2>
          <p className="text-gray-500 text-lg font-light mb-12 italic">
            "Once again thank you for visiting the website and taking your time to read our thoughts."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#760015] text-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#ef7f25] transition-all shadow-xl">
             <Link to="/contact">Connect with our Experts</Link> 
            </button>
            <button className="border border-[#760015] text-[#760015] px-12 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-50 transition-all">
               <Link to="/services">View Our Services</Link> 
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;