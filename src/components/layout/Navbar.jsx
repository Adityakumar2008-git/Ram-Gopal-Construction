import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/companyInfo';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Property Catalogue', path: '/property-catalogue' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handlePhoneClick = () => {
    window.location.href = `tel:${COMPANY_INFO.contact.rawPhone}`;
  };

  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent("Hello Ram Gopal Constructions! I visited your website and would like to receive your service catalogue & details for construction, interior, and property consultation.");
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Main Sticky Header matching Reference Design */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F172A]/95 backdrop-blur-xl shadow-2xl py-3 border-b border-slate-800/90'
            : 'bg-[#0F172A] py-3.5 border-b border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with official client logo image */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-10 sm:h-11 px-2 bg-white rounded-xl flex items-center justify-center shadow-md border border-slate-700/50 group-hover:shadow-[#F5B800]/20 transition-all duration-300">
              <img src="/logo.jpg" alt="Ram Gopal Constructions Logo" className="h-8 sm:h-9 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg sm:text-xl tracking-tight text-white leading-tight">
                RAM GOPAL
              </span>
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#F5B800]">
                CONSTRUCTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-300 relative ${
                    isActive
                      ? 'text-[#F5B800] bg-slate-800/90 border border-[#F5B800]/30 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Gold Call Button matching Reference Design */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              icon={Phone}
              onClick={handlePhoneClick}
            >
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full inset-x-0 bg-[#0F172A] border-b border-slate-800 shadow-2xl py-6 px-6 z-50 mobile-nav-drawer">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all ${
                      isActive
                        ? 'bg-[#F5B800] text-[#0F172A] font-bold shadow-xs'
                        : 'text-slate-200 hover:bg-slate-800'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-3">
                <Button
                  variant="primary"
                  fullWidth
                  icon={Phone}
                  onClick={handlePhoneClick}
                >
                  Call Now
                </Button>
                <Button
                  variant="heroOutline"
                  fullWidth
                  icon={MessageCircle}
                  onClick={handleWhatsAppClick}
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
