import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Award, Rocket } from 'lucide-react';

const TheDot = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="the-dot" className="section-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-gradient">
            {t('the-dot.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - Dot Symbol */}
          <div className={`${dir === 'rtl' ? 'lg:order-2' : 'lg:order-1'} slide-right`}>
            <div className="relative flex items-center justify-center">
              {/* Central Dot */}
              <div className="relative z-10 w-32 h-32 bg-gradient-accent rounded-full flex items-center justify-center shadow-glow">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-accent rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0">
                {/* Projects */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-elegant">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-xs text-center mt-2 font-medium">
                    {dir === 'rtl' ? 'المشاريع' : 'Projects'}
                  </p>
                </div>

                {/* People */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center shadow-elegant">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-xs text-center mt-2 font-medium">
                    {dir === 'rtl' ? 'الأفراد' : 'People'}
                  </p>
                </div>

                {/* Success */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                  dir === 'rtl' ? 'left-0 -translate-x-4' : 'right-0 translate-x-4'
                }`}>
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center shadow-elegant">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-xs text-center mt-2 font-medium">
                    {dir === 'rtl' ? 'النجاح' : 'Success'}
                  </p>
                </div>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--dot-royal-magenta))" />
                    <stop offset="100%" stopColor="hsl(var(--dot-vivid-purple))" />
                  </linearGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className={`${dir === 'rtl' ? 'lg:order-1' : 'lg:order-2'} slide-left`}>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              {t('the-dot.content')}
            </p>

            {/* Key Concepts */}
            <div className="space-y-6">
              <div className="card-feature">
                <h3 className="font-semibold text-lg mb-2 text-primary">
                  {dir === 'rtl' ? '• البساطة والوضوح' : '• Simple & Clear'}
                </h3>
                <p className="text-muted-foreground">
                  {dir === 'rtl' 
                    ? 'اسم سهل الحفظ والانتشار، يحمل معنى عميق ومفهوم عالمي.'
                    : 'A name that\'s easy to remember and spread, carrying deep meaning and universal understanding.'
                  }
                </p>
              </div>

              <div className="card-feature">
                <h3 className="font-semibold text-lg mb-2 text-primary">
                  {dir === 'rtl' ? '• نقطة البداية والنهاية' : '• Start & End Point'}
                </h3>
                <p className="text-muted-foreground">
                  {dir === 'rtl' 
                    ? 'حيث تبدأ المشاريع رحلة الشهرة وينتهي بحث المستخدمين عن الفرص.'
                    : 'Where projects start their fame journey and users end their search for opportunities.'
                  }
                </p>
              </div>

              <div className="card-feature">
                <h3 className="font-semibold text-lg mb-2 text-primary">
                  {dir === 'rtl' ? '• نقطة التقاء' : '• Meeting Point'}
                </h3>
                <p className="text-muted-foreground">
                  {dir === 'rtl' 
                    ? 'المكان الذي يلتقي فيه الطموح مع التنفيذ، والتسويق مع العدالة.'
                    : 'Where ambition meets execution, and marketing meets fairness.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheDot;