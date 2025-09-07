import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.why-dot': 'Why DOT',
    'nav.the-dot': 'The Dot',
    'nav.problem': 'Problem',
    'nav.solution': 'Solution',
    'nav.vision': 'Vision',
    'nav.roadmap': 'Roadmap',
    'nav.features': 'Features',
    'nav.contact': 'Contact',
    'nav.join-waitlist': 'Join the Waitlist',
    'nav.language-toggle': 'العربية',

    // Hero
    'hero.headline': 'Your starting point to reach real audiences.',
    'hero.subline': 'A smart digital economy where anyone can earn, contribute, and create impact — projects and people, meeting at one dot.',
    'hero.cta': 'Join the Waitlist',

    // Why DOT
    'why-dot.title': 'Why DOT',
    'why-dot.content': 'In an era where visibility, fame, and influence are daily goals — and digital marketing feels like the first and last step of any project — DOT emerges as the starting point to reach and profit. A meeting point between people and projects seeking a real audience.',

    // The Dot
    'the-dot.title': 'The Dot — Brand Story',
    'the-dot.content': 'The dot is more than a word — it\'s a powerful symbol. The beginning of every idea, the period that seals every successful sentence, and the mark at the end of an achievement that announces the start of another. We chose "DOT" because it\'s simple, clear, memorable, and built for spread. It\'s where projects begin their fame — and where users end their search for real earning opportunities. It\'s where projects meet society, marketing meets fairness, and ambition meets execution.',

    // Problem
    'problem.title': 'The Problem',
    'problem.item1': 'Digital marketing is too expensive for small projects.',
    'problem.item2': 'Reach is concentrated with agencies and a few influencers.',
    'problem.item3': 'Unfair outcomes: many pay, few see real results.',
    'problem.item4': 'No guarantees on ROI or targeted delivery.',
    'problem.item5': 'Millions of "ordinary" users have small audiences but no way to earn from engagement.',

    // Solution
    'solution.title': 'The Solution',
    'solution.intro': 'DOT breaks the rules and opens the gate for everyone:',
    'solution.item1': 'Turns every user into a marketer who can earn directly from their phone.',
    'solution.item2': 'Gives small businesses powerful, fairly priced campaigns.',
    'solution.item3': 'Builds a participatory ad system based on real interaction and authentic sharing.',
    'solution.item4': 'Uses a points & rewards engine to motivate and retain users.',
    'solution.item5': 'Smart condition: you must advertise to earn — so everyone wins.',
    'solution.conclusion': 'DOT doesn\'t just sell ad space — it creates a new ad community where every minute on the platform = value.',

    // Vision
    'vision.title': 'Our Vision',
    'vision.content': 'To become the leading destination in the Arab world — and then globally — for participatory marketing and digital business. We enable everyone to: earn from their content, sell digital products, and market others\' projects fairly, creating sustainable income from personal devices. Fame, income, and growth are no longer reserved for big companies or star influencers — they belong to everyone.',

    // Roadmap
    'roadmap.title': 'Roadmap & Objectives',
    'roadmap.near-term.title': 'Near Term (6–12 months)',
    'roadmap.near-term.content': 'Launch in KSA; first 1,000 active users and 100 advertisers; open Digital Products (courses, books, apps); reach stable monthly revenue covering ops; launch first campaigns for Light and Shine Compass.',
    'roadmap.mid-term.title': 'Mid Term (1–2 years)',
    'roadmap.mid-term.content': 'Expand to GCC (UAE, Kuwait, Bahrain); strategic partnerships (STC, Monsha\'at, Al Rajhi, etc.); integrate AI for smarter targeting; ship mobile apps & UX improvements.',
    'roadmap.long-term.title': 'Long Term (3+ years)',
    'roadmap.long-term.content': 'Reach 1M active users and 10K advertisers; support creators to build stores inside DOT; expand across the Arab region then globally (LATAM & North Africa); become the largest Arabic digital platform uniting ads, earnings, and digital products.',

    // Features
    'features.title': 'Services & Features',
    'features.participatory': 'Participatory Marketing',
    'features.participatory-desc': 'Anyone can publish ads and earn.',
    'features.campaigns': 'Smart Ad Campaigns',
    'features.campaigns-desc': 'Targeted launches with real-time analytics.',
    'features.products': 'Digital Products Hub',
    'features.products-desc': 'Sell/buy courses, books, tools, apps — promoted inside DOT.',
    'features.rewards': 'Points & Rewards',
    'features.rewards-desc': 'Levels, challenges, achievements to boost earnings & visibility.',
    'features.reports': 'Interactive Reports',
    'features.reports-desc': 'Who saw your ad, when, on which platform, conversions, earnings — full transparency.',
    'features.safety': 'Content Review & Safety',
    'features.safety-desc': 'Keep quality high, prevent spam/abuse.',
    'features.dashboard': 'Pro Dashboards',
    'features.dashboard-desc': 'For users & advertisers to manage accounts, ads, earnings, and withdrawals.',

    // Contact
    'contact.title': 'Be part of a new ad economy — where projects grow and people earn.',
    'contact.cta1': 'Join the Waitlist',
    'contact.cta2': 'Get Early Access',

    // Footer
    'footer.tagline': 'The starting point for real audience reach.',
    'footer.links': 'Quick Links',
    'footer.cta': 'Get Started',
    'footer.copyright': '© DOT — All rights reserved',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.why-dot': 'لماذا دوت',
    'nav.the-dot': 'فكرة النقطة',
    'nav.problem': 'المشكلة',
    'nav.solution': 'الحل',
    'nav.vision': 'الرؤية',
    'nav.roadmap': 'خارطة الطريق',
    'nav.features': 'الخدمات والمميزات',
    'nav.contact': 'تواصل معنا',
    'nav.join-waitlist': 'انضم للقائمة التجريبية',
    'nav.language-toggle': 'English',

    // Hero
    'hero.headline': 'نقطة الانطلاق لوصول حقيقي للجمهور.',
    'hero.subline': 'اقتصاد رقمي ذكي يمكّن الجميع من الربح والمساهمة وصنع الأثر — تلتقي فيه المشاريع مع الناس في نقطة واحدة.',
    'hero.cta': 'انضم للقائمة التجريبية',

    // Why DOT
    'why-dot.title': 'لماذا دوت',
    'why-dot.content': 'في زمن أصبحت فيه الشهرة والظهور والتأثير أهدافًا يومية، ومع تحوّل التسويق الإلكتروني إلى الخطوة الأولى والأخيرة للمشاريع — تظهر دوت كنقطة البداية لتحقيق الوصول والأرباح، ونقطة التقاء بين الأفراد والمشاريع الباحثة عن جمهور حقيقي.',

    // The Dot
    'the-dot.title': 'فكرة النقطة — قصة العلامة التجارية',
    'the-dot.content': 'النقطة ليست مجرد كلمة؛ إنها رمز قوي. بداية كل فكرة، وخاتمة كل جملة ناجحة، وعلامة نهاية كل إنجاز تُعلن بداية إنجاز جديد. اخترنا "دوت" لأنه بسيط وواضح وسهل الحفظ والانتشار. هي النقطة التي يبدأ منها كل مشروع يسعى للشهرة، والنقطة التي ينتهي عندها بحث المستخدم عن فرصة ربح حقيقية. هي المكان الذي تتقاطع فيه المشاريع مع المجتمع، والتسويق مع العدالة، والطموح مع التنفيذ.',

    // Problem
    'problem.title': 'المشكلة',
    'problem.item1': 'التسويق الإلكتروني مكلف جدًا للمشاريع الصغيرة.',
    'problem.item2': 'الوصول محصور لدى الوكالات وقلة من المؤثرين.',
    'problem.item3': 'عدم عدالة: كثير يدفعون وقليل يحققون نتائج فعلية.',
    'problem.item4': 'غياب ضمانات للعائد أو الوصول الدقيق للفئة المستهدفة.',
    'problem.item5': 'ملايين المستخدمين لديهم جمهور بسيط لكن بدون طريقة للربح من تفاعلهم.',

    // Solution
    'solution.title': 'الحل',
    'solution.intro': 'تكسر دوت القاعدة وتفتح الباب للجميع:',
    'solution.item1': 'تحويل كل مستخدم إلى مسوّق يربح مباشرة من جواله.',
    'solution.item2': 'منح المشاريع الصغيرة حملات قوية بتكلفة عادلة.',
    'solution.item3': 'إنشاء نظام إعلان تشاركي يعتمد على التفاعل والمشاركة الحقيقية.',
    'solution.item4': 'استخدام نقاط ومكافآت لتحفيز الاستمرار.',
    'solution.item5': 'الشرط الذكي: أعلن لتربح — ليكسب الجميع.',
    'solution.conclusion': 'دوت لا تقدم مجرد مساحة إعلانية؛ بل تصنع مجتمعًا إعلانيًا جديدًا حيث كل دقيقة على المنصة = قيمة.',

    // Vision
    'vision.title': 'رؤيتنا',
    'vision.content': 'أن تكون دوت الوجهة الأولى عربيًا ثم عالميًا للتسويق التشاركي والأعمال الرقمية. نمكّن الجميع من الربح من المحتوى، وبيع المنتجات الرقمية، وتسويق مشاريع الآخرين بعدالة، وتحقيق دخل مستمر من أجهزتهم الشخصية. الشهرة والدخل والنمو لم تعد حكرًا على الكبار — بل حق للجميع.',

    // Roadmap
    'roadmap.title': 'خارطة الطريق والأهداف',
    'roadmap.near-term.title': 'قصير المدى (6-12 شهر)',
    'roadmap.near-term.content': 'الإطلاق في السعودية؛ أول 1000 مستخدم نشط و100 شركة مُعلنة؛ تفعيل قسم المنتجات الرقمية؛ تحقيق دخل شهري يغطي التشغيل؛ إطلاق حملات Light وShine Compass.',
    'roadmap.mid-term.title': 'متوسط المدى (1-2 سنة)',
    'roadmap.mid-term.content': 'التوسع إلى الخليج (الإمارات، الكويت، البحرين)؛ شراكات استراتيجية (stc، منشآت، الراجحي…)، إدخال الذكاء الاصطناعي؛ إطلاق التطبيق وتحسين التجربة.',
    'roadmap.long-term.title': 'بعيد المدى (3+ سنوات)',
    'roadmap.long-term.content': 'الوصول إلى مليون مستخدم نشط و10 آلاف مُعلن؛ تمكين المبدعين لبناء متاجرهم داخل دوت؛ التوسع عربيًا ثم عالميًا؛ أن تصبح أكبر منصة عربية رقمية تجمع الإعلان والربح والمنتجات الرقمية.',

    // Features
    'features.title': 'الخدمات والمميزات',
    'features.participatory': 'التسويق التشاركي',
    'features.participatory-desc': 'أي شخص ينشر الإعلانات ويكسب.',
    'features.campaigns': 'حملات إعلانية ذكية',
    'features.campaigns-desc': 'توجيه دقيق وتحليلات مباشرة.',
    'features.products': 'قسم المنتجات الرقمية',
    'features.products-desc': 'بيع وشراء الدورات والكتب والأدوات والتطبيقات — مع الترويج داخل دوت.',
    'features.rewards': 'نقاط ومكافآت',
    'features.rewards-desc': 'مستويات وتحديات وإنجازات تزيد الأرباح والظهور.',
    'features.reports': 'تقارير تفاعلية',
    'features.reports-desc': 'من شاهد إعلانك؟ متى؟ على أي منصة؟ التحويلات والأرباح — بشفافية كاملة.',
    'features.safety': 'مراجعة المحتوى وحمايته',
    'features.safety-desc': 'لضمان الجودة ومنع التكرار أو الإساءة.',
    'features.dashboard': 'لوحات تحكم احترافية',
    'features.dashboard-desc': 'لإدارة الحساب، الإعلانات، الأرباح، وسحب المبالغ.',

    // Contact
    'contact.title': 'كن جزءًا من اقتصاد إعلاني جديد — يكبر فيه المشروع ويكسب فيه الجميع.',
    'contact.cta1': 'انضم للقائمة التجريبية',
    'contact.cta2': 'ادخل مبكرًا',

    // Footer
    'footer.tagline': 'نقطة الانطلاق للوصول الحقيقي للجمهور.',
    'footer.links': 'روابط سريعة',
    'footer.cta': 'ابدأ الآن',
    'footer.copyright': '© دوت — جميع الحقوق محفوظة',
    'footer.privacy': 'الخصوصية',
    'footer.terms': 'الشروط',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('dot-language') as Language;
    return stored && ['en', 'ar'].includes(stored) ? stored : 'en';
  });

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem('dot-language', language);
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', language);
  }, [language, dir]);

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
    dir,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};