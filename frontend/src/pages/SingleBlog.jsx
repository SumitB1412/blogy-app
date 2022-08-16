import React from "react";
import styles from "../styles/singleblog.module.css";
import { BiTimeFive } from "react-icons/bi";

export const SingleBlog = () => {
  return (
    <div className={styles.thanos}>
      <h2>What They Don’t Say About Ontario, Canada.</h2>
      <div className={styles.wanda}>
        <p>Posted on : August 6, 2022</p>
        <p> <BiTimeFive /> 8 min read</p>
      </div>
      <p>Author : Pablo Pandey</p>
      <img src="https://assets.website-files.com/601b0eabbce5fc78dc318621/601e98759239ef2558d88222_Main%20Post%20Image%208.png" alt="" />
    </div>
  );
};
