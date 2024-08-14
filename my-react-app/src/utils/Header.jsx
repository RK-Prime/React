import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faLifeRing, faCartShopping,faPercentage, faCircle} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// selector Hook from React-Redux,
// it helps us to get item from the store slices, according to our requirements
import { useSelector } from 'react-redux';

// React Hook to read or access Context created
import { useContext } from 'react';

// custom made context, i.e. userContext
import UserContext from '../functions.js/userContext.js';

const Header = ()=>{

    // State definition for SignUp visibility

    const [status, setStatus] = useState(true);

    const cartItems = useSelector((store)=>store.cart.items);
    // Here, we are getting the items array stored inside the slice,
    // with name cart, and slice present inside the appStore.
    
    const { user, setIsVisible } = useContext(UserContext);


    function onlineStatus(){
        window.addEventListener('online', function(){
            setStatus(true)
        })
        window.addEventListener('offline', function(){
            setStatus(false)
        })
    }

    useEffect(()=>{
        onlineStatus();
    },[])

    return(
        <nav id="headernav">
        <Link to="/"><img id="sitelogo" alt="sitelogo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_192,h_192/portal/c/logo_2022.png" /></Link>
            <ul>
            <li>
            <Link className='link'>{user}</Link> 
            </li>
                <li className='onlineStatus'>Status : {status ? 
                <FontAwesomeIcon icon={faCircle} color='rgb(0, 200, 0)' />:
                <FontAwesomeIcon icon={faCircle} color='rgb(244, 0, 0)' />
                }</li>
                <li><Link className='link' to="/offers" preventScrollReset={true}><FontAwesomeIcon icon={faPercentage} />&nbsp;Offers</Link></li>
                <li><Link className='link' to="/help" preventScrollReset={true}><FontAwesomeIcon icon={faLifeRing} />&nbsp;Help</Link></li>
                <li><Link className='link' to="/cart" preventScrollReset={true}><FontAwesomeIcon icon={faCartShopping} />&nbsp;Cart{cartItems.length}</Link></li>
                <li><Link className='link' preventScrollReset={true} 
                onClick={()=>{
                    setIsVisible(true)
                    }
                }><FontAwesomeIcon icon={faUser}/>&nbsp;Sign Up</Link></li>
            </ul>
        </nav>
    )
}

export default Header;