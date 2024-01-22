import React from "react";
import {
  RiMenuLine,
  RiSearchLine,
  RiShoppingCart2Fill,
} from "@remixicon/react";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* Left side*/}
      <div className={styles.leftNavbar}>
        <RiMenuLine size={36} className={styles.menubarIcon} />

        <h1 className={styles.titleText}>
          Best <span className={styles.textEats}>Eats</span>
        </h1>
        <div className={styles.deliveryOptions}>
          <p className={styles.option1}>Delivery</p>
          <p className={styles.option2}>Pickup</p>
        </div>
      </div>

      {/* Search Input */}
      <div className={styles.search}>
        <RiSearchLine />
        <input type="text" placeholder="Search Food" />
      </div>

      {/* Cart button */}
      <button className={styles.cartIcon}>
        <RiShoppingCart2Fill /> Cart
      </button>

      {/* Mobile Menu */}
      <div className={styles.mobileView}></div>
    </div>
  );
};

export default Navbar;
