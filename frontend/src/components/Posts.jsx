import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/posts.module.css";
import { Blog } from "./Blog";

export const Posts = ({ type }) => {
  const { blogs } = useSelector((store) => store.blogs);
  return (
    <div className={styles.parent}>
      <h2>{type}</h2>
      <div className={styles.line}>
        <div></div>
      </div>
      <div className={styles.boxes}>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};
