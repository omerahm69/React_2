import { FooterSection } from "@/components/FooterSection";
import { Navigation } from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Heart, Target, Users } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: t("Passion"), description: t("Deep commitment to preserving cultural identity and architectural beauty.") },
    { icon: Users, title: t("Community"), description: t("Engaging local stakeholders as partners in heritage preservation.") },
    { icon: Target, title: t("Excellence"), description: t("Maintaining the highest standards in restoration and documentation.") },
    { icon: Award, title: t("Integrity"), description: t("Transparent operations and ethical practices in all endeavors.") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6 max-w-4xl">
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
              {t("Our Story")}
            </span>

            <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4 mb-8">
              {t("From exile to homecoming: Rediscovering Massawa's Urban Heritage")}
            </h1>

            <p className="text-lg text-foreground/80 leading-relaxed">
              {t("Founded in 2020, Urban Heritage emerged from a collective vision to safeguard Massawa's extraordinary architectural legacy. What began as a small group of passionate historians and architects has grown into a dedicated organization working across multiple fronts to preserve the ")}
            </p>

            <h3 className="mt-10 font-semibold gradient-text text-lg">
              {t("The goal of the initiative")}
            </h3>

            <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
              {t("Stages of implementing the initiative Establishment stage")}
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="card-hover bg-card p-10 rounded-3xl">
                <h2 className="font-serif font-bold text-3xl text-foreground mb-6">
                  {t("Our Vision")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("A future where Massawa's heritage sites are fully restored, accessible to all, and serve as a source of pride, education, and sustainable economic development for local communities.")}
                </p>
              </div>

              <div className="card-hover bg-card p-10 rounded-3xl">
                <h2 className="font-serif font-bold text-3xl text-foreground mb-6">
                  {t("Our Mission")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("To preserve, protect, and promote the architectural and cultural heritage of Massawa through professional restoration, comprehensive documentation, community education, and international collaboration")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground">
                {t("")}{"Our Values "}
                <span className="gradient-text">{t("")}</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <value.icon size={28} />
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterSection/>
    </div>
  );
};

export default About;

