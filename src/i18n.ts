import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "NAV.HOME": "Home",
          "NAV.ABOUT": "About",
          "NAV.ACTIVITIES": "Activities",
          "NAV.HERITAGE": "Heritage",
          "NAV.CONTACT": "Contact",
        },
      },
      ti: {
        translation: {
          "NAV.HOME": "መበል",
          "NAV.ABOUT": "ብዛዕባ",
          "NAV.ACTIVITIES": "ንጥፈታት",
          "NAV.HERITAGE": "ቅርሲ",
          "NAV.CONTACT": "ርክብ",
        },
      },
    },
    lng: "en",          // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
