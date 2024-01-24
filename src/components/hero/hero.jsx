import React from "react";
import styles from "../hero/hero.module.scss";
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
        <img
          src="https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
