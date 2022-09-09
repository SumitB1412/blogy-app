import React, { useEffect, useState } from "react";
import styles from "../styles/singleblog.module.css";
import { BiTimeFive } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RiAccountCircleLine } from "react-icons/ri";
import Button from "react-bootstrap/Button";
import { getComments, postcomment } from "../Redux/Blogs/actions";

export const SingleBlog = () => {
  const [comment, setComment] = useState({});
  const [value, setValue] = useState("");
  const [flag, setFlag] = useState(false);
  const { singleBlog, comments } = useSelector((store) => store.blogs);
  console.log(singleBlog.image)
  console.log(comments);
  const dispatch = useDispatch();

  const postComment = async () => {
    let userId = localStorage.getItem("userId");
    let userName = localStorage.getItem("userName");
    let blogId = singleBlog._id;
    let date = new Date();
    date = date.toString().slice(4, 24);
    setComment({ ...comment, text: value, userId, userName, postTime: date });
    postcomment(comment, blogId);
  };

  useEffect(() => {
    getComments(dispatch, singleBlog._id);
  }, []);

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
              value={value}
              onChange={(e) => setValue(e.target.value)}
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
              disabled={value ? false : true}
            >
              Publish
            </Button>
          </div>
        ) : (
          ""
        )}
        <div>
          {comments &&
            comments.map((el, index) => {
              return (
                <div key={index} className={styles.singleComment}>
                  <div>
                    <RiAccountCircleLine
                      fontSize="30px"
                      style={{ marginRight: "20px" }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h4>{el.userName}</h4>
                      <p>{el.postTime}</p>
                    </div>
                    <p>{el.text}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
