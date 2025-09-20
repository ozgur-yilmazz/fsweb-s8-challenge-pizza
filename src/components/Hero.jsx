import { Link} from "react-router-dom";
import "./hero.css";

export default function Hero(){   
    return( 
        <>
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero__center">
                <div className="hero__title" aria-label="Slogan">
                    <p className="hero__line">KOD ACIKTIRIR</p>
                    <p className="hero__line">PİZZA, DOYURUR</p>
                </div>

                <Link to="/order" className="hero__ctaWrap">
                    <button type="button" className="hero__cta" aria-label="Siparişe başla">
                        ACIKTIM
                    </button>
                </Link>
            </div>
            
            <div className="hero__categories">
                <div className="foodsList-container">
                    <div className="foods--pizza" aria-label="Pizza">
                        <img 
                            src="/images/iteration-2-images/icons/2.svg" 
                            alt="Pizza"
                        />
                        <p>Pizza</p>
                    </div>
                    <div className="foods--burger" aria-label="Burger">
                        <img 
                            src="/images/iteration-2-images/icons/3.svg" 
                            alt="Burger"            
                        />
                        <p>Burger</p>
                    </div>
                    <div className="foods--fries" aria-label="Fries">
                        <img 
                            src="/images/iteration-2-images/icons/4.svg" 
                            alt="Fries"            
                        />  
                        <p>Fries</p>
                    </div>      
                    <div className="foods--fast-food" aria-label="fast food">
                        <img 
                            src="/images/iteration-2-images/icons/5.svg" 
                            alt="Fast Food"            
                        />  
                        <p>Fast Food</p>
                    </div>
                    <div className="foods--beverages" aria-label="Beverages">
                        <img 
                            src="/images/iteration-2-images/icons/6.svg" 
                            alt="Beverages"            
                        />
                        <p>Beverages</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}