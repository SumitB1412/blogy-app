import { legacy_createStore as createStore, combineReducers } from "redux";
import { authReducer } from "./Auth/authReducer";
import { blogReducer } from "./Blogs/blogReducer";
import { commentsReducer } from "./comments/commentReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  blogs: blogReducer,
  comments: commentsReducer
});

const store = createStore(rootReducer);

export { store };
