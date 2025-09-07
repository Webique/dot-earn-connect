import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, DollarSign, Target, Users, TrendingDown } from 'lucide-react';

const Problem = () => {
  const { t, dir } = useLanguage();

  const problems = [
    {
      key: 'problem.item1',
      icon: DollarSign,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      key: 'problem.item2',
      icon: Users,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      key: 'problem.item3',
      icon: TrendingDown,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      key: 'problem.item4',
      icon: Target,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      key: 'problem.item5',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-600/10',
    },
  ];

  return (
    <section id="problem" className="section-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-gradient" style={{ lineHeight: '1.3', paddingBottom: '0.3em' }}>
            {t('problem.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.key}
                className={`card-elegant hover:shadow-glow transition-all duration-300 ${
                  index === 2 ? 'lg:col-span-1 lg:mx-auto lg:max-w-sm' : ''
                } ${index >= 3 ? 'md:col-span-1 lg:col-span-1' : ''}`}
              >
                <div className={`w-12 h-12 rounded-lg ${problem.bgColor} flex items-center justify-center mb-4`}>
                  <Icon className={`h-6 w-6 ${problem.color}`} />
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {t(problem.key)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Summary Box */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-red-200/50 dark:border-red-800/50">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-200">
                {dir === 'rtl' ? 'النتيجة: نظام غير عادل' : 'Result: An Unfair System'}
              </h3>
              <p className="text-red-700 dark:text-red-300 leading-relaxed">
                {dir === 'rtl' 
                  ? 'نظام تسويقي يخدم القلة على حساب الكثرة، حيث تستحوذ الشركات الكبرى والمؤثرون المشهورون على معظم الفرص، بينما يبقى أصحاب المشاريع الصغيرة والمستخدمون العاديون بلا فرص حقيقية للنمو والربح.'
                  : 'A marketing system that serves the few at the expense of the many, where large corporations and famous influencers capture most opportunities, while small project owners and ordinary users remain without real chances for growth and profit.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;