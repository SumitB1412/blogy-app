import axios from "axios";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const GOOGLESIGNIN = "GOOGLESIGNIN";

export const login = (data, dispatch, navigate) => {
  axios
    .post("https://enigmatic-coast-46089.herokuapp.com/auth/login", data)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.id);
      localStorage.setItem("userName", res.data.author);
      dispatch({ payload: res.data, type: LOGIN });
      alert("Logged In");
      navigate("/");
    })
    .catch((err) => alert("Error logging In! Try again later"));
};

export const register = (data, dispatch, navigate) => {
  axios
    .post("https://enigmatic-coast-46089.herokuapp.com/auth/signup", data)
    .then((res) => {
      alert("Signup success!");
      navigate("/login");
    })
    .catch((err) => alert("Error signing In! Try again later"));
};

// google login

export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    localStorage.setItem("userId", currentUser.uid);
  });
};
