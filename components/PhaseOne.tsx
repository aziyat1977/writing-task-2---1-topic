import React from 'react';
import { FadeIn } from './FadeIn';
import { AlertTriangle, GitPullRequest, CheckCircle2, Search } from 'lucide-react';

export const PhaseOne: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800">
      <FadeIn>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-sky-400 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-sky-500/10 flex items-center justify-center text-sky-400 text-lg">1</span>
            The Surgical Analysis
          </h2>
          <p className="text-slate-400 text-lg">
            Before writing, we must define the parameters to ensure a high Task Response score.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Decoding */}
        <FadeIn delay={0.1} className="h-full">
          <div className="bg-slate-800/40 border border-slate-700 hover:border-sky-500/50 transition-colors p-6 rounded-xl h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4 text-sky-300">
              <Search size={24} />
              <h3 className="text-xl font-bold">Decoding</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Topic</span>
                <p className="text-slate-200 font-medium">Study Habits</p>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-red-400 mb-2 font-bold text-sm">
                  <AlertTriangle size={16} />
                  THE TRAP (Restriction)
                </div>
                <p className="text-red-200 text-sm">
                  "More Effective." We must argue about <span className="font-bold underline">efficacy/results</span>, not just preference or enjoyment.
                </p>
              </div>

              <div>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Instruction</span>
                <p className="text-slate-300 text-sm">Discuss both views + Give your own opinion.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Card 2: T-Chart */}
        <FadeIn delay={0.2} className="h-full">
          <div className="bg-slate-800/40 border border-slate-700 hover:border-sky-500/50 transition-colors p-6 rounded-xl h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4 text-sky-300">
              <GitPullRequest size={24} />
              <h3 className="text-xl font-bold">Critical Thinking</h3>
            </div>

            <div className="space-y-6 flex-grow">
              <div>
                <h4 className="font-bold text-indigo-400 mb-1 text-sm">View A: Groups</h4>
                <p className="text-slate-300 text-sm mb-2"><strong className="text-slate-100">Idea:</strong> Peer Correction.</p>
                <p className="text-slate-400 text-xs pl-3 border-l-2 border-indigo-500/30">
                  Mechanism: Exchange of ideas fills knowledge gaps.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-indigo-400 mb-1 text-sm">View B: Alone</h4>
                <p className="text-slate-300 text-sm mb-2"><strong className="text-slate-100">Idea:</strong> Focus & Pacing.</p>
                <p className="text-slate-400 text-xs pl-3 border-l-2 border-indigo-500/30">
                  Mechanism: Eliminates social distraction; allows tailoring to weak areas.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Card 3: Position */}
        <FadeIn delay={0.3} className="h-full">
          <div className="bg-gradient-to-br from-emerald-900/20 to-slate-800/40 border border-emerald-500/30 hover:border-emerald-500/60 transition-colors p-6 rounded-xl h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4 text-emerald-400">
              <CheckCircle2 size={24} />
              <h3 className="text-xl font-bold">My Position</h3>
            </div>

            <div className="flex-grow flex items-center">
              <p className="text-lg text-emerald-100/90 leading-relaxed">
                I acknowledge Group benefits, but I argue that <strong className="text-emerald-400">Alone is superior</strong> for exam results due to efficiency.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};