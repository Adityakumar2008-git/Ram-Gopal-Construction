import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Building2, Users, Home, MapPin } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contact-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/projects';
    }
  };

  return (
    <section className="relative min-h-[84vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#070D18]">
      {/* High-priority browser image preload */}
      <img
        src="/hero-sunset-bg.jpg"
        alt="Ram Gopal Constructions Hero Sunset Background"
        fetchpriority="high"
        loading="eager"
        className="hidden"
      />

      {/* Cinematic Sunset Construction Background with Subtle Parallax Zoom */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-700 pointer-events-none"
        style={{
          backgroundImage: "url('/hero-sunset-bg.jpg')",
          backgroundPosition: 'right 30% center'
        }}
      />

      {/* Multi-layer Cinematic Overlays */}
      {/* 1. Left Gradient (ensures 100% text readability while keeping crane & sunset bright on right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070D18]/95 via-[#070D18]/85 md:via-[#070D18]/65 to-transparent pointer-events-none" />

      {/* 2. Top Vignette */}
      <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#070D18]/80 to-transparent pointer-events-none" />

      {/* 3. Bottom Seamless Vignette to next section */}
      <div className="absolute inset-x-0 bottom-0 h-44 sm:h-56 bg-gradient-to-t from-[#070D18] via-[#070D18]/70 to-transparent pointer-events-none" />

      {/* 4. Subtle Architectural Blueprint & Schematic Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F4B400" strokeWidth="0.35" strokeDasharray="3 3" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
          {/* Subtle architectural schematic drafting lines */}
          <line x1="8%" y1="12%" x2="45%" y2="12%" stroke="#F4B400" strokeWidth="0.5" strokeDasharray="6 4" opacity="0.4" />
          <line x1="8%" y1="12%" x2="8%" y2="60%" stroke="#F4B400" strokeWidth="0.5" strokeDasharray="6 4" opacity="0.4" />
          <circle cx="8%" cy="12%" r="2.5" fill="#F4B400" opacity="0.6" />
          <circle cx="45%" cy="12%" r="2.5" fill="#F4B400" opacity="0.6" />
        </svg>
      </div>

      {/* Top HUD Row (Coordinates & Service Taxonomy on Desktop) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 w-full flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden lg:flex items-center gap-8 text-slate-300"
        >
          {/* Coordinates */}
          <div className="flex items-center gap-3">
            <span className="text-[#F4B400] text-sm font-mono">+</span>
            <div className="font-mono text-[11px] leading-tight tracking-wider text-slate-300">
              <div>28.6139° N</div>
              <div>77.2090° E</div>
            </div>
            <div className="h-7 w-[1px] bg-white/20 ml-2" />
          </div>

          {/* Service Taxonomy Stack */}
          <div className="flex flex-col items-start space-y-1 pl-1 text-[10px] tracking-[0.25em] font-semibold text-slate-300">
            <div className="w-5 h-[2px] bg-[#F4B400] mb-0.5" />
            <div>CONSTRUCTION</div>
            <div>RENOVATION</div>
            <div>INTERIOR</div>
            <div>PROPERTY SOLUTIONS</div>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-4 sm:pb-6 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl space-y-5 sm:space-y-6">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-3"
          >
            <span className="w-1.5 h-6 bg-[#F4B400] rounded-full inline-block" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#F4B400] uppercase font-mono">
              DELHI NCR • EST. 1998
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[74px] xl:text-[80px] font-black leading-[1.06] tracking-tight"
          >
            <span className="block text-white drop-shadow-md">
              Building Trust.
            </span>
            <span className="block text-[#F4B400] drop-shadow-[0_4px_28px_rgba(244,180,0,0.35)]">
              Crafting Quality.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-xl drop-shadow-sm"
          >
            Building trust, premium, minimal, professional construction, renovation, interior design, marble work, and property solutions across Delhi NCR.
          </motion.p>

          {/* Two Premium Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            {/* Primary Button */}
            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:py-4 rounded-xl bg-[#F4B400] hover:bg-[#E5A800] text-slate-950 font-bold text-sm sm:text-base shadow-[0_10px_25px_-5px_rgba(244,180,0,0.45)] hover:shadow-[0_15px_30px_-5px_rgba(244,180,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary Button */}
            <button
              onClick={scrollToProjects}
              className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-white font-medium text-sm sm:text-base border border-white/20 hover:border-white/40 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[#F4B400] transition-colors">
                <Play className="w-2.5 h-2.5 fill-white text-white translate-x-0.5 group-hover:fill-[#F4B400] group-hover:text-[#F4B400] transition-colors" />
              </span>
              <span>Explore Our Work</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Premium Bottom Statistics Bar (Moved upwards directly under content) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full pt-3 pb-8 sm:pb-10 lg:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-white/15 p-5 sm:p-6 lg:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden"
        >
          {/* Subtle Top Gold Highlight Glow */}
          <div className="absolute inset-x-12 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F4B400] to-transparent opacity-80" />

          {/* 4 Stat Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {/* Stat 1: Projects Completed */}
            <div className="flex items-center gap-3.5 sm:gap-4 lg:px-6">
              <div className="p-3 rounded-2xl bg-amber-400/10 text-[#F4B400] shrink-0 border border-[#F4B400]/25">
                <Building2 className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium pt-1">
                  Projects Completed
                </div>
              </div>
            </div>

            {/* Stat 2: Happy Clients */}
            <div className="flex items-center gap-3.5 sm:gap-4 lg:px-6">
              <div className="p-3 rounded-2xl bg-amber-400/10 text-[#F4B400] shrink-0 border border-[#F4B400]/25">
                <Users className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                  150+
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium pt-1">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* Stat 3: Homes Delivered */}
            <div className="flex items-center gap-3.5 sm:gap-4 lg:px-6">
              <div className="p-3 rounded-2xl bg-amber-400/10 text-[#F4B400] shrink-0 border border-[#F4B400]/25">
                <Home className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium pt-1">
                  Homes Delivered
                </div>
              </div>
            </div>

            {/* Stat 4: Properties Listed */}
            <div className="flex items-center gap-3.5 sm:gap-4 lg:px-6">
              <div className="p-3 rounded-2xl bg-amber-400/10 text-[#F4B400] shrink-0 border border-[#F4B400]/25">
                <MapPin className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                  100+
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium pt-1">
                  Properties Listed
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
