import React from 'react';

const GradientEffect = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-20">
      {/* Lapisan gradasi utama */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900"
        style={{ opacity: 0.85 }}
      />
      
      {/* Lapisan gradasi tambahan untuk efek kedalaman */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-blue-900/10 to-transparent"
        style={{ opacity: 0.5 }}
      />
      
      {/* Lapisan noise untuk tekstur */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Efek vignette (gelap di pinggir) */}
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{ 
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
          opacity: 0.8
        }}
      />
      
      {/* Garis halus untuk efek elegan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        {Array.from({ length: 5 }).map((_, index) => (
          <div 
            key={index}
            className="absolute bg-white/30" 
            style={{
              height: '1px',
              width: '100%',
              top: `${20 + index * 20}%`,
              transform: `rotate(${index % 2 === 0 ? '-5deg' : '5deg'})`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GradientEffect;
