import React from "react";
import styles from "../styles/singleblog.module.css";
import { BiTimeFive } from "react-icons/bi";
import { useSelector } from "react-redux";

export const SingleBlog = () => {
  const { singleBlog } = useSelector((store) => store.blogs);
  return (
    <>
    <div className={styles.thanos}>
      <h2>{singleBlog.title}</h2>
      <div className={styles.wanda}>
        <p>Posted on : {singleBlog.date}</p>
        <p>
          {" "}
          <BiTimeFive /> {singleBlog.readTime} min read
        </p>
      </div>
      <p>Author : {singleBlog.authorName}</p>
      <div className={styles.singleImgDiv}>
        <img src={`http://localhost:8000/static/${singleBlog.image}`} alt="" />
      </div>
      <div className={styles.bodyDiv}>
        <p className={styles.blogBody}>{singleBlog.body}</p>
      </div>
    </div>
    <div className={styles.commentBox}></div>
    </>
  );
};
