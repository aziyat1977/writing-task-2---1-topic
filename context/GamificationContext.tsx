import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import confetti from 'canvas-confetti';

interface GamificationContextType {
  xp: number;
  level: number;
  addXp: (amount: number) => void;
  triggerSuccess: () => void;
  progress: number; // 0 to 100
  setProgress: (val: number) => void;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export const GamificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [progress, setProgress] = useState(0);

  // Level up logic
  useEffect(() => {
    const newLevel = Math.floor(xp / 100) + 1;
    if (newLevel > level) {
      setLevel(newLevel);
      triggerLevelUp();
    }
  }, [xp, level]);

  const addXp = (amount: number) => {
    setXp(prev => prev + amount);
  };

  const triggerSuccess = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#34d399', '#f472b6']
    });
  };

  const triggerLevelUp = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.5 },
      gravity: 0.8,
      scalar: 1.2,
    });
  };

  return (
    <GamificationContext.Provider value={{ xp, level, addXp, triggerSuccess, progress, setProgress }}>
      {children}
    </GamificationContext.Provider>
  );
};

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (context === undefined) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
};