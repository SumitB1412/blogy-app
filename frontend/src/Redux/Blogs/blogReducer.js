import { GETALL, GETSPECIFIC } from "./actions";

const initState = {
  blogs: [],
  specific: [],
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
    default: {
      return state;
    }
  }
};
