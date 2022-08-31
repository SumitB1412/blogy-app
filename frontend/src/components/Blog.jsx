import React from "react";
import styles from "../styles/blog.module.css";

export const Blog = (props) => {
  const handleClick = () => {
    //
  };
  return (
    <div className={styles.container}>
      <div onClick={handleClick} className={styles.child1}>
        <img src={`http://localhost:8000/static/${props.image}`} alt="" />
      </div>
      <div className={styles.child2}>
        <h3>
          <div className={styles.line}></div>{props.tags}
        </h3>
        <h2 onClick={handleClick}>
          {props.title}
        </h2>
        <p>
          {props.date} <strong>•</strong> 8 min read
        </p>
        <p>By {props.authorName}</p>
      </div>
    </div>
  );
};
