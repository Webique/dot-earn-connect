import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Rocket, Crown, Heart } from 'lucide-react';

const Vision = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="vision" className="section-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-gradient">
            {t('vision.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Vision Content */}
          <div className={`${dir === 'rtl' ? 'lg:order-2' : 'lg:order-1'}`}>
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground mb-6 sm:mb-8">
              {t('vision.content')}
            </p>

            {/* Vision Pillars */}
            <div className="space-y-4 sm:space-y-6">
              <div className={`flex items-start space-x-3 sm:space-x-4 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className={`flex-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  <h3 className="font-bold text-base sm:text-lg mb-1">
                    {dir === 'rtl' ? 'التوسع العالمي' : 'Global Expansion'}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {dir === 'rtl' ? 'من السعودية إلى العالم العربي ثم العالمية' : 'From Saudi Arabia to the Arab world, then global'}
                  </p>
                </div>
              </div>

              <div className={`flex items-start space-x-3 sm:space-x-4 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                  <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className={`flex-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  <h3 className="font-bold text-base sm:text-lg mb-1">
                    {dir === 'rtl' ? 'القيادة والريادة' : 'Leadership & Innovation'}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {dir === 'rtl' ? 'أن نكون الوجهة الأولى للتسويق التشاركي' : 'Becoming the #1 destination for participatory marketing'}
                  </p>
                </div>
              </div>

              <div className={`flex items-start space-x-3 sm:space-x-4 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className={`flex-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  <h3 className="font-bold text-base sm:text-lg mb-1">
                    {dir === 'rtl' ? 'العدالة والشمولية' : 'Fairness & Inclusion'}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {dir === 'rtl' ? 'النجاح والشهرة والدخل حق للجميع' : 'Success, fame, and income are rights for everyone'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Visualization */}
          <div className={`${dir === 'rtl' ? 'lg:order-1' : 'lg:order-2'} flex justify-center lg:justify-${dir === 'rtl' ? 'start' : 'end'}`}>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Central Vision Circle */}
              <div className="relative z-10 w-full h-full bg-gradient-accent rounded-full flex items-center justify-center shadow-glow">
                <div className="text-center text-white">
                  <Rocket className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-2 sm:mb-4" />
                  <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">DOT</h3>
                  <p className="text-xs sm:text-sm opacity-90">
                    {dir === 'rtl' ? 'رؤية 2030+' : 'Vision 2030+'}
                  </p>
                </div>
              </div>

              {/* Orbiting Goals */}
              <div className="absolute inset-0">
                {/* Arab World */}
                <div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-elegant">
                    {dir === 'rtl' ? '🌍 العالم العربي' : '🌍 Arab World'}
                  </div>
                </div>

                {/* Global */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-elegant">
                    {dir === 'rtl' ? '🚀 عالميًا' : '🚀 Globally'}
                  </div>
                </div>

                {/* 1M Users */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                  dir === 'rtl' ? 'left-0 -translate-x-1 sm:-translate-x-2' : 'right-0 translate-x-1 sm:translate-x-2'
                }`}>
                  <div className="bg-secondary text-primary px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-elegant">
                    {dir === 'rtl' ? '👥 مليون مستخدم' : '👥 1M Users'}
                  </div>
                </div>

                {/* Digital Hub */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                  dir === 'rtl' ? 'right-0 translate-x-1 sm:translate-x-2' : 'left-0 -translate-x-1 sm:-translate-x-2'
                }`}>
                  <div className="bg-dot-warm-rose text-primary px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-elegant">
                    {dir === 'rtl' ? '💻 مركز رقمي' : '💻 Digital Hub'}
                  </div>
                </div>
              </div>

              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-dot-vivid-purple/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-dot-warm-rose/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;