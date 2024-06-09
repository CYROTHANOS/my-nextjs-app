import React from "react";
import styles from "../styles/Ribbon.module.css";

const Ribbon = () => (
  <div className={styles.ribbon}>
    <img className={styles.a} src="/assets/a.png" alt="Ribbon Image" />
    <div className={styles.ribbonTop}>
      <div className={styles.ribbonTopLeft}>
        <img src="/assets/hero-logo1.png" alt="Hero Logo 1" />
        <div className={styles.ribbonText}>
          <div>Achievements</div>
          <div>Best Finance App on PlayStore</div>
        </div>
      </div>
      <hr />
      <div className={styles.ribbonTopRight}>
        <img src="/assets/hero-logo2.png" alt="Hero Logo 2" />
        <div className={styles.ribbonText}>
          <div>Finance</div>
          <div>Most Popular Accounting App</div>
        </div>
      </div>
    </div>
    <div className={styles.ribbonMid}>
      <p>Make The Best Financial Decisions</p>
    </div>
    <div className={styles.ribbonBottom}>
      <img src="/assets/star-1.png" alt="Star Image" />
      <div className={styles.ribbonBottomText}>
        <div>Uifry Premium</div>
        <div>Free Trial</div>
      </div>
    </div>
  </div>
);

export default Ribbon;
