// i18next-scanner.config.js
module.exports = {
  input: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/i18n/**",
  ],

  output: "./",
  
  options: {
    debug: false,
    sort: true,
    removeUnusedKeys: true,
    func: {
      list: ["i18next.t", "t"],
    },
    trans: {
      component: "Trans",
      i18nKey: "i18nKey",
      defaultsKey: "defaults",
    },
    lngs: ["en", "ar", "ti"], // Add languages (English, Arabic, Tigrinya)
    defaultLng: "en",
    defaultValue: (lng, ns, key) => key,
    resource: {
      loadPath: "public/locales/{{lng}}/{{ns}}.json",
      savePath: "public/locales/{{lng}}/{{ns}}.json",
    },
    ns: [
      "translation"
    ],
    defaultNs: "translation",
  }
};
