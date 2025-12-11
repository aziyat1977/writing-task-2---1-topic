import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { GrammarQuestion } from '../types';
import { Check, X, Eye, Zap, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useGamification } from '../context/GamificationContext';
import { MagicCard } from './UI/MagicCard';
import { motion, AnimatePresence } from 'framer-motion';

// --- Text Parser Utility ---
const parseText = (text: string, highlightClass = "text-sky-300 font-bold") => {
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

// --- Question Card Components ---

const MultipleChoiceCard: React.FC<{ question: GrammarQuestion }> = ({ question }) => {
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
  };

  const isCorrect = selectedId ? question.options?.find(o => o.id === selectedId)?.isCorrect : false;

  return (
    <div className="space-y-6">
      <h4 className="text-xl text-slate-200 font-medium leading-relaxed">
        {question.question.split("______").map((part, i, arr) => (
          <React.Fragment key={i}>
            {parseText(part)}
            {i < arr.length - 1 && (
              <span className={`inline-block border-b-2 px-3 mx-1 min-w-[3rem] text-center font-bold transition-all duration-500 ${
                hasSubmitted 
                  ? isCorrect 
                    ? "border-emerald-500 text-emerald-400 scale-110" 
                    : "border-red-500 text-red-400"
                  : "border-slate-500 text-slate-500"
              }`}>
                {hasSubmitted && selectedId 
                  ? question.options?.find(o => o.id === selectedId)?.text 
                  : "______"}
              </span>
            )}
          </React.Fragment>
        ))}
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {question.options?.map((option) => {
          let stateStyles = "border-white/5 bg-white/5 text-slate-400 hover:bg-white/10 hover:border-white/20";
          
          if (hasSubmitted) {
            if (option.isCorrect) {
              stateStyles = "border-emerald-500/50 bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]";
            } else if (selectedId === option.id && !option.isCorrect) {
              stateStyles = "border-red-500/50 bg-red-500/10 text-red-400 opacity-50";
            } else {
              stateStyles = "border-transparent opacity-30";
            }
          }

          return (
            <motion.button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={hasSubmitted}
              whileTap={!hasSubmitted ? { scale: 0.98 } : {}}
              className={`relative flex items-center justify-between p-4 rounded-xl border text-left transition-all text-sm font-medium overflow-hidden ${stateStyles}`}
            >
              <span className="relative z-10"><span className="opacity-50 mr-2 uppercase font-mono">{option.id})</span> {option.text}</span>
              <AnimatePresence>
                {hasSubmitted && option.isCorrect && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-emerald-400">
                     <Check size={20} />
                  </motion.div>
                )}
                {hasSubmitted && selectedId === option.id && !option.isCorrect && (
                   <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-red-400">
                     <X size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

const InputCard: React.FC<{ question: GrammarQuestion }> = ({ question }) => {
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
    } else {
      setStatus('incorrect');
    }
  };

  return (
    <div className="space-y-6">
      {question.wordBank && (
         <div className="mb-6 bg-slate-900/40 p-5 rounded-xl border border-white/10">
           <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-3 flex items-center gap-2"><Trophy size={12} className="text-yellow-500"/> {data.grammarPractice.wordBank}</p>
           <div className="flex flex-wrap gap-2">
             {question.wordBank.map((word, i) => (
               <span key={i} className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-sky-200 text-xs font-mono shadow-sm">
                 {word}
               </span>
             ))}
           </div>
         </div>
      )}

      <h4 className="text-xl text-slate-200 font-medium leading-relaxed">
        {parseText(question.question)}
      </h4>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-grow">
          <input 
            type="text" 
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            placeholder="Type answer here..."
            className={`w-full bg-slate-900/50 border rounded-xl px-5 py-4 text-slate-200 focus:outline-none transition-all duration-300 ${
              status === 'correct' ? 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 
              status === 'incorrect' ? 'border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]' : 
              'border-slate-700 focus:border-sky-500 focus:shadow-[0_0_20px_rgba(56,189,248,0.2)]'
            }`}
          />
          <div className="absolute right-4 top-4 text-slate-400">
            <AnimatePresence>
                {status === 'correct' && <motion.div initial={{scale: 0}} animate={{scale: 1}}><Check size={24} className="text-emerald-500" /></motion.div>}
                {status === 'incorrect' && <motion.div initial={{scale: 0}} animate={{scale: 1}}><X size={24} className="text-red-500" /></motion.div>}
            </AnimatePresence>
          </div>
        </div>
        <motion.button 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-br from-sky-500 to-blue-600 text-white px-8 py-2 rounded-xl font-bold shadow-lg shadow-sky-500/20"
        >
          {data.common.check}
        </motion.button>
      </form>
      
      <AnimatePresence>
        {status === 'incorrect' && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm flex items-center gap-2">
                    <X size={14} /> {data.common.tryAgain}
                </p>
            </motion.div>
        )}
        {status === 'correct' && (
             <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <p className="text-emerald-400 text-sm flex items-center gap-2">
                    <Check size={14} /> {data.common.correct} The answer is <span className="font-bold text-white">"{question.correctAnswer}"</span>.
                </p>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const RevealCard: React.FC<{ question: GrammarQuestion }> = ({ question }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { data } = useLanguage();
  const { addXp } = useGamification();

  const handleReveal = () => {
      setIsRevealed(true);
      addXp(10);
  }

  return (
    <div className="space-y-6">
      <h4 className="text-xl text-slate-200 font-medium leading-relaxed">
        {parseText(question.question)}
      </h4>

      <div className="mt-4">
        {!isRevealed ? (
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleReveal}
            className="flex items-center gap-2 text-sky-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider border border-sky-500/30 hover:bg-sky-500 hover:border-sky-500 px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(56,189,248,0.1)] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
          >
            <Eye size={16} /> {data.common.reveal}
          </motion.button>
        ) : (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/20 blur-[30px] rounded-full" />
            <p className="text-emerald-100 italic relative z-10 font-serif text-lg">"{question.answerExplanation}"</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const UniversalCard: React.FC<{ question: GrammarQuestion }> = ({ question }) => {
  return (
    <MagicCard className="p-8 mb-8" gradientColor="rgba(99, 102, 241, 0.15)">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full flex items-center gap-2">
          <Zap size={10} />
          {question.category}
        </span>
        <span className="text-xs text-slate-500 font-mono font-bold">Q{question.id}</span>
      </div>
      
      {question.type === 'multiple-choice' && <MultipleChoiceCard question={question} />}
      {question.type === 'input' && <InputCard question={question} />}
      {question.type === 'reveal' && <RevealCard question={question} />}
    </MagicCard>
  );
};

const QuestionSet: React.FC<{ questions: GrammarQuestion[], title: string, subtitle: string }> = ({ questions, title, subtitle }) => (
  <section className="py-6 px-6 max-w-5xl mx-auto">
    <FadeIn>
       <div className="mb-12">
          <h2 className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mb-3">{title}</h2>
          <p className="text-slate-400 text-lg font-light">{subtitle}</p>
       </div>
       <div className="space-y-6">
          {questions.map((q) => (
             <UniversalCard key={q.id} question={q} />
          ))}
       </div>
    </FadeIn>
  </section>
);

export const GrammarPracticePart1: React.FC = () => {
  const { data } = useLanguage();
  const questions = data.grammarQuestions.filter(q => q.id <= 10);
  return <QuestionSet questions={questions} title={data.grammarPractice.title1} subtitle={data.grammarPractice.sub1} />;
};

export const GrammarPracticePart2: React.FC = () => {
  const { data } = useLanguage();
  const questions = data.grammarQuestions.filter(q => q.id > 10 && q.id <= 30);
  return <QuestionSet questions={questions} title={data.grammarPractice.title2} subtitle={data.grammarPractice.sub2} />;
};

export const GrammarPracticePart3: React.FC = () => {
  const { data } = useLanguage();
  const questions = data.grammarQuestions.filter(q => q.id > 30);
  return <QuestionSet questions={questions} title={data.grammarPractice.title3} subtitle={data.grammarPractice.sub3} />;
};