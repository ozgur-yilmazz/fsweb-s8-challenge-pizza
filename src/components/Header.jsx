import {Link} from "react-router-dom";
import "./Header.css";

export default function Header(){
    return(
     <header className="site-header">
        <Link to="/">
            <img 
                src="/images/logo.svg" 
                alt="Logo" 
                className="brand__logo"
            />
        </Link>
     </header>
    );
}