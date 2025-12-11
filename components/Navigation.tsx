import React, { useState } from 'react';
import { Menu, X, BookOpen, Search, GitPullRequest, FileText, PenTool, CheckCircle, GraduationCap, Mic, Trophy, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useGamification } from '../context/GamificationContext';
import { Language } from '../utils/translations';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, data } = useLanguage();
  const { xp, level, progress } = useGamification();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Calculate XP progress for current level (simple modulo logic for demo)
  const xpProgress = (xp % 100); 

  const menuItems = [
    { path: '/', label: data.nav.overview, icon: BookOpen },
    { path: '/phase/1/1', label: data.nav.p1, icon: Search },
    { path: '/phase/2/1', label: data.nav.p2, icon: GitPullRequest },
    { path: '/phase/3/1', label: data.nav.p3, icon: FileText },
    { path: '/phase/4/1', label: data.nav.p4, icon: CheckCircle },
    { path: '/grammar/theory/1', label: data.nav.grammarTheory, icon: GraduationCap },
    { path: '/grammar/practice/1', label: data.nav.grammarPractice, icon: PenTool },
    { path: '/speaking/1', label: data.nav.speaking, icon: Mic },
  ];

  const LangButton = ({ code, label }: { code: Language; label: string }) => (
    <button
      onClick={() => setLanguage(code)}
      className={`relative px-3 py-1.5 rounded-lg text-xs font-bold transition-all overflow-hidden ${
        language === code 
          ? 'text-white shadow-[0_0_15px_rgba(56,189,248,0.5)]' 
          : 'text-slate-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {language === code && (
        <motion.div 
          layoutId="activeLang"
          className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg -z-10"
        />
      )}
      {label}
    </button>
  );

  return (
    <>
      {/* Global Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-emerald-400 z-[100]"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />

      {/* Top Left Controls */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <button
          onClick={toggleMenu}
          className="group relative p-3 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-full text-sky-400 transition-all hover:scale-110 active:scale-95 shadow-lg overflow-hidden"
          aria-label="Toggle Menu"
        >
          <div className="absolute inset-0 bg-sky-400/20 blur-xl group-hover:bg-sky-400/40 transition-colors" />
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className="hidden md:flex items-center gap-1 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-1 shadow-lg">
           <LangButton code="en" label="EN" />
           <LangButton code="ru" label="RU" />
           <LangButton code="uz" label="UZ" />
        </div>
      </div>

      {/* Top Right Gamification HUD */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
         {/* XP / Level Display */}
         <div className="hidden md:flex items-center gap-3 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl p-2 pr-4 shadow-lg">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg text-slate-900 font-extrabold font-display text-lg shadow-[0_0_15px_rgba(234,179,8,0.4)]">
               {level}
               <div className="absolute -bottom-1 -right-1 bg-slate-900 rounded-full p-0.5">
                  <Trophy size={10} className="text-yellow-400" />
               </div>
            </div>
            <div className="flex flex-col">
               <div className="flex justify-between items-end mb-1 min-w-[100px]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">XP Progress</span>
                  <span className="text-xs font-mono text-sky-400">{xp}</span>
               </div>
               <div className="w-full h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${xpProgress}%` }}
                    className="h-full bg-gradient-to-r from-sky-400 to-indigo-500"
                  />
               </div>
            </div>
         </div>

        {location.pathname !== '/' && (
          <button
            onClick={() => setIsTopicOpen(true)}
            className="group relative p-3 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-full text-indigo-400 transition-all hover:scale-110 active:scale-95 shadow-lg overflow-hidden"
            title="View Essay Topic"
          >
             <div className="absolute inset-0 bg-indigo-500/20 blur-xl group-hover:bg-indigo-500/40 transition-colors" />
            <FileText size={24} />
          </button>
        )}
      </div>

      {/* Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-full w-80 bg-[#020617]/95 border-r border-slate-800 z-50 overflow-y-auto backdrop-blur-xl"
            >
              <div className="p-8 pt-24">
                <div className="flex items-center gap-2 mb-8 md:hidden">
                   <LangButton code="en" label="EN" />
                   <LangButton code="ru" label="RU" />
                   <LangButton code="uz" label="UZ" />
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 mb-2">Essay Construction</h3>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <Sparkles size={12} className="text-yellow-400" />
                    Master Class Series
                  </div>
                </div>

                <nav className="space-y-2">
                  {menuItems.map((item) => {
                    const isActive = location.pathname.startsWith(item.path.split('/1')[0]);
                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`group relative w-full flex items-center gap-4 p-4 rounded-xl transition-all text-left overflow-hidden ${
                          isActive 
                            ? 'text-white' 
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                         {isActive && (
                            <motion.div 
                              layoutId="navBg"
                              className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-sky-500/30 rounded-xl"
                            />
                         )}
                        <item.icon size={20} className={`relative z-10 transition-transform group-hover:scale-110 ${isActive ? 'text-sky-400' : ''}`} />
                        <span className="font-display font-medium relative z-10">{item.label}</span>
                      </NavLink>
                    );
                  })}
                </nav>

                <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-600">
                  <p>{data.nav.footer}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Topic Modal */}
      <AnimatePresence>
        {isTopicOpen && (
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsTopicOpen(false)}
                    className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[60]"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-6 z-[70]"
                >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-2xl p-8 shadow-2xl">
                         {/* Ambient Glow */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-sky-500/20 rounded-full blur-[80px]" />
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]" />

                        <button 
                            onClick={() => setIsTopicOpen(false)}
                            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-10"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="relative z-10 mb-8 border-b border-white/10 pb-6">
                            <h3 className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                               <Sparkles size={14} /> {data.hero.topicLabel}
                            </h3>
                            <p className="text-2xl md:text-3xl text-slate-100 font-serif leading-relaxed drop-shadow-lg">
                            "{data.hero.topicText}"
                            </p>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                            <PenTool size={14} />
                            {data.hero.taskLabel}
                            </h3>
                            <p className="text-xl text-slate-300 italic font-light">
                            "{data.hero.taskText}"
                            </p>
                        </div>
                    </div>
                </motion.div>
            </>
        )}
      </AnimatePresence>
    </>
  );
};