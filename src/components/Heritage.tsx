import { useTranslation } from "react-i18next";

function Heritage() {
  const { t } = useTranslation();

  const images = [
    "/images/heritage/.webp",
    "/images/heritage/massawa2.webp",
    "/images/heritage/massawa3.webp",
    "/images/heritage/massawa4.webp",
    "/images/heritage/massawa5.webp",
    "/images/heritage/massawa6.webp",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/images/heritage/.webp')",
        }}
      >
        <div className="bg-black/50 p-6 rounded-lg">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            {t("heritage")}
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          {t("heritageIntro")}
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid gap-6 md:grid-cols-3">
        <Feature
          title={t("heritageFeature1Title")}
          text={t("heritageFeature1Text")}
        />
        <Feature
          title={t("heritageFeature2Title")}
          text={t("heritageFeature2Text")}
        />
        <Feature
          title={t("heritageFeature3Title")}
          text={t("heritageFeature3Text")}
        />
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {t("gallery")}
        </h2>

        <Gallery images={images} />
      </section>
    </main>
  );
}

function Feature({ title, text }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center">
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

export default Heritage;
