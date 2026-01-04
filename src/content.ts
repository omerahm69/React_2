import { t, type Dictionary } from "intlayer";

const SiteContent = {
  key: "Site",
  content: {
    // =====================
    // Navigation
    // =====================
    navigation: t({
      en: [
        { label: "Home", href: "/" },
        { label: "Heritage", href: "/heritage" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
      ar: [
        { label: "الرئيسية", href: "/" },
        { label: "التراث", href: "/heritage" },
        { label: "حول", href: "/about" },
        { label: "اتصل بنا", href: "/contact" },
      ],
      ti: [
        { label: "መእተዊ", href: "/" },
        { label: "ሓርማዝ", href: "/heritage" },
        { label: "ኣብ ስራሕ", href: "/about" },
        { label: "ንግኡና", href: "/contact" },
      ],
    }),

    // =====================
    // Home Page
    // =====================
    home: t({
      en: {
        heroTitle: "Welcome to Our Website",
        heroSubtitle: "We provide the best services for you.",
        getStartedButton: "Get Started",
        contactButton: "Contact Us",
      },
      ar: {
        heroTitle: "مرحبًا بكم في موقعنا",
        heroSubtitle: "نحن نقدم أفضل الخدمات لك.",
        getStartedButton: "ابدأ الآن",
        contactButton: "اتصل بنا",
      },
      ti: {
        heroTitle: "እንቋዕ ደሓን መጻኢ ኣብ ድሕሪትና",
        heroSubtitle: "ንስራሕና ዝተረኽበ ኣገልግሎት ንኹሉኹም እየ።",
        getStartedButton: "ንጀምር ይኹን",
        contactButton: "ንግኡና",
      },
    }),

    // =====================
    // Heritage Page
    // =====================
    heritage: t({
      en: {
        label: "Heritage",
        heroTitle: "International conventions related to Urban Heritage",
        heroSubtitle:
          "The Convention of Heritage 1972: It is one of the most important tools to protect and maintain World Cultural Heritage. Most important Organization in this field: The United Nations Educational, Scientific and Cultural Organization (UNESCO). For more information: World Heritage Centre (WHC), International Council On Monuments and Sites (ICOMOS).",
        heroOverview: "An overview of the urban history of the ancient city of Massawa",
        sites: [
          {
            name: "Classification of the historical buildings",
            era: "19th Century",
            description:
              "The former residence of Ottoman governors, featuring distinctive coral-block construction and intricate wooden balconies.",
            image: "/images/Classification_of_Building.webp",
          },
          {
            name: "Sheikh Hanafi Mosque",
            era: "16th Century",
            description:
              "One of the oldest mosques in Eritrea, representing centuries of Islamic architectural tradition on the Red Sea coast.",
            image: "/images/Sheikh_Hanafi_Mosque.webp",
          },
          {
            name: "Torino Hotell",
            era: "Early 20th Century",
            description:
              "A stunning example of Italian rationalist architecture, showcasing the colonial era's European influence on local building styles.",
            image: "/images/Torino_hotell.webp",
          },
          {
            name: "Historic Warehouses",
            era: "18th-19th Century",
            description:
              "Historic trading warehouses that once stored goods from across the Indian Ocean trading network.",
            image: "/images/warehouses.webp",
          },
        ],
      },
      ar: {
        label: "التراث",
        heroTitle: "الاتفاقيات الدولية المتعلقة بالتراث الحضري",
        heroSubtitle:
          "اتفاقية التراث 1972: إنها واحدة من أهم الأدوات لحماية وصيانة التراث الثقافي العالمي. أهم منظمة في هذا المجال: منظمة الأمم المتحدة للتربية والعلم والثقافة (اليونسكو). للمزيد من المعلومات: مركز التراث العالمي (WHC)، المجلس الدولي للمعالم والمواقع (ICOMOS).",
        heroOverview: "نظرة عامة على التاريخ الحضري للمدينة القديمة مصوعه",
        sites: [
          {
            name: "تصنيف المباني التاريخية",
            era: "القرن التاسع عشر",
            description:
              "المقر السابق لحكام العثمانيين، يتميز ببناء من كتل المرجان وشرفات خشبية معقدة.",
            image: "/images/Classification_of_Building.webp",
          },
          {
            name: "مسجد الشيخ حنفي",
            era: "القرن السادس عشر",
            description:
              "أحد أقدم المساجد في إريتريا، يمثل قرونًا من التقليد المعماري الإسلامي على ساحل البحر الأحمر.",
            image: "/images/Sheikh_Hanafi_Mosque.webp",
          },
          {
            name: "فندق تورينو",
            era: "بداية القرن العشرين",
            description:
              "مثال رائع على الهندسة المعمارية الإيطالية العقلانية، يظهر تأثير الحقبة الاستعمارية الأوروبية على الطراز المحلي.",
            image: "/images/Torino_hotell.webp",
          },
          {
            name: "المستودعات التاريخية",
            era: "القرن 18-19",
            description:
              "مستودعات تجارية تاريخية كانت تخزن البضائع من شبكة تجارة المحيط الهندي.",
            image: "/images/warehouses.webp",
          },
        ],
      },
      ti: {
        label: "ሓርማዝ",
        heroTitle: "ኣለም-አቀፍ ውል ብትምህርቲ ናብ ከተማ ሓርማዝ",
        heroSubtitle:
          "ኮንቬንሽን ናብ ሓርማዝ 1972፡ እዚ ኣንስተይ ከባቢ ዘይትረኽብ ንዝተጠበቀ ዓለም ባህላዊ ሓርማዝ ከም ጠቕምቲ መሳርሒ እዩ። ከባቢ ኣንደበት ድማ ዘሎ ኣካል፡ ዓለም ኣብ ትምህርቲ፣ ስምንታዊ ንጥረ-ሓርማዝን ባህላዊ ድርጅት (UNESCO)። ንተጨማሪ ሓበሬታ፡ World Heritage Centre (WHC), International Council On Monuments and Sites (ICOMOS).",
        heroOverview: "ኣጠቃላይ መረዳእታ ናብ ከተማ ማሳዋ ከተማ ታሪኽ ከተማዊ",
        sites: [
          {
            name: "ምድብ ዝተዋቀረ ሕንጻታት",
            era: "19ኛ ክፍለ ዘመን",
            description:
              "ኣቕሓ መንግስታት ኦቶማን ኣብ ቤት ዝኾነ፣ ከባቢ ኣብ ኮራል ክፍል ሕንጻን ዝተኣሰረ ዝጽርቕ እና ዝተገነበረ ነዊሕ ሰንጠረዥ በረከትን እዩ።",
            image: "/images/Classification_of_Building.webp",
          },
          {
            name: "መስግን ሸይኽ ሓናፊ",
            era: "16ኛ ክፍለ ዘመን",
            description:
              "ኣንዱ ከም ዝበለ መስግንታት ኣብ ኤርትራ፣ ምሳሌ ናብ ምድሪ ባሕሊ እና ሓርማዝ ናይ እስላም ሕንጻዊ ባህሊ ዘመን ይገልጽ።",
            image: "/images/Sheikh_Hanafi_Mosque.webp",
          },
          {
            name: "ቶሪኖ ሆቴል",
            era: "20ኛ ክፍለ ዘመን ቀደም",
            description:
              "ምሳሌ ተወዳጅ ናይ ኢጣሊያን ራሽናሊስት ሕንጻዊ ኣርክቲከቸር፣ ዘመን ኮሎኒ ዘይተገነባ ኣውሮፓ ተጽዕኖ ናብ ነዊሕ ሕንጻ ይገልጽ።",
            image: "/images/Torino_hotell.webp",
          },
          {
            name: "ታሪኽ ዝሕተት መክሰስታት",
            era: "18-19ኛ ክፍለ ዘመን",
            description:
              "ታሪኽ ዝተገነበረ መክሰስታት ከም ነዊሕ ዕቃ ናብ ከተማዊ ንግድ ነፃ ዝተጠበቀ እዩ።",
            image: "/images/warehouses.webp",
          },
        ],
      },
    }),

    // =====================
    // Footer
    // =====================
    footer: t({
      en: {
        copyright:
          "© 2026 Your Company. All rights reserved.",
        address: "123 Main Street, Massawa, Eritrea",
        email: "info@yourcompany.com",
        social: [
          { platform: "Facebook", url: "https://facebook.com" },
          { platform: "Twitter", url: "https://twitter.com" },
          { platform: "Instagram", url: "https://instagram.com" },
        ],
      },
      ar: {
        copyright:
          "© 2026 شركتك. جميع الحقوق محفوظة.",
        address: "123 شارع الرئيسي، مصوعه، إريتريا",
        email: "info@yourcompany.com",
        social: [
          { platform: "فيسبوك", url: "https://facebook.com" },
          { platform: "تويتر", url: "https://twitter.com" },
          { platform: "إنستغرام", url: "https://instagram.com" },
        ],
      },
      ti: {
        copyright:
          "© 2026 ኩባንያኹም። መብት ኩሎም ተጠቒሙ።",
        address: "123 መእተዊ መንገዲ፣ ማሳዋ፣ ኤርትራ",
        email: "info@yourcompany.com",
        social: [
          { platform: "ፌስቡክ", url: "https://facebook.com" },
          { platform: "ትዊተር", url: "https://twitter.com" },
          { platform: "ኢንስታግራም", url: "https://instagram.com" },
        ],
      },
    }),
  },
} satisfies Dictionary;

export default SiteContent;

