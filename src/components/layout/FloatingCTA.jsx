import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/companyInfo';

export function FloatingCTA() {
  const handlePhoneClick = () => {
    window.location.href = `tel:${COMPANY_INFO.contact.rawPhone}`;
  };

  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent("Hello Ram Gopal Constructions! I visited your website and would like to receive your service catalogue & details for construction, interior, and property consultation.");
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Mobile Native Sticky Bottom Action Bar (< 640px) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-[#0F172A]/95 backdrop-blur-xl border-t border-slate-800 p-3 px-4 flex items-center justify-between gap-3 shadow-[0_-10px_25px_rgba(0,0,0,0.4)]">
        <button
          onClick={handlePhoneClick}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F4B400] text-slate-950 font-bold text-sm shadow-md active:scale-95 transition-transform cursor-pointer"
        >
          <Phone className="w-4 h-4 fill-slate-950" />
          <span>Call Now</span>
        </button>

        <button
          onClick={handleWhatsAppClick}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 text-white font-bold text-sm shadow-md active:scale-95 transition-transform cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </button>
      </div>

      {/* Desktop Floating Action Buttons (>= 640px) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        {/* WhatsApp Action Button */}
        <button
          onClick={handleWhatsAppClick}
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-15 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            WhatsApp Us
          </span>
        </button>

        {/* Phone Call Action Button */}
        <button
          onClick={handlePhoneClick}
          aria-label="Call Ram Gopal Constructions"
          className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#F4B400] text-slate-950 shadow-xl hover:bg-[#D9A000] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-15 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Call Now
          </span>
        </button>
      </div>
    </>
  );
}
