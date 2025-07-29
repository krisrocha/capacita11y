import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { AccessibilityPreferences } from '../types';

interface AccessibilityContextType {
  preferences: AccessibilityPreferences;
  updatePreferences: (newPreferences: Partial<AccessibilityPreferences>) => void;
  resetPreferences: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const defaultPreferences: AccessibilityPreferences = {
  textSize: 'normal',
  highContrast: false,
  reduceMotion: false,
  screenReader: false,
  captionsEnabled: true,
  keyboardNavigation: true,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(() => {
    const savedPreferences = localStorage.getItem('accessibilityPreferences');
    return savedPreferences ? JSON.parse(savedPreferences) : defaultPreferences;
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      return JSON.parse(savedDarkMode);
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Save preferences to localStorage
    localStorage.setItem('accessibilityPreferences', JSON.stringify(preferences));

    // Apply preferences to document
    document.body.classList.toggle('high-contrast', preferences.highContrast);
    document.body.classList.remove('large-text', 'larger-text');
    
    if (preferences.textSize === 'large') {
      document.body.classList.add('large-text');
    } else if (preferences.textSize === 'larger') {
      document.body.classList.add('larger-text');
    }

    // Check system preferences for reduced motion
    const systemReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Apply reduced motion if either user selected it or system preferences indicate it
    if (preferences.reduceMotion || systemReducedMotion) {
      document.body.classList.add('motion-reduce');
    } else {
      document.body.classList.remove('motion-reduce');
    }
  }, [preferences]);

  useEffect(() => {
    // Save dark mode preference
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Apply dark mode to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Listen for system color scheme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode === null) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const updatePreferences = (newPreferences: Partial<AccessibilityPreferences>) => {
    setPreferences(prev => ({ ...prev, ...newPreferences }));
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <AccessibilityContext.Provider value={{ 
      preferences, 
      updatePreferences, 
      resetPreferences, 
      darkMode, 
      toggleDarkMode 
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};