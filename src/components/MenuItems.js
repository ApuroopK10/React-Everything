import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItems = ({ items, textRed = "text-white" }) => {
  const dispatch = useDispatch();
  const addItemHandler = (item) => {
    // addItem argument is the action.payload
    dispatch(addItem(item));
  };
  return (
    <div className={textRed || "text-white"}>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="m-2 border-white border-b text-left"
        >
          <div className="flex justify-between">
            <div className="w-9/12">
              <span className="font-bold">{item?.card?.info?.name}</span>
              <span> - ₹{item?.card?.info?.price / 100}</span>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-2">
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-[118px] h-24 rounded-md"
              />
              <button
                onClick={() => addItemHandler(item)}
                data-testid="addToCart"
                className="text-green-700 font-bold p-1 px-4 bg-white shadow-lg relative bottom-6 left-6 rounded-md"
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
