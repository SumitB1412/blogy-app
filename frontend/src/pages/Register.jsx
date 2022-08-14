import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/register.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BiLock } from "react-icons/bi";
// import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  //   const { user, googleSignIn, createUser } = useContext(AuthContext);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
    //   await createUser(id, password);
    //   // navigate("/account");
    // } catch (e) {
    //   setError(e.message);
    //   console.log(e.message);
    // }
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
        <div>
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
              placeholder="Email address"
              onChange={(e) => setId(e.target.value)}
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
                marginTop: "2.1%",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
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
                marginTop: "2.1%",
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPass(e.target.value)}
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
