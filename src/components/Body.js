import RestaurantCard from "../components/RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { FETCHING_DATA } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
    console.log("use effect hook called");
  }, []);

  console.log("Body Rendered"); //called before (1st) useEffect call back fn executed

  const fetchData = async () => {
    try {
      const data = await fetch(FETCHING_DATA);
      const jsonResult = await data.json();
      console.log(jsonResult);
      setListOfRestaurants(
        jsonResult?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        jsonResult?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      setError(new Error("Something went wrong in fetching URL"));
    }
  };

  //body component is loaded but we set to [] array in useState, so we can see blank before api call..
  //how can we impove user experince.. using shimmer ui

  //conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <button
          className="searchButton"
          onClick={() => {
            let filteredRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant?.info?.avgRating > 4.2
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Get Top Rated Restaurants
        </button>
        <input
          type="text"
          placeholder="Enter Restro name Here"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const searchedRestaurant = listOfRestaurants.filter((restaurant) =>
              restaurant?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(searchedRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
