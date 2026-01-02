import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
.use(initReactI18next)
  .init({
  resources: {
    en: {
      translation: {
        nav:  {
            "home": "Home",
            "about": "About",
            "Activities": "Activities",
            "Heritage": "Heritage",
            "Contact": "Contact",
},
    
        geography: {
  label: "About Massawa",
  title: "Geographical Overview of the City of Massawa",
  description:
    "Massawa is the second most important city and the main port of Eritrea. It lies on the Red Sea coast along one of the world’s most important international trade routes and has served as a historic port for centuries. The city is located on the southwestern coast of the Red Sea near the Gulf of Zula.",
  imageAlt: "Geographical map of Massawa",
},
      
  hero: {
  tagline: "Urban Heritage",
  title: "Massawa",
  subtitle: "Discover the Rich History of Eritrea’s Coastal Gem",
  description:
    "The city is considered a mosaic carrying a mixture of residents and dialects, like all ports of the world. Merchants and immigrants from many lands settled here, blending with local communities and shaping a living open-air museum unlike its surroundings.",
  imageAlt: "Old Post Office of Massawa",
  ctaPrimary: "Explore Heritage",
  ctaSecondary: "Learn More",
},


        timeline: {
          title: "The Timeline of Massawa",
          events: [
            {
              year: "615",
              description:
                "The migration of Companions of the Prophet to Abyssinia via the port of Massawa.",
            },
            {
              year: "700",
              description: "Islamic-style emirates in East Africa.",
            },
          ],
        
        },
      },
    },

    translation: {
  heritage: {
    title: "Urban Heritage of Massawa",
    description: "Massawa’s architecture reflects centuries of cultural exchange...",
  },
},

    ti: {
      translation: {
        nav: {
          home: "መበል",
          about: "ብዛዕባ",
          activities: "ንጥፈታት",
          heritage: "ቅርሲ",
          contact: "ርክብ",
        },

        geography: {
  label: "ብዛዕባ ማሳዋ",
  title: "ጂኦግራፊያዊ ሓፈሻ ናይ ከተማ ማሳዋ",
  description:
    "ማሳዋ ካልኣይቲ ኣገዳሲት ከተማ ኤርትራን ዋና ወደብን እያ። ኣብ ጎን ባሕሪ ቀይሕ ትርከብ እና ንብዙሕ ዘመናት ኣገዳሲ ታሪኻዊ ወደብ ነይራ።",
  imageAlt: "ካርታ ማሳዋ",
},


        timeline: {
          title: "ዝርዝር ታሪኽ ማሳዋ",
          events: [
            {
              year: "615",
              description:
                "ምውጻእ ኣስሓብ ናይ ነቢይ ናብ ኣቢሲንያ ብመንገዲ ማሳዋ።",
            },
            {
              year: "700",
              description: "እስላማዊ ኢማራት ኣብ ምብራቕ ኣፍሪቃ።",
            },
          ],
        },
      },
    },
  },

  aboutPage: {
  description:
    "An Eritrean civil initiative that seeks to document and protect the urban heritage of the ancient city of Massawa and spread awareness about it. Its idea was launched by the Samhar Cultural Association in Stockholm, Sweden in February 2020, coinciding with the 30th anniversary of the liberation of Massawa from the Ethiopian occupation.",

  goalTitle: "The goal of the initiative",

  goalDescription:
    "The inscription of the ancient city of Massawa (the city of urban diversity in Africa) on the World Heritage List of UNESCO.",
},


  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
        
