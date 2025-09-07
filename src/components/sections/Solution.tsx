import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Smartphone, Building2, Users, Gift, Zap, CheckCircle } from 'lucide-react';

const Solution = () => {
  const { t, dir } = useLanguage();

  const solutions = [
    {
      key: 'solution.item1',
      icon: Smartphone,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      key: 'solution.item2',
      icon: Building2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      key: 'solution.item3',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      key: 'solution.item4',
      icon: Gift,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      key: 'solution.item5',
      icon: Zap,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section id="solution" className="section-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-gradient" style={{ lineHeight: '1.3', paddingBottom: '0.3em' }}>
            {t('solution.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('solution.intro')}
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.key}
                className={`card-feature group ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                }`}
              >
                <div className={`w-16 h-16 rounded-xl ${solution.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${solution.color}`} />
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {t(solution.key)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Key Innovation Box */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-red-200/50 dark:border-red-800/50 max-w-4xl mx-auto">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <CheckCircle className="h-8 w-8 text-red-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-red-800 dark:text-red-200">
                {dir === 'rtl' ? 'الابتكار الأساسي' : 'Core Innovation'}
              </h3>
              <p className="text-red-700 dark:text-red-300 leading-relaxed mb-4">
                {dir === 'rtl' 
                  ? 'دوت لا تقدم مجرد مساحة إعلانية؛ بل تصنع مجتمعًا إعلانيًا جديدًا حيث كل دقيقة على المنصة = قيمة.'
                  : t('solution.conclusion')
                }
              </p>
              
              {/* Benefits Grid */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className={`flex items-center space-x-3 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700 dark:text-red-300 text-sm">
                    {dir === 'rtl' ? 'دخل عادل للجميع' : 'Fair income for everyone'}
                  </span>
                </div>
                <div className={`flex items-center space-x-3 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700 dark:text-red-300 text-sm">
                    {dir === 'rtl' ? 'تسويق بتكلفة عادلة' : 'Fair-priced marketing'}
                  </span>
                </div>
                <div className={`flex items-center space-x-3 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700 dark:text-red-300 text-sm">
                    {dir === 'rtl' ? 'تفاعل حقيقي' : 'Authentic engagement'}
                  </span>
                </div>
                <div className={`flex items-center space-x-3 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700 dark:text-red-300 text-sm">
                    {dir === 'rtl' ? 'شفافية كاملة' : 'Complete transparency'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;