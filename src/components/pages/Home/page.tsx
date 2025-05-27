
import React from 'react';
import Hero from './components/Hero';
import ArtworkGrid from './components/ArtworkGrid';
import ArtistSpotlight from './components/ArtistSpotlight';
import CallToAction from './components/CallToAction';


const Home = () => {
  return (
    <>
      <Hero />
      <ArtworkGrid />
      <ArtistSpotlight />
      <CallToAction />
    </>
  );
};

export default Home;
