import { 
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    GET_POST_DETAILS,
    GET_POST_DETAILS_SUCCESS,
    GET_POST_DETAILS_FAIL, 
} from "./actionTypes";

const initialstate = {
    posts: [],
    post: {},
    loadingPosts: false,
    lodingPostDetails: false,
    error: {
        message: "",
    },
};

export default function PostReducer(state = initialstate, action){
    switch (action.type) {
        case GET_POSTS:
            state = { ...state, loadingPosts: true };
            break;
        case GET_POSTS_SUCCESS:
            state = { ...state, posts: action.payload, loadingPosts: false};
            break;
        case GET_POSTS_FAIL:
            state = { ...state, error: {message: "Error"}, loadingPosts: false};
            break;
        case GET_POST_DETAILS:
            state = { ...state, loadingPosts: true};
            break;
        case GET_POST_DETAILS_SUCCESS:
            state = { ...state, post: action.payload[0], loadingPosts: false};
            break;
        case GET_POST_DETAILS_FAIL:
            state = { ...state, error: {message: "Error"}, loadingPosts: false};
            break;
        default: state = { ...state };
        break;
    }
    return state;
}
