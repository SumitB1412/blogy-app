import { GETALL, GETSPECIFIC, SINGLEBLOG } from "./actions";

const initState = {
  blogs: [],
  specific: [],
  singleBlog: {},
};

export const blogReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GETALL: {
      return {
        ...initState,
        blogs: payload,
      };
    }
    case GETSPECIFIC: {
      return {
        ...initState,
        specific: payload,
      };
    }
    case SINGLEBLOG: {
      return {
        ...initState,
        singleBlog: payload,
      };
    }
    default: {
      return state;
    }
  }
};
