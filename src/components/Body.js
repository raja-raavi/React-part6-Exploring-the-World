import RestaurantCard from "../components/RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="search">
        <button
          className="searchButton"
          onClick={() => {
            let filteredRestaurants = resList.filter(
              (restaurant) => restaurant.avgRating > 4.2
            );
            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Get Top Rated Restaurants
        </button>
        <input type="text" placeholder="Enter Restro name Here" id="inputBox" />
        <button
          onClick={() => {
            let input = document.getElementById("inputBox");
            // console.log(input.value);
            let listOfRestaurants = resList.filter((res) =>
              res.name.toLocaleLowerCase().includes(input.value)
            );
            setListOfRestaurants(listOfRestaurants);
          }}
        >
          Submit
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
