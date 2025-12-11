import React, { useState } from 'react';
import { Menu, X, BookOpen, Search, GitPullRequest, FileText, PenTool, CheckCircle, GraduationCap, Mic, Globe, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../utils/translations';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, data } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

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
      className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
        language === code 
          ? 'bg-sky-500 text-white' 
          : 'bg-slate-800 text-slate-400 hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      {/* Top Left Controls */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-3">
        <button
          onClick={toggleMenu}
          className="p-3 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full text-sky-400 hover:text-sky-300 hover:border-sky-500 transition-all shadow-lg"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className="hidden md:flex items-center gap-1 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full p-1.5 shadow-lg">
           <LangButton code="en" label="EN" />
           <LangButton code="ru" label="RU" />
           <LangButton code="uz" label="UZ" />
        </div>
      </div>

      {/* Top Right Topic Button */}
      {location.pathname !== '/' && (
        <button
          onClick={() => setIsTopicOpen(true)}
          className="fixed top-6 right-6 z-50 p-3 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full text-indigo-400 hover:text-indigo-300 hover:border-indigo-500 transition-all shadow-lg hover:rotate-12"
          aria-label="View Topic"
          title="View Essay Topic"
        >
          <FileText size={24} />
        </button>
      )}

      {/* Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-full w-80 bg-slate-900 border-r border-slate-800 z-50 overflow-y-auto"
            >
              <div className="p-8 pt-24">
                <div className="flex items-center gap-2 mb-6 md:hidden">
                   <LangButton code="en" label="EN" />
                   <LangButton code="ru" label="RU" />
                   <LangButton code="uz" label="UZ" />
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Essay Construction</h3>
                  <p className="text-sm text-slate-500">Master Class Series</p>
                </div>

                <nav className="space-y-2">
                  {menuItems.map((item) => {
                    const isActive = location.pathname.startsWith(item.path.split('/1')[0]);
                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`w-full flex items-center gap-4 p-4 rounded-lg transition-colors text-left ${
                          isActive 
                            ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' 
                            : 'hover:bg-slate-800 text-slate-400 hover:text-sky-300'
                        }`}
                      >
                        <item.icon size={20} />
                        <span className="font-medium">{item.label}</span>
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
                    className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[60]"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-6 z-[70]"
                >
                    <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 shadow-2xl relative">
                        <button 
                            onClick={() => setIsTopicOpen(false)}
                            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="mb-8 border-b border-slate-800 pb-6">
                            <h3 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-3">{data.hero.topicLabel}</h3>
                            <p className="text-xl md:text-2xl text-slate-200 font-serif leading-relaxed">
                            "{data.hero.topicText}"
                            </p>
                        </div>
                        <div>
                            <h3 className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                            <PenTool size={16} />
                            {data.hero.taskLabel}
                            </h3>
                            <p className="text-lg text-slate-300 italic">
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