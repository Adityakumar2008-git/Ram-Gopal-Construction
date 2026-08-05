import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, DollarSign, Clock, Users, HeartHandshake, Layers, MapPin } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export function WhyChooseUs() {
  const pillars = [
    {
      title: "Professional Workmanship",
      desc: "Skilled civil engineers and craftsmen ensuring precision and structural integrity in every build.",
      icon: Shield
    },
    {
      title: "Quality Materials",
      desc: "Top-grade cement, tested TMT steel, and certified tiles used exclusively for our projects.",
      icon: Award
    },
    {
      title: "Transparent Pricing",
      desc: "Clear detailed bill of quantities (BOQ) with zero hidden fees or unexpected costs.",
      icon: DollarSign
    },
    {
      title: "Timely Delivery",
      desc: "Disciplined project scheduling ensuring milestones are completed on time.",
      icon: Clock
    },
    {
      title: "Experienced Workforce",
      desc: "Hands-on construction and interior experts committed to safety and craft perfection.",
      icon: Users
    },
    {
      title: "Customer Satisfaction",
      desc: "Long-term relationships built on honest communication, quality, and post-handover support.",
      icon: HeartHandshake
    },
    {
      title: "End-to-End Support",
      desc: "Complete project management from preliminary estimation to final key handover.",
      icon: Layers
    },
    {
      title: "Delhi NCR Coverage",
      desc: "Seamless operations across Faridabad, Gurugram, Noida, Delhi, and Greater Noida.",
      icon: MapPin
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Why Customers Trust Us"
          title="Built on Reliability, Quality & Transparency"
          subtitle="We combine engineering excellence with customer-first values to deliver properties that last generations."
        />

        <div className="mobile-swipe-scroll sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-[#F8F9FA] p-6 rounded-2xl border border-gray-200/80 hover:border-[#F4B400] transition-all duration-300 hover:shadow-lg group flex flex-col justify-between h-full mobile-card-interactive shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#1F2937] shadow-xs flex items-center justify-center mb-4 group-hover:bg-[#F4B400] transition-colors">
                  <IconComp className="w-6 h-6 text-[#1F2937]" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#F4B400] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
