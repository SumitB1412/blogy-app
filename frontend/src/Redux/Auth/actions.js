import axios from "axios";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";


export const login = (data, dispatch) => {
    axios.post("http://localhost:8000/auth/login", data).then((res) => dispatch({payload: res.data,type:LOGIN})).catch((err) => console.log(err))
}

export const register = (data, dispatch) => {
    axios.post("http://localhost:8000/auth/signup", data).then((res) => console.log(res)).catch((err) => console.log(err))
}