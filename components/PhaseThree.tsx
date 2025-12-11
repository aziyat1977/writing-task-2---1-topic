import React from 'react';
import { FadeIn } from './FadeIn';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ModelText: React.FC<{ text: string, type: string, fullHeight?: boolean }> = ({ text, type, fullHeight }) => (
  <div className={`bg-white dark:bg-slate-100 text-slate-800 dark:text-slate-900 p-8 md:p-12 rounded-xl shadow-2xl relative border border-slate-200 dark:border-transparent ${fullHeight ? 'flex flex-col justify-center h-full max-h-[500px]' : 'mb-8'}`}>
    <div className="absolute top-0 right-0 bg-slate-100 dark:bg-slate-200 px-6 py-2 rounded-bl-xl text-sm font-bold text-slate-500 uppercase tracking-widest border-b border-l border-slate-200 dark:border-transparent">
      {type}
    </div>
    <div className="font-serif text-xl md:text-2xl leading-relaxed md:leading-loose">
       {text}
    </div>
  </div>
);

export const PhaseThreePart1A: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase3.part1;

  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto px-6">
      <FadeIn>
        <div className="mb-8 text-center">
           <div className="inline-flex items-center gap-3 mb-2">
             <span className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 text-xl font-bold">{c.id}</span>
             <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg">{c.desc}</p>
        </div>

        <ModelText text={data.modelParagraphs[0]} type={c.typeIntro} fullHeight />
      </FadeIn>
    </section>
  );
};

export const PhaseThreePart1B: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase3.part1;

  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto px-6">
      <FadeIn>
        <div className="mb-8 text-center">
           <div className="inline-flex items-center gap-3 mb-2">
             <span className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 text-xl font-bold">{c.id}</span>
             <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg">{c.desc}</p>
        </div>

        <ModelText text={data.modelParagraphs[1]} type={c.typeBodyA} fullHeight />
      </FadeIn>
    </section>
  );
};

export const PhaseThreePart2: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase3.part2;

  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto px-6">
      <FadeIn>
         <div className="mb-8 text-center">
           <div className="inline-flex items-center gap-3 mb-2">
             <span className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 text-xl font-bold">{c.id}</span>
             <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg">{c.desc}</p>
        </div>

        <ModelText text={data.modelParagraphs[2]} type={c.typeBodyB} />
        
        <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-500/30 p-6 rounded-xl">
           <h4 className="text-sky-600 dark:text-sky-400 font-bold mb-2 uppercase text-xs tracking-wider">{c.noteTitle}</h4>
           <p className="text-slate-700 dark:text-slate-300 italic text-lg mb-2">{c.noteQuote}</p>
           <p className="text-slate-500 dark:text-slate-400 text-sm">{c.noteText}</p>
        </div>
      </FadeIn>
    </section>
  );
};

export const PhaseThreePart3: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase3.part3;

  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto px-6">
      <FadeIn>
         <div className="mb-8 text-center">
           <div className="inline-flex items-center gap-3 mb-2">
             <span className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 text-xl font-bold">{c.id}</span>
             <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg">{c.desc}</p>
        </div>

        <ModelText text={data.modelParagraphs[3]} type={c.typeConc} />

        <div className="grid grid-cols-2 gap-4">
           <div className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center border border-slate-200 dark:border-transparent">
              <span className="block text-4xl font-bold text-emerald-500 dark:text-emerald-400 mb-2">9.0</span>
              <span className="text-slate-500 text-sm uppercase tracking-wider">{c.bandScore}</span>
           </div>
           <div className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center border border-slate-200 dark:border-transparent">
              <span className="block text-4xl font-bold text-indigo-500 dark:text-indigo-400 mb-2">~235</span>
              <span className="text-slate-500 text-sm uppercase tracking-wider">{c.wordCount}</span>
           </div>
        </div>
      </FadeIn>
    </section>
  );
};