import React from 'react';
import { motion } from 'framer-motion';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon = null,
  iconPosition = 'left',
  fullWidth = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 rounded-xl cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.97]';

  const variants = {
    primary: 'bg-gradient-to-r from-[#F5B800] to-[#E0A700] text-[#0F172A] shadow-md hover:shadow-xl hover:shadow-[#F5B800]/25 hover:from-[#F5B800] hover:to-[#F5B800] transform hover:-translate-y-0.5',
    secondary: 'bg-[#0F172A] text-white hover:bg-slate-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-slate-700/80',
    heroOutline: 'bg-slate-900/80 backdrop-blur-lg border border-slate-600/90 text-white hover:bg-slate-800 hover:border-[#F5B800] hover:text-[#F5B800] shadow-lg transform hover:-translate-y-0.5',
    outline: 'border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white shadow-sm hover:shadow-md transform hover:-translate-y-0.5',
    outlineYellow: 'border-2 border-[#F5B800] text-[#F5B800] hover:bg-[#F5B800] hover:text-[#0F172A] shadow-sm hover:shadow-md transform hover:-translate-y-0.5',
    white: 'bg-white text-[#0F172A] shadow-md hover:bg-slate-50 hover:shadow-xl border border-gray-100 transform hover:-translate-y-0.5'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs sm:text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm sm:text-base gap-2',
    lg: 'px-7 py-3.5 text-base sm:text-lg gap-2.5'
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
    </motion.button>
  );
}
