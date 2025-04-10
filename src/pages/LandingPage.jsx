import React from 'react';
import ThreeBackground from '../effects/ThreeBackground';
import GradientEffect from '../effects/GradientEffect';
import Navbar from '../components/UI/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import OrderForm from '../components/OrderForm';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen" id="home">
      {/* Background elements */}
      <GradientEffect />
      <ThreeBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Features />
        <Gallery />
        <OrderForm />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;