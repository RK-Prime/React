import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faLifeRing, faCartShopping,faPercentage, faCircle} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// selector Hook from React-Redux,
// it helps us to get item from the store slices, according to our requirements
// import { useSelector } from 'react-redux';

// React Hook to read or access Context created
import { useContext } from 'react';

// custom made context, i.e. userContext
import UserContext from '../functions.js/userContext.js';

const Header = ()=>{

    // State definition for SignUp visibility

    const [status, setStatus] = useState(true);

    // const [dataItems, setdataItems] = useState([]);


    // const cartItems = useSelector((store)=>store.cart.items);
    // Here, we are getting the items array stored inside the slice,
    // with name cart, and slice present inside the appStore.
    
    const {cartitems, setCartItems, setIsVisible, cartitemslen, setCartItemslen} = useContext(UserContext);


    useEffect(()=>{
        onlineStatus();
        sessionStorage.getItem('UserID') ? Cart_fetch() : console.log('Login to view Cart!!');
    },[])

    function onlineStatus(){
        window.addEventListener('online', function(){
            setStatus(true)
        })
        window.addEventListener('offline', function(){
            setStatus(false)
        })
    }


    function Cart_fetch(){
        let data = fetch('http://localhost:5000/api/cart/getCartItem',{
            method : "POST",
            headers : {
                "Content-Type":"application/json",
            },
            mode : "cors",
            body: JSON.stringify({
                _id : sessionStorage.getItem('UserID')
            })
        })
        .then((response)=>{

            if(!response.ok){
                throw new Error(`Response Status : ${response.status}`);
            }

            // console.log(response);
            // let resjson = response.json();

            // setdataItems(resjson);

            // console.log(resjson);
            return response.json();
        })
        .then((data)=>{

            // console.log(data.cart);
            // setdataItems(data.cart);
            return data.cart;
        })

        const dataobj = ()=>{
            data.then((a)=>{
                // console.log(`a : ${a}`);
                // setdataItems(a);
                setCartItems(a);
                setCartItemslen(a.length);
                return a
            })
        }

        dataobj();

        // console.log(dataItems);

        // console.log(dataobj())

        return data;
    }

    // async function handleCartFetch(){
        
        // let CartItems = await Cart_fetch();

        // return CartItems;

        // console.log(`items : ${items()}`)

        // setdataItems(items);
    // }

    return(
        <nav id="headernav">
        <Link to="/"><img id="sitelogo" alt="sitelogo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_192,h_192/portal/c/logo_2022.png" /></Link>
            <ul>
            <li>
            <Link className='link'>{sessionStorage.getItem('UserName')}</Link>
            </li>
                <li className='onlineStatus'>Status : {status ? 
                <FontAwesomeIcon icon={faCircle} color='rgb(0, 200, 0)' />:
                <FontAwesomeIcon icon={faCircle} color='rgb(244, 0, 0)' />
                }</li>
                <li><Link className='link' to="/offers" preventScrollReset={true}><FontAwesomeIcon icon={faPercentage} />&nbsp;Offers</Link></li>
                <li><Link className='link' to="/help" preventScrollReset={true}><FontAwesomeIcon icon={faLifeRing} />&nbsp;Help</Link></li>
                <li><Link className='link' to="/cart" preventScrollReset={true}
                onClick={()=>{
                    // handleCartFetch();
                    console.log(cartitemslen);
                    // setdataItems(Cart_fetch())
                }}
                ><FontAwesomeIcon icon={faCartShopping} />&nbsp;Cart {cartitemslen == 0 ? cartitems.length : cartitemslen}</Link></li>
                {
                sessionStorage.getItem('AccessToken') ? 
                <li><Link className='link' preventScrollReset={true} 
                onClick={()=>{
                    sessionStorage.clear();
                    window.location.reload();
                }}>
                    <FontAwesomeIcon icon={faUser}/>&nbsp;Logout</Link>
                </li>
                    :
                <li><Link className='link' preventScrollReset={true} 
                    onClick={()=>{
                    setIsVisible(true);}
                }><FontAwesomeIcon icon={faUser}/>&nbsp;Login</Link></li>
                }
            </ul>
        </nav>
    )
}

export default Header;