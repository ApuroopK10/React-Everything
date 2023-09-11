import { DATA_API } from "../utils/constants";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [originalRestArr, setOriginalRestArr] = useState([]);
  const [resListFiltered, setResListFiltered] = useState([]);

  const [searchText, setSearchText] = useState("");

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

  return resListFiltered.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            setResListFiltered(
              resListFiltered.filter((resto) => resto.avgRating > 4)
            );
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="resto-container">
        {resListFiltered.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.id} key={restaurant.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
