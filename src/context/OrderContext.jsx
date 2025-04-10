import React, { createContext, useState, useContext } from 'react';
import { useCar } from './CarContext';
import emailjs from 'emailjs-com';


// Membuat context
const OrderContext = createContext();

// Custom hook untuk menggunakan context
export const useOrder = () => useContext(OrderContext);

// Provider component
export const OrderProvider = ({ children }) => {
  const { currentCar, selectedColor, selectedCar } = useCar();
  
  // State untuk form pemesanan
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    carType: selectedCar,
    color: selectedColor,
    price: currentCar.price,
    downPayment: false,
    testDrive: false,
    notes: ''
  });
  
  // State untuk tahapan pemesanan
  const [orderStep, setOrderStep] = useState(0); // 0: belum mulai, 1: mengisi form, 2: konfirmasi, 3: selesai
  
  // Update form ketika mobil atau warna berubah
  React.useEffect(() => {
    if (currentCar && selectedColor) {
      setOrderForm(prev => ({
        ...prev,
        carType: selectedCar,
        color: selectedColor,
        price: currentCar.price
      }));
    }
  }, [currentCar, selectedColor, selectedCar]);
  
  // Fungsi untuk mengubah nilai form
  const updateOrderForm = (field, value) => {
    setOrderForm(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  // Fungsi untuk memulai pemesanan
  const startOrder = (step = 1) => {
    console.log("Starting order with step:", step); // Tambahkan logging
    setOrderStep(step);
  };
  
  // Fungsi untuk konfirmasi pesanan
  const confirmOrder = () => {
    setOrderStep(2);
  };
  
  // Fungsi untuk menyelesaikan pesanan
  const completeOrder = () => {
    // Kirim email pakai EmailJS
    const templateParams = {
      name: orderForm.name,
      email: orderForm.email,
      phone: orderForm.phone,
      address: orderForm.address,
      carType: orderForm.carType,
      color: orderForm.color,
      price: orderForm.price,
      downPayment: orderForm.downPayment ? 'Ya' : 'Tidak',
      testDrive: orderForm.testDrive ? 'Ya' : 'Tidak',
      notes: orderForm.notes || '-',
    };
  
    emailjs.send('Gondo', 'Gondo12', templateParams, 'RsGIMmdXbpwM_-z1B')
      .then(() => {
        console.log("Email sent successfully.");
      })
      .catch((error) => {
        console.error("Email failed:", error);
      });
  
    setOrderStep(3);
  
    // Reset form setelah 5 detik
    setTimeout(() => {
      setOrderStep(0);
      setOrderForm({
        name: '',
        email: '',
        phone: '',
        address: '',
        carType: selectedCar,
        color: selectedColor,
        price: currentCar.price,
        downPayment: false,
        testDrive: false,
        notes: ''
      });
    }, 5000);
  };
  
  
  // Nilai yang akan dibagikan ke seluruh komponen
  const value = {
    orderForm,
    updateOrderForm,
    orderStep,
    startOrder,
    confirmOrder,
    completeOrder,
    isOrdering: orderStep > 0
  };
  
  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};

export default OrderContext;