import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Target, Rocket, Globe, Users, Zap } from 'lucide-react';

const Roadmap = () => {
  const { t, dir } = useLanguage();

  const roadmapItems = [
    {
      titleKey: 'roadmap.near-term.title',
      contentKey: 'roadmap.near-term.content',
      icon: Target,
      color: 'bg-green-500',
      timeline: '6-12',
      timeUnit: dir === 'rtl' ? 'شهر' : 'months',
    },
    {
      titleKey: 'roadmap.mid-term.title', 
      contentKey: 'roadmap.mid-term.content',
      icon: Rocket,
      color: 'bg-blue-500',
      timeline: '1-2',
      timeUnit: dir === 'rtl' ? 'سنة' : 'years',
    },
    {
      titleKey: 'roadmap.long-term.title',
      contentKey: 'roadmap.long-term.content', 
      icon: Globe,
      color: 'bg-purple-500',
      timeline: '3+',
      timeUnit: dir === 'rtl' ? 'سنوات' : 'years',
    },
  ];

  return (
    <section id="roadmap" className="section-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-gradient" style={{ lineHeight: '1.3', paddingBottom: '0.3em' }}>
            {t('roadmap.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute ${dir === 'rtl' ? 'right-8' : 'left-8'} top-0 bottom-0 w-1 bg-gradient-accent`}></div>

          <div className="space-y-16">
            {roadmapItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.titleKey}
                  className={`relative ${
                    dir === 'rtl' 
                      ? index % 2 === 0 ? 'mr-20' : 'mr-20 ml-8'
                      : index % 2 === 0 ? 'ml-20' : 'ml-20 mr-8'
                  } fade-in`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute ${dir === 'rtl' ? '-right-20' : '-left-20'} top-6 w-16 h-16 ${item.color} rounded-full flex items-center justify-center shadow-glow z-10`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className="card-elegant">
                    {/* Timeline Badge */}
                    <div className="flex items-center mb-4">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium text-primary">
                        {item.timeline} {item.timeUnit}
                      </span>
                    </div>

                    <h3 className="heading-sm mb-4 text-primary">
                      {t(item.titleKey)}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {t(item.contentKey)}
                    </p>

                    {/* Progress Indicator */}
                    <div className="mt-6">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground">
                          {dir === 'rtl' ? 'التقدم المتوقع' : 'Expected Progress'}
                        </span>
                        <span className="font-medium">
                          {index === 0 ? '30%' : index === 1 ? '10%' : '0%'}
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className={`h-2 ${item.color} rounded-full transition-all duration-500`}
                          style={{
                            width: index === 0 ? '30%' : index === 1 ? '10%' : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center card-feature">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary mb-2">1M+</div>
            <p className="text-muted-foreground">
              {dir === 'rtl' ? 'مستخدم نشط (الهدف)' : 'Active Users (Goal)'}
            </p>
          </div>

          <div className="text-center card-feature">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <p className="text-muted-foreground">
              {dir === 'rtl' ? 'شركة معلنة (الهدف)' : 'Advertisers (Goal)'}
            </p>
          </div>

          <div className="text-center card-feature">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">
              {dir === 'rtl' ? 'دولة (الهدف)' : 'Countries (Goal)'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;