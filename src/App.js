import React from 'react';
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import Footer from './components/Footer';
import About from './components/About';
import Plant from './components/Plant';
import Features from './components/Features';
import Process from './components/Process';
import Booking from './components/Booking';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Hero />
      <About />
      <Service />
      <Plant />
      <Features />
      <Process />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
