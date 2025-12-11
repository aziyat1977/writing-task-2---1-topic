import React from 'react';
import { FadeIn } from './FadeIn';
import { Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PhaseFourPart1: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase4.part1;

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

        <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 p-8 rounded-xl shadow-lg dark:shadow-none">
           <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">{c.examinerTitle}</h3>
           <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">
             {c.examinerText}
           </p>
           <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 rounded-r">
              <p className="text-indigo-700 dark:text-indigo-200 italic text-xl">"{c.quote}"</p>
           </div>
        </div>
      </FadeIn>
    </section>
  );
};

export const PhaseFourPart2: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase4.part2;

  return (
    <section className="h-full flex flex-col justify-center max-w-5xl mx-auto px-6 w-full">
      <FadeIn className="h-full flex flex-col justify-center">
        <div className="mb-6 text-center shrink-0">
           <div className="inline-flex items-center gap-3 mb-2">
             <span className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 text-xl font-bold">{c.id}</span>
             <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
             {c.desc}
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/20 shadow-2xl flex-grow max-h-[60vh] flex flex-col">
          <div className="overflow-y-auto custom-scroll">
            <table className="w-full text-left border-collapse">
              <thead className="sticky top-0 bg-slate-50 dark:bg-slate-900/95 backdrop-blur z-10 shadow-sm">
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="p-6 text-sm font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider w-1/3">{c.colHeader}</th>
                  <th className="p-6 text-sm font-bold text-slate-500 dark:text-slate-300 uppercase tracking-wider">{c.analysisHeader}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700/50">
                {data.lexicalData.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group">
                    <td className="p-6 text-slate-900 dark:text-slate-100 font-medium group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors font-serif text-lg align-top">
                      {item.collocation}
                    </td>
                    <td className="p-6 text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base align-top">
                      {item.explanation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export const PhaseFourPart3: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase4.part3;

  return (
    <section className="h-full flex flex-col justify-center max-w-4xl mx-auto text-center px-6">
      <FadeIn>
        <div className="mb-8">
           <div className="flex items-center justify-center gap-3 mb-2">
             <span className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 text-xl font-bold">{c.id}</span>
             <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
             {c.desc}
          </p>
        </div>

        <div className="bg-gradient-to-b from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 p-12 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl max-w-2xl mx-auto">
           <Download size={64} className="mx-auto text-emerald-500 dark:text-emerald-400 mb-8 opacity-80" />
           <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{c.cardTitle}</h3>
           <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
             {c.cardText}
           </p>
           
           <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-1 flex items-center gap-3 mx-auto text-lg">
              <Download size={24} />
              {c.btnText}
           </button>
        </div>
      </FadeIn>
    </section>
  );
};