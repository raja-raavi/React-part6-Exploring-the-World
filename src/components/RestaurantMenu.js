import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENUURL } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);

  const { resID } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENUURL + resID);
    const jsonResult = await data.json();

    setRestaurantInfo(jsonResult.data);
    //console.log(jsonResult.data);
  };

  if (restaurantInfo.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card ||
    restaurantInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card;
  return (
    <div className="restaurant-menu-container">
      <div className="restaurant-menu">
        <h1>{name}</h1>
        <h3>
          {cuisines.join(", ")} - {costForTwoMessage}
        </h3>
        <h3>AVG Rating : {avgRating}</h3>
        <h3>Menu</h3>
        <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - RS.
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.variantsV2?.pricingModels[0]?.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
