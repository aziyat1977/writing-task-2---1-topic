import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { GrammarQuestion } from '../types';
import { Check, X, Eye, Zap, Trophy, ArrowRight, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useGamification } from '../context/GamificationContext';
import { motion, AnimatePresence } from 'framer-motion';

// --- Text Parser Utility ---
const parseText = (text: string, highlightClass = "text-sky-600 dark:text-sky-300 font-bold") => {
  const parts = text.split(/(\*\*.*?\*\*|______)/g);
  return parts.map((part, i) => {
    if (part === '______') {
      return <span key={i} className="inline-block w-12 border-b-2 border-slate-500 mx-1"></span>;
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <span key={i} className={highlightClass}>{part.slice(2, -2)}</span>;
    }
    return <span key={i}>{part}</span>;
  });
};

// --- Single Card Components ---

const MultipleChoiceCard: React.FC<{ question: GrammarQuestion, onComplete: () => void }> = ({ question, onComplete }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { addXp, triggerSuccess } = useGamification();

  const handleSelect = (id: string) => {
    if (hasSubmitted) return;
    setSelectedId(id);
    setHasSubmitted(true);

    const option = question.options?.find(o => o.id === id);
    if (option?.isCorrect) {
      addXp(20);
      triggerSuccess();
    }
    
    // Auto advance after short delay
    setTimeout(() => {
        onComplete();
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center mb-8 border-b-8 border-slate-200 dark:border-slate-700 min-h-[160px] flex flex-col items-center justify-center">
        <h4 className="text-2xl md:text-3xl font-display font-bold text-slate-800 dark:text-white leading-tight">
             {question.question.split("______").map((part, i, arr) => (
                <React.Fragment key={i}>
                    {parseText(part)}
                    {i < arr.length - 1 && (
                    <span className="inline-block border-b-4 border-slate-300 dark:border-slate-600 px-2 mx-1 min-w-[3rem] text-center text-sky-500">
                        {hasSubmitted && selectedId 
                         ? question.options?.find(o => o.id === selectedId)?.text 
                         : "______"}
                    </span>
                    )}
                </React.Fragment>
            ))}
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options?.map((option, i) => {
           let cardStyle = "relative overflow-hidden p-6 md:p-8 rounded-xl border-b-4 cursor-pointer transition-all duration-200 transform active:scale-95 flex items-center justify-center text-center min-h-[100px] shadow-lg text-xl font-bold";
           
           if (!hasSubmitted) {
               cardStyle += " bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 hover:-translate-y-1 hover:shadow-2xl hover:border-sky-500 dark:hover:border-sky-400 text-slate-600 dark:text-slate-300";
           } else {
               if (option.isCorrect) {
                   cardStyle += " bg-emerald-500 border-emerald-700 text-white scale-[1.02]";
               } else if (selectedId === option.id) {
                   cardStyle += " bg-red-500 border-red-700 text-white";
               } else {
                   cardStyle += " bg-slate-100 dark:bg-slate-900 border-transparent opacity-30 grayscale text-slate-400";
               }
           }

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={hasSubmitted}
              className={cardStyle}
            >
              <span className="relative z-10">{option.text}</span>
               {hasSubmitted && option.isCorrect && <div className="absolute top-2 right-2 text-white"><Check size={24} /></div>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const InputCard: React.FC<{ question: GrammarQuestion, onComplete: () => void }> = ({ question, onComplete }) => {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const { data } = useLanguage();
  const { addXp, triggerSuccess } = useGamification();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userAnswer = input.trim().toLowerCase();
    const coreAnswer = question.correctAnswer?.toLowerCase().trim() || "";
    
    if (userAnswer === coreAnswer) {
      setStatus('correct');
      addXp(30);
      triggerSuccess();
      setTimeout(onComplete, 1500);
    } else {
      setStatus('incorrect');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
       {/* Question Banner */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center mb-8 border-b-8 border-slate-200 dark:border-slate-700 w-full">
        <h4 className="text-2xl md:text-3xl font-display font-bold text-slate-800 dark:text-white leading-tight">
            {parseText(question.question)}
        </h4>
      </div>

      {question.wordBank && (
         <div className="w-full mb-8 bg-slate-100 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200 dark:border-white/10 flex flex-wrap justify-center gap-2">
            {question.wordBank.map((word, i) => (
               <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded text-slate-600 dark:text-slate-300 font-mono text-sm">
                 {word}
               </span>
             ))}
         </div>
      )}

      <form onSubmit={handleSubmit} className="w-full max-w-md relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            placeholder="Type answer..."
            className={`w-full bg-white dark:bg-slate-900 border-4 rounded-2xl px-6 py-6 text-2xl text-center font-bold text-slate-900 dark:text-white focus:outline-none transition-all duration-300 ${
              status === 'correct' ? 'border-emerald-500 shadow-lg' : 
              status === 'incorrect' ? 'border-red-500 shadow-lg' : 
              'border-slate-300 dark:border-slate-600 focus:border-sky-500'
            }`}
          />
          <AnimatePresence>
            {status === 'correct' && (
                <motion.div initial={{scale: 0}} animate={{scale: 1}} className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500">
                    <Check size={32} />
                </motion.div>
            )}
             {status === 'incorrect' && (
                <motion.div initial={{scale: 0}} animate={{scale: 1}} className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                    <X size={32} />
                </motion.div>
            )}
          </AnimatePresence>
      </form>

      <button 
          onClick={handleSubmit} 
          className="mt-6 bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-12 rounded-full text-lg shadow-lg hover:scale-105 transition-all"
      >
          {data.common.check}
      </button>
    </div>
  );
};

const RevealCard: React.FC<{ question: GrammarQuestion, onComplete: () => void }> = ({ question, onComplete }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { data } = useLanguage();
  const { addXp } = useGamification();

  const handleReveal = () => {
      setIsRevealed(true);
      addXp(10);
  }

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
       <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center mb-8 border-b-8 border-slate-200 dark:border-slate-700 w-full">
         <h4 className="text-2xl md:text-3xl font-display font-bold text-slate-800 dark:text-white leading-tight">
            {parseText(question.question)}
         </h4>
       </div>

       <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.button 
            key="reveal-btn"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReveal}
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-xl transition-all"
          >
            <Eye size={24} /> {data.common.reveal}
          </motion.button>
        ) : (
          <motion.div 
            key="revealed-content"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-500 rounded-2xl p-8 shadow-2xl border-4 border-emerald-400"
          >
            <p className="text-white text-2xl font-serif font-medium">"{question.answerExplanation}"</p>
            <button 
                onClick={onComplete}
                className="mt-6 bg-white text-emerald-600 font-bold px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors"
            >
                Continue
            </button>
          </motion.div>
        )}
       </AnimatePresence>
    </div>
  );
};

const PracticeWizard: React.FC<{ questions: GrammarQuestion[], title: string, subtitle: string }> = ({ questions, title, subtitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    
    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    const restart = () => {
        setCurrentIndex(0);
        setIsFinished(false);
    }

    if (isFinished) {
         return (
             <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="bg-slate-900 rounded-3xl p-12 shadow-2xl border-4 border-slate-800 max-w-lg w-full">
                    <Trophy size={64} className="text-yellow-400 mx-auto mb-6" />
                    <h2 className="text-4xl font-display font-bold text-white mb-4">Practice Complete!</h2>
                    <button 
                        onClick={restart}
                        className="bg-white text-slate-900 font-bold text-xl py-4 px-10 rounded-full hover:scale-105 transition-transform flex items-center gap-3 mx-auto"
                    >
                        <RotateCcw size={24} /> Review Again
                    </button>
                </div>
             </div>
        );
    }

    const q = questions[currentIndex];

    return (
        <section className="h-full flex flex-col w-full max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-6 flex justify-between items-end px-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">{title}</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">{subtitle}</p>
                </div>
                <div className="text-right">
                    <span className="text-3xl font-bold text-sky-600 dark:text-sky-400">{currentIndex + 1}</span>
                    <span className="text-lg text-slate-400"> / {questions.length}</span>
                </div>
            </div>
            
            <div className="flex-grow flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        {q.type === 'multiple-choice' && <MultipleChoiceCard question={q} onComplete={handleNext} />}
                        {q.type === 'input' && <InputCard question={q} onComplete={handleNext} />}
                        {q.type === 'reveal' && <RevealCard question={q} onComplete={handleNext} />}
                    </motion.div>
                </AnimatePresence>
            </div>
            
            {/* Manual Navigation Controls if needed */}
            <div className="mt-8 flex justify-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
                 <button onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))} disabled={currentIndex === 0} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-30"><ArrowRight className="rotate-180" /></button>
                 <button onClick={handleNext} disabled={currentIndex === questions.length - 1} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-30"><ArrowRight /></button>
            </div>
        </section>
    );
};

export const GrammarPracticePart1: React.FC = () => {
  const { data } = useLanguage();
  const questions = data.grammarQuestions.filter(q => q.id <= 10);
  return <PracticeWizard questions={questions} title={data.grammarPractice.title1} subtitle={data.grammarPractice.sub1} />;
};

export const GrammarPracticePart2: React.FC = () => {
  const { data } = useLanguage();
  const questions = data.grammarQuestions.filter(q => q.id > 10 && q.id <= 30);
  return <PracticeWizard questions={questions} title={data.grammarPractice.title2} subtitle={data.grammarPractice.sub2} />;
};

export const GrammarPracticePart3: React.FC = () => {
  const { data } = useLanguage();
  const questions = data.grammarQuestions.filter(q => q.id > 30);
  return <PracticeWizard questions={questions} title={data.grammarPractice.title3} subtitle={data.grammarPractice.sub3} />;
};