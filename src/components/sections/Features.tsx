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
    <section id="features" className="section-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-gradient">
            {t('features.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.titleKey}
                className="group card-elegant hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                  {t(feature.titleKey)}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Core Value Proposition */}
        <div className="bg-gradient-to-r from-dot-cosmic-indigo to-dot-royal-magenta rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className={`flex items-start space-x-6 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Zap className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {dir === 'rtl' 
                    ? 'منصة شاملة للاقتصاد الرقمي التشاركي' 
                    : 'Complete Platform for Participatory Digital Economy'
                  }
                </h3>
                
                <p className="text-lg mb-6 text-white/90 leading-relaxed">
                  {dir === 'rtl'
                    ? 'دوت ليست مجرد منصة إعلانية؛ إنها نظام بيئي متكامل يجمع بين التسويق التشاركي والمنتجات الرقمية والمكافآت الذكية، لتمكين كل فرد من بناء دخل مستدام من جهازه الشخصي.'
                    : 'DOT isn\'t just an advertising platform; it\'s a complete ecosystem combining participatory marketing, digital products, and smart rewards, empowering every individual to build sustainable income from their personal device.'
                  }
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{dir === 'rtl' ? 'ربح عادل ومضمون' : 'Fair & guaranteed earnings'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{dir === 'rtl' ? 'تسويق ذكي ومستهدف' : 'Smart & targeted marketing'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{dir === 'rtl' ? 'منتجات رقمية متنوعة' : 'Diverse digital products'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{dir === 'rtl' ? 'شفافية كاملة' : 'Complete transparency'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-dot-vivid-purple/30 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;