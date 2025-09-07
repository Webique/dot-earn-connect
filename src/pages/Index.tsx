import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyDot from '@/components/sections/WhyDot';
import TheDot from '@/components/sections/TheDot';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Vision from '@/components/sections/Vision';
import Roadmap from '@/components/sections/Roadmap';
import Features from '@/components/sections/Features';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <WhyDot />
          <TheDot />
          <Problem />
          <Solution />
          <Vision />
          <Roadmap />
          <Features />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
