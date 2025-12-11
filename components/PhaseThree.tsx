import React from 'react';
import { FadeIn } from './FadeIn';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ModelText: React.FC<{ text: string, type: string }> = ({ text, type }) => (
  <div className="bg-slate-100 text-slate-900 p-8 md:p-10 rounded-xl shadow-2xl relative mb-8">
    <div className="absolute top-0 right-0 bg-slate-200 px-4 py-1 rounded-bl-xl text-xs font-bold text-slate-500 uppercase tracking-widest">
      {type}
    </div>
    <div className="font-serif text-lg md:text-xl leading-loose">
       {text}
    </div>
  </div>
);

export const PhaseThreePart1: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase3.part1;

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <div className="mb-12">
           <div className="flex items-center gap-3 mb-4">
             <span className="w-8 h-8 rounded bg-sky-500/10 flex items-center justify-center text-sky-400 text-lg font-bold">{c.id}</span>
             <h2 className="text-3xl font-bold text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-400 text-lg">{c.desc}</p>
        </div>

        <ModelText text={data.modelParagraphs[0]} type={c.typeIntro} />
        <ModelText text={data.modelParagraphs[1]} type={c.typeBodyA} />
      </FadeIn>
    </section>
  );
};

export const PhaseThreePart2: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase3.part2;

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <FadeIn>
         <div className="mb-12">
           <div className="flex items-center gap-3 mb-4">
             <span className="w-8 h-8 rounded bg-sky-500/10 flex items-center justify-center text-sky-400 text-lg font-bold">{c.id}</span>
             <h2 className="text-3xl font-bold text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-400 text-lg">{c.desc}</p>
        </div>

        <ModelText text={data.modelParagraphs[2]} type={c.typeBodyB} />
        
        <div className="bg-sky-900/20 border border-sky-500/30 p-6 rounded-xl mt-8">
           <h4 className="text-sky-400 font-bold mb-2">{c.noteTitle}</h4>
           <p className="text-slate-300 italic">{c.noteQuote}</p>
           <p className="text-slate-400 text-sm mt-2">{c.noteText}</p>
        </div>
      </FadeIn>
    </section>
  );
};

export const PhaseThreePart3: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase3.part3;

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <FadeIn>
         <div className="mb-12">
           <div className="flex items-center gap-3 mb-4">
             <span className="w-8 h-8 rounded bg-sky-500/10 flex items-center justify-center text-sky-400 text-lg font-bold">{c.id}</span>
             <h2 className="text-3xl font-bold text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-400 text-lg">{c.desc}</p>
        </div>

        <ModelText text={data.modelParagraphs[3]} type={c.typeConc} />

        <div className="grid grid-cols-2 gap-4 mt-8">
           <div className="bg-slate-800 p-6 rounded-lg text-center">
              <span className="block text-4xl font-bold text-emerald-400 mb-2">9.0</span>
              <span className="text-slate-500 text-sm uppercase tracking-wider">{c.bandScore}</span>
           </div>
           <div className="bg-slate-800 p-6 rounded-lg text-center">
              <span className="block text-4xl font-bold text-indigo-400 mb-2">~235</span>
              <span className="text-slate-500 text-sm uppercase tracking-wider">{c.wordCount}</span>
           </div>
        </div>
      </FadeIn>
    </section>
  );
};