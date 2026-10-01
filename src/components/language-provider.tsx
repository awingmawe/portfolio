"use client";

import { createContext, useContext, useSyncExternalStore, ReactNode } from "react";
import { translations, Language, Translations } from "@/lib/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getLanguageSnapshot(): Language {
  try {
    const saved = localStorage.getItem("language");
    if (saved === "en" || saved === "id") return saved;
  } catch {
    // Fallback if localStorage is inaccessible
  }
  return "en";
}

function getLanguageServerSnapshot(): Language {
  return "en";
}

function subscribeLanguage(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("languagechange-custom", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("languagechange-custom", callback);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribeLanguage,
    getLanguageSnapshot,
    getLanguageServerSnapshot
  );

  const handleSetLanguage = (lang: Language) => {
    try {
      localStorage.setItem("language", lang);
      window.dispatchEvent(new Event("languagechange-custom"));
    } catch {
      // Fallback if localStorage is inaccessible
    }
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
