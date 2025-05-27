import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { upcomingExhibitions } from '../constants';
import { formatDate } from '@/utils/date-utils';

const FeaturedExhibitions: React.FC = () => {
 
  const featuredExhibitions = upcomingExhibitions.filter(exhibition => exhibition.featured);

  if (featuredExhibitions.length === 0) return null;

  return (
    <section className="py-section bg-off-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-h2 font-semibold text-charcoal mb-12 text-center">
          Featured Exhibitions
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredExhibitions.map((exhibition) => (
            <Card key={exhibition.id} className="overflow-hidden pt-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={exhibition.image} 
                  alt={exhibition.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-kencu-red text-off-white px-3 py-1 rounded-full text-sm font-inter font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="font-playfair text-2xl text-charcoal mb-2">
                  {exhibition.title}
                </CardTitle>
                <p className="font-inter text-brass-gold font-medium">
                  {exhibition.artist}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="font-inter text-charcoal/80 mb-6 leading-relaxed">
                  {exhibition.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-charcoal/70">
                    <Calendar className="w-4 h-4 mr-3 text-kencu-red" />
                    <span className="font-inter">
                      {formatDate(exhibition.startDate)} - {formatDate(exhibition.endDate)}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-charcoal/70">
                    <Clock className="w-4 h-4 mr-3 text-kencu-red" />
                    <span className="font-inter">{exhibition.time}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-charcoal/70">
                    <MapPin className="w-4 h-4 mr-3 text-kencu-red" />
                    <span className="font-inter">{exhibition.location}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-kencu-red text-off-white hover:bg-kencu-red/90 font-inter">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExhibitions; 