import React, { useEffect } from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  useEffect(() => {
    const heroText = document.querySelector(`.${styles.heroText}`);
    const imgContainer = document.querySelector(`.${styles.imgContainer}`);
    setTimeout(() => {
      heroText.classList.add(styles.visible);
      imgContainer.classList.add(styles.visible);
    }, 100);
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h2>
          Make The <span className={styles.bgBlurRed}></span>
          <span className={styles.bgBlurYellow}></span> Best Financial Decisions
        </h2>
        <p>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className={styles.heroBtnDiv}>
          <button className={styles.btn}>Get Started →</button>
          <div className={styles.watchNow}>
            <img src="/assets/play_icon.png" alt="Play Icon" />
            Watch Now
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <span className={styles.ellipseContainer}>
          <span className={styles.ellipse}></span>
          <span className={styles.ellipse}></span>
          <span className={styles.ellipse}></span>
        </span>
        <div className={styles.imgBottom}>
          <img src="/assets/iPhone-13-layer-1.png" alt="iPhone 13" />
        </div>
        <div className={styles.imgMid}>
          <img src="/assets/iPhone-13-layer-2.png" alt="iPhone 13" />
        </div>
        <div className={styles.imgTop}>
          <img src="/assets/iPhone-13-layer-1.png" alt="iPhone 13" />
        </div>
        <span className={styles.bgBlurYellow}></span>
        <span className={styles.bgBlurRed}></span>
      </div>
    </div>
  );
};

export default Hero;
