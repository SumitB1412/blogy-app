import { GETALL, GETSPECIFIC } from "./actions";

const initState = {
  blogs: [],
  specific: [],
};

export const blogReducer = (state = initState, { type, payload }) => {
  return state;
};
