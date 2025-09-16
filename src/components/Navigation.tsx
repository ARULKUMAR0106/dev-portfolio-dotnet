import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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
          <Link to="/" className="text-xl font-bold hero-text hover:opacity-80 transition-opacity">
            Arulkumar
          </Link>

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
