import React from 'react';
import "./OrderSummary.css";

const OrderSummary = ({ orderData }) => {
  if (!orderData) {
    return (
      <div className="order-summary">
        <p>Lezzetin Adı</p>
        <h1>Siparişin Alındı</h1>
      </div>
    );
  }

  const { originalData, pizzaName } = orderData;

  // Boyut etiketini bul
  const getSizeLabel = (size) => {
    const sizeMap = {
      'small': 'L',
      'medium': 'M', 
      'large': 'L'
    };
    return sizeMap[size] || 'L';
  };

  // Hamur etiketini bul
  const getCrustLabel = (crust) => {
    const crustMap = {
      'ince': 'Süpper İnce',
      'kalın': 'Kalın'
    };
    return crustMap[crust] || 'Süpper İnce';
  };

  return (
    <div className="order-summary">
      <div className="order-summary-container">
        <h1 className="brand-title">Teknolojik Yemekler</h1>
        
        <div className="success-message">
          <p className="tagline">lezzetin yolda</p>
          <h2 className="main-title">SİPARİŞ ALINDI</h2>
          <div className="divider"></div>
        </div>

        <div className="pizza-info">
          <h3 className="pizza-name">{pizzaName}</h3>
          
          <div className="order-details">
            <p><strong>Boyut:</strong> {getSizeLabel(originalData.size)}</p>
            <p><strong>Hamur:</strong> {getCrustLabel(originalData.crust)}</p>
            <p><strong>Ek Malzemeler:</strong> {originalData.ingredients.join(', ')}</p>
          </div>
        </div>

        <div className="order-total">
          <div className="total-box">
            <h4>Sipariş Toplamı</h4>
            <div className="total-row">
              <span>Seçimler</span>
              <span>{(originalData.ingredients.length * 5).toFixed(2)}₺</span>
            </div>
            <div className="total-row final-total">
              <span>Toplam</span>
              <span>{originalData.total.toFixed(2)}₺</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;