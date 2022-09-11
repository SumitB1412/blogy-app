import React, { useContext, useEffect } from "react";
import styles from "../styles/login.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BiLock } from "react-icons/bi";
import { useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Auth/actions";

export const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  //   const { user, googleSignIn, signIn } = useContext(AuthContext);

  //   useEffect(() => {
  //     if (user !== null) {
  //       console.log(user);
  //       navigate("/");
  //     }
  //   }, [user]);

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
    login(userData, dispatch,navigate);
  };

  return (
    <div className={styles.loginParent}>
      <div className={styles.loginHeader}>
        <div onClick={() => navigate("/")}>
          <BsArrowLeft style={{ marginRight: "2%" }} /> Back to Blogs
        </div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.loginForm}>
        <h2>Welcome back</h2>
        <div className={styles.logInGoogle}>
          <div onClick={handleGoogleSignIn}>
            <FcGoogle
              style={{ width: "21px", height: "21px", marginRight: "2%" }}
            />{" "}
            Continue with <strong>Google</strong>
          </div>
        </div>
        <p>or</p>
        <div className={styles.info}>
          Enter the email address or mobile number associated with your account
          to sign in.
        </div>
        <div className={styles.inputBox}>
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
              placeholder="Insert Phone Number/Email"
              name="email"
              onChange={handleChange}
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
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSubmit}>Sign In</button>
          <div className={styles.newTab}>New to Blogy?</div>
          <div
            className={styles.createAcc}
            onClick={() => navigate("/register")}
          >
            Create an account to get started.
          </div>
        </div>
      </div>
    </div>
  );
};
