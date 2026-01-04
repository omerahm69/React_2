/*import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const { t, dir } = useLanguage();

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay }
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            hsla(20, 9%, 88%, 0.6),
            hsla(30, 2%, 40%, 0.8)
          ), url("/assets/Entrance_of_Old_Arab_Souk.webp")`,
        }}
      />

      {/* Decorative elements }
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Content }
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="animate-fade-up text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
          {t("hero.tagline")}
        </p>

        <h2
          className="animate-fade-up font-serif font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary-foreground text-shadow-hero leading-none mb-8"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="gradient-text">
            {t("Massawa Urban Heritage")}
          </span>
          <br />
          <span className="text-primary-foreground">
            {t("Discover the Rich History of Eritrean's Coastal Gem")}
          </span>
        </h2>

        <div
          className="animate-fade-up max-w-2xl mx-auto text-lg sm:text-xl text-primary-foreground/80 mb-12 leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="mb-6">
            {t(
              "The city is considered a mosaic carrying in its folds a mixture of residents and dialects, like all the ports in the world. The immigration and merchants coming from all countries settled in it, mixed with its residents, and set up their businesses. Everyone lived in it like an open museum that different from the rest of their surroundings. "
            )}
          </p>

          <img
            src="/images/Old_post_office.webp"
            alt="Cultural heritage"
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>

        <div
          className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            className="btn-premium text-primary-foreground px-10 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <span className="relative z-10">
              {t("hero.cta1")}
            </span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 px-10 py-6 text-lg font-semibold rounded-full"
          >
            {t("hero.cta2")}
          </Button>
        </div>
      </div>

      {/* Scroll indicator }
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};*/
import { useLanguage } from '@/i18n/LanguageContext';
import { ChevronDown } from 'lucide-react';
import heroImage from '/images/Entrance_of_Old_Arab_Souk.webp';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with enhanced overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Massawa Heritage Port City"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        {/* Multi-layer overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-heritage-ocean/20" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-heritage-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-heritage-ocean/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Subtitle with decorative elements */}
          <div className="flex items-center justify-center gap-6 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-heritage-gold to-heritage-gold/60" />
            <div className="relative">
              <p className="text-heritage-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase relative z-10">
                {t.hero.subtitle}
              </p>
              <div className="absolute inset-0 bg-heritage-gold/20 blur-xl" />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-heritage-gold to-heritage-gold/60" />
          </div>
          
          {/* Enhanced Main title with better visual impact */}
          <h1 
            className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-10 opacity-0 animate-fade-in-up drop-shadow-2xl leading-[0.95]"
            style={{ 
              animationDelay: '0.4s', 
              animationFillMode: 'forwards',
              textShadow: '0 8px 40px rgba(0,0,0,0.6), 0 2px 10px rgba(0,0,0,0.4)'
            }}
          >
            {t.hero.title}
          </h1>
          
          {/* Enhanced Description with better readability */}
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in"
            style={{ 
              animationDelay: '0.6s', 
              animationFillMode: 'forwards',
              textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)',
              letterSpacing: '0.02em'
            }}
          >
            {t.hero.description}
          </p>
          
          {/* Premium CTA buttons with enhanced styling */}
          <div 
            className="mt-16 flex flex-col sm:flex-row gap-5 justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <a
              href="#heritage"
              className="group relative px-10 py-5 bg-gradient-to-r from-primary to-heritage-ocean text-primary-foreground font-bold text-lg rounded-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-2 flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">{t.nav.urbanHeritage}</span>
              <span className="relative z-10 group-hover:translate-x-2 transition-transform text-xl">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-heritage-gold/20 to-heritage-coral/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#about"
              className="group px-10 py-5 bg-white/5 text-white font-bold text-lg rounded-2xl border-2 border-white/40 hover:bg-white/15 hover:border-white/60 hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-2 backdrop-blur-lg"
            >
              <span className="relative z-10">{t.nav.aboutUs}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in flex flex-col items-center gap-2" 
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center p-2">
          <ChevronDown className="w-4 h-4 text-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
