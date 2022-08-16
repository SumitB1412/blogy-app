import { legacy_createStore as createStore, combineReducers } from "redux";
import { authReducer } from "./Auth/authReducer";
import { blogReducer } from "./Blogs/blogReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  blogs: blogReducer,
});

const store = createStore(rootReducer);

export { store };
