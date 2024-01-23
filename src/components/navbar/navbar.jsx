import React, { useState } from "react";
import {
  RiMenuLine,
  RiSearchLine,
  RiShoppingCart2Fill,
  RiCloseLine,
  RiTruckLine,
  RiHeartFill,
  RiWalletFill,
  RiQuestionFill,
  RiArrowDownCircleFill,
  RiGroupFill,
  RiPriceTag3Fill,
} from "@remixicon/react";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);

  const handleSideNavClick = () => {
    setSideNavIsOpen(!sideNavIsOpen);
    console.log("okay");
  };

  return (
    <div className={styles.container}>
      {/* Left side*/}
      <div className={styles.leftNavbar}>
        <RiMenuLine
          size={36}
          className={styles.menubarIcon}
          onClick={handleSideNavClick}
        />

        <h1 className={styles.titleText}>
          Taste <span className={styles.textRed}>Hub</span>
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

      <>
        {/* Overlay */}
        <div
          className={`${sideNavIsOpen ? styles.mobileView : styles.noDisplay}`}
        />
        {/* Side Drawer */}
        <div
          className={`${styles.sideDrawer} ${sideNavIsOpen ? styles.open : ""}`}
        >
          <RiCloseLine
            size={30}
            className={styles.closeIcon}
            onClick={handleSideNavClick}
          />
          <h2>
            Taste <span>Hub</span>
          </h2>
          <nav className={styles.sideNavigation}>
            <ul>
              <li>
                <RiTruckLine color="#cb4154" className={styles.icon} />
                Orders
              </li>
              <li>
                <RiHeartFill color="#cb4154" className={styles.icon} />
                Favorites
              </li>
              <li>
                <RiWalletFill color="#cb4154" className={styles.icon} />
                Wallet
              </li>
              <li>
                <RiQuestionFill color="#cb4154" className={styles.icon} />
                Help
              </li>
              <li>
                <RiPriceTag3Fill color="#cb4154" className={styles.icon} />
                Promotions
              </li>
              <li>
                <RiArrowDownCircleFill
                  color="#cb4154"
                  className={styles.icon}
                />
                Best One
              </li>
              <li>
                <RiGroupFill color="#cb4154" className={styles.icon} />
                Invite Friends
              </li>
            </ul>
          </nav>
        </div>
      </>
    </div>
  );
};

export default Navbar;
