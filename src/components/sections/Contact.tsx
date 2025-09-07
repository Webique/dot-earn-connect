import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="contact" className="section-hero py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="3" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-white">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center">
          {/* Centered Contact Info */}
          <div className="text-center max-w-2xl">
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  {dir === 'rtl' ? 'تواصل معنا مباشرة' : 'Contact Us Directly'}
                </h3>
                
                <div className="space-y-3">
                  <div className={`flex items-center space-x-3 text-white/90 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                    <Phone className="h-5 w-5 text-dot-vivid-purple" />
                    <a href="tel:+966551161726" className="hover:text-white transition-colors" dir="ltr">
                      +966 55 116 1726
                    </a>
                  </div>
                  
                  <div className={`flex items-center space-x-3 text-white/90 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                    <Mail className="h-5 w-5 text-dot-vivid-purple" />
                    <a href="mailto:Danamansouralkhudayr@gmail.com" className="hover:text-white transition-colors">
                      Danamansouralkhudayr@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-dot-vivid-purple/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-dot-warm-rose/30 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Contact;