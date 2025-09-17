import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { currentLanguage, setLanguage, t } = useLanguage();

  const navItems = [
    { id: '/', label: t('home') },
    { id: '/skills', label: t('skills') },
    { id: '/experience', label: t('experience') },
    { id: '/about', label: t('about') },
    { id: '/achievements', label: t('achievements') },
  ];

  const handleNavClick = () => {
    setMenuOpen(false); // Close menu on mobile after clicking
  };

  return (
    <nav className=" fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold hero-text hover:opacity-80 transition-opacity">
              Arulkumar
            </Link>
            
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 p-2 hover:bg-secondary/50 rounded-full transition-all duration-300 border border-border/50">
                <Avatar className="w-8 h-8 ring-2 ring-primary/20">
                  <AvatarFallback className="text-lg bg-gradient-to-br from-primary/20 to-accent/20 text-foreground font-medium">
                    {currentLanguage.flag}
                  </AvatarFallback>
                </Avatar>
                <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-56 bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-xl p-2"
                sideOffset={8}
              >
                <div className="px-3 py-2 text-xs font-medium text-muted-foreground border-b border-border/50 mb-1">
                  Select Language
                </div>
                {currentLanguage.code === 'en' ? (
                  // Show all languages except current one
                  <>
                    {[
                      { code: 'ar', name: 'العربية', flag: '🇸🇦', nativeName: 'Arabic' },
                      { code: 'de', name: 'Deutsch', flag: '🇩🇪', nativeName: 'German' },
                      { code: 'fr', name: 'Français', flag: '🇫🇷', nativeName: 'French' },
                      { code: 'es', name: 'Español', flag: '🇪🇸', nativeName: 'Spanish' },
                      { code: 'it', name: 'Italiano', flag: '🇮🇹', nativeName: 'Italian' },
                      { code: 'ru', name: 'Русский', flag: '🇷🇺', nativeName: 'Russian' },
                      { code: 'pt', name: 'Português', flag: '🇵🇹', nativeName: 'Portuguese' },
                      { code: 'nl', name: 'Nederlands', flag: '🇳🇱', nativeName: 'Dutch' },
                      { code: 'mt', name: 'Malti', flag: '🇲🇹', nativeName: 'Maltese' },
                      { code: 'sv', name: 'Svenska', flag: '🇸🇪', nativeName: 'Swedish' },
                      { code: 'da', name: 'Dansk', flag: '🇩🇰', nativeName: 'Danish' },
                      { code: 'no', name: 'Norsk', flag: '🇳🇴', nativeName: 'Norwegian' },
                      { code: 'fi', name: 'Suomi', flag: '🇫🇮', nativeName: 'Finnish' },
                    ].map((language) => (
                      <DropdownMenuItem
                        key={language.code}
                        onClick={() => setLanguage(language.code)}
                        className="flex items-center space-x-3 cursor-pointer hover:bg-secondary/50 rounded-lg px-3 py-2 transition-colors duration-200"
                      >
                        <Avatar className="w-6 h-6 ring-1 ring-border">
                          <AvatarFallback className="text-sm bg-gradient-to-br from-primary/10 to-accent/10">
                            {language.flag}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{language.name}</span>
                          <span className="text-xs text-muted-foreground">{language.nativeName}</span>
                        </div>
                      </DropdownMenuItem>
                    ))
                    }
                  </>
                ) : (
                  // Show English and current language
                  <>
                    <DropdownMenuItem
                      onClick={() => setLanguage('en')}
                      className="flex items-center space-x-3 cursor-pointer hover:bg-secondary/50 rounded-lg px-3 py-2 transition-colors duration-200"
                    >
                      <Avatar className="w-6 h-6 ring-1 ring-border">
                        <AvatarFallback className="text-sm bg-gradient-to-br from-primary/10 to-accent/10">
                          🇺🇸
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">English</span>
                        <span className="text-xs text-muted-foreground">English</span>
                      </div>
                    </DropdownMenuItem>
                    <div className="border-t border-border/30 my-1" />
                    <div className="px-3 py-1 text-xs text-primary font-medium">
                      Current: {currentLanguage.name}
                    </div>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop & Mobile nav items */}
          <div
            id="nav-items"
            className={`${
              menuOpen ? 'flex flex-col space-y-2 absolute top-full left-0 w-full glass-nav border-t border-border z-40 p-4 md:static md:flex md:flex-row md:space-x-8 md:bg-transparent md:border-0 md:space-y-0 md:p-0' 
              : 'hidden md:flex md:space-x-8'
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                onClick={handleNavClick}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary px-4 py-2 md:px-0 md:py-0 ${
                  location.pathname === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Hamburger menu button */}
          <div className="md:hidden">
            <button
              className="p-2 hover:bg-secondary/50 rounded-lg transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div
                  className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                    menuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                    menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
