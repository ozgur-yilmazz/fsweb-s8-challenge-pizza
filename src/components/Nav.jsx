import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() { 
    return (    
        <nav className="nav-container">
            <div className="nav-content">
                <h3 style={{margin: '0 0 0.5rem 0'}}>Teknolojik Yemekler</h3>
                <Link to="/" className="nav-link">
                    Anasayfa - Seçenekler - Sipariş Oluştur
                </Link>
            </div>
        </nav>
    );
}