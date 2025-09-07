import React from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center section-hero">
      <div className="text-center text-white max-w-md mx-auto px-6">
        <h1 className="text-8xl font-bold mb-4 text-gradient">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg text-white/80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          className="btn-hero"
          onClick={() => window.location.href = '/'}
        >
          <Home className="h-5 w-5 mr-2" />
          Return to Home
          <ArrowRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
