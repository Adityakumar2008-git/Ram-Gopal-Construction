import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { PROCESS_DATA } from '../../data/processData';

export function WorkProcess() {
  return (
    <section className="py-20 bg-[#F8F9FA]" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="How We Work"
          title="Our Structured 5-Step Process"
          subtitle="From initial consultation and site estimate to disciplined execution and final handover."
        />

        <div className="mobile-swipe-scroll sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch relative">
          {PROCESS_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between h-full mobile-card-interactive"
            >
              <div>
                {/* Step Number Circle */}
                <div className="w-12 h-12 rounded-xl bg-[#F4B400] text-slate-950 font-black text-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                  {item.step}
                </div>

                <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#F4B400] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed mb-3 font-medium">
                  {item.subtitle}
                </p>
              </div>

              <p className="text-slate-500 text-[11px] leading-normal pt-3 border-t border-gray-100">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
