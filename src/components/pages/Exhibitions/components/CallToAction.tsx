import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-section bg-gradient-to-r from-kencu-red to-kencu-red/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-off-white rotate-45"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-off-white rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-off-white rotate-45"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 border border-off-white rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="font-playfair text-h2 lg:text-6xl font-bold text-off-white mb-6">
            Experience Art 
            <span className="block text-brass-gold">Like Never Before</span>
          </h2>
          
          <p className="font-inter text-body lg:text-xl text-off-white/90 mb-8 max-w-2xl mx-auto">
            Step into our gallery and immerse yourself in the rich tapestry of Balinese culture. 
            From traditional masterpieces to contemporary interpretations, discover art that speaks to your soul.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-kencu-red rounded-sm"></div>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-off-white mb-2">
                Curated Collections
              </h3>
              <p className="font-inter text-off-white/80">
                Carefully selected pieces from renowned Balinese artists
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-kencu-red rounded-full"></div>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-off-white mb-2">
                Expert Guidance
              </h3>
              <p className="font-inter text-off-white/80">
                Personal tours and insights from our art specialists
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-kencu-red rounded-sm rotate-45"></div>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-off-white mb-2">
                Cultural Immersion
              </h3>
              <p className="font-inter text-off-white/80">
                Learn about the stories and traditions behind each piece
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-off-white text-kencu-red hover:bg-off-white/90 font-inter px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Plan Your Visit
            </Button>
            
            <Button className="bg-off-white text-kencu-red hover:bg-off-white/90 font-inter px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Virtual Tour
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-off-white/20">
            <p className="font-inter text-off-white/80 mb-2">
              Open Daily: 9:00 AM - 6:00 PM
            </p>
            <p className="font-inter text-off-white/80">
              Jl. Raya Ubud, Gianyar, Bali 80571, Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
