import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ArrowRight, Building, Award } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export function AboutPreview() {
  const highlights = [
    "Residential & Commercial Construction",
    "Building Demolition & Dismantling",
    "Complete Interior Designing",
    "Marble & Tile Flooring Expertise",
    "Transparent Property Consultation",
    "Honest Pricing & Quality Workmanship"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/about-building-site.png" 
                alt="Ram Gopal Constructions Team Work" 
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#1F2937]/90 backdrop-blur-md rounded-xl border border-slate-700 text-white">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#F4B400] text-slate-950 rounded-lg">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Faridabad Headquarters</h4>
                    <p className="text-xs text-slate-300">Serving Faridabad & Delhi NCR</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge Floating */}
            <div className="absolute -top-5 -right-5 hidden sm:flex items-center gap-2 bg-[#F4B400] text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-lg border border-amber-300">
              <Award className="w-5 h-5" />
              <span className="text-xs uppercase tracking-wider">Quality Assured</span>
            </div>
          </motion.div>

          {/* Right Column: Text & Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <SectionHeading
              tag="About Company"
              title="Dedicated to Building Quality & Trust"
              subtitle="Ram Gopal Constructions is a Faridabad-based construction and property solutions company serving customers across Delhi NCR."
              align="left"
            />

            <p className="text-slate-600 text-base leading-relaxed">
              Officially established in August 2025, the company provides complete residential and commercial construction, renovation, interior designing, marble & tile installation, and property consultation services.
            </p>

            <p className="text-slate-700 font-medium text-base border-l-4 border-[#F4B400] pl-4 py-1 bg-amber-500/5 rounded-r-lg">
              Our focus is simple — quality workmanship, honest pricing, timely delivery, and long-term customer satisfaction.
            </p>

            {/* Feature Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#F4B400] flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link to="/about">
                <Button variant="primary" icon={ArrowRight} iconPosition="right">
                  Know More
                </Button>
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
