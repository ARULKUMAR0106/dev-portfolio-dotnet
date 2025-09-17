import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸', nativeName: 'English' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦', nativeName: 'العربية' },
  { code: 'de', name: 'German', flag: '🇩🇪', nativeName: 'Deutsch' },
  { code: 'fr', name: 'French', flag: '🇫🇷', nativeName: 'Français' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
  { code: 'it', name: 'Italian', flag: '🇮🇹', nativeName: 'Italiano' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺', nativeName: 'Русский' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹', nativeName: 'Português' },
  { code: 'nl', name: 'Dutch', flag: '🇳🇱', nativeName: 'Nederlands' },
  { code: 'mt', name: 'Maltese', flag: '🇲🇹', nativeName: 'Malti' },
  { code: 'sv', name: 'Swedish', flag: '🇸🇪', nativeName: 'Svenska' },
  { code: 'da', name: 'Danish', flag: '🇩🇰', nativeName: 'Dansk' },
  { code: 'no', name: 'Norwegian', flag: '🇳🇴', nativeName: 'Norsk' },
  { code: 'fi', name: 'Finnish', flag: '🇫🇮', nativeName: 'Suomi' },
  { code: 'is', name: 'Icelandic', flag: '🇮🇸', nativeName: 'Íslenska' },
  { code: 'cs', name: 'Czech', flag: '🇨🇿', nativeName: 'Čeština' },
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (languageCode: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    home: 'Home',
    skills: 'Skills',
    experience: 'Experience',
    about: 'About',
    achievements: 'Achievements',
    
    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Arulkumar',
    'hero.role': 'Software Developer',
    'hero.description': 'Passionate about creating innovative solutions with modern technologies. Experienced in .NET Core, C#, ASP.NET, and full-stack development.',
    'hero.downloadCV': 'Download CV',
    'hero.viewProjects': 'View Resume',
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technologies and tools I work with to build amazing applications',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.database': 'Database & Storage',
    'skills.tools': 'Development Tools',
    
    // Experience Section
    'experience.title': 'Professional Journey',
    'experience.subtitle': 'My career roadmap and professional experience',
    'experience.present': 'Present',
    'experience.months': 'months',
    'experience.years': 'years',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Get to know me better',
    'about.description': 'I am a passionate software developer with expertise in modern web technologies and enterprise applications.',
    'about.passion': 'My Passion',
    'about.passionDesc': 'I love creating efficient, scalable solutions that solve real-world problems.',
    'about.experience': 'Experience',
    'about.experienceDesc': 'Over 2+ years of professional experience in software development.',
    'about.learning': 'Continuous Learning',
    'about.learningDesc': 'Always exploring new technologies and improving my skills.',
    
    // Achievements Section
    'achievements.title': 'Achievements & Certifications',
    'achievements.subtitle': 'Professional milestones and recognitions',
    
    // Footer
    'footer.contact': 'Contact Information',
    'footer.quickLinks': 'Quick Links',
    'footer.followMe': 'Follow Me',
    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with React & TypeScript',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    skills: 'المهارات',
    experience: 'الخبرة',
    about: 'حولي',
    achievements: 'الإنجازات',
    
    // Hero Section
    'hero.greeting': 'مرحباً، أنا',
    'hero.name': 'أرولكومار',
    'hero.role': 'مطور برمجيات',
    'hero.description': 'شغوف بإنشاء حلول مبتكرة بالتقنيات الحديثة. خبرة في .NET Core و C# و ASP.NET والتطوير الشامل.',
    'hero.downloadCV': 'تحميل السيرة الذاتية',
    'hero.viewProjects': 'عرض السيرة الذاتية',
    
    // Skills Section
    'skills.title': 'المهارات التقنية',
    'skills.subtitle': 'التقنيات والأدوات التي أستخدمها لبناء تطبيقات رائعة',
    'skills.frontend': 'تطوير الواجهة الأمامية',
    'skills.backend': 'تطوير الخادم',
    'skills.database': 'قواعد البيانات والتخزين',
    'skills.tools': 'أدوات التطوير',
    
    // Experience Section
    'experience.title': 'الرحلة المهنية',
    'experience.subtitle': 'خريطة طريق مسيرتي المهنية والخبرة المهنية',
    'experience.present': 'الحالي',
    'experience.months': 'أشهر',
    'experience.years': 'سنوات',
    
    // About Section
    'about.title': 'حولي',
    'about.subtitle': 'تعرف عليَّ أكثر',
    'about.description': 'أنا مطور برمجيات متحمس مع خبرة في تقنيات الويب الحديثة وتطبيقات المؤسسات.',
    'about.passion': 'شغفي',
    'about.passionDesc': 'أحب إنشاء حلول فعالة وقابلة للتطوير تحل مشاكل العالم الحقيقي.',
    'about.experience': 'الخبرة',
    'about.experienceDesc': 'أكثر من سنتين من الخبرة المهنية في تطوير البرمجيات.',
    'about.learning': 'التعلم المستمر',
    'about.learningDesc': 'أستكشف دائماً تقنيات جديدة وأحسن مهاراتي.',
    
    // Achievements Section
    'achievements.title': 'الإنجازات والشهادات',
    'achievements.subtitle': 'المعالم المهنية والاعترافات',
    
    // Footer
    'footer.contact': 'معلومات الاتصال',
    'footer.quickLinks': 'روابط سريعة',
    'footer.followMe': 'تابعني',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.builtWith': 'مبني بـ React و TypeScript',
  },
  de: {
    // Navigation
    home: 'Startseite',
    skills: 'Fähigkeiten',
    experience: 'Erfahrung',
    about: 'Über mich',
    achievements: 'Erfolge',
    
    // Hero Section
    'hero.greeting': 'Hallo, ich bin',
    'hero.name': 'Arulkumar',
    'hero.role': 'Software-Entwickler',
    'hero.description': 'Leidenschaftlich dabei, innovative Lösungen mit modernen Technologien zu schaffen. Erfahrung in .NET Core, C#, ASP.NET und Full-Stack-Entwicklung.',
    'hero.downloadCV': 'Lebenslauf herunterladen',
    'hero.viewProjects': 'Lebenslauf anzeigen',
    
    // Skills Section
    'skills.title': 'Technische Fähigkeiten',
    'skills.subtitle': 'Technologien und Tools, die ich verwende, um erstaunliche Anwendungen zu erstellen',
    'skills.frontend': 'Frontend-Entwicklung',
    'skills.backend': 'Backend-Entwicklung',
    'skills.database': 'Datenbank & Speicherung',
    'skills.tools': 'Entwicklungstools',
    
    // Experience Section
    'experience.title': 'Beruflicher Werdegang',
    'experience.subtitle': 'Meine Karriere-Roadmap und berufliche Erfahrung',
    'experience.present': 'Gegenwart',
    'experience.months': 'Monate',
    'experience.years': 'Jahre',
    
    // About Section
    'about.title': 'Über mich',
    'about.subtitle': 'Lernen Sie mich besser kennen',
    'about.description': 'Ich bin ein leidenschaftlicher Software-Entwickler mit Expertise in modernen Web-Technologien und Unternehmensanwendungen.',
    'about.passion': 'Meine Leidenschaft',
    'about.passionDesc': 'Ich liebe es, effiziente, skalierbare Lösungen zu schaffen, die reale Probleme lösen.',
    'about.experience': 'Erfahrung',
    'about.experienceDesc': 'Über 2 Jahre professionelle Erfahrung in der Software-Entwicklung.',
    'about.learning': 'Kontinuierliches Lernen',
    'about.learningDesc': 'Erkunde immer neue Technologien und verbessere meine Fähigkeiten.',
    
    // Achievements Section
    'achievements.title': 'Erfolge und Zertifizierungen',
    'achievements.subtitle': 'Berufliche Meilensteine und Anerkennungen',
    
    // Footer
    'footer.contact': 'Kontaktinformationen',
    'footer.quickLinks': 'Schnelllinks',
    'footer.followMe': 'Folgen Sie mir',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.builtWith': 'Erstellt mit React & TypeScript',
  },
  // Add other languages with basic translations...
  fr: {
    home: 'Accueil',
    skills: 'Compétences',
    experience: 'Expérience',
    about: 'À propos',
    achievements: 'Réalisations',
    'hero.greeting': 'Salut, je suis',
    'hero.name': 'Arulkumar',
    'hero.role': 'Développeur logiciel',
    'hero.description': 'Passionné par la création de solutions innovantes avec les technologies modernes.',
    'hero.downloadCV': 'Télécharger CV',
    'hero.viewProjects': 'Voir CV',
    'footer.contact': 'Informations de contact',
    'footer.quickLinks': 'Liens rapides',
    'footer.followMe': 'Suivez-moi',
    'footer.rights': 'Tous droits réservés.',
    'footer.builtWith': 'Construit avec React & TypeScript',
  },
  es: {
    home: 'Inicio',
    skills: 'Habilidades',
    experience: 'Experiencia',
    about: 'Acerca de',
    achievements: 'Logros',
    'hero.greeting': 'Hola, soy',
    'hero.name': 'Arulkumar',
    'hero.role': 'Desarrollador de software',
    'hero.description': 'Apasionado por crear soluciones innovadoras con tecnologías modernas.',
    'hero.downloadCV': 'Descargar CV',
    'hero.viewProjects': 'Ver CV',
    'footer.contact': 'Información de contacto',
    'footer.quickLinks': 'Enlaces rápidos',
    'footer.followMe': 'Sígueme',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.builtWith': 'Construido con React & TypeScript',
  },
  // Add minimal translations for other languages
  it: {
    home: 'Home',
    skills: 'Competenze',
    experience: 'Esperienza',
    about: 'Chi sono',
    achievements: 'Risultati',
    'hero.greeting': 'Ciao, sono',
    'hero.name': 'Arulkumar',
    'hero.role': 'Sviluppatore software',
    'hero.description': 'Appassionato di creare soluzioni innovative con tecnologie moderne.',
    'hero.downloadCV': 'Scarica CV',
    'hero.viewProjects': 'Visualizza CV',
    'footer.contact': 'Informazioni di contatto',
    'footer.quickLinks': 'Link rapidi',
    'footer.followMe': 'Seguimi',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.builtWith': 'Costruito con React & TypeScript',
  },
  ru: {
    home: 'Главная',
    skills: 'Навыки',
    experience: 'Опыт',
    about: 'Обо мне',
    achievements: 'Достижения',
    'hero.greeting': 'Привет, я',
    'hero.name': 'Арулкумар',
    'hero.role': 'Разработчик ПО',
    'hero.description': 'Увлечен созданием инновационных решений с современными технологиями.',
    'hero.downloadCV': 'Скачать резюме',
    'hero.viewProjects': 'Просмотр резюме',
    'footer.contact': 'Контактная информация',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.followMe': 'Подписывайтесь',
    'footer.rights': 'Все права защищены.',
    'footer.builtWith': 'Создано с React & TypeScript',
  },
  // Add basic translations for new languages
  is: {
    home: 'Heim',
    skills: 'Hæfni',
    experience: 'Reynsla',
    about: 'Um mig',
    achievements: 'Afrek',
    'hero.greeting': 'Hæ, ég er',
    'hero.name': 'Arulkumar',
    'hero.role': 'Hugbúnaðarframleiðandi',
    'hero.description': 'Ástríðufullur við að búa til nýsköpunarlausnir með nútímatækni.',
    'hero.downloadCV': 'Sækja ferilskrá',
    'hero.viewProjects': 'Skoða ferilskrá',
    'footer.contact': 'Tengiliðaupplýsingar',
    'footer.quickLinks': 'Flýtileiðir',
    'footer.followMe': 'Fylgdu mér',
    'footer.rights': 'Öll réttindi áskilin.',
    'footer.builtWith': 'Byggt með React & TypeScript',
  },
  cs: {
    home: 'Domů',
    skills: 'Dovednosti',
    experience: 'Zkušenosti',
    about: 'O mně',
    achievements: 'Úspěchy',
    'hero.greeting': 'Ahoj, jsem',
    'hero.name': 'Arulkumar',
    'hero.role': 'Vývojář softwaru',
    'hero.description': 'Vášnivě vytvářím inovativní řešení s moderními technologiemi.',
    'hero.downloadCV': 'Stáhnout CV',
    'hero.viewProjects': 'Zobrazit CV',
    'footer.contact': 'Kontaktní informace',
    'footer.quickLinks': 'Rychlé odkazy',
    'footer.followMe': 'Sledujte mě',
    'footer.rights': 'Všechna práva vyhrazena.',
    'footer.builtWith': 'Postaveno s React & TypeScript',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
      const found = languages.find(lang => lang.code === savedLanguage);
      if (found) {
        setCurrentLanguage(found);
      }
    }
  }, []);

  const setLanguage = (languageCode: string) => {
    const newLanguage = languages.find(lang => lang.code === languageCode);
    if (newLanguage) {
      setCurrentLanguage(newLanguage);
      localStorage.setItem('preferred-language', languageCode);
      
      // Set document direction for RTL languages
      document.documentElement.dir = languageCode === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = languageCode;
    }
  };

  const t = (key: string): string => {
    const languageTranslations = translations[currentLanguage.code];
    return languageTranslations?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};