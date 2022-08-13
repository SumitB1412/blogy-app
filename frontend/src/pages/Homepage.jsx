import React from "react";
import { Posts } from "../components/Posts";
import Carousels from "../components/Carousel";

export const Homepage = () => {
  return (
    <div>
      <Carousels />
      <Posts type={"Latest Posts"} />
      <Posts type={"All Posts"}/>
    </div>
  );
};
