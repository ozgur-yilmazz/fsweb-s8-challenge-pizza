import React from 'react';  
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-sectionLogo">
            <img src="/images/iteration-2-images/footer/logo-footer.svg" alt="Teknolojik Yemekler Logo" />
            <div className='social-icons'>
              <div className='location'>
                <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="Konum" />
                <p>341 Londonderry Road, Istanbul Turkiye</p>
              </div>
              <div className='mail'>
                <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="Email" />
                <p>aciktim@teknolojikyemekler.com</p>
              </div>
              <div className='phone'>
                <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="Telefon" />
                <p>+90 216 123 45 67</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <h3>Sıccacık Menuler</h3>
          <div className="footer-section">
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>UseEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
        </div>

        <div className="footer-right">
          <h3>Instagram</h3>
          <div className="footer-insta-section">
            <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="Instagram 1" />
            <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="Instagram 2" />
            <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="Instagram 3" />
            <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="Instagram 4" />
            <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="Instagram 5" />
            <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="Instagram 6" />
          </div>
        </div>
      </div>
      
      <div className="footer-copyright">
        <p>&copy; 2023 Teknolojik Yemekler.</p>
      </div>
    </footer>
  );
};

export default Footer;