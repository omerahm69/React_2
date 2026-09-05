import { Navigation } from "@/components/Navigation";
import { useTranslation } from "react-i18next";
import FooterSection from "../components/FooterSection";

type HeritageSite = {
  name: string;
  era: string;
  description: string;
  image: string;
};

const Heritage = () => {
  const { t } = useTranslation();

  const sites = (
    t("urban.sites", { returnObjects: true }) as HeritageSite[] | undefined
  ) ?? [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
              {t("nav.heritage")}
            </span>

            <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4 mb-8">
              {t("urban.conventionsTitle")}
            </h1>

            <p className="max-w-3xl text-muted-foreground text-lg leading-relaxed">
              {t("urban.conventionsText")}
            </p>

            <span className="gradient-text block mt-6 text-lg font-semibold">
              {t("urban.massawaOverviewTitle")}
            </span>
          </div>
        </section>

        {/* Sites Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {sites.map((site) => (
                <article
                  key={site.name}
                  className="group card-hover bg-card rounded-3xl overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    {site.image ? (
                      <img
                        src={site.image}
                        alt={site.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-heritage-ocean/20 flex items-center justify-center text-muted-foreground">
                        {site.name}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-6 px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground">
                      {site.era}
                    </span>
                  </div>

                  <div className="p-8">
                    <h2 className="font-serif font-bold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {site.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {site.description}
                    </p>
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

export default Heritage;