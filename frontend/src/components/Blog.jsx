import React, { useState, useEffect } from "react";
import { singleBlog } from "../Redux/Blogs/actions";
import styles from "../styles/blog.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Blog = (props) => {
  // console.log(props)
  const [readTime, setReadTime] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tag = props.tags.toLowerCase();
  const randomTime = () => {
    let time = Math.floor(Math.random() * (10 - 5) + 5);
    setReadTime(time);
  };
  useEffect(() => {
    randomTime();
  }, []);
  const handleClick = () => {
    //going to specific blog page
    singleBlog({ ...props, readTime }, dispatch);
    navigate("/single-blog");
  };
  return (
    <div className={styles.container}>
      <div onClick={handleClick} className={styles.child1}>
        {/* <img src={`https://enigmatic-coast-46089.herokuapp.com/static/${props.image}`} alt="" /> */}
        <img src={`${props.img}`} alt="" />
      </div>
      <div className={styles.child2}>
        <h3 onClick={() => navigate(`/${tag}`)}>
          <div className={styles.line}></div>
          {props.tags}
        </h3>
        <h2 onClick={handleClick}>{props.title}</h2>
        <p>
          {props.date} <strong>•</strong> {readTime} min read
        </p>
        <div>
          <p>By {props.authorName}</p>
        </div>
      </div>
    </div>
  );
};
