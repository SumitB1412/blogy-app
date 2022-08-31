import axios from "axios";
export const GETALL = "GETALL";
export const GETSPECIFIC = "GETSPECIFIC";
export const POSTBLOG = "POSTBLOG";

export const postBlog = (token, userId,userName, form) => {
  axios
    .post(`http://localhost:8000/blogs/${userName}/${userId}/new-blog`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.ḷog(err));
  // navigate("/");
};

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
