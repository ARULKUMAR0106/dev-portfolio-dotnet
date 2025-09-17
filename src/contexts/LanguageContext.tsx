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
    'hero.role': 'Software Developer',
    'hero.description': 'Passionate about creating innovative solutions with modern technologies',
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technologies I work with',
    
    // Experience Section
    'experience.title': 'Professional Journey',
    'experience.subtitle': 'My career roadmap',
    'experience.present': 'Present',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Get to know me better',
    
    // Achievements Section
    'achievements.title': 'Achievements',
    'achievements.subtitle': 'Milestones and recognitions',
    
    // Footer
    'footer.contact': 'Contact Information',
    'footer.quickLinks': 'Quick Links',
    'footer.followMe': 'Follow Me',
    'footer.rights': 'All rights reserved.',
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
    'hero.role': 'مطور برمجيات',
    'hero.description': 'شغوف بإنشاء حلول مبتكرة بالتقنيات الحديثة',
    
    // Skills Section
    'skills.title': 'المهارات التقنية',
    'skills.subtitle': 'التقنيات التي أعمل بها',
    
    // Experience Section
    'experience.title': 'الرحلة المهنية',
    'experience.subtitle': 'خريطة طريق مسيرتي المهنية',
    'experience.present': 'الحالي',
    
    // About Section
    'about.title': 'حولي',
    'about.subtitle': 'تعرف عليَّ أكثر',
    
    // Achievements Section
    'achievements.title': 'الإنجازات',
    'achievements.subtitle': 'المعالم والاعترافات',
    
    // Footer
    'footer.contact': 'معلومات الاتصال',
    'footer.quickLinks': 'روابط سريعة',
    'footer.followMe': 'تابعني',
    'footer.rights': 'جميع الحقوق محفوظة.',
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
    'hero.role': 'Software-Entwickler',
    'hero.description': 'Leidenschaftlich dabei, innovative Lösungen mit modernen Technologien zu schaffen',
    
    // Skills Section
    'skills.title': 'Technische Fähigkeiten',
    'skills.subtitle': 'Technologien, mit denen ich arbeite',
    
    // Experience Section
    'experience.title': 'Beruflicher Werdegang',
    'experience.subtitle': 'Meine Karriere-Roadmap',
    'experience.present': 'Gegenwart',
    
    // About Section
    'about.title': 'Über mich',
    'about.subtitle': 'Lernen Sie mich besser kennen',
    
    // Achievements Section
    'achievements.title': 'Erfolge',
    'achievements.subtitle': 'Meilensteine und Anerkennungen',
    
    // Footer
    'footer.contact': 'Kontaktinformationen',
    'footer.quickLinks': 'Schnelllinks',
    'footer.followMe': 'Folgen Sie mir',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    skills: 'Compétences',
    experience: 'Expérience',
    about: 'À propos',
    achievements: 'Réalisations',
    
    // Hero Section
    'hero.greeting': 'Salut, je suis',
    'hero.role': 'Développeur logiciel',
    'hero.description': 'Passionné par la création de solutions innovantes avec les technologies modernes',
    
    // Skills Section
    'skills.title': 'Compétences techniques',
    'skills.subtitle': 'Technologies avec lesquelles je travaille',
    
    // Experience Section
    'experience.title': 'Parcours professionnel',
    'experience.subtitle': 'Ma feuille de route de carrière',
    'experience.present': 'Présent',
    
    // About Section
    'about.title': 'À propos de moi',
    'about.subtitle': 'Apprenez à mieux me connaître',
    
    // Achievements Section
    'achievements.title': 'Réalisations',
    'achievements.subtitle': 'Étapes importantes et reconnaissances',
    
    // Footer
    'footer.contact': 'Informations de contact',
    'footer.quickLinks': 'Liens rapides',
    'footer.followMe': 'Suivez-moi',
    'footer.rights': 'Tous droits réservés.',
  },
  es: {
    // Navigation
    home: 'Inicio',
    skills: 'Habilidades',
    experience: 'Experiencia',
    about: 'Acerca de',
    achievements: 'Logros',
    
    // Hero Section
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Desarrollador de software',
    'hero.description': 'Apasionado por crear soluciones innovadoras con tecnologías modernas',
    
    // Skills Section
    'skills.title': 'Habilidades técnicas',
    'skills.subtitle': 'Tecnologías con las que trabajo',
    
    // Experience Section
    'experience.title': 'Trayectoria profesional',
    'experience.subtitle': 'Mi hoja de ruta profesional',
    'experience.present': 'Presente',
    
    // About Section
    'about.title': 'Acerca de mí',
    'about.subtitle': 'Conóceme mejor',
    
    // Achievements Section
    'achievements.title': 'Logros',
    'achievements.subtitle': 'Hitos y reconocimientos',
    
    // Footer
    'footer.contact': 'Información de contacto',
    'footer.quickLinks': 'Enlaces rápidos',
    'footer.followMe': 'Sígueme',
    'footer.rights': 'Todos los derechos reservados.',
  },
  it: {
    // Navigation
    home: 'Home',
    skills: 'Competenze',
    experience: 'Esperienza',
    about: 'Chi sono',
    achievements: 'Risultati',
    
    // Hero Section
    'hero.greeting': 'Ciao, sono',
    'hero.role': 'Sviluppatore software',
    'hero.description': 'Appassionato di creare soluzioni innovative con tecnologie moderne',
    
    // Skills Section
    'skills.title': 'Competenze tecniche',
    'skills.subtitle': 'Tecnologie con cui lavoro',
    
    // Experience Section
    'experience.title': 'Percorso professionale',
    'experience.subtitle': 'La mia roadmap di carriera',
    'experience.present': 'Presente',
    
    // About Section
    'about.title': 'Chi sono',
    'about.subtitle': 'Conoscimi meglio',
    
    // Achievements Section
    'achievements.title': 'Risultati',
    'achievements.subtitle': 'Traguardi e riconoscimenti',
    
    // Footer
    'footer.contact': 'Informazioni di contatto',
    'footer.quickLinks': 'Link rapidi',
    'footer.followMe': 'Seguimi',
    'footer.rights': 'Tutti i diritti riservati.',
  },
  ru: {
    // Navigation
    home: 'Главная',
    skills: 'Навыки',
    experience: 'Опыт',
    about: 'Обо мне',
    achievements: 'Достижения',
    
    // Hero Section
    'hero.greeting': 'Привет, я',
    'hero.role': 'Разработчик ПО',
    'hero.description': 'Увлечен созданием инновационных решений с современными технологиями',
    
    // Skills Section
    'skills.title': 'Технические навыки',
    'skills.subtitle': 'Технологии, с которыми я работаю',
    
    // Experience Section
    'experience.title': 'Профессиональный путь',
    'experience.subtitle': 'Моя карьерная дорожная карта',
    'experience.present': 'Настоящее время',
    
    // About Section
    'about.title': 'Обо мне',
    'about.subtitle': 'Узнайте меня лучше',
    
    // Achievements Section
    'achievements.title': 'Достижения',
    'achievements.subtitle': 'Вехи и признания',
    
    // Footer
    'footer.contact': 'Контактная информация',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.followMe': 'Подписывайтесь',
    'footer.rights': 'Все права защищены.',
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