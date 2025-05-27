import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { upcomingExhibitions } from '../constants';
import { formatDate } from '@/utils/date-utils';

const UpcomingExhibitions: React.FC = () => {
  const regularExhibitions = upcomingExhibitions.filter(exhibition => !exhibition.featured);
  
  return (
    <section className="py-section bg-beige">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-h2 font-semibold text-charcoal mb-12 text-center">
          All Upcoming Exhibitions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularExhibitions.map((exhibition) => (
            <Card key={exhibition.id} className="overflow-hidden pt-0 bg-white shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={exhibition.image} 
                  alt={exhibition.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="font-playfair text-xl text-charcoal mb-1">
                  {exhibition.title}
                </CardTitle>
                <p className="font-inter text-brass-gold text-sm font-medium">
                  {exhibition.artist}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="font-inter text-charcoal/80 text-sm mb-4 leading-relaxed">
                  {exhibition.description.substring(0, 120)}...
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-charcoal/70">
                    <Calendar className="w-3 h-3 mr-2 text-kencu-red" />
                    <span className="font-inter">
                      {formatDate(exhibition.startDate)} - {formatDate(exhibition.endDate)}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-xs text-charcoal/70">
                    <MapPin className="w-3 h-3 mr-2 text-kencu-red" />
                    <span className="font-inter">{exhibition.location}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full border-brass-gold text-brass-gold hover:bg-brass-gold hover:text-charcoal font-inter text-sm">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingExhibitions; 