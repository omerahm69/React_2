import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/i18n/LanguageContext';
import { Anchor, Compass, MapPin } from 'lucide-react';

const GeographySection = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-36 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-heritage-ocean/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-heritage-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-heritage-ocean to-heritage-ocean/70 rounded-2xl flex items-center justify-center shadow-elevated">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-heritage-ocean font-medium text-sm tracking-wider uppercase mb-1">About Massawa</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight">
                  {t.geography.title}
                </h2>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="card-gradient rounded-3xl p-8 md:p-12 shadow-elevated border border-border/50 relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-heritage-ocean/5 rounded-bl-[100px]" />
              
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed drop-cap relative z-10">
                {t.geography.content}
              </p>

              {/* Feature highlights */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-heritage-coral/10 rounded-lg flex items-center justify-center">
                    <Anchor className="w-5 h-5 text-heritage-coral" />
                  </div>
                  <span className="text-sm font-medium text-foreground/70">Historic Port</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-heritage-ocean/10 rounded-lg flex items-center justify-center">
                    <Compass className="w-5 h-5 text-heritage-ocean" />
                  </div>
                  <span className="text-sm font-medium text-foreground/70">Red Sea Coast</span>
                </div>
                <div className="flex items-center gap-3 col-span-2 md:col-span-1">
                  <div className="w-10 h-10 bg-heritage-gold/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-heritage-gold" />
                  </div>
                  <span className="text-sm font-medium text-foreground/70">Dahlak Islands</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default GeographySection;
