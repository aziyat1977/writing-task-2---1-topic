import React from 'react';
import { FadeIn } from './FadeIn';
import { Mic, Book, PenTool, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MFPCard: React.FC<{ topic: any }> = ({ topic }) => {
  const { data } = useLanguage();

  return (
    <div className="bg-white/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-xl overflow-hidden shadow-lg w-full mb-8">
       {/* Header */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-900/50">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{topic.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 italic text-sm md:text-base border-l-4 border-sky-500 pl-3">
          {topic.function}
        </p>
      </div>

      <div className="p-6 grid gap-8">
        {topic.rows.map((row: any, i: number) => (
          <div key={i} className="relative bg-white dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
             {/* Feature Badge */}
             <div className="absolute -top-3 -left-3 bg-indigo-600 text-white px-3 py-1 rounded-lg shadow-lg font-mono font-bold text-sm">
                {row.feature}
             </div>

             <div className="grid md:grid-cols-2 gap-6 mt-2">
                {/* Meaning Section */}
                <div>
                   <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
                      <Book size={14} /> {data.grammarMaster.mfpMeaning}
                   </h4>
                   <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                      {row.meaning}
                   </p>
                </div>

                {/* Form Section */}
                <div>
                   <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
                      <PenTool size={14} /> {data.grammarMaster.mfpForm}
                   </h4>
                   <p className="font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 p-3 rounded-lg text-sm">
                      {row.form || row.example}
                   </p>
                </div>
             </div>

             {/* Drill Section */}
             <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500 dark:text-orange-400 mb-2">
                   <Zap size={14} /> {data.grammarMaster.drill}
                </h4>
                <div className="bg-orange-50 dark:bg-orange-900/10 p-3 rounded-lg text-slate-800 dark:text-slate-200 text-sm md:text-base font-medium" 
                     dangerouslySetInnerHTML={{ __html: row.drill.replace(/\*\*(.*?)\*\*/g, '<strong class="text-orange-600 dark:text-orange-400">$1</strong>') }} 
                />
             </div>
          </div>
        ))}

        {/* Pronunciation Section */}
        <div className="bg-indigo-50 dark:bg-indigo-900/10 rounded-xl p-4 flex items-start gap-3 border border-indigo-100 dark:border-indigo-500/20">
           <div className="p-2 bg-indigo-100 dark:bg-indigo-500/20 rounded-full text-indigo-600 dark:text-indigo-400">
              <Mic size={20} />
           </div>
           <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1">
                 {data.grammarMaster.mfpPronunciation}
              </h4>
              <p className="text-indigo-900 dark:text-indigo-200 text-sm">
                 {topic.pronunciation}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export const GrammarTheoryPart1: React.FC = () => {
  const { data } = useLanguage();
  return (
    <section className="h-full flex flex-col justify-center max-w-5xl mx-auto px-6">
      <FadeIn>
        <div className="mb-6 text-center">
           <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">{data.grammarMaster.title1}</h2>
           <p className="text-slate-500 dark:text-slate-400">{data.grammarMaster.desc1}</p>
        </div>
        {data.grammarMasterData[0] && <MFPCard topic={data.grammarMasterData[0]} />}
      </FadeIn>
    </section>
  );
};

export const GrammarTheoryPart2: React.FC = () => {
  const { data } = useLanguage();
  return (
    <section className="h-full flex flex-col justify-center max-w-5xl mx-auto px-6">
      <FadeIn>
        <div className="mb-6 text-center">
           <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">{data.grammarMaster.title2}</h2>
           <p className="text-slate-500 dark:text-slate-400">{data.grammarMaster.desc2}</p>
        </div>
        {data.grammarMasterData[1] && <MFPCard topic={data.grammarMasterData[1]} />}
      </FadeIn>
    </section>
  );
};

export const GrammarTheoryPart3A: React.FC = () => {
  const { data } = useLanguage();
  return (
    <section className="h-full flex flex-col justify-center max-w-5xl mx-auto px-6">
      <FadeIn>
        <div className="mb-6 text-center">
           <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">{data.grammarMaster.title3} (1)</h2>
           <p className="text-slate-500 dark:text-slate-400">{data.grammarMaster.desc3}</p>
        </div>
        {data.grammarMasterData[2] && <MFPCard topic={data.grammarMasterData[2]} />}
      </FadeIn>
    </section>
  );
};

export const GrammarTheoryPart3B: React.FC = () => {
  const { data } = useLanguage();
  return (
    <section className="h-full flex flex-col justify-center max-w-5xl mx-auto px-6">
      <FadeIn>
        <div className="mb-6 text-center">
           <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">{data.grammarMaster.title3} (2)</h2>
           <p className="text-slate-500 dark:text-slate-400">{data.grammarMaster.desc3}</p>
        </div>
        {data.grammarMasterData[3] && <MFPCard topic={data.grammarMasterData[3]} />}
      </FadeIn>
    </section>
  );
};

export const GrammarTheoryPart4: React.FC = () => {
  const { data } = useLanguage();
  return (
    <section className="h-full flex flex-col justify-center max-w-5xl mx-auto px-6">
      <FadeIn>
        <div className="mb-6 text-center">
           <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">{data.grammarMaster.title4}</h2>
           <p className="text-slate-500 dark:text-slate-400">{data.grammarMaster.desc4}</p>
        </div>
        {data.grammarMasterData[4] && <MFPCard topic={data.grammarMasterData[4]} />}
      </FadeIn>
    </section>
  );
};
