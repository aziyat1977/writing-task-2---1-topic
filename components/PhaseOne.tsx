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
    <section className="py-6 px-6 max-w-5xl mx-auto">
      <FadeIn>
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-sky-500/20"
            >
              {c.id}
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">{c.title}</h2>
          </div>
          <p className="text-slate-400 text-xl font-light max-w-2xl">
             {c.desc}
          </p>
        </div>

        <MagicCard className="p-8 md:p-12" gradientColor="rgba(56, 189, 248, 0.2)">
          <div className="flex items-center gap-4 mb-10 text-sky-400 border-b border-white/10 pb-6">
            <div className="p-3 bg-sky-500/10 rounded-xl">
               <Search size={32} />
            </div>
            <h3 className="text-3xl font-display font-bold">{c.breakdown}</h3>
          </div>
          
          <div className="space-y-10">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-slate-500 text-xs font-bold uppercase tracking-widest block mb-3">{c.topicLabel}</span>
              <p className="text-white text-2xl md:text-3xl font-serif font-medium leading-relaxed">{c.topicValue}</p>
            </motion.div>

            <motion.div 
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="relative overflow-hidden rounded-xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-pink-500/5 p-8"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full" />
              <div className="flex items-center gap-3 text-red-400 mb-4 font-bold text-lg uppercase tracking-wider">
                <AlertTriangle size={24} />
                {c.trapLabel}
              </div>
              <p className="text-red-100/90 text-xl leading-relaxed font-medium relative z-10">
                {c.trapText}
              </p>
              <div className="mt-6 flex items-start gap-3 text-red-300/60 text-sm font-mono border-t border-red-500/20 pt-4">
                 <ArrowRight size={14} className="mt-1" />
                {c.mistake}
              </div>
            </motion.div>

            <motion.div
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.4 }}
            >
              <span className="text-slate-500 text-xs font-bold uppercase tracking-widest block mb-3">{c.instructionLabel}</span>
              <p className="text-slate-200 text-xl font-medium">{c.instructionValue}</p>
            </motion.div>
          </div>
        </MagicCard>
      </FadeIn>
    </section>
  );
};

export const PhaseOnePart2: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase1.part2;

  return (
    <section className="py-6 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
               initial={{ scale: 0, rotate: -180 }}
               animate={{ scale: 1, rotate: 0 }}
               className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-indigo-500/20"
            >
              {c.id}
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">{c.title}</h2>
          </div>
          <p className="text-slate-400 text-xl font-light">
             {c.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* View A */}
            <MagicCard className="p-8 h-full" gradientColor="rgba(99, 102, 241, 0.2)">
               <h4 className="font-display font-bold text-indigo-400 mb-8 text-2xl flex items-center gap-3">
                 <div className="w-2 h-8 bg-indigo-500 rounded-full" />
                 {c.viewA}
               </h4>
               <div className="space-y-8">
                  <div>
                     <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">{c.coreIdea}</p>
                     <p className="text-white text-2xl font-serif">{c.viewACore}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                     <p className="text-indigo-300 text-xs font-bold uppercase mb-2">{c.mechanism}</p>
                     <p className="text-slate-300 leading-relaxed">
                       {c.viewAMech}
                     </p>
                  </div>
               </div>
            </MagicCard>

             {/* View B */}
             <MagicCard className="p-8 h-full" gradientColor="rgba(168, 85, 247, 0.2)">
               <h4 className="font-display font-bold text-purple-400 mb-8 text-2xl flex items-center gap-3">
                 <div className="w-2 h-8 bg-purple-500 rounded-full" />
                 {c.viewB}
               </h4>
               <div className="space-y-8">
                  <div>
                     <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">{c.coreIdea}</p>
                     <p className="text-white text-2xl font-serif">{c.viewBCore}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                     <p className="text-purple-300 text-xs font-bold uppercase mb-2">{c.mechanism}</p>
                     <p className="text-slate-300 leading-relaxed">
                       {c.viewBMech}
                     </p>
                  </div>
               </div>
            </MagicCard>
        </div>
      </FadeIn>
    </section>
  );
};

export const PhaseOnePart3: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase1.part3;

  return (
    <section className="py-6 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
               initial={{ scale: 0, rotate: -180 }}
               animate={{ scale: 1, rotate: 0 }}
               className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-emerald-500/20"
            >
              {c.id}
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">{c.title}</h2>
          </div>
          <p className="text-slate-400 text-xl font-light">
             {c.desc}
          </p>
        </div>

        <MagicCard className="p-10" gradientColor="rgba(16, 185, 129, 0.2)">
          <div className="flex items-center gap-4 mb-8 text-emerald-400 border-b border-white/10 pb-6">
            <div className="p-3 bg-emerald-500/10 rounded-xl">
               <CheckCircle2 size={32} />
            </div>
            <h3 className="text-3xl font-display font-bold">{c.verdict}</h3>
          </div>

          <div className="space-y-8">
            <p className="text-3xl text-emerald-50 leading-relaxed font-serif">
              {c.thesis}
            </p>
            
            <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                 {c.strategyTitle}
              </h4>
              <p className="text-slate-300 text-lg">
                {c.strategyText}
              </p>
            </div>
          </div>
        </MagicCard>
      </FadeIn>
    </section>
  );
};