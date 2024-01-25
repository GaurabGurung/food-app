import styles from "../foods/foods.module.scss";
import React from "react";
import { data } from "../../data/foodItems.js";

const Foods = () => {
  return (
    <div className={styles.container}>
      <h1>Top Rated Menu Items</h1>

      <div className={styles.foodcontainer}>
        <p>Filter Type</p>
        <div>
          <div>
            <button>All</button>
            <button>Burgers</button>
            <button>Pizza</button>
            <button>Salads</button>
            <button>Chicken</button>
          </div>
        </div>
      </div>
      <div>
        <p>Filter Prices</p>
        <div>
          <button>$</button>
          <button>$$</button>
          <button>$$$</button>
          <button>$$$$</button>
        </div>
      </div>
    </div>
  );
};

export default Foods;
