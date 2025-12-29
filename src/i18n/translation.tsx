import { Language } from "./LanguageContext";

export const isRTL = (lang: Language) => lang === "ar";

export const translations: Record<Language, Record<string, string>> = {
  en: { /* ... */ },
  ar: { /* ... */ },
  ti: { /* ... */ },
};

export type Language = 'en' | 'ar' | 'ti';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      aboutUs: 'About Us',
      urbanHeritage: 'Urban Heritage of Massawa',
      activities: 'Our Activities',
      contact: 'Contact Us',
    },
    hero: {
      title: 'Welcome to AKAN',
      subtitle: 'Massawa Urban Heritage',
      description: 'Discover the Rich History of Eritrea\'s Coastal Gem',
    },
    geography: {
      title: 'Geographical Overview of Massawa',
      content: 'Massawa is the second most important city and the main port in Eritrea, located on the coast of the Red Sea, one of the most important international trade lines. It was an important historical port for several centuries. The city is located on the southwestern coast of the Red Sea at the northern end of the Gulf of Zula and is followed by a group of islands known as the Dahlak Archipelago.',
    },
    heritage: {
      title: 'Massawa Urban Heritage: Discover the Rich History of Eritrea\'s Coastal Gem',
      content1: 'The city is considered a mosaic carrying in its folds a mixture of residents and dialects, like all the ports in the world.',
      content2: 'The immigrants and merchants coming from all countries settled in it, mixed with its residents, and set up their businesses. Everyone lived in it like an open museum that differed from the rest of their surroundings.',
    },
    timeline: {
      title: 'The Timeline of Massawa',
      events: [
        { year: '615', description: 'The migration of Companions of the Prophet to the land of Abyssinia via the port of Massawa' },
        { year: '700', description: 'Islamic-style emirates in East Africa' },
        { year: '1500', description: 'The era of marine discovery & the Portuguese occupation' },
        { year: '1557', description: 'The Islamic Ottoman Eyalet of Abyssinia' },
        { year: '1865', description: 'The Egyptian Khedive Administration' },
        { year: '1885', description: 'Italian colonial period begins' },
        { year: '1941', description: 'British administration period' },
        { year: '1952', description: 'Federation with Ethiopia' },
        { year: '1991', description: 'Liberation and independence of Eritrea' },
      ],
    },
    footer: {
      rights: 'All rights reserved',
      organization: 'AKAN - Massawa Urban Heritage Foundation',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      aboutUs: 'من نحن',
      urbanHeritage: 'التراث العمراني لمصوع',
      activities: 'أنشطتنا',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'مرحباً بكم في أكان',
      subtitle: 'التراث العمراني لمصوع',
      description: 'اكتشف التاريخ الغني لجوهرة إريتريا الساحلية',
    },
    geography: {
      title: 'نظرة جغرافية عامة على مصوع',
      content: 'مصوع هي ثاني أهم مدينة والميناء الرئيسي في إريتريا، تقع على ساحل البحر الأحمر، أحد أهم خطوط التجارة الدولية. كانت ميناءً تاريخياً مهماً لعدة قرون. تقع المدينة على الساحل الجنوبي الغربي للبحر الأحمر عند الطرف الشمالي لخليج زولا وتتبعها مجموعة جزر تعرف بأرخبيل دهلك.',
    },
    heritage: {
      title: 'التراث العمراني لمصوع: اكتشف التاريخ الغني لجوهرة إريتريا الساحلية',
      content1: 'تعتبر المدينة فسيفساء تحمل في طياتها مزيجاً من السكان واللهجات، مثل جميع الموانئ في العالم.',
      content2: 'استقر فيها المهاجرون والتجار القادمون من جميع البلدان، واختلطوا بسكانها، وأقاموا أعمالهم. عاش الجميع فيها كمتحف مفتوح يختلف عن بقية محيطهم.',
    },
    timeline: {
      title: 'التسلسل الزمني لمصوع',
      events: [
        { year: '615', description: 'هجرة صحابة النبي إلى أرض الحبشة عبر ميناء مصوع' },
        { year: '700', description: 'الإمارات الإسلامية في شرق أفريقيا' },
        { year: '1500', description: 'عصر الاكتشافات البحرية والاحتلال البرتغالي' },
        { year: '1557', description: 'إيالة الحبشة العثمانية الإسلامية' },
        { year: '1865', description: 'إدارة الخديوية المصرية' },
        { year: '1885', description: 'بداية الفترة الاستعمارية الإيطالية' },
        { year: '1941', description: 'فترة الإدارة البريطانية' },
        { year: '1952', description: 'الاتحاد الفيدرالي مع إثيوبيا' },
        { year: '1991', description: 'تحرير واستقلال إريتريا' },
      ],
    },
    footer: {
      rights: 'جميع الحقوق محفوظة',
      organization: 'أكان - مؤسسة التراث العمراني لمصوع',
    },
  },
  ti: {
    nav: {
      home: 'መእተዊ',
      aboutUs: 'ብዛዕባና',
      urbanHeritage: 'ከተማዊ ውርሻ ምጽዋዕ',
      activities: 'ንጥፈታትና',
      contact: 'ርኸቡና',
    },
    hero: {
      title: 'ናብ ኣካን እንቋዕ ብደሓን መጻእኩም',
      subtitle: 'ከተማዊ ውርሻ ምጽዋዕ',
      description: 'ሃብታም ታሪኽ ናይ ኤርትራ ገማግም ባሕሪ ኣኽብሩ',
    },
    geography: {
      title: 'ጂኦግራፊያዊ ድሕረ ባይታ ምጽዋዕ',
      content: 'ምጽዋዕ ካብተን ኣገደስቲ ኸተማታት ኤርትራን ቀንዲ ወደባን እያ። ኣብ ገማግም ቀይሕ ባሕሪ ትርከብ። ካብቶም ኣገደስቲ ኣህጉራዊ መስመራት ንግዲ ሓደ እዩ። ንብዙሕ ዘመናት ታሪኻዊ ወደብ ኰይና ጸኒሓ። እታ ኸተማ ኣብ ደቡብ ምዕራብ ገማግም ቀይሕ ባሕሪ ኣብ ሰሜናዊ ጫፍ ባሕረ ሰላጤ ዙላ ትርከብ።',
    },
    heritage: {
      title: 'ከተማዊ ውርሻ ምጽዋዕ: ሃብታም ታሪኽ ናይ ገማግም ባሕሪ ኤርትራ ኣኽብሩ',
      content1: 'እታ ኸተማ ከም ኩሎም ወደባት ዓለም ዝተፈላለዩ ነበርትን ዘረባታትን ዝሓዘለት ሞዛይክ እያ ትቑጸር።',
      content2: 'ካብ ኩሎም ሃገራት ዝመጹ ስደተኛታትን ነጋዶን ኣብኣ ሰፊሮም፣ ምስ ነበርታ ተሓዋዊሶም፣ ንግዶም ጀሚሮም። ኩሎም ኣብኣ ከም ክፉት ሙዚየም ይነብሩ ነይሮም።',
    },
    timeline: {
      title: 'ታሪኻዊ ዓመታት ምጽዋዕ',
      events: [
        { year: '615', description: 'ስደት ሰሓባ ናብ ምድሪ ሓበሻ ብመገዲ ወደብ ምጽዋዕ' },
        { year: '700', description: 'ኢስላማዊ ኢማራታት ኣብ ምብራቕ ኣፍሪቃ' },
        { year: '1500', description: 'ዘመን ባሕራዊ ምርምርን ፖርቱጋላዊ መግዛእትን' },
        { year: '1557', description: 'ኢስላማዊ ዑስማናዊ ኢያለት ሓበሻ' },
        { year: '1865', description: 'ምምሕዳር ግብጻዊ ኸዲቭ' },
        { year: '1885', description: 'ጅማሮ ኢጣልያዊ መግዛእቲ' },
        { year: '1941', description: 'እዋን ብሪጣንያዊ ምምሕዳር' },
        { year: '1952', description: 'ፈደረሽን ምስ ኢትዮጵያ' },
        { year: '1991', description: 'ሓርነትን ናጽነትን ኤርትራ' },
      ],
    },
    footer: {
      rights: 'ኩሉ መሰላት ዝተሓለወ',
      organization: 'ኣካን - ትካል ከተማዊ ውርሻ ምጽዋዕ',
    },
  },
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  ar: 'العربية',
  ti: 'ትግርኛ',
};

export const isRTL = (lang: Language): boolean => lang === 'ar';
