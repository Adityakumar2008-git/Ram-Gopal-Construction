import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/layout/PageHeader';
import { SERVICES_DATA } from '../data/servicesData';
import { ContactForm } from '../components/sections/ContactForm';
import { CheckCircle2, ArrowRight, Phone, MessageCircle, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { COMPANY_INFO } from '../constants/companyInfo';

export function Services() {
  const location = useLocation();

  useEffect(() => {
    // Handle anchor scrolling
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handlePhoneClick = (serviceTitle) => {
    window.location.href = `tel:${COMPANY_INFO.contact.rawPhone}`;
  };

  return (
    <main className="bg-white">
      <SEO
        title="Our Services | Ram Gopal Constructions - Construction, Interior, Marble & Property Solutions"
        description="Comprehensive construction and property services in Faridabad & Delhi NCR: Residential Construction, Commercial Building, Demolition, Modular Interiors, Marble & Tile Fitting, and Property Consultation."
        path="/services"
        keywords="Residential Construction Faridabad, Commercial Construction NCR, Demolition Services Faridabad, Modular Kitchen Designer, Italian Marble Flooring, Tile Installation, Property Consultation Faridabad"
      />
      <PageHeader

        title="Our Services"
        subtitle="End-to-end construction, renovation, modular interior design, marble & tile installation, and property consultation across Delhi NCR."
        breadcrumb={[{ name: 'Services' }]}
      />

      {/* Services Detailed List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 rounded-3xl border border-gray-200/80 shadow-sm ${
                  isEven ? 'bg-white' : 'bg-[#F8F9FA]'
                }`}
              >
                {/* Text Content */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4B400] text-slate-950">
                      {service.category}
                    </span>
                    {service.id === 'building-materials' && (
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        In-House Projects Only
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937]">
                    {service.title}
                  </h2>

                  <p className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-3">
                      Key Service Highlights & Deliverables:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-800 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#F4B400] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Material Policy Disclaimer Box if Material Service */}
                  {service.id === 'building-materials' && (
                    <div className="p-4 bg-amber-500/10 border-l-4 border-[#F4B400] rounded-r-xl text-xs text-slate-800 space-y-1">
                      <p className="font-bold text-[#1F2937]">Building Material Policy Note:</p>
                      <p>
                        Construction materials (cement, TMT steel, sand, bricks) are supplied strictly for construction projects undertaken by Ram Gopal Constructions and are not sold separately to third parties.
                      </p>
                    </div>
                  )}

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Button
                      variant="primary"
                      size="sm"
                      icon={Phone}
                      onClick={() => handlePhoneClick(service.title)}
                    >
                      Inquire for {service.title}
                    </Button>
                  </div>
                </div>

                {/* Service Image */}
                <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white h-80 sm:h-96">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
