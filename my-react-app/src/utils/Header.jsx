import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faLifeRing, faCartShopping,faPercentage} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = ()=>{
    return(
        <nav id="headernav">
        <Link to="/"><img id="sitelogo" alt="sitelogo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_192,h_192/portal/c/logo_2022.png"></img></Link>
            <ul>
                <li><Link className='link' to="/offers"><FontAwesomeIcon icon={faPercentage} />&nbsp;Offers</Link></li>
                <li><Link className='link' to="/help"><FontAwesomeIcon icon={faLifeRing} />&nbsp;Help</Link></li>
                <li><Link className='link' to="/cart"><FontAwesomeIcon icon={faCartShopping} />&nbsp;Cart</Link></li>
                <li><Link className='link' to="/signin"><FontAwesomeIcon icon={faUser} />&nbsp;Sign In</Link></li>
            </ul>
        </nav>
    )
}

export default Header;