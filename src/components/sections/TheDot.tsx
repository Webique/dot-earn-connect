import React, { useCallback, useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { Sparkles, Rocket, Users, Stars } from 'lucide-react';

const TheDot = () => {
  const { t, dir } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => onSelect(emblaApi));
    onSelect(emblaApi);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const slides = [
    {
      icon: <Sparkles className="h-8 w-8" />, 
      title: dir === 'rtl' ? 'اسم لا يُنسى' : 'A Name You Remember',
      text: dir === 'rtl' 
        ? 'بساطة تجعل العلامة لاصقة في الذاكرة—نقطة تترك أثراً.'
        : 'Simplicity that sticks—Dot leaves a memorable mark.'
    },
    {
      icon: <Rocket className="h-8 w-8" />, 
      title: dir === 'rtl' ? 'إقلاع المشاريع' : 'Projects, Launched',
      text: dir === 'rtl' 
        ? 'حيث تنطلق الأفكار إلى الضوء وتصل للجمهور المناسب.'
        : 'Where ideas lift off and meet the right audience.'
    },
    {
      icon: <Users className="h-8 w-8" />, 
      title: dir === 'rtl' ? 'مجتمع حي' : 'A Living Community',
      text: dir === 'rtl' 
        ? 'نقطة التقاء الناس مع القصص التي تؤثر عليهم.'
        : 'A meeting point where people connect with stories that move them.'
    },
    {
      icon: <Stars className="h-8 w-8" />, 
      title: dir === 'rtl' ? 'نهاية البحث' : 'End of the Search',
      text: dir === 'rtl' 
        ? 'المكان الذي يجد فيه المستخدم ما يريد—بوضوح وعدالة.'
        : 'Where users finally find what they seek—clearly and fairly.'
    },
  ];

  return (
    <section id="the-dot" className="relative overflow-hidden py-24">
      {/* Ambient shapes */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-dot-vivid-purple/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-dot-royal-magenta/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="heading-lg mb-3 text-gradient">{t('the-dot.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {dir === 'rtl' 
              ? 'حكاية علامة تُبنى حول نقطة—مباشرة، صادقة، ومؤثرة.'
              : 'A brand story built around a dot—direct, honest, and impactful.'}
          </p>
        </div>

        {/* Carousel */}
        <div className="embla" ref={emblaRef}>
          <div className={`embla__container flex ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            {slides.map((slide, idx) => (
              <div key={idx} className="embla__slide min-w-0 flex-[0_0_100%] sm:flex-[0_0_80%] lg:flex-[0_0_60%] px-3">
                <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-gradient-subtle card-elegant h-full">
                  <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-accent blur-2xl opacity-30" />
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary text-white grid place-items-center shadow-elegant">
                      {slide.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{slide.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{slide.text}</p>
                    </div>
                  </div>
                  <div className="mt-8 relative">
                    <div className="h-2 w-full rounded-full bg-secondary/40 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-dot-royal-magenta to-dot-vivid-purple"
                        style={{ width: `${((idx + 1) / slides.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className={`flex items-center justify-center mt-8 ${dir === 'rtl' ? 'space-x-reverse' : ''} space-x-2`}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                selectedIndex === i ? 'bg-primary scale-110' : 'bg-secondary'
              }`}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Controls */}
        <div className={`mt-6 flex items-center justify-center space-x-3 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
          <button
            className="btn-primary px-4 py-2 rounded-lg"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
          >
            {dir === 'rtl' ? 'السابق' : 'Prev'}
          </button>
          <button
            className="btn-primary px-4 py-2 rounded-lg"
            onClick={() => emblaApi && emblaApi.scrollNext()}
          >
            {dir === 'rtl' ? 'التالي' : 'Next'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TheDot;