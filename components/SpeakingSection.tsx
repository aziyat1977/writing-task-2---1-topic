import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { Mic, MessageSquare, ArrowRight, ArrowLeft, BrainCircuit } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MagicCard } from './UI/MagicCard';
import { AudioRecorder } from './UI/AudioRecorder';
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Wizard Component ---
interface WizardProps {
  slides: any[];
  title: string;
  subtitle: string;
  renderSlide: (slide: any) => React.ReactNode;
}

const SpeakingWizard: React.FC<WizardProps> = ({ slides, title, subtitle, renderSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index if slides change significantly
  useEffect(() => {
    setCurrentIndex(0);
  }, [title]);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  if (!slides || slides.length === 0) {
    return <div className="text-center py-20 text-slate-500">No content available for this section.</div>;
  }

  const progress = ((currentIndex + 1) / slides.length) * 100;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 h-full flex flex-col">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-slate-200 dark:border-white/10 pb-6 gap-4">
        <div>
           <h2 className="text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400 mb-2">{title}</h2>
           <p className="text-slate-500 dark:text-slate-400 text-lg font-light">{subtitle}</p>
        </div>
        <div className="text-right flex items-baseline gap-2">
           <span className="text-4xl font-display font-bold text-slate-800 dark:text-white">{currentIndex + 1}</span>
           <span className="text-xl text-slate-400 dark:text-slate-500 font-light"> / {slides.length}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full mb-12 overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-sky-500 to-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center relative min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {renderSlide(slides[currentIndex])}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-12">
         <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all ${
               currentIndex === 0 
               ? 'opacity-30 cursor-not-allowed text-slate-400 dark:text-slate-500' 
               : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-transparent'
            }`}
         >
            <ArrowLeft size={24} /> Previous
         </button>

         <button
            onClick={nextSlide}
            disabled={currentIndex === slides.length - 1}
            className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all ${
               currentIndex === slides.length - 1
               ? 'opacity-30 cursor-not-allowed text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700' 
               : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-sky-50 hover:scale-105 shadow-xl shadow-sky-500/10'
            }`}
         >
            Next Question <ArrowRight size={24} />
         </button>
      </div>
    </div>
  );
};


export const SpeakingPart1: React.FC = () => {
  const { data } = useLanguage();
  // Safe access
  const partData = data.speakingData && data.speakingData[0] ? data.speakingData[0] : null;
  
  if (!partData) return <div>Loading...</div>;

  // Flatten data: Create an array of question objects
  const questions = partData.clusters?.flatMap(cluster => 
    cluster.questions.map((q: any) => ({
      topic: cluster.topic,
      text: q.text
    }))
  ) || [];

  return (
    <SpeakingWizard 
      slides={questions}
      title={data.speaking.part1Title}
      subtitle={data.speaking.part1Desc}
      renderSlide={(slide) => (
        <MagicCard className="p-12 md:p-16 flex flex-col items-center justify-center text-center min-h-[500px]" gradientColor="rgba(56, 189, 248, 0.1)">
           <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-500/20 text-sm font-bold uppercase tracking-widest">
                <MessageSquare size={14} />
                {slide.topic}
              </span>
           </div>
           
           <h3 className="text-4xl md:text-6xl font-serif font-medium text-slate-900 dark:text-white leading-tight mb-12">
             "{slide.text}"
           </h3>

           <div className="w-full max-w-md border-t border-slate-200 dark:border-white/10 pt-8">
              <AudioRecorder />
           </div>
        </MagicCard>
      )}
    />
  );
};

export const SpeakingPart2: React.FC = () => {
  const { data } = useLanguage();
  // Safe access
  const partData = data.speakingData && data.speakingData[1] ? data.speakingData[1] : null;

  if (!partData) return <div>Loading...</div>;

  const cards = partData.cueCards || [];

  return (
    <SpeakingWizard 
      slides={cards}
      title={data.speaking.part2Title}
      subtitle={data.speaking.part2Desc}
      renderSlide={(slide) => (
        <MagicCard className="p-10 md:p-16 min-h-[600px] flex flex-col" gradientColor="rgba(99, 102, 241, 0.15)">
            <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
               <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <BrainCircuit size={32} />
               </div>
               <div>
                  <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Cue Card Topic</h4>
                  <h3 className="text-3xl md:text-5xl font-serif font-medium text-slate-900 dark:text-white leading-tight">
                    {slide.topic}
                  </h3>
               </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/50 rounded-2xl p-8 border border-slate-200 dark:border-white/5 mb-12 w-full">
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest mb-6">{data.speaking.say}</p>
              <ul className="space-y-4">
                {slide.prompts.map((prompt: string, i: number) => (
                   <li key={i} className="flex items-center gap-4 text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-light">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                      {prompt}
                   </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto w-full max-w-md mx-auto">
               <AudioRecorder />
            </div>
        </MagicCard>
      )}
    />
  );
};

export const SpeakingPart3: React.FC = () => {
  const { data } = useLanguage();
  // Safe access
  const partData = data.speakingData && data.speakingData[2] ? data.speakingData[2] : null;

  if (!partData) return <div>Loading...</div>;

  // Flatten data
  const questions = partData.clusters?.flatMap(cluster => 
    cluster.questions.map((q: any) => ({
      topic: cluster.topic,
      text: q.text
    }))
  ) || [];

  return (
    <SpeakingWizard 
      slides={questions}
      title={data.speaking.part3Title}
      subtitle={data.speaking.part3Desc}
      renderSlide={(slide) => (
        <MagicCard className="p-12 md:p-16 flex flex-col items-center justify-center text-center min-h-[500px]" gradientColor="rgba(16, 185, 129, 0.1)">
           <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20 text-sm font-bold uppercase tracking-widest">
                <MessageSquare size={14} />
                {slide.topic}
              </span>
           </div>
           
           <h3 className="text-4xl md:text-6xl font-serif font-medium text-slate-900 dark:text-white leading-tight mb-12">
             "{slide.text}"
           </h3>

           <div className="w-full max-w-md border-t border-slate-200 dark:border-white/10 pt-8">
              <AudioRecorder />
           </div>
        </MagicCard>
      )}
    />
  );
};