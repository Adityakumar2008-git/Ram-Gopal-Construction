import React from 'react';

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = ''
}) {
  const alignStyles = {
    center: 'text-center max-w-3xl mx-auto',
    left: 'text-left max-w-2xl',
    right: 'text-right max-w-2xl ml-auto'
  };

  return (
    <div className={`mb-12 ${alignStyles[align]} ${className}`}>
      {title && (
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
          dark ? 'text-white' : 'text-[#0F172A]'
        }`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
