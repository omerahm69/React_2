import FooterSection from "@/components/FooterSection";
import { Navigation } from "@/components/Navigation";
import { useTranslation } from "react-i18next";

import { Award, Heart, Target, Users } from "lucide-react";

const About = () => {
  const { t, i18n } = useTranslation();

  // Detect RTL languages
  const rtl = i18n.dir() === "rtl";

  const values = [
    {
      icon: Heart,
      title: t("about.values.passion.title"),
      description: t("about.values.passion.description"),
    },
    {
      icon: Users,
      title: t("about.values.community.title"),
      description: t("about.values.community.description"),
    },
    {
      icon: Target,
      title: t("about.values.excellence.title"),
      description: t("about.values.excellence.description"),
    },
    {
      icon: Award,
      title: t("about.values.integrity.title"),
      description: t("about.values.integrity.description"),
    },
  ];

  return (
    <div dir={rtl ? "rtl" : "ltr"} className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6 max-w-4xl">
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
              {t("about.badge")}
            </span>

            <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl mt-4 mb-8">
              {t("about.title")}
            </h1>

            <p className="text-lg text-foreground/80 leading-relaxed">
              {t("about.description")}
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div className="bg-card p-10 rounded-3xl">
              <h2 className="font-serif font-bold text-3xl mb-6">
                {t("about.vision.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("about.vision.content")}
              </p>
            </div>

            <div className="bg-card p-10 rounded-3xl">
              <h2 className="font-serif font-bold text-3xl mb-6">
                {t("about.mission.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("about.mission.content")}
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <h2 className="text-center font-serif font-bold text-4xl mb-16">
              {t("about.values.title")}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <value.icon size={28} />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-3">
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

      <FooterSection />
    </div>
  );
};

export default About;

