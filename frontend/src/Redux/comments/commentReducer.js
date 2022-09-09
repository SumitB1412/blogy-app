import { GETCOMMENTS } from "./actions";

const initState = {
  comments: [],
};

export const commentsReducer = (state = initState, { type, payload }) => {
  switch (type) {
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
