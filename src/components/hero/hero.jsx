import React from "react";
import styles from "../hero/hero.module.scss";
import cover from "../../assets/cover.png";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.overlay}>
          <h2>
            The <span>Best</span>
          </h2>
          <h2>
            <span>Foods </span>Delivered
          </h2>
        </div>
        <div className={styles.imageAnimation} />
      </div>
    </div>
  );
};

export default Hero;
