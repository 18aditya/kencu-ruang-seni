import React from 'react';
import { FeaturedExhibitions, UpcomingExhibitions, CallToAction } from './components';
import Hero from './components/Hero';

const Exhibitions = () => {

  return (
    <>
     <Hero/>
      <FeaturedExhibitions/>
      <UpcomingExhibitions />
      <CallToAction />
    </>
  );
};

export default Exhibitions;