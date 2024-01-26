import { useContext, createContext, useState } from "react";
import { data } from "../data/foodItems";

export const filterContext = createContext({
  foodItems: data,
  setFoodItems: () => {},
  filterFoodType: () => {},
  filterFoodPrice: () => {},
});

export const FilterProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState(data);

  const filterFoodType = (category) => {
    setFoodItems(data.filter((item) => item.category === category));
  };

  const filterFoodPrice = (price) => {
    setFoodItems(data.filter((item) => item.price === price));
  };

  const value = {
    foodItems,
    setFoodItems,
    filterFoodPrice,
    filterFoodType,
  };
  return (
    <div>
      <filterContext.Provider value={value}>{children}</filterContext.Provider>
    </div>
  );
};
