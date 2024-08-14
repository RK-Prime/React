// useSelector Hook for selector 
import { useSelector } from "react-redux";

import RestaurantItem from "./RestaurantItem";

// useDispatch Hook for dispatch
import { useDispatch } from "react-redux";
import { clearCart } from "../functions.js/cartSlice";


export const Cart = () =>{

    let items = useSelector((store)=>store.cart.items);

    let dispatch = useDispatch();

    function handleClearCart(){
        dispatch(clearCart());
    }

    return(
        <div style={{top:'100px'}}>
            <button onClick={handleClearCart}>Clear Cart</button>
            {items.map((itemInfoVal)=>{
             // console.log(itemInfoVal);
            return(
                <RestaurantItem itemInfo={itemInfoVal}/>
            )
            })}
        </div>
    )
}