import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t, dir } = useLanguage();

  const handleContactUs = () => {
    window.open('tel:+966551161726', '_self');
  };

  return (
    <section id="home" className="section-hero min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-0">
      {/* Dot Matrix Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-dot-vivid-purple/20 via-transparent to-dot-warm-rose/20"></div>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
        <div className="fade-in py-8 sm:py-16 lg:py-20 flex flex-col justify-center min-h-[calc(100vh-5rem)] sm:min-h-screen">

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight">
            {t('hero.headline')}
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
            {t('hero.subline')}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center mb-10 sm:mb-12 ${
            dir === 'rtl' ? 'sm:flex-row-reverse' : ''
          }`}>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-primary hover:text-white border-2 border-white hover:border-primary text-base sm:text-lg px-8 sm:px-8 py-4 sm:py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
              onClick={handleContactUs}
            >
              {dir === 'rtl' ? 'تواصل معنا' : 'Contact Us'}
              <ArrowRight className={`h-4 w-4 sm:h-5 sm:w-5 ${dir === 'rtl' ? 'rotate-180 mr-2' : 'ml-2'}`} />
            </Button>
          </div>

          {/* Stats/Numbers */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 mx-auto">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-white/70 text-xs sm:text-sm px-2">
                {dir === 'rtl' ? 'مستخدم منتظر' : 'Users Waiting'}
              </div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 mx-auto">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-white/70 text-xs sm:text-sm px-2">
                {dir === 'rtl' ? 'شركة مهتمة' : 'Interested Companies'}
              </div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 mx-auto">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-white/70 text-xs sm:text-sm px-2">
                {dir === 'rtl' ? 'مبدع محتوى' : 'Content Creators'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-dot-vivid-purple/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-dot-warm-rose/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;