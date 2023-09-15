import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  });

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    setRestInfo(data?.data);
  };
  return restInfo;
};

export default useRestaurantMenu;
