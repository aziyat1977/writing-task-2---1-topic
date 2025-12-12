
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PhaseOnePart1, PhaseOnePart2A, PhaseOnePart2B, PhaseOnePart3 } from './components/PhaseOne';
import { PhaseTwoPart1, PhaseTwoPart2A, PhaseTwoPart2B, PhaseTwoPart3 } from './components/PhaseTwo';
import { PhaseThreePart1A, PhaseThreePart1B, PhaseThreePart2, PhaseThreePart3 } from './components/PhaseThree';
import { PhaseFourPart1, PhaseFourPart2, PhaseFourPart3 } from './components/PhaseFour';
import { GrammarPracticePart1, GrammarPracticePart2, GrammarPracticePart3 } from './components/GrammarSection';
import { GrammarTheoryPart1, GrammarTheoryPart2, GrammarTheoryPart3A, GrammarTheoryPart3B } from './components/GrammarMasterclass';
import { SpeakingPart1, SpeakingPart2, SpeakingPart3 } from './components/SpeakingSection';
import { ReadingSection } from './components/ReadingSection';
import { Quiz1_1, Quiz1_2, Quiz1_3, Quiz2_1, Quiz2_2, Quiz2_3, Quiz3_1, Quiz3_2, Quiz3_3, Quiz4_1, Quiz4_2, Quiz4_3, QuizGrammar1, QuizGrammar2, QuizGrammar3 } from './components/Quizzes';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { GamificationProvider, useGamification } from './context/GamificationContext';
import { ThemeProvider } from './context/ThemeContext';
import { ResponsiveProvider, useResponsive } from './context/ResponsiveContext';

interface PageWrapperProps {
  children: React.ReactNode;
  prev?: { path: string; label: string };
  next?: { path: string; label: string };
  progressVal: number;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, prev, next, progressVal }) => {
  const { data } = useLanguage();
  const { setProgress } = useGamification();
  const { isCompact } = useResponsive(); // Use responsive context to adjust padding/layout if needed

  useEffect(() => {
    setProgress(progressVal);
  }, [progressVal, setProgress]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full flex flex-col relative overflow-hidden"
      style={{ height: 'var(--app-height)' }} // Ultra-precise height matching viewport
    >
      {/* Main Content Area - Flexible height with internal scroll */}
      <div className="flex-1 w-full max-w-[1920px] mx-auto min-h-0 flex flex-col pt-20">
         <div 
           className={`h-full overflow-y-auto custom-scroll flex flex-col items-center w-full ${isCompact ? 'px-3' : 'px-6'}`}
         > 
            <div className="w-full max-w-7xl mx-auto py-4 md:py-8 flex flex-col items-center justify-center min-h-full">
               {children}
            </div>
         </div>
      </div>
      
      {/* Compact Pagination Footer - Adjusts visibility based on available space */}
      {(prev || next) && (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 shrink-0 flex justify-between items-center z-10 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950 dark:to-transparent">
            {prev ? (
              <Link 
                to={prev.path} 
                className="group flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all px-3 py-2 md:px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 active:scale-95"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-sky-500" />
                <span className="flex flex-col items-start">
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest hidden xs:block">{data.common.prev}</span>
                  <span className="font-display font-semibold text-xs md:text-sm truncate max-w-[100px] md:max-w-xs">{prev.label}</span>
                </span>
              </Link>
            ) : <div />}
            
            {next ? (
              <Link 
                to={next.path} 
                className="group flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all px-3 py-2 md:px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-right active:scale-95"
              >
                <span className="flex flex-col items-end">
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest hidden xs:block">{data.common.next}</span>
                  <span className="font-display font-semibold text-xs md:text-sm truncate max-w-[100px] md:max-w-xs">{next.label}</span>
                </span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-emerald-500" />
              </Link>
            ) : <div />}
        </div>
      )}
    </motion.div>
  );
};

// Special wrapper for Reading Section to allow full height split view
const ReadingWrapper: React.FC<{ progressVal: number }> = ({ progressVal }) => {
    const { setProgress } = useGamification();
    useEffect(() => setProgress(progressVal), [progressVal, setProgress]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-[calc(var(--app-height)-5rem)] mt-20" // Adjust for fixed header
        >
            <ReadingSection />
        </motion.div>
    );
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  const { data } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        
        {/* Phase 1 */}
        <Route path="/phase/1/1" element={<PageWrapper progressVal={2} prev={{ path: '/', label: data.nav.overview }} next={{ path: '/phase/1/1/quiz', label: "Quiz" }}><PhaseOnePart1 /></PageWrapper>} />
        <Route path="/phase/1/1/quiz" element={<PageWrapper progressVal={5} prev={{ path: '/phase/1/1', label: data.phase1.part1.title }} next={{ path: '/phase/1/2/1', label: data.phase1.part2.title + " (A)" }}><Quiz1_1 /></PageWrapper>} />
        
        {/* Split 1.2 */}
        <Route path="/phase/1/2/1" element={<PageWrapper progressVal={8} prev={{ path: '/phase/1/1/quiz', label: "Quiz" }} next={{ path: '/phase/1/2/2', label: data.phase1.part2.title + " (B)" }}><PhaseOnePart2A /></PageWrapper>} />
        <Route path="/phase/1/2/2" element={<PageWrapper progressVal={9} prev={{ path: '/phase/1/2/1', label: "Part A" }} next={{ path: '/phase/1/2/quiz', label: "Quiz" }}><PhaseOnePart2B /></PageWrapper>} />
        
        <Route path="/phase/1/2/quiz" element={<PageWrapper progressVal={11} prev={{ path: '/phase/1/2/2', label: "Part B" }} next={{ path: '/phase/1/3', label: data.phase1.part3.title }}><Quiz1_2 /></PageWrapper>} />

        <Route path="/phase/1/3" element={<PageWrapper progressVal={14} prev={{ path: '/phase/1/2/quiz', label: "Quiz" }} next={{ path: '/phase/1/3/quiz', label: "Quiz" }}><PhaseOnePart3 /></PageWrapper>} />
        <Route path="/phase/1/3/quiz" element={<PageWrapper progressVal={17} prev={{ path: '/phase/1/3', label: data.phase1.part3.title }} next={{ path: '/phase/2/1', label: data.phase2.part1.title }}><Quiz1_3 /></PageWrapper>} />
        
        {/* Phase 2 */}
        <Route path="/phase/2/1" element={<PageWrapper progressVal={20} prev={{ path: '/phase/1/3/quiz', label: "Quiz" }} next={{ path: '/phase/2/1/quiz', label: "Quiz" }}><PhaseTwoPart1 /></PageWrapper>} />
        <Route path="/phase/2/1/quiz" element={<PageWrapper progressVal={23} prev={{ path: '/phase/2/1', label: data.phase2.part1.title }} next={{ path: '/phase/2/2/1', label: data.phase2.part2.title + " (A)" }}><Quiz2_1 /></PageWrapper>} />

        {/* Split 2.2 */}
        <Route path="/phase/2/2/1" element={<PageWrapper progressVal={26} prev={{ path: '/phase/2/1/quiz', label: "Quiz" }} next={{ path: '/phase/2/2/2', label: data.phase2.part2.title + " (B)" }}><PhaseTwoPart2A /></PageWrapper>} />
        <Route path="/phase/2/2/2" element={<PageWrapper progressVal={28} prev={{ path: '/phase/2/2/1', label: "Part A" }} next={{ path: '/phase/2/2/quiz', label: "Quiz" }}><PhaseTwoPart2B /></PageWrapper>} />

        <Route path="/phase/2/2/quiz" element={<PageWrapper progressVal={29} prev={{ path: '/phase/2/2/2', label: "Part B" }} next={{ path: '/phase/2/3', label: data.phase2.part3.title }}><Quiz2_2 /></PageWrapper>} />

        <Route path="/phase/2/3" element={<PageWrapper progressVal={32} prev={{ path: '/phase/2/2/quiz', label: "Quiz" }} next={{ path: '/phase/2/3/quiz', label: "Quiz" }}><PhaseTwoPart3 /></PageWrapper>} />
        <Route path="/phase/2/3/quiz" element={<PageWrapper progressVal={35} prev={{ path: '/phase/2/3', label: data.phase2.part3.title }} next={{ path: '/phase/3/1/1', label: data.phase3.part1.title + " (1)" }}><Quiz2_3 /></PageWrapper>} />

        {/* Phase 3 - Split 3.1 */}
        <Route path="/phase/3/1/1" element={<PageWrapper progressVal={38} prev={{ path: '/phase/2/3/quiz', label: "Quiz" }} next={{ path: '/phase/3/1/2', label: data.phase3.part1.title + " (2)" }}><PhaseThreePart1A /></PageWrapper>} />
        <Route path="/phase/3/1/2" element={<PageWrapper progressVal={40} prev={{ path: '/phase/3/1/1', label: "Part 1" }} next={{ path: '/phase/3/1/quiz', label: "Quiz" }}><PhaseThreePart1B /></PageWrapper>} />
        
        <Route path="/phase/3/1/quiz" element={<PageWrapper progressVal={41} prev={{ path: '/phase/3/1/2', label: "Part 2" }} next={{ path: '/phase/3/2', label: data.phase3.part2.title }}><Quiz3_1 /></PageWrapper>} />

        <Route path="/phase/3/2" element={<PageWrapper progressVal={44} prev={{ path: '/phase/3/1/quiz', label: "Quiz" }} next={{ path: '/phase/3/2/quiz', label: "Quiz" }}><PhaseThreePart2 /></PageWrapper>} />
        <Route path="/phase/3/2/quiz" element={<PageWrapper progressVal={47} prev={{ path: '/phase/3/2', label: data.phase3.part2.title }} next={{ path: '/phase/3/3', label: data.phase3.part3.title }}><Quiz3_2 /></PageWrapper>} />

        <Route path="/phase/3/3" element={<PageWrapper progressVal={50} prev={{ path: '/phase/3/2/quiz', label: "Quiz" }} next={{ path: '/phase/3/3/quiz', label: "Quiz" }}><PhaseThreePart3 /></PageWrapper>} />
        <Route path="/phase/3/3/quiz" element={<PageWrapper progressVal={53} prev={{ path: '/phase/3/3', label: data.phase3.part3.title }} next={{ path: '/phase/4/1', label: data.phase4.part1.title }}><Quiz3_3 /></PageWrapper>} />

        {/* Phase 4 */}
        <Route path="/phase/4/1" element={<PageWrapper progressVal={56} prev={{ path: '/phase/3/3/quiz', label: "Quiz" }} next={{ path: '/phase/4/1/quiz', label: "Quiz" }}><PhaseFourPart1 /></PageWrapper>} />
        <Route path="/phase/4/1/quiz" element={<PageWrapper progressVal={59} prev={{ path: '/phase/4/1', label: data.phase4.part1.title }} next={{ path: '/phase/4/2', label: data.phase4.part2.title }}><Quiz4_1 /></PageWrapper>} />

        <Route path="/phase/4/2" element={<PageWrapper progressVal={62} prev={{ path: '/phase/4/1/quiz', label: "Quiz" }} next={{ path: '/phase/4/2/quiz', label: "Quiz" }}><PhaseFourPart2 /></PageWrapper>} />
        <Route path="/phase/4/2/quiz" element={<PageWrapper progressVal={65} prev={{ path: '/phase/4/2', label: data.phase4.part2.title }} next={{ path: '/phase/4/3', label: data.phase4.part3.title }}><Quiz4_2 /></PageWrapper>} />

        <Route path="/phase/4/3" element={<PageWrapper progressVal={68} prev={{ path: '/phase/4/2/quiz', label: "Quiz" }} next={{ path: '/phase/4/3/quiz', label: "Quiz" }}><PhaseFourPart3 /></PageWrapper>} />
        <Route path="/phase/4/3/quiz" element={<PageWrapper progressVal={70} prev={{ path: '/phase/4/3', label: data.phase4.part3.title }} next={{ path: '/grammar/theory/1', label: data.grammarMaster.title1 }}><Quiz4_3 /></PageWrapper>} />

        {/* Grammar Theory */}
        <Route path="/grammar/theory/1" element={<PageWrapper progressVal={74} prev={{ path: '/phase/4/3/quiz', label: "Quiz" }} next={{ path: '/grammar/theory/1/quiz', label: "Quiz" }}><GrammarTheoryPart1 /></PageWrapper>} />
        <Route path="/grammar/theory/1/quiz" element={<PageWrapper progressVal={77} prev={{ path: '/grammar/theory/1', label: data.grammarMaster.title1 }} next={{ path: '/grammar/theory/2', label: data.grammarMaster.title2 }}><QuizGrammar1 /></PageWrapper>} />

        <Route path="/grammar/theory/2" element={<PageWrapper progressVal={80} prev={{ path: '/grammar/theory/1/quiz', label: "Quiz" }} next={{ path: '/grammar/theory/2/quiz', label: "Quiz" }}><GrammarTheoryPart2 /></PageWrapper>} />
        <Route path="/grammar/theory/2/quiz" element={<PageWrapper progressVal={83} prev={{ path: '/grammar/theory/2', label: data.grammarMaster.title2 }} next={{ path: '/grammar/theory/3/1', label: data.grammarMaster.title3 + " (1)" }}><QuizGrammar2 /></PageWrapper>} />

        {/* Split Theory 3 */}
        <Route path="/grammar/theory/3/1" element={<PageWrapper progressVal={86} prev={{ path: '/grammar/theory/2/quiz', label: "Quiz" }} next={{ path: '/grammar/theory/3/1', label: "Part 1" }}><GrammarTheoryPart3A /></PageWrapper>} />
        <Route path="/grammar/theory/3/2" element={<PageWrapper progressVal={88} prev={{ path: '/grammar/theory/3/1', label: "Part 1" }} next={{ path: '/grammar/theory/3/quiz', label: "Quiz" }}><GrammarTheoryPart3B /></PageWrapper>} />

        <Route path="/grammar/theory/3/quiz" element={<PageWrapper progressVal={89} prev={{ path: '/grammar/theory/3/2', label: data.grammarMaster.title3 }} next={{ path: '/grammar/practice/1', label: data.grammarPractice.title1 }}><QuizGrammar3 /></PageWrapper>} />

        {/* Grammar Practice */}
        <Route path="/grammar/practice/1" element={<PageWrapper progressVal={92} prev={{ path: '/grammar/theory/3/quiz', label: "Quiz" }} next={{ path: '/grammar/practice/2', label: data.grammarPractice.title2 }}><GrammarPracticePart1 /></PageWrapper>} />
        <Route path="/grammar/practice/2" element={<PageWrapper progressVal={94} prev={{ path: '/grammar/practice/1', label: data.grammarPractice.title1 }} next={{ path: '/grammar/practice/3', label: data.grammarPractice.title3 }}><GrammarPracticePart2 /></PageWrapper>} />
        <Route path="/grammar/practice/3" element={<PageWrapper progressVal={96} prev={{ path: '/grammar/practice/2', label: data.grammarPractice.title2 }} next={{ path: '/reading/1', label: data.nav.reading }}><GrammarPracticePart3 /></PageWrapper>} />
        
        {/* Reading */}
        <Route path="/reading/1" element={<ReadingWrapper progressVal={98} />} />

        {/* Speaking */}
        <Route path="/speaking/1" element={<PageWrapper progressVal={99} prev={{ path: '/reading/1', label: data.nav.reading }} next={{ path: '/speaking/2', label: data.speaking.part2Title }}><SpeakingPart1 /></PageWrapper>} />
        <Route path="/speaking/2" element={<PageWrapper progressVal={99} prev={{ path: '/speaking/1', label: data.speaking.part1Title }} next={{ path: '/speaking/3', label: data.speaking.part3Title }}><SpeakingPart2 /></PageWrapper>} />
        <Route path="/speaking/3" element={<PageWrapper progressVal={100} prev={{ path: '/speaking/2', label: data.speaking.part2Title }}><SpeakingPart3 /></PageWrapper>} />

        {/* Redirects/Fallbacks */}
        <Route path="/phase/1" element={<Navigate to="/phase/1/1" replace />} />
        <Route path="/phase/2" element={<Navigate to="/phase/2/1" replace />} />
        <Route path="/phase/3" element={<Navigate to="/phase/3/1/1" replace />} />
        <Route path="/phase/4" element={<Navigate to="/phase/4/1" replace />} />
        <Route path="/grammar/theory" element={<Navigate to="/grammar/theory/1" replace />} />
        <Route path="/grammar/practice" element={<Navigate to="/grammar/practice/1" replace />} />
        <Route path="/reading" element={<Navigate to="/reading/1" replace />} />
        <Route path="/speaking" element={<Navigate to="/speaking/1" replace />} />

      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ResponsiveProvider>
        <GamificationProvider>
          <LanguageProvider>
            <HashRouter>
              <AppContent />
            </HashRouter>
          </LanguageProvider>
        </GamificationProvider>
      </ResponsiveProvider>
    </ThemeProvider>
  );
};

const AppContent: React.FC = () => {
  const { data } = useLanguage();
  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen text-slate-800 dark:text-slate-200 selection:bg-sky-500/30 font-sans overflow-hidden transition-colors duration-500 flex flex-col">
      <Navigation />
      <main className="relative flex-1 w-full flex flex-col">
        <div className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-100 transition-opacity duration-500">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[120px] animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-sky-500/10 dark:bg-sky-900/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-indigo-500/10 dark:bg-indigo-900/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
        </div>
        <AnimatedRoutes />
      </main>
    </div>
  );
};

export default App;
