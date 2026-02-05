
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T>(key: { en: T; es: T }) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize from localStorage if available
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('viejooeste_lang');
    return (saved === 'en' || saved === 'es') ? (saved as Language) : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('viejooeste_lang', lang);
  };

  // Update HTML lang attribute for SEO
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = <T,>(textObj: { en: T; es: T }): T => {
    return textObj[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
