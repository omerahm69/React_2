import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import ar from "./locales/ar.json";
import en from "./locales/en.json";
import ti from "./locales/ti.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"]
    },
    interpolation: { escapeValue: false },
    resources: { en: { translation: en }, ar: { translation: ar }, ti: { translation: ti } }
});

export default i18n;
