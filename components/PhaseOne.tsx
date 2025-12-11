import React from 'react';
import { FadeIn } from './FadeIn';
import { AlertTriangle, GitPullRequest, CheckCircle2, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PhaseOnePart1: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase1.part1;

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded bg-sky-500/10 flex items-center justify-center text-sky-400 text-lg font-bold">{c.id}</span>
            <h2 className="text-3xl font-bold text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-400 text-lg">
             {c.desc}
          </p>
        </div>

        <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-xl shadow-2xl">
          <div className="flex items-center gap-3 mb-8 text-sky-300 border-b border-slate-700 pb-4">
            <Search size={32} />
            <h3 className="text-2xl font-bold">{c.breakdown}</h3>
          </div>
          
          <div className="space-y-8">
            <div>
              <span className="text-slate-500 text-sm font-bold uppercase tracking-wider block mb-2">{c.topicLabel}</span>
              <p className="text-slate-200 text-xl font-medium">{c.topicValue}</p>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-lg">
              <div className="flex items-center gap-2 text-red-400 mb-3 font-bold text-lg">
                <AlertTriangle size={20} />
                {c.trapLabel}
              </div>
              <p className="text-red-100 text-lg leading-relaxed">
                {c.trapText}
              </p>
              <p className="text-red-200/60 mt-2 text-sm">
                {c.mistake}
              </p>
            </div>

            <div>
              <span className="text-slate-500 text-sm font-bold uppercase tracking-wider block mb-2">{c.instructionLabel}</span>
              <p className="text-slate-300 text-lg">{c.instructionValue}</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export const PhaseOnePart2: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase1.part2;

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded bg-sky-500/10 flex items-center justify-center text-sky-400 text-lg font-bold">{c.id}</span>
            <h2 className="text-3xl font-bold text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-400 text-lg">
             {c.desc}
          </p>
        </div>

        <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-xl shadow-2xl">
          <div className="flex items-center gap-3 mb-8 text-indigo-400 border-b border-slate-700 pb-4">
            <GitPullRequest size={32} />
            <h3 className="text-2xl font-bold">{c.ideaGen}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/50">
              <h4 className="font-bold text-indigo-400 mb-4 text-lg border-b border-indigo-500/30 pb-2">{c.viewA}</h4>
              <div className="space-y-4">
                 <div>
                    <p className="text-slate-400 text-xs font-bold uppercase">{c.coreIdea}</p>
                    <p className="text-slate-100 text-lg">{c.viewACore}</p>
                 </div>
                 <div className="pl-4 border-l-2 border-indigo-500/30">
                    <p className="text-slate-500 text-xs font-bold uppercase mb-1">{c.mechanism}</p>
                    <p className="text-slate-300">
                      {c.viewAMech}
                    </p>
                 </div>
              </div>
            </div>
            
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/50">
              <h4 className="font-bold text-indigo-400 mb-4 text-lg border-b border-indigo-500/30 pb-2">{c.viewB}</h4>
              <div className="space-y-4">
                 <div>
                    <p className="text-slate-400 text-xs font-bold uppercase">{c.coreIdea}</p>
                    <p className="text-slate-100 text-lg">{c.viewBCore}</p>
                 </div>
                 <div className="pl-4 border-l-2 border-indigo-500/30">
                    <p className="text-slate-500 text-xs font-bold uppercase mb-1">{c.mechanism}</p>
                    <p className="text-slate-300">
                      {c.viewBMech}
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export const PhaseOnePart3: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase1.part3;

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded bg-sky-500/10 flex items-center justify-center text-sky-400 text-lg font-bold">{c.id}</span>
            <h2 className="text-3xl font-bold text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-400 text-lg">
             {c.desc}
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/20 to-slate-800/40 border border-emerald-500/30 p-8 rounded-xl shadow-2xl">
          <div className="flex items-center gap-3 mb-8 text-emerald-400 border-b border-emerald-500/20 pb-4">
            <CheckCircle2 size={32} />
            <h3 className="text-2xl font-bold">{c.verdict}</h3>
          </div>

          <div className="space-y-6">
            <p className="text-2xl text-emerald-100/90 leading-relaxed font-serif">
              {c.thesis}
            </p>
            
            <div className="bg-slate-900/50 p-6 rounded-lg mt-8">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">{c.strategyTitle}</h4>
              <p className="text-slate-300">
                {c.strategyText}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};