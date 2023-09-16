import { useState } from "react";
import MenuItems from "./MenuItems";

const RestaurantCategory = ({ data }) => {
  const [accExpanded, setAccExpanded] = useState(false);

  const toggleAccordion = () => {
    setAccExpanded(!accExpanded);
  };
  return (
    <div className="text-white">
      <div className="w-6/12 bg-red-700 shadow-2xl p-4 mx-auto flex flex-col justify-between px-2 my-2">
        <div
          className="flex justify-between cursor-pointer"
          onClick={toggleAccordion}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span className="text-white">{accExpanded ? "⬆" : "⬇"}</span>
        </div>
        {accExpanded ? <MenuItems items={data?.itemCards} /> : <></>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
