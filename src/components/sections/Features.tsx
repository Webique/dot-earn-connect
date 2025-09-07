import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Users, 
  Target, 
  ShoppingCart, 
  Gift, 
  BarChart3, 
  Shield, 
  Layout,
  Zap
} from 'lucide-react';

const Features = () => {
  const { t, dir } = useLanguage();

  const features = [
    {
      titleKey: 'features.participatory',
      descKey: 'features.participatory-desc',
      icon: Users,
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      titleKey: 'features.campaigns',
      descKey: 'features.campaigns-desc',
      icon: Target,
      gradient: 'from-green-500 to-teal-600',
    },
    {
      titleKey: 'features.products',
      descKey: 'features.products-desc',
      icon: ShoppingCart,
      gradient: 'from-orange-500 to-red-600',
    },
    {
      titleKey: 'features.rewards',
      descKey: 'features.rewards-desc',
      icon: Gift,
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      titleKey: 'features.reports',
      descKey: 'features.reports-desc',
      icon: BarChart3,
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      titleKey: 'features.safety',
      descKey: 'features.safety-desc',
      icon: Shield,
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      titleKey: 'features.dashboard',
      descKey: 'features.dashboard-desc',
      icon: Layout,
      gradient: 'from-violet-500 to-purple-600',
    },
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden section-primary">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-dot-vivid-purple/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-dot-royal-magenta/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="heading-lg mb-3 text-gradient">{t('features.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {dir === 'rtl' ? 'خدمات متناسقة مع هوية دوت المرئية.' : 'Services aligned with the DOT visual language.'}
          </p>
        </div>

        {/* Clean alternating layout */}
        <div className="space-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={feature.titleKey}
                className="relative overflow-hidden rounded-3xl border border-secondary/20 bg-gradient-subtle"
              >
                <div className={`grid lg:grid-cols-2 gap-0 items-stretch min-h-[200px]`}>
                  {/* Visual side */}
                  <div className={`hidden lg:block ${isEven ? 'order-1' : 'order-2'} bg-secondary/10`}>
                    <div className="h-full w-full relative p-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-dot-royal-magenta/20 to-dot-vivid-purple/20" />
                      <div className="absolute inset-4 rounded-2xl border border-secondary/30" />
                      <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
                          <Icon className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content side */}
                  <div className={`${isEven ? 'order-2' : 'order-1'} p-8 sm:p-12 flex items-center`}>
                    <div className={`flex items-start ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''} space-x-4`}>
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary/40 grid place-items-center lg:hidden">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-primary">{t(feature.titleKey)}</h3>
                        <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">{t(feature.descKey)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Features;