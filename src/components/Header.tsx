import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/About", label: t("nav.about") },
    { href: "/Urban_Heritage", label: t("nav.heritage") },
    { href: "/Our_Activities", label: t("nav.activities") },
    { href: "/Contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative w-14 h-14 bg-gradient-to-br from-primary via-primary to-heritage-ocean rounded-2xl flex items-center justify-center shadow-elevated group-hover:shadow-soft transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
              <span className="text-primary-foreground font-serif text-2xl font-bold relative z-10">A</span>
              <div className="absolute inset-0 bg-heritage-gold/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col text-start">
              <span className="text-3xl font-serif font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent tracking-tight leading-none">
                AKAN
              </span>
              <span className="text-xs text-muted-foreground font-semibold tracking-[0.15em] uppercase mt-0.5">
                {t("header.subtitle")}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative group px-5 py-2.5 text-sm font-semibold text-foreground/70 hover:text-foreground rounded-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-heritage-ocean/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-heritage-ocean group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Language & Mobile */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-primary/5"
              )}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;