import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Tag, ShieldAlert, ArrowRight, Home } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { PROPERTIES_DATA } from '../../data/propertiesData';
import { COMPANY_INFO } from '../../constants/companyInfo';

export function PropertyCataloguePreview() {
  const [tab, setTab] = useState('sale');

  const properties = tab === 'sale' ? PROPERTIES_DATA.forSale : PROPERTIES_DATA.forRent;

  const handlePhoneClick = (title) => {
    window.location.href = `tel:${COMPANY_INFO.contact.rawPhone}`;
  };

  const handleWhatsAppClick = (title) => {
    const msg = encodeURIComponent(`Hello Ram Gopal Constructions! I visited your website and would like to receive the property catalogue & details for: ${title}`);
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <section className="py-20 bg-white" id="properties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Property Consultation & Dealings"
          title="Properties We Deal In"
          subtitle="Explore sample property types handled across Faridabad and Delhi NCR. Contact us for real-time inventory and personalized consultation."
        />

        {/* Clear Static Disclaimer Alert Box */}
        <div className="max-w-3xl mx-auto mb-10 p-4 bg-amber-500/10 border-l-4 border-[#F4B400] rounded-r-xl flex items-start gap-3 text-slate-800 text-xs sm:text-sm">
          <ShieldAlert className="w-5 h-5 text-[#F4B400] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-[#1F2937]">Note to Prospective Buyers & Tenants:</p>
            <p className="text-slate-600">
              This catalogue displays representative sample property types handled by Ram Gopal Constructions. Please contact our team directly for current availability, live pricing, and verified site visits.
            </p>
          </div>
        </div>

        {/* Sale / Rent Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-2 border border-gray-200">
            <button
              onClick={() => setTab('sale')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                tab === 'sale'
                  ? 'bg-[#1F2937] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Properties for Sale
            </button>

            <button
              onClick={() => setTab('rent')}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                tab === 'rent'
                  ? 'bg-[#1F2937] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Properties for Rent
            </button>
          </div>
        </div>

        {/* Properties Cards Grid */}
        <div className="mobile-swipe-scroll md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {properties.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="h-full mobile-card-interactive"
            >
              <Card className="h-full flex flex-col justify-between p-0 overflow-hidden group">
                <div>
                  {/* Property Image Header */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900 flex-shrink-0">
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-[#F4B400] text-slate-950 text-xs font-bold px-3 py-1 rounded-md shadow-md">
                      {prop.purpose}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-slate-950/80 text-white text-xs font-semibold px-3 py-1 rounded-md backdrop-blur-xs">
                      {prop.type}
                    </div>
                  </div>

                  {/* Property Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#F4B400] font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{prop.location}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1F2937] leading-snug group-hover:text-[#F4B400] transition-colors">
                      {prop.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {prop.description}
                    </p>

                    <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <span className="text-slate-400 block text-[10px] font-medium uppercase">Price / Rent</span>
                        <span className="font-bold text-[#1F2937]">{prop.priceRange}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <span className="text-slate-400 block text-[10px] font-medium uppercase">Built-up Area</span>
                        <span className="font-bold text-[#1F2937]">{prop.area}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-2 border-t border-gray-100 mt-2">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={Phone}
                    onClick={() => handlePhoneClick(prop.title)}
                  >
                    Call
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={MessageCircle}
                    onClick={() => handleWhatsAppClick(prop.title)}
                  >
                    WhatsApp
                  </Button>
                </div>

              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Contact CTA Box */}
        <div className="mt-14 p-8 bg-[#1F2937] text-white rounded-2xl border-t-4 border-[#F4B400] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Didn't find the exact property location you are searching for?
            </h3>
            <p className="text-slate-300 text-sm">
              Contact Ram Gopal Constructions today for personalized property buying, selling, or rental assistance across Delhi NCR.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <Button variant="primary" icon={Phone} onClick={() => handlePhoneClick('Custom Requirement')}>
              Call Now
            </Button>
            <Button variant="outlineYellow" icon={MessageCircle} onClick={() => handleWhatsAppClick('Custom Requirement')}>
              WhatsApp Us
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
