'use client';

import { useState, useEffect } from 'react';

interface ScrollNavProps {
  children: React.ReactNode;
}

export default function ScrollNav({ children }: ScrollNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-off-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      {children}
    </div>
  );
} 