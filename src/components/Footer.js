import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerLists}>
        <h1 className={styles.logo}>
          <img src="/assets/logo.png" alt="Uifry Logo" />
          <img src="/assets/Vector.png" alt="Vector" />
        </h1>
        <ul className={styles.info1}>
          <li className={styles.info}>
            <img src="/assets/email.png" alt="Email Icon" />
            <p>Help@Frybix.com</p>
          </li>
          <li className={styles.info}>
            <img src="/assets/phone.png" alt="Phone Icon" />
            <p>+1234 456 678 89</p>
          </li>
        </ul>
      </div>
      <div className={styles.footerLists}>
        <h1>Links</h1>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Bookings</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className={styles.footerLists}>
        <h1>Legal</h1>
        <ul>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
      <div className={styles.footerLists}>
        <h1>Product</h1>
        <ul>
          <li>Take Tour</li>
          <li>Live Chat</li>
          <li>Reviews</li>
        </ul>
      </div>
      <div className={styles.footerLists}>
        <h1>Newsletter</h1>
        <ul>
          <li>Stay Up To Date</li>
        </ul>
        <form className={styles.subscribeForm}>
          <input type="text" placeholder="Your email" />
          <button className={styles.subscribeBtn}>Subscribe</button>
        </form>
      </div>
    </div>
    <hr className={styles.footerHr} />
    <div className={styles.footerCopyright}>
      Copyright 2022 uifry.com All Rights Reserved
    </div>
  </footer>
);

export default Footer;
