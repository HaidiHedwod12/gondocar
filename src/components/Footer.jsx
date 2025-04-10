import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/assets/images/footer.jpg')",
          opacity: 0.7
        }}
      ></div>
      
      {/* Overlay untuk memastikan konten terlihat jelas */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/80 to-gray-900/70"></div>
      
      {/* Garis pemisah dengan efek gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo dan informasi */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">Gondo</h2>
              <p className="text-blue-400 text-sm">Kenyamanan Untuk Keluarga</p>
            </div>
            <p className="text-gray-300 mb-6">
              Temukan kenyamanan berkendara bersama keluarga dengan Gondo, mobil keluarga premium dengan desain elegan dan teknologi terdepan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.46a8.66 8.66 0 01-2.48.68 4.33 4.33 0 001.9-2.38c-.83.5-1.78.86-2.76 1.06a4.31 4.31 0 00-7.34 3.92 12.23 12.23 0 01-8.88-4.5 4.32 4.32 0 001.33 5.74 4.28 4.28 0 01-1.95-.54v.05a4.3 4.3 0 003.45 4.21 4.3 4.3 0 01-1.94.08 4.31 4.31 0 004.02 2.99A8.65 8.65 0 012 18.23a12.2 12.2 0 006.6 1.93c7.9 0 12.24-6.55 12.24-12.23 0-.18 0-.37-.01-.55a8.68 8.68 0 002.14-2.22l.03-.01z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c-2.71 0-3.06.01-4.12.06-1.07.05-1.8.22-2.43.46-.66.26-1.21.6-1.77 1.16-.56.56-.9 1.11-1.16 1.77-.25.63-.41 1.36-.46 2.43-.05 1.06-.06 1.41-.06 4.12 0 2.71.01 3.06.06 4.12.05 1.07.22 1.8.46 2.43.26.66.6 1.21 1.16 1.77.56.56 1.11.9 1.77 1.16.63.25 1.36.41 2.43.46 1.06.05 1.41.06 4.12.06 2.71 0 3.06-.01 4.12-.06 1.07-.05 1.8-.22 2.43-.46.66-.26 1.21-.6 1.77-1.16.56-.56.9-1.11 1.16-1.77.25-.63.41-1.36.46-2.43.05-1.06.06-1.41.06-4.12 0-2.71-.01-3.06-.06-4.12-.05-1.07-.22-1.8-.46-2.43-.26-.66-.6-1.21-1.16-1.77-.56-.56-1.11-.9-1.77-1.16-.63-.25-1.36-.41-2.43-.46-1.06-.05-1.41-.06-4.12-.06zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.2 1.86.34.46.18.8.4 1.15.75.34.34.57.69.75 1.15.13.35.3.88.34 1.86.05 1.05.06 1.37.06 4.04 0 2.67-.01 2.99-.06 4.04-.04.98-.2 1.5-.34 1.86-.18.46-.4.8-.75 1.15-.34.34-.69.57-1.15.75-.35.13-.88.3-1.86.34-1.05.05-1.37.06-4.04.06-2.67 0-2.99-.01-4.04-.06-.98-.04-1.5-.2-1.86-.34-.46-.18-.8-.4-1.15-.75-.34-.34-.57-.69-.75-1.15-.13-.35-.3-.88-.34-1.86-.05-1.05-.06-1.37-.06-4.04 0-2.67.01-2.99.06-4.04.04-.98.2-1.5.34-1.86.18-.46.4-.8.75-1.15.34-.34.69-.57 1.15-.75.35-.13.88-.3 1.86-.34 1.05-.05 1.37-.06 4.04-.06z" />
                  <path d="M12 14.97a2.97 2.97 0 110-5.94 2.97 2.97 0 010 5.94zm0-7.54a4.57 4.57 0 100 9.14 4.57 4.57 0 000-9.14zm5.84-.2a1.07 1.07 0 11-2.14 0 1.07 1.07 0 012.14 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-2.46 8.2L16 11.61V16h-2v-4.39l-.54-.4-1.46-1.1V8.7l4 3.1 4-3.1v1.4l-1.46 1.1z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Beranda</a></li>
              <li><a href="#models" className="text-gray-300 hover:text-blue-400 transition-colors">Model</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Fitur</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-blue-400 transition-colors">Galeri</a></li>
              <li><a href="#order" className="text-gray-300 hover:text-blue-400 transition-colors">Pemesanan</a></li>
            </ul>
          </div>
          
          {/* Kontak */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Jl. Mobilindo No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-300">+62 123 4567 890</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-300">info@gondo.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Gondo Motors. Hak Cipta Dilindungi.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-gray-300 transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Syarat &amp; Ketentuan</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Peta Situs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;