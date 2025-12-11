import React from 'react';
import { HashRouter, Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PhaseOnePart1, PhaseOnePart2, PhaseOnePart3 } from './components/PhaseOne';
import { PhaseTwoPart1, PhaseTwoPart2, PhaseTwoPart3 } from './components/PhaseTwo';
import { PhaseThreePart1, PhaseThreePart2, PhaseThreePart3 } from './components/PhaseThree';
import { PhaseFourPart1, PhaseFourPart2, PhaseFourPart3 } from './components/PhaseFour';
import { GrammarPracticePart1, GrammarPracticePart2, GrammarPracticePart3 } from './components/GrammarSection';
import { GrammarTheoryPart1, GrammarTheoryPart2, GrammarTheoryPart3 } from './components/GrammarMasterclass';
import { SpeakingPart1, SpeakingPart2, SpeakingPart3 } from './components/SpeakingSection';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

interface PageWrapperProps {
  children: React.ReactNode;
  prev?: { path: string; label: string };
  next?: { path: string; label: string };
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, prev, next }) => {
  const { data } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-12 md:pt-20 pb-12 flex flex-col"
    >
      <div className="flex-grow">
        {children}
      </div>
      
      {/* Pagination Footer */}
      {(prev || next) && (
        <div className="max-w-6xl mx-auto w-full px-6 mt-12">
          <div className="border-t border-slate-800 pt-8 flex justify-between items-center text-sm font-medium">
            {prev ? (
              <Link 
                to={prev.path} 
                className="group flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors px-4 py-2 rounded-lg hover:bg-slate-900"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="flex flex-col items-start">
                  <span className="text-xs text-slate-600 font-bold uppercase tracking-wider">{data.common.prev}</span>
                  <span>{prev.label}</span>
                </span>
              </Link>
            ) : (
              <div />
            )}
            
            {next ? (
              <Link 
                to={next.path} 
                className="group flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors px-4 py-2 rounded-lg hover:bg-slate-900 text-right"
              >
                <span className="flex flex-col items-end">
                  <span className="text-xs text-slate-600 font-bold uppercase tracking-wider">{data.common.next}</span>
                  <span>{next.label}</span>
                </span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      )}
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
        <Route path="/phase/1/1" element={<PageWrapper prev={{ path: '/', label: data.nav.overview }} next={{ path: '/phase/1/2', label: data.phase1.part2.title }}><PhaseOnePart1 /></PageWrapper>} />
        <Route path="/phase/1/2" element={<PageWrapper prev={{ path: '/phase/1/1', label: data.phase1.part1.title }} next={{ path: '/phase/1/3', label: data.phase1.part3.title }}><PhaseOnePart2 /></PageWrapper>} />
        <Route path="/phase/1/3" element={<PageWrapper prev={{ path: '/phase/1/2', label: data.phase1.part2.title }} next={{ path: '/phase/2/1', label: data.phase2.part1.title }}><PhaseOnePart3 /></PageWrapper>} />
        
        {/* Phase 2 */}
        <Route path="/phase/2/1" element={<PageWrapper prev={{ path: '/phase/1/3', label: data.phase1.part3.title }} next={{ path: '/phase/2/2', label: data.phase2.part2.title }}><PhaseTwoPart1 /></PageWrapper>} />
        <Route path="/phase/2/2" element={<PageWrapper prev={{ path: '/phase/2/1', label: data.phase2.part1.title }} next={{ path: '/phase/2/3', label: data.phase2.part3.title }}><PhaseTwoPart2 /></PageWrapper>} />
        <Route path="/phase/2/3" element={<PageWrapper prev={{ path: '/phase/2/2', label: data.phase2.part2.title }} next={{ path: '/phase/3/1', label: data.phase3.part1.title }}><PhaseTwoPart3 /></PageWrapper>} />

        {/* Phase 3 */}
        <Route path="/phase/3/1" element={<PageWrapper prev={{ path: '/phase/2/3', label: data.phase2.part3.title }} next={{ path: '/phase/3/2', label: data.phase3.part2.title }}><PhaseThreePart1 /></PageWrapper>} />
        <Route path="/phase/3/2" element={<PageWrapper prev={{ path: '/phase/3/1', label: data.phase3.part1.title }} next={{ path: '/phase/3/3', label: data.phase3.part3.title }}><PhaseThreePart2 /></PageWrapper>} />
        <Route path="/phase/3/3" element={<PageWrapper prev={{ path: '/phase/3/2', label: data.phase3.part2.title }} next={{ path: '/phase/4/1', label: data.phase4.part1.title }}><PhaseThreePart3 /></PageWrapper>} />

        {/* Phase 4 */}
        <Route path="/phase/4/1" element={<PageWrapper prev={{ path: '/phase/3/3', label: data.phase3.part3.title }} next={{ path: '/phase/4/2', label: data.phase4.part2.title }}><PhaseFourPart1 /></PageWrapper>} />
        <Route path="/phase/4/2" element={<PageWrapper prev={{ path: '/phase/4/1', label: data.phase4.part1.title }} next={{ path: '/phase/4/3', label: data.phase4.part3.title }}><PhaseFourPart2 /></PageWrapper>} />
        <Route path="/phase/4/3" element={<PageWrapper prev={{ path: '/phase/4/2', label: data.phase4.part2.title }} next={{ path: '/grammar/theory/1', label: data.grammarMaster.title1 }}><PhaseFourPart3 /></PageWrapper>} />

        {/* Grammar Theory */}
        <Route path="/grammar/theory/1" element={<PageWrapper prev={{ path: '/phase/4/3', label: data.phase4.part3.title }} next={{ path: '/grammar/theory/2', label: data.grammarMaster.title2 }}><GrammarTheoryPart1 /></PageWrapper>} />
        <Route path="/grammar/theory/2" element={<PageWrapper prev={{ path: '/grammar/theory/1', label: data.grammarMaster.title1 }} next={{ path: '/grammar/theory/3', label: data.grammarMaster.title3 }}><GrammarTheoryPart2 /></PageWrapper>} />
        <Route path="/grammar/theory/3" element={<PageWrapper prev={{ path: '/grammar/theory/2', label: data.grammarMaster.title2 }} next={{ path: '/grammar/practice/1', label: data.grammarPractice.title1 }}><GrammarTheoryPart3 /></PageWrapper>} />

        {/* Grammar Practice */}
        <Route path="/grammar/practice/1" element={<PageWrapper prev={{ path: '/grammar/theory/3', label: data.grammarMaster.title3 }} next={{ path: '/grammar/practice/2', label: data.grammarPractice.title2 }}><GrammarPracticePart1 /></PageWrapper>} />
        <Route path="/grammar/practice/2" element={<PageWrapper prev={{ path: '/grammar/practice/1', label: data.grammarPractice.title1 }} next={{ path: '/grammar/practice/3', label: data.grammarPractice.title3 }}><GrammarPracticePart2 /></PageWrapper>} />
        <Route path="/grammar/practice/3" element={<PageWrapper prev={{ path: '/grammar/practice/2', label: data.grammarPractice.title2 }} next={{ path: '/speaking/1', label: data.speaking.part1Title }}><GrammarPracticePart3 /></PageWrapper>} />

        {/* Speaking */}
        <Route path="/speaking/1" element={<PageWrapper prev={{ path: '/grammar/practice/3', label: data.grammarPractice.title3 }} next={{ path: '/speaking/2', label: data.speaking.part2Title }}><SpeakingPart1 /></PageWrapper>} />
        <Route path="/speaking/2" element={<PageWrapper prev={{ path: '/speaking/1', label: data.speaking.part1Title }} next={{ path: '/speaking/3', label: data.speaking.part3Title }}><SpeakingPart2 /></PageWrapper>} />
        <Route path="/speaking/3" element={<PageWrapper prev={{ path: '/speaking/2', label: data.speaking.part2Title }}><SpeakingPart3 /></PageWrapper>} />

        {/* Redirects/Fallbacks */}
        <Route path="/phase/1" element={<Navigate to="/phase/1/1" replace />} />
        <Route path="/phase/2" element={<Navigate to="/phase/2/1" replace />} />
        <Route path="/phase/3" element={<Navigate to="/phase/3/1" replace />} />
        <Route path="/phase/4" element={<Navigate to="/phase/4/1" replace />} />
        <Route path="/grammar/theory" element={<Navigate to="/grammar/theory/1" replace />} />
        <Route path="/grammar/practice" element={<Navigate to="/grammar/practice/1" replace />} />
        <Route path="/speaking" element={<Navigate to="/speaking/1" replace />} />

      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </LanguageProvider>
  );
};

const AppContent: React.FC = () => {
  const { data } = useLanguage();
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-sky-500/30 font-sans">
      <Navigation />
      <main>
        <AnimatedRoutes />
      </main>
      
      <footer className="py-8 border-t border-slate-900 text-center text-slate-700 text-sm">
        <p>{data.nav.footer}</p>
      </footer>
    </div>
  );
};

export default App;