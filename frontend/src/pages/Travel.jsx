import React, { useState } from "react";
import { useEffect } from "react";
import { Blog } from "../components/Blog";
import styles from "../styles/travel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificBlogs } from "../Redux/Blogs/actions";

export const Travel = () => {
  const dispatch = useDispatch;
  useEffect(() => {
    getSpecificBlogs("Travel", dispatch);
  }, []);
  const { specific } = useSelector((store) => store.blogs);
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
