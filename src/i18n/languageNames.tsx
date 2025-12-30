import type { Language } from "./types";

export const languageNames: Record<Language, Record<string, string>> = {
  en: { en: "English", ar: "Arabic", ti: "Tigrinya" },
  ar: { en: "الإنجليزية", ar: "العربية", ti: "التغرينية" },
  ti: { en: "English", ar: "العربية", ti: "ትግርኛ" },
};
