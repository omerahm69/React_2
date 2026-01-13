/*import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "ti", name: "ትግርኛ", flag: "🇪🇷" },
] as const;

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  const currentLang = languages.find(l => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 text-foreground hover:text-primary">
          <Globe size={18} />
          <span className="hidden sm:inline">{currentLang?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border-border">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`gap-3 cursor-pointer ${language === lang.code ? "bg-primary/10 text-primary" : ""}`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

/*import { useLanguage } from "@/i18n/useLanguage";
import type { Language } from "@/i18n/types";

const LanguageSelect = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => changeLanguage(e.target.value as Language)}
    >
      <option value="en">English</option>
      <option value="ar">العربية</option>
      <option value="ti">ትግርኛ</option>
    </select>
  );
};

export default LanguageSelect;


import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "ti", name: "ትግርኛ", flag: "🇪🇷" },
] as const;

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  const currentLang = languages.find(l => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 text-foreground hover:text-primary">
          <Globe size={18} />
          <span className="hidden sm:inline">{currentLang?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border-border">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`gap-3 cursor-pointer ${language === lang.code ? "bg-primary/10 text-primary" : ""}`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};


import type { Language } from "./i18n/types";
import { useLanguage } from "./i18n/useLanguage";
import { LanguageSwitcher } from "./LanguageSwitcher";


const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <select value={language} onChange={(e) => changeLanguage(e.target.value as Language)}>
      <option value="en">English</option>
      <option value="ar">العربية</option>
      <option value="ti">ትግርኛ</option>
    </select>
  );
};

export default LanguageSwitcher;*/

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "ti", label: "ትግርኛ", dir: "ltr" },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  // keep the context in sync for components using useLanguage
  const languageCtx = (() => {
    try {
      return useLanguage();
    } catch {
      return undefined as any;
    }
  })();

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);

    // Set direction for RTL / LTR
    const lang = languages.find((l) => l.code === code);
    document.documentElement.dir = lang?.dir || "ltr";

    // If a LanguageContext is present, update it as well
    if (languageCtx && typeof languageCtx.setLanguage === "function") {
      languageCtx.setLanguage(code as any);
    } else {
      // Fallback: persist selection so LanguageContext can pick it up on reload
      try {
        localStorage.setItem("language", code);
      } catch {}
    }
  };

  const current = i18n.language || (languageCtx && languageCtx.language) || "en";

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      value={current}
      className="px-2 py-1 rounded border"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};
