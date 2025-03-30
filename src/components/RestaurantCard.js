import { RESTRO_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;
  const { id, name, cloudinaryImageId, cuisines, avgRating, deliveryTime } =
    resData;
  return (
    <div className="res-card">
      <img alt="image logo" src={RESTRO_IMG_URL + cloudinaryImageId} />
      <h3>{id}</h3>
      <h4>{name}</h4>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
