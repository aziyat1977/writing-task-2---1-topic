import React from 'react';
import { FadeIn } from './FadeIn';
import { BookOpen, PenTool, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export const Hero: React.FC<{ id?: string }> = ({ id }) => {
  const { data } = useLanguage();
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center py-20 px-6 relative overflow-hidden">
      
      <FadeIn>
        <div className="text-center mb-16 relative z-10">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/60 dark:bg-slate-900/50 backdrop-blur-md border border-sky-500/30 text-sky-600 dark:text-sky-400 text-sm font-bold uppercase tracking-widest mb-8 shadow-xl shadow-sky-900/10 dark:shadow-sky-900/20"
          >
            <BookOpen size={16} />
            <span>{data.hero.badge}</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tight bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-sky-100 dark:to-sky-300 bg-clip-text text-transparent drop-shadow-sm dark:drop-shadow-2xl">
            {data.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            {data.hero.subtitle}
          </p>
          <Link 
            to="/phase/1/1" 
            className="group relative inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1 hover:scale-105"
          >
            {data.hero.start} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={0.2} className="w-full max-w-3xl relative z-10">
        <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 dark:bg-sky-500/20 blur-[60px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/20 blur-[60px] rounded-full" />

          <div className="mb-10 relative z-10">
            <h3 className="text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <Star size={12} className="fill-sky-600 dark:fill-sky-400" />
                {data.hero.topicLabel}
            </h3>
            <p className="text-2xl md:text-3xl text-slate-800 dark:text-white font-serif leading-relaxed">
              "{data.hero.topicText}"
            </p>
          </div>
          <div className="relative z-10 border-t border-slate-200 dark:border-white/5 pt-8">
            <h3 className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
              <PenTool size={14} />
              {data.hero.taskLabel}
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-300 italic font-light">
              "{data.hero.taskText}"
            </p>
          </div>
        </motion.div>
      </FadeIn>
    </section>
  );
};