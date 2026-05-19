import { createContext, useContext, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'fr' || saved === 'en') return saved;
    
    // Automatically fallback based on user's browser locale setting
    const browserLang = navigator.language || navigator.userLanguage || 'fr';
    return browserLang.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  });

  const setLanguage = (lang) => {
    if (lang === 'fr' || lang === 'en') {
      setLanguageState(lang);
      localStorage.setItem('portfolio_lang', lang);
    }
  };

  // Robust dotted-path property resolver for translations
  const t = (key) => {
    const keys = key.split('.');
    let current = translations[language];

    for (const k of keys) {
      if (current === undefined || current === null) return key;
      current = current[k];
    }

    return current !== undefined ? current : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
