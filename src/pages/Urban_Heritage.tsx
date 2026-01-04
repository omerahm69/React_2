import { Navigation } from "@/components/Navigation";

import { useLanguage } from "@/i18n/LanguageContext";

const Heritage = () => {
  const { t } = useLanguage();

  const sites = [
    {
      name: "Classification of the historical buildings",
      era: "19th Century",
      description: "The former residence of Ottoman governors, featuring distinctive coral-block construction and intricate wooden balconies.",
      image: "/images/Classification_of_Building.webp",
    },
    {
      name: "Sheikh Hanafi Mosque",
      era: "16th Century",
      description: "One of the oldest mosques in Eritrea, representing centuries of Islamic architectural tradition on the Red Sea coast.",
      image: "/images/",
    },
    {
      name: "Torino Hotell",
      era: "Early 20th Century",
      description: "A stunning example of Italian rationalist architecture, showcasing the colonial era's European influence on local building styles.",
      image: "/images/Torino_hotell.webp",
    },
    {
      name: "",
      era: "18th-19th Century",
      description: "Historic trading warehouses that once stored goods from across the Indian Ocean trading network.",
      image: "",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">{t("heritage.label")}</span>
            <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mt-4 mb-8">
              {t("International conventions related to Urban Heritage")} </h1>
              <p> {t("The Convention of Heritage 1972: It is one of the most important tools to protect and maintain World Cultural Heritage.Most important Organization in this field: The United Nations Educational, Scientific and Cultural Organization (UNESCO). For more information World Heritage Centre (WHC) International Council On Monuments and Sites (ICOMOS) For more information")}</p>

              <span className="gradient-text">{t("An overview of the urban history of the ancient city of Massawa")}</span>
            
            <div className="max-w-3xl">
              <div className="drop-cap text-muted-foreground text-lg leading-relaxed">
                {t("The Convention of Heritage 1972: It is one of the most important tools to protect and maintain World Cultural Heritage.Most important Organization in this field: The United Nations Educational, Scientific and Cultural Organization (UNESCO). For more information World Heritage Centre (WHC) International Council On Monuments and Sites (ICOMOS) For more information")}
              </div>
            </div>
          </div>
        </section>
        {/* Sites Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {sites.map((site) => (
                <article key={site.name} className="group card-hover bg-card rounded-3xl overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-6 px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground rtl:left-auto rtl:right-6">
                      {site.era}
                    </span>
                  </div>
                  <div className="p-8">
                    <h2 className="font-serif font-bold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {site.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{site.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Heritage;
