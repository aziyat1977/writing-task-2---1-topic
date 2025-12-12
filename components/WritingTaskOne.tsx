import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { MagicCard } from './UI/MagicCard';
import { useLanguage } from '../context/LanguageContext';
import { RefreshCw, GitCommit, FileSpreadsheet, ArrowRight, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Linear Diagram Component ---
const LinearDiagram: React.FC<{ steps: { id: number; title: string; desc: string }[] }> = ({ steps }) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col justify-center relative py-12">
      {/* Connecting Line - Background */}
      <div className="absolute top-1/2 left-0 w-full h-2 bg-slate-200 dark:bg-slate-700/50 -translate-y-1/2 rounded-full z-0" />
      
      {/* Connecting Line - Animated Fill */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-rose-400 to-pink-600 -translate-y-1/2 rounded-full z-0"
      />

      <div className="relative z-10 flex justify-between items-center w-full px-4">
        {steps.map((step, index) => {
          const isHovered = hoveredStep === step.id;
          
          return (
            <motion.div
              key={step.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
              className="relative group"
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Connector Node */}
              <motion.div 
                animate={{ 
                  scale: isHovered ? 1.2 : 1,
                  borderColor: isHovered ? '#fb7185' : '#e2e8f0', // rose-400 : slate-200
                }}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-white dark:bg-slate-800 border-4 ${isHovered ? 'border-rose-400 shadow-[0_0_20px_rgba(251,113,133,0.4)]' : 'border-slate-200 dark:border-slate-600'} flex items-center justify-center cursor-pointer transition-colors duration-300 relative z-20`}
              >
                <span className={`font-bold text-lg ${isHovered ? 'text-rose-500' : 'text-slate-400'}`}>{step.id}</span>
              </motion.div>

              {/* Text Label - Absolute positioned to avoid layout shift */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 text-center pointer-events-none">
                 <motion.h4 
                    animate={{ y: isHovered ? 0 : 5, opacity: isHovered ? 1 : 0.7 }}
                    className={`font-bold text-sm md:text-base mb-1 ${isHovered ? 'text-rose-600 dark:text-rose-400' : 'text-slate-600 dark:text-slate-400'}`}
                  >
                    {step.title}
                 </motion.h4>
                 <AnimatePresence>
                   {isHovered && (
                     <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs text-slate-500 dark:text-slate-500 leading-tight"
                     >
                        {step.desc}
                     </motion.p>
                   )}
                 </AnimatePresence>
              </div>

              {/* Arrow Indicator between nodes (except last) */}
              {index < steps.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.1 }}
                    className="absolute top-1/2 -right-1/2 left-full -translate-y-1/2 text-slate-300 dark:text-slate-600 pointer-events-none flex justify-center w-full"
                  >
                     <ArrowRight size={20} />
                  </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
      {/* Spacer for labels */}
      <div className="h-24" />
    </div>
  );
};

// --- Cyclical Diagram Component ---
const CyclicalDiagram: React.FC<{ steps: { id: number; title: string; desc: string }[] }> = ({ steps }) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const radius = 130; // Radius of the circle

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative overflow-hidden py-8">
      {/* Central Hub */}
      <motion.div 
        className="absolute z-0 w-32 h-32 rounded-full border-2 border-dashed border-emerald-500/30 flex items-center justify-center"
        animate={{ rotate: isRotating ? 360 : 0 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-24 h-24 rounded-full bg-emerald-500/10 backdrop-blur-sm flex items-center justify-center">
           <RefreshCw className="text-emerald-500/50" size={40} />
        </div>
      </motion.div>

      {/* Orbiting Steps */}
      <div className="relative w-[320px] h-[320px]">
        {steps.map((step, index) => {
          const angle = (index / steps.length) * 2 * Math.PI - Math.PI / 2; // Start from top
          const x = Math.cos(angle) * radius + 160; // center offset
          const y = Math.sin(angle) * radius + 160; // center offset
          const isHovered = hoveredStep === step.id;

          return (
            <React.Fragment key={step.id}>
              {/* Connector Arcs (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 rotate-[-90deg]">
                 <motion.circle 
                    cx="160" cy="160" r={radius} 
                    fill="none" 
                    stroke={isHovered ? "#10b981" : "#e2e8f0"} // emerald-500 : slate-200
                    strokeWidth="2"
                    strokeDasharray="10 10"
                    strokeOpacity={0.5}
                    initial={{ pathLength: 0, rotate: 0 }}
                    animate={{ pathLength: 1, rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 />
              </svg>

              <motion.div
                className="absolute w-28 -ml-14 -mt-14 flex flex-col items-center justify-center z-10 cursor-pointer"
                style={{ left: x, top: y }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                onMouseEnter={() => { setHoveredStep(step.id); setIsRotating(false); }}
                onMouseLeave={() => { setHoveredStep(null); setIsRotating(true); }}
              >
                 <motion.div
                    animate={{ 
                        scale: isHovered ? 1.15 : 1,
                        boxShadow: isHovered ? "0 0 25px rgba(16, 185, 129, 0.4)" : "0 0 0px rgba(0,0,0,0)"
                    }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 border-2 ${isHovered ? 'bg-emerald-500 border-emerald-400 text-white' : 'bg-white dark:bg-slate-800 border-emerald-500/30 text-emerald-600'}`}
                 >
                    <span className="font-bold text-sm">{index + 1}</span>
                 </motion.div>
                 
                 <div className={`text-center transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-2 rounded-lg ${isHovered ? 'opacity-100 scale-110 z-20 shadow-lg' : 'opacity-80 scale-100'}`}>
                    <h4 className={`text-xs font-bold leading-tight ${isHovered ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'}`}>{step.title}</h4>
                    {isHovered && (
                        <motion.p 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="text-[10px] text-slate-500 mt-1"
                        >
                            {step.desc}
                        </motion.p>
                    )}
                 </div>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
      
      {/* Play/Pause indicator */}
      <button 
        onClick={() => setIsRotating(!isRotating)}
        className="absolute bottom-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-emerald-500 hover:bg-emerald-50 transition-colors opacity-50 hover:opacity-100"
      >
        {isRotating ? <Pause size={16} /> : <Play size={16} />}
      </button>
    </div>
  );
};

export const WritingTaskOne: React.FC = () => {
  const { data } = useLanguage();
  const t = data.taskOne;

  return (
    <section className="h-full flex flex-col justify-center w-full max-w-[1400px] mx-auto px-4 md:px-6 py-8">
        <FadeIn>
            <div className="mb-10 text-center">
                 <div className="inline-flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/20">
                        <FileSpreadsheet size={24} />
                    </span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">{t.title}</h2>
                 <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">{t.desc}</p>
            </div>

            <div className="grid xl:grid-cols-2 gap-8 w-full">
                {/* Linear Process Card */}
                <MagicCard className="p-6 md:p-8 h-full flex flex-col min-h-[600px]" gradientColor="rgba(244, 114, 182, 0.15)">
                     <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                        <div className="p-3 bg-rose-50 dark:bg-rose-500/10 rounded-xl text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-500/20">
                            <GitCommit className="rotate-90" size={24} />
                        </div>
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">{t.labels.type}</span>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.linear.type}</h3>
                        </div>
                     </div>
                     
                     <div className="flex-1 flex flex-col">
                        <div className="mb-6">
                            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-2">
                                {t.labels.topic}
                            </span>
                            <p className="text-lg md:text-xl font-serif italic text-slate-800 dark:text-slate-200 leading-snug">
                                {t.linear.topic}
                            </p>
                        </div>
                        
                        {/* Interactive Diagram Area */}
                        <div className="flex-grow bg-slate-50 dark:bg-slate-950/30 rounded-2xl border border-slate-200 dark:border-white/5 mb-6 overflow-hidden">
                           <LinearDiagram steps={t.linear.steps} />
                        </div>

                        <div className="pt-2 mt-auto">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1 block">{t.labels.theme}</span>
                            <div className="flex flex-wrap gap-2">
                                {t.linear.theme.split(',').map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300">
                                        {tag.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                     </div>
                </MagicCard>

                {/* Cyclical Process Card */}
                <MagicCard className="p-6 md:p-8 h-full flex flex-col min-h-[600px]" gradientColor="rgba(16, 185, 129, 0.15)">
                     <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                        <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
                            <RefreshCw size={24} />
                        </div>
                        <div>
                             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">{t.labels.type}</span>
                             <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.cyclical.type}</h3>
                        </div>
                     </div>
                     
                     <div className="flex-1 flex flex-col">
                        <div className="mb-6">
                            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
                                {t.labels.topic}
                            </span>
                            <p className="text-lg md:text-xl font-serif italic text-slate-800 dark:text-slate-200 leading-snug">
                                {t.cyclical.topic}
                            </p>
                        </div>
                        
                         {/* Interactive Diagram Area */}
                         <div className="flex-grow bg-slate-50 dark:bg-slate-950/30 rounded-2xl border border-slate-200 dark:border-white/5 mb-6 overflow-hidden">
                           <CyclicalDiagram steps={t.cyclical.steps} />
                        </div>

                        <div className="pt-2 mt-auto">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1 block">{t.labels.theme}</span>
                            <div className="flex flex-wrap gap-2">
                                {t.cyclical.theme.split(',').map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300">
                                        {tag.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                     </div>
                </MagicCard>
            </div>
        </FadeIn>
    </section>
  );
};