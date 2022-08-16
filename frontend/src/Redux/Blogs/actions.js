import axios from "axios";
export const GETALL = "GETALL";
export const GETSPECIFIC = "GETSPECIFIC";

export const getAllBlogs = (dispatch) => {
  axios
    .get("http://localhost:8000/blogs/all")
    .then(({ data }) => {
      dispatch({
        type: GETALL,
        payload: data,
      });
    })
    .catch((err) => console.log(err));
};

export const getSpecificBlogs = (tag, dispatch) => {
  axios
    .get(`http://localhost:8000/blogs/${tag}`)
    .then(({ data }) => {
      dispatch({
        type: GETSPECIFIC,
        payload: data,
      });
    })
    .catch((err) => console.log(err));
};
