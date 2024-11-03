// src/App.jsx
import React from 'react';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertySection from './components/PropertySection';
import ServiceSection from './components/ServiceSection';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <PropertySection />
      <ServiceSection />
      <AboutUs />
      <Footer />
    </>
  );
};

export default App;
