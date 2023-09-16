import { DATA_API } from "../utils/constants";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withOffersLabel } from "./RestaurantCard";

const Body = () => {
  const [originalRestArr, setOriginalRestArr] = useState([]);
  const [resListFiltered, setResListFiltered] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantOffersCard = withOffersLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(DATA_API);
    const respData = await response.json();
    const finalRespData = respData?.data?.cards
      .find((card) => card?.card?.card?.id === "top_brands_for_you")
      .card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (resto) => resto.info
      );
    setResListFiltered(finalRespData);
    setOriginalRestArr(finalRespData);
    console.log(finalRespData);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>Looks like you're offline, please check your internet connection</h1>
    );
  }

  return resListFiltered.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="m-4 p-4 flex">
          <input
            type="text"
            className="border-solid border-red-700 border-2"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="px-4 py-1 ml-2 bg-red-700 rounded-lg"
            onClick={() => {
              if (searchText.trim().length === 0) {
                setResListFiltered(originalRestArr);
                return;
              }
              setResListFiltered(
                originalRestArr.filter((rest) =>
                  rest.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn ml-2 px-4 py-1 bg-red-700  rounded-lg"
            onClick={() => {
              setResListFiltered(
                resListFiltered.filter((resto) => resto.avgRating > 4)
              );
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {resListFiltered.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.id} key={restaurant.id}>
            {restaurant.aggregatedDiscountInfoV3 ? (
              <RestaurantOffersCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
