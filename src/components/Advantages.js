import React from "react";
import styles from "../styles/Advantages.module.css";

const Advantages = () => (
  <div className={styles.advantagesSection}>
    <div className={`${styles.advantages} ${styles.infoSection}`}>
      <div className={styles.headings}>
        <div className={styles.h4}>ADVANTAGES</div>
        <div className={styles.h2}>Why Choose Uifry</div>
      </div>
      <div className={styles.featuresList}>
        <div className={styles.featuresListItem}>
          <img src="/assets/notif.png" alt="Notification Icon" />
          <li>Clever Notifications</li>
        </div>
        <p>
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam.
        </p>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <span className={styles.bgBlurRed}></span>
      <img src="/assets/features-1.png" alt="Features Image" />
    </div>
  </div>
);

export default Advantages;
