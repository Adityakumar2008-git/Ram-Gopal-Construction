import React, { useEffect } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { ContactForm } from '../components/sections/ContactForm';
import { ShieldCheck, Target, Eye, Award, CheckCircle2, MapPin, UserCheck, Quote } from 'lucide-react';
import { COMPANY_INFO } from '../constants/companyInfo';

export function About() {
  useEffect(() => {
    document.title = "About Us | Ram Gopal Constructions - Construction & Property Solutions in Delhi NCR";
  }, []);

  const serviceAreas = [
    "Faridabad (Sector 15, Sector 16, Green Fields, Greater Faridabad, Lakkadpur)",
    "Gurugram (Golf Course Road, Sohna Road, DLF Phases)",
    "Noida & Greater Noida (Expressway, Sector 62, Sector 150)",
    "Delhi (South Delhi, East Delhi, Central Delhi)",
    "Ghaziabad & Nearby NCR Belts"
  ];

  return (
    <main className="bg-white">
      <PageHeader
        title="About Ram Gopal Constructions"
        subtitle="Delivering reliable construction, interior design, marble work, and property solutions across Delhi NCR."
        breadcrumb={[{ name: 'About Us' }]}
      />

      {/* Main Company Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] leading-tight">
                Committed to Quality Workmanship & Honest Pricing
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Ram Gopal Constructions is committed to delivering reliable construction and property solutions with professionalism and quality.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                From residential construction to commercial projects, building demolition, interior design, marble & tile installation, and property consultation, our team focuses on providing dependable services tailored to customer requirements.
              </p>

              <p className="text-slate-700 font-medium text-base border-l-4 border-[#F4B400] pl-4 py-2 bg-[#F8F9FA] rounded-r-xl">
                Although the company officially started in August 2025, our experience and dedication enable us to complete every project with care, transparency, and attention to detail.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/about-building-site.png"
                  alt="Ram Gopal Constructions Building Site"
                  className="w-full h-[450px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-[#1F2937] text-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block border-t-4 border-[#F4B400]">
                <p className="font-extrabold text-2xl text-[#F4B400]">Faridabad, HR</p>
                <p className="text-xs text-slate-300 mt-1">Operational Office serving Delhi NCR</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Director's Profile & Message Section */}
      <section className="py-20 bg-gradient-to-b from-[#F8F9FA] to-white border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Leadership"
            title="Director's Profile & Message"
            subtitle="Meet the leadership guiding Ram Gopal Constructions toward excellence and customer trust."
          />

          <div className="mt-12 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Director Photo */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative group max-w-sm w-full">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#F4B400] to-[#1F2937] rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-[#1F2937]">
                    <img
                      src="/ankit-pal.png"
                      alt="Ankit Pal - Director, Ram Gopal Constructions"
                      className="w-full h-[420px] object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1F2937] via-[#1F2937]/80 to-transparent p-6 text-white">
                      <h4 className="text-2xl font-bold text-white">Ankit Pal</h4>
                      <p className="text-[#F4B400] font-semibold text-sm tracking-wide">Founder & Director</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Director Info & Message */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] leading-snug">
                  "Delivering Trust, Structural Excellence & Honest Service across Delhi NCR."
                </h3>

                <p className="text-slate-600 text-base leading-relaxed">
                  Under the leadership of <strong>Ankit Pal</strong>, Ram Gopal Constructions operates with a core commitment to quality, transparency, and client satisfaction. Having built a solid reputation through dedicated individual service before formalizing under Ram Gopal Constructions in August 2025, Mr. Pal leads every project with hands-on oversight.
                </p>

                <p className="text-slate-600 text-base leading-relaxed">
                  Whether constructing custom homes, modernizing commercial properties, executing fine interior & tile work, or offering trusted property consultation, our director ensures that every client receives personal attention, honest pricing, and durable results.
                </p>

                {/* Director Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F9FA] border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-[#F4B400] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-[#1F2937]">Quality Control</h5>
                      <p className="text-xs text-slate-500">Personal supervision on material & execution standard.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F9FA] border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-[#F4B400] flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-[#1F2937]">Customer First Approach</h5>
                      <p className="text-xs text-slate-500">Transparent timelines and clear communication.</p>
                    </div>
                  </div>
                </div>

                {/* Signature / Title */}
                <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                  <div>
                    <span className="block text-xl font-bold text-[#1F2937]">Ankit Pal</span>
                    <span className="text-xs text-slate-500 font-medium">Director, Ram Gopal Constructions</span>
                  </div>
                  <Quote className="w-10 h-10 text-[#F4B400]/30" />
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 border-t-4 border-[#F4B400]">
              <div className="w-12 h-12 rounded-xl bg-[#F4B400]/20 text-slate-950 flex items-center justify-center">
                <Target className="w-6 h-6 text-[#1F2937]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937]">Our Mission</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To provide reliable construction and property solutions that combine quality workmanship, transparency, affordability, and customer satisfaction.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 border-t-4 border-[#1F2937]">
              <div className="w-12 h-12 rounded-xl bg-[#1F2937] text-white flex items-center justify-center">
                <Eye className="w-6 h-6 text-[#F4B400]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937]">Our Vision</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To become one of the most trusted construction and property solution providers across Delhi NCR.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Geographic Reach"
            title="Service Areas Across Delhi NCR"
            subtitle="We execute projects and provide property consultation throughout the National Capital Region."
          />

          <div className="bg-[#1F2937] text-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceAreas.map((area, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <MapPin className="w-5 h-5 text-[#F4B400] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ContactForm />
    </main>
  );
}

