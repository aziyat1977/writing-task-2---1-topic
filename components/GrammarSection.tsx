import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { GRAMMAR_QUESTIONS } from '../constants';
import { GrammarQuestion } from '../types';
import { Check, X, Eye, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// --- Text Parser Utility ---
const parseText = (text: string, highlightClass = "text-sky-300 font-bold") => {
  // Regex to match **bold** or ______
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

  const handleSelect = (id: string) => {
    if (hasSubmitted) return;
    setSelectedId(id);
    setHasSubmitted(true);
  };

  const isCorrect = selectedId ? question.options?.find(o => o.id === selectedId)?.isCorrect : false;

  return (
    <div className="space-y-4">
      <h4 className="text-lg text-slate-200 font-medium leading-relaxed">
        {question.question.split("______").map((part, i, arr) => (
          <React.Fragment key={i}>
            {parseText(part)}
            {i < arr.length - 1 && (
              <span className={`inline-block border-b-2 px-2 mx-1 min-w-[3rem] text-center font-bold transition-colors ${
                hasSubmitted 
                  ? isCorrect 
                    ? "border-emerald-500 text-emerald-400" 
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
          let stateStyles = "border-slate-700 bg-slate-900/50 text-slate-400 hover:bg-slate-800";
          if (hasSubmitted) {
            if (option.isCorrect) {
              stateStyles = "border-emerald-500/50 bg-emerald-500/10 text-emerald-400";
            } else if (selectedId === option.id && !option.isCorrect) {
              stateStyles = "border-red-500/50 bg-red-500/10 text-red-400 opacity-50";
            } else {
              stateStyles = "border-slate-800 bg-slate-900/20 text-slate-600 opacity-50";
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={hasSubmitted}
              className={`flex items-center justify-between p-4 rounded-lg border text-left transition-all text-sm font-medium ${stateStyles}`}
            >
              <span><span className="opacity-50 mr-2 uppercase">{option.id})</span> {option.text}</span>
              {hasSubmitted && option.isCorrect && <Check size={16} />}
              {hasSubmitted && selectedId === option.id && !option.isCorrect && <X size={16} />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const InputCard: React.FC<{ question: GrammarQuestion }> = ({ question }) => {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    if (input.trim().toLowerCase() === question.correctAnswer?.toLowerCase()) {
      setStatus('correct');
    } else {
      setStatus('incorrect');
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="text-lg text-slate-200 font-medium leading-relaxed">
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
            className={`w-full bg-slate-900/50 border rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 transition-all ${
              status === 'correct' ? 'border-emerald-500 focus:ring-emerald-500/20' : 
              status === 'incorrect' ? 'border-red-500 focus:ring-red-500/20' : 
              'border-slate-600 focus:border-sky-500 focus:ring-sky-500/20'
            }`}
          />
          <div className="absolute right-3 top-3.5 text-slate-400">
            {status === 'correct' && <Check size={20} className="text-emerald-500" />}
            {status === 'incorrect' && <X size={20} className="text-red-500" />}
          </div>
        </div>
        <button 
          type="submit"
          className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Check
        </button>
      </form>
      
      {status === 'incorrect' && (
        <p className="text-red-400 text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
          <X size={14} /> Try again.
        </p>
      )}
      {status === 'correct' && (
         <p className="text-emerald-400 text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
          <Check size={14} /> Correct! The answer is <span className="font-bold">"{question.correctAnswer}"</span>.
        </p>
      )}
    </div>
  );
};

const RevealCard: React.FC<{ question: GrammarQuestion }> = ({ question }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="space-y-4">
      <h4 className="text-lg text-slate-200 font-medium leading-relaxed">
        {parseText(question.question)}
      </h4>

      <div className="mt-4">
        {!isRevealed ? (
          <button 
            onClick={() => setIsRevealed(true)}
            className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-sm font-bold uppercase tracking-wider border border-sky-500/30 hover:border-sky-500/60 bg-sky-500/10 px-4 py-2 rounded-lg"
          >
            <Eye size={16} /> Reveal Model Answer
          </button>
        ) : (
          <div className="bg-emerald-900/20 border border-emerald-500/30 p-4 rounded-lg animate-in fade-in slide-in-from-top-2">
            <p className="text-emerald-100 italic">"{question.answerExplanation}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

const UniversalCard: React.FC<{ question: GrammarQuestion }> = ({ question }) => {
  return (
    <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 mb-6 hover:border-sky-500/30 transition-all">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold text-sky-500 uppercase tracking-wider bg-sky-500/10 px-2 py-1 rounded">
          {question.category}
        </span>
        <span className="text-xs text-slate-500 font-mono">Q{question.id}</span>
      </div>
      
      {question.type === 'multiple-choice' && <MultipleChoiceCard question={question} />}
      {question.type === 'input' && <InputCard question={question} />}
      {question.type === 'reveal' && <RevealCard question={question} />}
    </div>
  );
};

export const GrammarSection: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6 max-w-4xl mx-auto border-t border-slate-800">
      <FadeIn>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-sky-400 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-sky-500/10 flex items-center justify-center text-sky-400 text-lg">5</span>
            Grammar & Vocabulary
          </h2>
          <p className="text-slate-400 text-lg">
            Test your understanding of the structures used in the model answer.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-8">
        {GRAMMAR_QUESTIONS.map((q, i) => (
          <div key={q.id}>
             {/* Render Section Header if present */}
             {q.sectionHeader && (
               <FadeIn delay={0.1} className="mt-16 mb-8">
                 <div className="border-l-4 border-sky-500 pl-4 py-1">
                   <h3 className="text-xl font-bold text-slate-100">{q.sectionHeader}</h3>
                   {q.instruction && <p className="text-slate-400 text-sm mt-1">{q.instruction}</p>}
                 </div>
               </FadeIn>
             )}
             
             {/* Render Instruction if present (but not with header) */}
             {!q.sectionHeader && q.instruction && (
               <FadeIn delay={0.1} className="mb-4">
                  <p className="text-slate-400 text-sm italic border-b border-slate-800 pb-2 inline-block">{q.instruction}</p>
               </FadeIn>
             )}

             <FadeIn delay={0.2}>
               <UniversalCard question={q} />
             </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
};