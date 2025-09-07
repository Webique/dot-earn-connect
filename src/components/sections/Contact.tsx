import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, dir } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: dir === 'rtl' ? 'تم التسجيل بنجاح!' : 'Successfully registered!',
      description: dir === 'rtl' 
        ? 'سنتواصل معك قريباً مع آخر التطورات'
        : 'We\'ll contact you soon with the latest updates',
    });
    setEmail('');
  };

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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA and Contact Info */}
          <div className={`${dir === 'rtl' ? 'lg:order-2' : 'lg:order-1'} text-center lg:text-left`}>
            <div className="space-y-8">
              {/* Main CTA Buttons */}
              <div className="space-y-4">
                <Button 
                  size="lg"
                  className="btn-hero w-full sm:w-auto text-lg px-8 py-4"
                  onClick={() => document.getElementById('waitlist-form')?.scrollIntoView()}
                >
                  <Sparkles className={`h-5 w-5 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                  {t('contact.cta1')}
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="btn-hero w-full sm:w-auto text-lg px-8 py-4 ml-4"
                >
                  {t('contact.cta2')}
                  <ArrowRight className={`h-5 w-5 ${dir === 'rtl' ? 'rotate-180 mr-2' : 'ml-2'}`} />
                </Button>
              </div>

              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  {dir === 'rtl' ? 'تواصل معنا مباشرة' : 'Contact Us Directly'}
                </h3>
                
                <div className="space-y-3">
                  <div className={`flex items-center space-x-3 text-white/90 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                    <Phone className="h-5 w-5 text-dot-vivid-purple" />
                    <a href="tel:+966551161726" className="hover:text-white transition-colors">
                      +966 55 116 1726
                    </a>
                  </div>
                  
                  <div className={`flex items-center space-x-3 text-white/90 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                    <Mail className="h-5 w-5 text-dot-vivid-purple" />
                    <span>hello@dot-platform.com</span>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <div className={`flex items-center space-x-3 text-white/90 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>{dir === 'rtl' ? 'الوصول المبكر للمنصة' : 'Early platform access'}</span>
                </div>
                <div className={`flex items-center space-x-3 text-white/90 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>{dir === 'rtl' ? 'مكافآت وعروض خاصة' : 'Special rewards & offers'}</span>
                </div>
                <div className={`flex items-center space-x-3 text-white/90 ${dir === 'rtl' ? 'space-x-reverse flex-row-reverse' : ''}`}>
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>{dir === 'rtl' ? 'تحديثات حصرية' : 'Exclusive updates'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Waitlist Form */}
          <div className={`${dir === 'rtl' ? 'lg:order-1' : 'lg:order-2'}`}>
            <div id="waitlist-form" className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {dir === 'rtl' ? 'انضم للقائمة التجريبية' : 'Join the Waitlist'}
                </h3>
                <p className="text-muted-foreground">
                  {dir === 'rtl' 
                    ? 'كن من أوائل من يجربون المنصة واحصل على مزايا حصرية'
                    : 'Be among the first to try the platform and get exclusive benefits'
                  }
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="email"
                      placeholder={dir === 'rtl' ? 'بريدك الإلكتروني' : 'Your email address'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full py-3 text-lg"
                      required
                      dir={dir}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="btn-primary w-full py-3 text-lg"
                    disabled={!email}
                  >
                    <Sparkles className={`h-5 w-5 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                    {dir === 'rtl' ? 'انضم الآن مجاناً' : 'Join Now - Free'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    {dir === 'rtl'
                      ? 'بالتسجيل توافق على شروط الخدمة وسياسة الخصوصية'
                      : 'By registering you agree to our Terms of Service and Privacy Policy'
                    }
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-600 mb-2">
                    {dir === 'rtl' ? 'تم التسجيل بنجاح!' : 'Successfully Registered!'}
                  </h3>
                  <p className="text-muted-foreground">
                    {dir === 'rtl'
                      ? 'سنرسل لك تحديثات المنصة على بريدك الإلكتروني'
                      : 'We\'ll send you platform updates to your email'
                    }
                  </p>
                </div>
              )}
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