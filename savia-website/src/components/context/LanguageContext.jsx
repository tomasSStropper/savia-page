import { createContext, useContext, useState } from 'react';
import translations from '../../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('es');
  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
