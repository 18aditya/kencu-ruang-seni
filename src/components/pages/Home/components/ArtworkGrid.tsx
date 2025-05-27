import React from 'react';
import { Button } from '@/components/ui/button';

const ArtworkGrid = () => {
  const artworks = [
    {
      id: 1,
      title: "Temple Dancers",
      artist: "I Made Sukerta",
      price: "$2,400",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Cdefs%3E%3ClinearGradient id='art1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23C9A25C' /%3E%3Cstop offset='100%25' style='stop-color:%23A91E22' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='500' fill='url(%23art1)' /%3E%3Cg opacity='0.3'%3E%3Cpath d='M0,250 Q200,150 400,250 L400,500 L0,500 Z' fill='%23F5EFE6' /%3E%3C/g%3E%3C/svg%3E",
      category: "Traditional"
    },
    {
      id: 2,
      title: "Rice Terrace Dreams",
      artist: "Nyoman Wirata",
      price: "$1,800",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Cdefs%3E%3ClinearGradient id='art2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F5EFE6' /%3E%3Cstop offset='100%25' style='stop-color:%23C9A25C' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='500' fill='url(%23art2)' /%3E%3Cg opacity='0.4'%3E%3Cpath d='M0,100 Q100,200 200,100 T400,100 L400,500 L0,500 Z' fill='%23A91E22' /%3E%3C/g%3E%3C/svg%3E",
      category: "Landscape"
    },
    {
      id: 3,
      title: "Garuda Rising",
      artist: "Ketut Madra",
      price: "$3,200",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Cdefs%3E%3CradialGradient id='art3' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' style='stop-color:%23FBFAF7' /%3E%3Cstop offset='100%25' style='stop-color:%23A91E22' /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='400' height='500' fill='url(%23art3)' /%3E%3Cg opacity='0.2'%3E%3Ccircle cx='200' cy='250' r='150' fill='%23C9A25C' /%3E%3C/g%3E%3C/svg%3E",
      category: "Mythology"
    },
    {
      id: 4,
      title: "Ocean Prayers",
      artist: "Wayan Sujana",
      price: "$2,100",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Cdefs%3E%3ClinearGradient id='art4' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%231E1E1E' /%3E%3Cstop offset='100%25' style='stop-color:%23C9A25C' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='500' fill='url(%23art4)' /%3E%3Cg opacity='0.3'%3E%3Cpath d='M0,400 Q200,300 400,400 L400,500 L0,500 Z' fill='%23F5EFE6' /%3E%3C/g%3E%3C/svg%3E",
      category: "Spiritual"
    },
    {
      id: 5,
      title: "Market Morning",
      artist: "Made Wianta",
      price: "$1,600",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Cdefs%3E%3ClinearGradient id='art5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FBFAF7' /%3E%3Cstop offset='50%25' style='stop-color:%23F5EFE6' /%3E%3Cstop offset='100%25' style='stop-color:%23C9A25C' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='500' fill='url(%23art5)' /%3E%3Cg opacity='0.2'%3E%3Cpath d='M0,0 L400,0 L400,250 Q200,350 0,250 Z' fill='%23A91E22' /%3E%3C/g%3E%3C/svg%3E",
      category: "Contemporary"
    },
    {
      id: 6,
      title: "Sacred Lotus",
      artist: "Ni Kadek Sari",
      price: "$2,800",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Cdefs%3E%3CradialGradient id='art6' cx='50%25' cy='30%25' r='70%25'%3E%3Cstop offset='0%25' style='stop-color:%23C9A25C' /%3E%3Cstop offset='100%25' style='stop-color:%23A91E22' /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='400' height='500' fill='url(%23art6)' /%3E%3Cg opacity='0.3'%3E%3Cellipse cx='200' cy='150' rx='180' ry='100' fill='%23FBFAF7' /%3E%3C/g%3E%3C/svg%3E",
      category: "Floral"
    }
  ];

  return (
    <section id="collections" className="py-section bg-beige">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-h2 lg:text-6xl font-semibold text-kencu-red mb-4">
            Featured Collections
          </h2>
          <p className="font-inter text-body text-charcoal max-w-2xl mx-auto">
            Explore our curated selection of authentic Balinese paintings, each piece telling a unique story 
            of cultural heritage and artistic excellence.
          </p>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {artworks.map((artwork, index) => (
            <div 
              key={artwork.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-off-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-brass-gold text-charcoal px-3 py-1 rounded-full text-sm font-inter font-medium">
                      {artwork.category}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-kencu-red text-off-white hover:bg-kencu-red/90 font-inter px-6 py-2 rounded-lg transform scale-95 group-hover:scale-100 transition-transform duration-200">
                      View Details
                    </Button>
                  </div>
                </div>
                
                {/* Artwork Info */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2">
                    {artwork.title}
                  </h3>
                  <p className="font-inter text-muted mb-3">
                    by {artwork.artist}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-inter text-lg font-semibold text-kencu-red">
                      {artwork.price}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-brass-gold text-brass-gold hover:bg-brass-gold hover:text-charcoal font-inter"
                    >
                      Inquire
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="bg-kencu-red text-off-white hover:bg-kencu-red/90 font-inter px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtworkGrid;
