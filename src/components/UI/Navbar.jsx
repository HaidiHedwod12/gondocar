import React, { useState, useEffect } from 'react';
import { useCar } from '../../context/CarContext';
import { useOrder } from '../../context/OrderContext';

const Navbar = () => {
  const { selectedCar } = useCar();
  const { startOrder } = useOrder();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Deteksi scroll untuk mengubah style navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handler untuk scroll ke section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Offset untuk navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    
    // Tutup menu jika terbuka
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white mr-2">Gondo</h1>
          {isScrolled && selectedCar && (
            <span className="text-blue-400 text-sm font-medium">{selectedCar}</span>
          )}
        </div>
        
        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white hover:text-blue-400 transition-colors"
          >
            Beranda
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white hover:text-blue-400 transition-colors"
          >
            Tentang
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-white hover:text-blue-400 transition-colors"
          >
            Fitur
          </button>
          <button 
            onClick={() => scrollToSection('order')} 
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition duration-300"
          >
            Pesan Sekarang
          </button>
        </nav>
        
        {/* Tombol menu mobile */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Menu mobile */}
      <div 
        className={`md:hidden absolute w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 border-opacity-100' : 'max-h-0 border-opacity-0 overflow-hidden'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white hover:text-blue-400 transition-colors text-left py-2"
          >
            Beranda
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white hover:text-blue-400 transition-colors text-left py-2"
          >
            Tentang
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-white hover:text-blue-400 transition-colors text-left py-2"
          >
            Fitur
          </button>
          <button 
            onClick={() => {
              scrollToSection('order');
              setIsMobileMenuOpen(false);
            }} 
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition duration-300 w-full text-center"
          >
            Pesan Sekarang
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
