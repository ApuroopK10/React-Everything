import { Header } from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  console.log("Virtual DOM", <Body />);
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
