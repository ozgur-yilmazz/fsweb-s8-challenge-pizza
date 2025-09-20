import React from 'react';
import Header from '../components/Header';
import OrderSummary from '../components/OrderSummary';
import Footer from '../components/Footer';

const SuccessPage = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Siparişiniz Alındı!</h1>
        <p>Pizza'nız hazırlanıyor...</p>
        <OrderSummary />
      </div>
      <Footer />
    </div>
  );
};

export default SuccessPage;