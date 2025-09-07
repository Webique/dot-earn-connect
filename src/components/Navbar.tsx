import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t, dir } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-secondary/20 shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-200"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              {language === 'ar' ? 'دوت' : 'DOT'}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`flex items-center space-x-8 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
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
          <div className={`flex items-center space-x-4 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
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

            {/* CTA Button */}
            <Button 
              className="btn-primary hidden sm:inline-flex"
              onClick={() => handleNavClick('#contact')}
            >
              {t('nav.join-waitlist')}
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
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-secondary/20 absolute left-0 right-0 top-16 shadow-elegant">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="pt-4 border-t border-secondary/20">
                <Button 
                  className="btn-primary w-full"
                  onClick={() => handleNavClick('#contact')}
                >
                  {t('nav.join-waitlist')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;