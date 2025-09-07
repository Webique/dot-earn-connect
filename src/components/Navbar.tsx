import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t, dir } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);
      // Hide on scroll down, show on scroll up
      if (currentY > lastScrollY && currentY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.why-dot', href: '#why-dot' },
    { key: 'nav.the-dot', href: '#the-dot' },
    { key: 'nav.problem', href: '#problem' },
    { key: 'nav.solution', href: '#solution' },
    { key: 'nav.vision', href: '#vision' },
    { key: 'nav.roadmap', href: '#roadmap' },
    { key: 'nav.features', href: '#features' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform bg-background/95 backdrop-blur-md border-b border-secondary/20 shadow-elegant ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="block hover:opacity-90 transition-opacity duration-200"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              <img src="/logo.png" alt="dot logo" className="h-8 sm:h-9 md:h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`flex items-center space-x-10 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className={`flex items-center space-x-6 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`flex items-center space-x-2 ${dir === 'rtl' ? 'space-x-reverse' : ''} hover:bg-secondary/20`}
            >
              <Globe className="h-4 w-4" />
              <span>{t('nav.language-toggle')}</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute left-0 right-0 top-20 bg-background/95 backdrop-blur-md border-t border-secondary/20 shadow-elegant transition-all duration-300 ease-in-out transform ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                className={`block text-foreground hover:text-primary transition-all duration-200 font-medium py-3 px-2 rounded-lg hover:bg-secondary/20 transform ${
                  isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;