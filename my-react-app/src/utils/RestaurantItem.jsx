import { faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorFunc } from "../functions.js/ComponentFunctions.js";
import { useContext } from "react";
import UserContext from "../functions.js/userContext.js";
// import { addItem } from "../functions.js/cartSlice.js";
// import { useDispatch } from 'react-redux';

// import $ from 'jquery';

const RestaurantItem = ({itemInfo})=>{

    const {cartitems, setCartItemslen, cartitemslen} = useContext(UserContext);

    // const dispatch = useDispatch();

    // Function for Dispatching an Action
    // const handleAddItem = (item)=>{
    //     dispatch(addItem(item));
    //     // dispatching the addItem function for the item value
    // }

    function addItem(iteminfo){
        console.log('Item Added!!');
        // console.log(iteminfo);

        fetch('http://localhost:5000/api/cart/addItem',{
            method:"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            mode:'cors',
            body: JSON.stringify({
                _id : sessionStorage.getItem('UserID'),
                cartitem : iteminfo
            })
        })
        .then((response)=>{
            
            if(!response.ok){
                throw new Error(`Response status : ${response.status}`)
            }

            console.log(sessionStorage.getItem('UserID'));

            return response.json();
        })
        .then((data)=>{
            console.log(`data : ${data}`)
            return data;
        })
        .catch((err)=>{
            console.log(`Error Occured!! : ${err}`);
        })
    }


    function cartlengthfunc(){

        setCartItemslen(cartitemslen + 1);

        // cartitems.length = cartitems.length + 1;

        console.log(cartitemslen);
    }

    function handleAddItem(itemInfo){
        addItem(itemInfo);
        // setCartItems(Array(cartitems.length()));
    }

    return(
    <div style={{margin:"0px 0px", padding:'0px'}}>
        <section className="itemSection" key={itemInfo.id}>
            <span>
                <h3 className="itemHead">{itemInfo.name}</h3>
                <p className='itemPrice'>₹{itemInfo.price/100}</p>
                    {
                    itemInfo.ratingCount > 0 ?
                        <p style={{color: colorFunc(itemInfo.rating)}} className='itemRating'>
                            <FontAwesomeIcon icon={faStar} style={{lineHeight:'2px'}}/> 
                            &nbsp;{itemInfo.rating}({itemInfo.ratingCount})</p>
                            :<p style={{color: colorFunc(itemInfo.rating)}} className='itemRating'>
                            <FontAwesomeIcon icon={faStar} />
                            &nbsp;{itemInfo.rating}</p>
                    }
                <p className='itemDesc'>{itemInfo.description}</p>
            </span>
            <span className='itemImgSpan'>
                <img alt={`img${itemInfo.imageId}`} src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${itemInfo.imageId}`}
                className = "itemImg"/>
                <button className="itemImgbtn" 
                onClick={()=>{
                    handleAddItem(itemInfo);
                    console.log(cartitems.length + 1);
                    cartlengthfunc()
                }}>Add+</button>
            </span>
        </section>
    </div>
    )
};

export default RestaurantItem;