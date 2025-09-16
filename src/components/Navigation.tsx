import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const location = useLocation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'mt', name: 'Malti', flag: '🇲🇹' },
    { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
    { code: 'da', name: 'Dansk', flag: '🇩🇰' },
    { code: 'no', name: 'Norsk', flag: '🇳🇴' },
    { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
  ];

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage) || languages[0];

  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/skills', label: 'Skills' },
    { id: '/experience', label: 'Experience' },
    { id: '/about', label: 'About' },
    { id: '/achievements', label: 'Achievements' },
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
              <DropdownMenuTrigger className="flex items-center space-x-2 p-2 hover:bg-secondary/50 rounded-lg transition-colors">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="text-xs bg-transparent">
                    {currentLanguage.flag}
                  </AvatarFallback>
                </Avatar>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-background/95 backdrop-blur-lg border border-border/50">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setSelectedLanguage(language.code)}
                    className="flex items-center space-x-3 cursor-pointer hover:bg-secondary/50"
                  >
                    <Avatar className="w-5 h-5">
                      <AvatarFallback className="text-xs bg-transparent">
                        {language.flag}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{language.name}</span>
                  </DropdownMenuItem>
                ))}
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
