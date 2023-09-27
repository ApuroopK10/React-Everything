import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../__tests__/mock/resDataMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Should test search", () => {
  it("should test Search functionality", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const cardsBeforeSearch = screen.getAllByTestId("restoCard");
    expect(cardsBeforeSearch.length).toBe(20);
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {
      target: {
        value: "KFC",
      },
    });
    fireEvent.click(searchBtn);
    const cardsAfterSearch = screen.getAllByTestId("restoCard");

    expect(searchBtn).toBeInTheDocument();
    expect(cardsAfterSearch.length).toBe(1);
  });

  it("should test Top Rated functionality", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const cardsBeforeBtnClick = screen.getAllByTestId("restoCard");
    expect(cardsBeforeBtnClick.length).toBe(20);
    const topRatedBtn = screen.getByRole("button", { name: "Top Rated" });
    fireEvent.click(topRatedBtn);
    const cardsAfterBtnClick = screen.getAllByTestId("restoCard");

    expect(cardsAfterBtnClick.length).toBe(13);
  });
});
