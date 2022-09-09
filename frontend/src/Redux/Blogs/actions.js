import axios from "axios";
export const GETALL = "GETALL";
export const GETSPECIFIC = "GETSPECIFIC";
export const POSTBLOG = "POSTBLOG";
export const SINGLEBLOG = "SINGLEBLOG";


// posting the blog
export const postBlog = (token, userId, userName, form, navigate) => {
  axios
    .post(`http://localhost:8000/blogs/${userName}/${userId}/new-blog`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${token}`,
      },
    })
    .then()
    .catch((err) => console.ḷog(err));
  navigate("/");
};

// getting all the blogs
export const getAllBlogs = (dispatch) => {
  axios
    .get("http://localhost:8000/blogs/all")
    .then(({ data }) => {
      // console.log(data)
      dispatch({
        type: GETALL,
        payload: data,
      });
    })
    .catch((err) => console.log(err));
};

// getting specific blogs tagwise
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

// passing props to single page blog
export const singleBlog = (el, dispatch) => {
  dispatch({ type: SINGLEBLOG, payload: el });
};

