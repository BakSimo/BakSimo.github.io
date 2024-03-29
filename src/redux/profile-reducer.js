const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    posts: [
        { id: 1, message: "Hello World!", likeCount: 17 },
        { id: 2, message: "Hi, how are you!", likeCount: 32 },
    ],
    newPostText: "",
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
        };
        default:
            return state;
    }
} 


export const addPostAC = () => ({type: ADD_POST });   
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextAC = (text) => { 
    return { type: UPDATE_NEW_POST_TEXT, newText: text,};
};

export default profileReducer;