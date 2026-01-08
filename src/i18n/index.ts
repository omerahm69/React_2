
/*import ar from "./locales/ar/translation.json";
import es/{{lng}}/translation.json'en from "./locales/en/translation.json";
import ti from "./locales/ti/translation.json";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";



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

export default i18n;*/



import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";



i18next.on("languageChanged", (lng) => {
  document.documentElement.dir = i18next.dir(lng);
  document.documentElement.lang = lng;
});

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpBackend)

  .init({
    supportedLngs: ['en', 'ar', 'ti'],
    fallbackLng: "en",

    backend: {
      loadPath: "  http://localhost:8080/locales/{{lng}}/ar/translation.json",
    },

    detection: {
      order: ["cookie","htmlTag", "localStorage", , "navigator"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;



