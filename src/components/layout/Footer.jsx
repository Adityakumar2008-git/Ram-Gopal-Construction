import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, MapPin, Phone, Mail, MessageCircle, Clock, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/companyInfo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Featured Projects', path: '/projects' },
    { name: 'Property Catalogue', path: '/property-catalogue' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Residential Construction', path: '/services#residential-construction' },
    { name: 'Commercial Construction', path: '/services#commercial-construction' },
    { name: 'Building Demolition Services', path: '/services#demolition-services' },
    { name: 'Renovation & Remodeling', path: '/services#renovation-remodeling' },
    { name: 'Interior Design & Execution', path: '/services#interior-design' },
    { name: 'Marble & Tile Installation', path: '/services#marble-tile-installation' },
    { name: 'Property Services', path: '/services#property-services' },
  ];

  return (
    <footer className="bg-[#1F2937] text-slate-300 pt-16 pb-8 border-t-4 border-[#F4B400]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-11 px-2.5 bg-white rounded-xl flex items-center justify-center shadow-md border border-slate-700">
                <img src="/logo.jpg" alt="Ram Gopal Constructions Logo" className="h-8 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-white leading-tight">
                  RAM GOPAL
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F4B400]">
                  CONSTRUCTIONS
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              Premier construction and property solutions company based in Faridabad, serving clients across Delhi NCR with quality engineering, modern interiors, and transparent property services.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Service Focus:</span>
              <span className="text-xs bg-slate-800 text-[#F4B400] px-2.5 py-1 rounded-md border border-slate-700 font-medium">
                Delhi NCR
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4B400]"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-slate-400 hover:text-[#F4B400] transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#F4B400] transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4B400]"></span>
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.path}
                    className="flex items-center gap-2 text-slate-400 hover:text-[#F4B400] transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#F4B400] transition-colors" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4B400]"></span>
              Official Address
            </h3>
            
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-[#F4B400] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </li>

              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-[#F4B400] flex-shrink-0" />
                <span>{COMPANY_INFO.contact.primaryPhone}</span>
              </li>

              <li>
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent("Hello Ram Gopal Constructions! I visited your website and would like to receive your service catalogue & details.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>WhatsApp: {COMPANY_INFO.contact.whatsappDisplay || COMPANY_INFO.contact.primaryPhone}</span>
                </a>
              </li>

              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-[#F4B400] flex-shrink-0" />
                <span>{COMPANY_INFO.contact.email}</span>
              </li>

              <li className="flex items-center gap-3 text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-[#F4B400] flex-shrink-0" />
                <span className="text-xs">{COMPANY_INFO.hours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright, Credits & Disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Ram Gopal Constructions. All Rights Reserved.</p>

          <p className="text-slate-400 text-center flex flex-wrap items-center justify-center gap-1.5 font-medium">
            <span>Built & Developed by</span>
            <a
              href="https://emviqdesigns.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F4B400] font-bold hover:underline transition-all"
            >
              Emviq Studios
            </a>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <a
              href="mailto:emviq.designs@gmail.com"
              className="text-slate-300 hover:text-[#F4B400] transition-colors underline decoration-slate-600 underline-offset-2"
            >
              emviq.designs@gmail.com
            </a>
          </p>

          <p className="text-slate-400 text-center lg:text-right">
            Construction • Interior • Marble & Tile • Property | Faridabad, HR
          </p>
        </div>

      </div>
    </footer>
  );
}
