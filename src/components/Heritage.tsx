import { useLanguage } from '@/i18n/LanguageContext';
import { Building2, Landmark, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeritageSection = () => {
  const { t, dir } = useLanguage();
  const heritage = t("heritage", { returnObjects: true }) as {
  title: string;
  description: string;
};


  return (
    <section id="heritage" className="py-24 md:py-36 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-heritage-sand/50 via-background to-heritage-ocean/5" />
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-3xl flex items-center justify-center shadow-elevated mb-6 rotate-3 hover:rotate-0 transition-transform duration-300">
                <Building2 className="w-10 h-10 text-primary-foreground" />
              </div>
              <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">Urban Heritage</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight max-w-4xl">
                {t("heritage.title")}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatedSection animation="slide-left" delay={100}>
              <div className="group card-gradient rounded-3xl p-8 lg:p-10 shadow-elevated border border-border/50 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-heritage-coral/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Landmark className="w-6 h-6 text-heritage-coral" />
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed drop-cap">
                  {t("heritage.content1")}
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-right" delay={200}>
              <div className="group card-gradient rounded-3xl p-8 lg:p-10 shadow-elevated border border-border/50 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-heritage-ocean/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-heritage-ocean" />
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t("heritage.content2")}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Enhanced Decorative Elements */}
          <AnimatedSection animation="fade-in" delay={400}>
            <div className="mt-20 flex justify-center items-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-heritage-coral/50" />
              <div className="w-3 h-3 bg-heritage-coral rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-heritage-gold rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-3 bg-heritage-ocean rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-heritage-ocean/50" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
