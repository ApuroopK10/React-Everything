import { render, screen } from "@testing-library/react";
import { RestaurantCard, withOffersLabel } from "../RestaurantCard";
import RESCARD_MOCK from "./mock/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard cmp with props", () => {
  render(<RestaurantCard resData={RESCARD_MOCK} />);
  const RestoName = screen.getByText("Jaggu Mithai");
  expect(RestoName).toBeInTheDocument();
});

it("should test withOffersLabel Cmp with Offers label", () => {
  const WrapperCmp = withOffersLabel(RestaurantCard);
  render(<WrapperCmp resData={RESCARD_MOCK} />);
  const offersLabel = screen.getByText("Offers");
  expect(offersLabel).toBeInTheDocument();
});
