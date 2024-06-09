import React from "react";
import styles from "../styles/Nav.module.css";

const Nav = () => (
  <nav className={styles.nav}>
    <div className={styles.logo}>
      <img src="/assets/logo.png" alt="Logo" />
      <img src="/assets/Vector.png" alt="Vector" />
    </div>
    <ul>
      <li className={styles.homeLiItem}>Home</li>
      <li>About Us</li>
      <li>Pricing</li>
      <li>Features</li>
    </ul>
    <button className={styles.btn}>Download</button>
  </nav>
);

export default Nav;
