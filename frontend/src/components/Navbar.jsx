import React from "react";
import styles from "../styles/navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <img
          src="https://assets.website-files.com/6086e70e13f80b33a5b30495/608711fbc4ee05eb3ac7f3b2_Logo.png"
          alt="application_logo"
        />
      </div>
      <div>
        <p>Home</p>
        <p>Tech</p>
        <p>Travel</p>
        <p>Food</p>
      </div>
      <div></div>
    </div>
  );
};
