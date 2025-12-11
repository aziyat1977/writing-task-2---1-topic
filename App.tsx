import React from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PhaseOne } from './components/PhaseOne';
import { PhaseTwo } from './components/PhaseTwo';
import { PhaseThree } from './components/PhaseThree';
import { PhaseFour } from './components/PhaseFour';
import { GrammarSection } from './components/GrammarSection';
import { GrammarMasterclass } from './components/GrammarMasterclass';
import { SpeakingSection } from './components/SpeakingSection';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PageWrapperProps {
  children: React.ReactNode;
  prev?: { path: string; label: string };
  next?: { path: string; label: string };
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, prev, next }) => {
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
                  <span className="text-xs text-slate-600 font-bold uppercase tracking-wider">Previous</span>
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
                  <span className="text-xs text-slate-600 font-bold uppercase tracking-wider">Next</span>
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

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        
        <Route 
          path="/phase/1" 
          element={
            <PageWrapper 
              prev={{ path: '/', label: 'Overview' }}
              next={{ path: '/phase/2', label: 'Phase 2: Construction' }}
            >
              <PhaseOne />
            </PageWrapper>
          } 
        />
        
        <Route 
          path="/phase/2" 
          element={
            <PageWrapper 
              prev={{ path: '/phase/1', label: 'Phase 1: Analysis' }}
              next={{ path: '/phase/3', label: 'Phase 3: Model Answer' }}
            >
              <PhaseTwo />
            </PageWrapper>
          } 
        />
        
        <Route 
          path="/phase/3" 
          element={
            <PageWrapper 
              prev={{ path: '/phase/2', label: 'Phase 2: Construction' }}
              next={{ path: '/phase/4', label: 'Phase 4: Lexical Resource' }}
            >
              <PhaseThree />
            </PageWrapper>
          } 
        />
        
        <Route 
          path="/phase/4" 
          element={
            <PageWrapper 
              prev={{ path: '/phase/3', label: 'Phase 3: Model Answer' }}
              next={{ path: '/grammar/theory', label: 'Grammar Masterclass' }}
            >
              <PhaseFour />
            </PageWrapper>
          } 
        />
        
        <Route 
          path="/grammar/theory" 
          element={
            <PageWrapper 
              prev={{ path: '/phase/4', label: 'Phase 4: Lexical Resource' }}
              next={{ path: '/grammar/practice', label: 'Grammar Practice' }}
            >
              <GrammarMasterclass />
            </PageWrapper>
          } 
        />
        
        <Route 
          path="/grammar/practice" 
          element={
            <PageWrapper 
              prev={{ path: '/grammar/theory', label: 'Grammar Masterclass' }}
              next={{ path: '/speaking', label: 'Speaking Practice' }}
            >
              <GrammarSection />
            </PageWrapper>
          } 
        />
        
        <Route 
          path="/speaking" 
          element={
            <PageWrapper 
              prev={{ path: '/grammar/practice', label: 'Grammar Practice' }}
            >
              <SpeakingSection />
            </PageWrapper>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-sky-500/30 font-sans">
        <Navigation />
        <main>
          <AnimatedRoutes />
        </main>
        
        <footer className="py-8 border-t border-slate-900 text-center text-slate-700 text-sm">
          <p>© 2024 Master Class Series. Educational Demo.</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;