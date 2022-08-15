import {
    legacy_createStore as createStore, combineReducers
} from "redux";
import { authReducer } from "./Auth/authReducer";

const rootReducer = combineReducers({
    auth: authReducer
});

const store = createStore(rootReducer);


export { store };
