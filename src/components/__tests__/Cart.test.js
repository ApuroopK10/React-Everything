import { fireEvent, render, screen } from "@testing-library/react";
import MenuItems from "../MenuItems";
import MOCK_MENU from "../__tests__/mock/resMenuMock.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import { Header } from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_MENU),
  });
});

it("should load RestaurantMenu cmp", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getAllByTestId("accHeader");
  fireEvent.click(accordionHeader[0]);
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(6);
});
