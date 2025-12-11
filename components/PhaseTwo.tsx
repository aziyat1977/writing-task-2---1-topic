import React from 'react';
import { FadeIn } from './FadeIn';

interface StepProps {
  number: string;
  title: string;
  goal: string;
  content: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, goal, content }) => (
  <div className="relative pl-12 pb-12 border-l-2 border-slate-700 last:border-0 last:pb-0 group">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-500 group-hover:bg-sky-500 transition-colors duration-300" />
    <span className="absolute -left-12 top-[-6px] text-slate-600 font-mono text-sm opacity-50 group-hover:opacity-100 transition-opacity">
      {number}
    </span>
    
    <div className="mb-4">
      <h3 className="text-2xl font-bold text-slate-100 mb-1 group-hover:text-sky-400 transition-colors">{title}</h3>
      <p className="text-sm text-sky-500/80 font-medium uppercase tracking-wider">{goal}</p>
    </div>

    <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/50">
      {content}
    </div>
  </div>
);

export const PhaseTwo: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6 max-w-4xl mx-auto border-t border-slate-800">
      <FadeIn>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-sky-400 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-sky-500/10 flex items-center justify-center text-sky-400 text-lg">2</span>
            The Construction
          </h2>
          <p className="text-slate-400 text-lg">
            A step-by-step architectural breakdown of the essay.
          </p>
        </div>
      </FadeIn>

      <div className="mt-12">
        <FadeIn delay={0.1}>
          <Step 
            number="01"
            title="The Introduction"
            goal="Contextualize & State Position"
            content={
              <div className="space-y-3">
                <p className="text-slate-300 text-sm">
                  <strong className="text-indigo-400">Paraphrase:</strong> "Opinions differ regarding the most beneficial approach to learning..."
                </p>
                <p className="text-slate-300 text-sm">
                  <strong className="text-emerald-400">Thesis:</strong> "While collaborative learning can foster critical discussion, I believe that solitary study is ultimately more effective..."
                </p>
              </div>
            }
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <Step 
            number="02"
            title="Body Paragraph A (Concession)"
            goal="Discuss the opposing view fairly"
            content={
              <div className="space-y-3">
                <p className="text-slate-300 text-sm">
                  <strong className="text-slate-100">Topic Sentence:</strong> "On the one hand, there are clear benefits to studying with peers."
                </p>
                <div className="pl-3 border-l-2 border-slate-600">
                  <p className="text-slate-400 text-sm mb-1">Argument: It facilitates the exchange of ideas.</p>
                  <p className="text-emerald-400/80 text-sm">Result: Difficult concepts become easier to grasp through discussion (Peer Correction).</p>
                </div>
              </div>
            }
          />
        </FadeIn>

        <FadeIn delay={0.3}>
          <Step 
            number="03"
            title="Body Paragraph B (The Opinion)"
            goal="Discuss your view & prove superiority"
            content={
              <div className="space-y-3">
                <p className="text-slate-300 text-sm">
                  <strong className="text-slate-100">Topic Sentence:</strong> "On the other hand, I support the view that solitary study is superior..."
                </p>
                <div className="pl-3 border-l-2 border-slate-600">
                  <p className="text-slate-400 text-sm mb-1">Argument: Unlike groups which devolve into chat, alone time removes distractions.</p>
                  <p className="text-emerald-400/80 text-sm">Result: It is more time-efficient for retaining facts.</p>
                </div>
              </div>
            }
          />
        </FadeIn>

        <FadeIn delay={0.4}>
          <Step 
            number="04"
            title="The Conclusion"
            goal="Summarize verdict without repetition"
            content={
              <p className="text-slate-300 text-sm">
                <strong className="text-indigo-400">Synthesis:</strong> Acknowledge the value of groups ("collaborative learning") but reassert the dominance of the solitary method ("distraction-free environment").
              </p>
            }
          />
        </FadeIn>
      </div>
    </section>
  );
};