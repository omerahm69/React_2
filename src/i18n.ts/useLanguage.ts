import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { Language } from "./types";

const RTL_LANGS: Language[] = ["ar"];

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = RTL_LANGS.includes(i18n.language) ? "rtl" : "ltr";
  }, [i18n.language]);

  return { language: i18n.language as Language, changeLanguage, isRTL: RTL_LANGS.includes(i18n.language as Language) };
};
