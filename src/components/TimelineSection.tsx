import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";

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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
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
          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div
              className={cn(
                "absolute top-0 bottom-0 w-1 rounded-full",
                "bg-gradient-to-b from-heritage-gold via-heritage-ocean to-primary",
                dir === "rtl"
                  ? "right-6 md:right-1/2 md:translate-x-1/2"
                  : "left-6 md:left-1/2 md:-translate-x-1/2"
              )}
            />
            <div className="space-y-16">
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
                >
                  <div
                    className={cn(
                      "relative flex gap-8 md:gap-0",
                      dir === "rtl" ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    {/* Dot */}
                    <div
                      className={cn(
                        "absolute w-5 h-5 rounded-full top-4 z-10",
                        "bg-heritage-ocean ring-4 ring-background",
                        dir === "rtl"
                          ? "right-4 md:right-1/2 md:translate-x-1/2"
                          : "left-4 md:left-1/2 md:-translate-x-1/2"
                      )}
                    />
                    {/* Year */}
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
                        {event.year}
                      </span>
                    </div>
                    {/* Content */}
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
                          {event.year}
                        </span>
                        <p className="text-foreground/80 text-lg leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

