import { GETALL, GETSPECIFIC, SINGLEBLOG, GETCOMMENTS } from "./actions";

const initState = {
  blogs: [],
  specific: [],
  singleBlog: {},
  comments: [],
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
    case GETCOMMENTS: {
      return {
        ...initState,
        comments: payload,
      };
    }
    default: {
      return state;
    }
  }
};
