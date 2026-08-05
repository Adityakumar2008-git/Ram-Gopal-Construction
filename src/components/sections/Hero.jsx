import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { COMPANY_INFO } from '../../constants/companyInfo';

export function Hero() {
  const handlePhoneClick = () => {
    window.location.href = `tel:${COMPANY_INFO.contact.rawPhone}`;
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  const stats = [
    { value: '50+', label: 'Completed Builds' },
    { value: '150+', label: 'Happy Clients' },
    { value: '1000+', label: 'Marble & Tile (Sq.Ft.)' },
    { value: '100+', label: 'Property Deals' }
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-slate-900 hero-container">
      {/* Crisp, Bright Hero Background Image (No Dark Overlay Tint) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url('/hero-bg.png')` }}
      />
      
      {/* Light subtle gradient ONLY behind text on the left for maximum readability */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-transparent pointer-events-none" />

      {/* Main Hero Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 w-full flex-1 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6 bg-slate-950/60 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        >
          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-md">
            Building Trust.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B800] via-[#FFD700] to-[#F5B800] drop-shadow-md">Crafting Quality.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-100 font-medium leading-relaxed max-w-2xl drop-shadow-sm">
            Building trust, premium, minimal, professional construction, renovation, interior design, marble work, and property solutions across Delhi NCR.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 hero-buttons-container">
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToContact}
              icon={ArrowRight}
              iconPosition="right"
            >
              Contact Now
            </Button>

            <Button
              variant="heroOutline"
              size="lg"
              onClick={handlePhoneClick}
              icon={Phone}
            >
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Animated Counter Banner at bottom of Hero */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0F172A]/85 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:border-[#F5B800]/40 transition-colors"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-x-0 sm:divide-x divide-slate-800">
            {stats.map((st, idx) => (
              <div key={idx} className="space-y-1.5 px-2">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F5B800] to-amber-300 tracking-tight">
                  {st.value}
                </p>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
