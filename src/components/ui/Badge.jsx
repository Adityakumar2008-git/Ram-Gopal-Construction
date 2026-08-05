import React from 'react';

export function Badge({ children, variant = 'yellow', className = '' }) {
  const variants = {
    yellow: 'bg-[#F4B400] text-slate-950 font-semibold',
    dark: 'bg-[#1F2937] text-white font-medium',
    gray: 'bg-slate-100 text-slate-700 font-medium',
    outline: 'border border-slate-300 text-slate-700 bg-white font-medium'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs transition-colors ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
