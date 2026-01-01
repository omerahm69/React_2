import { FooterSection as Footer } from "@/components/FooterSection";
import { Navigation } from "@/components/Navigation";
import { useLanguage } from "@/i18n/LanguageContext";
import { Award, Heart, Target, Users } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: t("aboutPage.passion"), description: t("aboutPage.passionDesc") },
    { icon: Users, title: t("aboutPage.community"), description: t("aboutPage.communityDesc") },
    { icon: Target, title: t("aboutPage.excellence"), description: t("aboutPage.excellenceDesc") },
    { icon: Award, title: t("aboutPage.integrity"), description: t("aboutPage.integrityDesc") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6 max-w-4xl">
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
              {t("aboutPage.label")}
            </span>

            <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4 mb-8">
              {t("From exile to homecoming: Rediscovering Massawa's Urban Heritage")}
            </h1>

            <p className="text-lg text-foreground/80 leading-relaxed">
              {t("Stages and objectives of the initiative")}
            </p>

            <h3 className="mt-10 font-semibold gradient-text text-lg">
              {t("Stages of implementing the initiative Establishment stage")}
            </h3>

            <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
              {t("The goal of the initiative")}
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="card-hover bg-card p-10 rounded-3xl">
                <h2 className="font-serif font-bold text-3xl text-foreground mb-6">
                  {t("")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("aboutPage.missionText")}
                </p>
              </div>

              <div className="card-hover bg-card p-10 rounded-3xl">
                <h2 className="font-serif font-bold text-3xl text-foreground mb-6">
                  {t("aboutPage.vision")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("aboutPage.visionText")}
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
                {t("aboutPage.values")}{" "}
                <span className="gradient-text">{t("aboutPage.values2")}</span>
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

      <Footer />
    </div>
  );
};

export default About;

