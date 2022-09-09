import axios from "axios";
export const GETCOMMENTS = "GETCOMMENTS";



// getting comments
export const getComments = (dispatch, blogId) => {
  axios
    .get(`http://localhost:8000/blogs/comments/${blogId}`)
    .then((res) => dispatch({ type: GETCOMMENTS, payload: res.data }))
    .catch((err) => console.log(err));
};
