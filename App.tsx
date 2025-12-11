import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PhaseOne } from './components/PhaseOne';
import { PhaseTwo } from './components/PhaseTwo';
import { PhaseThree } from './components/PhaseThree';
import { PhaseFour } from './components/PhaseFour';
import { GrammarSection } from './components/GrammarSection';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-sky-500/30">
      <Navigation />
      
      <main>
        <Hero id="hero" />
        <PhaseOne id="phase1" />
        <PhaseTwo id="phase2" />
        <PhaseThree id="phase3" />
        <PhaseFour id="phase4" />
        <GrammarSection id="grammar" />
      </main>
      
      <footer className="py-12 border-t border-slate-800 text-center text-slate-600 text-sm">
        <p>© 2024 Master Class Series. Educational Demo.</p>
      </footer>
    </div>
  );
};

export default App;