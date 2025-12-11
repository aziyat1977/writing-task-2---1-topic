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
    <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50 hover:border-sky-500/30 transition-all">
      <div className="flex items-center justify-between mb-6 border-b border-slate-700/50 pb-4">
         <h3 className="text-2xl font-bold text-slate-100">{title}</h3>
         <span className="text-slate-600 font-mono text-lg opacity-50">{number}</span>
      </div>
      
      <div className="mb-6">
        <span className="text-xs text-sky-500 font-bold uppercase tracking-wider block mb-1">{data.common.goal}</span>
        <p className="text-slate-300 font-medium">{goal}</p>
      </div>

      <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/50">
        {content}
      </div>
    </div>
  );
};

export const PhaseTwoPart1: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase2.part1;

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

        <Step 
          number="01"
          title={c.stepTitle}
          goal={c.stepGoal}
          content={
            <div className="space-y-6">
              <div>
                 <p className="text-indigo-400 font-bold text-sm uppercase mb-2">{c.s1Label}</p>
                 <p className="text-slate-300 text-lg italic">
                   {c.s1Text}
                 </p>
              </div>
              <div className="border-t border-slate-700/50 pt-4">
                 <p className="text-emerald-400 font-bold text-sm uppercase mb-2">{c.s2Label}</p>
                 <p className="text-slate-300 text-lg italic">
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

export const PhaseTwoPart2: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase2.part2;

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

        <div className="space-y-8">
          <Step 
            number="02"
            title={c.step2Title}
            goal={c.step2Goal}
            content={
              <div className="space-y-3">
                <p className="text-slate-200">
                  <strong className="text-sky-400">{c.tsLabel}:</strong> {c.tsA}
                </p>
                <div className="pl-4 border-l-2 border-slate-600 space-y-2">
                  <p className="text-slate-400 text-sm"><strong>{c.argLabel}:</strong> {c.argA}</p>
                  <p className="text-emerald-400/80 text-sm"><strong>{c.resLabel}:</strong> {c.resA}</p>
                </div>
              </div>
            }
          />

          <Step 
            number="03"
            title={c.step3Title}
            goal={c.step3Goal}
            content={
              <div className="space-y-3">
                <p className="text-slate-200">
                  <strong className="text-sky-400">{c.tsLabel}:</strong> {c.tsB}
                </p>
                <div className="pl-4 border-l-2 border-slate-600 space-y-2">
                  <p className="text-slate-400 text-sm"><strong>{c.argLabel}:</strong> {c.argB}</p>
                  <p className="text-emerald-400/80 text-sm"><strong>{c.resLabel}:</strong> {c.resB}</p>
                </div>
              </div>
            }
          />
        </div>
      </FadeIn>
    </section>
  );
};

export const PhaseTwoPart3: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase2.part3;

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

        <Step 
          number="04"
          title={c.stepTitle}
          goal={c.stepGoal}
          content={
            <div className="space-y-4">
               <p className="text-indigo-400 font-bold text-sm uppercase">{c.formulaLabel}</p>
               <div className="p-4 bg-slate-950 rounded border border-slate-800 font-mono text-sm text-slate-300">
                  {c.formulaText}
               </div>
               
               <p className="text-slate-200 pt-4">
                <strong className="text-emerald-400">{c.synthesisLabel}:</strong> {c.synthesisText}
              </p>
            </div>
          }
        />
      </FadeIn>
    </section>
  );
};