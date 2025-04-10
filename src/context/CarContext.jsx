import React, { createContext, useState, useContext } from 'react';

// Data mobil
const carData = {
  SUV: {
    name: "Gondo SUV",
    tagline: "Kenyamanan untuk seluruh keluarga",
    image: "/assets/images/cars/gondo-suv.png",
    price: "Rp 435.000.000",
    features: [
      "Kapasitas 7 Penumpang",
      "Mesin 2.0L Turbo",
      "Kenyamanan Kabin Premium",
      "Sistem Hiburan Layar 10 inch",
      "Teknologi Keselamatan Terdepan"
    ],
    colors: [
      { name: "Putih", image: "/assets/images/cars/gondo-suv-white.png" },
      { name: "Hitam", image: "/assets/images/cars/gondo-suv-black.png" },
      { name: "Abu-abu", image: "/assets/images/cars/gondo-suv-grey.png" },
      { name: "Merah", image: "/assets/images/cars/gondo-suv-red.png" }
    ]
  },
  Sport: {
    name: "Gondo Sport",
    tagline: "Performa dan gaya dalam satu paket",
    image: "/assets/images/cars/gondo-sport.png",
    price: "Rp 520.000.000",
    features: [
      "Mesin 2.5L Turbo",
      "Akselerasi 0-100 km/jam dalam 6.5 detik",
      "Sport Mode dengan Paddle Shift",
      "Kabin dengan Aksen Carbon Fiber",
      "Suspensi Adaptif"
    ],
    colors: [
      { name: "Biru Racing", image: "/assets/images/cars/gondo-sport-blue.png" },
      { name: "Hitam Metalik", image: "/assets/images/cars/gondo-sport-black.png" },
      { name: "Putih Pearl", image: "/assets/images/cars/gondo-sport-white.png" },
      { name: "Abu-abu", image: "/assets/images/cars/gondo-sport-grey.png" }
    ]
  },
  Sedan: {
    name: "Gondo Sedan",
    tagline: "Elegan dan efisien untuk keseharian",
    image: "/assets/images/cars/gondo-sedan.png",
    price: "Rp 380.000.000",
    features: [
      "Mesin 1.5L Hybrid",
      "Hemat Bahan Bakar hingga 24 km/liter",
      "Kabin Kedap Suara",
      "Fitur Parkir Otomatis",
      "Konektivitas Smartphone"
    ],
    colors: [
      { name: "Silver", image: "/assets/images/cars/gondo-sedan-silver.png" },
      { name: "Hitam", image: "/assets/images/cars/gondo-sedan-black.png" },
      { name: "Putih", image: "/assets/images/cars/gondo-sedan-white.png" },
      { name: "Burgundy", image: "/assets/images/cars/gondo-sedan-burgundy.png" },
      { name: "Abu-abu", image: "/assets/images/cars/gondo-sedan-grey.png" }
    ]
  }
};

// Membuat context
const CarContext = createContext();

// Custom hook untuk menggunakan context
export const useCar = () => useContext(CarContext);

// Provider component
export const CarProvider = ({ children }) => {
  const [selectedCar, setSelectedCar] = useState("SUV");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorImage, setSelectedColorImage] = useState(null);
  
  // Set warna default saat mobil dipilih
  React.useEffect(() => {
    const defaultColor = carData[selectedCar].colors[0];
    setSelectedColor(defaultColor.name);
    setSelectedColorImage(defaultColor.image);
  }, [selectedCar]);
  
  // Nilai yang akan dibagikan ke seluruh komponen
  const value = {
    cars: carData,
    selectedCar,
    setSelectedCar,
    currentCar: carData[selectedCar],
    selectedColor,
    setSelectedColor,
    selectedColorImage,
    setSelectedColorImage,
    allVariants: Object.keys(carData)
  };
  
  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
};

export default CarContext;