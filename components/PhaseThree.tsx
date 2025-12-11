import React from 'react';
import { FadeIn } from './FadeIn';
import { MODEL_ANSWER_PARAGRAPHS } from '../constants';
import { Quote } from 'lucide-react';

export const PhaseThree: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6 bg-slate-900 border-y border-slate-800">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-sky-400 mb-4">Phase 3: The Model Answer</h2>
            <p className="text-slate-400">The consolidated result of the surgical planning.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-slate-100 text-slate-900 p-8 md:p-12 rounded-xl shadow-2xl relative">
            <div className="absolute top-6 left-6 text-slate-300 pointer-events-none">
              <Quote size={48} className="opacity-20" />
            </div>

            <article className="font-serif text-lg leading-loose space-y-6 relative z-10">
              {MODEL_ANSWER_PARAGRAPHS.map((para, idx) => (
                <p key={idx} className="first-letter:text-5xl first-letter:font-bold first-letter:text-sky-800 first-letter:mr-3 first-letter:float-left">
                  {para}
                </p>
              ))}
            </article>
            
            <div className="mt-8 pt-6 border-t border-slate-300 flex justify-between items-center text-sm font-sans text-slate-500">
               <span>Band 9.0 Model</span>
               <span className="italic">Word Count: ~235 words</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};