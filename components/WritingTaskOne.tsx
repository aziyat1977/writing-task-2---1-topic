import React from 'react';
import { FadeIn } from './FadeIn';
import { MagicCard } from './UI/MagicCard';
import { useLanguage } from '../context/LanguageContext';
import { RefreshCw, GitCommit, FileSpreadsheet } from 'lucide-react';

export const WritingTaskOne: React.FC = () => {
  const { data } = useLanguage();
  const t = data.taskOne;

  return (
    <section className="h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-8">
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

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {/* Linear Process Card */}
                <MagicCard className="p-6 md:p-8 h-full flex flex-col" gradientColor="rgba(244, 114, 182, 0.15)">
                     <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                        <div className="p-3 bg-rose-50 dark:bg-rose-500/10 rounded-xl text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-500/20">
                            <GitCommit className="rotate-90" size={24} />
                        </div>
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">{t.labels.type}</span>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.linear.type}</h3>
                        </div>
                     </div>
                     
                     <div className="space-y-6 flex-1">
                        <div>
                            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-2">
                                {t.labels.topic}
                            </span>
                            <p className="text-lg md:text-xl font-serif italic text-slate-800 dark:text-slate-200 leading-snug">
                                {t.linear.topic}
                            </p>
                        </div>
                         <div className="bg-slate-50 dark:bg-slate-950/30 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">{t.labels.features}</span>
                            <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                                {t.linear.features}
                            </p>
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
                <MagicCard className="p-6 md:p-8 h-full flex flex-col" gradientColor="rgba(16, 185, 129, 0.15)">
                     <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                        <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
                            <RefreshCw size={24} />
                        </div>
                        <div>
                             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">{t.labels.type}</span>
                             <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.cyclical.type}</h3>
                        </div>
                     </div>
                     
                     <div className="space-y-6 flex-1">
                        <div>
                            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
                                {t.labels.topic}
                            </span>
                            <p className="text-lg md:text-xl font-serif italic text-slate-800 dark:text-slate-200 leading-snug">
                                {t.cyclical.topic}
                            </p>
                        </div>
                         <div className="bg-slate-50 dark:bg-slate-950/30 p-4 rounded-xl border border-slate-100 dark:border-white/5">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">{t.labels.features}</span>
                            <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                                {t.cyclical.features}
                            </p>
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