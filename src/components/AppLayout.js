import { Header } from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useState } from "react";

export const AppLayout = () => {
  const [userName, setUserName] = useState("Global User");
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
