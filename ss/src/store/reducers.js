import { combineReducers } from "redux";

import PostReducer from "./posts/PostReducer";

const rootReducer = combineReducers({
    PostReducer,
});

export default rootReducer;