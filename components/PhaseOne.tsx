import React from 'react';
import { FadeIn } from './FadeIn';
import { AlertTriangle, GitPullRequest, CheckCircle2, Search, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MagicCard } from './UI/MagicCard';
import { motion } from 'framer-motion';

export const PhaseOnePart1: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase1.part1;

  return (
    <section className="h-full flex flex-col justify-center max-w-5xl mx-auto px-6">
      <FadeIn>
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-4 mb-2">
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-sky-500/20"
            >
              {c.id}
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">{c.title}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-light max-w-xl mx-auto">
             {c.desc}
          </p>
        </div>

        <MagicCard className="p-6 md:p-8 w-full max-w-3xl mx-auto" gradientColor="rgba(56, 189, 248, 0.2)">
          <div className="flex items-center gap-4 mb-6 text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="p-2 bg-sky-500/10 rounded-lg">
               <Search size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold">{c.breakdown}</h3>
          </div>
          
          <div className="space-y-6">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest block mb-1">{c.topicLabel}</span>
              <p className="text-slate-800 dark:text-white text-xl md:text-2xl font-serif font-medium leading-relaxed">{c.topicValue}</p>
            </motion.div>

            <motion.div 
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="relative overflow-hidden rounded-xl border border-red-500/30 bg-gradient-to-br from-red-500/5 to-pink-500/5 dark:from-red-500/10 dark:to-pink-500/5 p-6"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 blur-[40px] rounded-full" />
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 mb-2 font-bold text-sm uppercase tracking-wider">
                <AlertTriangle size={18} />
                {c.trapLabel}
              </div>
              <p className="text-red-900 dark:text-red-100/90 text-lg leading-relaxed font-medium relative z-10">
                {c.trapText}
              </p>
              <div className="mt-4 flex items-start gap-2 text-red-700/60 dark:text-red-300/60 text-xs font-mono border-t border-red-500/20 pt-2">
                 <ArrowRight size={12} className="mt-0.5" />
                {c.mistake}
              </div>
            </motion.div>

            <motion.div
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.4 }}
            >
              <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest block mb-1">{c.instructionLabel}</span>
              <p className="text-slate-800 dark:text-slate-200 text-lg font-medium">{c.instructionValue}</p>
            </motion.div>
          </div>
        </MagicCard>
      </FadeIn>
    </section>
  );
};

export const PhaseOnePart2A: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase1.part2;

  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto px-6">
      <FadeIn>
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-2">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-indigo-500/20">
               {c.id}
             </div>
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{c.title}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-light">{c.desc}</p>
        </div>

        <MagicCard className="p-10 w-full" gradientColor="rgba(99, 102, 241, 0.2)">
           <h4 className="font-display font-bold text-indigo-600 dark:text-indigo-400 mb-8 text-3xl flex items-center gap-3">
             <div className="w-2 h-10 bg-indigo-500 rounded-full" />
             {c.viewA}
           </h4>
           <div className="space-y-8">
              <div>
                 <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">{c.coreIdea}</p>
                 <p className="text-slate-800 dark:text-white text-4xl font-serif">{c.viewACore}</p>
              </div>
              <div className="p-6 rounded-xl bg-indigo-50/50 dark:bg-white/5 border border-indigo-100 dark:border-white/10">
                 <p className="text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase mb-2">{c.mechanism}</p>
                 <p className="text-slate-600 dark:text-slate-300 text-xl leading-relaxed">
                   {c.viewAMech}
                 </p>
              </div>
           </div>
        </MagicCard>
      </FadeIn>
    </section>
  );
};

export const PhaseOnePart2B: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase1.part2;

  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto px-6">
      <FadeIn>
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-2">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-indigo-500/20">
               {c.id}
             </div>
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{c.title}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-light">{c.desc}</p>
        </div>

         <MagicCard className="p-10 w-full" gradientColor="rgba(168, 85, 247, 0.2)">
           <h4 className="font-display font-bold text-purple-600 dark:text-purple-400 mb-8 text-3xl flex items-center gap-3">
             <div className="w-2 h-10 bg-purple-500 rounded-full" />
             {c.viewB}
           </h4>
           <div className="space-y-8">
              <div>
                 <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">{c.coreIdea}</p>
                 <p className="text-slate-800 dark:text-white text-4xl font-serif">{c.viewBCore}</p>
              </div>
              <div className="p-6 rounded-xl bg-purple-50/50 dark:bg-white/5 border border-purple-100 dark:border-white/10">
                 <p className="text-purple-600 dark:text-purple-300 text-xs font-bold uppercase mb-2">{c.mechanism}</p>
                 <p className="text-slate-600 dark:text-slate-300 text-xl leading-relaxed">
                   {c.viewBMech}
                 </p>
              </div>
           </div>
        </MagicCard>
      </FadeIn>
    </section>
  );
};

export const PhaseOnePart3: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase1.part3;

  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto px-6">
      <FadeIn>
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-2">
            <motion.div 
               initial={{ scale: 0, rotate: -180 }}
               animate={{ scale: 1, rotate: 0 }}
               className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-emerald-500/20"
            >
              {c.id}
            </motion.div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{c.title}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-light">
             {c.desc}
          </p>
        </div>

        <MagicCard className="p-10" gradientColor="rgba(16, 185, 129, 0.2)">
          <div className="flex items-center gap-4 mb-8 text-emerald-600 dark:text-emerald-400 border-b border-slate-200 dark:border-white/10 pb-6">
            <div className="p-3 bg-emerald-500/10 rounded-xl">
               <CheckCircle2 size={32} />
            </div>
            <h3 className="text-3xl font-display font-bold">{c.verdict}</h3>
          </div>

          <div className="space-y-8">
            <p className="text-2xl md:text-3xl text-emerald-800 dark:text-emerald-50 leading-relaxed font-serif">
              {c.thesis}
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-950/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                 {c.strategyTitle}
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-lg">
                {c.strategyText}
              </p>
            </div>
          </div>
        </MagicCard>
      </FadeIn>
    </section>
  );
};