import React from "react";
import styles from "../styles/AdSection.module.css";

const AdSection = () => (
  <div className={styles.adSection}>
    <div className={styles.left}>
      <h2 className={styles.h2}>Ready To Get Started?</h2>
      <p>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
      <button className={`${styles.btn} ${styles.btnWhite}`}>
        <p>Download App</p>
        <img src="/assets/apple.png" alt="Apple Icon" />
      </button>
    </div>
    <div className={styles.right}>
      <img src="/assets/iPhone 13 Pro.png" alt="iPhone 13 Pro" />
    </div>
  </div>
);

export default AdSection;
