import React from 'react';
import { FadeIn } from './FadeIn';
import { LEXICAL_DATA } from '../constants';

export const PhaseFour: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6 max-w-5xl mx-auto">
      <FadeIn>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-sky-400 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-sky-500/10 flex items-center justify-center text-sky-400 text-lg">4</span>
            Lexical Resource
          </h2>
          <p className="text-slate-400 text-lg">
             The vocabulary selection—chosen for <span className="text-sky-300 font-bold">precision</span>, not complexity.
          </p>
        </div>
      </FadeIn>

      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/20">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900/50 border-b border-slate-700">
              <th className="p-6 text-sm font-bold text-sky-400 uppercase tracking-wider w-1/3">Collocation</th>
              <th className="p-6 text-sm font-bold text-slate-300 uppercase tracking-wider">Analysis (Why it Works)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {LEXICAL_DATA.map((item, index) => (
              <tr key={index} className="hover:bg-slate-800/40 transition-colors group">
                <td className="p-6 text-slate-100 font-medium group-hover:text-sky-300 transition-colors">
                  {item.collocation}
                </td>
                <td className="p-6 text-slate-400 leading-relaxed">
                  {item.explanation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <FadeIn delay={0.4}>
        <div className="mt-20 text-center">
          <h3 className="text-xl text-slate-200 font-bold mb-4">Ready to practice?</h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            You now have the blueprint. Download the template to start writing your own Band 9 essays using this structure.
          </p>
          <button className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-sky-500/20 transition-all transform hover:-translate-y-1">
            Download Template PDF
          </button>
        </div>
      </FadeIn>
    </section>
  );
};