import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css'; 

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-card cta-card--large">
        <h2>Özel<br/>Lezzetus</h2>
        <p>Position: Absolute Acı Burger</p>
        <Link to="/order">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>

      <div className="cta-cards-right">
        <div className="cta-card cta-card--dark">
          <h3>Hackathlon<br/>Burger Menü</h3>
          <Link to="/order">
            <button>SİPARİŞ VER</button>
          </Link>
        </div>  
        
        <div className="cta-card cta-card--light">
          <h3><span style={{ color: "#CE2829" }}>Çook</span> hızlı<br/>npm gibi kurye</h3>
          <Link to="/order">
            <button>SİPARİŞ VER</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;