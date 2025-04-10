import React, { useState, useEffect, useRef } from 'react';
import { useCar } from '../context/CarContext';

const CarSelector = () => {
  const { selectedCar, setSelectedCar, allVariants, cars } = useCar();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Animasi masuk saat scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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

  // Fungsi untuk mengubah mobil yang dipilih
  const handleCarSelect = (variant) => {
    setSelectedCar(variant);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 md:px-16 relative"
      id="models"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/assets/images/section1.jpg')",
          opacity: 0.7
        }}
      ></div>
      
      {/* Overlay untuk memastikan konten terlihat jelas */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80"></div>
      
      {/* Judul section */}
      <div 
        className={`text-center mb-12 transform transition-all duration-1000 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pilih Varian <span className="text-blue-400">Gondo</span> Anda
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Temukan varian Gondo yang sesuai dengan kebutuhan dan gaya hidup Anda. Setiap varian dirancang dengan standar kenyamanan tertinggi.
        </p>
      </div>
      
      {/* Tab selector untuk varian mobil */}
      <div 
        className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-300 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {allVariants.map((variant) => (
          <button
            key={variant}
            onClick={() => handleCarSelect(variant)}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCar === variant
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-800/70 text-gray-300 border border-gray-700 hover:bg-gray-700/70'
            }`}
          >
            Gondo {variant}
          </button>
        ))}
      </div>
      
      {/* Kartu informasi varian */}
      <div 
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 transform transition-all duration-1000 delay-500 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {allVariants.map((variant) => (
          <div
            key={variant}
            onClick={() => handleCarSelect(variant)}
            className={`relative overflow-hidden rounded-2xl backdrop-blur-sm bg-gradient-to-b from-gray-800/60 to-gray-900/80 border ${
              selectedCar === variant
                ? 'border-blue-500/50 shadow-lg shadow-blue-500/10'
                : 'border-gray-700/30'
            } p-6 cursor-pointer group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5`}
          >
            {/* Highlight untuk yang dipilih */}
            {selectedCar === variant && (
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            )}
            
            {/* Gambar mobil */}
            <div className="mb-4 h-40 overflow-hidden relative">
              <img
                src={cars[variant].image}
                alt={`Gondo ${variant}`}
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Efek highlight di belakang gambar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-blue-500/30 blur-xl rounded-full"></div>
            </div>
            
            {/* Informasi varian */}
            <h3 className="text-xl font-bold text-white mb-2">Gondo {variant}</h3>
            <p className="text-gray-300 text-sm mb-4">{cars[variant].tagline}</p>
            
            {/* Detail harga */}
            <div className="text-white font-semibold">{cars[variant].price}</div>
            
            {/* Indikator selection */}
            <div className={`mt-4 text-sm ${
              selectedCar === variant ? 'text-blue-400' : 'text-gray-400'
            }`}>
              {selectedCar === variant ? 'Dipilih' : 'Klik untuk memilih'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarSelector;