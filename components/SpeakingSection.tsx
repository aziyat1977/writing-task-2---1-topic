import React from 'react';
import { FadeIn } from './FadeIn';
import { Mic, MessageSquare, Clock, BrainCircuit } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SpeakingPartContent: React.FC<{ part: any }> = ({ part }) => {
  const { data } = useLanguage();
  return (
    <div className="border-l-2 border-slate-700 pl-6 md:pl-8 relative mt-8">
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500" />
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-100 mb-2">{part.title}</h3>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><Clock size={14} /> {part.description.split('.')[0]}</span>
            <span className="hidden md:inline">•</span>
            <span className="text-slate-400">{part.description.split('.').slice(1).join('.')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          
          {/* Render Interview/Discussion Clusters */}
          {part.clusters?.map((cluster: any, cIndex: number) => (
            <div key={cIndex} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-sky-500/30 transition-colors">
              <h4 className="text-indigo-400 font-bold uppercase text-xs tracking-wider mb-4 flex items-center gap-2">
                <MessageSquare size={14} />
                {cluster.topic}
              </h4>
              <ul className="space-y-3">
                {cluster.questions.map((q: any, qIndex: number) => (
                  <li key={qIndex} className="text-slate-300 text-sm leading-relaxed relative pl-4">
                    <span className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-slate-600" />
                    {q.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Render Cue Cards for Part 2 */}
          {part.cueCards?.map((card: any, cardIndex: number) => (
            <div key={cardIndex} className="bg-gradient-to-br from-slate-800/50 to-indigo-900/10 border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50 transition-colors shadow-lg">
              <div className="flex items-start gap-3 mb-4">
                <BrainCircuit size={20} className="text-indigo-400 mt-1 shrink-0" />
                <h4 className="text-slate-100 font-bold leading-tight">{card.topic}</h4>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <p className="text-xs text-slate-500 uppercase font-bold mb-3">{data.speaking.say}</p>
                <ul className="space-y-2">
                  {card.prompts.map((prompt: string, pIndex: number) => (
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
  );
};

export const SpeakingPart1: React.FC = () => {
  const { data } = useLanguage();
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <div className="mb-8">
           <h2 className="text-3xl font-bold text-sky-400 mb-2">{data.speaking.part1Title}</h2>
           <p className="text-slate-400">{data.speaking.part1Desc}</p>
        </div>
        <SpeakingPartContent part={data.speakingData[0]} />
      </FadeIn>
    </section>
  );
};

export const SpeakingPart2: React.FC = () => {
  const { data } = useLanguage();
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <div className="mb-8">
           <h2 className="text-3xl font-bold text-sky-400 mb-2">{data.speaking.part2Title}</h2>
           <p className="text-slate-400">{data.speaking.part2Desc}</p>
        </div>
        <SpeakingPartContent part={data.speakingData[1]} />
      </FadeIn>
    </section>
  );
};

export const SpeakingPart3: React.FC = () => {
  const { data } = useLanguage();
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <div className="mb-8">
           <h2 className="text-3xl font-bold text-sky-400 mb-2">{data.speaking.part3Title}</h2>
           <p className="text-slate-400">{data.speaking.part3Desc}</p>
        </div>
        <SpeakingPartContent part={data.speakingData[2]} />
      </FadeIn>
    </section>
  );
};