import { Header } from "./Header";
import Body from "./Body";

export const AppLayout = () => {
  console.log("Virtual DOM", <Body />);
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
