import React from 'react';
import { FadeIn } from './FadeIn';
import { BookOpen, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC<{ id?: string }> = ({ id }) => {
  const { data } = useLanguage();
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center py-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <FadeIn>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-900/30 border border-sky-500/30 text-sky-400 text-sm font-medium mb-6">
            <BookOpen size={16} />
            <span>{data.hero.badge}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            {data.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light mb-8">
            {data.hero.subtitle}
          </p>
          <Link 
            to="/phase/1/1" 
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-sky-500/20 transition-all transform hover:-translate-y-1"
          >
            {data.hero.start} <ArrowRight size={18} />
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={0.2} className="w-full max-w-3xl">
        <div className="bg-slate-800/50 backdrop-blur-sm border-l-4 border-sky-500 rounded-r-xl p-8 shadow-2xl">
          <div className="mb-6">
            <h3 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-2">{data.hero.topicLabel}</h3>
            <p className="text-lg md:text-xl text-slate-200 font-serif leading-relaxed">
              "{data.hero.topicText}"
            </p>
          </div>
          <div>
            <h3 className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
              <PenTool size={16} />
              {data.hero.taskLabel}
            </h3>
            <p className="text-lg text-slate-300 italic">
              "{data.hero.taskText}"
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};