import React from "react";
import styles from "../styles/Features.module.css";

const Features = () => (
  <div className={styles.featuresSection}>
    <div className={styles.imgContainer}>
      <span className={styles.bgBlurRed}></span>
      <img src="/assets/features-1.png" alt="Features Image" />
    </div>
    <div className={styles.infoSection}>
      <div className={styles.headings}>
        <div className={styles.h4}>FEATURES</div>
        <div className={styles.h2}>Uifry Premium</div>
      </div>
      <div className={styles.featuresList}>
        <div className={styles.featuresListItem}>
          <img src="/assets/star-05.png" alt="Star Icon" />
          <li>Budgeting Intervals</li>
        </div>
        <p>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className={styles.featuresListItem}>
          <img src="/assets/cube-02.png" alt="Cube Icon" />
          <li>Budgeting Intervals</li>
        </div>
        <p>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className={styles.featuresListItem}>
          <img src="/assets/cube-04.png" alt="Cube Icon" />
          <li>Budgeting Intervals</li>
        </div>
        <p>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
    </div>
  </div>
);

export default Features;
