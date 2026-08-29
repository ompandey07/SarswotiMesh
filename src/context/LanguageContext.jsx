import { createContext, useContext, useEffect, useState, useCallback } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return "ne";
    try {
      return localStorage.getItem("smj_lang") || "ne";
    } catch {
      return "ne";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);
    try {
      localStorage.setItem("smj_lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((value) => setLangState(value), []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
