import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);

  if (!restInfo) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines } =
    restInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card;
  const itemCategories =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (ele) => ele?.card?.card?.["@type"]?.indexOf("ItemCategory") > 0
    );
  return (
    <div className="text-red-700 text-center my-10">
      <h1 className="font-bold text-lg">{name}</h1>
      <p className="text-sm">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div className="text-red-700">
        {itemCategories.map((category) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
