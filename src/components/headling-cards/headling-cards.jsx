import React from "react";
import styles from "../headling-cards/headling-cards.module.scss";

function HeadlineCards() {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.overlay}>
          <p>Sun's Out, BOFO's Out</p>
          <p>Through 8/26</p>
          <button>Order Now</button>
        </div>
        <img
          src="https://images.pexels.com/photos/13689977/pexels-photo-13689977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </div>
  );
}

export default HeadlineCards;
