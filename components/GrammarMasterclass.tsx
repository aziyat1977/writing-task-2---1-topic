import React from 'react';
import { FadeIn } from './FadeIn';
import { Mic } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TopicCard: React.FC<{ topic: any }> = ({ topic }) => {
  const { data } = useLanguage();
  return (
    <div className="bg-white/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-xl overflow-hidden shadow-lg w-full">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">{topic.title}</h3>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 italic mb-6 border-l-2 border-indigo-500 pl-4 py-1 text-sm md:text-base">
          {topic.function}
        </p>

        <div className="overflow-x-auto custom-scroll pb-2">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-xs uppercase tracking-wider text-slate-500">
                <th className="py-3 pr-4 font-bold w-1/5">{data.grammarMaster.tableFeature}</th>
                <th className="py-3 px-4 w-1/4">{data.grammarMaster.tableMeaning}</th>
                <th className="py-3 px-4 w-1/3">{data.grammarMaster.tableForm}</th>
                <th className="py-3 pl-4 w-1/4 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-400">{data.grammarMaster.tableDrill}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700/50 text-sm">
              {topic.rows.map((row: any, i: number) => (
                <tr key={i} className="group">
                  <td className="py-4 pr-4 font-medium text-sky-600 dark:text-sky-300 align-top">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-slate-600 dark:text-slate-300 align-top leading-relaxed">
                    {row.meaning}
                  </td>
                  <td className="py-4 px-4 text-slate-700 dark:text-slate-200 align-top leading-relaxed font-serif bg-slate-50 dark:bg-slate-900/20">
                    <div dangerouslySetInnerHTML={{ __html: row.example.replace(/\*\*(.*?)\*\*/g, '<strong class="text-sky-600 dark:text-sky-300">$1</strong>') }} />
                  </td>
                  <td className="py-4 pl-4 align-top bg-emerald-50/50 dark:bg-emerald-900/5 group-hover:bg-emerald-100/50 dark:group-hover:bg-emerald-900/10 transition-colors">
                    <div className="text-emerald-700 dark:text-emerald-200/90 font-medium" dangerouslySetInnerHTML={{ __html: row.drill.replace(/\*\*(.*?)\*\*/g, '<strong class="text-emerald-600 dark:text-emerald-400">$1</strong>').replace('→', '<span class="text-slate-500 mx-1">→</span>') }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700/50 flex items-start gap-2 text-xs text-indigo-600 dark:text-indigo-300">
          <Mic size={14} className="mt-0.5 shrink-0" />
          <p>
            <strong className="text-indigo-700 dark:text-indigo-400 uppercase tracking-wider mr-2">{data.grammarMaster.pronunciation}</strong>
            {topic.pronunciation}
          </p>
        </div>
      </div>
    </div>
  );
};

export const GrammarTheoryPart1: React.FC = () => {
  const { data } = useLanguage();
  return (
    <section className="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      <FadeIn>
        <div className="mb-8 text-center">
           <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">{data.grammarMaster.title1}</h2>
           <p className="text-slate-500 dark:text-slate-400">{data.grammarMaster.desc1}</p>
        </div>
        <TopicCard topic={data.grammarMasterData[0]} />
      </FadeIn>
    </section>
  );
};

export const GrammarTheoryPart2: React.FC = () => {
  const { data } = useLanguage();
  return (
    <section className="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      <FadeIn>
        <div className="mb-8 text-center">
           <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">{data.grammarMaster.title2}</h2>
           <p className="text-slate-500 dark:text-slate-400">{data.grammarMaster.desc2}</p>
        </div>
        <TopicCard topic={data.grammarMasterData[1]} />
      </FadeIn>
    </section>
  );
};

export const GrammarTheoryPart3A: React.FC = () => {
  const { data } = useLanguage();
  return (
    <section className="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      <FadeIn>
        <div className="mb-8 text-center">
           <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">{data.grammarMaster.title3} (1)</h2>
           <p className="text-slate-500 dark:text-slate-400">{data.grammarMaster.desc3}</p>
        </div>
        <TopicCard topic={data.grammarMasterData[2]} />
      </FadeIn>
    </section>
  );
};

export const GrammarTheoryPart3B: React.FC = () => {
  const { data } = useLanguage();
  return (
    <section className="h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
      <FadeIn>
        <div className="mb-8 text-center">
           <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">{data.grammarMaster.title3} (2)</h2>
           <p className="text-slate-500 dark:text-slate-400">{data.grammarMaster.desc3}</p>
        </div>
        <TopicCard topic={data.grammarMasterData[3]} />
      </FadeIn>
    </section>
  );
};