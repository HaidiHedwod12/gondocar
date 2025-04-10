import React, { useState, useRef, useEffect } from 'react';
import { useCar } from '../context/CarContext';
import { useOrder } from '../context/OrderContext';

const OrderForm = () => {
  const { cars, currentCar, selectedCar, setSelectedCar, selectedColor, setSelectedColor, selectedColorImage, setSelectedColorImage, allVariants } = useCar();
  const { orderForm, updateOrderForm, orderStep, startOrder, confirmOrder, completeOrder, isOrdering } = useOrder();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Animasi masuk saat scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  // Handler untuk perubahan input
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateOrderForm(name, type === 'checkbox' ? checked : value);
  };

  // Handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    confirmOrder();
  };

  // Handler untuk memulai pemesanan
  const handleStartOrder = () => {
    console.log("Memulai pemesanan");
    startOrder(1);
  };

  // Handler untuk mengubah tipe mobil
  const handleCarTypeChange = (type) => {
    setSelectedCar(type);
    updateOrderForm('carType', type);
    updateOrderForm('price', cars[type].price);
    
    // Reset warna karena mobil berubah
    const defaultColor = cars[type].colors[0];
    setSelectedColor(defaultColor.name);
    setSelectedColorImage(defaultColor.image);
    updateOrderForm('color', defaultColor.name);
  };

  // Handler untuk mengubah warna
  const handleColorChange = (colorObj) => {
    setSelectedColor(colorObj.name);
    setSelectedColorImage(colorObj.image);
    updateOrderForm('color', colorObj.name);
  };

  // Render content berdasarkan tahap pemesanan
  const renderOrderContent = () => {
    console.log("Current order step:", orderStep);
    
    switch (orderStep) {
      case 0: // Belum mulai
        return (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Tertarik dengan Gondo {currentCar.name}?</h3>
            <p className="text-gray-400 mb-8">Pesan sekarang dan dapatkan penawaran khusus serta test drive gratis.</p>
            <button 
              onClick={(e) => {
                e.preventDefault();
                handleStartOrder();
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition duration-300"
            >
              Pesan Sekarang
            </button>
          </div>
        );
        
      case 1: // Form pemesanan
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Pesan Gondo</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pilihan tipe mobil */}
              <div>
                <label className="block text-gray-300 mb-3">Pilih Tipe Mobil</label>
                <div className="flex flex-wrap gap-3 mb-6">
                  {allVariants.map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      onClick={() => handleCarTypeChange(variant)}
                      className={`relative px-4 py-2 rounded-lg border ${
                        selectedCar === variant
                          ? 'border-blue-500 bg-blue-500/20'
                          : 'border-gray-700 bg-gray-800/50 hover:bg-gray-700/50'
                      } transition-all duration-200`}
                    >
                      <span className="text-white">Gondo {variant}</span>
                      <div className="text-xs text-gray-400 mt-1">{cars[variant].price}</div>
                      {selectedCar === variant && (
                        <span className="absolute -top-1 -right-1 bg-blue-500 w-3 h-3 rounded-full"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Data pribadi */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={orderForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-white"
                      placeholder="Nama lengkap Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={orderForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-white"
                      placeholder="email@contoh.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={orderForm.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-white"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-gray-300 mb-2">Alamat</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={orderForm.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-white"
                      placeholder="Alamat lengkap Anda"
                    />
                  </div>
                </div>
              </div>
              
              {/* Preview mobil dan pilihan warna */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Preview mobil */}
                <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-lg p-4 flex flex-col items-center justify-center">
                  <img 
                    src={selectedColorImage || currentCar.image} 
                    alt={`${currentCar.name} - ${selectedColor}`}
                    className="w-full h-auto max-h-60 object-contain transition-all duration-300 mb-3"
                  />
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white">Gondo {selectedCar}</h4>
                    <p className="text-blue-400 font-medium">{currentCar.price}</p>
                  </div>
                </div>
                
                {/* Pilihan warna */}
                <div>
                  <label className="block text-gray-300 mb-3">Pilih Warna</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {currentCar.colors.map((colorObj) => (
                      <button
                        key={colorObj.name}
                        type="button"
                        onClick={() => handleColorChange(colorObj)}
                        className={`relative px-4 py-2 rounded-lg border ${
                          selectedColor === colorObj.name
                            ? 'border-blue-500 bg-blue-500/20'
                            : 'border-gray-700 bg-gray-800/50 hover:bg-gray-700/50'
                        } transition-all duration-200`}
                      >
                        <span className="text-white">{colorObj.name}</span>
                        {selectedColor === colorObj.name && (
                          <span className="absolute -top-1 -right-1 bg-blue-500 w-3 h-3 rounded-full"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Opsi tambahan */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="downPayment"
                    name="downPayment"
                    checked={orderForm.downPayment}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-500 border-gray-700 rounded focus:ring-blue-500 bg-gray-800"
                  />
                  <label htmlFor="downPayment" className="ml-3 text-gray-300">
                    Saya ingin melakukan pembayaran DP (30%)
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="testDrive"
                    name="testDrive"
                    checked={orderForm.testDrive}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-500 border-gray-700 rounded focus:ring-blue-500 bg-gray-800"
                  />
                  <label htmlFor="testDrive" className="ml-3 text-gray-300">
                    Saya ingin melakukan test drive
                  </label>
                </div>
              </div>
              
              {/* Catatan tambahan */}
              <div>
                <label htmlFor="notes" className="block text-gray-300 mb-2">Catatan Tambahan (opsional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={orderForm.notes}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-white"
                  placeholder="Informasi tambahan yang ingin Anda sampaikan"
                ></textarea>
              </div>
              
              {/* Tombol submit */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => startOrder(0)}
                  className="px-6 py-3 bg-transparent border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition duration-300"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition duration-300"
                >
                  Lanjutkan
                </button>
              </div>
            </form>
          </div>
        );
        
      case 2: // Konfirmasi pesanan
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Konfirmasi Pesanan</h3>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 pb-4 border-b border-gray-700">
                <div>
                  <h4 className="text-xl font-semibold text-white">Gondo {selectedCar}</h4>
                  <p className="text-gray-400">Warna: {selectedColor}</p>
                  <div className="text-white font-bold mt-2">{currentCar.price}</div>
                  {orderForm.downPayment && (
                    <div className="text-blue-400 text-sm">DP: {parseInt(currentCar.price.replace(/[^0-9]/g, '')) * 0.3 / 1000000} Juta</div>
                  )}
                </div>
                
                <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 rounded-lg p-2 flex items-center justify-center">
                  <img 
                    src={selectedColorImage || currentCar.image} 
                    alt={`${currentCar.name} - ${selectedColor}`}
                    className="w-full h-auto max-h-48 object-contain"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Nama:</span>
                  <span className="text-white">{orderForm.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white">{orderForm.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Telepon:</span>
                  <span className="text-white">{orderForm.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Alamat:</span>
                  <span className="text-white">{orderForm.address}</span>
                </div>
                {orderForm.testDrive && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Test Drive:</span>
                    <span className="text-green-400">Ya</span>
                  </div>
                )}
                {orderForm.notes && (
                  <div className="mt-4">
                    <span className="text-gray-400 block mb-1">Catatan:</span>
                    <span className="text-white">{orderForm.notes}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-end gap-4">
              <button
                onClick={() => startOrder(1)}
                className="px-6 py-3 bg-transparent border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Kembali
              </button>
              <button
                onClick={completeOrder}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition duration-300"
              >
                Konfirmasi Pesanan
              </button>
            </div>
          </div>
        );
        
      case 3: // Selesai
        return (
          <div className="text-center">
            <div className="inline-block bg-green-500/20 p-4 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Pesanan Berhasil!</h3>
            <p className="text-gray-400 mb-8">
              Terima kasih telah memesan Gondo {currentCar.name}. Tim kami akan menghubungi Anda dalam 24 jam ke depan untuk konfirmasi lebih lanjut.
            </p>
            <button 
              onClick={() => startOrder(0)} 
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition duration-300"
            >
              Kembali ke Halaman Utama
            </button>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="order"
      className="py-20 px-6 md:px-16 relative"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/assets/images/section4.jpg')",
          opacity: 0.6
        }}
      ></div>
      
      {/* Overlay untuk memastikan konten terlihat jelas */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
      
      <div 
        className={`max-w-3xl mx-auto backdrop-blur-sm bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/40 rounded-2xl shadow-xl p-8 transition-all duration-1000 relative z-10 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {renderOrderContent()}
      </div>
    </section>
  );
};

export default OrderForm;