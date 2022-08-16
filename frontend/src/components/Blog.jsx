import React from "react";
import styles from "../styles/blog.module.css";

export const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.child1}>
        <img
          src="https://assets.website-files.com/601b0eabbce5fc78dc318621/601e9824945d83f018fd3180_Main%20Post%20Image%203.png"
          alt=""
        />
      </div>
      <div className={styles.child2}>
        <h3>
          <div className={styles.line}></div>Travel
        </h3>
        <h2>What They Don’t Say About Ontario, Canada.</h2>
        <p>
          August 6, 2022 <strong>•</strong> 8 min read
        </p>
        <p>By Pablo Pandey</p>
      </div>
    </div>
  );
};
