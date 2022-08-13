import React from "react";
import { Blog } from "../components/Blog";
import styles from "../styles/travel.module.css";

export const Travel = () => {
  return (
    <div className={styles.travelContainer}>
      <div>
        <h3>
          <div className={styles.line}></div>Travel
        </h3>
        <h1 className={styles.h1}>Travel</h1>
        <div className={styles.line1}>
          <div></div>
        </div>
      </div>
      <div>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};
