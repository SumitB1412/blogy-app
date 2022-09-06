import React from "react";
import styles from "../styles/singleblog.module.css";
import { BiTimeFive } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RiAccountCircleLine } from "react-icons/ri";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
          <div>
            <RiAccountCircleLine
              fontSize="30px"
              style={{ marginRight: "20px", marginLeft: "10px" }}
            />
          </div>
          <div>
            <FloatingLabel controlId="floatingTextarea2" label="Message">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </div>
        </div>
        <div className={styles.buttonBox}>
          <Button variant="outline-danger">Cancel</Button>
          <Button variant="outline-primary">Post Comment</Button>
        </div>
      </div>
    </>
  );
};
