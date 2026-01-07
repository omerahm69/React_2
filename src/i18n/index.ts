import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import ar from "./locales/ar.json";
import en from "./locales/en.json";
import ti from "./locales/ti.json";

i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = i18n.dir(lng);
});


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      ti: { translation: ti },
    },
    fallbackLng: "en",
    debug:true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

// Set text direction whenever language changes
i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = i18n.dir(lng);
});

export default i18n;
