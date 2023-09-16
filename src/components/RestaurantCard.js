import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({
  resData: { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId },
}) => {
  return (
    <div className="m-4 p-4 w-[220px] bg-red-700 rounded-lg hover:bg-red-400">
      <img
        className="rounded-lg"
        height="188"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.slice(0, 4).join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};
