import React, { useState } from 'react';
import { Menu, X, BookOpen, Search, GitPullRequest, FileText, PenTool, CheckCircle, GraduationCap, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { id: 'hero', label: 'Overview', icon: BookOpen },
    { id: 'phase1', label: 'Phase 1: Analysis', icon: Search },
    { id: 'phase2', label: 'Phase 2: Construction', icon: GitPullRequest },
    { id: 'phase3', label: 'Phase 3: Model Answer', icon: FileText },
    { id: 'phase4', label: 'Phase 4: Lexical Resource', icon: CheckCircle },
    { id: 'grammar-masterclass', label: 'Grammar Masterclass', icon: GraduationCap },
    { id: 'speaking', label: 'Speaking Practice', icon: Mic },
    { id: 'grammar', label: 'Grammar & Vocabulary', icon: PenTool },
  ];

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-6 left-6 z-50 p-3 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full text-sky-400 hover:text-sky-300 hover:border-sky-500 transition-all shadow-lg"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-full w-80 bg-slate-900 border-r border-slate-800 z-50 overflow-y-auto"
            >
              <div className="p-8 pt-24">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Essay Construction</h3>
                  <p className="text-sm text-slate-500">Master Class Series</p>
                </div>

                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-sky-400 transition-colors text-left"
                    >
                      <item.icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </nav>

                <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-600">
                  <p>© 2024 Pauline Cullen Method</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};