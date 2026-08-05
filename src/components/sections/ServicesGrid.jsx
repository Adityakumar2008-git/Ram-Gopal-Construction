import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Building2, Hammer, Paintbrush, Grid, Key, Truck, ArrowRight, Check } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { SERVICES_DATA } from '../../data/servicesData';

const iconMap = {
  Home,
  Building2,
  Hammer,
  Paintbrush,
  Grid,
  Key,
  Truck
};

export function ServicesGrid({ limit }) {
  const displayServices = limit ? SERVICES_DATA.slice(0, limit) : SERVICES_DATA;

  return (
    <section className="py-20 bg-[#F8F9FA]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Comprehensive Offerings"
          title="Our Construction & Property Services"
          subtitle="From foundation civil engineering to turnkey interior fit-outs and property consultation across Delhi NCR."
        />

        <div className="mobile-swipe-scroll md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {displayServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Home;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="h-full mobile-card-interactive"
              >
                <Card className="h-full flex flex-col justify-between group p-6 hover:border-[#F4B400]/50 shadow-md">
                  <div className="space-y-4">
                    {/* Header with Icon and Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#F4B400]/15 text-[#1F2937] flex items-center justify-center group-hover:bg-[#F4B400] transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-slate-900" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                        {service.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#1F2937] group-hover:text-[#F4B400] transition-colors">
                      {service.title}
                    </h3>

                    {/* Subtitle / Short description */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.subtitle}
                    </p>

                    {/* Key Features List */}
                    <div className="pt-2 space-y-2 border-t border-gray-100">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#F4B400] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to={`/services#${service.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#1F2937] hover:text-[#F4B400] transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </Card>
              </motion.div>
            );
          })}
        </div>

        {limit && limit < SERVICES_DATA.length && (
          <div className="text-center mt-12">
            <Link to="/services">
              <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1F2937] text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-md">
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 text-[#F4B400]" />
              </button>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
