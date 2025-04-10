import React, { useState, useEffect, useRef } from 'react';
import { useCar } from '../context/CarContext';

const About = () => {
  const { allVariants, cars } = useCar();
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 md:px-16 relative"
      id="about"
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
          Tentang <span className="text-blue-400">Gondo</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Gondo adalah mobil keluarga premium yang menggabungkan kenyamanan, teknologi, dan gaya dalam satu paket yang sempurna. 
          Dirancang untuk memberikan pengalaman berkendara terbaik bagi Anda dan keluarga.
        </p>
      </div>
      
      {/* Informasi utama */}
      <div 
        className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/40 rounded-xl p-8 mb-16 transform transition-all duration-1000 delay-300 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Filosofi Desain</h3>
            <p className="text-gray-300 mb-4">
              Gondo hadir dengan filosofi desain yang mengutamakan keseimbangan antara estetika, kenyamanan, dan fungsionalitas. 
              Setiap lekuk dan garis pada eksteriornya dirancang untuk menghasilkan tampilan yang elegan namun tetap dinamis.
            </p>
            <p className="text-gray-300 mb-4">
              Interior Gondo menghadirkan ruang kabin yang luas dengan sentuhan material premium yang memberikan rasa nyaman 
              dan mewah selama perjalanan. Sistem hiburan dan konektivitas modern memastikan Anda tetap terhubung sepanjang perjalanan.
            </p>
            <p className="text-gray-300">
              Didukung oleh teknologi mesin terkini dan fitur keselamatan terdepan, Gondo tidak hanya menawarkan performa yang handal 
              tetapi juga ketenangan pikiran bagi Anda dan keluarga saat berkendara.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/assets/images/car-interior.jpg" 
              alt="Interior Gondo" 
              className="rounded-lg shadow-lg max-h-80 object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* 3 Varian Gondo */}
      <h3 className={`text-2xl font-bold text-white mb-8 text-center relative z-10 transform transition-all duration-1000 delay-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        Varian <span className="text-blue-400">Gondo</span>
      </h3>
      
      <div 
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-700 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {allVariants.map((variant) => (
          <div
            key={variant}
            className="backdrop-blur-sm bg-gradient-to-b from-gray-800/60 to-gray-900/80 border border-gray-700/40 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={cars[variant].image}
                alt={`Gondo ${variant}`}
                className="w-full h-full object-contain object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-2">Gondo {variant}</h4>
              <p className="text-gray-300 text-sm mb-4">{cars[variant].tagline}</p>
              <div className="mb-4">
                <p className="text-white font-semibold">{cars[variant].price}</p>
              </div>
              
              {/* Warna yang tersedia */}
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Warna Tersedia:</p>
                <div className="flex flex-wrap gap-2">
                  {cars[variant].colors.map((color) => (
                    <div 
                      key={color.name} 
                      className="group relative"
                      title={color.name}
                    >
                      <div 
                        className={`w-6 h-6 rounded-full border border-gray-600 cursor-pointer hover:scale-110 transition-transform duration-300`}
                        style={{
                          backgroundColor: getColorCode(color.name)
                        }}
                      ></div>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300">
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a 
                href="#features" 
                className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300 text-sm"
              >
                Lihat Fitur
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Fungsi untuk mendapatkan kode warna berdasarkan nama warna
function getColorCode(colorName) {
  const colorMap = {
    'Putih': '#ffffff',
    'Putih Pearl': '#f5f5f5',
    'Hitam': '#202020',
    'Hitam Metalik': '#2a2a2a',
    'Abu-abu': '#808080',
    'Silver': '#c0c0c0',
    'Merah': '#d32f2f',
    'Biru Racing': '#1e3a8a',
    'Burgundy': '#800020'
  };
  
  return colorMap[colorName] || '#cccccc';
}

export default About;