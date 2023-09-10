import { DATA_API } from "../utils/constants";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resListArr, setResListArr] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(DATA_API);
    const respData = await response.json();
    setResListArr(
      respData?.data?.cards
        .find((card) => card?.card?.card?.id === "top_brands_for_you")
        .card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (resto) => resto.info
        )
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setResListArr(resList.filter((resto) => resto.avgRating > 4));
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="resto-container">
        {resListArr.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
