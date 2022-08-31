import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../Redux/Blogs/actions";
import styles from "../styles/posts.module.css";
import { Blog } from "./Blog";

export const Posts = ({ type }) => {
  const { blogs } = useSelector((store) => store.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllBlogs(dispatch);
  }, []);
  return (
    <div className={styles.parent}>
      <h2>{type}</h2>
      <div className={styles.line}>
        <div></div>
      </div>
      <div className={styles.boxes}>
        {blogs && blogs.map((el,index)=>{
          return <Blog key={index} {...el} />
        })}
        {/* <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog /> */}
      </div>
    </div>
  );
};
