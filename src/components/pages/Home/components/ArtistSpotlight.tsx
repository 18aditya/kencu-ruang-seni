import React from 'react';
import { Button } from '@/components/ui/button';

const ArtistSpotlight = () => {
  return (
    <section id="artists" className="py-section bg-off-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative animate-fade-in">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 500'%3E%3Cdefs%3E%3ClinearGradient id='artist' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F5EFE6' /%3E%3Cstop offset='50%25' style='stop-color:%23C9A25C' /%3E%3Cstop offset='100%25' style='stop-color:%23A91E22' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='500' fill='url(%23artist)' /%3E%3Cg opacity='0.3'%3E%3Ccircle cx='300' cy='150' r='80' fill='%23FBFAF7' /%3E%3Crect x='220' y='230' width='160' height='200' fill='%231E1E1E' /%3E%3C/g%3E%3Ctext x='300' y='480' text-anchor='middle' font-family='serif' font-size='24' fill='%23FBFAF7'%3EI Made Sukerta%3C/text%3E%3C/svg%3E"
                alt="Featured Artist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-kencu-red/20 to-brass-gold/20"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-brass-gold rounded-lg rotate-12 hidden lg:block"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-kencu-red rounded-full opacity-80 hidden lg:block"></div>
          </div>

          {/* Content Section */}
          <div className="animate-fade-in-up lg:pl-8">
            <div className="mb-6">
              <span className="font-inter text-brass-gold text-sm font-medium uppercase tracking-wide">
                Artist Spotlight
              </span>
              <h2 className="font-playfair text-h2 lg:text-5xl font-semibold text-kencu-red mt-2 mb-4">
                I Made Sukerta
              </h2>
              <p className="font-inter text-lg text-brass-gold font-medium mb-6">
                Master of Traditional Balinese Painting
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <p className="font-inter text-body text-charcoal">
                With over three decades of experience, I Made Sukerta is renowned for his exceptional ability 
                to capture the spiritual essence of Balinese culture through traditional painting techniques 
                passed down through generations.
              </p>
              
              <p className="font-inter text-body text-charcoal">
                His works feature intricate details of temple ceremonies, classical dancers, and mythological 
                narratives, painted with natural pigments and gold leaf that create luminous, timeless pieces.
              </p>
              
              <p className="font-inter text-body text-charcoal">
                "Each brushstroke carries the wisdom of my ancestors and the beauty of our island's soul." 
                - I Made Sukerta
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-brass-gold/20">
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-kencu-red mb-1">30+</div>
                <div className="font-inter text-sm text-muted">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-kencu-red mb-1">200+</div>
                <div className="font-inter text-sm text-muted">Artworks Created</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-kencu-red mb-1">15</div>
                <div className="font-inter text-sm text-muted">International Exhibitions</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-kencu-red text-off-white hover:bg-kencu-red/90 font-inter px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                View Artist's Works
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-brass-gold text-brass-gold hover:bg-brass-gold hover:text-charcoal font-inter px-6 py-3 rounded-lg transition-all duration-300"
              >
                Artist Biography
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;
