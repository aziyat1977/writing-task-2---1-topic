import React from 'react';
import { FadeIn } from './FadeIn';
import { GRAMMAR_MASTERCLASS_DATA } from '../constants';
import { BookOpen, Mic } from 'lucide-react';

export const GrammarMasterclass: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800">
      <FadeIn>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-sky-400 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-sky-500/10 flex items-center justify-center text-sky-400 text-lg">M</span>
            Grammar Masterclass
          </h2>
          <p className="text-slate-400 text-lg">
            Surgical breakdown of <strong className="text-sky-300">Advanced Essay Structures</strong>. Focusing on Meaning, Form, and Pronunciation (MFP).
          </p>
        </div>
      </FadeIn>

      <div className="space-y-12">
        {GRAMMAR_MASTERCLASS_DATA.map((topic, index) => (
          <FadeIn key={topic.id} delay={index * 0.1}>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden shadow-lg hover:border-sky-500/30 transition-colors">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                   <h3 className="text-xl md:text-2xl font-bold text-slate-100">{topic.title}</h3>
                </div>
                
                <p className="text-slate-400 italic mb-8 border-l-2 border-indigo-500 pl-4 py-1 text-sm md:text-base">
                  {topic.function}
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-slate-700 text-xs uppercase tracking-wider text-slate-500">
                        <th className="py-3 pr-4 font-bold w-1/5">Feature</th>
                        <th className="py-3 px-4 w-1/4">Meaning</th>
                        <th className="py-3 px-4 w-1/3">Form & Examples</th>
                        <th className="py-3 pl-4 w-1/4 bg-emerald-900/10 text-emerald-400">Drill</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50 text-sm">
                      {topic.rows.map((row, i) => (
                        <tr key={i} className="group">
                          <td className="py-4 pr-4 font-medium text-sky-300 align-top">
                            {row.feature}
                          </td>
                          <td className="py-4 px-4 text-slate-300 align-top leading-relaxed">
                            {row.meaning}
                          </td>
                          <td className="py-4 px-4 text-slate-200 align-top leading-relaxed font-serif bg-slate-900/20">
                            <div dangerouslySetInnerHTML={{ __html: row.example.replace(/\*\*(.*?)\*\*/g, '<strong class="text-sky-300">$1</strong>') }} />
                          </td>
                          <td className="py-4 pl-4 align-top bg-emerald-900/5 group-hover:bg-emerald-900/10 transition-colors">
                             <div className="text-emerald-200/90 font-medium" dangerouslySetInnerHTML={{ __html: row.drill.replace(/\*\*(.*?)\*\*/g, '<strong class="text-emerald-400">$1</strong>').replace('→', '<span class="text-slate-500 mx-1">→</span>') }} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-start gap-3 text-sm text-indigo-300">
                  <Mic size={18} className="mt-0.5 shrink-0" />
                  <p>
                    <strong className="text-indigo-400 uppercase text-xs tracking-wider mr-2">Pronunciation:</strong>
                    {topic.pronunciation}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};