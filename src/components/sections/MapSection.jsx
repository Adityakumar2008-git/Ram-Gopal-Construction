import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/companyInfo';

export function MapSection() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1F2937] text-white rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-4 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <MapPin className="w-6 h-6 text-[#F4B400]" />
                Find Our Office
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Visit Ram Gopal Constructions office in Faridabad or request an on-site visit anywhere in Delhi NCR.
              </p>
              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-200 space-y-1">
                <p className="font-bold text-white text-sm">{COMPANY_INFO.name}</p>
                <p>{COMPANY_INFO.address.full}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B400] hover:underline"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 relative min-h-[320px] bg-slate-800">
            <iframe
              title="Ram Gopal Constructions Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.123456789!2d77.3000!3d28.4500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce30000000000%3A0x0!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale opacity-85 hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
