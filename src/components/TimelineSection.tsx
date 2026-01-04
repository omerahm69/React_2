
/*import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const TimelineSection = () => {
  const { t, dir } = useLanguage();

  const events = t("timeline.events", {
    returnObjects: true,
  }) as {
    year: string;
    description: string;
  }[];

  if (!Array.isArray(events)) return null;

  return (
    <section
      id="activities"
      className="py-24 md:py-36 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="w-16 h-16 bg-gradient-to-br from-heritage-gold to-heritage-gold/70 rounded-2xl flex items-center justify-center shadow-elevated mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <p className="text-heritage-gold font-medium text-sm tracking-wider uppercase mb-3">
                Historical Journey
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold">
                {t("timeline.title")}
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            <div
              className={cn(
                "absolute top-0 bottom-0 w-1 rounded-full",
                "bg-gradient-to-b from-heritage-gold via-heritage-ocean to-primary",
                dir === "rtl"
                  ? "right-6 md:right-1/2 md:translate-x-1/2"
                  : "left-6 md:left-1/2 md:-translate-x-1/2"
              )}
            />

            <div className="space-y-12">
              {events.map((event, index) => (
                <AnimatedSection
                  key={event.year}
                  animation={
                    dir === "rtl"
                      ? index % 2 === 0
                        ? "slide-right"
                        : "slide-left"
                      : index % 2 === 0
                      ? "slide-left"
                      : "slide-right"
                  }
                  delay={index * 100}
                >
                  <div className="relative flex flex-col md:flex-row items-start gap-8">
                    <div
                      className={cn(
                        "hidden md:flex md:w-1/2 items-center",
                        dir === "rtl"
                          ? "justify-start pl-12"
                          : "justify-end pr-12",
                        index % 2 !== 0 && "md:order-2"
                      )}
                    >
                      <span className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-serif font-bold text-xl rounded-xl shadow-elevated">
                        <Calendar className="w-5 h-5" />
                        {700}
                      </span>
                    </div>

                    <div
                      className={cn(
                        "absolute w-5 h-5 rounded-full top-4 z-10",
                        "bg-heritage-ocean ring-4 ring-background",
                        dir === "rtl"
                          ? "right-4 md:right-1/2 md:translate-x-1/2"
                          : "left-4 md:left-1/2 md:-translate-x-1/2"
                      )}
                    />

                    <div
                      className={cn(
                        "md:w-1/2 flex-1",
                        dir === "rtl" ? "md:pr-12" : "md:pl-12",
                        index % 2 === 0 && "md:order-2"
                      )}
                    >
                      <div className="card-gradient rounded-2xl p-6 lg:p-8 shadow-elevated border border-border/50">
                        <span className="md:hidden inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-serif font-bold text-sm rounded-lg mb-4">
                          <Calendar className="w-4 h-4" />
                          {1500}
                        </span>
                        <p className="text-foreground/80 text-lg leading-relaxed">
                          {"The era of marine discovery & the Portuguese occupationss"}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div
              className={cn(
                "absolute -bottom-4 w-8 h-8 bg-gradient-to-br from-primary to-heritage-coral rounded-full",
                "flex items-center justify-center shadow-elevated",
                dir === "rtl"
                  ? "right-3 md:right-1/2 md:translate-x-1/2"
                  : "left-3 md:left-1/2 md:-translate-x-1/2"
              )}
            >
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;


import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

type TimelineEvent = {
  year: string;
  description: string;
};

type TimelineData = {
  title?: string;
  events?: TimelineEvent[];
};

const TimelineSection = () => {
  const { t, dir } = useLanguage();

  //  Safely read the whole timeline object
  const timeline = t("timeline", {
    returnObjects: true,
  }) as TimelineData;

  //  Guard against undefined / wrong shapes
  const events: TimelineEvent[] = Array.isArray(timeline?.events)
    ? timeline.events
    : [];

  return (
    <section id="activities" className="py-24 md:py-36 relative overflow-hidden">
      {/* Background styling }
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="w-16 h-16 bg-gradient-to-br from-heritage-gold to-heritage-gold/70 rounded-2xl flex items-center justify-center shadow-elevated mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <p className="text-heritage-gold font-medium text-sm tracking-wider uppercase mb-3">
                Historical Journey
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground">
                {timeline?.title}
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line }
            <div
              className={cn(
                "absolute top-0 bottom-0 w-1 rounded-full",
                "bg-gradient-to-b from-heritage-gold via-heritage-ocean to-primary",
                dir === "rtl"
                  ? "right-6 md:right-1/2 md:-mr-0.5"
                  : "left-6 md:left-1/2 md:-ml-0.5"
              )}
            />

            {/* Timeline Events *}
            <div className="space-y-12">
              {events.map((event, index) => (
                <AnimatedSection
                  key={event.year}
                  animation={
                    dir === "rtl"
                      ? index % 2 === 0
                        ? "slide-right"
                        : "slide-left"
                      : index % 2 === 0
                      ? "slide-left"
                      : "slide-right"
                  }
                  delay={index * 100}
                >
                  <div
                    className={cn(
                      "relative flex gap-8 md:gap-0",
                      dir === "rtl" ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    {/* Year Badge - Desktop *}
                    <div
                      className={cn(
                        "hidden md:flex md:w-1/2 items-center",
                        dir === "rtl"
                          ? "justify-start pl-12"
                          : "justify-end pr-12",
                        index % 2 !== 0 && "md:order-2",
                        index % 2 !== 0 &&
                          (dir === "rtl"
                            ? "md:justify-end md:pr-12 md:pl-0"
                            : "md:justify-start md:pl-12 md:pr-0")
                      )}
                    >
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-serif font-bold text-xl rounded-xl shadow-elevated",
                          index % 2 !== 0 && "md:hidden"
                        )}
                      >
                        <Calendar className="w-5 h-5" />
                        {event.year}
                      </span>

                      <span
                        className={cn(
                          "hidden items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-serif font-bold text-xl rounded-xl shadow-elevated",
                          index % 2 !== 0 && "md:inline-flex"
                        )}
                      >
                        <Calendar className="w-5 h-5" />
                        {event.year}
                      </span>
                    </div>

                    {/* Dot *}
                    <div
                      className={cn(
                        "absolute w-5 h-5 rounded-full top-4 z-10",
                        "bg-gradient-to-br from-heritage-ocean to-heritage-ocean/70",
                        "ring-4 ring-background shadow-lg",
                        dir === "rtl"
                          ? "right-4 md:right-1/2 md:translate-x-1/2"
                          : "left-4 md:left-1/2 md:-translate-x-1/2"
                      )}
                    >
                      <div className="absolute inset-0 bg-heritage-ocean rounded-full animate-ping opacity-20" />
                    </div>

                    {/* Content }
                    <div
                      className={cn(
                        "md:w-1/2 flex-1",
                        dir === "rtl" ? "md:pr-12" : "md:pl-12",
                        index % 2 === 0 && "md:order-2"
                      )}
                    >
                      <div className="group card-gradient rounded-2xl p-6 lg:p-8 shadow-elevated border border-border/50 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                        {/* Mobile year }
                        <span className="md:hidden inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-serif font-bold text-sm rounded-lg mb-4">
                          <Calendar className="w-4 h-4" />
                          {event.year}
                        </span>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* End marker }
            <div
              className={cn(
                "absolute -bottom-4 w-8 h-8 bg-gradient-to-br from-primary to-heritage-coral rounded-full",
                "flex items-center justify-center shadow-elevated",
                dir === "rtl"
                  ? "right-3 md:right-1/2 md:translate-x-1/2"
                  : "left-3 md:left-1/2 md:-translate-x-1/2"
              )}
            >
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;*/


import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { Calendar, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const TimelineSection = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="activities" className="py-24 md:py-36 relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="w-16 h-16 bg-gradient-to-br from-heritage-gold to-heritage-gold/70 rounded-2xl flex items-center justify-center shadow-elevated mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <p className="text-heritage-gold font-medium text-sm tracking-wider uppercase mb-3">Historical Journey</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground">
                {t.timeline.title}
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line with gradient */}
            <div className={cn(
              "absolute top-0 bottom-0 w-1 rounded-full",
              "bg-gradient-to-b from-heritage-gold via-heritage-ocean to-primary",
              dir === 'rtl' ? 'right-6 md:right-1/2 md:-mr-0.5' : 'left-6 md:left-1/2 md:-ml-0.5'
            )} />

            {/* Timeline Events */}
            <div className="space-y-12">
              {t.timeline.events.map((event, index) => (
                <AnimatedSection 
                  key={event.year} 
                  animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                  delay={index * 100}
                >
                  <div
                    className={cn(
                      "relative flex gap-8 md:gap-0",
                      dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'
                    )}
                  >
                    {/* Year Badge - Desktop */}
                    <div className={cn(
                      "hidden md:flex md:w-1/2 items-center",
                      dir === 'rtl' 
                        ? 'justify-start pl-12' 
                        : 'justify-end pr-12',
                      index % 2 !== 0 && 'md:order-2',
                      index % 2 !== 0 && (dir === 'rtl' ? 'md:justify-end md:pr-12 md:pl-0' : 'md:justify-start md:pl-12 md:pr-0')
                    )}>
                      <span className={cn(
                        "inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-serif font-bold text-xl rounded-xl shadow-elevated",
                        index % 2 === 0 ? '' : 'md:hidden'
                      )}>
                        <Calendar className="w-5 h-5" />
                        {event.year}
                      </span>
                      <span className={cn(
                        "hidden items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-serif font-bold text-xl rounded-xl shadow-elevated",
                        index % 2 !== 0 && 'md:inline-flex'
                      )}>
                        <Calendar className="w-5 h-5" />
                        {event.year}
                      </span>
                    </div>

                    {/* Dot with pulse effect */}
                    <div className={cn(
                      "absolute w-5 h-5 rounded-full top-4 z-10",
                      "bg-gradient-to-br from-heritage-ocean to-heritage-ocean/70",
                      "ring-4 ring-background shadow-lg",
                      dir === 'rtl' 
                        ? 'right-4 md:right-1/2 md:translate-x-1/2' 
                        : 'left-4 md:left-1/2 md:-translate-x-1/2'
                    )}>
                      <div className="absolute inset-0 bg-heritage-ocean rounded-full animate-ping opacity-20" />
                    </div>

                    {/* Content */}
                    <div className={cn(
                      "md:w-1/2 flex-1",
                      dir === 'rtl' 
                        ? 'md:pr-12' 
                        : 'md:pl-12',
                      index % 2 === 0 ? 'md:order-2' : ''
                    )}>
                      <div className="group card-gradient rounded-2xl p-6 lg:p-8 shadow-elevated border border-border/50 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                        {/* Mobile year badge */}
                        <span className="md:hidden inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-serif font-bold text-sm rounded-lg mb-4">
                          <Calendar className="w-4 h-4" />
                          {event.year}
                        </span>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* End marker */}
            <div className={cn(
              "absolute -bottom-4 w-8 h-8 bg-gradient-to-br from-primary to-heritage-coral rounded-full",
              "flex items-center justify-center shadow-elevated",
              dir === 'rtl' ? 'right-3 md:right-1/2 md:translate-x-1/2' : 'left-3 md:left-1/2 md:-translate-x-1/2'
            )}>
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

