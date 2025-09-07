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
          <h2 className="heading-lg mb-6 text-gradient">
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
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200/50 dark:border-green-800/50">
          <div className={`flex items-start space-x-6 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">
                {dir === 'rtl' ? 'الابتكار الأساسي' : 'Core Innovation'}
              </h3>
              <p className="text-lg text-green-700 dark:text-green-300 leading-relaxed mb-4">
                {t('solution.conclusion')}
              </p>
              
              {/* Benefits Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className={`flex items-center space-x-3 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-green-700 dark:text-green-300">
                    {dir === 'rtl' ? 'دخل عادل للجميع' : 'Fair income for everyone'}
                  </span>
                </div>
                <div className={`flex items-center space-x-3 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-green-700 dark:text-green-300">
                    {dir === 'rtl' ? 'تسويق بتكلفة عادلة' : 'Fair-priced marketing'}
                  </span>
                </div>
                <div className={`flex items-center space-x-3 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-green-700 dark:text-green-300">
                    {dir === 'rtl' ? 'تفاعل حقيقي' : 'Authentic engagement'}
                  </span>
                </div>
                <div className={`flex items-center space-x-3 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-green-700 dark:text-green-300">
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