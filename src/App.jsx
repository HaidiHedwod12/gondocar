import React from 'react';
import LandingPage from './pages/LandingPage';
import { CarProvider } from './context/CarContext';
import { OrderProvider } from './context/OrderContext';
import './styles/index.css';

const App = () => {
  return (
    <CarProvider>
      <OrderProvider>
        <LandingPage />
      </OrderProvider>
    </CarProvider>
  );
};

export default App;
