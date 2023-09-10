import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({
  resData: { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId },
}) => {
  return (
    <div
      className="resto-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="resto-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.slice(0, 4).join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};
