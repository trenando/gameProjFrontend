import { combineReducers, createStore, applyMiddleware } from "redux";
import { profileReducer } from "./reducers/profileReducers/profileReducer";
import thunkMiddleware from "redux-thunk";
import { authReducer } from "./reducers/authReducers/authReducer";
import { registerReducer } from "./reducers/authReducers/registerReducer";
import { logoutReducer } from "./reducers/authReducers/logoutReducer";
import { postsListReducer } from "./reducers/postsReducers/postsListReducer";


const reducers = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    register: registerReducer,
    logout: logoutReducer,
    postsList: postsListReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));