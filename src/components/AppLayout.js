import { Header } from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

export const AppLayout = () => {
  const [userName, setUserName] = useState("Global User");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
