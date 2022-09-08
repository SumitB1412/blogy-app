import React, { useState } from "react";
import styles from "../styles/singleblog.module.css";
import { BiTimeFive } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RiAccountCircleLine } from "react-icons/ri";
import Button from "react-bootstrap/Button";

export const SingleBlog = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [flag, setFlag] = useState(false);
  const { singleBlog } = useSelector((store) => store.blogs);
  const postComment = () => {
    setComments([comment, ...comments]);
  };
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
          <img
            src={`http://localhost:8000/static/${singleBlog.image}`}
            alt=""
          />
        </div>
        <div className={styles.bodyDiv}>
          <p className={styles.blogBody}>{singleBlog.body}</p>
        </div>
      </div>
      <div className={styles.commentBox}>
        <div>
          <h2>Comments</h2>
        </div>
        <div className={styles.postComment}>
          <div>
            <RiAccountCircleLine
              fontSize="30px"
              style={{ marginRight: "20px" }}
            />
          </div>
          <div className={styles.textAreaDiv}>
            <textarea
              type="text"
              placeholder="Write a comment..."
              onClick={() => setFlag(true)}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
        {flag ? (
          <div className={styles.buttonBox}>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => setFlag(false)}
            >
              Cancel
            </Button>
            <Button
              variant="outline-primary"
              onClick={postComment}
              size="sm"
              disabled={comment ? false : true}
            >
              Publish
            </Button>
          </div>
        ) : (
          ""
        )}
        <div>
          {comments && comments.map((el, index) => {
            return (
              <div className={styles.singleComment}>
                <div>
                  <RiAccountCircleLine
                    fontSize="30px"
                    style={{ marginRight: "20px" }}
                  />
                </div>
                <div>
                  <h4>{el}</h4>
                  <p>{el}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
