import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Client Feedback"
          title="What Our Clients Say"
          subtitle="Real reviews from home owners, commercial property buyers, and renovation clients in Delhi NCR."
        />

        <div className="mobile-swipe-scroll md:grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-4xl mx-auto">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="h-full mobile-card-interactive"
            >
              <Card className="h-full flex flex-col justify-between p-6 bg-[#F8F9FA] border-l-4 border-[#F4B400]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#F4B400]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F4B400]" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-slate-300" />
                  </div>

                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[#1F2937] text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role} • {t.location}</p>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
