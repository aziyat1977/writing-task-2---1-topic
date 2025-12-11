import React from 'react';
import { FadeIn } from './FadeIn';
import { Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PhaseFourPart1: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase4.part1;

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

        <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-xl">
           <h3 className="text-xl font-bold text-slate-100 mb-4">{c.examinerTitle}</h3>
           <p className="text-slate-300 leading-relaxed mb-6">
             {c.examinerText}
           </p>
           <div className="p-4 bg-indigo-900/20 border-l-4 border-indigo-500 rounded-r">
              <p className="text-indigo-200 italic">{c.quote}</p>
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
    <section className="py-12 px-6 max-w-5xl mx-auto">
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

        <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/20 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/80 border-b border-slate-700">
                <th className="p-6 text-sm font-bold text-sky-400 uppercase tracking-wider w-1/3">{c.colHeader}</th>
                <th className="p-6 text-sm font-bold text-slate-300 uppercase tracking-wider">{c.analysisHeader}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {data.lexicalData.map((item, index) => (
                <tr key={index} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="p-6 text-slate-100 font-medium group-hover:text-sky-300 transition-colors font-serif text-lg">
                    {item.collocation}
                  </td>
                  <td className="p-6 text-slate-400 leading-relaxed text-sm md:text-base">
                    {item.explanation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </section>
  );
};

export const PhaseFourPart3: React.FC = () => {
  const { data } = useLanguage();
  const c = data.phase4.part3;

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto text-center">
      <FadeIn>
        <div className="mb-12">
           <div className="flex items-center justify-center gap-3 mb-4">
             <span className="w-8 h-8 rounded bg-sky-500/10 flex items-center justify-center text-sky-400 text-lg font-bold">{c.id}</span>
             <h2 className="text-3xl font-bold text-sky-400">{c.title}</h2>
          </div>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
             {c.desc}
          </p>
        </div>

        <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-12 rounded-2xl border border-slate-700 shadow-2xl max-w-2xl mx-auto">
           <Download size={64} className="mx-auto text-emerald-400 mb-8 opacity-80" />
           <h3 className="text-2xl font-bold text-white mb-4">{c.cardTitle}</h3>
           <p className="text-slate-400 mb-8 leading-relaxed">
             {c.cardText}
           </p>
           
           <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-1 flex items-center gap-3 mx-auto">
              <Download size={20} />
              {c.btnText}
           </button>
        </div>
      </FadeIn>
    </section>
  );
};