import React from 'react';
import { FadeIn } from './FadeIn';
import { SPEAKING_DATA } from '../constants';
import { Mic, MessageSquare, Clock, BrainCircuit } from 'lucide-react';

export const SpeakingSection: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800">
      <FadeIn>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-sky-400 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-sky-500/10 flex items-center justify-center text-sky-400 text-lg">
              <Mic size={20} />
            </span>
            Speaking Practice
          </h2>
          <p className="text-slate-400 text-lg">
            Surgical compilation of recent IELTS Speaking questions (2022–2025) related to <strong className="text-sky-300">Study, Learning, & Collaboration</strong>.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-16">
        {SPEAKING_DATA.map((part, index) => (
          <FadeIn key={part.id} delay={index * 0.1}>
            <div className="border-l-2 border-slate-700 pl-6 md:pl-8 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500" />
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-100 mb-2">{part.title}</h3>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {part.description.split('.')[0]}</span>
                  <span className="hidden md:inline">•</span>
                  <span className="text-slate-400">{part.description.split('.').slice(1).join('.')}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Render Interview/Discussion Clusters */}
                {part.clusters?.map((cluster, cIndex) => (
                  <div key={cIndex} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-sky-500/30 transition-colors">
                    <h4 className="text-indigo-400 font-bold uppercase text-xs tracking-wider mb-4 flex items-center gap-2">
                      <MessageSquare size={14} />
                      {cluster.topic}
                    </h4>
                    <ul className="space-y-3">
                      {cluster.questions.map((q, qIndex) => (
                        <li key={qIndex} className="text-slate-300 text-sm leading-relaxed relative pl-4">
                          <span className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-slate-600" />
                          {q.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Render Cue Cards for Part 2 */}
                {part.cueCards?.map((card, cardIndex) => (
                  <div key={cardIndex} className="bg-gradient-to-br from-slate-800/50 to-indigo-900/10 border border-slate-700 rounded-xl p-6 md:col-span-2 lg:col-span-1 hover:border-indigo-500/50 transition-colors shadow-lg">
                    <div className="flex items-start gap-3 mb-4">
                      <BrainCircuit size={20} className="text-indigo-400 mt-1 shrink-0" />
                      <h4 className="text-slate-100 font-bold leading-tight">{card.topic}</h4>
                    </div>
                    
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <p className="text-xs text-slate-500 uppercase font-bold mb-3">You should say:</p>
                      <ul className="space-y-2">
                        {card.prompts.map((prompt, pIndex) => (
                          <li key={pIndex} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-indigo-500/50 mt-1">•</span>
                            {prompt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};