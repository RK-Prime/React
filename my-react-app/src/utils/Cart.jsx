// useSelector Hook for selector 
// import { useSelector } from "react-redux";

import { useContext } from "react";
import RestaurantItem from "./RestaurantItem";
import UserContext from "../functions.js/userContext";

// useDispatch Hook for dispatch
// import { useDispatch } from "react-redux";
// import { clearCart } from "../functions.js/cartSlice";


export const Cart = () =>{

    // let items = useSelector((store)=>store.cart.items);

    // let dispatch = useDispatch();

    // function handleClearCart(){
    //     dispatch(clearCart());
    // }

    const {cartitems} = useContext(UserContext);

    console.log(`cartitems : ${cartitems}`);
    console.log(typeof(cartitems));

    function clearCart(){
        console.log('Cart cleared!!');
    }

    function handleClearCart(){
        clearCart();
    }

    // function clearCartfunc(){

    // }


    return(
        <div style={{top:'100px'}}>
            <button type='button' 
                onClick={ handleClearCart}
                >Clear Cart</button>
            {cartitems.map((itemInfoVal)=>{
             // console.log(itemInfoVal);
            return(
            <>
                
                <RestaurantItem itemInfo={itemInfoVal}/>
            </>
            )
            })}
        </div>
    )
}