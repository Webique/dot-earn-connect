import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Users, TrendingUp } from 'lucide-react';

const WhyDot = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="why-dot" className="section-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-gradient">
            {t('why-dot.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${dir === 'rtl' ? 'lg:order-2' : 'lg:order-1'} slide-right`}>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              {t('why-dot.content')}
            </p>

            {/* Key Points */}
            <div className="space-y-6">
              <div className={`flex items-start space-x-4 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {dir === 'rtl' ? 'استهداف دقيق' : 'Precise Targeting'}
                  </h3>
                  <p className="text-muted-foreground">
                    {dir === 'rtl' 
                      ? 'وصول مباشر للجمهور المهتم بما تقدمه، بدون إهدار للميزانية أو الوقت.'
                      : 'Direct reach to audiences interested in what you offer, without wasting budget or time.'
                    }
                  </p>
                </div>
              </div>

              <div className={`flex items-start space-x-4 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {dir === 'rtl' ? 'مجتمع حقيقي' : 'Real Community'}
                  </h3>
                  <p className="text-muted-foreground">
                    {dir === 'rtl' 
                      ? 'بناء علاقات طويلة المدى مع عملاء حقيقيين، وليس مجرد أرقام إحصائية.'
                      : 'Building long-term relationships with real customers, not just statistical numbers.'
                    }
                  </p>
                </div>
              </div>

              <div className={`flex items-start space-x-4 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {dir === 'rtl' ? 'نمو مستدام' : 'Sustainable Growth'}
                  </h3>
                  <p className="text-muted-foreground">
                    {dir === 'rtl' 
                      ? 'استراتيجيات تسويق تضمن النمو المستمر لمشروعك على المدى الطويل.'
                      : 'Marketing strategies that ensure continuous growth for your project in the long term.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className={`${dir === 'rtl' ? 'lg:order-1' : 'lg:order-2'} slide-left`}>
            <div className="relative">
              <div className="bg-gradient-subtle rounded-2xl p-8 card-elegant">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-12 rounded-lg ${
                        i === 4 
                          ? 'bg-gradient-accent' 
                          : 'bg-secondary/50'
                      } flex items-center justify-center`}
                    >
                      {i === 4 && (
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2">DOT</h3>
                  <p className="text-muted-foreground text-sm">
                    {dir === 'rtl' ? 'نقطة التقاء المشاريع والجمهور' : 'Where Projects Meet Audiences'}
                  </p>
                </div>
              </div>
              
              {/* Floating dots */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-dot-vivid-purple/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-dot-warm-rose/30 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDot;