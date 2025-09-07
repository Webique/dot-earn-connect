import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, ArrowRight } from 'lucide-react';

const Footer = () => {
  const { t, dir, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
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

  return (
    <footer className="bg-dot-deep-plum text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Column 1: Brand & Purpose */}
            <div className={`${dir === 'rtl' ? 'lg:order-3' : 'lg:order-1'} space-y-6`}>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gradient">
                  {language === 'ar' ? 'دوت' : 'DOT'}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {t('footer.tagline')}
                </p>
              </div>
              
              {/* Social/Contact Info */}
              <div className="space-y-3">
                <div className={`flex items-center space-x-3 text-white/70 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <Globe className="h-5 w-5 text-dot-vivid-purple" />
                  <span>dot-platform.com</span>
                </div>
                <div className={`flex items-center space-x-3 text-white/70 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <span>📱</span>
                  <span>+966 55 116 1726</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className={`${dir === 'rtl' ? 'lg:order-2' : 'lg:order-2'}`}>
              <h4 className="text-xl font-semibold mb-6 text-dot-vivid-purple">
                {t('footer.links')}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className="text-white/70 hover:text-white hover:text-dot-vivid-purple transition-colors duration-200 py-1"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {t(link.key)}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: CTA */}
            <div className={`${dir === 'rtl' ? 'lg:order-1' : 'lg:order-3'} space-y-6`}>
              <h4 className="text-xl font-semibold text-dot-vivid-purple">
                {t('footer.cta')}
              </h4>
              
              <div className="space-y-4">
                <Button 
                  className="btn-primary w-full"
                  onClick={() => handleNavClick('#contact')}
                >
                  {t('contact.cta1')}
                  <ArrowRight className={`h-4 w-4 ${dir === 'rtl' ? 'rotate-180 mr-2' : 'ml-2'}`} />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-white/30 text-white hover:bg-white hover:text-dot-deep-plum"
                  onClick={() => handleNavClick('#contact')}
                >
                  {t('contact.cta2')}
                </Button>
              </div>

              {/* Newsletter Signup Preview */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-sm text-white/80 mb-2">
                  {dir === 'rtl' 
                    ? 'احصل على آخر التحديثات' 
                    : 'Get the latest updates'
                  }
                </p>
                <p className="text-xs text-white/60">
                  {dir === 'rtl'
                    ? 'انضم إلى أكثر من 1000 شخص ينتظرون إطلاق المنصة'
                    : 'Join 1000+ people waiting for the platform launch'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className={`flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 ${
            dir === 'rtl' ? 'md:flex-row-reverse' : ''
          }`}>
            <div className="text-white/60 text-sm">
              {t('footer.copyright')} {currentYear}
            </div>
            
            <div className={`flex items-center space-x-6 text-sm ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
              <a 
                href="#privacy" 
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                {t('footer.privacy')}
              </a>
              <span className="text-white/30">•</span>
              <a 
                href="#terms" 
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;