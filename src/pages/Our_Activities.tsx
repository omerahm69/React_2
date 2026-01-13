import { Navigation } from "@/components/Navigation";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import FooterSection from "../components/FooterSection";

const Activities = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("activitiesPage.study1"),
      status: t("activitiesPage.seminars.title"),
      description: t("activitiesPage.main.study1"),
      image: "/images/Studi_1.webp",
      subtitle: "UNESCO – 1998",
      achievements: [],
    },
    {
      title: t("activitiesPage.seminars.title"),
      status: t("activitiesPage.seminars.subtitle"),
      description: t("activitiesPage.seminars.description"),
      image: "/images/Studi_2.webp",
      subtitle: t("activitiesPage.seminars.subtitle"),
      achievements: [],
    },
    {
      title: t("activitiesPage.publications.title"),
      status: t("activitiesPage.publications.title"),
      description: t("activitiesPage.publications.description"),
      image: "/images/Studi_3.webp",
      achievements: [],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">{t("nav.activities")}</span>
            <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4 mb-8">
              {t("activitiesPage.main.title")} <span className="gradient-text"></span>
            </h1>
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
              {t("activitiesPage.main.intro1").substring(0, 150)}
            </p>
          </div>
        </section>
        {/* Projects */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="card-hover rounded-3xl overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">{project.status}</span>
                    <h2 className="font-serif font-bold text-3xl text-foreground mb-4">{project.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                    <div className="space-y-3">
                      {project.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-center gap-3">
                          <CheckCircle size={18} className="text-primary shrink-0" />
                          <span className="text-foreground text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Activities;
