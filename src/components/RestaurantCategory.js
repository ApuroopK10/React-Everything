import MenuItems from "./MenuItems";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const toggleAccordion = () => {
    setShowIndex();
  };
  return (
    <div className="text-white" data-testid="accHeader">
      <div className="w-6/12 bg-red-700 shadow-2xl p-4 mx-auto flex flex-col justify-between px-2 my-2">
        <div
          className="flex justify-between cursor-pointer"
          onClick={toggleAccordion}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span className="text-white">{showItems ? "⬆" : "⬇"}</span>
        </div>
        {showItems ? <MenuItems items={data?.itemCards} /> : <></>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
