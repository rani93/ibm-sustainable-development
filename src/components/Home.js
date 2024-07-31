import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Service from '../components/Service';
import Features from '../components/Features';
import Plant from '../components/Plant';
import Process from '../components/Process';
import Booking from '../components/Booking';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Features />
      <Plant />
      <Process />
      <Booking />
    </div>
  );
}

export default Home;
