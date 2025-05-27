import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "linear-gradient(rgba(30, 30, 30, 0.4), rgba(169, 30, 34, 0.2)), url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 800\"%3E%3Cdefs%3E%3ClinearGradient id=\"bg\" x1=\"0%25\" y1=\"0%25\" x2=\"100%25\" y2=\"100%25\"%3E%3Cstop offset=\"0%25\" style=\"stop-color:%23F5EFE6\" /%3E%3Cstop offset=\"100%25\" style=\"stop-color:%23C9A25C\" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\"1200\" height=\"800\" fill=\"url(%23bg)\" /%3E%3Cg opacity=\"0.1\"%3E%3Cpath d=\"M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z\" fill=\"%23A91E22\" /%3E%3C/g%3E%3C/svg%3E')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="font-playfair text-h1 lg:text-7xl xl:text-8xl font-bold text-off-white mb-6 leading-tight">
            Discover the
            <span className="block text-brass-gold">Soul of Bali</span>
          </h1>
          
          <p className="font-inter text-body lg:text-xl text-off-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in authentic Balinese art where traditional heritage meets contemporary expression. 
            Experience the island's rich cultural tapestry through the eyes of local and international artists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-primary text-off-white hover:bg-kencu-red/90 font-inter px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore Collections
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-brass-gold text-brass-gold hover:bg-brass-gold hover:text-charcoal font-inter px-8 py-4 text-lg rounded-lg transition-all duration-300"
            >
              Plan Your Visit
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-off-white animate-bounce">
        <ChevronDown size={32} />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-24 h-24 border border-brass-gold/30 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 border border-off-white/20 rotate-45 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
