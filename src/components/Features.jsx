import React, { useRef, useState, useEffect } from 'react';
import { useCar } from '../context/CarContext';

const Features = () => {
  const { currentCar, selectedCar, setSelectedCar, allVariants, cars } = useCar();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(selectedCar);

  // Animasi masuk saat scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
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

  // Update selected car when tab changes
  useEffect(() => {
    setSelectedCar(activeTab);
  }, [activeTab, setSelectedCar]);

  // Daftar fitur kenyamanan (umum untuk semua mobil)
  const comfortFeatures = [
    {
      title: "Kabin Senyap",
      description: "Isolasi suara premium mereduksi kebisingan jalan hingga 95%",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.06-5.656 5 5 0 00-1.06-1.416m2.828-9.9a9 9 0 00-2.828 2.828" />
        </svg>
      )
    },
    {
      title: "Kursi Ergonomis",
      description: "Dirancang dengan teknologi pendukung lumbar dan bahan premium",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Suspensi Adaptif",
      description: "Menyesuaikan secara otomatis dengan kondisi jalan untuk kenyamanan maksimal",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      )
    },
    {
      title: "Sistem Hiburan",
      description: "Layar sentuh HD dengan konektivitas smartphone dan premium audio",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Kontrol Iklim Multi-Zona",
      description: "Atur suhu berbeda untuk pengemudi dan penumpang",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Ruang Kabin Lega",
      description: "Dirancang untuk memberikan ruang maksimal bagi semua penumpang",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
        </svg>
      )
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="features"
      className="py-20 px-6 md:px-16 relative"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/assets/images/section2.jpg')",
          opacity: 0.65
        }}
      ></div>
      
      {/* Overlay untuk memastikan konten terlihat jelas */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-transparent to-gray-900/80"></div>
      
      {/* Judul section */}
      <div 
        className={`text-center mb-12 transition-all duration-1000 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Fitur <span className="text-blue-400">Unggulan</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Setiap varian Gondo dirancang dengan fitur-fitur terbaik untuk memberikan pengalaman berkendara yang tak tertandingi.
        </p>
      </div>
      
      {/* Tabs untuk pemilihan varian */}
      <div 
        className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
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
            Gondo {variant}
          </button>
        ))}
      </div>
      
      {/* Tampilan mobil dan fitur-fiturnya */}
      <div 
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 transform transition-all duration-1000 delay-300 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Gambar mobil */}
        <div className="backdrop-blur-sm bg-gradient-to-b from-gray-800/60 to-gray-900/80 border border-gray-700/40 rounded-xl p-6 flex justify-center items-center">
          <img 
            src={cars[activeTab].image} 
            alt={`Gondo ${activeTab}`} 
            className="max-h-80 object-contain transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Fitur-fitur khusus */}
        <div className="backdrop-blur-sm bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-xl p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Gondo {activeTab}
            </h3>
            <p className="text-gray-300">{cars[activeTab].tagline}</p>
            <p className="text-blue-400 font-semibold mt-2">{cars[activeTab].price}</p>
          </div>
          
          <h4 className="text-lg font-semibold text-white mb-4">Fitur Unggulan:</h4>
          <div className="space-y-4">
            {cars[activeTab].features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="bg-blue-500/30 rounded-full p-1 mt-1 group-hover:bg-blue-500/50 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Fitur Kenyamanan (Umum) */}
      <h3 className={`text-2xl font-bold text-white mb-8 text-center relative z-10 transform transition-all duration-1000 delay-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        Fitur <span className="text-blue-400">Kenyamanan</span> Premium
      </h3>
      
      {/* Grid fitur kenyamanan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {comfortFeatures.map((feature, index) => (
          <div 
            key={feature.title}
            className={`backdrop-blur-sm bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700/50 rounded-xl p-6 transition-all duration-1000 hover:shadow-lg hover:shadow-blue-500/5 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${150 * (index % 3) + 700}ms` }}
          >
            <div className="text-blue-400 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;