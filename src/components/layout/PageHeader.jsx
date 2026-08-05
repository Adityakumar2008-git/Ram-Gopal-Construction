import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function PageHeader({ title, subtitle, breadcrumb = [] }) {
  return (
    <div className="relative bg-[#1F2937] text-white py-16 lg:py-24 overflow-hidden border-b-4 border-[#F4B400]">
      {/* Background Decorative Pattern */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center" 
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F2937] via-[#1F2937]/90 to-slate-900/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-4">
          <Link to="/" className="hover:text-[#F4B400] transition-colors">
            Home
          </Link>
          {breadcrumb.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-[#F4B400] transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-[#F4B400] font-medium">{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Page Title & Subtitle */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
