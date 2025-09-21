import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import OrderSummary from '../components/OrderSummary';
import Footer from '../components/Footer';

const SuccessPage = () => {
  const location = useLocation();
  const history = useHistory();
  const orderData = location.state?.orderData;

  // Eğer direkt URL'den gelindiyse ana sayfaya yönlendir
  if (!orderData) {
    history.push('/');
    return null;
  }

  return (
    <div>
      <OrderSummary orderData={orderData} />
    </div>
  );
};

export default SuccessPage;
      
