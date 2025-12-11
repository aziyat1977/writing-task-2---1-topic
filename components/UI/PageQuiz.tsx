import React, { useState, useEffect } from 'react';
import { Check, X, Triangle, Square, Circle, ArrowRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGamification } from '../../context/GamificationContext';
import confetti from 'canvas-confetti';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

interface PageQuizProps {
  questions: QuizQuestion[];
}

// Custom Diamond Icon since it might not be in all Lucide versions
const DiamondIcon = ({ className, ...props }: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    {...props}
  >
    <path d="M2.7 12l9.3-9.3 9.3 9.3-9.3 9.3-9.3-9.3z" />
  </svg>
);

const SHAPES = [Triangle, DiamondIcon, Circle, Square];
const BG_COLORS = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-emerald-500'];
const BORDER_COLORS = ['border-red-700', 'border-blue-700', 'border-yellow-700', 'border-emerald-700'];
const SHADOW_COLORS = ['shadow-red-500/40', 'shadow-blue-500/40', 'shadow-yellow-500/40', 'shadow-emerald-500/40'];

export const PageQuiz: React.FC<PageQuizProps> = ({ questions }) => {
    // State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentOptions, setCurrentOptions] = useState<{text: string, originalIndex: number}[]>([]);
    const [selectedOriginalIndex, setSelectedOriginalIndex] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [timeLeft, setTimeLeft] = useState(20);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const { addXp, triggerSuccess } = useGamification();

    // Init Question & Randomize Options
    useEffect(() => {
        if (questions[currentIndex]) {
            const opts = questions[currentIndex].options.map((text, i) => ({ text, originalIndex: i }));
            // Shuffle Logic
            for (let i = opts.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [opts[i], opts[j]] = [opts[j], opts[i]];
            }
            setCurrentOptions(opts);
            setSelectedOriginalIndex(null);
            setIsAnswered(false);
            setTimeLeft(20);
        }
    }, [currentIndex, questions]);

    // Timer Logic
    useEffect(() => {
        if (isAnswered || isFinished) return;
        if (timeLeft <= 0) {
            handleTimeUp();
            return;
        }
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft, isAnswered, isFinished]);

    const handleTimeUp = () => {
        setIsAnswered(true);
        // No score for timeout
    };

    const handleAnswer = (originalIndex: number) => {
        if (isAnswered) return;
        setIsAnswered(true);
        setSelectedOriginalIndex(originalIndex);

        const isCorrect = originalIndex === questions[currentIndex].correctAnswerIndex;
        if (isCorrect) {
            const speedBonus = Math.floor(timeLeft * 5); // 5 pts per second left
            const points = 100 + speedBonus;
            setScore(prev => prev + points);
            addXp(points);
            triggerSuccess();
        }
    };

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
            });
        }
    };
    
    const restart = () => {
        setScore(0);
        setIsFinished(false);
        setCurrentIndex(0);
    };

    if (isFinished) {
        return (
             <div className="bg-slate-900 rounded-3xl p-12 text-center shadow-2xl border-4 border-slate-800 max-w-2xl mx-auto mt-10">
                <h2 className="text-4xl font-display font-bold text-white mb-6">Quiz Completed!</h2>
                <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-600 mb-8 drop-shadow-lg">
                    {score}
                </div>
                <p className="text-slate-400 text-xl mb-12">Total Score</p>
                <button 
                    onClick={restart}
                    className="bg-white text-slate-900 font-bold text-xl py-4 px-10 rounded-full hover:scale-105 transition-transform flex items-center gap-3 mx-auto"
                >
                    <RotateCcw size={24} /> Play Again
                </button>
             </div>
        );
    }

    const question = questions[currentIndex];

    return (
        <div className="w-full max-w-5xl mx-auto mt-8">
            {/* Header: Timer & Score */}
            <div className="flex justify-between items-center mb-6 px-4">
                 <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                        {/* Timer Circle */}
                        <svg className="w-full h-full -rotate-90">
                            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="none" className="text-slate-200 dark:text-slate-800" />
                            <circle 
                                cx="32" cy="32" r="28" 
                                stroke="currentColor" 
                                strokeWidth="6" 
                                fill="none" 
                                strokeDasharray={175} 
                                strokeDashoffset={175 - (175 * timeLeft) / 20}
                                className={`transition-all duration-1000 ease-linear ${timeLeft < 5 ? 'text-red-500' : 'text-purple-500'}`} 
                            />
                        </svg>
                        <span className="absolute text-xl font-bold font-mono text-slate-700 dark:text-white">{timeLeft}</span>
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-500">Seconds</span>
                 </div>
                 
                 <div className="bg-slate-900 text-white px-6 py-2 rounded-full font-mono font-bold text-xl shadow-lg border border-slate-700">
                    {score} pts
                 </div>
            </div>

            {/* Question Banner */}
            <motion.div 
                key={currentIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl text-center mb-8 border-b-8 border-slate-200 dark:border-slate-700 min-h-[200px] flex items-center justify-center"
            >
                <h3 className="text-2xl md:text-4xl font-display font-bold text-slate-800 dark:text-white leading-tight">
                    {question.question}
                </h3>
            </motion.div>

            {/* Answer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentOptions.map((opt, i) => {
                    const Shape = SHAPES[i % 4];
                    const bgColor = BG_COLORS[i % 4];
                    const borderColor = BORDER_COLORS[i % 4];
                    const shadowColor = SHADOW_COLORS[i % 4];
                    
                    // Visual State Logic
                    let opacity = "opacity-100";
                    let scale = "scale-100";
                    let overlay = null;

                    if (isAnswered) {
                         if (opt.originalIndex === question.correctAnswerIndex) {
                             // Correct Answer - Highlight
                             scale = "scale-[1.02]";
                             overlay = (
                                <div className="absolute inset-0 bg-emerald-500/90 flex items-center justify-center z-20 animate-in fade-in duration-300">
                                    <Check className="text-white w-16 h-16 drop-shadow-lg" strokeWidth={4} />
                                </div>
                             );
                         } else if (opt.originalIndex === selectedOriginalIndex) {
                             // Wrong Selected Answer - X Mark
                             overlay = (
                                <div className="absolute inset-0 bg-red-500/90 flex items-center justify-center z-20 animate-in fade-in duration-300">
                                    <X className="text-white w-16 h-16 drop-shadow-lg" strokeWidth={4} />
                                </div>
                             );
                         } else {
                             // Unselected & Incorrect - Fade out
                             opacity = "opacity-30 grayscale";
                         }
                    }

                    return (
                        <motion.button
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => handleAnswer(opt.originalIndex)}
                            disabled={isAnswered}
                            className={`
                                relative overflow-hidden h-32 md:h-40 rounded-xl flex items-center p-6 
                                transition-all duration-300 transform shadow-xl text-left group
                                ${bgColor} ${borderColor} ${shadowColor}
                                ${isAnswered ? '' : 'hover:scale-[1.02] hover:brightness-110 cursor-pointer border-b-8 active:border-b-4 active:translate-y-1'} 
                                ${opacity} ${scale}
                            `}
                        >   
                            {/* Background Shape */}
                            <Shape className="absolute -right-4 -bottom-4 w-32 h-32 text-black/10 rotate-12" strokeWidth={0} fill="currentColor" />
                            
                            {/* Icon Badge */}
                            <div className="absolute top-4 left-4 bg-black/20 p-2 rounded-lg">
                                <Shape className="w-6 h-6 text-white" fill="currentColor" />
                            </div>

                            <span className="text-xl md:text-2xl font-bold text-white relative z-10 pl-12 leading-tight drop-shadow-md">
                                {opt.text}
                            </span>

                            {overlay}
                        </motion.button>
                    )
                })}
            </div>

            {/* Next Button */}
            <AnimatePresence>
                {isAnswered && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 flex justify-end"
                    >
                        <button 
                            onClick={nextQuestion}
                            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xl font-bold py-4 px-12 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-3"
                        >
                            {currentIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"} <ArrowRight />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Explanation Card */}
             <AnimatePresence>
                {isAnswered && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="mt-6 bg-slate-100 dark:bg-slate-800/50 rounded-xl border-l-8 border-indigo-500 overflow-hidden"
                    >
                        <div className="p-6">
                            <h4 className="font-bold text-slate-500 uppercase tracking-widest text-sm mb-2">Explanation</h4>
                            <p className="text-lg text-slate-800 dark:text-slate-200">{question.explanation}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};