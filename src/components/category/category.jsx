import React from "react";
import styles from "../category/category.module.scss";

import { categories } from "../../data/foodItems";

const Category = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Top Rated Menu Items</h1>
      <ul className={styles.categoryContainer}>
        {categories.map((category) => {
          const { id, name, image } = category;
          return (
            <li key={id}>
              {name} <img src={image} alt={name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
