import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    setRestInfo(data?.data);
  };

  if (!restInfo) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines } =
    restInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}/-
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
