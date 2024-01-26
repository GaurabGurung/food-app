import React, { useContext, useState } from "react";
import styles from "../foodItems/foodItems.module.scss";
import foodSelection from "../../data/data.json";
import { filterContext } from "../../context/filter.context.jsx";
import { RiHeartLine, RiHeartFill } from "@remixicon/react";

export const FoodItems = () => {
  const { foodItems } = useContext(filterContext);

  const [favStates, setFavStates] = useState(foodSelection.map(() => false));

  const handleClickEvent = (index) => {
    const newFavStates = [...favStates];
    newFavStates[index] = !newFavStates[index];
    setFavStates(newFavStates);
  };
  return (
    <div className={styles.container}>
      {foodItems.map((item, index) => {
        const { name, image, price } = item;
        return (
          <div key={index} className={styles.foodItem}>
            <img src={image} alt={name} />
            <div className={styles.labels}>
              <p>{name}</p>
              <p>
                <span>{price}</span>
              </p>
            </div>
            <div
              className={styles.heartIcon}
              onClick={() => handleClickEvent(index)}
            >
              {favStates[index] ? (
                <RiHeartFill color="white" />
              ) : (
                <RiHeartLine color="white" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodItems;
