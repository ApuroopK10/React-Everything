import { useDispatch, useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  //   const wholeStore = useSelector((store) => store);
  //   const cartItems = wholeStore.cart.items;
  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-red-700 text-center my-7 p-7 w-7/12 m-auto">
      <div className="flex justify-between px-4">
        <h1 className="font-bold text-2xl flex-1">Cart</h1>
        <button
          onClick={clearCartItems}
          className="font-bold text-lg mr-20 text-red-700 p-1 px-4 bg-white shadow-lg  bottom-6 left-6 rounded-md"
        >
          Clear Cart
        </button>
      </div>
      <div className="">
        {cartItems.length === 0 ? (
          <h1>Cart is empty, Resume shopping</h1>
        ) : (
          <MenuItems items={cartItems} textRed="text-red-700" />
        )}
      </div>
    </div>
  );
};

export default Cart;
