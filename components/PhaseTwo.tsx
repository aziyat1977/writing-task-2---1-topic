import React from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../context/LanguageContext';

interface StepProps {
  number: string;
  title: string;
  goal: string;
  content: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, goal, content }) => {
  const { data } = useLanguage();
  return (
    <div className="bg-white/50 dark:bg-slate-800/30 p-8 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-sky-500/30 transition-all shadow-lg dark:shadow-none">
      <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-700/50 pb-4">
         <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h3>
         <span className="text-slate-500 dark:text-slate-600 font-mono text-xl opacity-50">{number}</span>
      </div>
      
      <div className="mb-6">
        <span className="text-xs text-sky-600 dark:text-sky-500 font-bold uppercase tracking-wider block mb-1">{data.common.goal}</span>
        <p className="text-slate-700 dark:text-slate-300 font-medium text-lg">{goal}</p>
      </div>

      <div className="bg-slate-100 dark:bg-slate-900/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700/50">
        {content}
      </div>
    </div>
  );
};

export const PhaseTwoPart1: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase2.part1;

  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto px-6">
      <FadeIn>
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-2">
             <span className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 text-xl font-bold">{c.id}</span>
             <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
             {c.desc}
          </p>
        </div>

        <Step 
          number="01"
          title={c.stepTitle}
          goal={c.stepGoal}
          content={
            <div className="space-y-6">
              <div>
                 <p className="text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase mb-2">{c.s1Label}</p>
                 <p className="text-slate-700 dark:text-slate-300 text-xl italic font-serif">
                   {c.s1Text}
                 </p>
              </div>
              <div className="border-t border-slate-200 dark:border-slate-700/50 pt-4">
                 <p className="text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase mb-2">{c.s2Label}</p>
                 <p className="text-slate-700 dark:text-slate-300 text-xl italic font-serif">
                   {c.s2Text}
                 </p>
              </div>
            </div>
          }
        />
      </FadeIn>
    </section>
  );
};

export const PhaseTwoPart2A: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase2.part2;

  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto px-6">
      <FadeIn>
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-2">
             <span className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 text-xl font-bold">{c.id}</span>
             <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
             {c.desc}
          </p>
        </div>

        <Step 
            number="02"
            title={c.step2Title}
            goal={c.step2Goal}
            content={
              <div className="space-y-4">
                <p className="text-slate-800 dark:text-slate-200 text-lg">
                  <strong className="text-sky-600 dark:text-sky-400 uppercase text-sm tracking-wide block mb-1">{c.tsLabel}</strong>
                  <span className="font-serif text-xl italic">"{c.tsA}"</span>
                </p>
                <div className="pl-4 border-l-4 border-slate-300 dark:border-slate-600 space-y-3 mt-4">
                  <p className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">{c.argLabel}:</strong> {c.argA}</p>
                  <p className="text-emerald-700 dark:text-emerald-400"><strong className="text-emerald-900 dark:text-emerald-200">{c.resLabel}:</strong> {c.resA}</p>
                </div>
              </div>
            }
          />
      </FadeIn>
    </section>
  );
};

export const PhaseTwoPart2B: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase2.part2;

  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto px-6">
      <FadeIn>
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-2">
             <span className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 text-xl font-bold">{c.id}</span>
             <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
             {c.desc}
          </p>
        </div>

        <Step 
            number="03"
            title={c.step3Title}
            goal={c.step3Goal}
            content={
              <div className="space-y-4">
                <p className="text-slate-800 dark:text-slate-200 text-lg">
                  <strong className="text-sky-600 dark:text-sky-400 uppercase text-sm tracking-wide block mb-1">{c.tsLabel}</strong>
                  <span className="font-serif text-xl italic">"{c.tsB}"</span>
                </p>
                <div className="pl-4 border-l-4 border-slate-300 dark:border-slate-600 space-y-3 mt-4">
                  <p className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">{c.argLabel}:</strong> {c.argB}</p>
                  <p className="text-emerald-700 dark:text-emerald-400"><strong className="text-emerald-900 dark:text-emerald-200">{c.resLabel}:</strong> {c.resB}</p>
                </div>
              </div>
            }
          />
      </FadeIn>
    </section>
  );
};

export const PhaseTwoPart3: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase2.part3;

  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto px-6">
      <FadeIn>
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-2">
             <span className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 text-xl font-bold">{c.id}</span>
             <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
             {c.desc}
          </p>
        </div>

        <Step 
          number="04"
          title={c.stepTitle}
          goal={c.stepGoal}
          content={
            <div className="space-y-6">
               <p className="text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase">{c.formulaLabel}</p>
               <div className="p-6 bg-white border border-slate-200 dark:bg-slate-950 rounded-xl dark:border-slate-800 font-mono text-base md:text-lg text-slate-600 dark:text-slate-300 shadow-inner">
                  {c.formulaText}
               </div>
               
               <p className="text-slate-800 dark:text-slate-200 pt-4 text-xl">
                <strong className="text-emerald-600 dark:text-emerald-400 block text-sm uppercase mb-2">{c.synthesisLabel}:</strong> {c.synthesisText}
              </p>
            </div>
          }
        />
      </FadeIn>
    </section>
  );
};