import { useEffect } from "react"
import { useParams } from "react-router-dom";

export const RestaurantMenu = ()=>{

    const params = useParams();
    console.log(params);

    useEffect(()=>{
        fetchMenu()
    });

    async function fetchMenu(){
        const menu_data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.9000799&lng=78.0682684&restaurantId=${params.resId}&catalog_qa=undefined&submitAction=ENTER`);
        const resmenu_data = await menu_data.json();
        console.log(resmenu_data);
        
        let arr_a = resmenu_data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards;
        let arr_b = arr_a[12].card.card.itemCards;

        console.log(arr_b)

        // console.log(resmenu_data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[12].card.card.itemCards[0].card.info.description);
        
        // for(let i=0;i<arr_b.length;i++){

        //     console.log(arr_b[i].card.info.description);
        // }
    
    }



    return(
        <div style={{position:'absolute', top:'100px'}}>
        <h1>Restaurant Menu for Swiggy Clone</h1>
        <h1>Restaurant Menu for Swiggy Clone</h1>
        <h1>Restaurant Menu for Swiggy Clone</h1>
    </div>
    )
}