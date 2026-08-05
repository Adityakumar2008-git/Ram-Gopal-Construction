import React from 'react';
import { motion } from 'framer-motion';

export function Card({
  children,
  className = '',
  hoverEffect = true,
  padding = 'p-6',
  onClick,
  ...props
}) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } } : {}}
      onClick={onClick}
      className={`bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.12),0_0_20px_rgba(244,180,0,0.1)] hover:border-[#F4B400]/40 transition-all duration-300 overflow-hidden ${padding} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
