import React, { useEffect } from "react";
import { Blog } from "../components/Blog";
import styles from "../styles/travel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificBlogs } from "../Redux/Blogs/actions";

export const SinglePages = ({ props }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getSpecificBlogs(props, dispatch);
  }, [props]);
  const { specific } = useSelector((store) => store.blogs);
  return (
    <div className={styles.travelContainer}>
      <div>
        <h3>
          <div className={styles.line}></div>
          {props}
        </h3>
        <h1 className={styles.h1}>{props}</h1>
        <div className={styles.line1}>
          <div></div>
        </div>
      </div>
      <div>
        {specific &&
          specific.map((el, index) => {
            return <Blog key={index} {...el} />;
          })}
      </div>
    </div>
  );
};
