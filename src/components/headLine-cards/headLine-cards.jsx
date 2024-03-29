import React, { useState } from "react";
import styles from "../headLine-cards/headLine-cards.module.scss";
import foodSelection from "../../data/data.json";
import { RiHeartLine, RiHeartFill } from "@remixicon/react";

const HeadLineCards = () => {
  return (
    <div className={styles.container}>
      {foodSelection.map((food, index) => {
        const { title, subtitle, source, id } = food;

        return (
          <div className={styles.cards} key={id}>
            <div className={styles.overlay}>
              <p>{title}</p>
              <p>{subtitle}</p>
              <button>Order Now</button>
            </div>
            <img src={source} alt="/" />
          </div>
        );
      })}
    </div>
  );
};

export default HeadLineCards;
