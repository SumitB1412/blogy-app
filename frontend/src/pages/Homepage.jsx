/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Posts } from "../components/Posts";
import Carousels from "../components/Carousel";
import { useEffect } from "react";
import { getAllBlogs } from "../Redux/Blogs/actions";
import { useDispatch } from "react-redux";

export const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllBlogs(dispatch);
  }, []);
  return (
    <div>
      <Carousels />
      {/* <Posts type={"Latest Posts"} /> */}
      <Posts type={"All Posts"} />
    </div>
  );
};
