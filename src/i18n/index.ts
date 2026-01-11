
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



/*import i18next from "i18next";
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
    supportedLngs: ["en", "ar", "ti"],
    fallbackLng: "en",

    backend: {
      loadPath: "/locales/{{lng}}/translation.json"
    },

    detection: {
      order: ["localStorage","cookie","htmlTag", , , "navigator"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },
  });

  i18next.on("languageChanged", (lng) => {
  document.documentElement.dir = i18next.dir(lng);
  document.documentElement.lang = lng;
});

export default i18next;*

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, useTranslation } from "react-i18next";

const { t } = useTranslation();

import ar from "/locales/ar/translation.json";
import en from "/locales/en/translation.json";
import ti from "/locales/ti/translation.json";

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
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;*/


import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpBackend) // load files from /public/locales
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    backend: {
      // Path relative to /public
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;



