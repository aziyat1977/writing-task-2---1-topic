import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';

// --- Types ---
export type DeviceTier = 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'ultrawide';
export type InputType = 'touch' | 'mouse';
export type Orientation = 'portrait' | 'landscape';

interface ResponsiveMetrics {
  width: number;
  height: number;
  orientation: Orientation;
  deviceTier: DeviceTier;
  inputType: InputType;
  isRetina: boolean;
  // A factor (0.0 to 2.0+) representing how "spacious" the screen is compared to a standard 1440px laptop.
  // Useful for dynamic scaling of fonts/padding beyond standard breakpoints.
  scaleFactor: number; 
  // True if the device is likely a mobile phone or small tablet
  isCompact: boolean;
}

const ResponsiveContext = createContext<ResponsiveMetrics | undefined>(undefined);

// --- Logic ---

const getDeviceTier = (width: number): DeviceTier => {
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  if (width < 1440) return 'laptop';
  if (width < 1920) return 'desktop';
  return 'ultrawide';
};

const getInputType = (): InputType => {
  if (typeof window === 'undefined') return 'mouse';
  // Check for touch capability
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  return hasTouch ? 'touch' : 'mouse';
};

const calculateScaleFactor = (width: number, deviceTier: DeviceTier): number => {
  // Base reference width is 1440px (Standard Laptop)
  const baseWidth = 1440;
  
  if (deviceTier === 'mobile') {
    // On mobile, we normalize against a standard 375px width to prevent tiny text
    return Math.max(0.85, Math.min(1.1, width / 375));
  }
  
  // For larger screens, we scale gently relative to 1440px
  // We clamp it so it doesn't get absurdly large or small
  return Math.max(0.8, Math.min(1.5, width / baseWidth));
};

export const ResponsiveProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [metrics, setMetrics] = useState<ResponsiveMetrics>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1440,
    height: typeof window !== 'undefined' ? window.innerHeight : 900,
    orientation: 'landscape',
    deviceTier: 'laptop',
    inputType: 'mouse',
    isRetina: false,
    scaleFactor: 1,
    isCompact: false,
  });

  const updateMetrics = useCallback(() => {
    if (typeof window === 'undefined') return;

    // 1. Core Dimensions
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    // 2. CSS Variable Injection for "Ultra Precision"
    // Sets a true 1% of viewport height, fixing mobile address bar issues.
    document.documentElement.style.setProperty('--app-height', `${h}px`);
    document.documentElement.style.setProperty('--app-width', `${w}px`);
    
    // 3. Derived Metrics
    const tier = getDeviceTier(w);
    const orientation = w > h ? 'landscape' : 'portrait';
    const input = getInputType();
    const scale = calculateScaleFactor(w, tier);
    const retina = window.devicePixelRatio > 1;

    setMetrics({
      width: w,
      height: h,
      orientation,
      deviceTier: tier,
      inputType: input,
      isRetina: retina,
      scaleFactor: scale,
      isCompact: tier === 'mobile' || tier === 'tablet',
    });
  }, []);

  useEffect(() => {
    // Initial calculation
    updateMetrics();

    // Event Listeners
    let resizeTimer: number;
    const handleResize = () => {
      // Debounce slightly to prevent thrashing but keep it responsive
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(updateMetrics, 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Initial CSS fix for 100vh
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [updateMetrics]);

  return (
    <ResponsiveContext.Provider value={metrics}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (context === undefined) {
    throw new Error('useResponsive must be used within a ResponsiveProvider');
  }
  return context;
};
