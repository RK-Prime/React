import { faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorFunc } from "../functions.js/ComponentFunctions.js";
import { addItem } from "../functions.js/cartSlice.js";
import { useDispatch } from 'react-redux';

const RestaurantItem = ({itemInfo})=>{

    const dispatch = useDispatch();

    // Function for Dispatching an Action
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
        // dispatching the addItem function for the item value
    }

    return(
    <div style={{margin:" 5vh 0px 10vh 0px"}}>
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
                }}>Add+</button>
            </span>
        </section>
    </div>
    )
};

export default RestaurantItem;