import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useResponsive } from '../../context/ResponsiveContext';

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
}

export const MagicCard: React.FC<MagicCardProps> = ({ 
  children, 
  className = "", 
  gradientColor = "rgba(56, 189, 248, 0.15)" // Sky blue default
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const { isCompact } = useResponsive();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  
  // Dynamic padding removal if classname doesn't force it, or just internal adjustment
  // Note: we let the passed className override if specific, but provide good defaults
  const baseClasses = isCompact 
    ? "rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl" 
    : "rounded-2xl shadow-xl dark:shadow-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl";

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: isCompact ? 1 : 1.01 }} // Disable scale effect on mobile to prevent overflow issues
      className={`relative overflow-hidden transition-all duration-300 group ${baseClasses} ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${isCompact ? '300px' : '600px'} circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 40%)`,
        }}
      />
      <div className="relative h-full">
        {children}
      </div>
    </motion.div>
  );
};