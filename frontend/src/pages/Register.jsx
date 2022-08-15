import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/register.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BiLock, BiUser } from "react-icons/bi";
// import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  //   const { user, googleSignIn, createUser } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    // try {
    //   await googleSignIn();
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(userData);
  };

  //   useEffect(() => {
  //     if (user !== null) {
  //       console.log(user);
  //       navigate("/");
  //     }
  //   }, [user]);

  return (
    <div className={styles.registerParent}>
      <div className={styles.registerHeader}>
        <div onClick={() => navigate("/")}>
          <BsArrowLeft style={{ marginRight: "2%" }} /> Back to Blogs
        </div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.registerForm}>
        <h2>Create your account</h2>
        <div className={styles.logInGoogle}>
          <div onClick={handleGoogleSignIn}>
            <FcGoogle
              style={{ width: "21px", height: "21px", marginRight: "2%" }}
            />{" "}
            Continue with <strong>Google</strong>
          </div>
          <div>
            <BsFacebook
              style={{
                color: "rgb(59,89,152)",
                width: "21px",
                height: "21px",
                marginRight: "2%",
              }}
            />{" "}
            Continue with <strong> Facebook</strong>
          </div>
          <div>
            <AiFillApple
              style={{
                color: "black",
                width: "21px",
                height: "21px",
                marginRight: "2%",
              }}
            />{" "}
            Continue with <strong> Apple</strong>
          </div>
        </div>
        <p>or</p>
        <div className={styles.inputBox}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "5%",
              marginBottom: "5%",
            }}
          >
            <BiUser
              style={{
                borderBottom: "1px solid grey",
                fontSize: "20px",
                color: "grey",
                marginTop: "3%",
              }}
            />
            <input
              type="text"
              placeholder="Name"
              onChange={handleChange}
              name="name"
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MdAlternateEmail
              style={{
                borderBottom: "1px solid grey",
                fontSize: "20px",
                color: "grey",
                marginTop: "3%",
              }}
            />
            <input
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "5%" }}
          >
            <BiLock
              style={{
                borderBottom: "1px solid grey",
                fontSize: "20px",
                color: "grey",
                marginTop: "3%",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <button onClick={handleSubmit}>Register</button>
          <div className={styles.newTab}>Already have an account?</div>
          <div className={styles.createAcc} onClick={() => navigate("/login")}>
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
};
