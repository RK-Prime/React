import Rescard from "./Cards";
import Search from "./Search";
import { useEffect, useState } from "react";
import TopRated from "./TopRatedFilter";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  // Hook =>
  // useState Hook => Most used hook in react
  const [restaurants, set_restaurants] = useState([]);
  const [restaurantList, set_restaurantList] = useState(restaurants);

  // Ques: Why are we using two use States ?
  /*
    Ans: Here we are taking two useState as one of them(restaurants) is acting as a primary
    list, containing all the restaurant cards data from the API call, and the other (restaurantList)
    is acting as a secondary list, which we are utilizing for searching and displaying required 
    restaurant cards.

    we initialy display the secondary variable, and when we search for the restaurants then change
    its value to display it, but if we do this the new search will be executed according to the 
    current list which is displayed, here comes the primary list, which is required in order to
    make sure that the data doesn't get decreased and we will be able to apply further functionalities
    to the data.
    */

  // Empty Dependency Array
  useEffect(() => {
    console.log("This is a useEffect declaration");

    fetchData();
  }, []);

  // Dependency array with some element

  // --> here the useeffect will execute every time the element
  //  i.e. restaurantList for example, will render so whenever the
  // restaurantList re-renders the useEffect will execute, each and every time.

  // useEffect(() => {
  //   console.log("This is a useEffect declaration");

  //   fetchData();
  // }, [restaurantList]);

  async function fetchData() {
    // Here we will be making an API call
    // by fetching data using the fetch function from the server
    // here we are using Swiggy server as an example
    // let data = await fetch(
    //   "https://www.swiggy.com/mapi/homepage/getCards?lat=27.899120276651594&lng=78.06671295315027"
    // );

    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.9067299&lng=78.0544946&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // here data is a promise and not a json response

    let dataobj = await data.json();
    console.log('dataobbj : ',dataobj);
    // console.log(dataobj.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants)
    // if we do data.json() it will again give a promise

    // Optional Chaining
    // Putting ' ? ' after every object to check and ensure if it is present or not
    // if present => it will go ahead check further on
    // if no present => it will simply show undefined without throughing error

    // let datalength = dataobj.data.cards;
    // console.log(datalength.length);
    // for(let i=0;i<datalength.length;i++){

    // const swiggyRestaurant = dataobj.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // const swiggyRestaurant = dataobj.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    const swiggyResData = dataobj.data?.cards[2]?.card?.card?.gridElements === undefined ? dataobj?.data?.cards[4]?.card?.card?.gridElements : dataobj?.data?.cards[2]?.card?.card?.gridElements;

    const swiggyRestaurant = swiggyResData.infoWithStyle?.restaurants;

    // const swiggyRestaurant =
    //   dataobj.data.success.cards[4].gridWidget.gridElements.infoWithStyle
    //     .restaurants;

    // console.log(swiggyRestaurant);
    // console.log(swiggyRestaurant[0])

    // initializing values of both restaurants and restaurantList
    // restaurants => main restaurant list,
    // restaurantList => Temporary restaurant list

    set_restaurants(swiggyRestaurant);
    set_restaurantList(swiggyRestaurant);

    // for(let i=0;i<swiggyRestaurants.length;i++){
    //     console.log(swiggyRestaurants[i].info);
    // }
  }

  console.log("Body Component");
  // console.log(restaurants[0].info.name)

  function searchfunction(searchText) {
    console.log("search text : ", searchText);
    var searchlist = restaurants.filter(
      (restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      // {let res_name = restaurant.info.name.toLowerCase();
      // console.log("res_name.includes(): ",res_name.includes(searchText))
      // return res_name.includes(searchText);}
    );

    if (searchText !== "") {
      set_restaurantList(searchlist);

      //   alert("Search executed for " + searchinp);

      // restaurantList.map(restaurant =>{
      //     let restaurantInfo = restaurant.info;
      //     let restaurantTime = restaurantInfo.sla.deliveryTime;
      //     let imageId = restaurantInfo.cloudinaryImageId;
      //     let restaurantAddress = restaurantInfo.locality;
      //     <Rescard resDetails={restaurantInfo} time={restaurantTime} imgSrc={imageId} address={restaurantAddress}/>
      // })
    } else {
      set_restaurantList(restaurants);
    }

    // console.log(typeof(searchinp))
    // console.log(typeof(restaurantlist[0].name))
    // console.log(searchinp.value);

    // console.log(search_list);
  }

  function itemFilter() {
    console.log("itemFilter Function active!!");

    var filterItemList = restaurants.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5
    );

    console.log(filterItemList);
    set_restaurantList(filterItemList);
  }

  /* if restaurantList is undefined */

  return (
    // If True => if restaurantList is undefined
    // If False => if restauranList is not undefined and contain values.
    <div id="Body_component">
      <div id="btn_div">
        <Search search={searchfunction} />
        <TopRated resFilter={itemFilter} />
      </div>
        {restaurantList.length === 0 ?
        <Shimmer/>
        // Next time will add a small loading screen.
        :(
          <div id="Rescards_div">
          {restaurantList.map((restaurant) => (
            <Link className="res_link" to={'/restaurant/'+restaurant.info.id}>
              <Rescard 
              key={restaurant.info.id}
              resDetails={restaurant.info}
              time={restaurant.info.sla.deliveryTime}
              imgSrc={restaurant.info.cloudinaryImageId}
              address={restaurant.info.locality}
            />
            </Link>
          ))}
          </div>
        )}

        
    </div>
  );
};

export default Body;
