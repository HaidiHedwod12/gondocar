import React, { useState, useEffect, useRef } from 'react';
import { useCar } from '../context/CarContext';

const Gallery = () => {
  const { currentCar, allVariants, cars } = useCar();
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Definisi struktur galeri dengan harga
  const galleryImages = {
    SUV: [
      { id: 'suv-default', src: '/assets/images/cars/gondo-suv.png', color: 'Default', price: cars.SUV.price },
      { id: 'suv-black', src: '/assets/images/cars/gondo-suv-black.png', color: 'Hitam', price: cars.SUV.price },
      { id: 'suv-grey', src: '/assets/images/cars/gondo-suv-grey.png', color: 'Abu-abu', price: cars.SUV.price },
      { id: 'suv-red', src: '/assets/images/cars/gondo-suv-red.png', color: 'Merah', price: cars.SUV.price },
      { id: 'suv-white', src: '/assets/images/cars/gondo-suv-white.png', color: 'Putih', price: cars.SUV.price }
    ],
    Sport: [
      { id: 'sport-default', src: '/assets/images/cars/gondo-sport.png', color: 'Default', price: cars.Sport.price },
      { id: 'sport-black', src: '/assets/images/cars/gondo-sport-black.png', color: 'Hitam', price: cars.Sport.price },
      { id: 'sport-blue', src: '/assets/images/cars/gondo-sport-blue.png', color: 'Biru Racing', price: cars.Sport.price },
      { id: 'sport-grey', src: '/assets/images/cars/gondo-sport-grey.png', color: 'Abu-abu', price: cars.Sport.price },
      { id: 'sport-white', src: '/assets/images/cars/gondo-sport-white.png', color: 'Putih Pearl', price: cars.Sport.price }
    ],
    Sedan: [
      { id: 'sedan-default', src: '/assets/images/cars/gondo-sedan.png', color: 'Default', price: cars.Sedan.price },
      { id: 'sedan-black', src: '/assets/images/cars/gondo-sedan-black.png', color: 'Hitam', price: cars.Sedan.price },
      { id: 'sedan-burgundy', src: '/assets/images/cars/gondo-sedan-burgundy.png', color: 'Burgundy', price: cars.Sedan.price },
      { id: 'sedan-grey', src: '/assets/images/cars/gondo-sedan-grey.png', color: 'Abu-abu', price: cars.Sedan.price },
      { id: 'sedan-silver', src: '/assets/images/cars/gondo-sedan-silver.png', color: 'Silver', price: cars.Sedan.price },
      { id: 'sedan-white', src: '/assets/images/cars/gondo-sedan-white.png', color: 'Putih', price: cars.Sedan.price }
    ]
  };
  
  // Mendapatkan semua gambar untuk tampilan "All"
  const allImages = [...galleryImages.SUV, ...galleryImages.Sport, ...galleryImages.Sedan];
  
  // Filter gambar berdasarkan tab aktif
  const getFilteredImages = () => {
    if (activeTab === 'all') return allImages;
    return galleryImages[activeTab] || [];
  };
  
  // Animasi muncul saat scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Popup untuk melihat gambar besar
  const [selectedImage, setSelectedImage] = useState(null);
  
  const openImage = (image) => {
    setSelectedImage(image);
  };
  
  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section 
      ref={sectionRef}
      id="gallery" 
      className="py-20 px-6 md:px-16 relative"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/assets/images/section3.jpg')",
          opacity: 0.7
        }}
      ></div>
      
      {/* Overlay untuk memastikan konten terlihat jelas */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-gray-900/80"></div>
      
      {/* Judul section */}
      <div 
        className={`text-center mb-12 transform transition-all duration-1000 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Galeri <span className="text-blue-400">Gondo</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Jelajahi berbagai varian dan warna Gondo yang tersedia untuk memenuhi selera dan gaya hidup Anda.
        </p>
      </div>
      
      {/* Filter tabs */}
      <div 
        className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <button
          onClick={() => setActiveTab('all')}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeTab === 'all'
              ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
              : 'bg-gray-800/70 text-gray-300 border border-gray-700 hover:bg-gray-700/70'
          }`}
        >
          Semua
        </button>
        
        {allVariants.map((variant) => (
          <button
            key={variant}
            onClick={() => setActiveTab(variant)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === variant
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-800/70 text-gray-300 border border-gray-700 hover:bg-gray-700/70'
            }`}
          >
            {variant}
          </button>
        ))}
      </div>
      
      {/* Gallery grid */}
      <div 
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transform transition-all duration-1000 delay-400 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {getFilteredImages().map((image, index) => (
          <div 
            key={image.id}
            className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-gradient-to-b from-gray-800/60 to-gray-900/80 border border-gray-700/40 cursor-pointer"
            onClick={() => openImage(image)}
            style={{ 
              animationDelay: `${index * 100}ms`,
              animation: isVisible ? 'fadeIn 0.5s ease forwards' : 'none'
            }}
          >
            <div className="aspect-w-16 aspect-h-9 p-4">
              <img 
                src={image.src} 
                alt={`Gondo ${image.color}`} 
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white font-medium">{image.color}</p>
                  <p className="text-gray-400 text-sm">{image.id.split('-')[0].charAt(0).toUpperCase() + image.id.split('-')[0].slice(1)}</p>
                </div>
                <p className="text-blue-400 font-medium">{image.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Image popup */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={closeImage}>
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={`Gondo ${selectedImage.color}`} 
              className="w-full h-full object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-md h-10 w-10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition duration-300"
              onClick={closeImage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/50 backdrop-blur-sm rounded-lg">
              <div className="flex justify-between items-center">
                <p className="text-white text-lg font-medium">
                  Gondo {selectedImage.id.split('-')[0].charAt(0).toUpperCase() + selectedImage.id.split('-')[0].slice(1)} - {selectedImage.color}
                </p>
                <p className="text-blue-400 text-lg font-medium">{selectedImage.price}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;