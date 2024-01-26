import styles from "../foods/foods.module.scss";
import React, { useContext, useState } from "react";
import FoodItems from "../foodItems/foodItems.jsx";
import { filterContext } from "../../context/filter.context.jsx";
import { data } from "../../data/foodItems.js";

const Foods = () => {
  const { filterFoodType, filterFoodPrice, foodItems, setFoodItems } =
    useContext(filterContext);

  return (
    <div className={styles.container}>
      <h1>Top Rated Menu Items</h1>

      <div className={styles.foodContainer}>
        <div>
          <p>Filter Type</p>
          <div className={styles.foodFilters}>
            <button onClick={() => setFoodItems(data)}>All</button>
            <button onClick={() => filterFoodType("burger")}>Burgers</button>
            <button onClick={() => filterFoodType("pizza")}>Pizza</button>
            <button onClick={() => filterFoodType("salad")}>Salads</button>
            <button onClick={() => filterFoodType("chicken")}>Chicken</button>
          </div>
        </div>
      </div>
      <div className={styles.foodContainer}>
        <div>
          <p>Filter Prices</p>
          <div className={styles.foodFilters}>
            <button onClick={() => filterFoodPrice("$")}>$</button>
            <button onClick={() => filterFoodPrice("$$")}>$$</button>
            <button onClick={() => filterFoodPrice("$$$")}>$$$</button>
            <button onClick={() => filterFoodPrice("$$$$")}>$$$$</button>
          </div>
        </div>
      </div>
      <FoodItems />
    </div>
  );
};

export default Foods;
