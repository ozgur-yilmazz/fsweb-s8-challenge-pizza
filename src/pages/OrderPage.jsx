import React from 'react';
import Header from '../components/Header';
import PizzaForm from '../components/PizzaForm';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const OrderPage = () => {
  return (
    <div>
      <Header />
      <PizzaForm />
      <Footer />
    </div>
  );
};

export default OrderPage;