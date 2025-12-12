import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../context/LanguageContext';
import { Check, X, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuestionResult: React.FC<{ isCorrect?: boolean; explanation?: string; show: boolean }> = ({ isCorrect, explanation, show }) => {
  if (!show) return null;
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-2 text-sm">
        {isCorrect ? (
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1"><Check size={14} /> Correct</span>
        ) : (
          <span className="text-red-500 font-bold flex items-center gap-1"><X size={14} /> Incorrect</span>
        )}
        {explanation && <p className="text-slate-500 dark:text-slate-400 mt-1 italic">{explanation}</p>}
      </motion.div>
    </AnimatePresence>
  );
};

export const ReadingSection: React.FC = () => {
  const { data } = useLanguage();
  const { passage, gapFill, ynng, matching } = data.readingData;

  const [gapAnswers, setGapAnswers] = useState<Record<number, string>>({});
  const [ynngAnswers, setYnngAnswers] = useState<Record<number, string>>({});
  const [matchingAnswers, setMatchingAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const checkGap = (id: number) => gapFill.answers.find(a => a.id === id);
  const checkYNNG = (id: number) => ynng.questions.find(q => q.id === id);
  const checkMatching = (id: number) => matching.questions.find(q => q.id === id);

  const reset = () => {
    setGapAnswers({});
    setYnngAnswers({});
    setMatchingAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getScore = () => {
    let score = 0;
    let total = gapFill.answers.length + ynng.questions.length + matching.questions.length;

    Object.entries(gapAnswers).forEach(([k, v]) => {
      // Cast v to string as Object.entries can infer value as unknown in some configurations
      if (checkGap(parseInt(k))?.answer?.toLowerCase() === (v as string).toLowerCase()) score++;
    });
    Object.entries(ynngAnswers).forEach(([k, v]) => {
      if (checkYNNG(parseInt(k))?.answer === (v as string)) score++;
    });
    Object.entries(matchingAnswers).forEach(([k, v]) => {
      if (checkMatching(parseInt(k))?.answer === (v as string)) score++;
    });
    return { score, total };
  };

  const renderTextWithGaps = () => {
    const parts = gapFill.textWithGaps.split(/(\{\d+\})/g);
    return (
      <p className="leading-relaxed text-slate-800 dark:text-slate-300 text-lg">
        {parts.map((part, i) => {
          const match = part.match(/\{(\d+)\}/);
          if (match) {
            const id = parseInt(match[1]);
            const isCorrect = submitted && gapAnswers[id]?.toLowerCase() === checkGap(id)?.answer.toLowerCase();
            return (
              <span key={i} className="inline-block mx-1 relative">
                <select
                  value={gapAnswers[id] || ""}
                  onChange={(e) => setGapAnswers({ ...gapAnswers, [id]: e.target.value })}
                  disabled={submitted}
                  className={`appearance-none font-bold py-1 px-3 pr-8 rounded border-b-2 bg-slate-100 dark:bg-slate-800 focus:outline-none transition-colors
                    ${submitted ? (isCorrect ? 'border-emerald-500 text-emerald-600' : 'border-red-500 text-red-500') : 'border-slate-300 dark:border-slate-600 focus:border-sky-500'}
                  `}
                >
                  <option value="">{id}</option>
                  {gapFill.wordBox.map((word) => (
                    <option key={word} value={word}>{word}</option>
                  ))}
                </select>
                {submitted && !isCorrect && (
                   <span className="absolute -top-6 left-0 text-xs bg-emerald-100 text-emerald-700 px-1 rounded whitespace-nowrap">
                     {checkGap(id)?.answer}
                   </span>
                )}
              </span>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </p>
    );
  };

  return (
    <div className="h-full flex flex-col md:flex-row overflow-hidden relative">
      {/* Left Pane: Passage (Scrollable) */}
      <div className="md:w-1/2 h-full overflow-y-auto custom-scroll border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 md:p-10">
         <FadeIn>
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">{passage.title}</h2>
            <div className="space-y-6">
                {passage.paragraphs.map((p) => (
                    <div key={p.label} className="relative pl-8">
                        <span className="absolute left-0 top-0 font-bold text-slate-400 text-sm">{p.label}</span>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg font-serif">
                            {p.text}
                        </p>
                    </div>
                ))}
            </div>
         </FadeIn>
      </div>

      {/* Right Pane: Questions (Scrollable) */}
      <div className="md:w-1/2 h-full overflow-y-auto custom-scroll bg-slate-50 dark:bg-[#020617] p-6 md:p-10 pb-20">
         <FadeIn delay={0.2}>
            {/* Gap Fill Section */}
            <div className="mb-12">
               <h3 className="text-xl font-bold text-sky-600 dark:text-sky-400 mb-2">{gapFill.title}</h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 uppercase tracking-wider font-bold">{gapFill.prompt}</p>
               
               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  {renderTextWithGaps()}
               </div>

                {submitted && (
                    <div className="mt-4 space-y-2">
                        {gapFill.answers.map(ans => {
                            const isCorrect = gapAnswers[ans.id]?.toLowerCase() === ans.answer.toLowerCase();
                            if(isCorrect) return null;
                             return (
                                <div key={ans.id} className="text-xs text-slate-500">
                                   <strong className="text-red-400">Q{ans.id}:</strong> {ans.explanation}
                                </div>
                             )
                        })}
                    </div>
                )}
            </div>

            {/* YNNG Section */}
            <div className="mb-12">
                <h3 className="text-xl font-bold text-sky-600 dark:text-sky-400 mb-4">{ynng.title}</h3>
                <div className="space-y-6">
                    {ynng.questions.map((q) => {
                        const isCorrect = submitted && ynngAnswers[q.id] === q.answer;
                        return (
                           <div key={q.id} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                              <p className="text-slate-800 dark:text-slate-200 mb-4 font-medium"><span className="text-slate-400 font-bold mr-2">{q.id}.</span> {q.text}</p>
                              <div className="flex gap-2">
                                  {['YES', 'NO', 'NOT GIVEN'].map(opt => (
                                      <button
                                         key={opt}
                                         onClick={() => setYnngAnswers({...ynngAnswers, [q.id]: opt})}
                                         disabled={submitted}
                                         className={`px-4 py-2 rounded text-xs font-bold transition-all border
                                            ${ynngAnswers[q.id] === opt 
                                                ? 'bg-sky-500 text-white border-sky-500' 
                                                : 'bg-slate-100 dark:bg-slate-900 text-slate-500 border-transparent hover:border-slate-300'
                                            }
                                         `}
                                      >
                                          {opt}
                                      </button>
                                  ))}
                              </div>
                              <QuestionResult isCorrect={isCorrect} explanation={q.explanation} show={submitted} />
                           </div>
                        );
                    })}
                </div>
            </div>

            {/* Matching Section */}
            <div className="mb-12">
                <h3 className="text-xl font-bold text-sky-600 dark:text-sky-400 mb-4">{matching.title}</h3>
                <div className="space-y-6">
                     {matching.questions.map((q) => {
                         const isCorrect = submitted && matchingAnswers[q.id] === q.answer;
                         return (
                             <div key={q.id} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                  <p className="text-slate-800 dark:text-slate-200 mb-4 font-medium"><span className="text-slate-400 font-bold mr-2">{q.id}.</span> {q.text}</p>
                                  <select 
                                     value={matchingAnswers[q.id] || ""}
                                     onChange={(e) => setMatchingAnswers({...matchingAnswers, [q.id]: e.target.value})}
                                     disabled={submitted}
                                     className="w-full p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:border-sky-500 focus:outline-none"
                                  >
                                      <option value="">Select matching phrase...</option>
                                      {matching.endings.map(end => (
                                          <option key={end.id} value={end.id}>{end.id}. {end.text}</option>
                                      ))}
                                  </select>
                                  <QuestionResult isCorrect={isCorrect} explanation={q.explanation} show={submitted} />
                             </div>
                         )
                     })}
                </div>
            </div>
            
            {/* Action Bar */}
            <div className="sticky bottom-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center rounded-xl">
               {!submitted ? (
                   <button 
                     onClick={() => setSubmitted(true)}
                     className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-8 rounded-full shadow-lg w-full md:w-auto"
                   >
                     Check Answers
                   </button>
               ) : (
                   <div className="flex items-center justify-between w-full">
                       <div className="flex flex-col">
                           <span className="text-xs uppercase font-bold text-slate-500">Score</span>
                           <span className="text-2xl font-bold text-slate-900 dark:text-white">{getScore().score} / {getScore().total}</span>
                       </div>
                       <button 
                          onClick={reset}
                          className="flex items-center gap-2 text-slate-500 hover:text-sky-500 font-bold px-4 py-2"
                        >
                           <RotateCcw size={18} /> Retry
                       </button>
                   </div>
               )}
            </div>
         </FadeIn>
      </div>
    </div>
  );
};