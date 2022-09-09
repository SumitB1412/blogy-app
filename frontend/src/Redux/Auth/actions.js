import axios from "axios";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export const login = (data, dispatch, navigate) => {
  axios
    .post("http://localhost:8000/auth/login", data)
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
    .post("http://localhost:8000/auth/signup", data)
    .then((res) => navigate("/login"))
    .catch((err) => alert("Error signing In! Try again later"));
};
