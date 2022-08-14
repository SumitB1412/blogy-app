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

export const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [change, setChange] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
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

  const handleSubmit = async () => {
    // setError("");
    // try {
    //   await signIn(id, password);
    //   // navigate('/account')
    // } catch (e) {
    //   setError(e.message);
    //   console.log(e);
    // }
  };

  const handleClick = () => {
    if (!id) {
      setId("none");
    } else {
      setChange(true);
    }
  };

  return (
    <div className={styles.loginParent}>
      <div className={styles.loginHeader}>
        <div>
          <BsArrowLeft style={{ marginRight: "2%" }} /> Back to Blogs
        </div>
        <div>
          {/* <img
            width="80%"
            src="https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/indian-express-logo-n.svg"
            alt="logo"
          /> */}
        </div>
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
        <div className={styles.info}>
          Enter the email address or mobile number associated with your account
          to sign in.
        </div>
        {id === "none" ? (
          <span className={styles.alertMsg}>
            Insert an email or phone number
          </span>
        ) : (
          ""
        )}
        <div className={styles.inputBox}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MdAlternateEmail
              style={{
                borderBottom: "1px solid grey",
                fontSize: "20px",
                color: "grey",
                marginTop: "2.1%",
              }}
            />
            <input
              type="email"
              placeholder="Insert Phone Number/Email"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          {change ? (
            <div
              style={{ display: "flex", alignItems: "center", marginTop: "5%" }}
            >
              <BiLock
                style={{
                  borderBottom: "1px solid grey",
                  fontSize: "20px",
                  color: "grey",
                  marginTop: "2.1%",
                }}
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          ) : (
            ""
          )}
          {change ? (
            <button onClick={handleSubmit}>Sign In</button>
          ) : (
            <button onClick={handleClick}>Continue</button>
          )}
          {/* <button onClick={handleClick}>
            {change ? "Sign In" : "Continue"}
          </button> */}
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